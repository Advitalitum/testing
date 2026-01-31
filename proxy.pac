function FindProxyForURL(url, host) {
  const domains = ['twitter.com', 'twimg.com', 't.co', 'x.com'];

  const useProxy = domains.some(element => {
    return dnsDomainIs(host, element) || dnsDomainIs(host, "." + element)
  });

  if (useProxy) {
    alert("zaparil_proxy");
	  return "HTTPS localhost:18080;HTTP localhost:18080;SOCKS5 localhost:18080;PROXY localhost:18080;DIRECT";
  }

  alert("zaparil_direct");  
  return "DIRECT";
}

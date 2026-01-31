function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, ".x.com") || dnsDomainIs(host, "x.com")) {
	    alert("zaparil_proxy");
	return "HTTPS localhost:18080;HTTP localhost:18080;SOCKS5 localhost:18080;PROXY localhost:18080;DIRECT";
  }

  alert("zaparil_direct");  
  return "DIRECT";
}

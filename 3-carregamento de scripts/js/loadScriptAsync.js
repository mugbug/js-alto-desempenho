function lazyLoadLib(url, callback) {
  var script = window.document.createElement("script");
  script.type = "text/javascript";
  script.onload = () => {
    return callback(true);
  }
  script.src = url;
  window.document.getElementsByTagName("body")[0].appendChild(script);
}

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const url = require('./url.js');

function isSentryRequestUrl(url, client) {
  const dsn = client?.getDsn();
  const tunnel = client?.getOptions().tunnel;
  return checkDsn(url, dsn) || checkTunnel(url, tunnel);
}
function checkTunnel(url, tunnel) {
  if (!tunnel) {
    return false;
  }
  return removeTrailingSlash(url) === removeTrailingSlash(tunnel);
}
function checkDsn(url$1, dsn) {
  const urlParts = url.parseStringToURLObject(url$1);
  if (!urlParts || url.isURLObjectRelative(urlParts)) {
    return false;
  }
  if (!dsn) {
    return false;
  }
  return hostnameMatchesDsnHost(urlParts.hostname, dsn.host) && /(^|&|\?)sentry_key=/.test(urlParts.search);
}
function hostnameMatchesDsnHost(hostname, dsnHost) {
  return hostname === dsnHost || dsnHost.length > 0 && hostname.endsWith(`.${dsnHost}`);
}
function removeTrailingSlash(str) {
  return str[str.length - 1] === "/" ? str.slice(0, -1) : str;
}

exports.isSentryRequestUrl = isSentryRequestUrl;
//# sourceMappingURL=isSentryRequestUrl.js.map

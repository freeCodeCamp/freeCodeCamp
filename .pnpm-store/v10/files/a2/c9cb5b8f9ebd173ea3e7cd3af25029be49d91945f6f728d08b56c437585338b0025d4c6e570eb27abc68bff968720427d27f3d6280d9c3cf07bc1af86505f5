Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const dsn = require('./utils/dsn.js');

const SENTRY_API_VERSION = "7";
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
  const port = dsn.port ? `:${dsn.port}` : "";
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
function _getIngestEndpoint(dsn) {
  return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
function _encodedAuth(dsn, sdkInfo) {
  const params = {
    sentry_version: SENTRY_API_VERSION
  };
  if (dsn.publicKey) {
    params.sentry_key = dsn.publicKey;
  }
  if (sdkInfo) {
    params.sentry_client = `${sdkInfo.name}/${sdkInfo.version}`;
  }
  return new URLSearchParams(params).toString();
}
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel, sdkInfo) {
  return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}
function getReportDialogEndpoint(dsnLike, dialogOptions) {
  const dsn$1 = dsn.makeDsn(dsnLike);
  if (!dsn$1) {
    return "";
  }
  const endpoint = `${getBaseApiEndpoint(dsn$1)}embed/error-page/`;
  let encodedOptions = `dsn=${dsn.dsnToString(dsn$1)}`;
  for (const key in dialogOptions) {
    if (key === "dsn") {
      continue;
    }
    if (key === "onClose") {
      continue;
    }
    if (key === "user") {
      const user = dialogOptions.user;
      if (!user) {
        continue;
      }
      if (user.name) {
        encodedOptions += `&name=${encodeURIComponent(user.name)}`;
      }
      if (user.email) {
        encodedOptions += `&email=${encodeURIComponent(user.email)}`;
      }
    } else {
      encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key])}`;
    }
  }
  return `${endpoint}?${encodedOptions}`;
}

exports.SENTRY_API_VERSION = SENTRY_API_VERSION;
exports.getEnvelopeEndpointWithUrlEncodedAuth = getEnvelopeEndpointWithUrlEncodedAuth;
exports.getReportDialogEndpoint = getReportDialogEndpoint;
//# sourceMappingURL=api.js.map

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const sessionToSessionData = /* @__PURE__ */ new Map();
const statelessSessionData = /* @__PURE__ */ new WeakMap();
function getSessionData(transport) {
  const sessionId = transport.sessionId;
  if (sessionId) {
    return sessionToSessionData.get(sessionId);
  }
  return statelessSessionData.get(transport);
}
function setSessionData(transport, data) {
  const sessionId = transport.sessionId;
  if (sessionId) {
    sessionToSessionData.set(sessionId, data);
  } else {
    statelessSessionData.set(transport, data);
  }
}
function storeSessionDataForTransport(transport, sessionData) {
  setSessionData(transport, sessionData);
}
function updateSessionDataForTransport(transport, partialSessionData) {
  const existingData = getSessionData(transport) || {};
  setSessionData(transport, { ...existingData, ...partialSessionData });
}
function getClientInfoForTransport(transport) {
  return getSessionData(transport)?.clientInfo;
}
function getProtocolVersionForTransport(transport) {
  return getSessionData(transport)?.protocolVersion;
}
function getSessionDataForTransport(transport) {
  return getSessionData(transport);
}
function cleanupSessionDataForTransport(transport) {
  const sessionId = transport.sessionId;
  if (sessionId) {
    sessionToSessionData.delete(sessionId);
  }
}

exports.cleanupSessionDataForTransport = cleanupSessionDataForTransport;
exports.getClientInfoForTransport = getClientInfoForTransport;
exports.getProtocolVersionForTransport = getProtocolVersionForTransport;
exports.getSessionDataForTransport = getSessionDataForTransport;
exports.storeSessionDataForTransport = storeSessionDataForTransport;
exports.updateSessionDataForTransport = updateSessionDataForTransport;
//# sourceMappingURL=sessionManagement.js.map

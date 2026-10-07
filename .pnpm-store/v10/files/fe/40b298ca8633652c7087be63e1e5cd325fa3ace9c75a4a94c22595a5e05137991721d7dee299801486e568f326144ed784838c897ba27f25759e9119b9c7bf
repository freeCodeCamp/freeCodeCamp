Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const attributes = require('./attributes.js');
const sessionManagement = require('./sessionManagement.js');
const validation = require('./validation.js');

function extractPartyInfo(obj) {
  const partyInfo = {};
  if (validation.isValidContentItem(obj)) {
    if (typeof obj.name === "string") {
      partyInfo.name = obj.name;
    }
    if (typeof obj.title === "string") {
      partyInfo.title = obj.title;
    }
    if (typeof obj.version === "string") {
      partyInfo.version = obj.version;
    }
  }
  return partyInfo;
}
function extractSessionDataFromInitializeRequest(request) {
  const sessionData = {};
  if (validation.isValidContentItem(request.params)) {
    if (typeof request.params.protocolVersion === "string") {
      sessionData.protocolVersion = request.params.protocolVersion;
    }
    if (request.params.clientInfo) {
      sessionData.clientInfo = extractPartyInfo(request.params.clientInfo);
    }
  }
  return sessionData;
}
function extractSessionDataFromInitializeResponse(result) {
  const sessionData = {};
  if (validation.isValidContentItem(result)) {
    if (typeof result.protocolVersion === "string") {
      sessionData.protocolVersion = result.protocolVersion;
    }
    if (result.serverInfo) {
      sessionData.serverInfo = extractPartyInfo(result.serverInfo);
    }
  }
  return sessionData;
}
function getClientAttributes(transport) {
  const clientInfo = sessionManagement.getClientInfoForTransport(transport);
  const attributes = {};
  if (clientInfo?.name) {
    attributes["mcp.client.name"] = clientInfo.name;
  }
  if (clientInfo?.title) {
    attributes["mcp.client.title"] = clientInfo.title;
  }
  if (clientInfo?.version) {
    attributes["mcp.client.version"] = clientInfo.version;
  }
  return attributes;
}
function buildClientAttributesFromInfo(clientInfo) {
  const attributes = {};
  if (clientInfo?.name) {
    attributes["mcp.client.name"] = clientInfo.name;
  }
  if (clientInfo?.title) {
    attributes["mcp.client.title"] = clientInfo.title;
  }
  if (clientInfo?.version) {
    attributes["mcp.client.version"] = clientInfo.version;
  }
  return attributes;
}
function getServerAttributes(transport) {
  const serverInfo = sessionManagement.getSessionDataForTransport(transport)?.serverInfo;
  const attributes$1 = {};
  if (serverInfo?.name) {
    attributes$1[attributes.MCP_SERVER_NAME_ATTRIBUTE] = serverInfo.name;
  }
  if (serverInfo?.title) {
    attributes$1[attributes.MCP_SERVER_TITLE_ATTRIBUTE] = serverInfo.title;
  }
  if (serverInfo?.version) {
    attributes$1[attributes.MCP_SERVER_VERSION_ATTRIBUTE] = serverInfo.version;
  }
  return attributes$1;
}
function buildServerAttributesFromInfo(serverInfo) {
  const attributes$1 = {};
  if (serverInfo?.name) {
    attributes$1[attributes.MCP_SERVER_NAME_ATTRIBUTE] = serverInfo.name;
  }
  if (serverInfo?.title) {
    attributes$1[attributes.MCP_SERVER_TITLE_ATTRIBUTE] = serverInfo.title;
  }
  if (serverInfo?.version) {
    attributes$1[attributes.MCP_SERVER_VERSION_ATTRIBUTE] = serverInfo.version;
  }
  return attributes$1;
}
function extractClientInfo(extra) {
  return {
    address: extra?.requestInfo?.remoteAddress || extra?.clientAddress || extra?.request?.ip || extra?.request?.connection?.remoteAddress,
    port: extra?.requestInfo?.remotePort || extra?.clientPort || extra?.request?.connection?.remotePort
  };
}
function getTransportTypes(transport) {
  if (!transport?.constructor) {
    return { mcpTransport: "unknown", networkTransport: "unknown" };
  }
  const transportName = typeof transport.constructor?.name === "string" ? transport.constructor.name : "unknown";
  let networkTransport = "unknown";
  const lowerTransportName = transportName.toLowerCase();
  if (lowerTransportName.includes("stdio")) {
    networkTransport = "pipe";
  } else if (lowerTransportName.includes("http") || lowerTransportName.includes("sse")) {
    networkTransport = "tcp";
  }
  return {
    mcpTransport: transportName,
    networkTransport
  };
}
function buildTransportAttributes(transport, extra) {
  const sessionId = transport && "sessionId" in transport ? transport.sessionId : void 0;
  const clientInfo = extra ? extractClientInfo(extra) : {};
  const { mcpTransport, networkTransport } = getTransportTypes(transport);
  const clientAttributes = getClientAttributes(transport);
  const serverAttributes = getServerAttributes(transport);
  const protocolVersion = sessionManagement.getProtocolVersionForTransport(transport);
  const attributes$1 = {
    ...sessionId && { [attributes.MCP_SESSION_ID_ATTRIBUTE]: sessionId },
    ...clientInfo.address && { [attributes.CLIENT_ADDRESS_ATTRIBUTE]: clientInfo.address },
    ...clientInfo.port && { [attributes.CLIENT_PORT_ATTRIBUTE]: clientInfo.port },
    [attributes.MCP_TRANSPORT_ATTRIBUTE]: mcpTransport,
    [attributes.NETWORK_TRANSPORT_ATTRIBUTE]: networkTransport,
    [attributes.NETWORK_PROTOCOL_VERSION_ATTRIBUTE]: "2.0",
    ...protocolVersion && { [attributes.MCP_PROTOCOL_VERSION_ATTRIBUTE]: protocolVersion },
    ...clientAttributes,
    ...serverAttributes
  };
  return attributes$1;
}

exports.buildClientAttributesFromInfo = buildClientAttributesFromInfo;
exports.buildServerAttributesFromInfo = buildServerAttributesFromInfo;
exports.buildTransportAttributes = buildTransportAttributes;
exports.extractClientInfo = extractClientInfo;
exports.extractSessionDataFromInitializeRequest = extractSessionDataFromInitializeRequest;
exports.extractSessionDataFromInitializeResponse = extractSessionDataFromInitializeResponse;
exports.getClientAttributes = getClientAttributes;
exports.getServerAttributes = getServerAttributes;
exports.getTransportTypes = getTransportTypes;
//# sourceMappingURL=sessionExtraction.js.map

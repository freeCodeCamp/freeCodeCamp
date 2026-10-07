import { MCP_PROTOCOL_VERSION_ATTRIBUTE, CLIENT_PORT_ATTRIBUTE, CLIENT_ADDRESS_ATTRIBUTE, MCP_SESSION_ID_ATTRIBUTE, NETWORK_PROTOCOL_VERSION_ATTRIBUTE, NETWORK_TRANSPORT_ATTRIBUTE, MCP_TRANSPORT_ATTRIBUTE, MCP_SERVER_NAME_ATTRIBUTE, MCP_SERVER_TITLE_ATTRIBUTE, MCP_SERVER_VERSION_ATTRIBUTE } from './attributes.js';
import { getProtocolVersionForTransport, getClientInfoForTransport, getSessionDataForTransport } from './sessionManagement.js';
import { isValidContentItem } from './validation.js';

function extractPartyInfo(obj) {
  const partyInfo = {};
  if (isValidContentItem(obj)) {
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
  if (isValidContentItem(request.params)) {
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
  if (isValidContentItem(result)) {
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
  const clientInfo = getClientInfoForTransport(transport);
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
  const serverInfo = getSessionDataForTransport(transport)?.serverInfo;
  const attributes = {};
  if (serverInfo?.name) {
    attributes[MCP_SERVER_NAME_ATTRIBUTE] = serverInfo.name;
  }
  if (serverInfo?.title) {
    attributes[MCP_SERVER_TITLE_ATTRIBUTE] = serverInfo.title;
  }
  if (serverInfo?.version) {
    attributes[MCP_SERVER_VERSION_ATTRIBUTE] = serverInfo.version;
  }
  return attributes;
}
function buildServerAttributesFromInfo(serverInfo) {
  const attributes = {};
  if (serverInfo?.name) {
    attributes[MCP_SERVER_NAME_ATTRIBUTE] = serverInfo.name;
  }
  if (serverInfo?.title) {
    attributes[MCP_SERVER_TITLE_ATTRIBUTE] = serverInfo.title;
  }
  if (serverInfo?.version) {
    attributes[MCP_SERVER_VERSION_ATTRIBUTE] = serverInfo.version;
  }
  return attributes;
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
  const protocolVersion = getProtocolVersionForTransport(transport);
  const attributes = {
    ...sessionId && { [MCP_SESSION_ID_ATTRIBUTE]: sessionId },
    ...clientInfo.address && { [CLIENT_ADDRESS_ATTRIBUTE]: clientInfo.address },
    ...clientInfo.port && { [CLIENT_PORT_ATTRIBUTE]: clientInfo.port },
    [MCP_TRANSPORT_ATTRIBUTE]: mcpTransport,
    [NETWORK_TRANSPORT_ATTRIBUTE]: networkTransport,
    [NETWORK_PROTOCOL_VERSION_ATTRIBUTE]: "2.0",
    ...protocolVersion && { [MCP_PROTOCOL_VERSION_ATTRIBUTE]: protocolVersion },
    ...clientAttributes,
    ...serverAttributes
  };
  return attributes;
}

export { buildClientAttributesFromInfo, buildServerAttributesFromInfo, buildTransportAttributes, extractClientInfo, extractSessionDataFromInitializeRequest, extractSessionDataFromInitializeResponse, getClientAttributes, getServerAttributes, getTransportTypes };
//# sourceMappingURL=sessionExtraction.js.map

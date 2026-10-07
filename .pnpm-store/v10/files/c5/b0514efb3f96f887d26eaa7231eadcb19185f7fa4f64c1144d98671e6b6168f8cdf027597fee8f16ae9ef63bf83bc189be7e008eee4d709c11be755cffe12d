import { CLIENT_ADDRESS_ATTRIBUTE, CLIENT_PORT_ATTRIBUTE, MCP_RESOURCE_URI_ATTRIBUTE } from './attributes.js';

const NETWORK_PII_ATTRIBUTES = /* @__PURE__ */ new Set([CLIENT_ADDRESS_ATTRIBUTE, CLIENT_PORT_ATTRIBUTE, MCP_RESOURCE_URI_ATTRIBUTE]);
function isNetworkPiiAttribute(key) {
  return NETWORK_PII_ATTRIBUTES.has(key);
}
function filterMcpPiiFromSpanData(spanData, sendDefaultPii) {
  if (sendDefaultPii) {
    return spanData;
  }
  return Object.entries(spanData).reduce(
    (acc, [key, value]) => {
      if (!isNetworkPiiAttribute(key)) {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );
}

export { filterMcpPiiFromSpanData };
//# sourceMappingURL=piiFiltering.js.map

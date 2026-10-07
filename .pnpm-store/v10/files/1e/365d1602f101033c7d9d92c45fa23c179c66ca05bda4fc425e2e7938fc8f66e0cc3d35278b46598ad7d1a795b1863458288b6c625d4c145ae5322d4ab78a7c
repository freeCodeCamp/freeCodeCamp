Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const attributes = require('./attributes.js');

const NETWORK_PII_ATTRIBUTES = /* @__PURE__ */ new Set([attributes.CLIENT_ADDRESS_ATTRIBUTE, attributes.CLIENT_PORT_ATTRIBUTE, attributes.MCP_RESOURCE_URI_ATTRIBUTE]);
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

exports.filterMcpPiiFromSpanData = filterMcpPiiFromSpanData;
//# sourceMappingURL=piiFiltering.js.map

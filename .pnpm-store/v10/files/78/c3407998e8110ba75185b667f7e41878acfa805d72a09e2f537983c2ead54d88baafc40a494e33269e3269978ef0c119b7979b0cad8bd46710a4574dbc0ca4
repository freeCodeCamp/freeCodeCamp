Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

function addUserAgentToTransportHeaders(options) {
  const sdkMetadata = options._metadata?.sdk;
  const sdkUserAgent = sdkMetadata?.name && sdkMetadata?.version ? `${sdkMetadata?.name}/${sdkMetadata?.version}` : void 0;
  options.transportOptions = {
    ...options.transportOptions,
    headers: {
      ...sdkUserAgent && { "user-agent": sdkUserAgent },
      ...options.transportOptions?.headers
    }
  };
}

exports.addUserAgentToTransportHeaders = addUserAgentToTransportHeaders;
//# sourceMappingURL=userAgent.js.map

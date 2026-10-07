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

export { addUserAgentToTransportHeaders };
//# sourceMappingURL=userAgent.js.map

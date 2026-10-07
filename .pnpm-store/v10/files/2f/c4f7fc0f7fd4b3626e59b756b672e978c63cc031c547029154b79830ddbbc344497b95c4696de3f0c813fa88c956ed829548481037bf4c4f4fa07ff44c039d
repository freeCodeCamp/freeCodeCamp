Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const filteringSnippets = require('./filtering-snippets.js');

function defaultPiiToCollectionOptions(sendDefaultPii) {
  return sendDefaultPii === true ? {
    userInfo: true,
    cookies: true,
    httpHeaders: { request: true, response: true },
    httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
    queryParams: true,
    genAI: { inputs: true, outputs: true },
    stackFrameVariables: true,
    frameContextLines: 5
  } : {
    userInfo: false,
    cookies: { deny: filteringSnippets.PII_HEADER_SNIPPETS },
    httpHeaders: { request: { deny: filteringSnippets.PII_HEADER_SNIPPETS }, response: { deny: filteringSnippets.PII_HEADER_SNIPPETS } },
    httpBodies: [],
    queryParams: { deny: filteringSnippets.PII_HEADER_SNIPPETS },
    genAI: { inputs: false, outputs: false },
    stackFrameVariables: true,
    frameContextLines: 5
  };
}

exports.defaultPiiToCollectionOptions = defaultPiiToCollectionOptions;
//# sourceMappingURL=defaultPiiToCollectionOptions.js.map

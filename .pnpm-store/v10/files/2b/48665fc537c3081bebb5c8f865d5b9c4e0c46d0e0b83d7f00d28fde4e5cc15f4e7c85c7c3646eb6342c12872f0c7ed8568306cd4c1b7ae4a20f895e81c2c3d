import { defaultPiiToCollectionOptions } from './defaultPiiToCollectionOptions.js';

const DEFAULTS = {
  userInfo: false,
  cookies: true,
  httpHeaders: { request: true, response: true },
  httpBodies: [],
  queryParams: true,
  genAI: { inputs: true, outputs: true },
  stackFrameVariables: true,
  frameContextLines: 5
};
function resolveDataCollectionOptions(options) {
  const base = options.dataCollection != null ? DEFAULTS : defaultPiiToCollectionOptions(options.sendDefaultPii);
  const dc = options.dataCollection ?? {};
  return {
    userInfo: dc.userInfo ?? base.userInfo,
    cookies: dc.cookies ?? base.cookies,
    httpHeaders: {
      request: dc.httpHeaders?.request ?? base.httpHeaders.request,
      response: dc.httpHeaders?.response ?? base.httpHeaders.response
    },
    httpBodies: dc.httpBodies ?? base.httpBodies,
    queryParams: dc.queryParams ?? base.queryParams,
    genAI: {
      inputs: dc.genAI?.inputs ?? base.genAI.inputs,
      outputs: dc.genAI?.outputs ?? base.genAI.outputs
    },
    stackFrameVariables: dc.stackFrameVariables ?? base.stackFrameVariables,
    frameContextLines: dc.frameContextLines ?? base.frameContextLines
  };
}

export { resolveDataCollectionOptions };
//# sourceMappingURL=resolveDataCollectionOptions.js.map

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var executeHandlers_exports = {};
__export(executeHandlers_exports, {
  executeHandlers: () => executeHandlers
});
module.exports = __toCommonJS(executeHandlers_exports);
var import_RequestHandler = require("../handlers/RequestHandler");
const executeHandlers = async ({
  request,
  requestId,
  handlers,
  resolutionContext
}) => {
  let matchingHandler = null;
  let result = null;
  for (const handler of handlers) {
    result = await handler.run({ request, requestId, resolutionContext });
    if (result !== null) {
      matchingHandler = handler;
    }
    if (result?.response) {
      break;
    }
  }
  if (matchingHandler) {
    return {
      handler: matchingHandler,
      parsedResult: result?.parsedResult,
      response: result?.response
    };
  }
  return null;
};
//# sourceMappingURL=executeHandlers.js.map
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
var storeResponseCookies_exports = {};
__export(storeResponseCookies_exports, {
  storeResponseCookies: () => storeResponseCookies
});
module.exports = __toCommonJS(storeResponseCookies_exports);
var import_cookieStore = require("../cookieStore");
var import_decorators = require("../HttpResponse/decorators");
async function storeResponseCookies(request, response) {
  const responseCookies = (0, import_decorators.getRawSetCookie)(response);
  if (responseCookies) {
    await import_cookieStore.cookieStore.setCookie(responseCookies, request.url);
  }
}
//# sourceMappingURL=storeResponseCookies.js.map
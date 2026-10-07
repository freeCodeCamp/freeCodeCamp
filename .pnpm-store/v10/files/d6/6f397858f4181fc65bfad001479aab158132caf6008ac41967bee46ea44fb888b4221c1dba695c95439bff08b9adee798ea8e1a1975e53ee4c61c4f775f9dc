var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  deserializerMiddleware: () => deserializerMiddleware,
  deserializerMiddlewareOption: () => deserializerMiddlewareOption,
  getSerdePlugin: () => getSerdePlugin,
  serializerMiddleware: () => serializerMiddleware,
  serializerMiddlewareOption: () => serializerMiddlewareOption
});
module.exports = __toCommonJS(src_exports);

// src/deserializerMiddleware.ts
var deserializerMiddleware = /* @__PURE__ */ __name((options, deserializer) => (next, context) => async (args) => {
  const { response } = await next(args);
  try {
    const parsed = await deserializer(response, options);
    return {
      response,
      output: parsed
    };
  } catch (error) {
    Object.defineProperty(error, "$response", {
      value: response
    });
    if (!("$metadata" in error)) {
      const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
      error.message += "\n  " + hint;
      if (typeof error.$responseBodyText !== "undefined") {
        if (error.$response) {
          error.$response.body = error.$responseBodyText;
        }
      }
    }
    throw error;
  }
}, "deserializerMiddleware");

// src/serializerMiddleware.ts
var serializerMiddleware = /* @__PURE__ */ __name((options, serializer) => (next, context) => async (args) => {
  var _a;
  const endpoint = ((_a = context.endpointV2) == null ? void 0 : _a.url) && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
  if (!endpoint) {
    throw new Error("No valid endpoint provider available.");
  }
  const request = await serializer(args.input, { ...options, endpoint });
  return next({
    ...args,
    request
  });
}, "serializerMiddleware");

// src/serdePlugin.ts
var deserializerMiddlewareOption = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: true
};
var serializerMiddlewareOption = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true
};
function getSerdePlugin(config, serializer, deserializer) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
    }
  };
}
__name(getSerdePlugin, "getSerdePlugin");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  deserializerMiddleware,
  deserializerMiddlewareOption,
  serializerMiddlewareOption,
  getSerdePlugin,
  serializerMiddleware
});


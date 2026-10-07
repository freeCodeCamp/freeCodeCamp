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
  CredentialsProviderError: () => CredentialsProviderError,
  ProviderError: () => ProviderError,
  TokenProviderError: () => TokenProviderError,
  chain: () => chain,
  fromStatic: () => fromStatic,
  memoize: () => memoize
});
module.exports = __toCommonJS(src_exports);

// src/ProviderError.ts
var _ProviderError = class _ProviderError extends Error {
  constructor(message, tryNextLink = true) {
    super(message);
    this.tryNextLink = tryNextLink;
    this.name = "ProviderError";
    Object.setPrototypeOf(this, _ProviderError.prototype);
  }
  static from(error, tryNextLink = true) {
    return Object.assign(new this(error.message, tryNextLink), error);
  }
};
__name(_ProviderError, "ProviderError");
var ProviderError = _ProviderError;

// src/CredentialsProviderError.ts
var _CredentialsProviderError = class _CredentialsProviderError extends ProviderError {
  constructor(message, tryNextLink = true) {
    super(message, tryNextLink);
    this.tryNextLink = tryNextLink;
    this.name = "CredentialsProviderError";
    Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
  }
};
__name(_CredentialsProviderError, "CredentialsProviderError");
var CredentialsProviderError = _CredentialsProviderError;

// src/TokenProviderError.ts
var _TokenProviderError = class _TokenProviderError extends ProviderError {
  constructor(message, tryNextLink = true) {
    super(message, tryNextLink);
    this.tryNextLink = tryNextLink;
    this.name = "TokenProviderError";
    Object.setPrototypeOf(this, _TokenProviderError.prototype);
  }
};
__name(_TokenProviderError, "TokenProviderError");
var TokenProviderError = _TokenProviderError;

// src/chain.ts
var chain = /* @__PURE__ */ __name((...providers) => async () => {
  if (providers.length === 0) {
    throw new ProviderError("No providers in chain");
  }
  let lastProviderError;
  for (const provider of providers) {
    try {
      const credentials = await provider();
      return credentials;
    } catch (err) {
      lastProviderError = err;
      if (err == null ? void 0 : err.tryNextLink) {
        continue;
      }
      throw err;
    }
  }
  throw lastProviderError;
}, "chain");

// src/fromStatic.ts
var fromStatic = /* @__PURE__ */ __name((staticValue) => () => Promise.resolve(staticValue), "fromStatic");

// src/memoize.ts
var memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async () => {
    if (!pending) {
      pending = provider();
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
        resolved = await coalesceProvider();
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
      resolved = await coalesceProvider();
    }
    if (isConstant) {
      return resolved;
    }
    if (requiresRefresh && !requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider();
      return resolved;
    }
    return resolved;
  };
}, "memoize");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  CredentialsProviderError,
  ProviderError,
  TokenProviderError,
  chain,
  fromStatic,
  memoize
});


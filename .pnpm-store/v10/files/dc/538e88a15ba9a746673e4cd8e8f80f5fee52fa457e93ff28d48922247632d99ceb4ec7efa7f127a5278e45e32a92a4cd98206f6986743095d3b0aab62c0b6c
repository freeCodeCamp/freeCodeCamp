"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduceWithContext = exports.proto = exports.prefixed = exports.isUnsupported = exports.isSourceUnavailable = exports.isOr = exports.isMissingDataOnly = exports.isMissingData = exports.isInvalidData = exports.isConfigError = exports.isAnd = exports.Unsupported = exports.SourceUnavailable = exports.Or = exports.MissingData = exports.InvalidData = exports.ConfigErrorTypeId = exports.And = void 0;
var RA = _interopRequireWildcard(require("../Array.js"));
var Either = _interopRequireWildcard(require("../Either.js"));
var _Function = require("../Function.js");
var _Predicate = require("../Predicate.js");
var OpCodes = _interopRequireWildcard(require("./opCodes/configError.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ConfigErrorSymbolKey = "effect/ConfigError";
/** @internal */
const ConfigErrorTypeId = exports.ConfigErrorTypeId = /*#__PURE__*/Symbol.for(ConfigErrorSymbolKey);
/** @internal */
const proto = exports.proto = {
  _tag: "ConfigError",
  [ConfigErrorTypeId]: ConfigErrorTypeId
};
/** @internal */
const And = (self, that) => {
  const error = Object.create(proto);
  error._op = OpCodes.OP_AND;
  error.left = self;
  error.right = that;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      return `${this.left} and ${this.right}`;
    }
  });
  Object.defineProperty(error, "message", {
    enumerable: false,
    get() {
      return this.toString();
    }
  });
  return error;
};
/** @internal */
exports.And = And;
const Or = (self, that) => {
  const error = Object.create(proto);
  error._op = OpCodes.OP_OR;
  error.left = self;
  error.right = that;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      return `${this.left} or ${this.right}`;
    }
  });
  Object.defineProperty(error, "message", {
    enumerable: false,
    get() {
      return this.toString();
    }
  });
  return error;
};
/** @internal */
exports.Or = Or;
const InvalidData = (path, message, options = {
  pathDelim: "."
}) => {
  const error = Object.create(proto);
  error._op = OpCodes.OP_INVALID_DATA;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path = (0, _Function.pipe)(this.path, RA.join(options.pathDelim));
      return `(Invalid data at ${path}: "${this.message}")`;
    }
  });
  return error;
};
/** @internal */
exports.InvalidData = InvalidData;
const MissingData = (path, message, options = {
  pathDelim: "."
}) => {
  const error = Object.create(proto);
  error._op = OpCodes.OP_MISSING_DATA;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path = (0, _Function.pipe)(this.path, RA.join(options.pathDelim));
      return `(Missing data at ${path}: "${this.message}")`;
    }
  });
  return error;
};
/** @internal */
exports.MissingData = MissingData;
const SourceUnavailable = (path, message, cause, options = {
  pathDelim: "."
}) => {
  const error = Object.create(proto);
  error._op = OpCodes.OP_SOURCE_UNAVAILABLE;
  error.path = path;
  error.message = message;
  error.cause = cause;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path = (0, _Function.pipe)(this.path, RA.join(options.pathDelim));
      return `(Source unavailable at ${path}: "${this.message}")`;
    }
  });
  return error;
};
/** @internal */
exports.SourceUnavailable = SourceUnavailable;
const Unsupported = (path, message, options = {
  pathDelim: "."
}) => {
  const error = Object.create(proto);
  error._op = OpCodes.OP_UNSUPPORTED;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path = (0, _Function.pipe)(this.path, RA.join(options.pathDelim));
      return `(Unsupported operation at ${path}: "${this.message}")`;
    }
  });
  return error;
};
/** @internal */
exports.Unsupported = Unsupported;
const isConfigError = u => (0, _Predicate.hasProperty)(u, ConfigErrorTypeId);
/** @internal */
exports.isConfigError = isConfigError;
const isAnd = self => self._op === OpCodes.OP_AND;
/** @internal */
exports.isAnd = isAnd;
const isOr = self => self._op === OpCodes.OP_OR;
/** @internal */
exports.isOr = isOr;
const isInvalidData = self => self._op === OpCodes.OP_INVALID_DATA;
/** @internal */
exports.isInvalidData = isInvalidData;
const isMissingData = self => self._op === OpCodes.OP_MISSING_DATA;
/** @internal */
exports.isMissingData = isMissingData;
const isSourceUnavailable = self => self._op === OpCodes.OP_SOURCE_UNAVAILABLE;
/** @internal */
exports.isSourceUnavailable = isSourceUnavailable;
const isUnsupported = self => self._op === OpCodes.OP_UNSUPPORTED;
/** @internal */
exports.isUnsupported = isUnsupported;
const prefixed = exports.prefixed = /*#__PURE__*/(0, _Function.dual)(2, (self, prefix) => {
  switch (self._op) {
    case OpCodes.OP_AND:
      {
        return And(prefixed(self.left, prefix), prefixed(self.right, prefix));
      }
    case OpCodes.OP_OR:
      {
        return Or(prefixed(self.left, prefix), prefixed(self.right, prefix));
      }
    case OpCodes.OP_INVALID_DATA:
      {
        return InvalidData([...prefix, ...self.path], self.message);
      }
    case OpCodes.OP_MISSING_DATA:
      {
        return MissingData([...prefix, ...self.path], self.message);
      }
    case OpCodes.OP_SOURCE_UNAVAILABLE:
      {
        return SourceUnavailable([...prefix, ...self.path], self.message, self.cause);
      }
    case OpCodes.OP_UNSUPPORTED:
      {
        return Unsupported([...prefix, ...self.path], self.message);
      }
  }
});
/** @internal */
const IsMissingDataOnlyReducer = {
  andCase: (_, left, right) => left && right,
  orCase: (_, left, right) => left && right,
  invalidDataCase: _Function.constFalse,
  missingDataCase: _Function.constTrue,
  sourceUnavailableCase: _Function.constFalse,
  unsupportedCase: _Function.constFalse
};
/** @internal */
const reduceWithContext = exports.reduceWithContext = /*#__PURE__*/(0, _Function.dual)(3, (self, context, reducer) => {
  const input = [self];
  const output = [];
  while (input.length > 0) {
    const error = input.pop();
    switch (error._op) {
      case OpCodes.OP_AND:
        {
          input.push(error.right);
          input.push(error.left);
          output.push(Either.left({
            _op: "AndCase"
          }));
          break;
        }
      case OpCodes.OP_OR:
        {
          input.push(error.right);
          input.push(error.left);
          output.push(Either.left({
            _op: "OrCase"
          }));
          break;
        }
      case OpCodes.OP_INVALID_DATA:
        {
          output.push(Either.right(reducer.invalidDataCase(context, error.path, error.message)));
          break;
        }
      case OpCodes.OP_MISSING_DATA:
        {
          output.push(Either.right(reducer.missingDataCase(context, error.path, error.message)));
          break;
        }
      case OpCodes.OP_SOURCE_UNAVAILABLE:
        {
          output.push(Either.right(reducer.sourceUnavailableCase(context, error.path, error.message, error.cause)));
          break;
        }
      case OpCodes.OP_UNSUPPORTED:
        {
          output.push(Either.right(reducer.unsupportedCase(context, error.path, error.message)));
          break;
        }
    }
  }
  const accumulator = [];
  while (output.length > 0) {
    const either = output.pop();
    switch (either._op) {
      case "Left":
        {
          switch (either.left._op) {
            case "AndCase":
              {
                const left = accumulator.pop();
                const right = accumulator.pop();
                const value = reducer.andCase(context, left, right);
                accumulator.push(value);
                break;
              }
            case "OrCase":
              {
                const left = accumulator.pop();
                const right = accumulator.pop();
                const value = reducer.orCase(context, left, right);
                accumulator.push(value);
                break;
              }
          }
          break;
        }
      case "Right":
        {
          accumulator.push(either.right);
          break;
        }
    }
  }
  if (accumulator.length === 0) {
    throw new Error("BUG: ConfigError.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  return accumulator.pop();
});
/** @internal */
const isMissingDataOnly = self => reduceWithContext(self, void 0, IsMissingDataOnlyReducer);
exports.isMissingDataOnly = isMissingDataOnly;
//# sourceMappingURL=configError.js.map
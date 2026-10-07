"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyDecs2305;
var _checkInRHS = require("./checkInRHS.js");
var _setFunctionName = require("./setFunctionName.js");
var _toPropertyKey = require("./toPropertyKey.js");
function applyDecs2305(targetClass, memberDecs, classDecs, classDecsHaveThis, instanceBrand, parentClass) {
  function _bindPropCall(obj, name, before) {
    return function (_this, value) {
      if (before) {
        before(_this);
      }
      return obj[name].call(_this, value);
    };
  }
  function runInitializers(initializers, value) {
    for (var i = 0; i < initializers.length; i++) {
      initializers[i].call(value);
    }
    return value;
  }
  function assertCallable(fn, hint1, hint2, throwUndefined) {
    if (typeof fn !== "function") {
      if (throwUndefined || fn !== void 0) {
        throw new TypeError(hint1 + " must " + (hint2 || "be") + " a function" + (throwUndefined ? "" : " or undefined"));
      }
    }
    return fn;
  }
  function applyDec(Class, decInfo, decoratorsHaveThis, name, kind, metadata, initializers, ret, isStatic, isPrivate, isField, isAccessor, hasPrivateBrand) {
    function assertInstanceIfPrivate(target) {
      if (!hasPrivateBrand(target)) {
        throw new TypeError("Attempted to access private element on non-instance");
      }
    }
    var decs = decInfo[0],
      decVal = decInfo[3],
      _,
      isClass = !ret;
    if (!isClass) {
      if (!decoratorsHaveThis && !Array.isArray(decs)) {
        decs = [decs];
      }
      var desc = {},
        init = [],
        key = kind === 3 ? "get" : kind === 4 || isAccessor ? "set" : "value";
      if (isPrivate) {
        if (isField || isAccessor) {
          desc = {
            get: (0, _setFunctionName.default)(function () {
              return decVal(this);
            }, name, "get"),
            set: function (value) {
              decInfo[4](this, value);
            }
          };
        } else {
          desc[key] = decVal;
        }
        if (!isField) {
          (0, _setFunctionName.default)(desc[key], name, kind === 2 ? "" : key);
        }
      } else if (!isField) {
        desc = Object.getOwnPropertyDescriptor(Class, name);
      }
    }
    var newValue = Class;
    for (var i = decs.length - 1; i >= 0; i -= decoratorsHaveThis ? 2 : 1) {
      var dec = decs[i],
        decThis = decoratorsHaveThis ? decs[i - 1] : void 0;
      var decoratorFinishedRef = {};
      var ctx = {
        kind: ["field", "accessor", "method", "getter", "setter", "class"][kind],
        name: name,
        metadata: metadata,
        addInitializer: function (decoratorFinishedRef, initializer) {
          if (decoratorFinishedRef.v) {
            throw new Error("attempted to call addInitializer after decoration was finished");
          }
          assertCallable(initializer, "An initializer", "be", true);
          initializers.push(initializer);
        }.bind(null, decoratorFinishedRef)
      };
      try {
        if (isClass) {
          if (_ = assertCallable(dec.call(decThis, newValue, ctx), "class decorators", "return")) {
            newValue = _;
          }
        } else {
          ctx["static"] = isStatic;
          ctx["private"] = isPrivate;
          var get, set;
          if (!isPrivate) {
            get = function (target) {
              return target[name];
            };
            if (kind < 2 || kind === 4) {
              set = function (target, v) {
                target[name] = v;
              };
            }
          } else if (kind === 2) {
            get = function (_this) {
              assertInstanceIfPrivate(_this);
              return desc.value;
            };
          } else {
            if (kind < 4) {
              get = _bindPropCall(desc, "get", assertInstanceIfPrivate);
            }
            if (kind !== 3) {
              set = _bindPropCall(desc, "set", assertInstanceIfPrivate);
            }
          }
          var access = ctx.access = {
            has: isPrivate ? hasPrivateBrand.bind() : function (target) {
              return name in target;
            }
          };
          if (get) access.get = get;
          if (set) access.set = set;
          newValue = dec.call(decThis, isAccessor ? {
            get: desc.get,
            set: desc.set
          } : desc[key], ctx);
          if (isAccessor) {
            if (typeof newValue === "object" && newValue) {
              if (_ = assertCallable(newValue.get, "accessor.get")) {
                desc.get = _;
              }
              if (_ = assertCallable(newValue.set, "accessor.set")) {
                desc.set = _;
              }
              if (_ = assertCallable(newValue.init, "accessor.init")) {
                init.push(_);
              }
            } else if (newValue !== void 0) {
              throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
            }
          } else if (assertCallable(newValue, (isField ? "field" : "method") + " decorators", "return")) {
            if (isField) {
              init.push(newValue);
            } else {
              desc[key] = newValue;
            }
          }
        }
      } finally {
        decoratorFinishedRef.v = true;
      }
    }
    if (isField || isAccessor) {
      ret.push(function (instance, value) {
        for (var i = init.length - 1; i >= 0; i--) {
          value = init[i].call(instance, value);
        }
        return value;
      });
    }
    if (!isField && !isClass) {
      if (isPrivate) {
        if (isAccessor) {
          ret.push(_bindPropCall(desc, "get"), _bindPropCall(desc, "set"));
        } else {
          ret.push(kind === 2 ? desc[key] : _bindPropCall.call.bind(desc[key]));
        }
      } else {
        Object.defineProperty(Class, name, desc);
      }
    }
    return newValue;
  }
  function applyMemberDecs(Class, decInfos, instanceBrand, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var staticBrand = function (_) {
      return (0, _checkInRHS.default)(_) === Class;
    };
    var existingNonFields = new Map();
    function pushInitializers(initializers) {
      if (initializers) {
        ret.push(runInitializers.bind(null, initializers));
      }
    }
    for (var i = 0; i < decInfos.length; i++) {
      var decInfo = decInfos[i];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var decoratorsHaveThis = kind & 16;
      var isStatic = !!(kind & 8);
      kind &= 7;
      var isField = kind === 0;
      var key = name + "/" + isStatic;
      if (!isField && !isPrivate) {
        var existingKind = existingNonFields.get(key);
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        }
        existingNonFields.set(key, kind > 2 ? kind : true);
      }
      applyDec(isStatic ? Class : Class.prototype, decInfo, decoratorsHaveThis, isPrivate ? "#" + name : (0, _toPropertyKey.default)(name), kind, metadata, isStatic ? staticInitializers = staticInitializers || [] : protoInitializers = protoInitializers || [], ret, isStatic, isPrivate, isField, kind === 1, isStatic && isPrivate ? staticBrand : instanceBrand);
    }
    pushInitializers(protoInitializers);
    pushInitializers(staticInitializers);
    return ret;
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol["for"]("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  if (arguments.length >= 6) {
    var parentMetadata = parentClass[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  }
  var metadata = Object.create(parentMetadata == null ? null : parentMetadata);
  var e = applyMemberDecs(targetClass, memberDecs, instanceBrand, metadata);
  if (!classDecs.length) defineMetadata(targetClass, metadata);
  return {
    e: e,
    get c() {
      var initializers = [];
      return classDecs.length && [defineMetadata(applyDec(targetClass, [classDecs], classDecsHaveThis, targetClass.name, 5, metadata, initializers), metadata), runInitializers.bind(null, initializers, targetClass)];
    }
  };
}

//# sourceMappingURL=applyDecs2305.js.map

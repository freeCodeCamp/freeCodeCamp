"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moduleContextFromModuleAST = moduleContextFromModuleAST;
exports.ModuleContext = void 0;

var _nodes = require("../../nodes.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function moduleContextFromModuleAST(m) {
  var moduleContext = new ModuleContext();

  if (!(m.type === "Module")) {
    throw new Error('m.type === "Module"' + " error: " + (undefined || "unknown"));
  }

  m.fields.forEach(function (field) {
    switch (field.type) {
      case "Start":
        {
          moduleContext.setStart(field.index);
          break;
        }

      case "TypeInstruction":
        {
          moduleContext.addType(field);
          break;
        }

      case "Func":
        {
          moduleContext.addFunction(field);
          break;
        }

      case "Global":
        {
          moduleContext.defineGlobal(field);
          break;
        }

      case "ModuleImport":
        {
          switch (field.descr.type) {
            case "GlobalType":
              {
                moduleContext.importGlobal(field.descr.valtype, field.descr.mutability);
                break;
              }

            case "Memory":
              {
                moduleContext.addMemory(field.descr.limits.min, field.descr.limits.max);
                break;
              }

            case "FuncImportDescr":
              {
                moduleContext.importFunction(field.descr);
                break;
              }

            case "Table":
              {
                // FIXME(sven): not implemented yet
                break;
              }

            default:
              throw new Error("Unsupported ModuleImport of type " + JSON.stringify(field.descr.type));
          }

          break;
        }

      case "Memory":
        {
          moduleContext.addMemory(field.limits.min, field.limits.max);
          break;
        }
    }
  });
  return moduleContext;
}
/**
 * Module context for type checking
 */


var ModuleContext = /*#__PURE__*/function () {
  function ModuleContext() {
    _classCallCheck(this, ModuleContext);

    this.funcs = [];
    this.funcsOffsetByIdentifier = [];
    this.types = [];
    this.globals = [];
    this.globalsOffsetByIdentifier = [];
    this.mems = []; // Current stack frame

    this.locals = [];
    this.labels = [];
    this["return"] = [];
    this.debugName = "unknown";
    this.start = null;
  }
  /**
   * Set start segment
   */


  _createClass(ModuleContext, [{
    key: "setStart",
    value: function setStart(index) {
      this.start = index.value;
    }
    /**
     * Get start function
     */

  }, {
    key: "getStart",
    value: function getStart() {
      return this.start;
    }
    /**
     * Reset the active stack frame
     */

  }, {
    key: "newContext",
    value: function newContext(debugName, expectedResult) {
      this.locals = [];
      this.labels = [expectedResult];
      this["return"] = expectedResult;
      this.debugName = debugName;
    }
    /**
     * Functions
     */

  }, {
    key: "addFunction",
    value: function addFunction(func) {
      /* eslint-disable */
      // $FlowIgnore
      var _ref = func.signature || {},
          _ref$params = _ref.params,
          args = _ref$params === void 0 ? [] : _ref$params,
          _ref$results = _ref.results,
          result = _ref$results === void 0 ? [] : _ref$results;
      /* eslint-enable */


      args = args.map(function (arg) {
        return arg.valtype;
      });
      this.funcs.push({
        args: args,
        result: result
      });

      if (typeof func.name !== "undefined") {
        // $FlowIgnore
        this.funcsOffsetByIdentifier[func.name.value] = this.funcs.length - 1;
      }
    }
  }, {
    key: "importFunction",
    value: function importFunction(funcimport) {
      if ((0, _nodes.isSignature)(funcimport.signature)) {
        // eslint-disable-next-line prefer-const
        var _funcimport$signature = funcimport.signature,
            args = _funcimport$signature.params,
            result = _funcimport$signature.results;
        args = args.map(function (arg) {
          return arg.valtype;
        });
        this.funcs.push({
          args: args,
          result: result
        });
      } else {
        if (!(0, _nodes.isNumberLiteral)(funcimport.signature)) {
          throw new Error('isNumberLiteral(funcimport.signature)' + " error: " + (undefined || "unknown"));
        }

        var typeId = funcimport.signature.value;

        if (!this.hasType(typeId)) {
          throw new Error('this.hasType(typeId)' + " error: " + (undefined || "unknown"));
        }

        var signature = this.getType(typeId);
        this.funcs.push({
          args: signature.params.map(function (arg) {
            return arg.valtype;
          }),
          result: signature.results
        });
      }

      if (typeof funcimport.id !== "undefined") {
        // imports are first, we can assume their index in the array
        this.funcsOffsetByIdentifier[funcimport.id.value] = this.funcs.length - 1;
      }
    }
  }, {
    key: "hasFunction",
    value: function hasFunction(index) {
      return typeof this.getFunction(index) !== "undefined";
    }
  }, {
    key: "getFunction",
    value: function getFunction(index) {
      if (typeof index !== "number") {
        throw new Error("getFunction only supported for number index");
      }

      return this.funcs[index];
    }
  }, {
    key: "getFunctionOffsetByIdentifier",
    value: function getFunctionOffsetByIdentifier(name) {
      if (!(typeof name === "string")) {
        throw new Error('typeof name === "string"' + " error: " + (undefined || "unknown"));
      }

      return this.funcsOffsetByIdentifier[name];
    }
    /**
     * Labels
     */

  }, {
    key: "addLabel",
    value: function addLabel(result) {
      this.labels.unshift(result);
    }
  }, {
    key: "hasLabel",
    value: function hasLabel(index) {
      return this.labels.length > index && index >= 0;
    }
  }, {
    key: "getLabel",
    value: function getLabel(index) {
      return this.labels[index];
    }
  }, {
    key: "popLabel",
    value: function popLabel() {
      this.labels.shift();
    }
    /**
     * Locals
     */

  }, {
    key: "hasLocal",
    value: function hasLocal(index) {
      return typeof this.getLocal(index) !== "undefined";
    }
  }, {
    key: "getLocal",
    value: function getLocal(index) {
      return this.locals[index];
    }
  }, {
    key: "addLocal",
    value: function addLocal(type) {
      this.locals.push(type);
    }
    /**
     * Types
     */

  }, {
    key: "addType",
    value: function addType(type) {
      if (!(type.functype.type === "Signature")) {
        throw new Error('type.functype.type === "Signature"' + " error: " + (undefined || "unknown"));
      }

      this.types.push(type.functype);
    }
  }, {
    key: "hasType",
    value: function hasType(index) {
      return this.types[index] !== undefined;
    }
  }, {
    key: "getType",
    value: function getType(index) {
      return this.types[index];
    }
    /**
     * Globals
     */

  }, {
    key: "hasGlobal",
    value: function hasGlobal(index) {
      return this.globals.length > index && index >= 0;
    }
  }, {
    key: "getGlobal",
    value: function getGlobal(index) {
      return this.globals[index].type;
    }
  }, {
    key: "getGlobalOffsetByIdentifier",
    value: function getGlobalOffsetByIdentifier(name) {
      if (!(typeof name === "string")) {
        throw new Error('typeof name === "string"' + " error: " + (undefined || "unknown"));
      }

      // $FlowIgnore
      return this.globalsOffsetByIdentifier[name];
    }
  }, {
    key: "defineGlobal",
    value: function defineGlobal(global) {
      var type = global.globalType.valtype;
      var mutability = global.globalType.mutability;
      this.globals.push({
        type: type,
        mutability: mutability
      });

      if (typeof global.name !== "undefined") {
        // $FlowIgnore
        this.globalsOffsetByIdentifier[global.name.value] = this.globals.length - 1;
      }
    }
  }, {
    key: "importGlobal",
    value: function importGlobal(type, mutability) {
      this.globals.push({
        type: type,
        mutability: mutability
      });
    }
  }, {
    key: "isMutableGlobal",
    value: function isMutableGlobal(index) {
      return this.globals[index].mutability === "var";
    }
  }, {
    key: "isImmutableGlobal",
    value: function isImmutableGlobal(index) {
      return this.globals[index].mutability === "const";
    }
    /**
     * Memories
     */

  }, {
    key: "hasMemory",
    value: function hasMemory(index) {
      return this.mems.length > index && index >= 0;
    }
  }, {
    key: "addMemory",
    value: function addMemory(min, max) {
      this.mems.push({
        min: min,
        max: max
      });
    }
  }, {
    key: "getMemory",
    value: function getMemory(index) {
      return this.mems[index];
    }
  }]);

  return ModuleContext;
}();

exports.ModuleContext = ModuleContext;
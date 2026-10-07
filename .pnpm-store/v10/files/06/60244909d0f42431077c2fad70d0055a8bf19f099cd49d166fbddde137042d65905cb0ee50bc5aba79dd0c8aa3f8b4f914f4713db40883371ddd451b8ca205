import * as decoder from "./decoder";
import * as t from "@webassemblyjs/ast";
/**
 * TODO(sven): I added initial props, but we should rather fix
 * https://github.com/xtuc/webassemblyjs/issues/405
 */

var defaultDecoderOpts = {
  dump: false,
  ignoreCodeSection: false,
  ignoreDataSection: false,
  ignoreCustomNameSection: false
}; // traverses the AST, locating function name metadata, which is then
// used to update index-based identifiers with function names

function restoreFunctionNames(ast) {
  var functionNames = [];
  t.traverse(ast, {
    FunctionNameMetadata: function FunctionNameMetadata(_ref) {
      var node = _ref.node;
      functionNames.push({
        name: node.value,
        index: node.index
      });
    }
  });

  if (functionNames.length === 0) {
    return;
  }

  t.traverse(ast, {
    Func: function (_Func) {
      function Func(_x) {
        return _Func.apply(this, arguments);
      }

      Func.toString = function () {
        return _Func.toString();
      };

      return Func;
    }(function (_ref2) {
      var node = _ref2.node;
      // $FlowIgnore
      var nodeName = node.name;
      var indexBasedFunctionName = nodeName.value;
      var index = Number(indexBasedFunctionName.replace("func_", ""));
      var functionName = functionNames.find(function (f) {
        return f.index === index;
      });

      if (functionName) {
        var oldValue = nodeName.value;
        nodeName.value = functionName.name; // $FlowIgnore

        nodeName.numeric = oldValue; // $FlowIgnore

        delete nodeName.raw;
      }
    }),
    // Also update the reference in the export
    ModuleExport: function (_ModuleExport) {
      function ModuleExport(_x2) {
        return _ModuleExport.apply(this, arguments);
      }

      ModuleExport.toString = function () {
        return _ModuleExport.toString();
      };

      return ModuleExport;
    }(function (_ref3) {
      var node = _ref3.node;

      if (node.descr.exportType === "Func") {
        // $FlowIgnore
        var nodeName = node.descr.id;
        var index = nodeName.value;
        var functionName = functionNames.find(function (f) {
          return f.index === index;
        });

        if (functionName) {
          node.descr.id = t.identifier(functionName.name);
        }
      }
    }),
    ModuleImport: function (_ModuleImport) {
      function ModuleImport(_x3) {
        return _ModuleImport.apply(this, arguments);
      }

      ModuleImport.toString = function () {
        return _ModuleImport.toString();
      };

      return ModuleImport;
    }(function (_ref4) {
      var node = _ref4.node;

      if (node.descr.type === "FuncImportDescr") {
        // $FlowIgnore
        var indexBasedFunctionName = node.descr.id;
        var index = Number(indexBasedFunctionName.replace("func_", ""));
        var functionName = functionNames.find(function (f) {
          return f.index === index;
        });

        if (functionName) {
          // $FlowIgnore
          node.descr.id = t.identifier(functionName.name);
        }
      }
    }),
    CallInstruction: function (_CallInstruction) {
      function CallInstruction(_x4) {
        return _CallInstruction.apply(this, arguments);
      }

      CallInstruction.toString = function () {
        return _CallInstruction.toString();
      };

      return CallInstruction;
    }(function (nodePath) {
      var node = nodePath.node;
      var index = node.index.value;
      var functionName = functionNames.find(function (f) {
        return f.index === index;
      });

      if (functionName) {
        var oldValue = node.index;
        node.index = t.identifier(functionName.name);
        node.numeric = oldValue; // $FlowIgnore

        delete node.raw;
      }
    })
  });
}

function restoreLocalNames(ast) {
  var localNames = [];
  t.traverse(ast, {
    LocalNameMetadata: function LocalNameMetadata(_ref5) {
      var node = _ref5.node;
      localNames.push({
        name: node.value,
        localIndex: node.localIndex,
        functionIndex: node.functionIndex
      });
    }
  });

  if (localNames.length === 0) {
    return;
  }

  t.traverse(ast, {
    Func: function (_Func2) {
      function Func(_x5) {
        return _Func2.apply(this, arguments);
      }

      Func.toString = function () {
        return _Func2.toString();
      };

      return Func;
    }(function (_ref6) {
      var node = _ref6.node;
      var signature = node.signature;

      if (signature.type !== "Signature") {
        return;
      } // $FlowIgnore


      var nodeName = node.name;
      var indexBasedFunctionName = nodeName.value;
      var functionIndex = Number(indexBasedFunctionName.replace("func_", ""));
      signature.params.forEach(function (param, paramIndex) {
        var paramName = localNames.find(function (f) {
          return f.localIndex === paramIndex && f.functionIndex === functionIndex;
        });

        if (paramName && paramName.name !== "") {
          param.id = paramName.name;
        }
      });
    })
  });
}

function restoreModuleName(ast) {
  t.traverse(ast, {
    ModuleNameMetadata: function (_ModuleNameMetadata) {
      function ModuleNameMetadata(_x6) {
        return _ModuleNameMetadata.apply(this, arguments);
      }

      ModuleNameMetadata.toString = function () {
        return _ModuleNameMetadata.toString();
      };

      return ModuleNameMetadata;
    }(function (moduleNameMetadataPath) {
      // update module
      t.traverse(ast, {
        Module: function (_Module) {
          function Module(_x7) {
            return _Module.apply(this, arguments);
          }

          Module.toString = function () {
            return _Module.toString();
          };

          return Module;
        }(function (_ref7) {
          var node = _ref7.node;
          var name = moduleNameMetadataPath.node.value; // compatiblity with wast-parser

          if (name === "") {
            name = null;
          }

          node.id = name;
        })
      });
    })
  });
}

export function decode(buf, customOpts) {
  var opts = Object.assign({}, defaultDecoderOpts, customOpts);
  var ast = decoder.decode(buf, opts);

  if (opts.ignoreCustomNameSection === false) {
    restoreFunctionNames(ast);
    restoreLocalNames(ast);
    restoreModuleName(ast);
  }

  return ast;
}
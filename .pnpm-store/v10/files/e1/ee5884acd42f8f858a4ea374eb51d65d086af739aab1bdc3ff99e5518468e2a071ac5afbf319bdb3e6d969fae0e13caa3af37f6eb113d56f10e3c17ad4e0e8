"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

var _ast = require("@webassemblyjs/ast");

var _long = _interopRequireDefault(require("@xtuc/long"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var compact = false;
var space = " ";

var quote = function quote(str) {
  return "\"".concat(str, "\"");
};

function indent(nb) {
  return Array(nb).fill(space + space).join("");
} // TODO(sven): allow arbitrary ast nodes


function print(n) {
  if (n.type === "Program") {
    return printProgram(n, 0);
  } else {
    throw new Error("Unsupported node in print of type: " + String(n.type));
  }
}

function printProgram(n, depth) {
  return n.body.reduce(function (acc, child) {
    if (child.type === "Module") {
      acc += printModule(child, depth + 1);
    }

    if (child.type === "Func") {
      acc += printFunc(child, depth + 1);
    }

    if (child.type === "BlockComment") {
      acc += printBlockComment(child);
    }

    if (child.type === "LeadingComment") {
      acc += printLeadingComment(child);
    }

    if (compact === false) {
      acc += "\n";
    }

    return acc;
  }, "");
}

function printTypeInstruction(n) {
  var out = "";
  out += "(";
  out += "type";
  out += space;

  if (n.id != null) {
    out += printIndex(n.id);
    out += space;
  }

  out += "(";
  out += "func";
  n.functype.params.forEach(function (param) {
    out += space;
    out += "(";
    out += "param";
    out += space;
    out += printFuncParam(param);
    out += ")";
  });
  n.functype.results.forEach(function (result) {
    out += space;
    out += "(";
    out += "result";
    out += space;
    out += result;
    out += ")";
  });
  out += ")"; // func

  out += ")";
  return out;
}

function printModule(n, depth) {
  var out = "(";
  out += "module";

  if (typeof n.id === "string") {
    out += space;
    out += n.id;
  }

  if (compact === false) {
    out += "\n";
  } else {
    out += space;
  }

  n.fields.forEach(function (field) {
    if (compact === false) {
      out += indent(depth);
    }

    switch (field.type) {
      case "Func":
        {
          out += printFunc(field, depth + 1);
          break;
        }

      case "TypeInstruction":
        {
          out += printTypeInstruction(field);
          break;
        }

      case "Table":
        {
          out += printTable(field);
          break;
        }

      case "Global":
        {
          out += printGlobal(field, depth + 1);
          break;
        }

      case "ModuleExport":
        {
          out += printModuleExport(field);
          break;
        }

      case "ModuleImport":
        {
          out += printModuleImport(field);
          break;
        }

      case "Memory":
        {
          out += printMemory(field);
          break;
        }

      case "BlockComment":
        {
          out += printBlockComment(field);
          break;
        }

      case "LeadingComment":
        {
          out += printLeadingComment(field);
          break;
        }

      case "Start":
        {
          out += printStart(field);
          break;
        }

      case "Elem":
        {
          out += printElem(field, depth);
          break;
        }

      case "Data":
        {
          out += printData(field, depth);
          break;
        }

      default:
        throw new Error("Unsupported node in printModule: " + String(field.type));
    }

    if (compact === false) {
      out += "\n";
    }
  });
  out += ")";
  return out;
}

function printData(n, depth) {
  var out = "";
  out += "(";
  out += "data";
  out += space;
  out += printIndex(n.memoryIndex);
  out += space;
  out += printInstruction(n.offset, depth);
  out += space;
  out += '"';
  n.init.values.forEach(function (_byte) {
    // Avoid non-displayable characters
    if (_byte <= 31 || _byte == 34 || _byte == 92 || _byte >= 127) {
      out += "\\";
      out += ("00" + _byte.toString(16)).substr(-2);
    } else if (_byte > 255) {
      throw new Error("Unsupported byte in data segment: " + _byte);
    } else {
      out += String.fromCharCode(_byte);
    }
  });
  out += '"';
  out += ")";
  return out;
}

function printElem(n, depth) {
  var out = "";
  out += "(";
  out += "elem";
  out += space;
  out += printIndex(n.table);

  var _n$offset = _slicedToArray(n.offset, 1),
      firstOffset = _n$offset[0];

  out += space;
  out += "(";
  out += "offset";
  out += space;
  out += printInstruction(firstOffset, depth);
  out += ")";
  n.funcs.forEach(function (func) {
    out += space;
    out += printIndex(func);
  });
  out += ")";
  return out;
}

function printStart(n) {
  var out = "";
  out += "(";
  out += "start";
  out += space;
  out += printIndex(n.index);
  out += ")";
  return out;
}

function printLeadingComment(n) {
  // Don't print leading comments in compact mode
  if (compact === true) {
    return "";
  }

  var out = "";
  out += ";;";
  out += n.value;
  out += "\n";
  return out;
}

function printBlockComment(n) {
  // Don't print block comments in compact mode
  if (compact === true) {
    return "";
  }

  var out = "";
  out += "(;";
  out += n.value;
  out += ";)";
  out += "\n";
  return out;
}

function printSignature(n) {
  var out = "";
  n.params.forEach(function (param) {
    out += space;
    out += "(";
    out += "param";
    out += space;
    out += printFuncParam(param);
    out += ")";
  });
  n.results.forEach(function (result) {
    out += space;
    out += "(";
    out += "result";
    out += space;
    out += result;
    out += ")";
  });
  return out;
}

function printModuleImportDescr(n) {
  var out = "";

  if (n.type === "FuncImportDescr") {
    out += "(";
    out += "func";

    if ((0, _ast.isAnonymous)(n.id) === false) {
      out += space;
      out += printIdentifier(n.id);
    }

    out += printSignature(n.signature);
    out += ")";
  }

  if (n.type === "GlobalType") {
    out += "(";
    out += "global";
    out += space;
    out += printGlobalType(n);
    out += ")";
  }

  if (n.type === "Table") {
    out += printTable(n);
  }

  return out;
}

function printModuleImport(n) {
  var out = "";
  out += "(";
  out += "import";
  out += space;
  out += quote(n.module);
  out += space;
  out += quote(n.name);
  out += space;
  out += printModuleImportDescr(n.descr);
  out += ")";
  return out;
}

function printGlobalType(n) {
  var out = "";

  if (n.mutability === "var") {
    out += "(";
    out += "mut";
    out += space;
    out += n.valtype;
    out += ")";
  } else {
    out += n.valtype;
  }

  return out;
}

function printGlobal(n, depth) {
  var out = "";
  out += "(";
  out += "global";
  out += space;

  if (n.name != null && (0, _ast.isAnonymous)(n.name) === false) {
    out += printIdentifier(n.name);
    out += space;
  }

  out += printGlobalType(n.globalType);
  out += space;
  n.init.forEach(function (i) {
    out += printInstruction(i, depth + 1);
  });
  out += ")";
  return out;
}

function printTable(n) {
  var out = "";
  out += "(";
  out += "table";
  out += space;

  if (n.name != null && (0, _ast.isAnonymous)(n.name) === false) {
    out += printIdentifier(n.name);
    out += space;
  }

  out += printLimit(n.limits);
  out += space;
  out += n.elementType;
  out += ")";
  return out;
}

function printFuncParam(n) {
  var out = "";

  if (typeof n.id === "string") {
    out += "$" + n.id;
    out += space;
  }

  out += n.valtype;
  return out;
}

function printFunc(n, depth) {
  var out = "";
  out += "(";
  out += "func";

  if (n.name != null) {
    if (n.name.type === "Identifier" && (0, _ast.isAnonymous)(n.name) === false) {
      out += space;
      out += printIdentifier(n.name);
    }
  }

  if (n.signature.type === "Signature") {
    out += printSignature(n.signature);
  } else {
    var index = n.signature;
    out += space;
    out += "(";
    out += "type";
    out += space;
    out += printIndex(index);
    out += ")";
  }

  if (n.body.length > 0) {
    // func is empty since we ignore the default end instruction
    if (n.body.length === 1 && n.body[0].id === "end") {
      out += ")";
      return out;
    }

    if (compact === false) {
      out += "\n";
    }

    n.body.forEach(function (i) {
      if (i.id !== "end") {
        out += indent(depth);
        out += printInstruction(i, depth);

        if (compact === false) {
          out += "\n";
        }
      }
    });
    out += indent(depth - 1) + ")";
  } else {
    out += ")";
  }

  return out;
}

function printInstruction(n, depth) {
  switch (n.type) {
    case "Instr":
      // $FlowIgnore
      return printGenericInstruction(n, depth + 1);

    case "BlockInstruction":
      // $FlowIgnore
      return printBlockInstruction(n, depth + 1);

    case "IfInstruction":
      // $FlowIgnore
      return printIfInstruction(n, depth + 1);

    case "CallInstruction":
      // $FlowIgnore
      return printCallInstruction(n, depth + 1);

    case "CallIndirectInstruction":
      // $FlowIgnore
      return printCallIndirectIntruction(n, depth + 1);

    case "LoopInstruction":
      // $FlowIgnore
      return printLoopInstruction(n, depth + 1);

    default:
      throw new Error("Unsupported instruction: " + JSON.stringify(n.type));
  }
}

function printCallIndirectIntruction(n, depth) {
  var out = "";
  out += "(";
  out += "call_indirect";

  if (n.signature.type === "Signature") {
    out += printSignature(n.signature);
  } else if (n.signature.type === "Identifier") {
    out += space;
    out += "(";
    out += "type";
    out += space;
    out += printIdentifier(n.signature);
    out += ")";
  } else {
    throw new Error("CallIndirectInstruction: unsupported signature " + JSON.stringify(n.signature.type));
  }

  out += space;

  if (n.intrs != null) {
    // $FlowIgnore
    n.intrs.forEach(function (i, index) {
      // $FlowIgnore
      out += printInstruction(i, depth + 1); // $FlowIgnore

      if (index !== n.intrs.length - 1) {
        out += space;
      }
    });
  }

  out += ")";
  return out;
}

function printLoopInstruction(n, depth) {
  var out = "";
  out += "(";
  out += "loop";

  if (n.label != null && (0, _ast.isAnonymous)(n.label) === false) {
    out += space;
    out += printIdentifier(n.label);
  }

  if (typeof n.resulttype === "string") {
    out += space;
    out += "(";
    out += "result";
    out += space;
    out += n.resulttype;
    out += ")";
  }

  if (n.instr.length > 0) {
    n.instr.forEach(function (e) {
      if (compact === false) {
        out += "\n";
      }

      out += indent(depth);
      out += printInstruction(e, depth + 1);
    });

    if (compact === false) {
      out += "\n";
      out += indent(depth - 1);
    }
  }

  out += ")";
  return out;
}

function printCallInstruction(n, depth) {
  var out = "";
  out += "(";
  out += "call";
  out += space;
  out += printIndex(n.index);

  if (_typeof(n.instrArgs) === "object") {
    // $FlowIgnore
    n.instrArgs.forEach(function (arg) {
      out += space;
      out += printFuncInstructionArg(arg, depth + 1);
    });
  }

  out += ")";
  return out;
}

function printIfInstruction(n, depth) {
  var out = "";
  out += "(";
  out += "if";

  if (n.testLabel != null && (0, _ast.isAnonymous)(n.testLabel) === false) {
    out += space;
    out += printIdentifier(n.testLabel);
  }

  if (typeof n.result === "string") {
    out += space;
    out += "(";
    out += "result";
    out += space;
    out += n.result;
    out += ")";
  }

  if (n.test.length > 0) {
    out += space;
    n.test.forEach(function (i) {
      out += printInstruction(i, depth + 1);
    });
  }

  if (n.consequent.length > 0) {
    if (compact === false) {
      out += "\n";
    }

    out += indent(depth);
    out += "(";
    out += "then";
    depth++;
    n.consequent.forEach(function (i) {
      if (compact === false) {
        out += "\n";
      }

      out += indent(depth);
      out += printInstruction(i, depth + 1);
    });
    depth--;

    if (compact === false) {
      out += "\n";
      out += indent(depth);
    }

    out += ")";
  } else {
    if (compact === false) {
      out += "\n";
      out += indent(depth);
    }

    out += "(";
    out += "then";
    out += ")";
  }

  if (n.alternate.length > 0) {
    if (compact === false) {
      out += "\n";
    }

    out += indent(depth);
    out += "(";
    out += "else";
    depth++;
    n.alternate.forEach(function (i) {
      if (compact === false) {
        out += "\n";
      }

      out += indent(depth);
      out += printInstruction(i, depth + 1);
    });
    depth--;

    if (compact === false) {
      out += "\n";
      out += indent(depth);
    }

    out += ")";
  } else {
    if (compact === false) {
      out += "\n";
      out += indent(depth);
    }

    out += "(";
    out += "else";
    out += ")";
  }

  if (compact === false) {
    out += "\n";
    out += indent(depth - 1);
  }

  out += ")";
  return out;
}

function printBlockInstruction(n, depth) {
  var out = "";
  out += "(";
  out += "block";

  if (n.label != null && (0, _ast.isAnonymous)(n.label) === false) {
    out += space;
    out += printIdentifier(n.label);
  }

  if (typeof n.result === "string") {
    out += space;
    out += "(";
    out += "result";
    out += space;
    out += n.result;
    out += ")";
  }

  if (n.instr.length > 0) {
    n.instr.forEach(function (i) {
      if (compact === false) {
        out += "\n";
      }

      out += indent(depth);
      out += printInstruction(i, depth + 1);
    });

    if (compact === false) {
      out += "\n";
    }

    out += indent(depth - 1);
    out += ")";
  } else {
    out += ")";
  }

  return out;
}

function printGenericInstruction(n, depth) {
  var out = "";
  out += "(";

  if (typeof n.object === "string") {
    out += n.object;
    out += ".";
  }

  out += n.id;
  n.args.forEach(function (arg) {
    out += space;
    out += printFuncInstructionArg(arg, depth + 1);
  });

  if (n.namedArgs !== undefined) {
    for (var key in n.namedArgs) {
      out += space + key + "=";
      out += printFuncInstructionArg(n.namedArgs[key], depth + 1);
    }
  }

  out += ")";
  return out;
}

function printLongNumberLiteral(n) {
  if (typeof n.raw === "string") {
    return n.raw;
  }

  var _n$value = n.value,
      low = _n$value.low,
      high = _n$value.high;
  var v = new _long["default"](low, high);
  return v.toString();
}

function printFloatLiteral(n) {
  if (typeof n.raw === "string") {
    return n.raw;
  }

  return String(n.value);
}

function printFuncInstructionArg(n, depth) {
  var out = "";

  if (n.type === "NumberLiteral") {
    out += printNumberLiteral(n);
  }

  if (n.type === "LongNumberLiteral") {
    out += printLongNumberLiteral(n);
  }

  if (n.type === "Identifier" && (0, _ast.isAnonymous)(n) === false) {
    out += printIdentifier(n);
  }

  if (n.type === "ValtypeLiteral") {
    out += n.name;
  }

  if (n.type === "FloatLiteral") {
    out += printFloatLiteral(n);
  }

  if ((0, _ast.isInstruction)(n)) {
    out += printInstruction(n, depth + 1);
  }

  return out;
}

function printNumberLiteral(n) {
  if (typeof n.raw === "string") {
    return n.raw;
  }

  return String(n.value);
}

function printModuleExport(n) {
  var out = "";
  out += "(";
  out += "export";
  out += space;
  out += quote(n.name);

  if (n.descr.exportType === "Func") {
    out += space;
    out += "(";
    out += "func";
    out += space;
    out += printIndex(n.descr.id);
    out += ")";
  } else if (n.descr.exportType === "Global") {
    out += space;
    out += "(";
    out += "global";
    out += space;
    out += printIndex(n.descr.id);
    out += ")";
  } else if (n.descr.exportType === "Memory") {
    out += space;
    out += "(";
    out += "memory";
    out += space;
    out += printIndex(n.descr.id);
    out += ")";
  } else if (n.descr.exportType === "Table") {
    out += space;
    out += "(";
    out += "table";
    out += space;
    out += printIndex(n.descr.id);
    out += ")";
  } else {
    throw new Error("printModuleExport: unknown type: " + n.descr.exportType);
  }

  out += ")";
  return out;
}

function printIdentifier(n) {
  return "$" + n.value;
}

function printIndex(n) {
  if (n.type === "Identifier") {
    return printIdentifier(n);
  } else if (n.type === "NumberLiteral") {
    return printNumberLiteral(n);
  } else {
    throw new Error("Unsupported index: " + n.type);
  }
}

function printMemory(n) {
  var out = "";
  out += "(";
  out += "memory";

  if (n.id != null) {
    out += space;
    out += printIndex(n.id);
    out += space;
  }

  out += printLimit(n.limits);
  out += ")";
  return out;
}

function printLimit(n) {
  var out = "";
  out += n.min + "";

  if (n.max != null) {
    out += space;
    out += String(n.max);

    if (n.shared === true) {
      out += " shared";
    }
  }

  return out;
}
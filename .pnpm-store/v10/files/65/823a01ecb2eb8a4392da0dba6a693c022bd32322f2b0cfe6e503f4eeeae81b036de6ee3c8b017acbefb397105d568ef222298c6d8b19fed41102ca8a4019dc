"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberLiteralFromRaw = numberLiteralFromRaw;
exports.instruction = instruction;
exports.objectInstruction = objectInstruction;
exports.withLoc = withLoc;
exports.withRaw = withRaw;
exports.funcParam = funcParam;
exports.indexLiteral = indexLiteral;
exports.memIndexLiteral = memIndexLiteral;

var _helperNumbers = require("@webassemblyjs/helper-numbers");

var _nodes = require("./nodes");

function numberLiteralFromRaw(rawValue) {
  var instructionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "i32";
  var original = rawValue; // Remove numeric separators _

  if (typeof rawValue === "string") {
    rawValue = rawValue.replace(/_/g, "");
  }

  if (typeof rawValue === "number") {
    return (0, _nodes.numberLiteral)(rawValue, String(original));
  } else {
    switch (instructionType) {
      case "i32":
        {
          return (0, _nodes.numberLiteral)((0, _helperNumbers.parse32I)(rawValue), String(original));
        }

      case "u32":
        {
          return (0, _nodes.numberLiteral)((0, _helperNumbers.parseU32)(rawValue), String(original));
        }

      case "i64":
        {
          return (0, _nodes.longNumberLiteral)((0, _helperNumbers.parse64I)(rawValue), String(original));
        }

      case "f32":
        {
          return (0, _nodes.floatLiteral)((0, _helperNumbers.parse32F)(rawValue), (0, _helperNumbers.isNanLiteral)(rawValue), (0, _helperNumbers.isInfLiteral)(rawValue), String(original));
        }
      // f64

      default:
        {
          return (0, _nodes.floatLiteral)((0, _helperNumbers.parse64F)(rawValue), (0, _helperNumbers.isNanLiteral)(rawValue), (0, _helperNumbers.isInfLiteral)(rawValue), String(original));
        }
    }
  }
}

function instruction(id) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var namedArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return (0, _nodes.instr)(id, undefined, args, namedArgs);
}

function objectInstruction(id, object) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var namedArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return (0, _nodes.instr)(id, object, args, namedArgs);
}
/**
 * Decorators
 */


function withLoc(n, end, start) {
  var loc = {
    start: start,
    end: end
  };
  n.loc = loc;
  return n;
}

function withRaw(n, raw) {
  n.raw = raw;
  return n;
}

function funcParam(valtype, id) {
  return {
    id: id,
    valtype: valtype
  };
}

function indexLiteral(value) {
  // $FlowIgnore
  var x = numberLiteralFromRaw(value, "u32");
  return x;
}

function memIndexLiteral(value) {
  // $FlowIgnore
  var x = numberLiteralFromRaw(value, "u32");
  return x;
}
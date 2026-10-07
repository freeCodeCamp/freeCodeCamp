import { parse32F, parse64F, parse32I, parse64I, parseU32, isNanLiteral, isInfLiteral } from "@webassemblyjs/helper-numbers";
import { longNumberLiteral, floatLiteral, numberLiteral, instr } from "./nodes";
export function numberLiteralFromRaw(rawValue) {
  var instructionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "i32";
  var original = rawValue; // Remove numeric separators _

  if (typeof rawValue === "string") {
    rawValue = rawValue.replace(/_/g, "");
  }

  if (typeof rawValue === "number") {
    return numberLiteral(rawValue, String(original));
  } else {
    switch (instructionType) {
      case "i32":
        {
          return numberLiteral(parse32I(rawValue), String(original));
        }

      case "u32":
        {
          return numberLiteral(parseU32(rawValue), String(original));
        }

      case "i64":
        {
          return longNumberLiteral(parse64I(rawValue), String(original));
        }

      case "f32":
        {
          return floatLiteral(parse32F(rawValue), isNanLiteral(rawValue), isInfLiteral(rawValue), String(original));
        }
      // f64

      default:
        {
          return floatLiteral(parse64F(rawValue), isNanLiteral(rawValue), isInfLiteral(rawValue), String(original));
        }
    }
  }
}
export function instruction(id) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var namedArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return instr(id, undefined, args, namedArgs);
}
export function objectInstruction(id, object) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var namedArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return instr(id, object, args, namedArgs);
}
/**
 * Decorators
 */

export function withLoc(n, end, start) {
  var loc = {
    start: start,
    end: end
  };
  n.loc = loc;
  return n;
}
export function withRaw(n, raw) {
  n.raw = raw;
  return n;
}
export function funcParam(valtype, id) {
  return {
    id: id,
    valtype: valtype
  };
}
export function indexLiteral(value) {
  // $FlowIgnore
  var x = numberLiteralFromRaw(value, "u32");
  return x;
}
export function memIndexLiteral(value) {
  // $FlowIgnore
  var x = numberLiteralFromRaw(value, "u32");
  return x;
}
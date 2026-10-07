// @flow

import Long from "@xtuc/long";
import parseHexFloat from "@webassemblyjs/floating-point-hex-parser";
import { CompileError } from "@webassemblyjs/helper-api-error";

export function parse32F(sourceString: string): number {
  if (isHexLiteral(sourceString)) {
    return parseHexFloat(sourceString);
  }
  if (isInfLiteral(sourceString)) {
    return sourceString[0] === "-" ? -1 : 1;
  }
  if (isNanLiteral(sourceString)) {
    return (
      (sourceString[0] === "-" ? -1 : 1) *
      (sourceString.includes(":")
        ? parseInt(sourceString.substring(sourceString.indexOf(":") + 1), 16)
        : 0x400000)
    );
  }
  return parseFloat(sourceString);
}

export function parse64F(sourceString: string): number {
  if (isHexLiteral(sourceString)) {
    return parseHexFloat(sourceString);
  }
  if (isInfLiteral(sourceString)) {
    return sourceString[0] === "-" ? -1 : 1;
  }
  if (isNanLiteral(sourceString)) {
    return (
      (sourceString[0] === "-" ? -1 : 1) *
      (sourceString.includes(":")
        ? parseInt(sourceString.substring(sourceString.indexOf(":") + 1), 16)
        : 0x8000000000000)
    );
  }
  if (isHexLiteral(sourceString)) {
    return parseHexFloat(sourceString);
  }
  return parseFloat(sourceString);
}

export function parse32I(sourceString: string): number {
  let value = 0;
  if (isHexLiteral(sourceString)) {
    value = ~~parseInt(sourceString, 16);
  } else if (isDecimalExponentLiteral(sourceString)) {
    throw new Error("This number literal format is yet to be implemented.");
  } else {
    value = parseInt(sourceString, 10);
  }

  return value;
}

export function parseU32(sourceString: string): number {
  const value = parse32I(sourceString);
  if (value < 0) {
    throw new CompileError("Illegal value for u32: " + sourceString);
  }
  return value;
}

export function parse64I(sourceString: string): LongNumber {
  // $FlowIgnore
  let long: Long;
  if (isHexLiteral(sourceString)) {
    long = Long.fromString(sourceString, false, 16);
  } else if (isDecimalExponentLiteral(sourceString)) {
    throw new Error("This number literal format is yet to be implemented.");
  } else {
    long = Long.fromString(sourceString);
  }

  return {
    high: long.high,
    low: long.low,
  };
}

const NAN_WORD = /^\+?-?nan/;
const INF_WORD = /^\+?-?inf/;

export function isInfLiteral(sourceString: string): boolean {
  return INF_WORD.test(sourceString.toLowerCase());
}

export function isNanLiteral(sourceString: string): boolean {
  return NAN_WORD.test(sourceString.toLowerCase());
}

function isDecimalExponentLiteral(sourceString: string): boolean {
  return (
    !isHexLiteral(sourceString) && sourceString.toUpperCase().includes("E")
  );
}

function isHexLiteral(sourceString: string): boolean {
  return (
    sourceString.substring(0, 2).toUpperCase() === "0X" ||
    sourceString.substring(0, 3).toUpperCase() === "-0X"
  );
}

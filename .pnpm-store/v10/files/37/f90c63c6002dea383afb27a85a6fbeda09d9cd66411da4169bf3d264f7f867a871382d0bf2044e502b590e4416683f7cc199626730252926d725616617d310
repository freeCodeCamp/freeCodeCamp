/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 */

/**
 * Internal states of EscapeSequenceParser.
 */
export const enum ParserState {
  GROUND = 0,
  ESCAPE = 1,
  ESCAPE_INTERMEDIATE = 2,
  CSI_ENTRY = 3,
  CSI_PARAM = 4,
  CSI_INTERMEDIATE = 5,
  CSI_IGNORE = 6,
  SOS_PM_APC_STRING = 7,
  OSC_STRING = 8,
  DCS_ENTRY = 9,
  DCS_PARAM = 10,
  DCS_IGNORE = 11,
  DCS_INTERMEDIATE = 12,
  DCS_PASSTHROUGH = 13
}

/**
 * Internal actions of EscapeSequenceParser.
 */
export const enum ParserAction {
  IGNORE = 0,
  ERROR = 1,
  PRINT = 2,
  EXECUTE = 3,
  OSC_START = 4,
  OSC_PUT = 5,
  OSC_END = 6,
  CSI_DISPATCH = 7,
  PARAM = 8,
  COLLECT = 9,
  ESC_DISPATCH = 10,
  CLEAR = 11,
  DCS_HOOK = 12,
  DCS_PUT = 13,
  DCS_UNHOOK = 14
}

/**
 * Internal states of OscParser.
 */
export const enum OscState {
  START = 0,
  ID = 1,
  PAYLOAD = 2,
  ABORT = 3
}

// payload limit for OSC and DCS
export const PAYLOAD_LIMIT = 10000000;

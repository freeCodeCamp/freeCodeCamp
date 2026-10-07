/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IParsingState, IDcsHandler, IEscapeSequenceParser, IParams, IOscHandler, IHandlerCollection, CsiHandlerType, OscFallbackHandlerType, IOscParser, EscHandlerType, IDcsParser, DcsFallbackHandlerType, IFunctionIdentifier, ExecuteFallbackHandlerType, CsiFallbackHandlerType, EscFallbackHandlerType, PrintHandlerType, PrintFallbackHandlerType, ExecuteHandlerType, IParserStackState, ParserStackType, ResumableHandlersType } from 'common/parser/Types';
import { ParserState, ParserAction } from 'common/parser/Constants';
import { Disposable, toDisposable } from 'vs/base/common/lifecycle';
import { IDisposable } from 'common/Types';
import { Params } from 'common/parser/Params';
import { OscParser } from 'common/parser/OscParser';
import { DcsParser } from 'common/parser/DcsParser';

/**
 * Table values are generated like this:
 *    index:  currentState << TableValue.INDEX_STATE_SHIFT | charCode
 *    value:  action << TableValue.TRANSITION_ACTION_SHIFT | nextState
 */
const enum TableAccess {
  TRANSITION_ACTION_SHIFT = 4,
  TRANSITION_STATE_MASK = 15,
  INDEX_STATE_SHIFT = 8
}

/**
 * Transition table for EscapeSequenceParser.
 */
export class TransitionTable {
  public table: Uint8Array;

  constructor(length: number) {
    this.table = new Uint8Array(length);
  }

  /**
   * Set default transition.
   * @param action default action
   * @param next default next state
   */
  public setDefault(action: ParserAction, next: ParserState): void {
    this.table.fill(action << TableAccess.TRANSITION_ACTION_SHIFT | next);
  }

  /**
   * Add a transition to the transition table.
   * @param code input character code
   * @param state current parser state
   * @param action parser action to be done
   * @param next next parser state
   */
  public add(code: number, state: ParserState, action: ParserAction, next: ParserState): void {
    this.table[state << TableAccess.INDEX_STATE_SHIFT | code] = action << TableAccess.TRANSITION_ACTION_SHIFT | next;
  }

  /**
   * Add transitions for multiple input character codes.
   * @param codes input character code array
   * @param state current parser state
   * @param action parser action to be done
   * @param next next parser state
   */
  public addMany(codes: number[], state: ParserState, action: ParserAction, next: ParserState): void {
    for (let i = 0; i < codes.length; i++) {
      this.table[state << TableAccess.INDEX_STATE_SHIFT | codes[i]] = action << TableAccess.TRANSITION_ACTION_SHIFT | next;
    }
  }
}


// Pseudo-character placeholder for printable non-ascii characters (unicode).
const NON_ASCII_PRINTABLE = 0xA0;


/**
 * VT500 compatible transition table.
 * Taken from https://vt100.net/emu/dec_ansi_parser.
 */
export const VT500_TRANSITION_TABLE = (function (): TransitionTable {
  const table: TransitionTable = new TransitionTable(4095);

  // range macro for byte
  const BYTE_VALUES = 256;
  const blueprint = Array.apply(null, Array(BYTE_VALUES)).map((unused: any, i: number) => i);
  const r = (start: number, end: number): number[] => blueprint.slice(start, end);

  // Default definitions.
  const PRINTABLES = r(0x20, 0x7f); // 0x20 (SP) included, 0x7F (DEL) excluded
  const EXECUTABLES = r(0x00, 0x18);
  EXECUTABLES.push(0x19);
  EXECUTABLES.push.apply(EXECUTABLES, r(0x1c, 0x20));

  const states: number[] = r(ParserState.GROUND, ParserState.DCS_PASSTHROUGH + 1);
  let state: any;

  // set default transition
  table.setDefault(ParserAction.ERROR, ParserState.GROUND);
  // printables
  table.addMany(PRINTABLES, ParserState.GROUND, ParserAction.PRINT, ParserState.GROUND);
  // global anywhere rules
  for (state in states) {
    table.addMany([0x18, 0x1a, 0x99, 0x9a], state, ParserAction.EXECUTE, ParserState.GROUND);
    table.addMany(r(0x80, 0x90), state, ParserAction.EXECUTE, ParserState.GROUND);
    table.addMany(r(0x90, 0x98), state, ParserAction.EXECUTE, ParserState.GROUND);
    table.add(0x9c, state, ParserAction.IGNORE, ParserState.GROUND); // ST as terminator
    table.add(0x1b, state, ParserAction.CLEAR, ParserState.ESCAPE);  // ESC
    table.add(0x9d, state, ParserAction.OSC_START, ParserState.OSC_STRING);  // OSC
    table.addMany([0x98, 0x9e, 0x9f], state, ParserAction.IGNORE, ParserState.SOS_PM_APC_STRING);
    table.add(0x9b, state, ParserAction.CLEAR, ParserState.CSI_ENTRY);  // CSI
    table.add(0x90, state, ParserAction.CLEAR, ParserState.DCS_ENTRY);  // DCS
  }
  // rules for executables and 7f
  table.addMany(EXECUTABLES, ParserState.GROUND, ParserAction.EXECUTE, ParserState.GROUND);
  table.addMany(EXECUTABLES, ParserState.ESCAPE, ParserAction.EXECUTE, ParserState.ESCAPE);
  table.add(0x7f, ParserState.ESCAPE, ParserAction.IGNORE, ParserState.ESCAPE);
  table.addMany(EXECUTABLES, ParserState.OSC_STRING, ParserAction.IGNORE, ParserState.OSC_STRING);
  table.addMany(EXECUTABLES, ParserState.CSI_ENTRY, ParserAction.EXECUTE, ParserState.CSI_ENTRY);
  table.add(0x7f, ParserState.CSI_ENTRY, ParserAction.IGNORE, ParserState.CSI_ENTRY);
  table.addMany(EXECUTABLES, ParserState.CSI_PARAM, ParserAction.EXECUTE, ParserState.CSI_PARAM);
  table.add(0x7f, ParserState.CSI_PARAM, ParserAction.IGNORE, ParserState.CSI_PARAM);
  table.addMany(EXECUTABLES, ParserState.CSI_IGNORE, ParserAction.EXECUTE, ParserState.CSI_IGNORE);
  table.addMany(EXECUTABLES, ParserState.CSI_INTERMEDIATE, ParserAction.EXECUTE, ParserState.CSI_INTERMEDIATE);
  table.add(0x7f, ParserState.CSI_INTERMEDIATE, ParserAction.IGNORE, ParserState.CSI_INTERMEDIATE);
  table.addMany(EXECUTABLES, ParserState.ESCAPE_INTERMEDIATE, ParserAction.EXECUTE, ParserState.ESCAPE_INTERMEDIATE);
  table.add(0x7f, ParserState.ESCAPE_INTERMEDIATE, ParserAction.IGNORE, ParserState.ESCAPE_INTERMEDIATE);
  // osc
  table.add(0x5d, ParserState.ESCAPE, ParserAction.OSC_START, ParserState.OSC_STRING);
  table.addMany(PRINTABLES, ParserState.OSC_STRING, ParserAction.OSC_PUT, ParserState.OSC_STRING);
  table.add(0x7f, ParserState.OSC_STRING, ParserAction.OSC_PUT, ParserState.OSC_STRING);
  table.addMany([0x9c, 0x1b, 0x18, 0x1a, 0x07], ParserState.OSC_STRING, ParserAction.OSC_END, ParserState.GROUND);
  table.addMany(r(0x1c, 0x20), ParserState.OSC_STRING, ParserAction.IGNORE, ParserState.OSC_STRING);
  // sos/pm/apc does nothing
  table.addMany([0x58, 0x5e, 0x5f], ParserState.ESCAPE, ParserAction.IGNORE, ParserState.SOS_PM_APC_STRING);
  table.addMany(PRINTABLES, ParserState.SOS_PM_APC_STRING, ParserAction.IGNORE, ParserState.SOS_PM_APC_STRING);
  table.addMany(EXECUTABLES, ParserState.SOS_PM_APC_STRING, ParserAction.IGNORE, ParserState.SOS_PM_APC_STRING);
  table.add(0x9c, ParserState.SOS_PM_APC_STRING, ParserAction.IGNORE, ParserState.GROUND);
  table.add(0x7f, ParserState.SOS_PM_APC_STRING, ParserAction.IGNORE, ParserState.SOS_PM_APC_STRING);
  // csi entries
  table.add(0x5b, ParserState.ESCAPE, ParserAction.CLEAR, ParserState.CSI_ENTRY);
  table.addMany(r(0x40, 0x7f), ParserState.CSI_ENTRY, ParserAction.CSI_DISPATCH, ParserState.GROUND);
  table.addMany(r(0x30, 0x3c), ParserState.CSI_ENTRY, ParserAction.PARAM, ParserState.CSI_PARAM);
  table.addMany([0x3c, 0x3d, 0x3e, 0x3f], ParserState.CSI_ENTRY, ParserAction.COLLECT, ParserState.CSI_PARAM);
  table.addMany(r(0x30, 0x3c), ParserState.CSI_PARAM, ParserAction.PARAM, ParserState.CSI_PARAM);
  table.addMany(r(0x40, 0x7f), ParserState.CSI_PARAM, ParserAction.CSI_DISPATCH, ParserState.GROUND);
  table.addMany([0x3c, 0x3d, 0x3e, 0x3f], ParserState.CSI_PARAM, ParserAction.IGNORE, ParserState.CSI_IGNORE);
  table.addMany(r(0x20, 0x40), ParserState.CSI_IGNORE, ParserAction.IGNORE, ParserState.CSI_IGNORE);
  table.add(0x7f, ParserState.CSI_IGNORE, ParserAction.IGNORE, ParserState.CSI_IGNORE);
  table.addMany(r(0x40, 0x7f), ParserState.CSI_IGNORE, ParserAction.IGNORE, ParserState.GROUND);
  table.addMany(r(0x20, 0x30), ParserState.CSI_ENTRY, ParserAction.COLLECT, ParserState.CSI_INTERMEDIATE);
  table.addMany(r(0x20, 0x30), ParserState.CSI_INTERMEDIATE, ParserAction.COLLECT, ParserState.CSI_INTERMEDIATE);
  table.addMany(r(0x30, 0x40), ParserState.CSI_INTERMEDIATE, ParserAction.IGNORE, ParserState.CSI_IGNORE);
  table.addMany(r(0x40, 0x7f), ParserState.CSI_INTERMEDIATE, ParserAction.CSI_DISPATCH, ParserState.GROUND);
  table.addMany(r(0x20, 0x30), ParserState.CSI_PARAM, ParserAction.COLLECT, ParserState.CSI_INTERMEDIATE);
  // esc_intermediate
  table.addMany(r(0x20, 0x30), ParserState.ESCAPE, ParserAction.COLLECT, ParserState.ESCAPE_INTERMEDIATE);
  table.addMany(r(0x20, 0x30), ParserState.ESCAPE_INTERMEDIATE, ParserAction.COLLECT, ParserState.ESCAPE_INTERMEDIATE);
  table.addMany(r(0x30, 0x7f), ParserState.ESCAPE_INTERMEDIATE, ParserAction.ESC_DISPATCH, ParserState.GROUND);
  table.addMany(r(0x30, 0x50), ParserState.ESCAPE, ParserAction.ESC_DISPATCH, ParserState.GROUND);
  table.addMany(r(0x51, 0x58), ParserState.ESCAPE, ParserAction.ESC_DISPATCH, ParserState.GROUND);
  table.addMany([0x59, 0x5a, 0x5c], ParserState.ESCAPE, ParserAction.ESC_DISPATCH, ParserState.GROUND);
  table.addMany(r(0x60, 0x7f), ParserState.ESCAPE, ParserAction.ESC_DISPATCH, ParserState.GROUND);
  // dcs entry
  table.add(0x50, ParserState.ESCAPE, ParserAction.CLEAR, ParserState.DCS_ENTRY);
  table.addMany(EXECUTABLES, ParserState.DCS_ENTRY, ParserAction.IGNORE, ParserState.DCS_ENTRY);
  table.add(0x7f, ParserState.DCS_ENTRY, ParserAction.IGNORE, ParserState.DCS_ENTRY);
  table.addMany(r(0x1c, 0x20), ParserState.DCS_ENTRY, ParserAction.IGNORE, ParserState.DCS_ENTRY);
  table.addMany(r(0x20, 0x30), ParserState.DCS_ENTRY, ParserAction.COLLECT, ParserState.DCS_INTERMEDIATE);
  table.addMany(r(0x30, 0x3c), ParserState.DCS_ENTRY, ParserAction.PARAM, ParserState.DCS_PARAM);
  table.addMany([0x3c, 0x3d, 0x3e, 0x3f], ParserState.DCS_ENTRY, ParserAction.COLLECT, ParserState.DCS_PARAM);
  table.addMany(EXECUTABLES, ParserState.DCS_IGNORE, ParserAction.IGNORE, ParserState.DCS_IGNORE);
  table.addMany(r(0x20, 0x80), ParserState.DCS_IGNORE, ParserAction.IGNORE, ParserState.DCS_IGNORE);
  table.addMany(r(0x1c, 0x20), ParserState.DCS_IGNORE, ParserAction.IGNORE, ParserState.DCS_IGNORE);
  table.addMany(EXECUTABLES, ParserState.DCS_PARAM, ParserAction.IGNORE, ParserState.DCS_PARAM);
  table.add(0x7f, ParserState.DCS_PARAM, ParserAction.IGNORE, ParserState.DCS_PARAM);
  table.addMany(r(0x1c, 0x20), ParserState.DCS_PARAM, ParserAction.IGNORE, ParserState.DCS_PARAM);
  table.addMany(r(0x30, 0x3c), ParserState.DCS_PARAM, ParserAction.PARAM, ParserState.DCS_PARAM);
  table.addMany([0x3c, 0x3d, 0x3e, 0x3f], ParserState.DCS_PARAM, ParserAction.IGNORE, ParserState.DCS_IGNORE);
  table.addMany(r(0x20, 0x30), ParserState.DCS_PARAM, ParserAction.COLLECT, ParserState.DCS_INTERMEDIATE);
  table.addMany(EXECUTABLES, ParserState.DCS_INTERMEDIATE, ParserAction.IGNORE, ParserState.DCS_INTERMEDIATE);
  table.add(0x7f, ParserState.DCS_INTERMEDIATE, ParserAction.IGNORE, ParserState.DCS_INTERMEDIATE);
  table.addMany(r(0x1c, 0x20), ParserState.DCS_INTERMEDIATE, ParserAction.IGNORE, ParserState.DCS_INTERMEDIATE);
  table.addMany(r(0x20, 0x30), ParserState.DCS_INTERMEDIATE, ParserAction.COLLECT, ParserState.DCS_INTERMEDIATE);
  table.addMany(r(0x30, 0x40), ParserState.DCS_INTERMEDIATE, ParserAction.IGNORE, ParserState.DCS_IGNORE);
  table.addMany(r(0x40, 0x7f), ParserState.DCS_INTERMEDIATE, ParserAction.DCS_HOOK, ParserState.DCS_PASSTHROUGH);
  table.addMany(r(0x40, 0x7f), ParserState.DCS_PARAM, ParserAction.DCS_HOOK, ParserState.DCS_PASSTHROUGH);
  table.addMany(r(0x40, 0x7f), ParserState.DCS_ENTRY, ParserAction.DCS_HOOK, ParserState.DCS_PASSTHROUGH);
  table.addMany(EXECUTABLES, ParserState.DCS_PASSTHROUGH, ParserAction.DCS_PUT, ParserState.DCS_PASSTHROUGH);
  table.addMany(PRINTABLES, ParserState.DCS_PASSTHROUGH, ParserAction.DCS_PUT, ParserState.DCS_PASSTHROUGH);
  table.add(0x7f, ParserState.DCS_PASSTHROUGH, ParserAction.IGNORE, ParserState.DCS_PASSTHROUGH);
  table.addMany([0x1b, 0x9c, 0x18, 0x1a], ParserState.DCS_PASSTHROUGH, ParserAction.DCS_UNHOOK, ParserState.GROUND);
  // special handling of unicode chars
  table.add(NON_ASCII_PRINTABLE, ParserState.GROUND, ParserAction.PRINT, ParserState.GROUND);
  table.add(NON_ASCII_PRINTABLE, ParserState.OSC_STRING, ParserAction.OSC_PUT, ParserState.OSC_STRING);
  table.add(NON_ASCII_PRINTABLE, ParserState.CSI_IGNORE, ParserAction.IGNORE, ParserState.CSI_IGNORE);
  table.add(NON_ASCII_PRINTABLE, ParserState.DCS_IGNORE, ParserAction.IGNORE, ParserState.DCS_IGNORE);
  table.add(NON_ASCII_PRINTABLE, ParserState.DCS_PASSTHROUGH, ParserAction.DCS_PUT, ParserState.DCS_PASSTHROUGH);
  return table;
})();


/**
 * EscapeSequenceParser.
 * This class implements the ANSI/DEC compatible parser described by
 * Paul Williams (https://vt100.net/emu/dec_ansi_parser).
 *
 * To implement custom ANSI compliant escape sequences it is not needed to
 * alter this parser, instead consider registering a custom handler.
 * For non ANSI compliant sequences change the transition table with
 * the optional `transitions` constructor argument and
 * reimplement the `parse` method.
 *
 * This parser is currently hardcoded to operate in ZDM (Zero Default Mode)
 * as suggested by the original parser, thus empty parameters are set to 0.
 * This this is not in line with the latest ECMA-48 specification
 * (ZDM was part of the early specs and got completely removed later on).
 *
 * Other than the original parser from vt100.net this parser supports
 * sub parameters in digital parameters separated by colons. Empty sub parameters
 * are set to -1 (no ZDM for sub parameters).
 *
 * About prefix and intermediate bytes:
 * This parser follows the assumptions of the vt100.net parser with these restrictions:
 * - only one prefix byte is allowed as first parameter byte, byte range 0x3c .. 0x3f
 * - max. two intermediates are respected, byte range 0x20 .. 0x2f
 * Note that this is not in line with ECMA-48 which does not limit either of those.
 * Furthermore ECMA-48 allows the prefix byte range at any param byte position. Currently
 * there are no known sequences that follow the broader definition of the specification.
 *
 * TODO: implement error recovery hook via error handler return values
 */
export class EscapeSequenceParser extends Disposable implements IEscapeSequenceParser {
  public initialState: number;
  public currentState: number;
  public precedingJoinState: number; // UnicodeJoinProperties

  // buffers over several parse calls
  protected _params: Params;
  protected _collect: number;

  // handler lookup containers
  protected _printHandler: PrintHandlerType;
  protected _executeHandlers: { [flag: number]: ExecuteHandlerType };
  protected _csiHandlers: IHandlerCollection<CsiHandlerType>;
  protected _escHandlers: IHandlerCollection<EscHandlerType>;
  protected readonly _oscParser: IOscParser;
  protected readonly _dcsParser: IDcsParser;
  protected _errorHandler: (state: IParsingState) => IParsingState;

  // fallback handlers
  protected _printHandlerFb: PrintFallbackHandlerType;
  protected _executeHandlerFb: ExecuteFallbackHandlerType;
  protected _csiHandlerFb: CsiFallbackHandlerType;
  protected _escHandlerFb: EscFallbackHandlerType;
  protected _errorHandlerFb: (state: IParsingState) => IParsingState;

  // parser stack save for async handler support
  protected _parseStack: IParserStackState = {
    state: ParserStackType.NONE,
    handlers: [],
    handlerPos: 0,
    transition: 0,
    chunkPos: 0
  };

  constructor(
    protected readonly _transitions: TransitionTable = VT500_TRANSITION_TABLE
  ) {
    super();

    this.initialState = ParserState.GROUND;
    this.currentState = this.initialState;
    this._params = new Params(); // defaults to 32 storable params/subparams
    this._params.addParam(0);    // ZDM
    this._collect = 0;
    this.precedingJoinState = 0;

    // set default fallback handlers and handler lookup containers
    this._printHandlerFb = (data, start, end): void => { };
    this._executeHandlerFb = (code: number): void => { };
    this._csiHandlerFb = (ident: number, params: IParams): void => { };
    this._escHandlerFb = (ident: number): void => { };
    this._errorHandlerFb = (state: IParsingState): IParsingState => state;
    this._printHandler = this._printHandlerFb;
    this._executeHandlers = Object.create(null);
    this._csiHandlers = Object.create(null);
    this._escHandlers = Object.create(null);
    this._register(toDisposable(() => {
      this._csiHandlers = Object.create(null);
      this._executeHandlers = Object.create(null);
      this._escHandlers = Object.create(null);
    }));
    this._oscParser = this._register(new OscParser());
    this._dcsParser = this._register(new DcsParser());
    this._errorHandler = this._errorHandlerFb;

    // swallow 7bit ST (ESC+\)
    this.registerEscHandler({ final: '\\' }, () => true);
  }

  protected _identifier(id: IFunctionIdentifier, finalRange: number[] = [0x40, 0x7e]): number {
    let res = 0;
    if (id.prefix) {
      if (id.prefix.length > 1) {
        throw new Error('only one byte as prefix supported');
      }
      res = id.prefix.charCodeAt(0);
      if (res && 0x3c > res || res > 0x3f) {
        throw new Error('prefix must be in range 0x3c .. 0x3f');
      }
    }
    if (id.intermediates) {
      if (id.intermediates.length > 2) {
        throw new Error('only two bytes as intermediates are supported');
      }
      for (let i = 0; i < id.intermediates.length; ++i) {
        const intermediate = id.intermediates.charCodeAt(i);
        if (0x20 > intermediate || intermediate > 0x2f) {
          throw new Error('intermediate must be in range 0x20 .. 0x2f');
        }
        res <<= 8;
        res |= intermediate;
      }
    }
    if (id.final.length !== 1) {
      throw new Error('final must be a single byte');
    }
    const finalCode = id.final.charCodeAt(0);
    if (finalRange[0] > finalCode || finalCode > finalRange[1]) {
      throw new Error(`final must be in range ${finalRange[0]} .. ${finalRange[1]}`);
    }
    res <<= 8;
    res |= finalCode;

    return res;
  }

  public identToString(ident: number): string {
    const res: string[] = [];
    while (ident) {
      res.push(String.fromCharCode(ident & 0xFF));
      ident >>= 8;
    }
    return res.reverse().join('');
  }

  public setPrintHandler(handler: PrintHandlerType): void {
    this._printHandler = handler;
  }
  public clearPrintHandler(): void {
    this._printHandler = this._printHandlerFb;
  }

  public registerEscHandler(id: IFunctionIdentifier, handler: EscHandlerType): IDisposable {
    const ident = this._identifier(id, [0x30, 0x7e]);
    if (this._escHandlers[ident] === undefined) {
      this._escHandlers[ident] = [];
    }
    const handlerList = this._escHandlers[ident];
    handlerList.push(handler);
    return {
      dispose: () => {
        const handlerIndex = handlerList.indexOf(handler);
        if (handlerIndex !== -1) {
          handlerList.splice(handlerIndex, 1);
        }
      }
    };
  }
  public clearEscHandler(id: IFunctionIdentifier): void {
    if (this._escHandlers[this._identifier(id, [0x30, 0x7e])]) delete this._escHandlers[this._identifier(id, [0x30, 0x7e])];
  }
  public setEscHandlerFallback(handler: EscFallbackHandlerType): void {
    this._escHandlerFb = handler;
  }

  public setExecuteHandler(flag: string, handler: ExecuteHandlerType): void {
    this._executeHandlers[flag.charCodeAt(0)] = handler;
  }
  public clearExecuteHandler(flag: string): void {
    if (this._executeHandlers[flag.charCodeAt(0)]) delete this._executeHandlers[flag.charCodeAt(0)];
  }
  public setExecuteHandlerFallback(handler: ExecuteFallbackHandlerType): void {
    this._executeHandlerFb = handler;
  }

  public registerCsiHandler(id: IFunctionIdentifier, handler: CsiHandlerType): IDisposable {
    const ident = this._identifier(id);
    if (this._csiHandlers[ident] === undefined) {
      this._csiHandlers[ident] = [];
    }
    const handlerList = this._csiHandlers[ident];
    handlerList.push(handler);
    return {
      dispose: () => {
        const handlerIndex = handlerList.indexOf(handler);
        if (handlerIndex !== -1) {
          handlerList.splice(handlerIndex, 1);
        }
      }
    };
  }
  public clearCsiHandler(id: IFunctionIdentifier): void {
    if (this._csiHandlers[this._identifier(id)]) delete this._csiHandlers[this._identifier(id)];
  }
  public setCsiHandlerFallback(callback: (ident: number, params: IParams) => void): void {
    this._csiHandlerFb = callback;
  }

  public registerDcsHandler(id: IFunctionIdentifier, handler: IDcsHandler): IDisposable {
    return this._dcsParser.registerHandler(this._identifier(id), handler);
  }
  public clearDcsHandler(id: IFunctionIdentifier): void {
    this._dcsParser.clearHandler(this._identifier(id));
  }
  public setDcsHandlerFallback(handler: DcsFallbackHandlerType): void {
    this._dcsParser.setHandlerFallback(handler);
  }

  public registerOscHandler(ident: number, handler: IOscHandler): IDisposable {
    return this._oscParser.registerHandler(ident, handler);
  }
  public clearOscHandler(ident: number): void {
    this._oscParser.clearHandler(ident);
  }
  public setOscHandlerFallback(handler: OscFallbackHandlerType): void {
    this._oscParser.setHandlerFallback(handler);
  }

  public setErrorHandler(callback: (state: IParsingState) => IParsingState): void {
    this._errorHandler = callback;
  }
  public clearErrorHandler(): void {
    this._errorHandler = this._errorHandlerFb;
  }

  /**
   * Reset parser to initial values.
   *
   * This can also be used to lift the improper continuation error condition
   * when dealing with async handlers. Use this only as a last resort to silence
   * that error when the terminal has no pending data to be processed. Note that
   * the interrupted async handler might continue its work in the future messing
   * up the terminal state even further.
   */
  public reset(): void {
    this.currentState = this.initialState;
    this._oscParser.reset();
    this._dcsParser.reset();
    this._params.reset();
    this._params.addParam(0); // ZDM
    this._collect = 0;
    this.precedingJoinState = 0;
    // abort pending continuation from async handler
    // Here the RESET type indicates, that the next parse call will
    // ignore any saved stack, instead continues sync with next codepoint from GROUND
    if (this._parseStack.state !== ParserStackType.NONE) {
      this._parseStack.state = ParserStackType.RESET;
      this._parseStack.handlers = []; // also release handlers ref
    }
  }

  /**
   * Async parse support.
   */
  protected _preserveStack(
    state: ParserStackType,
    handlers: ResumableHandlersType,
    handlerPos: number,
    transition: number,
    chunkPos: number
  ): void {
    this._parseStack.state = state;
    this._parseStack.handlers = handlers;
    this._parseStack.handlerPos = handlerPos;
    this._parseStack.transition = transition;
    this._parseStack.chunkPos = chunkPos;
  }

  /**
   * Parse UTF32 codepoints in `data` up to `length`.
   *
   * Note: For several actions with high data load the parsing is optimized
   * by using local read ahead loops with hardcoded conditions to
   * avoid costly table lookups. Make sure that any change of table values
   * will be reflected in the loop conditions as well and vice versa.
   * Affected states/actions:
   * - GROUND:PRINT
   * - CSI_PARAM:PARAM
   * - DCS_PARAM:PARAM
   * - OSC_STRING:OSC_PUT
   * - DCS_PASSTHROUGH:DCS_PUT
   *
   * Note on asynchronous handler support:
   * Any handler returning a promise will be treated as asynchronous.
   * To keep the in-band blocking working for async handlers, `parse` pauses execution,
   * creates a stack save and returns the promise to the caller.
   * For proper continuation of the paused state it is important
   * to await the promise resolving. On resolve the parse must be repeated
   * with the same chunk of data and the resolved value in `promiseResult`
   * until no promise is returned.
   *
   * Important: With only sync handlers defined, parsing is completely synchronous as well.
   * As soon as an async handler is involved, synchronous parsing is not possible anymore.
   *
   * Boilerplate for proper parsing of multiple chunks with async handlers:
   *
   * ```typescript
   * async function parseMultipleChunks(chunks: Uint32Array[]): Promise<void> {
   *   for (const chunk of chunks) {
   *     let result: void | Promise<boolean>;
   *     let prev: boolean | undefined;
   *     while (result = parser.parse(chunk, chunk.length, prev)) {
   *       prev = await result;
   *     }
   *   }
   *   // finished parsing all chunks...
   * }
   * ```
   */
  public parse(data: Uint32Array, length: number, promiseResult?: boolean): void | Promise<boolean> {
    let code = 0;
    let transition = 0;
    let start = 0;
    let handlerResult: void | boolean | Promise<boolean>;

    // resume from async handler
    if (this._parseStack.state) {
      // allow sync parser reset even in continuation mode
      // Note: can be used to recover parser from improper continuation error below
      if (this._parseStack.state === ParserStackType.RESET) {
        this._parseStack.state = ParserStackType.NONE;
        start = this._parseStack.chunkPos + 1; // continue with next codepoint in GROUND
      } else {
        if (promiseResult === undefined || this._parseStack.state === ParserStackType.FAIL) {
          /**
           * Reject further parsing on improper continuation after pausing. This is a really bad
           * condition with screwed up execution order and prolly messed up terminal state,
           * therefore we exit hard with an exception and reject any further parsing.
           *
           * Note: With `Terminal.write` usage this exception should never occur, as the top level
           * calls are guaranteed to handle async conditions properly. If you ever encounter this
           * exception in your terminal integration it indicates, that you injected data chunks to
           * `InputHandler.parse` or `EscapeSequenceParser.parse` synchronously without waiting for
           * continuation of a running async handler.
           *
           * It is possible to get rid of this error by calling `reset`. But dont rely on that, as
           * the pending async handler still might mess up the terminal later. Instead fix the
           * faulty async handling, so this error will not be thrown anymore.
           */
          this._parseStack.state = ParserStackType.FAIL;
          throw new Error('improper continuation due to previous async handler, giving up parsing');
        }

        // we have to resume the old handler loop if:
        // - return value of the promise was `false`
        // - handlers are not exhausted yet
        const handlers = this._parseStack.handlers;
        let handlerPos = this._parseStack.handlerPos - 1;
        switch (this._parseStack.state) {
          case ParserStackType.CSI:
            if (promiseResult === false && handlerPos > -1) {
              for (; handlerPos >= 0; handlerPos--) {
                handlerResult = (handlers as CsiHandlerType[])[handlerPos](this._params);
                if (handlerResult === true) {
                  break;
                } else if (handlerResult instanceof Promise) {
                  this._parseStack.handlerPos = handlerPos;
                  return handlerResult;
                }
              }
            }
            this._parseStack.handlers = [];
            break;
          case ParserStackType.ESC:
            if (promiseResult === false && handlerPos > -1) {
              for (; handlerPos >= 0; handlerPos--) {
                handlerResult = (handlers as EscHandlerType[])[handlerPos]();
                if (handlerResult === true) {
                  break;
                } else if (handlerResult instanceof Promise) {
                  this._parseStack.handlerPos = handlerPos;
                  return handlerResult;
                }
              }
            }
            this._parseStack.handlers = [];
            break;
          case ParserStackType.DCS:
            code = data[this._parseStack.chunkPos];
            handlerResult = this._dcsParser.unhook(code !== 0x18 && code !== 0x1a, promiseResult);
            if (handlerResult) {
              return handlerResult;
            }
            if (code === 0x1b) this._parseStack.transition |= ParserState.ESCAPE;
            this._params.reset();
            this._params.addParam(0); // ZDM
            this._collect = 0;
            break;
          case ParserStackType.OSC:
            code = data[this._parseStack.chunkPos];
            handlerResult = this._oscParser.end(code !== 0x18 && code !== 0x1a, promiseResult);
            if (handlerResult) {
              return handlerResult;
            }
            if (code === 0x1b) this._parseStack.transition |= ParserState.ESCAPE;
            this._params.reset();
            this._params.addParam(0); // ZDM
            this._collect = 0;
            break;
        }
        // cleanup before continuing with the main sync loop
        this._parseStack.state = ParserStackType.NONE;
        start = this._parseStack.chunkPos + 1;
        this.precedingJoinState = 0;
        this.currentState = this._parseStack.transition & TableAccess.TRANSITION_STATE_MASK;
      }
    }

    // continue with main sync loop

    // process input string
    for (let i = start; i < length; ++i) {
      code = data[i];

      // normal transition & action lookup
      transition = this._transitions.table[this.currentState << TableAccess.INDEX_STATE_SHIFT | (code < 0xa0 ? code : NON_ASCII_PRINTABLE)];
      switch (transition >> TableAccess.TRANSITION_ACTION_SHIFT) {
        case ParserAction.PRINT:
          // read ahead with loop unrolling
          // Note: 0x20 (SP) is included, 0x7F (DEL) is excluded
          for (let j = i + 1; ; ++j) {
            if (j >= length || (code = data[j]) < 0x20 || (code > 0x7e && code < NON_ASCII_PRINTABLE)) {
              this._printHandler(data, i, j);
              i = j - 1;
              break;
            }
            if (++j >= length || (code = data[j]) < 0x20 || (code > 0x7e && code < NON_ASCII_PRINTABLE)) {
              this._printHandler(data, i, j);
              i = j - 1;
              break;
            }
            if (++j >= length || (code = data[j]) < 0x20 || (code > 0x7e && code < NON_ASCII_PRINTABLE)) {
              this._printHandler(data, i, j);
              i = j - 1;
              break;
            }
            if (++j >= length || (code = data[j]) < 0x20 || (code > 0x7e && code < NON_ASCII_PRINTABLE)) {
              this._printHandler(data, i, j);
              i = j - 1;
              break;
            }
          }
          break;
        case ParserAction.EXECUTE:
          if (this._executeHandlers[code]) this._executeHandlers[code]();
          else this._executeHandlerFb(code);
          this.precedingJoinState = 0;
          break;
        case ParserAction.IGNORE:
          break;
        case ParserAction.ERROR:
          const inject: IParsingState = this._errorHandler(
            {
              position: i,
              code,
              currentState: this.currentState,
              collect: this._collect,
              params: this._params,
              abort: false
            });
          if (inject.abort) return;
          // inject values: currently not implemented
          break;
        case ParserAction.CSI_DISPATCH:
          // Trigger CSI Handler
          const handlers = this._csiHandlers[this._collect << 8 | code];
          let j = handlers ? handlers.length - 1 : -1;
          for (; j >= 0; j--) {
            // true means success and to stop bubbling
            // a promise indicates an async handler that needs to finish before progressing
            handlerResult = handlers[j](this._params);
            if (handlerResult === true) {
              break;
            } else if (handlerResult instanceof Promise) {
              this._preserveStack(ParserStackType.CSI, handlers, j, transition, i);
              return handlerResult;
            }
          }
          if (j < 0) {
            this._csiHandlerFb(this._collect << 8 | code, this._params);
          }
          this.precedingJoinState = 0;
          break;
        case ParserAction.PARAM:
          // inner loop: digits (0x30 - 0x39) and ; (0x3b) and : (0x3a)
          do {
            switch (code) {
              case 0x3b:
                this._params.addParam(0);  // ZDM
                break;
              case 0x3a:
                this._params.addSubParam(-1);
                break;
              default:  // 0x30 - 0x39
                this._params.addDigit(code - 48);
            }
          } while (++i < length && (code = data[i]) > 0x2f && code < 0x3c);
          i--;
          break;
        case ParserAction.COLLECT:
          this._collect <<= 8;
          this._collect |= code;
          break;
        case ParserAction.ESC_DISPATCH:
          const handlersEsc = this._escHandlers[this._collect << 8 | code];
          let jj = handlersEsc ? handlersEsc.length - 1 : -1;
          for (; jj >= 0; jj--) {
            // true means success and to stop bubbling
            // a promise indicates an async handler that needs to finish before progressing
            handlerResult = handlersEsc[jj]();
            if (handlerResult === true) {
              break;
            } else if (handlerResult instanceof Promise) {
              this._preserveStack(ParserStackType.ESC, handlersEsc, jj, transition, i);
              return handlerResult;
            }
          }
          if (jj < 0) {
            this._escHandlerFb(this._collect << 8 | code);
          }
          this.precedingJoinState = 0;
          break;
        case ParserAction.CLEAR:
          this._params.reset();
          this._params.addParam(0); // ZDM
          this._collect = 0;
          break;
        case ParserAction.DCS_HOOK:
          this._dcsParser.hook(this._collect << 8 | code, this._params);
          break;
        case ParserAction.DCS_PUT:
          // inner loop - exit DCS_PUT: 0x18, 0x1a, 0x1b, 0x7f, 0x80 - 0x9f
          // unhook triggered by: 0x1b, 0x9c (success) and 0x18, 0x1a (abort)
          for (let j = i + 1; ; ++j) {
            if (j >= length || (code = data[j]) === 0x18 || code === 0x1a || code === 0x1b || (code > 0x7f && code < NON_ASCII_PRINTABLE)) {
              this._dcsParser.put(data, i, j);
              i = j - 1;
              break;
            }
          }
          break;
        case ParserAction.DCS_UNHOOK:
          handlerResult = this._dcsParser.unhook(code !== 0x18 && code !== 0x1a);
          if (handlerResult) {
            this._preserveStack(ParserStackType.DCS, [], 0, transition, i);
            return handlerResult;
          }
          if (code === 0x1b) transition |= ParserState.ESCAPE;
          this._params.reset();
          this._params.addParam(0); // ZDM
          this._collect = 0;
          this.precedingJoinState = 0;
          break;
        case ParserAction.OSC_START:
          this._oscParser.start();
          break;
        case ParserAction.OSC_PUT:
          // inner loop: 0x20 (SP) included, 0x7F (DEL) included
          for (let j = i + 1; ; j++) {
            if (j >= length || (code = data[j]) < 0x20 || (code > 0x7f && code < NON_ASCII_PRINTABLE)) {
              this._oscParser.put(data, i, j);
              i = j - 1;
              break;
            }
          }
          break;
        case ParserAction.OSC_END:
          handlerResult = this._oscParser.end(code !== 0x18 && code !== 0x1a);
          if (handlerResult) {
            this._preserveStack(ParserStackType.OSC, [], 0, transition, i);
            return handlerResult;
          }
          if (code === 0x1b) transition |= ParserState.ESCAPE;
          this._params.reset();
          this._params.addParam(0); // ZDM
          this._collect = 0;
          this.precedingJoinState = 0;
          break;
      }
      this.currentState = transition & TableAccess.TRANSITION_STATE_MASK;
    }
  }
}

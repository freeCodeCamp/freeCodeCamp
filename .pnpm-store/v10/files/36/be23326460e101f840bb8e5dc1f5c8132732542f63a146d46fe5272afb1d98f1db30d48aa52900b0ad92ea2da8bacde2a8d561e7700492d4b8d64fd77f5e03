/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IDeleteEvent, IInsertEvent } from 'common/CircularList';
import { Attributes, UnderlineStyle } from 'common/buffer/Constants'; // eslint-disable-line no-unused-vars
import { IBufferSet } from 'common/buffer/Types';
import { IParams } from 'common/parser/Types';
import { ICoreMouseService, ICoreService, IOptionsService, IUnicodeService } from 'common/services/Services';
import { IFunctionIdentifier, ITerminalOptions as IPublicTerminalOptions } from '@xterm/xterm';
import type { Emitter, Event } from 'vs/base/common/event';

export interface ICoreTerminal {
  coreMouseService: ICoreMouseService;
  coreService: ICoreService;
  optionsService: IOptionsService;
  unicodeService: IUnicodeService;
  buffers: IBufferSet;
  options: Required<ITerminalOptions>;
  registerCsiHandler(id: IFunctionIdentifier, callback: (params: IParams) => boolean | Promise<boolean>): IDisposable;
  registerDcsHandler(id: IFunctionIdentifier, callback: (data: string, param: IParams) => boolean | Promise<boolean>): IDisposable;
  registerEscHandler(id: IFunctionIdentifier, callback: () => boolean | Promise<boolean>): IDisposable;
  registerOscHandler(ident: number, callback: (data: string) => boolean | Promise<boolean>): IDisposable;
}

export interface IDisposable {
  dispose(): void;
}

// TODO: The options that are not in the public API should be reviewed
export interface ITerminalOptions extends IPublicTerminalOptions {
  [key: string]: any;
  cancelEvents?: boolean;
  convertEol?: boolean;
  termName?: string;
}

export type CursorStyle = 'block' | 'underline' | 'bar';

export type CursorInactiveStyle = 'outline' | 'block' | 'bar' | 'underline' | 'none';

export type XtermListener = (...args: any[]) => void;

/**
 * A keyboard event interface which does not depend on the DOM, KeyboardEvent implicitly extends
 * this event.
 */
export interface IKeyboardEvent {
  altKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
  /** @deprecated See KeyboardEvent.keyCode */
  keyCode: number;
  key: string;
  type: string;
  code: string;
}

export interface IScrollEvent {
  position: number;
}

export interface ICircularList<T> {
  length: number;
  maxLength: number;
  isFull: boolean;

  onDeleteEmitter: Emitter<IDeleteEvent>;
  onDelete: Event<IDeleteEvent>;
  onInsertEmitter: Emitter<IInsertEvent>;
  onInsert: Event<IInsertEvent>;
  onTrimEmitter: Emitter<number>;
  onTrim: Event<number>;

  get(index: number): T | undefined;
  set(index: number, value: T): void;
  push(value: T): void;
  recycle(): T;
  pop(): T | undefined;
  splice(start: number, deleteCount: number, ...items: T[]): void;
  trimStart(count: number): void;
  shiftElements(start: number, count: number, offset: number): void;
}

export const enum KeyboardResultType {
  SEND_KEY,
  SELECT_ALL,
  PAGE_UP,
  PAGE_DOWN
}

export interface IKeyboardResult {
  type: KeyboardResultType;
  cancel: boolean;
  key: string | undefined;
}

export interface ICharset {
  [key: string]: string | undefined;
}

export type CharData = [number, string, number, number];

export interface IColor {
  readonly css: string;
  readonly rgba: number; // 32-bit int with rgba in each byte
}
export type IColorRGB = [number, number, number];

export interface IExtendedAttrs {
  ext: number;
  underlineStyle: UnderlineStyle;
  underlineColor: number;
  underlineVariantOffset: number;
  urlId: number;
  clone(): IExtendedAttrs;
  isEmpty(): boolean;
}

/**
 * Tracks the current hyperlink. Since these are treated as extended attirbutes, these get passed on
 * to the linkifier when anything is printed. Doing it this way ensures that even when the cursor
 * moves around unexpectedly the link is tracked, as opposed to using a start position and
 * finalizing it at the end.
 */
export interface IOscLinkData {
  id?: string;
  uri: string;
}

/**
 * An object that represents all attributes of a cell.
 */
export interface IAttributeData {
  /**
   * "fg" is a 32-bit unsigned integer that stores the foreground color of the cell in the 24 least
   * significant bits and additional flags in the remaining 8 bits.
   */
  fg: number;
  /**
   * "bg" is a 32-bit unsigned integer that stores the background color of the cell in the 24 least
   * significant bits and additional flags in the remaining 8 bits.
   */
  bg: number;
  /**
   * "extended", aka "ext", stores extended attributes beyond those available in fg and bg. This
   * data is optional on a cell and encodes less common data.
   */
  extended: IExtendedAttrs;

  clone(): IAttributeData;

  // flags
  isInverse(): number;
  isBold(): number;
  isUnderline(): number;
  isBlink(): number;
  isInvisible(): number;
  isItalic(): number;
  isDim(): number;
  isStrikethrough(): number;
  isProtected(): number;
  isOverline(): number;

  /**
   * The color mode of the foreground color which determines how to decode {@link getFgColor},
   * possible values include {@link Attributes.CM_DEFAULT}, {@link Attributes.CM_P16},
   * {@link Attributes.CM_P256} and {@link Attributes.CM_RGB}.
   */
  getFgColorMode(): number;
  /**
   * The color mode of the background color which determines how to decode {@link getBgColor},
   * possible values include {@link Attributes.CM_DEFAULT}, {@link Attributes.CM_P16},
   * {@link Attributes.CM_P256} and {@link Attributes.CM_RGB}.
   */
  getBgColorMode(): number;
  isFgRGB(): boolean;
  isBgRGB(): boolean;
  isFgPalette(): boolean;
  isBgPalette(): boolean;
  isFgDefault(): boolean;
  isBgDefault(): boolean;
  isAttributeDefault(): boolean;

  /**
   * Gets an integer representation of the foreground color, how to decode the color depends on the
   * color mode {@link getFgColorMode}.
   */
  getFgColor(): number;
  /**
   * Gets an integer representation of the background color, how to decode the color depends on the
   * color mode {@link getBgColorMode}.
   */
  getBgColor(): number;

  // extended attrs
  hasExtendedAttrs(): number;
  updateExtended(): void;
  getUnderlineColor(): number;
  getUnderlineColorMode(): number;
  isUnderlineColorRGB(): boolean;
  isUnderlineColorPalette(): boolean;
  isUnderlineColorDefault(): boolean;
  getUnderlineStyle(): number;
  getUnderlineVariantOffset(): number;
}

/** Cell data */
export interface ICellData extends IAttributeData {
  content: number;
  combinedData: string;
  isCombined(): number;
  getWidth(): number;
  getChars(): string;
  getCode(): number;
  setFromCharData(value: CharData): void;
  getAsCharData(): CharData;
}

/**
 * Interface for a line in the terminal buffer.
 */
export interface IBufferLine {
  length: number;
  isWrapped: boolean;
  get(index: number): CharData;
  set(index: number, value: CharData): void;
  loadCell(index: number, cell: ICellData): ICellData;
  setCell(index: number, cell: ICellData): void;
  setCellFromCodepoint(index: number, codePoint: number, width: number, attrs: IAttributeData): void;
  addCodepointToCell(index: number, codePoint: number, width: number): void;
  insertCells(pos: number, n: number, ch: ICellData): void;
  deleteCells(pos: number, n: number, fill: ICellData): void;
  replaceCells(start: number, end: number, fill: ICellData, respectProtect?: boolean): void;
  resize(cols: number, fill: ICellData): boolean;
  cleanupMemory(): number;
  fill(fillCellData: ICellData, respectProtect?: boolean): void;
  copyFrom(line: IBufferLine): void;
  clone(): IBufferLine;
  getTrimmedLength(): number;
  getNoBgTrimmedLength(): number;
  translateToString(trimRight?: boolean, startCol?: number, endCol?: number, outColumns?: number[]): string;

  /* direct access to cell attrs */
  getWidth(index: number): number;
  hasWidth(index: number): number;
  getFg(index: number): number;
  getBg(index: number): number;
  hasContent(index: number): number;
  getCodePoint(index: number): number;
  isCombined(index: number): number;
  getString(index: number): string;
}

export interface IMarker extends IDisposable {
  readonly id: number;
  readonly isDisposed: boolean;
  readonly line: number;
  onDispose: Event<void>;
}
export interface IModes {
  insertMode: boolean;
}

export interface IDecPrivateModes {
  applicationCursorKeys: boolean;
  applicationKeypad: boolean;
  bracketedPasteMode: boolean;
  cursorBlink: boolean | undefined;
  cursorStyle: CursorStyle | undefined;
  origin: boolean;
  reverseWraparound: boolean;
  sendFocus: boolean;
  synchronizedOutput: boolean;
  wraparound: boolean; // defaults: xterm - true, vt100 - false
}

export interface IRowRange {
  start: number;
  end: number;
}

/**
 * Interface for mouse events in the core.
 */
export const enum CoreMouseButton {
  LEFT = 0,
  MIDDLE = 1,
  RIGHT = 2,
  NONE = 3,
  WHEEL = 4,
  // additional buttons 1..8
  // untested!
  AUX1 = 8,
  AUX2 = 9,
  AUX3 = 10,
  AUX4 = 11,
  AUX5 = 12,
  AUX6 = 13,
  AUX7 = 14,
  AUX8 = 15
}

export const enum CoreMouseAction {
  UP = 0,     // buttons, wheel
  DOWN = 1,   // buttons, wheel
  LEFT = 2,   // wheel only
  RIGHT = 3,  // wheel only
  MOVE = 32   // buttons only
}

export interface ICoreMouseEvent {
  /** column (zero based). */
  col: number;
  /** row (zero based). */
  row: number;
  /** xy pixel positions. */
  x: number;
  y: number;
  /**
   * Button the action occured. Due to restrictions of the tracking protocols
   * it is not possible to report multiple buttons at once.
   * Wheel is treated as a button.
   * There are invalid combinations of buttons and actions possible
   * (like move + wheel), those are silently ignored by the CoreMouseService.
   */
  button: CoreMouseButton;
  action: CoreMouseAction;
  /**
   * Modifier states.
   * Protocols will add/ignore those based on specific restrictions.
   */
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
}

/**
 * CoreMouseEventType
 * To be reported to the browser component which events a mouse
 * protocol wants to be catched and forwarded as an ICoreMouseEvent
 * to CoreMouseService.
 */
export const enum CoreMouseEventType {
  NONE = 0,
  /** any mousedown event */
  DOWN = 1,
  /** any mouseup event */
  UP = 2,
  /** any mousemove event while a button is held */
  DRAG = 4,
  /** any mousemove event without a button */
  MOVE = 8,
  /** any wheel event */
  WHEEL = 16
}

/**
 * Mouse protocol interface.
 * A mouse protocol can be registered and activated at the CoreMouseService.
 * `events` should contain a list of needed events as a hint for the browser component
 * to install/remove the appropriate event handlers.
 * `restrict` applies further protocol specific restrictions like not allowed
 * modifiers or filtering invalid event types.
 */
export interface ICoreMouseProtocol {
  events: CoreMouseEventType;
  restrict: (e: ICoreMouseEvent) => boolean;
}

/**
 * CoreMouseEncoding
 * The tracking encoding can be registered and activated at the CoreMouseService.
 * If a ICoreMouseEvent passes all procotol restrictions it will be encoded
 * with the active encoding and sent out.
 * Note: Returning an empty string will supress sending a mouse report,
 * which can be used to skip creating falsey reports in limited encodings
 * (DEFAULT only supports up to 223 1-based as coord value).
 */
export type CoreMouseEncoding = (event: ICoreMouseEvent) => string;

/**
 * windowOptions
 */
export interface IWindowOptions {
  restoreWin?: boolean;
  minimizeWin?: boolean;
  setWinPosition?: boolean;
  setWinSizePixels?: boolean;
  raiseWin?: boolean;
  lowerWin?: boolean;
  refreshWin?: boolean;
  setWinSizeChars?: boolean;
  maximizeWin?: boolean;
  fullscreenWin?: boolean;
  getWinState?: boolean;
  getWinPosition?: boolean;
  getWinSizePixels?: boolean;
  getScreenSizePixels?: boolean;
  getCellSizePixels?: boolean;
  getWinSizeChars?: boolean;
  getScreenSizeChars?: boolean;
  getIconTitle?: boolean;
  getWinTitle?: boolean;
  pushTitle?: boolean;
  popTitle?: boolean;
  setWinLines?: boolean;
}

// color events from common, used for OSC 4/10/11/12 and 104/110/111/112
export const enum ColorRequestType {
  REPORT = 0,
  SET = 1,
  RESTORE = 2
}

// IntRange from https://stackoverflow.com/a/39495173
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;
type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export type ColorIndex = IntRange<0, 256>; // number from 0 to 255
export type AllColorIndex = ColorIndex | SpecialColorIndex;
export const enum SpecialColorIndex {
  FOREGROUND = 256,
  BACKGROUND = 257,
  CURSOR = 258
}
export interface IColorReportRequest {
  type: ColorRequestType.REPORT;
  index: AllColorIndex;
}
export interface IColorSetRequest {
  type: ColorRequestType.SET;
  index: AllColorIndex;
  color: IColorRGB;
}
export interface IColorRestoreRequest {
  type: ColorRequestType.RESTORE;
  index?: AllColorIndex;
}
export type IColorEvent = (IColorReportRequest | IColorSetRequest | IColorRestoreRequest)[];


/**
 * Calls the parser and handles actions generated by the parser.
 */
export interface IInputHandler {
  onTitleChange: Event<string>;

  parse(data: string | Uint8Array, promiseResult?: boolean): void | Promise<boolean>;
  print(data: Uint32Array, start: number, end: number): void;
  registerCsiHandler(id: IFunctionIdentifier, callback: (params: IParams) => boolean | Promise<boolean>): IDisposable;
  registerDcsHandler(id: IFunctionIdentifier, callback: (data: string, param: IParams) => boolean | Promise<boolean>): IDisposable;
  registerEscHandler(id: IFunctionIdentifier, callback: () => boolean | Promise<boolean>): IDisposable;
  registerOscHandler(ident: number, callback: (data: string) => boolean | Promise<boolean>): IDisposable;

  /** C0 BEL */ bell(): boolean;
  /** C0 LF */ lineFeed(): boolean;
  /** C0 CR */ carriageReturn(): boolean;
  /** C0 BS */ backspace(): boolean;
  /** C0 HT */ tab(): boolean;
  /** C0 SO */ shiftOut(): boolean;
  /** C0 SI */ shiftIn(): boolean;

  /** CSI @ */ insertChars(params: IParams): boolean;
  /** CSI SP @ */ scrollLeft(params: IParams): boolean;
  /** CSI A */ cursorUp(params: IParams): boolean;
  /** CSI SP A */ scrollRight(params: IParams): boolean;
  /** CSI B */ cursorDown(params: IParams): boolean;
  /** CSI C */ cursorForward(params: IParams): boolean;
  /** CSI D */ cursorBackward(params: IParams): boolean;
  /** CSI E */ cursorNextLine(params: IParams): boolean;
  /** CSI F */ cursorPrecedingLine(params: IParams): boolean;
  /** CSI G */ cursorCharAbsolute(params: IParams): boolean;
  /** CSI H */ cursorPosition(params: IParams): boolean;
  /** CSI I */ cursorForwardTab(params: IParams): boolean;
  /** CSI J */ eraseInDisplay(params: IParams): boolean;
  /** CSI K */ eraseInLine(params: IParams): boolean;
  /** CSI L */ insertLines(params: IParams): boolean;
  /** CSI M */ deleteLines(params: IParams): boolean;
  /** CSI P */ deleteChars(params: IParams): boolean;
  /** CSI S */ scrollUp(params: IParams): boolean;
  /** CSI T */ scrollDown(params: IParams, collect?: string): boolean;
  /** CSI X */ eraseChars(params: IParams): boolean;
  /** CSI Z */ cursorBackwardTab(params: IParams): boolean;
  /** CSI ` */ charPosAbsolute(params: IParams): boolean;
  /** CSI a */ hPositionRelative(params: IParams): boolean;
  /** CSI b */ repeatPrecedingCharacter(params: IParams): boolean;
  /** CSI c */ sendDeviceAttributesPrimary(params: IParams): boolean;
  /** CSI > c */ sendDeviceAttributesSecondary(params: IParams): boolean;
  /** CSI d */ linePosAbsolute(params: IParams): boolean;
  /** CSI e */ vPositionRelative(params: IParams): boolean;
  /** CSI f */ hVPosition(params: IParams): boolean;
  /** CSI g */ tabClear(params: IParams): boolean;
  /** CSI h */ setMode(params: IParams, collect?: string): boolean;
  /** CSI l */ resetMode(params: IParams, collect?: string): boolean;
  /** CSI m */ charAttributes(params: IParams): boolean;
  /** CSI n */ deviceStatus(params: IParams, collect?: string): boolean;
  /** CSI p */ softReset(params: IParams, collect?: string): boolean;
  /** CSI q */ setCursorStyle(params: IParams, collect?: string): boolean;
  /** CSI r */ setScrollRegion(params: IParams, collect?: string): boolean;
  /** CSI s */ saveCursor(params: IParams): boolean;
  /** CSI u */ restoreCursor(params: IParams): boolean;
  /** CSI ' } */ insertColumns(params: IParams): boolean;
  /** CSI ' ~ */ deleteColumns(params: IParams): boolean;

  /** OSC 0
      OSC 2 */ setTitle(data: string): boolean;
  /** OSC 4 */ setOrReportIndexedColor(data: string): boolean;
  /** OSC 10 */ setOrReportFgColor(data: string): boolean;
  /** OSC 11 */ setOrReportBgColor(data: string): boolean;
  /** OSC 12 */ setOrReportCursorColor(data: string): boolean;
  /** OSC 104 */ restoreIndexedColor(data: string): boolean;
  /** OSC 110 */ restoreFgColor(data: string): boolean;
  /** OSC 111 */ restoreBgColor(data: string): boolean;
  /** OSC 112 */ restoreCursorColor(data: string): boolean;

  /** ESC E */ nextLine(): boolean;
  /** ESC = */ keypadApplicationMode(): boolean;
  /** ESC > */ keypadNumericMode(): boolean;
  /** ESC % G
      ESC % @ */ selectDefaultCharset(): boolean;
  /** ESC ( C
      ESC ) C
      ESC * C
      ESC + C
      ESC - C
      ESC . C
      ESC / C */ selectCharset(collectAndFlag: string): boolean;
  /** ESC D */ index(): boolean;
  /** ESC H */ tabSet(): boolean;
  /** ESC M */ reverseIndex(): boolean;
  /** ESC c */ fullReset(): boolean;
  /** ESC n
      ESC o
      ESC |
      ESC }
      ESC ~ */ setgLevel(level: number): boolean;
  /** ESC # 8 */ screenAlignmentPattern(): boolean;
}

export interface IParseStack {
  paused: boolean;
  cursorStartX: number;
  cursorStartY: number;
  decodedLength: number;
  position: number;
}

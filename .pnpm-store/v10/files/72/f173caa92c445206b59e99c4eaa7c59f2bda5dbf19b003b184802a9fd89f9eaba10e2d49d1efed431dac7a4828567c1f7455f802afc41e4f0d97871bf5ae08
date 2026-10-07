/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IDecoration, IDecorationOptions, ILinkHandler, ILogger, IWindowsPty, type IOverviewRulerOptions } from '@xterm/xterm';
import { CoreMouseEncoding, CoreMouseEventType, CursorInactiveStyle, CursorStyle, IAttributeData, ICharset, IColor, ICoreMouseEvent, ICoreMouseProtocol, IDecPrivateModes, IDisposable, IModes, IOscLinkData, IWindowOptions } from 'common/Types';
import { IBuffer, IBufferSet } from 'common/buffer/Types';
import { createDecorator } from 'common/services/ServiceRegistry';
import type { Emitter, Event } from 'vs/base/common/event';

export const IBufferService = createDecorator<IBufferService>('BufferService');
export interface IBufferService {
  serviceBrand: undefined;

  readonly cols: number;
  readonly rows: number;
  readonly buffer: IBuffer;
  readonly buffers: IBufferSet;
  isUserScrolling: boolean;
  onResize: Event<IBufferResizeEvent>;
  onScroll: Event<number>;
  scroll(eraseAttr: IAttributeData, isWrapped?: boolean): void;
  scrollLines(disp: number, suppressScrollEvent?: boolean): void;
  resize(cols: number, rows: number): void;
  reset(): void;
}

export interface IBufferResizeEvent {
  cols: number;
  rows: number;
  colsChanged: boolean;
  rowsChanged: boolean;
}

export const ICoreMouseService = createDecorator<ICoreMouseService>('CoreMouseService');
export interface ICoreMouseService {
  serviceBrand: undefined;

  activeProtocol: string;
  activeEncoding: string;
  areMouseEventsActive: boolean;
  addProtocol(name: string, protocol: ICoreMouseProtocol): void;
  addEncoding(name: string, encoding: CoreMouseEncoding): void;
  reset(): void;

  /**
   * Triggers a mouse event to be sent.
   *
   * Returns true if the event passed all protocol restrictions and a report
   * was sent, otherwise false. The return value may be used to decide whether
   * the default event action in the bowser component should be omitted.
   *
   * Note: The method will change values of the given event object
   * to fullfill protocol and encoding restrictions.
   */
  triggerMouseEvent(event: ICoreMouseEvent): boolean;

  /**
   * Event to announce changes in mouse tracking.
   */
  onProtocolChange: Event<CoreMouseEventType>;

  /**
   * Human readable version of mouse events.
   */
  explainEvents(events: CoreMouseEventType): { [event: string]: boolean };

  /**
   * Process wheel event taking partial scroll into account.
   */
  consumeWheelEvent(ev: WheelEvent, cellHeight?: number, dpr?: number): number;
}

export const ICoreService = createDecorator<ICoreService>('CoreService');
export interface ICoreService {
  serviceBrand: undefined;

  /**
   * Initially the cursor will not be visible until the first time the terminal
   * is focused.
   */
  isCursorInitialized: boolean;
  isCursorHidden: boolean;

  readonly modes: IModes;
  readonly decPrivateModes: IDecPrivateModes;

  readonly onData: Event<string>;
  readonly onUserInput: Event<void>;
  readonly onBinary: Event<string>;
  readonly onRequestScrollToBottom: Event<void>;

  reset(): void;

  /**
   * Triggers the onData event in the public API.
   * @param data The data that is being emitted.
   * @param wasUserInput Whether the data originated from the user (as opposed to
   * resulting from parsing incoming data). When true this will also:
   * - Scroll to the bottom of the buffer if option scrollOnUserInput is true.
   * - Fire the `onUserInput` event (so selection can be cleared).
   */
  triggerDataEvent(data: string, wasUserInput?: boolean): void;

  /**
   * Triggers the onBinary event in the public API.
   * @param data The data that is being emitted.
   */
  triggerBinaryEvent(data: string): void;
}

export const ICharsetService = createDecorator<ICharsetService>('CharsetService');
export interface ICharsetService {
  serviceBrand: undefined;

  charset: ICharset | undefined;
  readonly glevel: number;

  reset(): void;

  /**
   * Set the G level of the terminal.
   * @param g
   */
  setgLevel(g: number): void;

  /**
   * Set the charset for the given G level of the terminal.
   * @param g
   * @param charset
   */
  setgCharset(g: number, charset: ICharset | undefined): void;
}

export interface IServiceIdentifier<T> {
  (...args: any[]): void;
  type: T;
  _id: string;
}

export interface IBrandedService {
  serviceBrand: undefined;
}

type GetLeadingNonServiceArgs<TArgs extends any[]> = TArgs extends [] ? []
  : TArgs extends [...infer TFirst, infer TLast] ? TLast extends IBrandedService ? GetLeadingNonServiceArgs<TFirst> : TArgs
    : never;

export const IInstantiationService = createDecorator<IInstantiationService>('InstantiationService');
export interface IInstantiationService {
  serviceBrand: undefined;

  setService<T>(id: IServiceIdentifier<T>, instance: T): void;
  getService<T>(id: IServiceIdentifier<T>): T | undefined;
  createInstance<Ctor extends new (...args: any[]) => any, R extends InstanceType<Ctor>>(t: Ctor, ...args: GetLeadingNonServiceArgs<ConstructorParameters<Ctor>>): R;
}

export enum LogLevelEnum {
  TRACE = 0,
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
  OFF = 5
}

export const ILogService = createDecorator<ILogService>('LogService');
export interface ILogService {
  serviceBrand: undefined;

  readonly logLevel: LogLevelEnum;

  trace(message: any, ...optionalParams: any[]): void;
  debug(message: any, ...optionalParams: any[]): void;
  info(message: any, ...optionalParams: any[]): void;
  warn(message: any, ...optionalParams: any[]): void;
  error(message: any, ...optionalParams: any[]): void;
}

export const IOptionsService = createDecorator<IOptionsService>('OptionsService');
export interface IOptionsService {
  serviceBrand: undefined;

  /**
   * Read only access to the raw options object, this is an internal-only fast path for accessing
   * single options without any validation as we trust TypeScript to enforce correct usage
   * internally.
   */
  readonly rawOptions: Required<ITerminalOptions>;

  /**
   * Options as exposed through the public API, this property uses getters and setters with
   * validation which makes it safer but slower. {@link rawOptions} should be used for pretty much
   * all internal usage for performance reasons.
   */
  readonly options: Required<ITerminalOptions>;

  /**
   * Adds an event listener for when any option changes.
   */
  readonly onOptionChange: Event<keyof ITerminalOptions>;

  /**
   * Adds an event listener for when a specific option changes, this is a convenience method that is
   * preferred over {@link onOptionChange} when only a single option is being listened to.
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  onSpecificOptionChange<T extends keyof ITerminalOptions>(key: T, listener: (arg1: Required<ITerminalOptions>[T]) => any): IDisposable;

  /**
   * Adds an event listener for when a set of specific options change, this is a convenience method
   * that is preferred over {@link onOptionChange} when multiple options are being listened to and
   * handled the same way.
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  onMultipleOptionChange(keys: (keyof ITerminalOptions)[], listener: () => any): IDisposable;
}

export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | number;
export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'off';

export interface ITerminalOptions {
  allowProposedApi?: boolean;
  allowTransparency?: boolean;
  altClickMovesCursor?: boolean;
  cols?: number;
  convertEol?: boolean;
  cursorBlink?: boolean;
  cursorStyle?: CursorStyle;
  cursorWidth?: number;
  cursorInactiveStyle?: CursorInactiveStyle;
  customGlyphs?: boolean;
  disableStdin?: boolean;
  documentOverride?: any | null;
  drawBoldTextInBrightColors?: boolean;
  /** @deprecated No longer supported */
  fastScrollModifier?: 'none' | 'alt' | 'ctrl' | 'shift';
  fastScrollSensitivity?: number;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: FontWeight;
  fontWeightBold?: FontWeight;
  ignoreBracketedPasteMode?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
  linkHandler?: ILinkHandler | null;
  logLevel?: LogLevel;
  logger?: ILogger | null;
  macOptionIsMeta?: boolean;
  macOptionClickForcesSelection?: boolean;
  minimumContrastRatio?: number;
  reflowCursorLine?: boolean;
  rescaleOverlappingGlyphs?: boolean;
  rightClickSelectsWord?: boolean;
  rows?: number;
  screenReaderMode?: boolean;
  scrollback?: number;
  scrollOnUserInput?: boolean;
  scrollSensitivity?: number;
  smoothScrollDuration?: number;
  tabStopWidth?: number;
  theme?: ITheme;
  windowsMode?: boolean;
  windowsPty?: IWindowsPty;
  windowOptions?: IWindowOptions;
  wordSeparator?: string;
  overviewRuler?: IOverviewRulerOptions;
  scrollOnEraseInDisplay?: boolean;

  [key: string]: any;
  cancelEvents: boolean;
  termName: string;
}

export interface ITheme {
  foreground?: string;
  background?: string;
  cursor?: string;
  cursorAccent?: string;
  selectionForeground?: string;
  selectionBackground?: string;
  selectionInactiveBackground?: string;
  scrollbarSliderBackground?: string;
  scrollbarSliderHoverBackground?: string;
  scrollbarSliderActiveBackground?: string;
  overviewRulerBorder?: string;
  black?: string;
  red?: string;
  green?: string;
  yellow?: string;
  blue?: string;
  magenta?: string;
  cyan?: string;
  white?: string;
  brightBlack?: string;
  brightRed?: string;
  brightGreen?: string;
  brightYellow?: string;
  brightBlue?: string;
  brightMagenta?: string;
  brightCyan?: string;
  brightWhite?: string;
  extendedAnsi?: string[];
}

export const IOscLinkService = createDecorator<IOscLinkService>('OscLinkService');
export interface IOscLinkService {
  serviceBrand: undefined;
  /**
   * Registers a link to the service, returning the link ID. The link data is managed by this
   * service and will be freed when this current cursor position is trimmed off the buffer.
   */
  registerLink(linkData: IOscLinkData): number;
  /**
   * Adds a line to a link if needed.
   */
  addLineToLink(linkId: number, y: number): void;
  /** Get the link data associated with a link ID. */
  getLinkData(linkId: number): IOscLinkData | undefined;
}

/*
 * Width and Grapheme_Cluster_Break properties of a character as a bit mask.
 *
 * bit 0: shouldJoin - should combine with preceding character.
 * bit 1..2: wcwidth - see UnicodeCharWidth.
 * bit 3..31: class of character (currently only 4 bits are used).
 *   This is used to determined grapheme clustering - i.e. which codepoints
 *   are to be combined into a single compound character.
 *
 * Use the UnicodeService static function createPropertyValue to create a
 * UnicodeCharProperties; use extractShouldJoin, extractWidth, and
 * extractCharKind to extract the components.
 */
export type UnicodeCharProperties = number;

/**
 * Width in columns of a character.
 * In a CJK context, "half-width" characters (such as Latin) are width 1,
 * while "full-width" characters (such as Kanji) are 2 columns wide.
 * Combining characters (such as accents) are width 0.
 */
export type UnicodeCharWidth = 0 | 1 | 2;

export const IUnicodeService = createDecorator<IUnicodeService>('UnicodeService');
export interface IUnicodeService {
  serviceBrand: undefined;
  /** Register an Unicode version provider. */
  register(provider: IUnicodeVersionProvider): void;
  /** Registered Unicode versions. */
  readonly versions: string[];
  /** Currently active version. */
  activeVersion: string;
  /** Event triggered, when activate version changed. */
  readonly onChange: Event<string>;

  /**
   * Unicode version dependent
   */
  wcwidth(codepoint: number): UnicodeCharWidth;
  getStringCellWidth(s: string): number;
  /**
   * Return character width and type for grapheme clustering.
   * If preceding != 0, it is the return code from the previous character;
   * in that case the result specifies if the characters should be joined.
   */
  charProperties(codepoint: number, preceding: UnicodeCharProperties): UnicodeCharProperties;
}

export interface IUnicodeVersionProvider {
  readonly version: string;
  wcwidth(ucs: number): UnicodeCharWidth;
  charProperties(codepoint: number, preceding: UnicodeCharProperties): UnicodeCharProperties;
}

export const IDecorationService = createDecorator<IDecorationService>('DecorationService');
export interface IDecorationService extends IDisposable {
  serviceBrand: undefined;
  readonly decorations: IterableIterator<IInternalDecoration>;
  readonly onDecorationRegistered: Event<IInternalDecoration>;
  readonly onDecorationRemoved: Event<IInternalDecoration>;
  registerDecoration(decorationOptions: IDecorationOptions): IDecoration | undefined;
  reset(): void;
  /**
   * Trigger a callback over the decoration at a cell (in no particular order). This uses a callback
   * instead of an iterator as it's typically used in hot code paths.
   */
  forEachDecorationAtCell(x: number, line: number, layer: 'bottom' | 'top' | undefined, callback: (decoration: IInternalDecoration) => void): void;
}
export interface IInternalDecoration extends IDecoration {
  readonly options: IDecorationOptions;
  readonly backgroundColorRGB: IColor | undefined;
  readonly foregroundColorRGB: IColor | undefined;
  readonly onRenderEmitter: Emitter<HTMLElement>;
}

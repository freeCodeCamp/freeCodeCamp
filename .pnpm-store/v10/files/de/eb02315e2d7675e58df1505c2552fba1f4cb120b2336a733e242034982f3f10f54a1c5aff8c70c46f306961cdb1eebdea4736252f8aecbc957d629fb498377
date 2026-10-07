/**
 * @license MIT
 *
 * This contains the type declarations for the xterm.js library. Note that
 * some interfaces differ between this file and the actual implementation in
 * src/, that's because this file declares the *public* API which is intended
 * to be stable and consumed by external programs.
 */

/// <reference lib="dom"/>

declare module '@xterm/xterm' {
  /**
   * A string or number representing text font weight.
   */
  export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | number;

  /**
   * A string representing log level.
   */
  export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'off';

  /**
   * An object containing options for the terminal.
   */
  export interface ITerminalOptions {
    /**
     * Whether to allow the use of proposed API. When false, any usage of APIs
     * marked as experimental/proposed will throw an error. The default is
     * false.
     */
    allowProposedApi?: boolean;

    /**
     * Whether background should support non-opaque color. It must be set before
     * executing the `Terminal.open()` method and can't be changed later without
     * executing it again. Note that enabling this can negatively impact
     * performance.
     */
    allowTransparency?: boolean;

    /**
     * If enabled, alt + click will move the prompt cursor to position
     * underneath the mouse. The default is true.
     */
    altClickMovesCursor?: boolean;

    /**
     * When enabled the cursor will be set to the beginning of the next line
     * with every new line. This is equivalent to sending `\r\n` for each `\n`.
     * Normally the settings of the underlying PTY (`termios`) deal with the
     * translation of `\n` to `\r\n` and this setting should not be used. If you
     * deal with data from a non-PTY related source, this settings might be
     * useful.
     *
     * @see https://pubs.opengroup.org/onlinepubs/007904975/basedefs/termios.h.html
     */
    convertEol?: boolean;

    /**
     * Whether the cursor blinks.
     */
    cursorBlink?: boolean;

    /**
     * The style of the cursor when the terminal is focused.
     */
    cursorStyle?: 'block' | 'underline' | 'bar';

    /**
     * The width of the cursor in CSS pixels when `cursorStyle` is set to 'bar'.
     */
    cursorWidth?: number;

    /**
     * The style of the cursor when the terminal is not focused.
     */
    cursorInactiveStyle?: 'outline' | 'block' | 'bar' | 'underline' | 'none';

    /**
     * Whether to draw custom glyphs for block element and box drawing
     * characters instead of using the font. This should typically result in
     * better rendering with continuous lines, even when line height and letter
     * spacing is used. Note that this doesn't work with the DOM renderer which
     * renders all characters using the font. The default is true.
     */
    customGlyphs?: boolean;

    /**
     * Whether input should be disabled.
     */
    disableStdin?: boolean;

    /**
     * A {@link Document} to use instead of the one that xterm.js was attached
     * to. The purpose of this is to improve support in multi-window
     * applications where HTML elements may be references across multiple
     * windows which can cause problems with `instanceof`.
     *
     * The type is `any` because using `Document` can cause TS to have
     * performance/compiler problems.
     */
    documentOverride?: any | null;

    /**
     * Whether to draw bold text in bright colors. The default is true.
     */
    drawBoldTextInBrightColors?: boolean;

    /**
     * The scroll speed multiplier used for fast scrolling when `Alt` is held.
     */
    fastScrollSensitivity?: number;

    /**
     * The font size used to render text.
     */
    fontSize?: number;

    /**
     * The font family used to render text.
     */
    fontFamily?: string;

    /**
     * The font weight used to render non-bold text.
     */
    fontWeight?: FontWeight;

    /**
     * The font weight used to render bold text.
     */
    fontWeightBold?: FontWeight;

    /**
     * Whether to ignore the bracketed paste mode. When true, this will always
     * paste without the `\x1b[200~` and `\x1b[201~` sequences, even when the
     * shell enables bracketed mode.
     */
    ignoreBracketedPasteMode?: boolean;

    /**
     * The spacing in whole pixels between characters.
     */
    letterSpacing?: number;

    /**
     * The line height used to render text.
     */
    lineHeight?: number;

    /**
     * The handler for OSC 8 hyperlinks. Links will use the `confirm` browser
     * API with a strongly worded warning if no link handler is set.
     *
     * When setting this, consider the security of users opening these links,
     * at a minimum there should be a tooltip or a prompt when hovering or
     * activating the link respectively. An example of what might be possible is
     * a terminal app writing link in the form `javascript:...` that runs some
     * javascript, a safe approach to prevent that is to validate the link
     * starts with http(s)://.
     */
    linkHandler?: ILinkHandler | null;

    /**
     * What log level to use, this will log for all levels below and including
     * what is set:
     *
     * 1. trace
     * 2. debug
     * 3. info (default)
     * 4. warn
     * 5. error
     * 6. off
     */
    logLevel?: LogLevel;

    /**
     * A logger to use instead of `console`.
     */
    logger?: ILogger | null;

    /**
     * Whether to treat option as the meta key.
     */
    macOptionIsMeta?: boolean;

    /**
     * Whether holding a modifier key will force normal selection behavior,
     * regardless of whether the terminal is in mouse events mode. This will
     * also prevent mouse events from being emitted by the terminal. For
     * example, this allows you to use xterm.js' regular selection inside tmux
     * with mouse mode enabled.
     */
    macOptionClickForcesSelection?: boolean;

    /**
     * The minimum contrast ratio for text in the terminal, setting this will
     * change the foreground color dynamically depending on whether the contrast
     * ratio is met. Example values:
     *
     * - 1: The default, do nothing.
     * - 4.5: Minimum for WCAG AA compliance.
     * - 7: Minimum for WCAG AAA compliance.
     * - 21: White on black or black on white.
     */
    minimumContrastRatio?: number;

    /**
     * Whether to reflow the line containing the cursor when the terminal is
     * resized. Defaults to false, because shells usually handle this
     * themselves.
     */
    reflowCursorLine?: boolean;

    /**
     * Whether to rescale glyphs horizontally that are a single cell wide but
     * have glyphs that would overlap following cell(s). This typically happens
     * for ambiguous width characters (eg. the roman numeral characters U+2160+)
     * which aren't featured in monospace fonts. This is an important feature
     * for achieving GB18030 compliance.
     *
     * The following glyphs will never be rescaled:
     *
     * - Emoji glyphs
     * - Powerline glyphs
     * - Nerd font glyphs
     *
     * Note that this doesn't work with the DOM renderer. The default is false.
     */
    rescaleOverlappingGlyphs?: boolean;

    /**
     * Whether to select the word under the cursor on right click, this is
     * standard behavior in a lot of macOS applications.
     */
    rightClickSelectsWord?: boolean;

    /**
     * Whether screen reader support is enabled. When on this will expose
     * supporting elements in the DOM to support NVDA on Windows and VoiceOver
     * on macOS.
     */
    screenReaderMode?: boolean;

    /**
     * The amount of scrollback in the terminal. Scrollback is the amount of
     * rows that are retained when lines are scrolled beyond the initial
     * viewport. Defaults to 1000.
     */
    scrollback?: number;

    /**
     * If enabled the Erase in Display All (ED2) escape sequence will push
     * erased text to scrollback, instead of clearing only the viewport portion.
     * This emulates PuTTY's default clear screen behavior.
     */
    scrollOnEraseInDisplay?: boolean;

    /**
     * Whether to scroll to the bottom whenever there is some user input. The
     * default is true.
     */
    scrollOnUserInput?: boolean;

    /**
     * The scrolling speed multiplier used for adjusting normal scrolling speed.
     */
    scrollSensitivity?: number;

    /**
     * The duration to smoothly scroll between the origin and the target in
     * milliseconds. Set to 0 to disable smooth scrolling and scroll instantly.
     */
    smoothScrollDuration?: number;

    /**
     * The size of tab stops in the terminal.
     */
    tabStopWidth?: number;

    /**
     * The color theme of the terminal.
     */
    theme?: ITheme;

    /**
     * Compatibility information when the pty is known to be hosted on Windows.
     * Setting this will turn on certain heuristics/workarounds depending on the
     * values:
     *
     * - `if (backend !== undefined || buildNumber !== undefined)`
     *   - When increasing the rows in the terminal, the amount increased into
     *     the scrollback. This is done because ConPTY does not behave like
     *     expect scrollback to come back into the viewport, instead it makes
     *     empty rows at of the viewport. Not having this behavior can result in
     *     missing data as the rows get replaced.
     * - `if !(backend === 'conpty' && buildNumber >= 21376)`
     *   - Reflow is disabled
     *   - Lines are assumed to be wrapped if the last character of the line is
     *     not whitespace.
     */
    windowsPty?: IWindowsPty;

    /**
     * A string containing all characters that are considered word separated by
     * the double click to select work logic.
     */
    wordSeparator?: string;

    /**
     * Enable various window manipulation and report features.
     * All features are disabled by default for security reasons.
     */
    windowOptions?: IWindowOptions;

    /**
     * Controls the visibility and style of the overview ruler which visualizes
     * decorations underneath the scroll bar.
     */
    overviewRuler?: IOverviewRulerOptions;
  }

  /**
   * An object containing additional options for the terminal that can only be
   * set on start up.
   */
  export interface ITerminalInitOnlyOptions {
    /**
     * The number of columns in the terminal.
     */
    cols?: number;

    /**
     * The number of rows in the terminal.
     */
    rows?: number;
  }

  /**
   * Contains colors to theme the terminal with.
   */
  export interface ITheme {
    /** The default foreground color */
    foreground?: string;
    /** The default background color */
    background?: string;
    /** The cursor color */
    cursor?: string;
    /** The accent color of the cursor (fg color for a block cursor) */
    cursorAccent?: string;
    /** The selection background color (can be transparent) */
    selectionBackground?: string;
    /** The selection foreground color */
    selectionForeground?: string;
    /**
     * The selection background color when the terminal does not have focus (can
     * be transparent)
     */
    selectionInactiveBackground?: string;
    /**
     * The scrollbar slider background color. Defaults to
     * {@link ITerminalOptions.foreground foreground} with 20% opacity.
     */
    scrollbarSliderBackground?: string;
    /**
     * The scrollbar slider background color when hovered. Defaults to
     * {@link ITerminalOptions.foreground foreground} with 40% opacity.
     */
    scrollbarSliderHoverBackground?: string;
    /**
     * The scrollbar slider background color when clicked. Defaults to
     * {@link ITerminalOptions.foreground foreground} with 50% opacity.
     */
    scrollbarSliderActiveBackground?: string;
    /**
     * The border color of the overview ruler. This visually separates the
     * terminal from the scroll bar when {@link IOverviewRulerOptions.width} is
     * set. When this is not set it defaults to black (`#000000`).
     */
    overviewRulerBorder?: string;
    /** ANSI black (eg. `\x1b[30m`) */
    black?: string;
    /** ANSI red (eg. `\x1b[31m`) */
    red?: string;
    /** ANSI green (eg. `\x1b[32m`) */
    green?: string;
    /** ANSI yellow (eg. `\x1b[33m`) */
    yellow?: string;
    /** ANSI blue (eg. `\x1b[34m`) */
    blue?: string;
    /** ANSI magenta (eg. `\x1b[35m`) */
    magenta?: string;
    /** ANSI cyan (eg. `\x1b[36m`) */
    cyan?: string;
    /** ANSI white (eg. `\x1b[37m`) */
    white?: string;
    /** ANSI bright black (eg. `\x1b[1;30m`) */
    brightBlack?: string;
    /** ANSI bright red (eg. `\x1b[1;31m`) */
    brightRed?: string;
    /** ANSI bright green (eg. `\x1b[1;32m`) */
    brightGreen?: string;
    /** ANSI bright yellow (eg. `\x1b[1;33m`) */
    brightYellow?: string;
    /** ANSI bright blue (eg. `\x1b[1;34m`) */
    brightBlue?: string;
    /** ANSI bright magenta (eg. `\x1b[1;35m`) */
    brightMagenta?: string;
    /** ANSI bright cyan (eg. `\x1b[1;36m`) */
    brightCyan?: string;
    /** ANSI bright white (eg. `\x1b[1;37m`) */
    brightWhite?: string;
    /** ANSI extended colors (16-255) */
    extendedAnsi?: string[];
  }

  /**
   * Pty information for Windows.
   */
  export interface IWindowsPty {
    /**
     * What pty emulation backend is being used.
     */
    backend?: 'conpty' | 'winpty';
    /**
     * The Windows build version (eg. 19045)
     */
    buildNumber?: number;
  }

  /**
   * A replacement logger for `console`.
   */
  export interface ILogger {
    /**
     * Log a trace message, this will only be called if
     * {@link ITerminalOptions.logLevel} is set to trace.
     */
    trace(message: string, ...args: any[]): void;
    /**
     * Log a debug message, this will only be called if
     * {@link ITerminalOptions.logLevel} is set to debug or below.
     */
    debug(message: string, ...args: any[]): void;
    /**
     * Log a debug message, this will only be called if
     * {@link ITerminalOptions.logLevel} is set to info or below.
     */
    info(message: string, ...args: any[]): void;
    /**
     * Log a debug message, this will only be called if
     * {@link ITerminalOptions.logLevel} is set to warn or below.
     */
    warn(message: string, ...args: any[]): void;
    /**
     * Log a debug message, this will only be called if
     * {@link ITerminalOptions.logLevel} is set to error or below.
     */
    error(message: string | Error, ...args: any[]): void;
  }

  /**
   * An object that can be disposed via a dispose function.
   */
  export interface IDisposable {
    dispose(): void;
  }

  /**
   * An event that can be listened to.
   * @returns an `IDisposable` to stop listening.
   */
  export interface IEvent<T, U = void> {
    (listener: (arg1: T, arg2: U) => any): IDisposable;
  }

  /**
   * Represents a specific line in the terminal that is tracked when scrollback
   * is trimmed and lines are added or removed. This is a single line that may
   * be part of a larger wrapped line.
   */
  export interface IMarker extends IDisposableWithEvent {
    /**
     * A unique identifier for this marker.
     */
    readonly id: number;

    /**
     * The actual line index in the buffer at this point in time. This is set to
     * -1 if the marker has been disposed.
     */
    readonly line: number;
  }

  /**
   * Represents a disposable that tracks is disposed state.
   */
  export interface IDisposableWithEvent extends IDisposable {
    /**
     * Event listener to get notified when this gets disposed.
     */
    onDispose: IEvent<void>;

    /**
     * Whether this is disposed.
     */
    readonly isDisposed: boolean;
  }

  /**
   * Represents a decoration in the terminal that is associated with a
   * particular marker and DOM element.
   */
  export interface IDecoration extends IDisposableWithEvent {
    /*
     * The marker for the decoration in the terminal.
     */
    readonly marker: IMarker;

    /**
     * An event fired when the decoration
     * is rendered, returns the dom element
     * associated with the decoration.
     */
    readonly onRender: IEvent<HTMLElement>;

    /**
     * The element that the decoration is rendered to. This will be undefined
     * until it is rendered for the first time by {@link IDecoration.onRender}.
     * that.
     */
    element: HTMLElement | undefined;

    /**
     * The options for the overview ruler that can be updated. This will only
     * take effect when {@link IDecorationOptions.overviewRulerOptions} were
     * provided initially.
     */
    options: Pick<IDecorationOptions, 'overviewRulerOptions'>;
  }


  /**
   * Overview ruler decoration options
   */
  interface IDecorationOverviewRulerOptions {
    color: string;
    position?: 'left' | 'center' | 'right' | 'full';
  }

  /*
   * Options that define the presentation of the decoration.
   */
  export interface IDecorationOptions {
    /**
     * The line in the terminal where
     * the decoration will be displayed
     */
    readonly marker: IMarker;

    /*
     * Where the decoration will be anchored -
     * defaults to the left edge
     */
    readonly anchor?: 'right' | 'left';

    /**
     * The x position offset relative to the anchor
     */
    readonly x?: number;


    /**
     * The width of the decoration in cells, defaults to 1.
     */
    readonly width?: number;

    /**
     * The height of the decoration in cells, defaults to 1.
     */
    readonly height?: number;

    /**
     * The background color of the cell(s). When 2 decorations both set the
     * foreground color the last registered decoration will be used. Only the
     * `#RRGGBB` format is supported.
     */
    readonly backgroundColor?: string;

    /**
     * The foreground color of the cell(s). When 2 decorations both set the
     * foreground color the last registered decoration will be used. Only the
     * `#RRGGBB` format is supported.
     */
    readonly foregroundColor?: string;

    /**
     * What layer to render the decoration at when {@link backgroundColor} or
     * {@link foregroundColor} are used. `'bottom'` will render under the
     * selection, `'top`' will render above the selection\*.
     */
    readonly layer?: 'bottom' | 'top';

    /**
     * When defined, renders the decoration in the overview ruler to the right
     * of the terminal. {@link IOverviewRulerOptions.width} must be set in order
     * to see the overview ruler.
     * @param color The color of the decoration.
     * @param position The position of the decoration.
     */
    overviewRulerOptions?: IDecorationOverviewRulerOptions;
  }

  /**
   * The set of localizable strings.
   */
  export interface ILocalizableStrings {
    /**
     * The aria label for the underlying input textarea for the terminal.
     */
    promptLabel: string;

    /**
     * Announcement for when line reading is suppressed due to too many lines
     * being printed to the terminal when `screenReaderMode` is enabled.
     */
    tooMuchOutput: string;
  }

  export interface IOverviewRulerOptions {
    /**
     * When defined, renders decorations in the overview ruler to the right of
     * the terminal. This must be set in order to see the overview ruler.
     * @param color The color of the decoration.
     * @param position The position of the decoration.
     */
    width?: number;

    /**
     * Whether to show the top border of the overview ruler, which uses the
     * {@link ITheme.overviewRulerBorder} color.
     */
    showTopBorder?: boolean;

    /**
     * Whether to show the bottom border of the overview ruler, which uses the
     * {@link ITheme.overviewRulerBorder} color.
     */
    showBottomBorder?: boolean;
  }

  /**
   * Enable various window manipulation and report features
   * (`CSI Ps ; Ps ; Ps t`).
   *
   * Most settings have no default implementation, as they heavily rely on
   * the embedding environment.
   *
   * To implement a feature, create a custom CSI hook like this:
   * ```ts
   * term.parser.addCsiHandler({final: 't'}, params => {
   *   const ps = params[0];
   *   switch (ps) {
   *     case XY:
   *       ...            // your implementation for option XY
   *       return true;   // signal Ps=XY was handled
   *   }
   *   return false;      // any Ps that was not handled
   * });
   * ```
   *
   * Note on security:
   * Most features are meant to deal with some information of the host machine
   * where the terminal runs on. This is seen as a security risk possibly
   * leaking sensitive data of the host to the program in the terminal.
   * Therefore all options (even those without a default implementation) are
   * guarded by the boolean flag and disabled by default.
   */
  export interface IWindowOptions {
    /**
     * Ps=1    De-iconify window.
     * No default implementation.
     */
    restoreWin?: boolean;
    /**
     * Ps=2    Iconify window.
     * No default implementation.
     */
    minimizeWin?: boolean;
    /**
     * Ps=3 ; x ; y
     * Move window to [x, y].
     * No default implementation.
     */
    setWinPosition?: boolean;
    /**
     * Ps = 4 ; height ; width
     * Resize the window to given `height` and `width` in pixels.
     * Omitted parameters should reuse the current height or width.
     * Zero parameters should use the display's height or width.
     * No default implementation.
     */
    setWinSizePixels?: boolean;
    /**
     * Ps=5    Raise the window to the front of the stacking order.
     * No default implementation.
     */
    raiseWin?: boolean;
    /**
     * Ps=6    Lower the xterm window to the bottom of the stacking order.
     * No default implementation.
     */
    lowerWin?: boolean;
    /** Ps=7    Refresh the window. */
    refreshWin?: boolean;
    /**
     * Ps = 8 ; height ; width
     * Resize the text area to given height and width in characters.
     * Omitted parameters should reuse the current height or width.
     * Zero parameters use the display's height or width.
     * No default implementation.
     */
    setWinSizeChars?: boolean;
    /**
     * Ps=9 ; 0   Restore maximized window.
     * Ps=9 ; 1   Maximize window (i.e., resize to screen size).
     * Ps=9 ; 2   Maximize window vertically.
     * Ps=9 ; 3   Maximize window horizontally.
     * No default implementation.
     */
    maximizeWin?: boolean;
    /**
     * Ps=10 ; 0  Undo full-screen mode.
     * Ps=10 ; 1  Change to full-screen.
     * Ps=10 ; 2  Toggle full-screen.
     * No default implementation.
     */
    fullscreenWin?: boolean;
    /** Ps=11   Report xterm window state.
     * If the xterm window is non-iconified, it returns "CSI 1 t".
     * If the xterm window is iconified, it returns "CSI 2 t".
     * No default implementation.
     */
    getWinState?: boolean;
    /**
     * Ps=13      Report xterm window position. Result is "CSI 3 ; x ; y t".
     * Ps=13 ; 2  Report xterm text-area position. Result is "CSI 3 ; x ; y t".
     * No default implementation.
     */
    getWinPosition?: boolean;
    /**
     * Ps=14      Report xterm text area size in pixels. Result is "CSI 4 ; height ; width t".
     * Ps=14 ; 2  Report xterm window size in pixels. Result is "CSI  4 ; height ; width t".
     * Has a default implementation.
     */
    getWinSizePixels?: boolean;
    /**
     * Ps=15    Report size of the screen in pixels. Result is "CSI 5 ; height ; width t".
     * No default implementation.
     */
    getScreenSizePixels?: boolean;
    /**
     * Ps=16  Report xterm character cell size in pixels. Result is "CSI 6 ; height ; width t".
     * Has a default implementation.
     */
    getCellSizePixels?: boolean;
    /**
     * Ps=18  Report the size of the text area in characters. Result is "CSI 8 ; height ; width t".
     * Has a default implementation.
     */
    getWinSizeChars?: boolean;
    /**
     * Ps=19  Report the size of the screen in characters. Result is "CSI 9 ; height ; width t".
     * No default implementation.
     */
    getScreenSizeChars?: boolean;
    /**
     * Ps=20  Report xterm window's icon label. Result is "OSC L label ST".
     * No default implementation.
     */
    getIconTitle?: boolean;
    /**
     * Ps=21  Report xterm window's title. Result is "OSC l label ST".
     * No default implementation.
     */
    getWinTitle?: boolean;
    /**
     * Ps=22 ; 0  Save xterm icon and window title on stack.
     * Ps=22 ; 1  Save xterm icon title on stack.
     * Ps=22 ; 2  Save xterm window title on stack.
     * All variants have a default implementation.
     */
    pushTitle?: boolean;
    /**
     * Ps=23 ; 0  Restore xterm icon and window title from stack.
     * Ps=23 ; 1  Restore xterm icon title from stack.
     * Ps=23 ; 2  Restore xterm window title from stack.
     * All variants have a default implementation.
     */
    popTitle?: boolean;
    /**
     * Ps>=24  Resize to Ps lines (DECSLPP).
     * DECSLPP is not implemented. This settings is also used to
     * enable / disable DECCOLM (earlier variant of DECSLPP).
     */
    setWinLines?: boolean;
  }

  /**
   * The class that represents an xterm.js terminal.
   */
  export class Terminal implements IDisposable {
    /**
     * The element containing the terminal.
     */
    readonly element: HTMLElement | undefined;

    /**
     * The textarea that accepts input for the terminal.
     */
    readonly textarea: HTMLTextAreaElement | undefined;

    /**
     * The number of rows in the terminal's viewport. Use
     * `ITerminalOptions.rows` to set this in the constructor and
     * `Terminal.resize` for when the terminal exists.
     */
    readonly rows: number;

    /**
     * The number of columns in the terminal's viewport. Use
     * `ITerminalOptions.cols` to set this in the constructor and
     * `Terminal.resize` for when the terminal exists.
     */
    readonly cols: number;

    /**
     * Access to the terminal's normal and alt buffer.
     */
    readonly buffer: IBufferNamespace;

    /**
     * (EXPERIMENTAL) Get all markers registered against the buffer. If the alt
     * buffer is active this will always return [].
     */
    readonly markers: ReadonlyArray<IMarker>;

    /**
     * Get the parser interface to register custom escape sequence handlers.
     */
    readonly parser: IParser;

    /**
     * (EXPERIMENTAL) Get the Unicode handling interface
     * to register and switch Unicode version.
     */
    readonly unicode: IUnicodeHandling;

    /**
     * Gets the terminal modes as set by SM/DECSET.
     */
    readonly modes: IModes;

    /**
     * Gets or sets the terminal options. This supports setting multiple
     * options.
     *
     * @example Get a single option
     * ```ts
     * console.log(terminal.options.fontSize);
     * ```
     *
     * @example Set a single option:
     * ```ts
     * terminal.options.fontSize = 12;
     * ```
     * Note that for options that are object, a new object must be used in order
     * to take effect as a reference comparison will be done:
     * ```ts
     * const newValue = terminal.options.theme;
     * newValue.background = '#000000';
     *
     * // This won't work
     * terminal.options.theme = newValue;
     *
     * // This will work
     * terminal.options.theme = { ...newValue };
     * ```
     *
     * @example Set multiple options
     * ```ts
     * terminal.options = {
     *   fontSize: 12,
     *   fontFamily: 'Courier New'
     * };
     * ```
     */
    options: ITerminalOptions;

    /**
     * Natural language strings that can be localized.
     */
    static strings: ILocalizableStrings;

    /**
     * Creates a new `Terminal` object.
     *
     * @param options An object containing a set of options.
     */
    constructor(options?: ITerminalOptions & ITerminalInitOnlyOptions);

    /**
     * Adds an event listener for when the bell is triggered.
     * @returns an `IDisposable` to stop listening.
     */
    onBell: IEvent<void>;

    /**
     * Adds an event listener for when a binary event fires. This is used to
     * enable non UTF-8 conformant binary messages to be sent to the backend.
     * Currently this is only used for a certain type of mouse reports that
     * happen to be not UTF-8 compatible.
     * The event value is a JS string, pass it to the underlying pty as
     * binary data, e.g. `pty.write(Buffer.from(data, 'binary'))`.
     * @returns an `IDisposable` to stop listening.
     */
    onBinary: IEvent<string>;

    /**
     * Adds an event listener for the cursor moves.
     * @returns an `IDisposable` to stop listening.
     */
    onCursorMove: IEvent<void>;

    /**
     * Adds an event listener for when a data event fires. This happens for
     * example when the user types or pastes into the terminal. The event value
     * is whatever `string` results, in a typical setup, this should be passed
     * on to the backing pty.
     * @returns an `IDisposable` to stop listening.
     */
    onData: IEvent<string>;

    /**
     * Adds an event listener for when a key is pressed. The event value
     * contains the string that will be sent in the data event as well as the
     * DOM event that triggered it.
     * @returns an `IDisposable` to stop listening.
     */
    onKey: IEvent<{ key: string, domEvent: KeyboardEvent }>;

    /**
     * Adds an event listener for when a line feed is added.
     * @returns an `IDisposable` to stop listening.
     */
    onLineFeed: IEvent<void>;

    /**
     * Adds an event listener for when rows are rendered. The event value
     * contains the start row and end rows of the rendered area (ranges from `0`
     * to `Terminal.rows - 1`).
     * @returns an `IDisposable` to stop listening.
     */
    onRender: IEvent<{ start: number, end: number }>;

    /**
     * Adds an event listener for when data has been parsed by the terminal,
     * after {@link write} is called. This event is useful to listen for any
     * changes in the buffer.
     *
     * This fires at most once per frame, after data parsing completes. Note
     * that this can fire when there are still writes pending if there is a lot
     * of data.
     */
    onWriteParsed: IEvent<void>;

    /**
     * Adds an event listener for when the terminal is resized. The event value
     * contains the new size.
     * @returns an `IDisposable` to stop listening.
     */
    onResize: IEvent<{ cols: number, rows: number }>;

    /**
     * Adds an event listener for when a scroll occurs. The event value is the
     * new position of the viewport.
     * @returns an `IDisposable` to stop listening.
     */
    onScroll: IEvent<number>;

    /**
     * Adds an event listener for when a selection change occurs.
     * @returns an `IDisposable` to stop listening.
     */
    onSelectionChange: IEvent<void>;

    /**
     * Adds an event listener for when an OSC 0 or OSC 2 title change occurs.
     * The event value is the new title.
     * @returns an `IDisposable` to stop listening.
     */
    onTitleChange: IEvent<string>;

    /**
     * Unfocus the terminal.
     */
    blur(): void;

    /**
     * Focus the terminal.
     */
    focus(): void;

    /**
     * Input data to application side. The data is treated the same way input
     * typed into the terminal would (ie. the {@link onData} event will fire).
     * @param data The data to forward to the application.
     * @param wasUserInput Whether the input is genuine user input. This is true
     * by default and triggers additionalbehavior like focus or selection
     * clearing. Set this to false if the data sent should not be treated like
     * user input would, for example passing an escape sequence to the
     * application.
     */
    input(data: string, wasUserInput?: boolean): void;

    /**
     * Resizes the terminal. It's best practice to debounce calls to resize,
     * this will help ensure that the pty can respond to the resize event
     * before another one occurs.
     * @param x The number of columns to resize to.
     * @param y The number of rows to resize to.
     */
    resize(columns: number, rows: number): void;

    /**
     * Opens the terminal within an element. This should also be called if the
     * xterm.js element ever changes browser window.
     * @param parent The element to create the terminal within. This element
     * must be visible (have dimensions) when `open` is called as several DOM-
     * based measurements need to be performed when this function is called.
     */
    open(parent: HTMLElement): void;

    /**
     * Attaches a custom key event handler which is run before keys are
     * processed, giving consumers of xterm.js ultimate control as to what keys
     * should be processed by the terminal and what keys should not.
     * @param customKeyEventHandler The custom KeyboardEvent handler to attach.
     * This is a function that takes a KeyboardEvent, allowing consumers to stop
     * propagation and/or prevent the default action. The function returns
     * whether the event should be processed by xterm.js.
     *
     * @example A custom keymap that overrides the backspace key
     * ```ts
     * const keymap = [
     *   { "key": "Backspace", "shiftKey": false, "mapCode": 8 },
     *   { "key": "Backspace", "shiftKey": true, "mapCode": 127 }
     * ];
     * term.attachCustomKeyEventHandler(ev => {
     *   if (ev.type === 'keydown') {
     *     for (let i in keymap) {
     *       if (keymap[i].key == ev.key && keymap[i].shiftKey == ev.shiftKey) {
     *         socket.send(String.fromCharCode(keymap[i].mapCode));
     *         return false;
     *       }
     *     }
     *   }
     * });
     * ```
     */
    attachCustomKeyEventHandler(customKeyEventHandler: (event: KeyboardEvent) => boolean): void;

    /**
     * Attaches a custom wheel event handler which is run before keys are
     * processed, giving consumers of xterm.js control over whether to proceed
     * or cancel terminal wheel events.
     * @param customWheelEventHandler The custom WheelEvent handler to attach.
     * This is a function that takes a WheelEvent, allowing consumers to stop
     * propagation and/or prevent the default action. The function returns
     * whether the event should be processed by xterm.js.
     *
     * @example A handler that prevents all wheel events while ctrl is held from
     * being processed.
     * ```ts
     * term.attachCustomWheelEventHandler(ev => {
     *   if (ev.ctrlKey) {
     *     return false;
     *   }
     *   return true;
     * });
     * ```
     */
    attachCustomWheelEventHandler(customWheelEventHandler: (event: WheelEvent) => boolean): void;

    /**
     * Registers a link provider, allowing a custom parser to be used to match
     * and handle links. Multiple link providers can be used, they will be asked
     * in the order in which they are registered.
     * @param linkProvider The link provider to use to detect links.
     */
    registerLinkProvider(linkProvider: ILinkProvider): IDisposable;

    /**
     * (EXPERIMENTAL) Registers a character joiner, allowing custom sequences of
     * characters to be rendered as a single unit. This is useful in particular
     * for rendering ligatures and graphemes, among other things.
     *
     * Each registered character joiner is called with a string of text
     * representing a portion of a line in the terminal that can be rendered as
     * a single unit. The joiner must return a sorted array, where each entry is
     * itself an array of length two, containing the start (inclusive) and end
     * (exclusive) index of a substring of the input that should be rendered as
     * a single unit. When multiple joiners are provided, the results of each
     * are collected. If there are any overlapping substrings between them, they
     * are combined into one larger unit that is drawn together.
     *
     * All character joiners that are registered get called every time a line is
     * rendered in the terminal, so it is essential for the handler function to
     * run as quickly as possible to avoid slowdowns when rendering. Similarly,
     * joiners should strive to return the smallest possible substrings to
     * render together, since they aren't drawn as optimally as individual
     * characters.
     *
     * NOTE: character joiners are only used by the webgl renderer.
     *
     * @param handler The function that determines character joins. It is called
     * with a string of text that is eligible for joining and returns an array
     * where each entry is an array containing the start (inclusive) and end
     * (exclusive) indexes of ranges that should be rendered as a single unit.
     * @returns The ID of the new joiner, this can be used to deregister
     */
    registerCharacterJoiner(handler: (text: string) => [number, number][]): number;

    /**
     * (EXPERIMENTAL) Deregisters the character joiner if one was registered.
     * NOTE: character joiners are only used by the webgl renderer.
     * @param joinerId The character joiner's ID (returned after register)
     */
    deregisterCharacterJoiner(joinerId: number): void;

    /**
     * Adds a marker to the normal buffer and returns it.
     * @param cursorYOffset The y position offset of the marker from the cursor.
     * @returns The new marker or undefined.
     */
    registerMarker(cursorYOffset?: number): IMarker;

    /**
     * (EXPERIMENTAL) Adds a decoration to the terminal using
     * @param decorationOptions, which takes a marker and an optional anchor,
     * width, height, and x offset from the anchor. Returns the decoration or
     * undefined if the alt buffer is active or the marker has already been
     * disposed of.
     * @throws when options include a negative x offset.
     */
    registerDecoration(decorationOptions: IDecorationOptions): IDecoration | undefined;

    /**
     * Gets whether the terminal has an active selection.
     */
    hasSelection(): boolean;

    /**
     * Gets the terminal's current selection, this is useful for implementing
     * copy behavior outside of xterm.js.
     */
    getSelection(): string;

    /**
     * Gets the selection position or undefined if there is no selection.
     */
    getSelectionPosition(): IBufferRange | undefined;

    /**
     * Clears the current terminal selection.
     */
    clearSelection(): void;

    /**
     * Selects text within the terminal.
     * @param column The column the selection starts at.
     * @param row The row the selection starts at.
     * @param length The length of the selection.
     */
    select(column: number, row: number, length: number): void;

    /**
     * Selects all text within the terminal.
     */
    selectAll(): void;

    /**
     * Selects text in the buffer between 2 lines.
     * @param start The 0-based line index to select from (inclusive).
     * @param end The 0-based line index to select to (inclusive).
     */
    selectLines(start: number, end: number): void;

    /*
     * Disposes of the terminal, detaching it from the DOM and removing any
     * active listeners. Once the terminal is disposed it should not be used
     * again.
     */
    dispose(): void;

    /**
     * Scroll the display of the terminal
     * @param amount The number of lines to scroll down (negative scroll up).
     */
    scrollLines(amount: number): void;

    /**
     * Scroll the display of the terminal by a number of pages.
     * @param pageCount The number of pages to scroll (negative scrolls up).
     */
    scrollPages(pageCount: number): void;

    /**
     * Scrolls the display of the terminal to the top.
     */
    scrollToTop(): void;

    /**
     * Scrolls the display of the terminal to the bottom.
     */
    scrollToBottom(): void;

    /**
     * Scrolls to a line within the buffer.
     * @param line The 0-based line index to scroll to.
     */
    scrollToLine(line: number): void;

    /**
     * Clear the entire buffer, making the prompt line the new first line.
     */
    clear(): void;

    /**
     * Write data to the terminal.
     *
     * Note that the change will not be reflected in the {@link buffer}
     * immediately as the data is processed asynchronously. Provide a
     * {@link callback} to know when the data was processed.
     * @param data The data to write to the terminal. This can either be raw
     * bytes given as Uint8Array from the pty or a string. Raw bytes will always
     * be treated as UTF-8 encoded, string data as UTF-16.
     * @param callback Optional callback that fires when the data was processed
     * by the parser. This callback must be provided and awaited in order for
     * {@link buffer} to reflect the change in the write.
     */
    write(data: string | Uint8Array, callback?: () => void): void;

    /**
     * Writes data to the terminal, followed by a break line character (\n).
     *
     * Note that the change will not be reflected in the {@link buffer}
     * immediately as the data is processed asynchronously. Provide a
     * {@link callback} to know when the data was processed.
     * @param data The data to write to the terminal. This can either be raw
     * bytes given as Uint8Array from the pty or a string. Raw bytes will always
     * be treated as UTF-8 encoded, string data as UTF-16.
     * @param callback Optional callback that fires when the data was processed
     * by the parser. This callback must be provided and awaited in order for
     * {@link buffer} to reflect the change in the write.
     */
    writeln(data: string | Uint8Array, callback?: () => void): void;

    /**
     * Writes text to the terminal, performing the necessary transformations for
     * pasted text.
     * @param data The text to write to the terminal.
     */
    paste(data: string): void;

    /**
     * Tells the renderer to refresh terminal content between two rows
     * (inclusive) at the next opportunity.
     * @param start The row to start from (between 0 and this.rows - 1).
     * @param end The row to end at (between start and this.rows - 1).
     */
    refresh(start: number, end: number): void;

    /**
     * Clears the texture atlas of the webgl renderer if it's active. Doing
     * this will force a redraw of all glyphs which can workaround issues
     * causing the texture to become corrupt, for example Chromium/Nvidia has an
     * issue where the texture gets messed up when resuming the OS from sleep.
     */
    clearTextureAtlas(): void;

    /**
     * Perform a full reset (RIS, aka '\x1bc').
     */
    reset(): void;

    /**
     * Loads an addon into this instance of xterm.js.
     * @param addon The addon to load.
     */
    loadAddon(addon: ITerminalAddon): void;
  }

  /**
   * An addon that can provide additional functionality to the terminal.
   */
  export interface ITerminalAddon extends IDisposable {
    /**
     * This is called when the addon is activated.
     */
    activate(terminal: Terminal): void;
  }

  /**
   * An object representing a range within the viewport of the terminal.
   */
  export interface IViewportRange {
    /**
     * The start of the range.
     */
    start: IViewportRangePosition;

    /**
     * The end of the range.
     */
    end: IViewportRangePosition;
  }

  /**
   * An object representing a cell position within the viewport of the terminal.
   */
  interface IViewportRangePosition {
    /**
     * The x position of the cell. This is a 0-based index that refers to the
     * space in between columns, not the column itself. Index 0 refers to the
     * left side of the viewport, index `Terminal.cols` refers to the right side
     * of the viewport. This can be thought of as how a cursor is positioned in
     * a text editor.
     */
    x: number;

    /**
     * The y position of the cell. This is a 0-based index that refers to a
     * specific row.
     */
    y: number;
  }

  /**
   * A link handler for OSC 8 hyperlinks.
   */
  interface ILinkHandler {
    /**
     * Calls when the link is activated.
     * @param event The mouse event triggering the callback.
     * @param text The text of the link.
     * @param range The buffer range of the link.
     */
    activate(event: MouseEvent, text: string, range: IBufferRange): void;

    /**
     * Called when the mouse hovers the link. To use this to create a DOM-based
     * hover tooltip, create the hover element within `Terminal.element` and
     * add the `xterm-hover` class to it, that will cause mouse events to not
     * fall through and activate other links.
     * @param event The mouse event triggering the callback.
     * @param text The text of the link.
     * @param range The buffer range of the link.
     */
    hover?(event: MouseEvent, text: string, range: IBufferRange): void;

    /**
     * Called when the mouse leaves the link.
     * @param event The mouse event triggering the callback.
     * @param text The text of the link.
     * @param range The buffer range of the link.
     */
    leave?(event: MouseEvent, text: string, range: IBufferRange): void;

    /**
     * Whether to receive non-HTTP URLs from LinkProvider. When false, any
     * usage of non-HTTP URLs will be ignored. Enabling this option without
     * proper protection in `activate` function may cause security issues such
     * as XSS.
     */
    allowNonHttpProtocols?: boolean;
  }

  /**
   * A custom link provider.
   */
  interface ILinkProvider {
    /**
     * Provides a link a buffer position
     * @param bufferLineNumber The y position of the buffer to check for links
     * within.
     * @param callback The callback to be fired when ready with the resulting
     * link(s) for the line or `undefined`.
     */
    provideLinks(bufferLineNumber: number, callback: (links: ILink[] | undefined) => void): void;
  }

  /**
   * A link within the terminal.
   */
  interface ILink {
    /**
     * The buffer range of the link.
     */
    range: IBufferRange;

    /**
     * The text of the link.
     */
    text: string;

    /**
     * What link decorations to show when hovering the link, this property is
     * tracked and changes made after the link is provided will trigger changes.
     * If not set, all decroations will be enabled.
     */
    decorations?: ILinkDecorations;

    /**
     * Calls when the link is activated.
     * @param event The mouse event triggering the callback.
     * @param text The text of the link.
     */
    activate(event: MouseEvent, text: string): void;

    /**
     * Called when the mouse hovers the link. To use this to create a DOM-based
     * hover tooltip, create the hover element within `Terminal.element` and add
     * the `xterm-hover` class to it, that will cause mouse events to not fall
     * through and activate other links.
     * @param event The mouse event triggering the callback.
     * @param text The text of the link.
     */
    hover?(event: MouseEvent, text: string): void;

    /**
     * Called when the mouse leaves the link.
     * @param event The mouse event triggering the callback.
     * @param text The text of the link.
     */
    leave?(event: MouseEvent, text: string): void;

    /**
     * Called when the link is released and no longer used by xterm.js.
     */
    dispose?(): void;
  }

  /**
   * A set of decorations that can be applied to links.
   */
  interface ILinkDecorations {
    /**
     * Whether the cursor is set to pointer.
     */
    pointerCursor: boolean;

    /**
     * Whether the underline is visible
     */
    underline: boolean;
  }

  /**
   * A range within a buffer.
   */
  interface IBufferRange {
    /**
     * The start position of the range.
     */
    start: IBufferCellPosition;

    /**
     * The end position of the range.
     */
    end: IBufferCellPosition;
  }

  /**
   * A position within a buffer.
   */
  interface IBufferCellPosition {
    /**
     * The x position within the buffer (1-based).
     */
    x: number;

    /**
     * The y position within the buffer (1-based).
     */
    y: number;
  }

  /**
   * Represents a terminal buffer.
   */
  interface IBuffer {
    /**
     * The type of the buffer.
     */
    readonly type: 'normal' | 'alternate';

    /**
     * The y position of the cursor. This ranges between `0` (when the
     * cursor is at baseY) and `Terminal.rows - 1` (when the cursor is on the
     * last row).
     */
    readonly cursorY: number;

    /**
     * The x position of the cursor. This ranges between `0` (left side) and
     * `Terminal.cols` (after last cell of the row).
     */
    readonly cursorX: number;

    /**
     * The line within the buffer where the top of the viewport is.
     */
    readonly viewportY: number;

    /**
     * The line within the buffer where the top of the bottom page is (when
     * fully scrolled down).
     */
    readonly baseY: number;

    /**
     * The amount of lines in the buffer.
     */
    readonly length: number;

    /**
     * Gets a line from the buffer, or undefined if the line index does not
     * exist.
     *
     * Note that the result of this function should be used immediately after
     * calling as when the terminal updates it could lead to unexpected
     * behavior.
     *
     * @param y The line index to get.
     */
    getLine(y: number): IBufferLine | undefined;

    /**
     * Creates an empty cell object suitable as a cell reference in
     * `line.getCell(x, cell)`. Use this to avoid costly recreation of
     * cell objects when dealing with tons of cells.
     */
    getNullCell(): IBufferCell;
  }

  export interface IBufferElementProvider {
    /**
     * Provides a document fragment or HTMLElement containing the buffer
     * elements.
     */
    provideBufferElements(): DocumentFragment | HTMLElement;
  }

  /**
   * Represents the terminal's set of buffers.
   */
  interface IBufferNamespace {
    /**
     * The active buffer, this will either be the normal or alternate buffers.
     */
    readonly active: IBuffer;

    /**
     * The normal buffer.
     */
    readonly normal: IBuffer;

    /**
     * The alternate buffer, this becomes the active buffer when an application
     * enters this mode via DECSET (`CSI ? 4 7 h`)
     */
    readonly alternate: IBuffer;

    /**
     * Adds an event listener for when the active buffer changes.
     * @returns an `IDisposable` to stop listening.
     */
    onBufferChange: IEvent<IBuffer>;
  }

  /**
   * Represents a line in the terminal's buffer.
   */
  interface IBufferLine {
    /**
     * Whether the line is wrapped from the previous line.
     */
    readonly isWrapped: boolean;

    /**
     * The length of the line, all call to getCell beyond the length will result
     * in `undefined`. Note that this may exceed columns as the line array may
     * not be trimmed after a resize, compare against {@link Terminal.cols} to
     * get the actual maximum length of a line.
     */
    readonly length: number;

    /**
     * Gets a cell from the line, or undefined if the line index does not exist.
     *
     * Note that the result of this function should be used immediately after
     * calling as when the terminal updates it could lead to unexpected
     * behavior.
     *
     * @param x The character index to get.
     * @param cell Optional cell object to load data into for performance
     * reasons. This is mainly useful when every cell in the buffer is being
     * looped over to avoid creating new objects for every cell.
     */
    getCell(x: number, cell?: IBufferCell): IBufferCell | undefined;

    /**
     * Gets the line as a string. Note that this is gets only the string for the
     * line, not taking isWrapped into account.
     *
     * @param trimRight Whether to trim any whitespace at the right of the line.
     * @param startColumn The column to start from (inclusive).
     * @param endColumn The column to end at (exclusive).
     */
    translateToString(trimRight?: boolean, startColumn?: number, endColumn?: number): string;
  }

  /**
   * Represents a single cell in the terminal's buffer.
   */
  interface IBufferCell {
    /**
     * The width of the character. Some examples:
     *
     * - `1` for most cells.
     * - `2` for wide character like CJK glyphs.
     * - `0` for cells immediately following cells with a width of `2`.
     */
    getWidth(): number;

    /**
     * The character(s) within the cell. Examples of what this can contain:
     *
     * - A normal width character
     * - A wide character (eg. CJK)
     * - An emoji
     */
    getChars(): string;

    /**
     * Gets the UTF32 codepoint of single characters, if content is a combined
     * string it returns the codepoint of the last character in the string.
     */
    getCode(): number;

    /**
     * Gets the number representation of the foreground color mode, this can be
     * used to perform quick comparisons of 2 cells to see if they're the same.
     * Use `isFgRGB`, `isFgPalette` and `isFgDefault` to check what color mode
     * a cell is.
     */
    getFgColorMode(): number;

    /**
     * Gets the number representation of the background color mode, this can be
     * used to perform quick comparisons of 2 cells to see if they're the same.
     * Use `isBgRGB`, `isBgPalette` and `isBgDefault` to check what color mode
     * a cell is.
     */
    getBgColorMode(): number;

    /**
     * Gets a cell's foreground color number, this differs depending on what the
     * color mode of the cell is:
     *
     * - Default: This should be 0, representing the default foreground color
     *   (CSI 39 m).
     * - Palette: This is a number from 0 to 255 of ANSI colors (CSI 3(0-7) m,
     *   CSI 9(0-7) m, CSI 38 ; 5 ; 0-255 m).
     * - RGB: A hex value representing a 'true color': 0xRRGGBB.
     *   (CSI 3 8 ; 2 ; Pi ; Pr ; Pg ; Pb)
     */
    getFgColor(): number;

    /**
     * Gets a cell's background color number, this differs depending on what the
     * color mode of the cell is:
     *
     * - Default: This should be 0, representing the default background color
     *   (CSI 49 m).
     * - Palette: This is a number from 0 to 255 of ANSI colors
     *   (CSI 4(0-7) m, CSI 10(0-7) m, CSI 48 ; 5 ; 0-255 m).
     * - RGB: A hex value representing a 'true color': 0xRRGGBB
     *   (CSI 4 8 ; 2 ; Pi ; Pr ; Pg ; Pb)
     */
    getBgColor(): number;

    /** Whether the cell has the bold attribute (CSI 1 m). */
    isBold(): number;
    /** Whether the cell has the italic attribute (CSI 3 m). */
    isItalic(): number;
    /** Whether the cell has the dim attribute (CSI 2 m). */
    isDim(): number;
    /** Whether the cell has the underline attribute (CSI 4 m). */
    isUnderline(): number;
    /** Whether the cell has the blink attribute (CSI 5 m). */
    isBlink(): number;
    /** Whether the cell has the inverse attribute (CSI 7 m). */
    isInverse(): number;
    /** Whether the cell has the invisible attribute (CSI 8 m). */
    isInvisible(): number;
    /** Whether the cell has the strikethrough attribute (CSI 9 m). */
    isStrikethrough(): number;
    /** Whether the cell has the overline attribute (CSI 53 m). */
    isOverline(): number;

    /** Whether the cell is using the RGB foreground color mode. */
    isFgRGB(): boolean;
    /** Whether the cell is using the RGB background color mode. */
    isBgRGB(): boolean;
    /** Whether the cell is using the palette foreground color mode. */
    isFgPalette(): boolean;
    /** Whether the cell is using the palette background color mode. */
    isBgPalette(): boolean;
    /** Whether the cell is using the default foreground color mode. */
    isFgDefault(): boolean;
    /** Whether the cell is using the default background color mode. */
    isBgDefault(): boolean;

    /** Whether the cell has the default attribute (no color or style). */
    isAttributeDefault(): boolean;
  }

  /**
   * Data type to register a CSI, DCS or ESC callback in the parser
   * in the form:
   *    ESC I..I F
   *    CSI Prefix P..P I..I F
   *    DCS Prefix P..P I..I F data_bytes ST
   *
   * with these rules/restrictions:
   * - prefix can only be used with CSI and DCS
   * - only one leading prefix byte is recognized by the parser
   *   before any other parameter bytes (P..P)
   * - intermediate bytes are recognized up to 2
   *
   * For custom sequences make sure to read ECMA-48 and the resources at
   * vt100.net to not clash with existing sequences or reserved address space.
   * General recommendations:
   * - use private address space (see ECMA-48)
   * - use max one intermediate byte (technically not limited by the spec,
   *   in practice there are no sequences with more than one intermediate byte,
   *   thus parsers might get confused with more intermediates)
   * - test against other common emulators to check whether they escape/ignore
   *   the sequence correctly
   *
   * Notes: OSC command registration is handled differently (see addOscHandler)
   *        APC, PM or SOS is currently not supported.
   */
  export interface IFunctionIdentifier {
    /**
     * Optional prefix byte, must be in range \x3c .. \x3f.
     * Usable in CSI and DCS.
     */
    prefix?: string;
    /**
     * Optional intermediate bytes, must be in range \x20 .. \x2f.
     * Usable in CSI, DCS and ESC.
     */
    intermediates?: string;
    /**
     * Final byte, must be in range \x40 .. \x7e for CSI and DCS,
     * \x30 .. \x7e for ESC.
     */
    final: string;
  }

  /**
   * Allows hooking into the parser for custom handling of escape sequences.
   *
   * Note on sync vs. async handlers:
   * xterm.js implements all parser actions with synchronous handlers.
   * In general custom handlers should also operate in sync mode wherever
   * possible to keep the parser fast.
   * Still the exposed interfaces allow to register async handlers by returning
   * a `Promise<boolean>`. Here the parser will pause input processing until
   * the promise got resolved or rejected (in-band blocking). This "full stop"
   * on the input chain allows to implement backpressure from a certain async
   * action while the terminal state will not progress any further from input.
   * It does not mean that the terminal state will not change at all in between,
   * as user actions like resize or reset are still processed immediately.
   * It is an error to assume a stable terminal state while giving back control
   * in between, e.g. by multiple chained `then` calls.
   * Downside of an async handler is a rather bad throughput performance,
   * thus use async handlers only as a last resort or for actions that have
   * to rely on async interfaces itself.
   */
  export interface IParser {
    /**
     * Adds a handler for CSI escape sequences.
     * @param id Specifies the function identifier under which the callback gets
     * registered, e.g. {final: 'm'} for SGR.
     * @param callback The function to handle the sequence. The callback is
     * called with the numerical params. If the sequence has subparams the array
     * will contain subarrays with their numercial values. Return `true` if the
     * sequence was handled, `false` if the parser should try a previous
     * handler. The most recently added handler is tried first.
     * @returns An IDisposable you can call to remove this handler.
     */
    registerCsiHandler(id: IFunctionIdentifier, callback: (params: (number | number[])[]) => boolean | Promise<boolean>): IDisposable;

    /**
     * Adds a handler for DCS escape sequences.
     * @param id Specifies the function identifier under which the callback gets
     * registered, e.g. {intermediates: '$' final: 'q'} for DECRQSS.
     * @param callback The function to handle the sequence. Note that the
     * function will only be called once if the sequence finished sucessfully.
     * There is currently no way to intercept smaller data chunks, data chunks
     * will be stored up until the sequence is finished. Since DCS sequences are
     * not limited by the amount of data this might impose a problem for big
     * payloads. Currently xterm.js limits DCS payload to 10 MB which should
     * give enough room for most use cases. The function gets the payload and
     * numerical parameters as arguments. Return `true` if the sequence was
     * handled, `false` if the parser should try a previous handler. The most
     * recently added handler is tried first.
     * @returns An IDisposable you can call to remove this handler.
     */
    registerDcsHandler(id: IFunctionIdentifier, callback: (data: string, param: (number | number[])[]) => boolean | Promise<boolean>): IDisposable;

    /**
     * Adds a handler for ESC escape sequences.
     * @param id Specifies the function identifier under which the callback gets
     * registered, e.g. {intermediates: '%' final: 'G'} for default charset
     * selection.
     * @param callback The function to handle the sequence.
     * Return `true` if the sequence was handled, `false` if the parser should
     * try a previous handler. The most recently added handler is tried first.
     * @returns An IDisposable you can call to remove this handler.
     */
    registerEscHandler(id: IFunctionIdentifier, handler: () => boolean | Promise<boolean>): IDisposable;

    /**
     * Adds a handler for OSC escape sequences.
     * @param ident The number (first parameter) of the sequence.
     * @param callback The function to handle the sequence. Note that the
     * function will only be called once if the sequence finished sucessfully.
     * There is currently no way to intercept smaller data chunks, data chunks
     * will be stored up until the sequence is finished. Since OSC sequences are
     * not limited by the amount of data this might impose a problem for big
     * payloads. Currently xterm.js limits OSC payload to 10 MB which should
     * give enough room for most use cases. The callback is called with OSC data
     * string. Return `true` if the sequence was handled, `false` if the parser
     * should try a previous handler. The most recently added handler is tried
     * first.
     * @returns An IDisposable you can call to remove this handler.
     */
    registerOscHandler(ident: number, callback: (data: string) => boolean | Promise<boolean>): IDisposable;
  }

  /**
   * (EXPERIMENTAL) Unicode version provider.
   * Used to register custom Unicode versions with `Terminal.unicode.register`.
   */
  export interface IUnicodeVersionProvider {
    /**
     * String indicating the Unicode version provided.
     */
    readonly version: string;

    /**
     * Unicode version dependent wcwidth implementation.
     */
    wcwidth(codepoint: number): 0 | 1 | 2;
    charProperties(codepoint: number, preceding: number): number;
  }

  /**
   * (EXPERIMENTAL) Unicode handling interface.
   */
  export interface IUnicodeHandling {
    /**
     * Register a custom Unicode version provider.
     */
    register(provider: IUnicodeVersionProvider): void;

    /**
     * Registered Unicode versions.
     */
    readonly versions: ReadonlyArray<string>;

    /**
     * Getter/setter for active Unicode version.
     */
    activeVersion: string;
  }

  /**
   * Terminal modes as set by SM/DECSET.
   */
  export interface IModes {
    /**
     * Application Cursor Keys (DECCKM): `CSI ? 1 h`
     */
    readonly applicationCursorKeysMode: boolean;
    /**
     * Application Keypad Mode (DECNKM): `CSI ? 6 6 h`
     */
    readonly applicationKeypadMode: boolean;
    /**
     * Bracketed Paste Mode: `CSI ? 2 0 0 4 h`
     */
    readonly bracketedPasteMode: boolean;
    /**
     * Insert Mode (IRM): `CSI 4 h`
     */
    readonly insertMode: boolean;
    /**
     * Mouse Tracking, this can be one of the following:
     * - none: This is the default value and can be reset with DECRST
     * - x10: Send Mouse X & Y on button press `CSI ? 9 h`
     * - vt200: Send Mouse X & Y on button press and release `CSI ? 1 0 0 0 h`
     * - drag: Use Cell Motion Mouse Tracking `CSI ? 1 0 0 2 h`
     * - any: Use All Motion Mouse Tracking `CSI ? 1 0 0 3 h`
     */
    readonly mouseTrackingMode: 'none' | 'x10' | 'vt200' | 'drag' | 'any';
    /**
     * Origin Mode (DECOM): `CSI ? 6 h`
     */
    readonly originMode: boolean;
    /**
     * Reverse-wraparound Mode: `CSI ? 4 5 h`
     */
    readonly reverseWraparoundMode: boolean;
    /**
     * Send FocusIn/FocusOut events: `CSI ? 1 0 0 4 h`
     */
    readonly sendFocusMode: boolean;
    /**
     * Synchronized Output Mode: `CSI ? 2 0 2 6 h`
     *
     * When enabled, output is buffered and only rendered when the mode is
     * disabled, allowing for atomic screen updates without tearing.
     */
    readonly synchronizedOutputMode: boolean;
    /**
     * Auto-Wrap Mode (DECAWM): `CSI ? 7 h`
     */
    readonly wraparoundMode: boolean;
  }
}

// From https://github.com/sindresorhus/type-fest
type Primitive =
	| null // eslint-disable-line @typescript-eslint/ban-types
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint;

type LiteralUnion<LiteralType, BaseType extends Primitive> =
	| LiteralType
	| (BaseType & Record<never, never>);
// -

export type ImageOptions = {
	/**
	The width is given as a number followed by a unit, or the word `'auto'`.

	- `N`: N character cells.
	- `Npx`: N pixels.
	- `N%`: N percent of the session's width or height.
	- `auto`: The image's inherent size will be used to determine an appropriate dimension.
	*/
	readonly width?: LiteralUnion<'auto', number | string>;

	/**
	The height is given as a number followed by a unit, or the word `'auto'`.

	- `N`: N character cells.
	- `Npx`: N pixels.
	- `N%`: N percent of the session's width or height.
	- `auto`: The image's inherent size will be used to determine an appropriate dimension.
	*/
	readonly height?: LiteralUnion<'auto', number | string>;

	/**
	@default true
	*/
	readonly preserveAspectRatio?: boolean;
};

export type AnnotationOptions = {
	/**
	Nonzero number of columns to annotate.

	Default: The remainder of the line.
	*/
	readonly length?: number;

	/**
	Starting X coordinate.

	Must be used with `y` and `length`.

	Default: The cursor position
	*/
	readonly x?: number;

	/**
	Starting Y coordinate.

	Must be used with `x` and `length`.

	Default: Cursor position.
	*/
	readonly y?: number;

	/**
	Create a "hidden" annotation.

	Annotations created this way can be shown using the "Show Annotations" iTerm command.
	*/
	readonly isHidden?: boolean;
};

/**
Set the absolute position of the cursor. `x0` `y0` is the top left of the screen.
*/
export function cursorTo(x: number, y?: number): string;

/**
Set the position of the cursor relative to its current position.
*/
export function cursorMove(x: number, y?: number): string;

/**
Move cursor up a specific amount of rows.

@param count - Count of rows to move up. Default is `1`.
*/
export function cursorUp(count?: number): string;

/**
Move cursor down a specific amount of rows.

@param count - Count of rows to move down. Default is `1`.
*/
export function cursorDown(count?: number): string;

/**
Move cursor forward a specific amount of rows.

@param count - Count of rows to move forward. Default is `1`.
*/
export function cursorForward(count?: number): string;

/**
Move cursor backward a specific amount of rows.

@param count - Count of rows to move backward. Default is `1`.
*/
export function cursorBackward(count?: number): string;

/**
Move cursor to the left side.
*/
export const cursorLeft: string;

/**
Save cursor position.
*/
export const cursorSavePosition: string;

/**
Restore saved cursor position.
*/
export const cursorRestorePosition: string;

/**
Get cursor position.
*/
export const cursorGetPosition: string;

/**
Move cursor to the next line.
*/
export const cursorNextLine: string;

/**
Move cursor to the previous line.
*/
export const cursorPrevLine: string;

/**
Hide cursor.
*/
export const cursorHide: string;

/**
Show cursor.
*/
export const cursorShow: string;

/**
Erase from the current cursor position up the specified amount of rows.

@param count - Count of rows to erase.
*/
export function eraseLines(count: number): string;

/**
Erase from the current cursor position to the end of the current line.
*/
export const eraseEndLine: string;

/**
Erase from the current cursor position to the start of the current line.
*/
export const eraseStartLine: string;

/**
Erase the entire current line.
*/
export const eraseLine: string;

/**
Erase the screen from the current line down to the bottom of the screen.
*/
export const eraseDown: string;

/**
Erase the screen from the current line up to the top of the screen.
*/
export const eraseUp: string;

/**
Erase the screen and move the cursor the top left position.
*/
export const eraseScreen: string;

/**
Scroll display up one line.
*/
export const scrollUp: string;

/**
Scroll display down one line.
*/
export const scrollDown: string;

/**
Clear only the visible terminal screen (viewport) without affecting scrollback buffer or terminal state.

This is a safer alternative to `clearScreen` that works consistently across terminals.
*/
export const clearViewport: string;

/**
Clear the terminal screen.

⚠️ **Warning:** Uses RIS (Reset to Initial State) which may also:
- Clear scrollback buffer in some terminals (xterm.js, VTE)
- Reset terminal modes and state
- Not behave consistently across different terminals

Consider using `clearViewport` for safer viewport-only clearing.
*/
export const clearScreen: string;

/**
Clear the whole terminal, including scrollback buffer. (Not just the visible part of it)
*/
export const clearTerminal: string;

/**
Enter the [alternative screen](https://terminalguide.namepad.de/mode/p47/).
*/
export const enterAlternativeScreen: string;

/**
Exit the [alternative screen](https://terminalguide.namepad.de/mode/p47/), assuming `enterAlternativeScreen` was called before.
*/
export const exitAlternativeScreen: string;

/**
Begin [synchronized output](https://contour-terminal.org/vt-extensions/synchronized-output/) to reduce flicker during renders.
*/
export const beginSynchronizedOutput: string;

/**
End [synchronized output](https://contour-terminal.org/vt-extensions/synchronized-output/).
*/
export const endSynchronizedOutput: string;

/**
Wrap output in [synchronized output](https://contour-terminal.org/vt-extensions/synchronized-output/) sequences to reduce flicker during renders.
*/
export function synchronizedOutput(text: string): string;

/**
Output a beeping sound.
*/
export const beep: string;

/**
Create a clickable link.

[Supported terminals.](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda) Use [`supports-hyperlinks`](https://github.com/jamestalmage/supports-hyperlinks) to detect link support.
*/
export function link(text: string, url: string): string;

/**
Display an image.

See [term-img](https://github.com/sindresorhus/term-img) for a higher-level module.

@param data - Image data. Usually read in with `fs.readFile()`.
*/
export function image(data: Uint8Array, options?: ImageOptions): string;

export const iTerm: {
	/**
	[Inform iTerm2](https://www.iterm2.com/documentation-escape-codes.html) of the current directory to help semantic history and enable [Cmd-clicking relative paths](https://coderwall.com/p/b7e82q/quickly-open-files-in-iterm-with-cmd-click).

	@param cwd - Current directory. Default: `process.cwd()`.
	*/
	setCwd(cwd?: string): string;

	/**
	An annotation looks like this when shown:

	![screenshot of iTerm annotation](https://user-images.githubusercontent.com/924465/64382136-b60ac700-cfe9-11e9-8a35-9682e8dc4b72.png)

	See the [iTerm Proprietary Escape Codes documentation](https://iterm2.com/documentation-escape-codes.html) for more information.

	@param message - The message to display within the annotation. The `|` character is disallowed and will be stripped.
	@returns An escape code which will create an annotation when printed in iTerm2.
	*/
	annotation(message: string, options?: AnnotationOptions): string;
};

export const ConEmu: {
	/**
	[Inform ConEmu](https://conemu.github.io/en/AnsiEscapeCodes.html#ConEmu_specific_OSC) about shell current working directory.

	@param cwd - Current directory. Default: `process.cwd()`.
	*/
	setCwd(cwd?: string): string;
};

/**
Set the current working directory for both iTerm2 and ConEmu.

@param cwd - Current directory. Default: `process.cwd()`.
*/
export function setCwd(cwd?: string): string;

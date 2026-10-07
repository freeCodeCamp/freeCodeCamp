/// <reference types="node"/>
import {LiteralUnion} from 'type-fest';

declare namespace ansiEscapes {
	interface ImageOptions {
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

		readonly preserveAspectRatio?: boolean;
	}

	interface AnnotationOptions {
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
	}
}

declare const ansiEscapes: {
	/**
	Set the absolute position of the cursor. `x0` `y0` is the top left of the screen.
	*/
	cursorTo(x: number, y?: number): string;

	/**
	Set the position of the cursor relative to its current position.
	*/
	cursorMove(x: number, y?: number): string;

	/**
	Move cursor up a specific amount of rows.

	@param count - Count of rows to move up. Default is `1`.
	*/
	cursorUp(count?: number): string;

	/**
	Move cursor down a specific amount of rows.

	@param count - Count of rows to move down. Default is `1`.
	*/
	cursorDown(count?: number): string;

	/**
	Move cursor forward a specific amount of rows.

	@param count - Count of rows to move forward. Default is `1`.
	*/
	cursorForward(count?: number): string;

	/**
	Move cursor backward a specific amount of rows.

	@param count - Count of rows to move backward. Default is `1`.
	*/
	cursorBackward(count?: number): string;

	/**
	Move cursor to the left side.
	*/
	cursorLeft: string;

	/**
	Save cursor position.
	*/
	cursorSavePosition: string;

	/**
	Restore saved cursor position.
	*/
	cursorRestorePosition: string;

	/**
	Get cursor position.
	*/
	cursorGetPosition: string;

	/**
	Move cursor to the next line.
	*/
	cursorNextLine: string;

	/**
	Move cursor to the previous line.
	*/
	cursorPrevLine: string;

	/**
	Hide cursor.
	*/
	cursorHide: string;

	/**
	Show cursor.
	*/
	cursorShow: string;

	/**
	Erase from the current cursor position up the specified amount of rows.

	@param count - Count of rows to erase.
	*/
	eraseLines(count: number): string;

	/**
	Erase from the current cursor position to the end of the current line.
	*/
	eraseEndLine: string;

	/**
	Erase from the current cursor position to the start of the current line.
	*/
	eraseStartLine: string;

	/**
	Erase the entire current line.
	*/
	eraseLine: string;

	/**
	Erase the screen from the current line down to the bottom of the screen.
	*/
	eraseDown: string;

	/**
	Erase the screen from the current line up to the top of the screen.
	*/
	eraseUp: string;

	/**
	Erase the screen and move the cursor the top left position.
	*/
	eraseScreen: string;

	/**
	Scroll display up one line.
	*/
	scrollUp: string;

	/**
	Scroll display down one line.
	*/
	scrollDown: string;

	/**
	Clear the terminal screen. (Viewport)
	*/
	clearScreen: string;

	/**
	Clear the whole terminal, including scrollback buffer. (Not just the visible part of it)
	*/
	clearTerminal: string;

	/**
	Output a beeping sound.
	*/
	beep: string;

	/**
	Create a clickable link.

	[Supported terminals.](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda) Use [`supports-hyperlinks`](https://github.com/jamestalmage/supports-hyperlinks) to detect link support.
	*/
	link(text: string, url: string): string;

	/**
	Display an image.

	_Currently only supported on iTerm2 >=3_

	See [term-img](https://github.com/sindresorhus/term-img) for a higher-level module.

	@param buffer - Buffer of an image. Usually read in with `fs.readFile()`.
	*/
	image(buffer: Buffer, options?: ansiEscapes.ImageOptions): string;

	iTerm: {
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
		annotation(message: string, options?: ansiEscapes.AnnotationOptions): string;
	};

	// TODO: remove this in the next major version
	default: typeof ansiEscapes;
};

export = ansiEscapes;

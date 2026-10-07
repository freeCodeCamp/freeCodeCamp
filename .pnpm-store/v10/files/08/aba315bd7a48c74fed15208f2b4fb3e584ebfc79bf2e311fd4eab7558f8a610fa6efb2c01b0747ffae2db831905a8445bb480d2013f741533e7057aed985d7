import {SpinnerName} from 'cli-spinners';

declare namespace ora {
	interface Spinner {
		readonly interval?: number;
		readonly frames: string[];
	}

	type Color =
		| 'black'
		| 'red'
		| 'green'
		| 'yellow'
		| 'blue'
		| 'magenta'
		| 'cyan'
		| 'white'
		| 'gray';

	type PrefixTextGenerator = () => string;

	interface Options {
		/**
		Text to display after the spinner.
		*/
		readonly text?: string;

		/**
		Text or a function that returns text to display before the spinner. No prefix text will be displayed if set to an empty string.
		*/
		readonly prefixText?: string | PrefixTextGenerator;

		/**
		Name of one of the provided spinners. See [`example.js`](https://github.com/BendingBender/ora/blob/main/example.js) in this repo if you want to test out different spinners. On Windows, it will always use the line spinner as the Windows command-line doesn't have proper Unicode support.

		@default 'dots'

		Or an object like:

		@example
		```
		{
			interval: 80, // Optional
			frames: ['-', '+', '-']
		}
		```
		*/
		readonly spinner?: SpinnerName | Spinner;

		/**
		Color of the spinner.

		@default 'cyan'
		*/
		readonly color?: Color;

		/**
		Set to `false` to stop Ora from hiding the cursor.

		@default true
		*/
		readonly hideCursor?: boolean;

		/**
		Indent the spinner with the given number of spaces.

		@default 0
		*/
		readonly indent?: number;

		/**
		Interval between each frame.

		Spinners provide their own recommended interval, so you don't really need to specify this.

		Default: Provided by the spinner or `100`.
		*/
		readonly interval?: number;

		/**
		Stream to write the output.

		You could for example set this to `process.stdout` instead.

		@default process.stderr
		*/
		readonly stream?: NodeJS.WritableStream;

		/**
		Force enable/disable the spinner. If not specified, the spinner will be enabled if the `stream` is being run inside a TTY context (not spawned or piped) and/or not in a CI environment.

		Note that `{isEnabled: false}` doesn't mean it won't output anything. It just means it won't output the spinner, colors, and other ansi escape codes. It will still log text.
		*/
		readonly isEnabled?: boolean;

		/**
		Disable the spinner and all log text. All output is suppressed and `isEnabled` will be considered `false`.

		@default false
		*/
		readonly isSilent?: boolean;

		/**
		Discard stdin input (except Ctrl+C) while running if it's TTY. This prevents the spinner from twitching on input, outputting broken lines on `Enter` key presses, and prevents buffering of input while the spinner is running.

		This has no effect on Windows as there's no good way to implement discarding stdin properly there.

		@default true
		*/
		readonly discardStdin?: boolean;
	}

	interface PersistOptions {
		/**
		Symbol to replace the spinner with.

		@default ' '
		*/
		readonly symbol?: string;

		/**
		Text to be persisted after the symbol.

		Default: Current `text`.
		*/
		readonly text?: string;

		/**
		Text or a function that returns text to be persisted before the symbol. No prefix text will be displayed if set to an empty string.

		Default: Current `prefixText`.
		*/
		readonly prefixText?: string | PrefixTextGenerator;
	}

	interface Ora {
		/**
		A boolean of whether the instance is currently spinning.
		*/
		readonly isSpinning: boolean;

		/**
		Change the text after the spinner.
		*/
		text: string;

		/**
		Change the text or function that returns text before the spinner. No prefix text will be displayed if set to an empty string.
		*/
		prefixText: string | PrefixTextGenerator;

		/**
		Change the spinner color.
		*/
		color: Color;

		/**
		Change the spinner.
		*/
		spinner: SpinnerName | Spinner;

		/**
		Change the spinner indent.
		*/
		indent: number;

		/**
		Start the spinner.

		@param text - Set the current text.
		@returns The spinner instance.
		*/
		start(text?: string): Ora;

		/**
		Stop and clear the spinner.

		@returns The spinner instance.
		*/
		stop(): Ora;

		/**
		Stop the spinner, change it to a green `✔` and persist the current text, or `text` if provided.

		@param text - Will persist text if provided.
		@returns The spinner instance.
		*/
		succeed(text?: string): Ora;

		/**
		Stop the spinner, change it to a red `✖` and persist the current text, or `text` if provided.

		@param text - Will persist text if provided.
		@returns The spinner instance.
		*/
		fail(text?: string): Ora;

		/**
		Stop the spinner, change it to a yellow `⚠` and persist the current text, or `text` if provided.

		@param text - Will persist text if provided.
		@returns The spinner instance.
		*/
		warn(text?: string): Ora;

		/**
		Stop the spinner, change it to a blue `ℹ` and persist the current text, or `text` if provided.

		@param text - Will persist text if provided.
		@returns The spinner instance.
		*/
		info(text?: string): Ora;

		/**
		Stop the spinner and change the symbol or text.

		@returns The spinner instance.
		*/
		stopAndPersist(options?: PersistOptions): Ora;

		/**
		Clear the spinner.

		@returns The spinner instance.
		*/
		clear(): Ora;

		/**
		Manually render a new frame.

		@returns The spinner instance.
		*/
		render(): Ora;

		/**
		Get a new frame.

		@returns The spinner instance text.
		*/
		frame(): string;
	}
}

declare const ora: {
	/**
	Elegant terminal spinner.

	@param options - If a string is provided, it is treated as a shortcut for `options.text`.

	@example
	```
	import ora = require('ora');

	const spinner = ora('Loading unicorns').start();

	setTimeout(() => {
		spinner.color = 'yellow';
		spinner.text = 'Loading rainbows';
	}, 1000);
	```
	*/
	(options?: ora.Options | string): ora.Ora;

	/**
	Starts a spinner for a promise. The spinner is stopped with `.succeed()` if the promise fulfills or with `.fail()` if it rejects.

	@param action - The promise to start the spinner for.
	@param options - If a string is provided, it is treated as a shortcut for `options.text`.
	@returns The spinner instance.
	*/
	promise(
		action: PromiseLike<unknown>,
		options?: ora.Options | string
	): ora.Ora;
};

export = ora;

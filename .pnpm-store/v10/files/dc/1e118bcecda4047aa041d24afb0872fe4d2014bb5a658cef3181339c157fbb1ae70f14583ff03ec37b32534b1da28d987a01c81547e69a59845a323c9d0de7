import process from 'node:process';

/**
 * Originally copied from https://github.com/sindresorhus/is-unicode-supported/blob/506f27260df3636555714bf10ed40ab9e6a6c96e/index.js
 * @version 2.0.0
 * @summary Detect whether the terminal supports Unicode
 * @see https://github.com/sindresorhus/is-unicode-supported/pull/1#issuecomment-827321546
 * @see microsoft/terminal#13680
 */
export default function isUnicodeSupported() {
	if (process.platform !== 'win32') {
		return process.env.TERM !== 'linux'; // Linux console (kernel)
	}

	return (
		Boolean(process.env.WT_SESSION) || // Windows Terminal
		Boolean(process.env.TERMINUS_SUBLIME) || // Terminus (<0.2.27)
		process.env.ConEmuTask === '{cmd::Cmder}' || // ConEmu and cmder
		process.env.TERM_PROGRAM === 'Terminus-Sublime' ||
		process.env.TERM_PROGRAM === 'vscode' ||
		process.env.TERM === 'xterm-256color' ||
		process.env.TERM === 'alacritty' ||
		process.env.TERMINAL_EMULATOR === 'JetBrains-JediTerm' ||
		process.env.TERM?.startsWith('rxvt-unicode') // fork of rxvt
	);
}

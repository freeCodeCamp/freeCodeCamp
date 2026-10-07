import { Component, Fragment, options } from 'preact';

export function initDevTools() {
	const globalVar =
		typeof globalThis !== 'undefined'
			? globalThis
			: typeof window !== 'undefined'
				? window
				: undefined;

	if (
		globalVar !== null &&
		globalVar !== undefined &&
		globalVar.__PREACT_DEVTOOLS__
	) {
		globalVar.__PREACT_DEVTOOLS__.attachPreact('10.24.3', options, {
			Fragment,
			Component
		});
	}
}

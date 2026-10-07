/* eslint-env browser */
'use strict';

export const write = async text => {
	await navigator.clipboard.writeText(text);
};

export const read = async () => navigator.clipboard.readText();

export const readSync = () => {
	throw new Error('`.readSync()` is not supported in browsers!');
};

export const writeSync = () => {
	throw new Error('`.writeSync()` is not supported in browsers!');
};

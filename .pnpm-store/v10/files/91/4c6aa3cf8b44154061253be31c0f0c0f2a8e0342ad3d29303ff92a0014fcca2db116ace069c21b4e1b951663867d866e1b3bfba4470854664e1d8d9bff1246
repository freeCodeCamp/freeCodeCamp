/* eslint-env browser */

const clipboard = {};

clipboard.write = async text => {
	await navigator.clipboard.writeText(text);
};

clipboard.read = async () => navigator.clipboard.readText();

clipboard.readSync = () => {
	throw new Error('`.readSync()` is not supported in browsers!');
};

clipboard.writeSync = () => {
	throw new Error('`.writeSync()` is not supported in browsers!');
};

export default clipboard;

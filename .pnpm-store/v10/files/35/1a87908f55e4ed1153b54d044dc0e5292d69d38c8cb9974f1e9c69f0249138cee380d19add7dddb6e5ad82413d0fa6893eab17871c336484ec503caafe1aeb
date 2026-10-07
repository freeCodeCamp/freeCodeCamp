import { printDiffOrStringify } from './diff.js';
import { stringify } from './display.js';
import { serializeValue } from './serialize.js';
import '@vitest/pretty-format';
import 'tinyrainbow';
import './helpers.js';
import './constants.js';

function processError(_err, diffOptions, seen = new WeakSet()) {
	if (!_err || typeof _err !== "object") {
		return { message: String(_err) };
	}
	const err = _err;
	if (err.showDiff || err.showDiff === undefined && err.expected !== undefined && err.actual !== undefined) {
		err.diff = printDiffOrStringify(err.actual, err.expected, {
			...diffOptions,
			...err.diffOptions
		});
	}
	if ("expected" in err && typeof err.expected !== "string") {
		err.expected = stringify(err.expected, 10);
	}
	if ("actual" in err && typeof err.actual !== "string") {
		err.actual = stringify(err.actual, 10);
	}
	// some Error implementations may not allow rewriting cause
	// in most cases, the assignment will lead to "err.cause = err.cause"
	try {
		if (!seen.has(err) && typeof err.cause === "object") {
			seen.add(err);
			err.cause = processError(err.cause, diffOptions, seen);
		}
	} catch {}
	try {
		return serializeValue(err);
	} catch (e) {
		return serializeValue(new Error(`Failed to fully serialize error: ${e?.message}\nInner error message: ${err?.message}`));
	}
}

export { processError, serializeValue as serializeError };

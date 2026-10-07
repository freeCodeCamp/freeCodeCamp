'use strict';

var SLOT = require('internal-slot');
var $SyntaxError = require('es-errors/syntax');

var $StopIteration = typeof StopIteration === 'object' ? StopIteration : null;

/** @type {import('.')} */
module.exports = function getStopIterationIterator(origIterator) {
	if (!$StopIteration) {
		throw new $SyntaxError('this environment lacks StopIteration');
	}

	SLOT.set(origIterator, '[[Done]]', false);

	/** @template T @typedef {T extends Iterator<infer U> ? U : never} IteratorType */
	/** @typedef {IteratorType<ReturnType<typeof getStopIterationIterator>>} T */
	var siIterator = {
		next: /** @type {() => IteratorResult<T>} */ function next() {
			// eslint-disable-next-line no-extra-parens
			var iterator = /** @type {typeof origIterator} */ (SLOT.get(this, '[[Iterator]]'));
			var done = !!SLOT.get(iterator, '[[Done]]');
			try {
				return {
					done: done,
					// eslint-disable-next-line no-extra-parens
					value: done ? void undefined : /** @type {T} */ (iterator.next())
				};
			} catch (e) {
				SLOT.set(iterator, '[[Done]]', true);
				if (e !== $StopIteration) {
					throw e;
				}
				return {
					done: true,
					value: void undefined
				};
			}
		}
	};

	SLOT.set(siIterator, '[[Iterator]]', origIterator);

	// @ts-expect-error TODO FIXME
	return siIterator;
};

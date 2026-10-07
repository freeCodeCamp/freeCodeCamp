/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { register } = require("./serialization");

const Position = /** @type {TODO} */ (require("acorn")).Position;
const SourceLocation = require("acorn").SourceLocation;
const ValidationError = require("schema-utils").ValidationError;
const {
	CachedSource,
	ConcatSource,
	OriginalSource,
	PrefixSource,
	RawSource,
	ReplaceSource,
	SourceMapSource
} = require("webpack-sources");

/** @typedef {import("acorn").Position} Position */
/** @typedef {import("../Dependency").RealDependencyLocation} RealDependencyLocation */
/** @typedef {import("../Dependency").SourcePosition} SourcePosition */
/** @typedef {import("./serialization").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization").ObjectSerializerContext} ObjectSerializerContext */

/** @typedef {ObjectSerializerContext & { writeLazy?: (value: any) => void }} WebpackObjectSerializerContext */

const CURRENT_MODULE = "webpack/lib/util/registerExternalSerializer";

register(
	CachedSource,
	CURRENT_MODULE,
	"webpack-sources/CachedSource",
	new (class CachedSourceSerializer {
		/**
		 * @param {CachedSource} source the cached source to be serialized
		 * @param {WebpackObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write, writeLazy }) {
			if (writeLazy) {
				writeLazy(source.originalLazy());
			} else {
				write(source.original());
			}
			write(source.getCachedData());
		}

		/**
		 * @param {ObjectDeserializerContext} context context
		 * @returns {CachedSource} cached source
		 */
		deserialize({ read }) {
			const source = read();
			const cachedData = read();
			return new CachedSource(source, cachedData);
		}
	})()
);

register(
	RawSource,
	CURRENT_MODULE,
	"webpack-sources/RawSource",
	new (class RawSourceSerializer {
		/**
		 * @param {RawSource} source the raw source to be serialized
		 * @param {WebpackObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.buffer());
			write(!source.isBuffer());
		}

		/**
		 * @param {ObjectDeserializerContext} context context
		 * @returns {RawSource} raw source
		 */
		deserialize({ read }) {
			const source = read();
			const convertToString = read();
			return new RawSource(source, convertToString);
		}
	})()
);

register(
	ConcatSource,
	CURRENT_MODULE,
	"webpack-sources/ConcatSource",
	new (class ConcatSourceSerializer {
		/**
		 * @param {ConcatSource} source the concat source to be serialized
		 * @param {WebpackObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.getChildren());
		}

		/**
		 * @param {ObjectDeserializerContext} context context
		 * @returns {ConcatSource} concat source
		 */
		deserialize({ read }) {
			const source = new ConcatSource();
			source.addAllSkipOptimizing(read());
			return source;
		}
	})()
);

register(
	PrefixSource,
	CURRENT_MODULE,
	"webpack-sources/PrefixSource",
	new (class PrefixSourceSerializer {
		/**
		 * @param {PrefixSource} source the prefix source to be serialized
		 * @param {WebpackObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.getPrefix());
			write(source.original());
		}

		/**
		 * @param {ObjectDeserializerContext} context context
		 * @returns {PrefixSource} prefix source
		 */
		deserialize({ read }) {
			return new PrefixSource(read(), read());
		}
	})()
);

register(
	ReplaceSource,
	CURRENT_MODULE,
	"webpack-sources/ReplaceSource",
	new (class ReplaceSourceSerializer {
		/**
		 * @param {ReplaceSource} source the replace source to be serialized
		 * @param {WebpackObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.original());
			write(source.getName());
			const replacements = source.getReplacements();
			write(replacements.length);
			for (const repl of replacements) {
				write(repl.start);
				write(repl.end);
			}
			for (const repl of replacements) {
				write(repl.content);
				write(repl.name);
			}
		}

		/**
		 * @param {ObjectDeserializerContext} context context
		 * @returns {ReplaceSource} replace source
		 */
		deserialize({ read }) {
			const source = new ReplaceSource(read(), read());
			const len = read();
			const startEndBuffer = [];
			for (let i = 0; i < len; i++) {
				startEndBuffer.push(read(), read());
			}
			let j = 0;
			for (let i = 0; i < len; i++) {
				source.replace(
					startEndBuffer[j++],
					startEndBuffer[j++],
					read(),
					read()
				);
			}
			return source;
		}
	})()
);

register(
	OriginalSource,
	CURRENT_MODULE,
	"webpack-sources/OriginalSource",
	new (class OriginalSourceSerializer {
		/**
		 * @param {OriginalSource} source the original source to be serialized
		 * @param {WebpackObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.buffer());
			write(source.getName());
		}

		/**
		 * @param {ObjectDeserializerContext} context context
		 * @returns {OriginalSource} original source
		 */
		deserialize({ read }) {
			const buffer = read();
			const name = read();
			return new OriginalSource(buffer, name);
		}
	})()
);

register(
	SourceLocation,
	CURRENT_MODULE,
	"acorn/SourceLocation",
	new (class SourceLocationSerializer {
		/**
		 * @param {SourceLocation} loc the location to be serialized
		 * @param {WebpackObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(loc, { write }) {
			write(loc.start.line);
			write(loc.start.column);
			write(loc.end.line);
			write(loc.end.column);
		}

		/**
		 * @param {ObjectDeserializerContext} context context
		 * @returns {RealDependencyLocation} location
		 */
		deserialize({ read }) {
			return {
				start: {
					line: read(),
					column: read()
				},
				end: {
					line: read(),
					column: read()
				}
			};
		}
	})()
);

register(
	Position,
	CURRENT_MODULE,
	"acorn/Position",
	new (class PositionSerializer {
		/**
		 * @param {Position} pos the position to be serialized
		 * @param {WebpackObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(pos, { write }) {
			write(pos.line);
			write(pos.column);
		}

		/**
		 * @param {ObjectDeserializerContext} context context
		 * @returns {SourcePosition} position
		 */
		deserialize({ read }) {
			return {
				line: read(),
				column: read()
			};
		}
	})()
);

register(
	SourceMapSource,
	CURRENT_MODULE,
	"webpack-sources/SourceMapSource",
	new (class SourceMapSourceSerializer {
		/**
		 * @param {SourceMapSource} source the source map source to be serialized
		 * @param {WebpackObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.getArgsAsBuffers());
		}

		/**
		 * @param {ObjectDeserializerContext} context context
		 * @returns {SourceMapSource} source source map source
		 */
		deserialize({ read }) {
			// @ts-expect-error
			return new SourceMapSource(...read());
		}
	})()
);

register(
	ValidationError,
	CURRENT_MODULE,
	"schema-utils/ValidationError",
	new (class ValidationErrorSerializer {
		// TODO error should be ValidationError, but this fails the type checks
		/**
		 * @param {TODO} error the source map source to be serialized
		 * @param {WebpackObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(error, { write }) {
			write(error.errors);
			write(error.schema);
			write({
				name: error.headerName,
				baseDataPath: error.baseDataPath,
				postFormatter: error.postFormatter
			});
		}

		/**
		 * @param {ObjectDeserializerContext} context context
		 * @returns {TODO} error
		 */
		deserialize({ read }) {
			return new ValidationError(read(), read(), read());
		}
	})()
);

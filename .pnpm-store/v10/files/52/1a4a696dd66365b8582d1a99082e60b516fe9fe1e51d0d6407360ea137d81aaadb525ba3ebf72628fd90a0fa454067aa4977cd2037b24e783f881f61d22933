/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Position = require("acorn").Position;
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
const { register } = require("./serialization");

/** @typedef {import("acorn").Position} Position */
/** @typedef {import("../Dependency").RealDependencyLocation} RealDependencyLocation */
/** @typedef {import("../Dependency").SourcePosition} SourcePosition */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

const CURRENT_MODULE = "webpack/lib/util/registerExternalSerializer";

register(
	CachedSource,
	CURRENT_MODULE,
	"webpack-sources/CachedSource",
	new (class CachedSourceSerializer {
		/**
		 * Serializes this instance into the provided serializer context.
		 * @param {CachedSource} source the cached source to be serialized
		 * @param {ObjectSerializerContext} context context
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
		 * Restores this instance from the provided deserializer context.
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
		 * Serializes this instance into the provided serializer context.
		 * @param {RawSource} source the raw source to be serialized
		 * @param {ObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.buffer());
			write(!source.isBuffer());
		}

		/**
		 * Restores this instance from the provided deserializer context.
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
		 * Serializes this instance into the provided serializer context.
		 * @param {ConcatSource} source the concat source to be serialized
		 * @param {ObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.getChildren());
		}

		/**
		 * Restores this instance from the provided deserializer context.
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
		 * Serializes this instance into the provided serializer context.
		 * @param {PrefixSource} source the prefix source to be serialized
		 * @param {ObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.getPrefix());
			write(source.original());
		}

		/**
		 * Restores this instance from the provided deserializer context.
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
		 * Serializes this instance into the provided serializer context.
		 * @param {ReplaceSource} source the replace source to be serialized
		 * @param {ObjectSerializerContext} context context
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
		 * Restores this instance from the provided deserializer context.
		 * @param {ObjectDeserializerContext} context context
		 * @returns {ReplaceSource} replace source
		 */
		deserialize({ read }) {
			const source = new ReplaceSource(read(), read());
			const len = read();
			/** @type {number[]} */
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
		 * Serializes this instance into the provided serializer context.
		 * @param {OriginalSource} source the original source to be serialized
		 * @param {ObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.buffer());
			write(source.getName());
		}

		/**
		 * Restores this instance from the provided deserializer context.
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
		 * Serializes this instance into the provided serializer context.
		 * @param {SourceLocation} loc the location to be serialized
		 * @param {ObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(loc, { write }) {
			write(loc.start.line);
			write(loc.start.column);
			write(loc.end.line);
			write(loc.end.column);
		}

		/**
		 * Restores this instance from the provided deserializer context.
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
		 * Serializes this instance into the provided serializer context.
		 * @param {Position} pos the position to be serialized
		 * @param {ObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(pos, { write }) {
			write(pos.line);
			write(pos.column);
		}

		/**
		 * Restores this instance from the provided deserializer context.
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
		 * Serializes this instance into the provided serializer context.
		 * @param {SourceMapSource} source the source map source to be serialized
		 * @param {ObjectSerializerContext} context context
		 * @returns {void}
		 */
		serialize(source, { write }) {
			write(source.getArgsAsBuffers());
		}

		/**
		 * Restores this instance from the provided deserializer context.
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
		/**
		 * Serializes this instance into the provided serializer context.
		 * @param {ValidationError} error the source map source to be serialized
		 * @param {ObjectSerializerContext} context context
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
		 * Restores this instance from the provided deserializer context.
		 * @param {ObjectDeserializerContext} context context
		 * @returns {ValidationError} error
		 */
		deserialize({ read }) {
			return new ValidationError(read(), read(), read());
		}
	})()
);

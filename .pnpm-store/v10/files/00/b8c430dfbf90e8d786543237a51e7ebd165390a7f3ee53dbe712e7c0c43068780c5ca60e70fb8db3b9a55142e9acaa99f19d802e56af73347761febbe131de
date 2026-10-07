"use strict";

var forEach       = require("es5-ext/object/for-each")
  , normalizeOpts = require("es5-ext/object/normalize-options")
  , callable      = require("es5-ext/object/valid-callable")
  , lazy          = require("d/lazy")
  , resolveLength = require("./resolve-length")
  , extensions    = require("./registered-extensions");

module.exports = function (memoize) {
	return function (props) {
		forEach(props, function (desc) {
			var fn = callable(desc.value), length;
			desc.value = function (options) {
				if (options.getNormalizer) {
					options = normalizeOpts(options);
					if (length === undefined) {
						length = resolveLength(
							options.length,
							fn.length,
							options.async && extensions.async
						);
					}
					options.normalizer = options.getNormalizer(length);
					delete options.getNormalizer;
				}
				return memoize(fn.bind(this), options);
			};
		});
		return lazy(props);
	};
};

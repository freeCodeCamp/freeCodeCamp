// Gathers statistical data, and provides them in convinient form

"use strict";

var partial = require("es5-ext/function/#/partial")
  , forEach = require("es5-ext/object/for-each")
  , pad     = require("es5-ext/string/#/pad")
  , compact = require("es5-ext/array/#/compact")
  , d       = require("d")
  , memoize = require("./plain");

var max = Math.max, stats = exports.statistics = {};

Object.defineProperty(
	memoize,
	"__profiler__",
	d(function (conf) {
		var id, source, data, stack;
		stack = new Error().stack;
		if (
			!stack ||
			!stack.split("\n").slice(3).some(function (line) {
				if (line.indexOf("/memoizee/") === -1 && line.indexOf(" (native)") === -1) {
					source = line.replace(/\n/g, "\\n").trim();
					return true;
				}
				return false;
			})
		) {
			source = "unknown";
		}
		id = compact.call([conf.profileName, source]).join(", ");

		if (!stats[id]) stats[id] = { initial: 0, cached: 0 };
		data = stats[id];

		conf.on("set", function () { ++data.initial; });
		conf.on("get", function () { ++data.cached; });
	})
);

exports.log = function () {
	var initial, cached, ordered, ipad, cpad, ppad, toPrc, log;

	initial = cached = 0;
	ordered = [];

	toPrc = function (initialCount, cachedCount) {
		if (!initialCount && !cachedCount) {
			return "0.00";
		}
		return ((cachedCount / (initialCount + cachedCount)) * 100).toFixed(2);
	};

	log = "------------------------------------------------------------\n";
	log += "Memoize statistics:\n\n";

	forEach(
		stats,
		function (data, name) {
			initial += data.initial;
			cached += data.cached;
			ordered.push([name, data]);
		},
		null,
		function (nameA, nameB) {
			return (
				this[nameB].initial +
				this[nameB].cached -
				(this[nameA].initial + this[nameA].cached)
			);
		}
	);

	ipad = partial.call(pad, " ", max(String(initial).length, "Init".length));
	cpad = partial.call(pad, " ", max(String(cached).length, "Cache".length));
	ppad = partial.call(pad, " ", "%Cache".length);
	log +=
		ipad.call("Init") +
		"  " +
		cpad.call("Cache") +
		"  " +
		ppad.call("%Cache") +
		"  Source location\n";
	log +=
		ipad.call(initial) +
		"  " +
		cpad.call(cached) +
		"  " +
		ppad.call(toPrc(initial, cached)) +
		"  (all)\n";
	ordered.forEach(function (data) {
		var name = data[0];
		data = data[1];
		log +=
			ipad.call(data.initial) +
			"  " +
			cpad.call(data.cached) +
			"  " +
			ppad.call(toPrc(data.initial, data.cached)) +
			"  " +
			name +
			"\n";
	});
	log += "------------------------------------------------------------\n";
	return log;
};

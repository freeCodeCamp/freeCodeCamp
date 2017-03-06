//! moment-timezone-utils.js
//! version : 0.5.10
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
	"use strict";

	/*global define*/
	if (typeof define === 'function' && define.amd) {
		define(['moment'], factory);                 // AMD
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory(require('./'));     // Node
	} else {
		factory(root.moment);                        // Browser
	}
}(this, function (moment) {
	"use strict";

	if (!moment.tz) {
		throw new Error("moment-timezone-utils.js must be loaded after moment-timezone.js");
	}

	/************************************
		Pack Base 60
	************************************/

	var BASE60 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX',
		EPSILON = 0.000001; // Used to fix floating point rounding errors

	function packBase60Fraction(fraction, precision) {
		var buffer = '.',
			output = '',
			current;

		while (precision > 0) {
			precision  -= 1;
			fraction   *= 60;
			current     = Math.floor(fraction + EPSILON);
			buffer     += BASE60[current];
			fraction   -= current;

			// Only add buffer to output once we have a non-zero value.
			// This makes '.000' output '', and '.100' output '.1'
			if (current) {
				output += buffer;
				buffer  = '';
			}
		}

		return output;
	}

	function packBase60(number, precision) {
		var output = '',
			absolute = Math.abs(number),
			whole = Math.floor(absolute),
			fraction = packBase60Fraction(absolute - whole, Math.min(~~precision, 10));

		while (whole > 0) {
			output = BASE60[whole % 60] + output;
			whole = Math.floor(whole / 60);
		}

		if (number < 0) {
			output = '-' + output;
		}

		if (output && fraction) {
			return output + fraction;
		}

		if (!fraction && output === '-') {
			return '0';
		}

		return output || fraction || '0';
	}

	/************************************
		Pack
	************************************/

	function packUntils(untils) {
		var out = [],
			last = 0,
			i;

		for (i = 0; i < untils.length - 1; i++) {
			out[i] = packBase60(Math.round((untils[i] - last) / 1000) / 60, 1);
			last = untils[i];
		}

		return out.join(' ');
	}

	function packAbbrsAndOffsets(source) {
		var index = 0,
			abbrs = [],
			offsets = [],
			indices = [],
			map = {},
			i, key;

		for (i = 0; i < source.abbrs.length; i++) {
			key = source.abbrs[i] + '|' + source.offsets[i];
			if (map[key] === undefined) {
				map[key] = index;
				abbrs[index] = source.abbrs[i];
				offsets[index] = packBase60(Math.round(source.offsets[i] * 60) / 60, 1);
				index++;
			}
			indices[i] = packBase60(map[key], 0);
		}

		return abbrs.join(' ') + '|' + offsets.join(' ') + '|' + indices.join('');
	}

	function packPopulation (number) {
		if (!number) {
			return '';
		}
		if (number < 1000) {
			return '|' + number;
		}
		var exponent = String(number | 0).length - 2;
		var precision = Math.round(number / Math.pow(10, exponent));
		return '|' + precision + 'e' + exponent;
	}

	function validatePackData (source) {
		if (!source.name)    { throw new Error("Missing name"); }
		if (!source.abbrs)   { throw new Error("Missing abbrs"); }
		if (!source.untils)  { throw new Error("Missing untils"); }
		if (!source.offsets) { throw new Error("Missing offsets"); }
		if (
			source.offsets.length !== source.untils.length ||
			source.offsets.length !== source.abbrs.length
		) {
			throw new Error("Mismatched array lengths");
		}
	}

	function pack (source) {
		validatePackData(source);
		return [
			source.name,
			packAbbrsAndOffsets(source),
			packUntils(source.untils) + packPopulation(source.population)
		].join('|');
	}

	/************************************
		Create Links
	************************************/

	function arraysAreEqual(a, b) {
		var i;

		if (a.length !== b.length) { return false; }

		for (i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) {
				return false;
			}
		}
		return true;
	}

	function zonesAreEqual(a, b) {
		return arraysAreEqual(a.offsets, b.offsets) && arraysAreEqual(a.abbrs, b.abbrs) && arraysAreEqual(a.untils, b.untils);
	}

	function findAndCreateLinks (input, output, links) {
		var i, j, a, b, group, foundGroup, groups = [];

		for (i = 0; i < input.length; i++) {
			foundGroup = false;
			a = input[i];

			for (j = 0; j < groups.length; j++) {
				group = groups[j];
				b = group[0];
				if (zonesAreEqual(a, b)) {
					if (a.population > b.population) {
						group.unshift(a);
					} else {
						group.push(a);
					}
					foundGroup = true;
				}
			}

			if (!foundGroup) {
				groups.push([a]);
			}
		}

		for (i = 0; i < groups.length; i++) {
			group = groups[i];
			output.push(group[0]);
			for (j = 1; j < group.length; j++) {
				links.push(group[0].name + '|' + group[j].name);
			}
		}
	}

	function createLinks (source) {
		var zones = [],
			links = [];

		if (source.links) {
			links = source.links.slice();
		}

		findAndCreateLinks(source.zones, zones, links);

		return {
			version : source.version,
			zones   : zones,
			links   : links.sort()
		};
	}

	/************************************
		Filter Years
	************************************/

	function findStartAndEndIndex (untils, start, end) {
		var startI = 0,
			endI = untils.length + 1,
			untilYear,
			i;

		if (!end) {
			end = start;
		}

		if (start > end) {
			i = start;
			start = end;
			end = i;
		}

		for (i = 0; i < untils.length; i++) {
			if (untils[i] == null) {
				continue;
			}
			untilYear = new Date(untils[i]).getUTCFullYear();
			if (untilYear < start) {
				startI = i + 1;
			}
			if (untilYear > end) {
				endI = Math.min(endI, i + 1);
			}
		}

		return [startI, endI];
	}

	function filterYears (source, start, end) {
		var slice     = Array.prototype.slice,
			indices   = findStartAndEndIndex(source.untils, start, end),
			untils    = slice.apply(source.untils, indices);

		untils[untils.length - 1] = null;

		return {
			name       : source.name,
			abbrs      : slice.apply(source.abbrs, indices),
			untils     : untils,
			offsets    : slice.apply(source.offsets, indices),
			population : source.population
		};
	}

	/************************************
		Filter, Link, and Pack
	************************************/

	function filterLinkPack (input, start, end) {
		var i,
			inputZones = input.zones,
			outputZones = [],
			output;

		for (i = 0; i < inputZones.length; i++) {
			outputZones[i] = filterYears(inputZones[i], start, end);
		}

		output = createLinks({
			zones : outputZones,
			links : input.links.slice(),
			version : input.version
		});

		for (i = 0; i < output.zones.length; i++) {
			output.zones[i] = pack(output.zones[i]);
		}

		return output;
	}

	/************************************
		Exports
	************************************/

	moment.tz.pack           = pack;
	moment.tz.packBase60     = packBase60;
	moment.tz.createLinks    = createLinks;
	moment.tz.filterYears    = filterYears;
	moment.tz.filterLinkPack = filterLinkPack;

	return moment;
}));

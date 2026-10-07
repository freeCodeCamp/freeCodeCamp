/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const { parseIdentifier } = require("./identifier");

/** @typedef {string | (string | ConditionalMapping)[]} DirectMapping */
/** @typedef {{ [k: string]: MappingValue }} ConditionalMapping */
/** @typedef {ConditionalMapping | DirectMapping | null} MappingValue */
/** @typedef {Record<string, MappingValue> | ConditionalMapping | DirectMapping} ExportsField */
/** @typedef {Record<string, MappingValue>} ImportsField */

/**
 * Processing exports/imports field
 * @callback FieldProcessor
 * @param {string} request request
 * @param {Set<string>} conditionNames condition names
 * @returns {[string[], string | null]} resolved paths with used field
 */

/*
Example exports field:
{
  ".": "./main.js",
  "./feature": {
    "browser": "./feature-browser.js",
    "default": "./feature.js"
  }
}
Terminology:

Enhanced-resolve name keys ("." and "./feature") as exports field keys.

If value is string or string[], mapping is called as a direct mapping
and value called as a direct export.

If value is key-value object, mapping is called as a conditional mapping
and value called as a conditional export.

Key in conditional mapping is called condition name.

Conditional mapping nested in another conditional mapping is called nested mapping.

----------

Example imports field:
{
  "#a": "./main.js",
  "#moment": {
    "browser": "./moment/index.js",
    "default": "moment"
  },
  "#moment/": {
    "browser": "./moment/",
    "default": "moment/"
  }
}
Terminology:

Enhanced-resolve name keys ("#a" and "#moment/", "#moment") as imports field keys.

If value is string or string[], mapping is called as a direct mapping
and value called as a direct export.

If value is key-value object, mapping is called as a conditional mapping
and value called as a conditional export.

Key in conditional mapping is called condition name.

Conditional mapping nested in another conditional mapping is called nested mapping.

*/

const slashCode = "/".charCodeAt(0);
const dotCode = ".".charCodeAt(0);
const hashCode = "#".charCodeAt(0);
const patternRegEx = /\*/g;

/**
 * @param {string} a first string
 * @param {string} b second string
 * @returns {number} compare result
 */
function patternKeyCompare(a, b) {
	const aPatternIndex = a.indexOf("*");
	const bPatternIndex = b.indexOf("*");
	const baseLenA = aPatternIndex === -1 ? a.length : aPatternIndex + 1;
	const baseLenB = bPatternIndex === -1 ? b.length : bPatternIndex + 1;

	if (baseLenA > baseLenB) return -1;
	if (baseLenB > baseLenA) return 1;
	if (aPatternIndex === -1) return 1;
	if (bPatternIndex === -1) return -1;
	if (a.length > b.length) return -1;
	if (b.length > a.length) return 1;

	return 0;
}

/**
 * Trying to match request to field
 * @param {string} request request
 * @param {ExportsField | ImportsField} field exports or import field
 * @returns {[MappingValue, string, boolean, boolean, string] | null} match or null, number is negative and one less when it's a folder mapping, number is request.length + 1 for direct mappings
 */
function findMatch(request, field) {
	if (
		Object.prototype.hasOwnProperty.call(field, request) &&
		!request.includes("*") &&
		!request.endsWith("/")
	) {
		const target = /** @type {{ [k: string]: MappingValue }} */ (field)[
			request
		];

		return [target, "", false, false, request];
	}

	/** @type {string} */
	let bestMatch = "";
	/** @type {string | undefined} */
	let bestMatchSubpath;

	const keys = Object.getOwnPropertyNames(field);

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const patternIndex = key.indexOf("*");

		if (patternIndex !== -1 && request.startsWith(key.slice(0, patternIndex))) {
			const patternTrailer = key.slice(patternIndex + 1);

			if (
				request.length >= key.length &&
				request.endsWith(patternTrailer) &&
				patternKeyCompare(bestMatch, key) === 1 &&
				key.lastIndexOf("*") === patternIndex
			) {
				bestMatch = key;
				bestMatchSubpath = request.slice(
					patternIndex,
					request.length - patternTrailer.length,
				);
			}
		}
		// For legacy `./foo/`
		else if (
			key[key.length - 1] === "/" &&
			request.startsWith(key) &&
			patternKeyCompare(bestMatch, key) === 1
		) {
			bestMatch = key;
			bestMatchSubpath = request.slice(key.length);
		}
	}

	if (bestMatch === "") return null;

	const target =
		/** @type {{ [k: string]: MappingValue }} */
		(field)[bestMatch];
	const isSubpathMapping = bestMatch.endsWith("/");
	const isPattern = bestMatch.includes("*");

	return [
		target,
		/** @type {string} */ (bestMatchSubpath),
		isSubpathMapping,
		isPattern,
		bestMatch,
	];
}

/**
 * @param {ConditionalMapping | DirectMapping | null} mapping mapping
 * @returns {boolean} is conditional mapping
 */
function isConditionalMapping(mapping) {
	return (
		mapping !== null && typeof mapping === "object" && !Array.isArray(mapping)
	);
}

/**
 * @param {ConditionalMapping} conditionalMapping_ conditional mapping
 * @param {Set<string>} conditionNames condition names
 * @returns {DirectMapping | null} direct mapping if found
 */
function conditionalMapping(conditionalMapping_, conditionNames) {
	/** @type {[ConditionalMapping, string[], number][]} */
	const lookup = [[conditionalMapping_, Object.keys(conditionalMapping_), 0]];

	loop: while (lookup.length > 0) {
		const [mapping, conditions, j] = lookup[lookup.length - 1];

		for (let i = j; i < conditions.length; i++) {
			const condition = conditions[i];

			if (condition === "default") {
				const innerMapping = mapping[condition];
				// is nested
				if (isConditionalMapping(innerMapping)) {
					const conditionalMapping = /** @type {ConditionalMapping} */ (
						innerMapping
					);
					lookup[lookup.length - 1][2] = i + 1;
					lookup.push([conditionalMapping, Object.keys(conditionalMapping), 0]);
					continue loop;
				}

				return /** @type {DirectMapping} */ (innerMapping);
			}

			if (conditionNames.has(condition)) {
				const innerMapping = mapping[condition];
				// is nested
				if (isConditionalMapping(innerMapping)) {
					const conditionalMapping = /** @type {ConditionalMapping} */ (
						innerMapping
					);
					lookup[lookup.length - 1][2] = i + 1;
					lookup.push([conditionalMapping, Object.keys(conditionalMapping), 0]);
					continue loop;
				}

				return /** @type {DirectMapping} */ (innerMapping);
			}
		}

		lookup.pop();
	}

	return null;
}

/**
 * @param {string | undefined} remainingRequest remaining request when folder mapping, undefined for file mappings
 * @param {boolean} isPattern true, if mapping is a pattern (contains "*")
 * @param {boolean} isSubpathMapping true, for subpath mappings
 * @param {string} mappingTarget direct export
 * @param {(d: string, f: boolean) => void} assert asserting direct value
 * @returns {string} mapping result
 */
function targetMapping(
	remainingRequest,
	isPattern,
	isSubpathMapping,
	mappingTarget,
	assert,
) {
	if (remainingRequest === undefined) {
		assert(mappingTarget, false);

		return mappingTarget;
	}

	if (isSubpathMapping) {
		assert(mappingTarget, true);

		return mappingTarget + remainingRequest;
	}

	assert(mappingTarget, false);

	let result = mappingTarget;

	if (isPattern) {
		result = result.replace(
			patternRegEx,
			remainingRequest.replace(/\$/g, "$$"),
		);
	}

	return result;
}

/**
 * @param {string | undefined} remainingRequest remaining request when folder mapping, undefined for file mappings
 * @param {boolean} isPattern true, if mapping is a pattern (contains "*")
 * @param {boolean} isSubpathMapping true, for subpath mappings
 * @param {DirectMapping | null} mappingTarget direct export
 * @param {Set<string>} conditionNames condition names
 * @param {(d: string, f: boolean) => void} assert asserting direct value
 * @returns {string[]} mapping result
 */
function directMapping(
	remainingRequest,
	isPattern,
	isSubpathMapping,
	mappingTarget,
	conditionNames,
	assert,
) {
	if (mappingTarget === null) return [];

	if (typeof mappingTarget === "string") {
		return [
			targetMapping(
				remainingRequest,
				isPattern,
				isSubpathMapping,
				mappingTarget,
				assert,
			),
		];
	}

	/** @type {string[]} */
	const targets = [];

	for (const exp of mappingTarget) {
		if (typeof exp === "string") {
			targets.push(
				targetMapping(
					remainingRequest,
					isPattern,
					isSubpathMapping,
					exp,
					assert,
				),
			);
			continue;
		}

		const mapping = conditionalMapping(exp, conditionNames);
		if (!mapping) continue;
		const innerExports = directMapping(
			remainingRequest,
			isPattern,
			isSubpathMapping,
			mapping,
			conditionNames,
			assert,
		);
		for (const innerExport of innerExports) {
			targets.push(innerExport);
		}
	}

	return targets;
}

/**
 * @param {ExportsField | ImportsField} field root
 * @param {(s: string) => string} normalizeRequest Normalize request, for `imports` field it adds `#`, for `exports` field it adds `.` or `./`
 * @param {(s: string) => string} assertRequest assertRequest
 * @param {(s: string, f: boolean) => void} assertTarget assertTarget
 * @returns {FieldProcessor} field processor
 */
function createFieldProcessor(
	field,
	normalizeRequest,
	assertRequest,
	assertTarget,
) {
	return function fieldProcessor(request, conditionNames) {
		request = assertRequest(request);

		const match = findMatch(normalizeRequest(request), field);

		if (match === null) return [[], null];

		const [mapping, remainingRequest, isSubpathMapping, isPattern, usedField] =
			match;

		/** @type {DirectMapping | null} */
		let direct = null;

		if (isConditionalMapping(mapping)) {
			direct = conditionalMapping(
				/** @type {ConditionalMapping} */ (mapping),
				conditionNames,
			);

			// matching not found
			if (direct === null) return [[], null];
		} else {
			direct = /** @type {DirectMapping} */ (mapping);
		}

		return [
			directMapping(
				remainingRequest,
				isPattern,
				isSubpathMapping,
				direct,
				conditionNames,
				assertTarget,
			),
			usedField,
		];
	};
}

/**
 * @param {string} request request
 * @returns {string} updated request
 */
function assertExportsFieldRequest(request) {
	if (request.charCodeAt(0) !== dotCode) {
		throw new Error('Request should be relative path and start with "."');
	}
	if (request.length === 1) return "";
	if (request.charCodeAt(1) !== slashCode) {
		throw new Error('Request should be relative path and start with "./"');
	}
	if (request.charCodeAt(request.length - 1) === slashCode) {
		throw new Error("Only requesting file allowed");
	}

	return request.slice(2);
}

/**
 * @param {ExportsField} field exports field
 * @returns {ExportsField} normalized exports field
 */
function buildExportsField(field) {
	// handle syntax sugar, if exports field is direct mapping for "."
	if (typeof field === "string" || Array.isArray(field)) {
		return { ".": field };
	}

	const keys = Object.keys(field);

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];

		if (key.charCodeAt(0) !== dotCode) {
			// handle syntax sugar, if exports field is conditional mapping for "."
			if (i === 0) {
				while (i < keys.length) {
					const charCode = keys[i].charCodeAt(0);
					if (charCode === dotCode || charCode === slashCode) {
						throw new Error(
							`Exports field key should be relative path and start with "." (key: ${JSON.stringify(
								key,
							)})`,
						);
					}
					i++;
				}

				return { ".": field };
			}

			throw new Error(
				`Exports field key should be relative path and start with "." (key: ${JSON.stringify(
					key,
				)})`,
			);
		}

		if (key.length === 1) {
			continue;
		}

		if (key.charCodeAt(1) !== slashCode) {
			throw new Error(
				`Exports field key should be relative path and start with "./" (key: ${JSON.stringify(
					key,
				)})`,
			);
		}
	}

	return field;
}

/**
 * @param {string} exp export target
 * @param {boolean} expectFolder is folder expected
 */
function assertExportTarget(exp, expectFolder) {
	const parsedIdentifier = parseIdentifier(exp);

	if (!parsedIdentifier) {
		return;
	}

	const [relativePath] = parsedIdentifier;
	const isFolder =
		relativePath.charCodeAt(relativePath.length - 1) === slashCode;

	if (isFolder !== expectFolder) {
		throw new Error(
			expectFolder
				? `Expecting folder to folder mapping. ${JSON.stringify(
						exp,
					)} should end with "/"`
				: `Expecting file to file mapping. ${JSON.stringify(
						exp,
					)} should not end with "/"`,
		);
	}
}

/**
 * @param {ExportsField} exportsField the exports field
 * @returns {FieldProcessor} process callback
 */
module.exports.processExportsField = function processExportsField(
	exportsField,
) {
	return createFieldProcessor(
		buildExportsField(exportsField),
		(request) => (request.length === 0 ? "." : `./${request}`),
		assertExportsFieldRequest,
		assertExportTarget,
	);
};

/**
 * @param {string} request request
 * @returns {string} updated request
 */
function assertImportsFieldRequest(request) {
	if (request.charCodeAt(0) !== hashCode) {
		throw new Error('Request should start with "#"');
	}
	if (request.length === 1) {
		throw new Error("Request should have at least 2 characters");
	}
	// Note: #/ patterns are now allowed per Node.js PR #60864
	// https://github.com/nodejs/node/pull/60864
	if (request.charCodeAt(request.length - 1) === slashCode) {
		throw new Error("Only requesting file allowed");
	}

	return request.slice(1);
}

/**
 * @param {string} imp import target
 * @param {boolean} expectFolder is folder expected
 */
function assertImportTarget(imp, expectFolder) {
	const parsedIdentifier = parseIdentifier(imp);

	if (!parsedIdentifier) {
		return;
	}

	const [relativePath] = parsedIdentifier;
	const isFolder =
		relativePath.charCodeAt(relativePath.length - 1) === slashCode;

	if (isFolder !== expectFolder) {
		throw new Error(
			expectFolder
				? `Expecting folder to folder mapping. ${JSON.stringify(
						imp,
					)} should end with "/"`
				: `Expecting file to file mapping. ${JSON.stringify(
						imp,
					)} should not end with "/"`,
		);
	}
}

/**
 * @param {ImportsField} importsField the exports field
 * @returns {FieldProcessor} process callback
 */
module.exports.processImportsField = function processImportsField(
	importsField,
) {
	return createFieldProcessor(
		importsField,
		(request) => `#${request}`,
		assertImportsFieldRequest,
		assertImportTarget,
	);
};

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { join, dirname, readJson } = require("../util/fs");

/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("../util/fs").JsonObject} JsonObject */
/** @typedef {import("../util/fs").JsonPrimitive} JsonPrimitive */

// Extreme shorthand only for github. eg: foo/bar
const RE_URL_GITHUB_EXTREME_SHORT = /^[^/@:.\s][^/@:\s]*\/[^@:\s]*[^/@:\s]#\S+/;

// Short url with specific protocol. eg: github:foo/bar
const RE_GIT_URL_SHORT = /^(github|gitlab|bitbucket|gist):\/?[^/.]+\/?/i;

// Currently supported protocols
const RE_PROTOCOL =
	/^((git\+)?(ssh|https?|file)|git|github|gitlab|bitbucket|gist):$/i;

// Has custom protocol
const RE_CUSTOM_PROTOCOL = /^((git\+)?(ssh|https?|file)|git):\/\//i;

// Valid hash format for npm / yarn ...
const RE_URL_HASH_VERSION = /#(?:semver:)?(.+)/;

// Simple hostname validate
const RE_HOSTNAME = /^(?:[^/.]+(\.[^/]+)+|localhost)$/;

// For hostname with colon. eg: ssh://user@github.com:foo/bar
const RE_HOSTNAME_WITH_COLON =
	/([^/@#:.]+(?:\.[^/@#:.]+)+|localhost):([^#/0-9]+)/;

// Reg for url without protocol
const RE_NO_PROTOCOL = /^([^/@#:.]+(?:\.[^/@#:.]+)+)/;

// RegExp for version string
const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;

// Specific protocol for short url without normal hostname
const PROTOCOLS_FOR_SHORT = [
	"github:",
	"gitlab:",
	"bitbucket:",
	"gist:",
	"file:"
];

// Default protocol for git url
const DEF_GIT_PROTOCOL = "git+ssh://";

// thanks to https://github.com/npm/hosted-git-info/blob/latest/git-host-info.js
const extractCommithashByDomain = {
	/**
	 * @param {string} pathname pathname
	 * @param {string} hash hash
	 * @returns {string | undefined} hash
	 */
	"github.com": (pathname, hash) => {
		let [, user, project, type, commithash] = pathname.split("/", 5);
		if (type && type !== "tree") {
			return;
		}

		commithash = !type ? hash : `#${commithash}`;

		if (project && project.endsWith(".git")) {
			project = project.slice(0, -4);
		}

		if (!user || !project) {
			return;
		}

		return commithash;
	},
	/**
	 * @param {string} pathname pathname
	 * @param {string} hash hash
	 * @returns {string | undefined} hash
	 */
	"gitlab.com": (pathname, hash) => {
		const path = pathname.slice(1);
		if (path.includes("/-/") || path.includes("/archive.tar.gz")) {
			return;
		}

		const segments = path.split("/");
		let project = /** @type {string} */ (segments.pop());
		if (project.endsWith(".git")) {
			project = project.slice(0, -4);
		}

		const user = segments.join("/");
		if (!user || !project) {
			return;
		}

		return hash;
	},
	/**
	 * @param {string} pathname pathname
	 * @param {string} hash hash
	 * @returns {string | undefined} hash
	 */
	"bitbucket.org": (pathname, hash) => {
		let [, user, project, aux] = pathname.split("/", 4);
		if (["get"].includes(aux)) {
			return;
		}

		if (project && project.endsWith(".git")) {
			project = project.slice(0, -4);
		}

		if (!user || !project) {
			return;
		}

		return hash;
	},
	/**
	 * @param {string} pathname pathname
	 * @param {string} hash hash
	 * @returns {string | undefined} hash
	 */
	"gist.github.com": (pathname, hash) => {
		let [, user, project, aux] = pathname.split("/", 4);
		if (aux === "raw") {
			return;
		}

		if (!project) {
			if (!user) {
				return;
			}

			project = user;
		}

		if (project.endsWith(".git")) {
			project = project.slice(0, -4);
		}

		return hash;
	}
};

/**
 * extract commit hash from parsed url
 * @inner
 * @param {URL} urlParsed parsed url
 * @returns {string} commithash
 */
function getCommithash(urlParsed) {
	let { hostname, pathname, hash } = urlParsed;
	hostname = hostname.replace(/^www\./, "");

	try {
		hash = decodeURIComponent(hash);
		// eslint-disable-next-line no-empty
	} catch (_err) {}

	if (
		extractCommithashByDomain[
			/** @type {keyof extractCommithashByDomain} */ (hostname)
		]
	) {
		return (
			extractCommithashByDomain[
				/** @type {keyof extractCommithashByDomain} */ (hostname)
			](pathname, hash) || ""
		);
	}

	return hash;
}

/**
 * make url right for URL parse
 * @inner
 * @param {string} gitUrl git url
 * @returns {string} fixed url
 */
function correctUrl(gitUrl) {
	// like:
	// proto://hostname.com:user/repo -> proto://hostname.com/user/repo
	return gitUrl.replace(RE_HOSTNAME_WITH_COLON, "$1/$2");
}

/**
 * make url protocol right for URL parse
 * @inner
 * @param {string} gitUrl git url
 * @returns {string} fixed url
 */
function correctProtocol(gitUrl) {
	// eg: github:foo/bar#v1.0. Should not add double slash, in case of error parsed `pathname`
	if (RE_GIT_URL_SHORT.test(gitUrl)) {
		return gitUrl;
	}

	// eg: user@github.com:foo/bar
	if (!RE_CUSTOM_PROTOCOL.test(gitUrl)) {
		return `${DEF_GIT_PROTOCOL}${gitUrl}`;
	}

	return gitUrl;
}

/**
 * extract git dep version from hash
 * @inner
 * @param {string} hash hash
 * @returns {string} git dep version
 */
function getVersionFromHash(hash) {
	const matched = hash.match(RE_URL_HASH_VERSION);

	return (matched && matched[1]) || "";
}

/**
 * if string can be decoded
 * @inner
 * @param {string} str str to be checked
 * @returns {boolean} if can be decoded
 */
function canBeDecoded(str) {
	try {
		decodeURIComponent(str);
	} catch (_err) {
		return false;
	}

	return true;
}

/**
 * get right dep version from git url
 * @inner
 * @param {string} gitUrl git url
 * @returns {string} dep version
 */
function getGitUrlVersion(gitUrl) {
	const oriGitUrl = gitUrl;
	// github extreme shorthand
	gitUrl = RE_URL_GITHUB_EXTREME_SHORT.test(gitUrl)
		? `github:${gitUrl}`
		: correctProtocol(gitUrl);

	gitUrl = correctUrl(gitUrl);

	let parsed;
	try {
		parsed = new URL(gitUrl);
		// eslint-disable-next-line no-empty
	} catch (_err) {}

	if (!parsed) {
		return "";
	}

	const { protocol, hostname, pathname, username, password } = parsed;
	if (!RE_PROTOCOL.test(protocol)) {
		return "";
	}

	// pathname shouldn't be empty or URL malformed
	if (!pathname || !canBeDecoded(pathname)) {
		return "";
	}

	// without protocol, there should have auth info
	if (RE_NO_PROTOCOL.test(oriGitUrl) && !username && !password) {
		return "";
	}

	if (!PROTOCOLS_FOR_SHORT.includes(protocol.toLowerCase())) {
		if (!RE_HOSTNAME.test(hostname)) {
			return "";
		}

		const commithash = getCommithash(parsed);
		return getVersionFromHash(commithash) || commithash;
	}

	// for protocol short
	return getVersionFromHash(gitUrl);
}

/**
 * @param {string} str maybe required version
 * @returns {boolean} true, if it looks like a version
 */
function isRequiredVersion(str) {
	return VERSION_PATTERN_REGEXP.test(str);
}

module.exports.isRequiredVersion = isRequiredVersion;

/**
 * @see https://docs.npmjs.com/cli/v7/configuring-npm/package-json#urls-as-dependencies
 * @param {string} versionDesc version to be normalized
 * @returns {string} normalized version
 */
function normalizeVersion(versionDesc) {
	versionDesc = (versionDesc && versionDesc.trim()) || "";

	if (isRequiredVersion(versionDesc)) {
		return versionDesc;
	}

	// add handle for URL Dependencies
	return getGitUrlVersion(versionDesc.toLowerCase());
}

module.exports.normalizeVersion = normalizeVersion;

/** @typedef {{ data: JsonObject, path: string }} DescriptionFile */

/**
 * @param {InputFileSystem} fs file system
 * @param {string} directory directory to start looking into
 * @param {string[]} descriptionFiles possible description filenames
 * @param {function((Error | null)=, DescriptionFile=, string[]=): void} callback callback
 * @param {function(DescriptionFile=): boolean} satisfiesDescriptionFileData file data compliance check
 * @param {Set<string>} checkedFilePaths set of file paths that have been checked
 */
const getDescriptionFile = (
	fs,
	directory,
	descriptionFiles,
	callback,
	satisfiesDescriptionFileData,
	checkedFilePaths = new Set()
) => {
	let i = 0;

	const satisfiesDescriptionFileDataInternal = {
		check: satisfiesDescriptionFileData,
		checkedFilePaths
	};

	const tryLoadCurrent = () => {
		if (i >= descriptionFiles.length) {
			const parentDirectory = dirname(fs, directory);
			if (!parentDirectory || parentDirectory === directory) {
				return callback(
					null,
					undefined,
					Array.from(satisfiesDescriptionFileDataInternal.checkedFilePaths)
				);
			}
			return getDescriptionFile(
				fs,
				parentDirectory,
				descriptionFiles,
				callback,
				satisfiesDescriptionFileDataInternal.check,
				satisfiesDescriptionFileDataInternal.checkedFilePaths
			);
		}
		const filePath = join(fs, directory, descriptionFiles[i]);
		readJson(fs, filePath, (err, data) => {
			if (err) {
				if ("code" in err && err.code === "ENOENT") {
					i++;
					return tryLoadCurrent();
				}
				return callback(err);
			}
			if (!data || typeof data !== "object" || Array.isArray(data)) {
				return callback(
					new Error(`Description file ${filePath} is not an object`)
				);
			}
			if (
				typeof satisfiesDescriptionFileDataInternal.check === "function" &&
				!satisfiesDescriptionFileDataInternal.check({ data, path: filePath })
			) {
				i++;
				satisfiesDescriptionFileDataInternal.checkedFilePaths.add(filePath);
				return tryLoadCurrent();
			}
			callback(null, { data, path: filePath });
		});
	};
	tryLoadCurrent();
};
module.exports.getDescriptionFile = getDescriptionFile;

/**
 * @param {JsonObject} data description file data i.e.: package.json
 * @param {string} packageName name of the dependency
 * @returns {string | undefined} normalized version
 */
const getRequiredVersionFromDescriptionFile = (data, packageName) => {
	const dependencyTypes = [
		"optionalDependencies",
		"dependencies",
		"peerDependencies",
		"devDependencies"
	];

	for (const dependencyType of dependencyTypes) {
		const dependency = /** @type {JsonObject} */ (data[dependencyType]);
		if (
			dependency &&
			typeof dependency === "object" &&
			packageName in dependency
		) {
			return normalizeVersion(
				/** @type {Exclude<JsonPrimitive, null | boolean| number>} */ (
					dependency[packageName]
				)
			);
		}
	}
};
module.exports.getRequiredVersionFromDescriptionFile =
	getRequiredVersionFromDescriptionFile;

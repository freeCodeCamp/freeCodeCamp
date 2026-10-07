/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sam Chen @chenxsan
*/

"use strict";

/**
 * @param {string} urlAndGlobal the script request
 * @returns {string[]} script url and its global variable
 */
module.exports = function extractUrlAndGlobal(urlAndGlobal) {
	const index = urlAndGlobal.indexOf("@");
	if (index <= 0 || index === urlAndGlobal.length - 1) {
		throw new Error(`Invalid request "${urlAndGlobal}"`);
	}
	return [urlAndGlobal.substring(index + 1), urlAndGlobal.substring(0, index)];
};

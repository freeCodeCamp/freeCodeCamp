/**
 * @param {boolean} isHTTPS true when need https module, otherwise false
 * @returns {Promise<import("http") | import("https")>}
 */
module.exports = function (isHTTPS) {
	return isHTTPS ? import("https") : import("http");
};

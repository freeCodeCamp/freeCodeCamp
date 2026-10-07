/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sean Larkin @thelarkinn
*/

"use strict";

const { formatSize } = require("../SizeFormatHelpers");
const WebpackError = require("../WebpackError");

/** @typedef {import("./SizeLimitsPlugin").AssetDetails} AssetDetails */

module.exports = class AssetsOverSizeLimitWarning extends WebpackError {
	/**
	 * @param {AssetDetails[]} assetsOverSizeLimit the assets
	 * @param {number} assetLimit the size limit
	 */
	constructor(assetsOverSizeLimit, assetLimit) {
		const assetLists = assetsOverSizeLimit
			.map(asset => `\n  ${asset.name} (${formatSize(asset.size)})`)
			.join("");

		super(`asset size limit: The following asset(s) exceed the recommended size limit (${formatSize(
			assetLimit
		)}).
This can impact web performance.
Assets: ${assetLists}`);

		this.name = "AssetsOverSizeLimitWarning";
		this.assets = assetsOverSizeLimit;
	}
};

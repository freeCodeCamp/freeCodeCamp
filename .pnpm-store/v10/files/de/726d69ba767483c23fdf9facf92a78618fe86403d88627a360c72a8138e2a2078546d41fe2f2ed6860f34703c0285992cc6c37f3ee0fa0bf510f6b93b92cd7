/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sean Larkin @thelarkinn
*/

"use strict";

const WebpackError = require("../WebpackError");

module.exports = class NoAsyncChunksWarning extends WebpackError {
	constructor() {
		super(
			"webpack performance recommendations: \n" +
				"You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.\n" +
				"For more info visit https://webpack.js.org/guides/code-splitting/"
		);

		/** @type {string} */
		this.name = "NoAsyncChunksWarning";
	}
};

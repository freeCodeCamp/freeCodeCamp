import { isAbsolute, join } from 'node:path';
import process from 'node:process';

import createStylelint from './createStylelint.mjs';
import { isString } from './utils/validateTypes.mjs';
import lintSource from './lintSource.mjs';

/** @import {Config as StylelintConfig, PostcssPluginOptions} from 'stylelint' */

/**
 * @type {import('postcss').PluginCreator<PostcssPluginOptions>}
 */
export default function postcssPlugin(options = {}) {
	const [cwd, tailoredOptions] = isConfig(options)
		? [process.cwd(), { config: options }]
		: [('cwd' in options && isString(options.cwd) && options.cwd) || process.cwd(), options];
	const stylelint = createStylelint(tailoredOptions);

	return {
		postcssPlugin: 'stylelint',

		/**
		 * @param {import('postcss').Root} root
		 * @param {import('postcss').Helpers} helpers
		 * @returns {Promise<void>}
		 */
		async Once(root, { result }) {
			let filePath = root.source && root.source.input.file;

			if (filePath && !isAbsolute(filePath)) {
				filePath = join(cwd, filePath);
			}

			await lintSource(stylelint, {
				filePath,
				existingPostcssResult: result,
			});
		},
	};
}

postcssPlugin.postcss = true;

/**
 * @param {PostcssPluginOptions} options
 * @returns {options is StylelintConfig}
 */
function isConfig(options) {
	return 'rules' in options;
}

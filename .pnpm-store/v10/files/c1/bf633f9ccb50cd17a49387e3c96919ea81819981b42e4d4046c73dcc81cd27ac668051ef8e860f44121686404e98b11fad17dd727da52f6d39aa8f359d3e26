import { readFile } from 'node:fs/promises';

import postcss from 'postcss';

import dynamicImport from './utils/dynamicImport.mjs';
import getModulePath from './utils/getModulePath.mjs';
import normalizeFixMode from './utils/normalizeFixMode.mjs';

/** @import {Result, Syntax} from 'postcss' */
/** @import {CustomSyntax, GetPostcssOptions, InternalApi as StylelintInternalApi} from 'stylelint' */

const postcssProcessor = postcss();

/**
 * @param {StylelintInternalApi} stylelint
 * @param {GetPostcssOptions} options
 *
 * @returns {Promise<Result>}
 */
export default async function getPostcssResult(stylelint, { customSyntax, filePath, code } = {}) {
	const cached = filePath ? stylelint._postcssResultCache.get(filePath) : undefined;

	if (cached) {
		return cached;
	}

	const fix = normalizeFixMode(stylelint._options.fix);
	const syntax = await (customSyntax
		? getCustomSyntax(customSyntax, stylelint._options.configBasedir)
		: cssSyntax(fix === 'lax'));

	const postcssOptions = {
		from: filePath,
		syntax,
	};

	/** @type {string | undefined} */
	let getCode;

	if (code !== undefined) {
		getCode = code;
	} else if (filePath) {
		getCode = await readFile(filePath, 'utf8');
	}

	if (getCode === undefined) {
		throw new Error('code or filePath required');
	}

	const postcssResult = await postcssProcessor.process(getCode, postcssOptions).async();

	if (filePath) {
		stylelint._postcssResultCache.set(filePath, postcssResult);
	}

	return postcssResult;
}

/**
 * @param {CustomSyntax} customSyntax
 * @param {string | undefined} basedir
 * @returns {Promise<Syntax>}
 */
async function getCustomSyntax(customSyntax, basedir) {
	if (typeof customSyntax === 'string') {
		const customSyntaxLookup = basedir ? getModulePath(basedir, customSyntax) : customSyntax;

		let resolved;

		try {
			resolved = await dynamicImport(customSyntaxLookup);
			resolved = resolved.default ?? resolved;
		} catch (error) {
			if (
				error &&
				typeof error === 'object' &&
				'code' in error &&
				// TODO: Remove 'MODULE_NOT_FOUND' when we drop the CommonJS support.
				// See https://nodejs.org/api/errors.html#module_not_found
				(error.code === 'MODULE_NOT_FOUND' || error.code === 'ERR_MODULE_NOT_FOUND') &&
				'message' in error &&
				typeof error.message === 'string' &&
				error.message.includes(customSyntax)
			) {
				throw new Error(
					`Cannot resolve custom syntax module "${customSyntax}". Check that module "${customSyntax}" is available and spelled correctly.\n\nCaused by: ${error}`,
				);
			}

			throw error;
		}

		/*
		 * PostCSS allows for syntaxes that only contain a parser, however,
		 * it then expects the syntax to be set as the `parse` option.
		 */
		if (!resolved.parse) {
			resolved = {
				parse: resolved,
				stringify: postcss.stringify,
			};
		}

		return resolved;
	}

	if (typeof customSyntax === 'object' || typeof customSyntax === 'function') {
		if (typeof customSyntax.parse === 'function') {
			return { ...customSyntax };
		}

		throw new TypeError(
			'An object provided to the "customSyntax" option must have a "parse" property. Ensure the "parse" property exists and its value is a function.',
		);
	}

	throw new Error('Custom syntax must be a string or a Syntax object');
}

/**
 * @param {boolean} fix
 * @returns {Promise<Syntax>}
 */
async function cssSyntax(fix) {
	const parse = await (fix ? import('postcss-safe-parser').then((m) => m.default) : postcss.parse);

	return { parse, stringify: postcss.stringify };
}

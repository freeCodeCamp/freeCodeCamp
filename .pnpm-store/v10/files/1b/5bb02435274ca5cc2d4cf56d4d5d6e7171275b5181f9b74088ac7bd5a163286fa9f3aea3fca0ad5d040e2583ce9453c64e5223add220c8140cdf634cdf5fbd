/**
 * @fileoverview This file contains the types for the use-at-your-own-risk
 * entrypoint. It was initially extracted from the `@types/eslint` package.
 */

/*
 * MIT License
 * Copyright (c) Microsoft Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE
 */

import { ESLint, Rule } from "./index.js";

/** @deprecated */
export const builtinRules: Map<string, Rule.RuleModule>;

/** @deprecated */
export class FileEnumerator {
	constructor(params?: {
		cwd?: string;
		configArrayFactory?: any;
		extensions?: any;
		globInputPaths?: boolean;
		errorOnUnmatchedPattern?: boolean;
		ignore?: boolean;
	});
	isTargetPath(filePath: string, providedConfig?: any): boolean;
	iterateFiles(
		patternOrPatterns: string | string[],
	): IterableIterator<{ config: any; filePath: string; ignored: boolean }>;
}

export { /** @deprecated */ ESLint as FlatESLint };

/** @deprecated */
export class LegacyESLint {
	static configType: "eslintrc";

	static readonly version: string;

	static outputFixes(results: ESLint.LintResult[]): Promise<void>;

	static getErrorResults(results: ESLint.LintResult[]): ESLint.LintResult[];

	constructor(options?: ESLint.LegacyOptions);

	lintFiles(patterns: string | string[]): Promise<ESLint.LintResult[]>;

	lintText(
		code: string,
		options?: {
			filePath?: string | undefined;
			warnIgnored?: boolean | undefined;
		},
	): Promise<ESLint.LintResult[]>;

	getRulesMetaForResults(
		results: ESLint.LintResult[],
	): ESLint.LintResultData["rulesMeta"];

	hasFlag(flag: string): false;

	calculateConfigForFile(filePath: string): Promise<any>;

	isPathIgnored(filePath: string): Promise<boolean>;

	loadFormatter(nameOrPath?: string): Promise<ESLint.Formatter>;
}

/** @deprecated */
export function shouldUseFlatConfig(): Promise<boolean>;

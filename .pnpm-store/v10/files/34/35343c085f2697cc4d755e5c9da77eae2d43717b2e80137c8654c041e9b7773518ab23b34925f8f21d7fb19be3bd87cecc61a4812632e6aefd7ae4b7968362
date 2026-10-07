/**
 * @fileoverview This file contains the core types for ESLint. It was initially extracted
 * from the `@types/eslint__eslintrc` package.
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

import type { Linter } from "eslint";

/**
 * A compatibility class for working with configs.
 */
export class FlatCompat {
    constructor({
        baseDirectory,
        resolvePluginsRelativeTo,
        recommendedConfig,
        allConfig,
    }?: {
        /**
         * default: process.cwd()
         */
        baseDirectory?: string;
        resolvePluginsRelativeTo?: string;
        recommendedConfig?: Linter.LegacyConfig;
        allConfig?: Linter.LegacyConfig;
    });

    /**
     * Translates an ESLintRC-style config into a flag-config-style config.
     * @param eslintrcConfig The ESLintRC-style config object.
     * @returns A flag-config-style config object.
     */
    config(eslintrcConfig: Linter.LegacyConfig): Linter.Config[];

    /**
     * Translates the `env` section of an ESLintRC-style config.
     * @param envConfig The `env` section of an ESLintRC config.
     * @returns An array of flag-config objects representing the environments.
     */
    env(envConfig: { [name: string]: boolean }): Linter.Config[];

    /**
     * Translates the `extends` section of an ESLintRC-style config.
     * @param configsToExtend The names of the configs to load.
     * @returns An array of flag-config objects representing the config.
     */
    extends(...configsToExtend: string[]): Linter.Config[];

    /**
     * Translates the `plugins` section of an ESLintRC-style config.
     * @param plugins The names of the plugins to load.
     * @returns An array of flag-config objects representing the plugins.
     */
    plugins(...plugins: string[]): Linter.Config[];
}

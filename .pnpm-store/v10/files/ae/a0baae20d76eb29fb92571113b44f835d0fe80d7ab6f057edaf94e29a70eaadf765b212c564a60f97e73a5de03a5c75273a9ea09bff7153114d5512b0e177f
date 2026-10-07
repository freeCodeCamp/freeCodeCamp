/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// AMD2ESM mirgation relevant

declare global {

	/**
	 * Holds the file root for resources.
	 */
	var _VSCODE_FILE_ROOT: string;

	/**
	 * CSS loader that's available during development time.
	 * DO NOT call directly, instead just import css modules, like `import 'some.css'`
	 */
	var _VSCODE_CSS_LOAD: (module: string) => void;

	/**
	 * @deprecated You MUST use `IProductService` whenever possible.
	 */
	var _VSCODE_PRODUCT_JSON: Record<string, any>;
	/**
	 * @deprecated You MUST use `IProductService` whenever possible.
	 */
	var _VSCODE_PACKAGE_JSON: Record<string, any>;

}

// fake export to make global work
export { }

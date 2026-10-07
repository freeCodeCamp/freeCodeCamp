/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare class LoaderEvent {
	readonly type: number;
	readonly timestamp: number;
	readonly detail: string;
}

declare const define: {
	(moduleName: string, dependencies: string[], callback: (...args: any[]) => any): any;
	(moduleName: string, dependencies: string[], definition: any): any;
	(moduleName: string, callback: (...args: any[]) => any): any;
	(moduleName: string, definition: any): any;
	(dependencies: string[], callback: (...args: any[]) => any): any;
	(dependencies: string[], definition: any): any;
};

interface NodeRequire {
	/**
	 * @deprecated use `FileAccess.asFileUri()` for node.js contexts or `FileAccess.asBrowserUri` for browser contexts.
	 */
	toUrl(path: string): string;

	/**
	 * @deprecated MUST not be used anymore
	 *
	 * With the move from AMD to ESM we cannot use this anymore. There will be NO MORE node require like this.
	 */
	__$__nodeRequire<T>(moduleName: string): T;

	(dependencies: string[], callback: (...args: any[]) => any, errorback?: (err: any) => void): any;
	config(data: any): any;
	onError: Function;
	getStats?(): ReadonlyArray<LoaderEvent>;
	hasDependencyCycle?(): boolean;
	define(amdModuleId: string, dependencies: string[], callback: (...args: any[]) => any): any;
}

declare var require: NodeRequire;

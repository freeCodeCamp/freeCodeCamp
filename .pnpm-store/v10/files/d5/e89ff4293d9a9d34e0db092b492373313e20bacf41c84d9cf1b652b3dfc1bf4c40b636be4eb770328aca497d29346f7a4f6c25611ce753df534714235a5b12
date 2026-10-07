/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export type CodeWindow = Window & typeof globalThis & {
	readonly vscodeWindowId: number;
};

export function ensureCodeWindow(targetWindow: Window, fallbackWindowId: number): asserts targetWindow is CodeWindow {
}

// eslint-disable-next-line no-restricted-globals
export const mainWindow = (typeof window === 'object' ? window : globalThis) as CodeWindow;

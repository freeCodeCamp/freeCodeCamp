/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License.
 *  REQUIREMENT: This definition is dependent on the @types/node definition.
 *  Install with `npm install @types/node --save-dev`
 *--------------------------------------------------------------------------------------------*/

declare module 'iconv-lite' {
	export function decode(buffer: NodeBuffer, encoding: string, options?: Options): string;

	export function encode(content: string, encoding: string, options?: Options): NodeBuffer;

	export function encodingExists(encoding: string): boolean;

	export function decodeStream(encoding: string, options?: Options): NodeJS.ReadWriteStream;

	export function encodeStream(encoding: string, options?: Options): NodeJS.ReadWriteStream;
}

export interface Options {
    stripBOM?: boolean;
    addBOM?: boolean;
    defaultEncoding?: string;
}

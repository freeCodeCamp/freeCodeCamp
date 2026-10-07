// Type definitions for mime 1.3
// Project: https://github.com/broofa/node-mime
// Definitions by: Jeff Goddard <https://github.com/jedigo>
//                 Daniel Hritzkiv <https://github.com/dhritzkiv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Originally imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts

export as namespace mime;

export interface TypeMap {
    [key: string]: string[];
}

/**
 * Look up a mime type based on extension.
 *
 * If not found, uses the fallback argument if provided, and otherwise
 * uses `default_type`.
 */
export function lookup(path: string, fallback?: string): string;
/**
 * Return a file extensions associated with a mime type.
 */
export function extension(mime: string): string | undefined;
/**
 * Load an Apache2-style ".types" file.
 */
export function load(filepath: string): void;
export function define(mimes: TypeMap): void;

export interface Charsets {
    lookup(mime: string, fallback: string): string;
}

export const charsets: Charsets;
export const default_type: string;

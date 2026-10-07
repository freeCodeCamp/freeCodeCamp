/**
Write (copy) to the clipboard asynchronously.

@param text - The text to write to the clipboard.
*/
export function write(text: string): Promise<void>;

/**
Write (copy) to the clipboard synchronously.

Doesn't work in browsers.

@param text - The text to write to the clipboard.

@example
```
import * as clipboardy from 'clipboardy';

clipboardy.writeSync('🦄');

clipboardy.readSync();
//=> '🦄'
```
*/
export function writeSync(text: string): void;

/**
Read (paste) from the clipboard asynchronously.
*/
export function read(): Promise<string>;

/**
Read (paste) from the clipboard synchronously.

Doesn't work in browsers.
*/
export function readSync(): string;

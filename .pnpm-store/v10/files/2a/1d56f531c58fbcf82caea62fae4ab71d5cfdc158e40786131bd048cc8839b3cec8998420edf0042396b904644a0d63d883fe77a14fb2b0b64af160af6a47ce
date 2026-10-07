/// <reference types="node"/>
import {Readable as ReadableStream} from 'stream';
import * as core from './core';

export type ReadableStreamWithFileType = core.ReadableStreamWithFileType;
export type FileTypeResult = core.FileTypeResult;
export type FileExtension = core.FileExtension;
export type MimeType = core.MimeType;

/**
Detect the file type of a file path.

The file type is detected by checking the [magic number](https://en.wikipedia.org/wiki/Magic_number_(programming)#Magic_numbers_in_files) of the buffer.

@param path - The file path to parse.
@returns The detected file type and MIME type or `undefined` when there is no match.
*/
export function fromFile(path: string): Promise<core.FileTypeResult | undefined>;

export {
	fromBuffer,
	fromStream,
	fromTokenizer,
	extensions,
	mimeTypes,
	stream
} from './core';

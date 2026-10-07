/// <reference lib="dom"/>
import * as core from './core';

export type FileTypeResult = core.FileTypeResult;
export type FileExtension = core.FileExtension;
export type MimeType = core.MimeType;

/**
Determine file type from a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream).

```
import FileType = require('file-type/browser');

const url = 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg';

(async () => {
	const response = await fetch(url);
	const fileType = await FileType.fromStream(response.body);

	console.log(fileType);
	//=> {ext: 'jpg', mime: 'image/jpeg'}
})();
```
*/
export declare function fromStream(stream: ReadableStream): Promise<core.FileTypeResult | undefined>;

/**
Determine file type from a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob).

```
import FileType = require('file-type/browser');

(async () => {
	const blob = new Blob(['<?xml version="1.0" encoding="ISO-8859-1" ?>'], {
		type: 'plain/text',
		endings: 'native'
	});

	console.log(await FileType.fromBlob(blob));
	//=> {ext: 'txt', mime: 'plain/text'}
})();
```
*/
export declare function fromBlob(blob: Blob): Promise<core.FileTypeResult | undefined>;

export {
	fromBuffer,
	extensions,
	mimeTypes
} from './core';

import {type Readable} from 'node:stream';
import {type Buffer} from 'node:buffer';

export class MaxBufferError extends Error {
	readonly name: 'MaxBufferError';
	constructor();
}

type TextStreamItem = string | Buffer | ArrayBuffer | ArrayBufferView;
export type AnyStream<SteamItem = TextStreamItem> = Readable | ReadableStream<SteamItem> | AsyncIterable<SteamItem>;

export type Options = {
	/**
	Maximum length of the stream. If exceeded, the promise will be rejected with a `MaxBufferError`.

	Depending on the [method](#api), the length is measured with [`string.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), [`buffer.length`](https://nodejs.org/api/buffer.html#buflength), [`arrayBuffer.byteLength`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength) or [`array.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length).

	@default Infinity
	*/
	readonly maxBuffer?: number;
};

/**
Get the given `stream` as a string.

@returns The stream's contents as a promise.

@example
```
import fs from 'node:fs';
import getStream from 'get-stream';

const stream = fs.createReadStream('unicorn.txt');

console.log(await getStream(stream));
//               ,,))))))));,
//            __)))))))))))))),
// \|/       -\(((((''''((((((((.
// -*-==//////((''  .     `)))))),
// /|\      ))| o    ;-.    '(((((                                  ,(,
//          ( `|    /  )    ;))))'                               ,_))^;(~
//             |   |   |   ,))((((_     _____------~~~-.        %,;(;(>';'~
//             o_);   ;    )))(((` ~---~  `::           \      %%~~)(v;(`('~
//                   ;    ''''````         `:       `:::|\,__,%%    );`'; ~
//                  |   _                )     /      `:|`----'     `-'
//            ______/\/~    |                 /        /
//          /~;;.____/;;'  /          ___--,-(   `;;;/
//         / //  _;______;'------~~~~~    /;;/\    /
//        //  | |                        / ;   \;;,\
//       (<_  | ;                      /',/-----'  _>
//        \_| ||_                     //~;~~~~~~~~~
//            `\_|                   (,~~
//                                    \~\
//                                     ~~
```

@example
```
import getStream from 'get-stream';

const {body: readableStream} = await fetch('https://example.com');
console.log(await getStream(readableStream));
```

@example
```
import {opendir} from 'node:fs/promises';
import {getStreamAsArray} from 'get-stream';

const asyncIterable = await opendir(directory);
console.log(await getStreamAsArray(asyncIterable));
```
*/
export default function getStream(stream: AnyStream, options?: Options): Promise<string>;

/**
Get the given `stream` as a Node.js [`Buffer`](https://nodejs.org/api/buffer.html#class-buffer).

@returns The stream's contents as a promise.

@example
```
import {getStreamAsBuffer} from 'get-stream';

const stream = fs.createReadStream('unicorn.png');
console.log(await getStreamAsBuffer(stream));
```
*/
export function getStreamAsBuffer(stream: AnyStream, options?: Options): Promise<Buffer>;

/**
Get the given `stream` as an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

@returns The stream's contents as a promise.

@example
```
import {getStreamAsArrayBuffer} from 'get-stream';

const {body: readableStream} = await fetch('https://example.com');
console.log(await getStreamAsArrayBuffer(readableStream));
```
*/
export function getStreamAsArrayBuffer(stream: AnyStream, options?: Options): Promise<ArrayBuffer>;

/**
Get the given `stream` as an array. Unlike [other methods](#api), this supports [streams of objects](https://nodejs.org/api/stream.html#object-mode).

@returns The stream's contents as a promise.

@example
```
import {getStreamAsArray} from 'get-stream';

const {body: readableStream} = await fetch('https://example.com');
console.log(await getStreamAsArray(readableStream));
```
*/
export function getStreamAsArray<Item>(stream: AnyStream<Item>, options?: Options): Promise<Item[]>;

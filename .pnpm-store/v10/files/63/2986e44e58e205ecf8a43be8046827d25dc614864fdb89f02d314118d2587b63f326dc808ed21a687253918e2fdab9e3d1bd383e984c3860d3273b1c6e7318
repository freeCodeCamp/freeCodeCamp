/// <reference types="node"/>
import {Stream} from 'stream';

declare class MaxBufferErrorClass extends Error {
	readonly name: 'MaxBufferError';
	constructor();
}

declare namespace getStream {
	interface Options {
		/**
		Maximum length of the returned string. If it exceeds this value before the stream ends, the promise will be rejected with a `MaxBufferError` error.

		@default Infinity
		*/
		readonly maxBuffer?: number;
	}

	interface OptionsWithEncoding<EncodingType = BufferEncoding> extends Options {
		/**
		[Encoding](https://nodejs.org/api/buffer.html#buffer_buffer) of the incoming stream.

		@default 'utf8'
		*/
		readonly encoding?: EncodingType;
	}

	type MaxBufferError = MaxBufferErrorClass;
}

declare const getStream: {
	/**
	Get the `stream` as a string.

	@returns A promise that resolves when the end event fires on the stream, indicating that there is no more data to be read. The stream is switched to flowing mode.

	@example
	```
	import * as fs from 'fs';
	import getStream = require('get-stream');

	(async () => {
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
	})();
	```
	*/
	(stream: Stream, options?: getStream.OptionsWithEncoding): Promise<string>;

	/**
	Get the `stream` as a buffer.

	It honors the `maxBuffer` option as above, but it refers to byte length rather than string length.
	*/
	buffer(
		stream: Stream,
		options?: getStream.OptionsWithEncoding
	): Promise<Buffer>;

	/**
	Get the `stream` as an array of values.

	It honors both the `maxBuffer` and `encoding` options. The behavior changes slightly based on the encoding chosen:

	- When `encoding` is unset, it assumes an [object mode stream](https://nodesource.com/blog/understanding-object-streams/) and collects values emitted from `stream` unmodified. In this case `maxBuffer` refers to the number of items in the array (not the sum of their sizes).
	- When `encoding` is set to `buffer`, it collects an array of buffers. `maxBuffer` refers to the summed byte lengths of every buffer in the array.
	- When `encoding` is set to anything else, it collects an array of strings. `maxBuffer` refers to the summed character lengths of every string in the array.
	*/
	array<StreamObjectModeType>(
		stream: Stream,
		options?: getStream.Options
	): Promise<StreamObjectModeType[]>;
	array(
		stream: Stream,
		options: getStream.OptionsWithEncoding<'buffer'>
	): Promise<Buffer[]>;
	array(
		stream: Stream,
		options: getStream.OptionsWithEncoding<BufferEncoding>
	): Promise<string[]>;

	MaxBufferError: typeof MaxBufferErrorClass;

	// TODO: Remove this for the next major release
	default: typeof getStream;
};

export = getStream;

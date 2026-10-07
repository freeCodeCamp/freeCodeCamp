import * as stream from 'stream';

declare const isStream: {
	/**
	@returns Whether `stream` is a [`Stream`](https://nodejs.org/api/stream.html#stream_stream).

	@example
	```
	import * as fs from 'fs';
	import isStream = require('is-stream');

	isStream(fs.createReadStream('unicorn.png'));
	//=> true

	isStream({});
	//=> false
	```
	*/
	(stream: unknown): stream is stream.Stream;

	/**
	@returns Whether `stream` is a [`stream.Writable`](https://nodejs.org/api/stream.html#stream_class_stream_writable).

	@example
	```
	import * as fs from 'fs';
	import isStream = require('is-stream');

	isStream.writable(fs.createWriteStrem('unicorn.txt'));
	//=> true
	```
	*/
	writable(stream: unknown): stream is stream.Writable;

	/**
	@returns Whether `stream` is a [`stream.Readable`](https://nodejs.org/api/stream.html#stream_class_stream_readable).

	@example
	```
	import * as fs from 'fs';
	import isStream = require('is-stream');

	isStream.readable(fs.createReadStream('unicorn.png'));
	//=> true
	```
	*/
	readable(stream: unknown): stream is stream.Readable;

	/**
	@returns Whether `stream` is a [`stream.Duplex`](https://nodejs.org/api/stream.html#stream_class_stream_duplex).

	@example
	```
	import {Duplex} from 'stream';
	import isStream = require('is-stream');

	isStream.duplex(new Duplex());
	//=> true
	```
	*/
	duplex(stream: unknown): stream is stream.Duplex;

	/**
	@returns Whether `stream` is a [`stream.Transform`](https://nodejs.org/api/stream.html#stream_class_stream_transform).

	@example
	```
	import * as fs from 'fs';
	import Stringify = require('streaming-json-stringify');
	import isStream = require('is-stream');

	isStream.transform(Stringify());
	//=> true
	```
	*/
	transform(input: unknown): input is stream.Transform;
};

export = isStream;

/// <reference types="node"/>
import {LiteralUnion} from 'type-fest';
import {Hash} from 'crypto';

declare namespace hasha {
	type ToStringEncoding = 'hex' | 'base64' | 'latin1';
	type HashaInput = Buffer | string | Array<Buffer | string>;
	type HashaEncoding = ToStringEncoding | 'buffer';

	type AlgorithmName = LiteralUnion<
		'md5' | 'sha1' | 'sha256' | 'sha512',
		string
	>;

	interface Options<EncodingType = HashaEncoding> {
		/**
		Encoding of the returned hash.

		@default 'hex'
		*/
		readonly encoding?: EncodingType;

		/**
		Values: `md5` `sha1` `sha256` `sha512` _([Platform dependent](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options))_

		_The `md5` algorithm is good for [file revving](https://github.com/sindresorhus/rev-hash), but you should never use `md5` or `sha1` for anything sensitive. [They're insecure.](https://security.googleblog.com/2014/09/gradually-sunsetting-sha-1.html)_

		@default 'sha512'
		*/
		readonly algorithm?: AlgorithmName;
	}
}

declare const hasha: {
	/**
	Calculate the hash for a `string`, `Buffer`, or an array thereof.

	@param input - Data you want to hash.

	While strings are supported you should prefer buffers as they're faster to hash. Although if you already have a string you should not convert it to a buffer.

	Pass an array instead of concatenating strings and/or buffers. The output is the same, but arrays do not incur the overhead of concatenation.

	@returns A hash.

	@example
	```
	import hasha = require('hasha');

	hasha('unicorn');
	//=> 'e233b19aabc7d5e53826fb734d1222f1f0444c3a3fc67ff4af370a66e7cadd2cb24009f1bc86f0bed12ca5fcb226145ad10fc5f650f6ef0959f8aadc5a594b27'
	```
	*/
	(input: hasha.HashaInput): string;
	(
		input: hasha.HashaInput,
		options: hasha.Options<hasha.ToStringEncoding>
	): string;
	(input: hasha.HashaInput, options: hasha.Options<'buffer'>): Buffer;

	/**
	Asynchronously calculate the hash for a `string`, `Buffer`, or an array thereof.

	In Node.js 12 or later, the operation is executed using `worker_threads`. A thread is lazily spawned on the first operation and lives until the end of the program execution. It's unrefed, so it won't keep the process alive.

	@param input - Data you want to hash.

	While strings are supported you should prefer buffers as they're faster to hash. Although if you already have a string you should not convert it to a buffer.

	Pass an array instead of concatenating strings and/or buffers. The output is the same, but arrays do not incur the overhead of concatenation.

	@returns A hash.

	@example
	```
	import hasha = require('hasha');

	(async () => {
		console.log(await hasha.async('unicorn'));
		//=> 'e233b19aabc7d5e53826fb734d1222f1f0444c3a3fc67ff4af370a66e7cadd2cb24009f1bc86f0bed12ca5fcb226145ad10fc5f650f6ef0959f8aadc5a594b27'
	})();
	```
	*/
	async(input: hasha.HashaInput): Promise<string>;
	async(
		input: hasha.HashaInput,
		options: hasha.Options<hasha.ToStringEncoding>
	): Promise<string>;
	async(input: hasha.HashaInput, options: hasha.Options<'buffer'>): Promise<Buffer>;

	/**
	Create a [hash transform stream](https://nodejs.org/api/crypto.html#crypto_class_hash).

	@returns The created hash transform stream.

	@example
	```
	import hasha = require('hasha');

	// Hash the process input and output the hash sum
	process.stdin.pipe(hasha.stream()).pipe(process.stdout);
	```
	*/
	stream(options?: hasha.Options<hasha.HashaEncoding>): Hash;

	/**
	Calculate the hash for a stream.

	@param stream - A stream you want to hash.
	@returns The calculated hash.
	*/
	fromStream(stream: NodeJS.ReadableStream): Promise<string>;
	fromStream(
		stream: NodeJS.ReadableStream,
		options?: hasha.Options<hasha.ToStringEncoding>
	): Promise<string>;
	fromStream(
		stream: NodeJS.ReadableStream,
		options?: hasha.Options<'buffer'>
	): Promise<Buffer>;

	/**
	Calculate the hash for a file.

	In Node.js 12 or later, the operation is executed using `worker_threads`. A thread is lazily spawned on the first operation and lives until the end of the program execution. It's unrefed, so it won't keep the process alive.

	@param filePath - Path to a file you want to hash.
	@returns The calculated file hash.

	@example
	```
	import hasha = require('hasha');

	(async () => {
		// Get the MD5 hash of an image
		const hash = await hasha.fromFile('unicorn.png', {algorithm: 'md5'});

		console.log(hash);
		//=> '1abcb33beeb811dca15f0ac3e47b88d9'
	})();
	```
	*/
	fromFile(filePath: string): Promise<string>;
	fromFile(
		filePath: string,
		options: hasha.Options<hasha.ToStringEncoding>
	): Promise<string>;
	fromFile(
		filePath: string,
		options: hasha.Options<'buffer'>
	): Promise<Buffer>;

	/**
	Synchronously calculate the hash for a file.

	@param filePath - Path to a file you want to hash.
	@returns The calculated file hash.
	*/
	fromFileSync(filePath: string): string;
	fromFileSync(
		filePath: string,
		options: hasha.Options<hasha.ToStringEncoding>
	): string;
	fromFileSync(filePath: string, options: hasha.Options<'buffer'>): Buffer;
};

export = hasha;

/// <reference types="node"/>
import * as stream from 'stream';
import {ZlibOptions} from 'zlib';

declare namespace gzipSize {
	type Options = ZlibOptions;

	interface GzipSizeStream extends stream.PassThrough {
		/**
		Contains the gzip size of the stream after it is finished. Since this happens asynchronously, it is recommended you use the `gzip-size` event instead.
		*/
		gzipSize?: number;

		addListener(event: 'gzip-size', listener: (size: number) => void): this;
		addListener(
			event: string | symbol,
			listener: (...args: any[]) => void
		): this;
		on(event: 'gzip-size', listener: (size: number) => void): this;
		on(event: string | symbol, listener: (...args: any[]) => void): this;
		once(event: 'gzip-size', listener: (size: number) => void): this;
		once(event: string | symbol, listener: (...args: any[]) => void): this;
		removeListener(event: 'gzip-size', listener: (size: number) => void): this;
		removeListener(
			event: string | symbol,
			listener: (...args: any[]) => void
		): this;
		off(event: 'gzip-size', listener: (size: number) => void): this;
		off(event: string | symbol, listener: (...args: any[]) => void): this;
		emit(event: 'gzip-size', size: number): boolean;
		emit(event: string | symbol, ...args: any[]): boolean;
		prependListener(event: 'gzip-size', listener: (size: number) => void): this;
		prependListener(
			event: string | symbol,
			listener: (...args: any[]) => void
		): this;
		prependOnceListener(
			event: 'gzip-size',
			listener: (size: number) => void
		): this;
		prependOnceListener(
			event: string | symbol,
			listener: (...args: any[]) => void
		): this;
	}
}

declare const gzipSize: {
	/**
	Get the gzipped size of a string or buffer.

	@returns The gzipped size of `input`.
	*/
	(input: string | Buffer, options?: gzipSize.Options): Promise<number>;

	/**
	Synchronously get the gzipped size of a string or buffer.

	@returns The gzipped size of `input`.

	@example
	```
	import gzipSize = require('gzip-size');

	const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

	console.log(text.length);
	//=> 191

	console.log(gzipSize.sync(text));
	//=> 78
	```
	*/
	sync(input: string | Buffer, options?: gzipSize.Options): number;

	/**
	@returns A stream that emits a `gzip-size` event and has a `gzipSize` property.
	*/
	stream(options?: gzipSize.Options): gzipSize.GzipSizeStream;

	/**
	Get the gzipped size of a file.

	@returns The size of the file.
	*/
	file(path: string, options?: gzipSize.Options): Promise<number>;

	/**
	Synchronously get the gzipped size of a file.

	@returns The size of the file.
	*/
	fileSync(path: string, options?: gzipSize.Options): number;
};

export = gzipSize;

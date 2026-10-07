/// <reference types="node"/>
import {Readable as ReadableStream} from 'stream';
import {ITokenizer} from 'strtok3/lib/core';

declare namespace core {
	type FileExtension =
		| 'jpg'
		| 'png'
		| 'apng'
		| 'gif'
		| 'webp'
		| 'flif'
		| 'xcf'
		| 'cr2'
		| 'cr3'
		| 'orf'
		| 'arw'
		| 'dng'
		| 'nef'
		| 'rw2'
		| 'raf'
		| 'tif'
		| 'bmp'
		| 'icns'
		| 'jxr'
		| 'psd'
		| 'indd'
		| 'zip'
		| 'tar'
		| 'rar'
		| 'gz'
		| 'bz2'
		| '7z'
		| 'dmg'
		| 'mp4'
		| 'mid'
		| 'mkv'
		| 'webm'
		| 'mov'
		| 'avi'
		| 'mpg'
		| 'mp2'
		| 'mp3'
		| 'm4a'
		| 'ogg'
		| 'opus'
		| 'flac'
		| 'wav'
		| 'qcp'
		| 'amr'
		| 'pdf'
		| 'epub'
		| 'mobi'
		| 'exe'
		| 'swf'
		| 'rtf'
		| 'woff'
		| 'woff2'
		| 'eot'
		| 'ttf'
		| 'otf'
		| 'ico'
		| 'flv'
		| 'ps'
		| 'xz'
		| 'sqlite'
		| 'nes'
		| 'crx'
		| 'xpi'
		| 'cab'
		| 'deb'
		| 'ar'
		| 'rpm'
		| 'Z'
		| 'lz'
		| 'cfb'
		| 'mxf'
		| 'mts'
		| 'wasm'
		| 'blend'
		| 'bpg'
		| 'docx'
		| 'pptx'
		| 'xlsx'
		| '3gp'
		| '3g2'
		| 'jp2'
		| 'jpm'
		| 'jpx'
		| 'mj2'
		| 'aif'
		| 'odt'
		| 'ods'
		| 'odp'
		| 'xml'
		| 'heic'
		| 'cur'
		| 'ktx'
		| 'ape'
		| 'wv'
		| 'asf'
		| 'dcm'
		| 'mpc'
		| 'ics'
		| 'glb'
		| 'pcap'
		| 'dsf'
		| 'lnk'
		| 'alias'
		| 'voc'
		| 'ac3'
		| 'm4b'
		| 'm4p'
		| 'm4v'
		| 'f4a'
		| 'f4b'
		| 'f4p'
		| 'f4v'
		| 'mie'
		| 'ogv'
		| 'ogm'
		| 'oga'
		| 'spx'
		| 'ogx'
		| 'arrow'
		| 'shp'
		| 'aac'
		| 'mp1'
		| 'it'
		| 's3m'
		| 'xm'
		| 'ai'
		| 'skp'
		| 'avif'
		| 'eps'
		| 'lzh'
		| 'pgp'
		| 'asar'
		| 'stl'
		| 'chm'
		| '3mf'
		| 'zst'
		| 'jxl'
		| 'vcf';

	type MimeType =
		| 'image/jpeg'
		| 'image/png'
		| 'image/gif'
		| 'image/webp'
		| 'image/flif'
		| 'image/x-xcf'
		| 'image/x-canon-cr2'
		| 'image/x-canon-cr3'
		| 'image/tiff'
		| 'image/bmp'
		| 'image/icns'
		| 'image/vnd.ms-photo'
		| 'image/vnd.adobe.photoshop'
		| 'application/x-indesign'
		| 'application/epub+zip'
		| 'application/x-xpinstall'
		| 'application/vnd.oasis.opendocument.text'
		| 'application/vnd.oasis.opendocument.spreadsheet'
		| 'application/vnd.oasis.opendocument.presentation'
		| 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
		| 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
		| 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		| 'application/zip'
		| 'application/x-tar'
		| 'application/x-rar-compressed'
		| 'application/gzip'
		| 'application/x-bzip2'
		| 'application/x-7z-compressed'
		| 'application/x-apple-diskimage'
		| 'video/mp4'
		| 'audio/midi'
		| 'video/x-matroska'
		| 'video/webm'
		| 'video/quicktime'
		| 'video/vnd.avi'
		| 'audio/vnd.wave'
		| 'audio/qcelp'
		| 'audio/x-ms-asf'
		| 'video/x-ms-asf'
		| 'application/vnd.ms-asf'
		| 'video/mpeg'
		| 'video/3gpp'
		| 'audio/mpeg'
		| 'audio/mp4' // RFC 4337
		| 'audio/opus'
		| 'video/ogg'
		| 'audio/ogg'
		| 'application/ogg'
		| 'audio/x-flac'
		| 'audio/ape'
		| 'audio/wavpack'
		| 'audio/amr'
		| 'application/pdf'
		| 'application/x-msdownload'
		| 'application/x-shockwave-flash'
		| 'application/rtf'
		| 'application/wasm'
		| 'font/woff'
		| 'font/woff2'
		| 'application/vnd.ms-fontobject'
		| 'font/ttf'
		| 'font/otf'
		| 'image/x-icon'
		| 'video/x-flv'
		| 'application/postscript'
		| 'application/eps'
		| 'application/x-xz'
		| 'application/x-sqlite3'
		| 'application/x-nintendo-nes-rom'
		| 'application/x-google-chrome-extension'
		| 'application/vnd.ms-cab-compressed'
		| 'application/x-deb'
		| 'application/x-unix-archive'
		| 'application/x-rpm'
		| 'application/x-compress'
		| 'application/x-lzip'
		| 'application/x-cfb'
		| 'application/x-mie'
		| 'application/x-apache-arrow'
		| 'application/mxf'
		| 'video/mp2t'
		| 'application/x-blender'
		| 'image/bpg'
		| 'image/jp2'
		| 'image/jpx'
		| 'image/jpm'
		| 'image/mj2'
		| 'audio/aiff'
		| 'application/xml'
		| 'application/x-mobipocket-ebook'
		| 'image/heif'
		| 'image/heif-sequence'
		| 'image/heic'
		| 'image/heic-sequence'
		| 'image/ktx'
		| 'application/dicom'
		| 'audio/x-musepack'
		| 'text/calendar'
		| 'text/vcard'
		| 'model/gltf-binary'
		| 'application/vnd.tcpdump.pcap'
		| 'audio/x-dsf' // Non-standard
		| 'application/x.ms.shortcut' // Invented by us
		| 'application/x.apple.alias' // Invented by us
		| 'audio/x-voc'
		| 'audio/vnd.dolby.dd-raw'
		| 'audio/x-m4a'
		| 'image/apng'
		| 'image/x-olympus-orf'
		| 'image/x-sony-arw'
		| 'image/x-adobe-dng'
		| 'image/x-nikon-nef'
		| 'image/x-panasonic-rw2'
		| 'image/x-fujifilm-raf'
		| 'video/x-m4v'
		| 'video/3gpp2'
		| 'application/x-esri-shape'
		| 'audio/aac'
		| 'audio/x-it'
		| 'audio/x-s3m'
		| 'audio/x-xm'
		| 'video/MP1S'
		| 'video/MP2P'
		| 'application/vnd.sketchup.skp'
		| 'image/avif'
		| 'application/x-lzh-compressed'
		| 'application/pgp-encrypted'
		| 'application/x-asar'
		| 'model/stl'
		| 'application/vnd.ms-htmlhelp'
		| 'model/3mf'
		| 'image/jxl'
		| 'application/zstd';

	interface FileTypeResult {
		/**
		One of the supported [file types](https://github.com/sindresorhus/file-type#supported-file-types).
		*/
		readonly ext: FileExtension;

		/**
		The detected [MIME type](https://en.wikipedia.org/wiki/Internet_media_type).
		*/
		readonly mime: MimeType;
	}

	type ReadableStreamWithFileType = ReadableStream & {
		readonly fileType?: FileTypeResult;
	};

	/**
	Detect the file type of a `Buffer`, `Uint8Array`, or `ArrayBuffer`.

	The file type is detected by checking the [magic number](https://en.wikipedia.org/wiki/Magic_number_(programming)#Magic_numbers_in_files) of the buffer.

	If file access is available, it is recommended to use `.fromFile()` instead.

	@param buffer - A buffer representing file data. It works best if the buffer contains the entire file, it may work with a smaller portion as well.
	@returns The detected file type and MIME type, or `undefined` when there is no match.
	*/
	function fromBuffer(buffer: Buffer | Uint8Array | ArrayBuffer): Promise<core.FileTypeResult | undefined>;

	/**
	Detect the file type of a Node.js [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable).

	The file type is detected by checking the [magic number](https://en.wikipedia.org/wiki/Magic_number_(programming)#Magic_numbers_in_files) of the buffer.

	@param stream - A readable stream representing file data.
	@returns The detected file type and MIME type, or `undefined` when there is no match.
	*/
	function fromStream(stream: ReadableStream): Promise<core.FileTypeResult | undefined>;

	/**
	Detect the file type from an [`ITokenizer`](https://github.com/Borewit/strtok3#tokenizer) source.

	This method is used internally, but can also be used for a special "tokenizer" reader.

	A tokenizer propagates the internal read functions, allowing alternative transport mechanisms, to access files, to be implemented and used.

	An example is [`@tokenizer/http`](https://github.com/Borewit/tokenizer-http), which requests data using [HTTP-range-requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests). A difference with a conventional stream and the [*tokenizer*](https://github.com/Borewit/strtok3#tokenizer), is that it is able to *ignore* (seek, fast-forward) in the stream. For example, you may only need and read the first 6 bytes, and the last 128 bytes, which may be an advantage in case reading the entire file would take longer.

	```
	import {makeTokenizer} = require('@tokenizer/http');
	import FileType = require('file-type');

	const audioTrackUrl = 'https://test-audio.netlify.com/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/01%20-%20Diablo%20Swing%20Orchestra%20-%20Heroines.mp3';

	(async () => {
		const httpTokenizer = await makeTokenizer(audioTrackUrl);
		const fileType = await FileType.fromTokenizer(httpTokenizer);

		console.log(fileType);
		//=> {ext: 'mp3', mime: 'audio/mpeg'}
	})();
	```

	@param tokenizer - File source implementing the tokenizer interface.
	@returns The detected file type and MIME type, or `undefined` when there is no match.
	*/
	function fromTokenizer(tokenizer: ITokenizer): Promise<core.FileTypeResult | undefined>;

	/**
	Supported file extensions.
	*/
	const extensions: Set<core.FileExtension>;

	/**
	Supported MIME types.
	*/
	const mimeTypes: Set<core.MimeType>;

	/**
	Detect the file type of a readable stream.

	@param readableStream - A [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) containing a file to examine.
	@returns A `Promise` which resolves to the original readable stream argument, but with an added `fileType` property, which is an object like the one returned from `FileType.fromFile()`.

	@example
	```
	import * as fs from 'fs';
	import * as crypto from 'crypto';
	import fileType = require('file-type');

	(async () => {
		const read = fs.createReadStream('encrypted.enc');
		const decipher = crypto.createDecipheriv(alg, key, iv);
		const stream = await fileType.stream(read.pipe(decipher));

		console.log(stream.fileType);
		//=> {ext: 'mov', mime: 'video/quicktime'}

		const write = fs.createWriteStream(`decrypted.${stream.fileType.ext}`);
		stream.pipe(write);
	})();
	```
	*/
	function stream(readableStream: ReadableStream): Promise<core.ReadableStreamWithFileType>
}

export = core;

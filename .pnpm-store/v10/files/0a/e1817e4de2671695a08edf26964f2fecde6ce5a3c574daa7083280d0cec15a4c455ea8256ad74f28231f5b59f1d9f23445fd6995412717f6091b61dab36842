# Description

A node.js module for parsing incoming HTML form data.

Changes (breaking or otherwise) in v1.0.0 can be found [here](https://github.com/mscdex/busboy/issues/266).

# Requirements

* [node.js](http://nodejs.org/) -- v10.16.0 or newer


# Install

    npm install busboy


# Examples

* Parsing (multipart) with default options:

```js
const http = require('http');

const busboy = require('busboy');

http.createServer((req, res) => {
  if (req.method === 'POST') {
    console.log('POST request');
    const bb = busboy({ headers: req.headers });
    bb.on('file', (name, file, info) => {
      const { filename, encoding, mimeType } = info;
      console.log(
        `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
        filename,
        encoding,
        mimeType
      );
      file.on('data', (data) => {
        console.log(`File [${name}] got ${data.length} bytes`);
      }).on('close', () => {
        console.log(`File [${name}] done`);
      });
    });
    bb.on('field', (name, val, info) => {
      console.log(`Field [${name}]: value: %j`, val);
    });
    bb.on('close', () => {
      console.log('Done parsing form!');
      res.writeHead(303, { Connection: 'close', Location: '/' });
      res.end();
    });
    req.pipe(bb);
  } else if (req.method === 'GET') {
    res.writeHead(200, { Connection: 'close' });
    res.end(`
      <html>
        <head></head>
        <body>
          <form method="POST" enctype="multipart/form-data">
            <input type="file" name="filefield"><br />
            <input type="text" name="textfield"><br />
            <input type="submit">
          </form>
        </body>
      </html>
    `);
  }
}).listen(8000, () => {
  console.log('Listening for requests');
});

// Example output:
//
// Listening for requests
//   < ... form submitted ... >
// POST request
// File [filefield]: filename: "logo.jpg", encoding: "binary", mime: "image/jpeg"
// File [filefield] got 11912 bytes
// Field [textfield]: value: "testing! :-)"
// File [filefield] done
// Done parsing form!
```

* Save all incoming files to disk:

```js
const { randomFillSync } = require('crypto');
const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');

const busboy = require('busboy');

const random = (() => {
  const buf = Buffer.alloc(16);
  return () => randomFillSync(buf).toString('hex');
})();

http.createServer((req, res) => {
  if (req.method === 'POST') {
    const bb = busboy({ headers: req.headers });
    bb.on('file', (name, file, info) => {
      const saveTo = path.join(os.tmpdir(), `busboy-upload-${random()}`);
      file.pipe(fs.createWriteStream(saveTo));
    });
    bb.on('close', () => {
      res.writeHead(200, { 'Connection': 'close' });
      res.end(`That's all folks!`);
    });
    req.pipe(bb);
    return;
  }
  res.writeHead(404);
  res.end();
}).listen(8000, () => {
  console.log('Listening for requests');
});
```


# API

## Exports

`busboy` exports a single function:

**( _function_ )**(< _object_ >config) - Creates and returns a new _Writable_ form parser stream.

* Valid `config` properties:

    * **headers** - _object_ - These are the HTTP headers of the incoming request, which are used by individual parsers.

    * **highWaterMark** - _integer_ - highWaterMark to use for the parser stream. **Default:** node's _stream.Writable_ default.

    * **fileHwm** - _integer_ - highWaterMark to use for individual file streams. **Default:** node's _stream.Readable_ default.

    * **defCharset** - _string_ - Default character set to use when one isn't defined. **Default:** `'utf8'`.

    * **defParamCharset** - _string_ - For multipart forms, the default character set to use for values of part header parameters (e.g. filename) that are not extended parameters (that contain an explicit charset). **Default:** `'latin1'`.

    * **preservePath** - _boolean_ - If paths in filenames from file parts in a `'multipart/form-data'` request shall be preserved. **Default:** `false`.

    * **limits** - _object_ - Various limits on incoming data. Valid properties are:

        * **fieldNameSize** - _integer_ - Max field name size (in bytes). **Default:** `100`.

        * **fieldSize** - _integer_ - Max field value size (in bytes). **Default:** `1048576` (1MB).

        * **fields** - _integer_ - Max number of non-file fields. **Default:** `Infinity`.

        * **fileSize** - _integer_ - For multipart forms, the max file size (in bytes). **Default:** `Infinity`.

        * **files** - _integer_ - For multipart forms, the max number of file fields. **Default:** `Infinity`.

        * **parts** - _integer_ - For multipart forms, the max number of parts (fields + files). **Default:** `Infinity`.

        * **headerPairs** - _integer_ - For multipart forms, the max number of header key-value pairs to parse. **Default:** `2000` (same as node's http module).

This function can throw exceptions if there is something wrong with the values in `config`. For example, if the Content-Type in `headers` is missing entirely, is not a supported type, or is missing the boundary for `'multipart/form-data'` requests.

## (Special) Parser stream events

* **file**(< _string_ >name, < _Readable_ >stream, < _object_ >info) - Emitted for each new file found. `name` contains the form field name. `stream` is a _Readable_ stream containing the file's data. No transformations/conversions (e.g. base64 to raw binary) are done on the file's data. `info` contains the following properties:

    * `filename` - _string_ - If supplied, this contains the file's filename. **WARNING:** You should almost _never_ use this value as-is (especially if you are using `preservePath: true` in your `config`) as it could contain malicious input. You are better off generating your own (safe) filenames, or at the very least using a hash of the filename.

    * `encoding` - _string_ - The file's `'Content-Transfer-Encoding'` value.

    * `mimeType` - _string_ - The file's `'Content-Type'` value.

    **Note:** If you listen for this event, you should always consume the `stream` whether you care about its contents or not (you can simply do `stream.resume();` if you want to discard/skip the contents), otherwise the `'finish'`/`'close'` event will never fire on the busboy parser stream.
    However, if you aren't accepting files, you can either simply not listen for the `'file'` event at all or set `limits.files` to `0`, and any/all files will be automatically skipped (these skipped files will still count towards any configured `limits.files` and `limits.parts` limits though).

    **Note:** If a configured `limits.fileSize` limit was reached for a file, `stream` will both have a boolean property `truncated` set to `true` (best checked at the end of the stream) and emit a `'limit'` event to notify you when this happens.

* **field**(< _string_ >name, < _string_ >value, < _object_ >info) - Emitted for each new non-file field found. `name` contains the form field name. `value` contains the string value of the field. `info` contains the following properties:

    * `nameTruncated` - _boolean_ - Whether `name` was truncated or not (due to a configured `limits.fieldNameSize` limit)

    * `valueTruncated` - _boolean_ - Whether `value` was truncated or not (due to a configured `limits.fieldSize` limit)

    * `encoding` - _string_ - The field's `'Content-Transfer-Encoding'` value.

    * `mimeType` - _string_ - The field's `'Content-Type'` value.

* **partsLimit**() - Emitted when the configured `limits.parts` limit has been reached. No more `'file'` or `'field'` events will be emitted.

* **filesLimit**() - Emitted when the configured `limits.files` limit has been reached. No more `'file'` events will be emitted.

* **fieldsLimit**() - Emitted when the configured `limits.fields` limit has been reached. No more `'field'` events will be emitted.

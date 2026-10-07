# Form-Data [![NPM Module](https://img.shields.io/npm/v/form-data.svg)](https://www.npmjs.com/package/form-data) [![Join the chat at https://gitter.im/form-data/form-data](http://form-data.github.io/images/gitterbadge.svg)](https://gitter.im/form-data/form-data)

A library to create readable ```"multipart/form-data"``` streams. Can be used to submit forms and file uploads to other web applications.

The API of this library is inspired by the [XMLHttpRequest-2 FormData Interface][xhr2-fd].

[xhr2-fd]: http://dev.w3.org/2006/webapi/XMLHttpRequest-2/Overview.html#the-formdata-interface

[![Linux Build](https://img.shields.io/travis/form-data/form-data/v3.0.4.svg?label=linux:6.x-12.x)](https://travis-ci.org/form-data/form-data)
[![MacOS Build](https://img.shields.io/travis/form-data/form-data/v3.0.4.svg?label=macos:6.x-12.x)](https://travis-ci.org/form-data/form-data)
[![Windows Build](https://img.shields.io/travis/form-data/form-data/v3.0.4.svg?label=windows:6.x-12.x)](https://travis-ci.org/form-data/form-data)

[![Coverage Status](https://img.shields.io/coveralls/form-data/form-data/v3.0.4.svg?label=code+coverage)](https://coveralls.io/github/form-data/form-data?branch=master)
[![Dependency Status](https://img.shields.io/david/form-data/form-data.svg)](https://david-dm.org/form-data/form-data)

## Install

```
npm install --save form-data
```

## Usage

In this example we are constructing a form with 3 fields that contain a string,
a buffer and a file stream.

``` javascript
var FormData = require('form-data');
var fs = require('fs');

var form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));
```

Also you can use http-response stream:

``` javascript
var FormData = require('form-data');
var http = require('http');

var form = new FormData();

http.request('http://nodejs.org/images/logo.png', function(response) {
  form.append('my_field', 'my value');
  form.append('my_buffer', new Buffer(10));
  form.append('my_logo', response);
});
```

Or @mikeal's [request](https://github.com/request/request) stream:

``` javascript
var FormData = require('form-data');
var request = require('request');

var form = new FormData();

form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_logo', request('http://nodejs.org/images/logo.png'));
```

In order to submit this form to a web application, call ```submit(url, [callback])``` method:

``` javascript
form.submit('http://example.org/', function(err, res) {
  // res – response object (http.IncomingMessage)  //
  res.resume();
});

```

For more advanced request manipulations ```submit()``` method returns ```http.ClientRequest``` object, or you can choose from one of the alternative submission methods.

### Custom options

You can provide custom options, such as `maxDataSize`:

``` javascript
var FormData = require('form-data');

var form = new FormData({ maxDataSize: 20971520 });
form.append('my_field', 'my value');
form.append('my_buffer', /* something big */);
```

List of available options could be found in [combined-stream](https://github.com/felixge/node-combined-stream/blob/master/lib/combined_stream.js#L7-L15)

### Alternative submission methods

You can use node's http client interface:

``` javascript
var http = require('http');

var request = http.request({
  method: 'post',
  host: 'example.org',
  path: '/upload',
  headers: form.getHeaders()
});

form.pipe(request);

request.on('response', function(res) {
  console.log(res.statusCode);
});
```

Or if you would prefer the `'Content-Length'` header to be set for you:

``` javascript
form.submit('example.org/upload', function(err, res) {
  console.log(res.statusCode);
});
```

To use custom headers and pre-known length in parts:

``` javascript
var CRLF = '\r\n';
var form = new FormData();

var options = {
  header: CRLF + '--' + form.getBoundary() + CRLF + 'X-Custom-Header: 123' + CRLF + CRLF,
  knownLength: 1
};

form.append('my_buffer', buffer, options);

form.submit('http://example.com/', function(err, res) {
  if (err) throw err;
  console.log('Done');
});
```

Form-Data can recognize and fetch all the required information from common types of streams (```fs.readStream```, ```http.response``` and ```mikeal's request```), for some other types of streams you'd need to provide "file"-related information manually:

``` javascript
someModule.stream(function(err, stdout, stderr) {
  if (err) throw err;

  var form = new FormData();

  form.append('file', stdout, {
    filename: 'unicycle.jpg', // ... or:
    filepath: 'photos/toys/unicycle.jpg',
    contentType: 'image/jpeg',
    knownLength: 19806
  });

  form.submit('http://example.com/', function(err, res) {
    if (err) throw err;
    console.log('Done');
  });
});
```

The `filepath` property overrides `filename` and may contain a relative path. This is typically used when uploading [multiple files from a directory](https://wicg.github.io/entries-api/#dom-htmlinputelement-webkitdirectory).

For edge cases, like POST request to URL with query string or to pass HTTP auth credentials, object can be passed to `form.submit()` as first parameter:

``` javascript
form.submit({
  host: 'example.com',
  path: '/probably.php?extra=params',
  auth: 'username:password'
}, function(err, res) {
  console.log(res.statusCode);
});
```

In case you need to also send custom HTTP headers with the POST request, you can use the `headers` key in first parameter of `form.submit()`:

``` javascript
form.submit({
  host: 'example.com',
  path: '/surelynot.php',
  headers: {'x-test-header': 'test-header-value'}
}, function(err, res) {
  console.log(res.statusCode);
});
```

### Methods

- [_Void_ append( **String** _field_, **Mixed** _value_ [, **Mixed** _options_] )](https://github.com/form-data/form-data#void-append-string-field-mixed-value--mixed-options-).
- [_Headers_ getHeaders( [**Headers** _userHeaders_] )](https://github.com/form-data/form-data#array-getheaders-array-userheaders-)
- [_String_ getBoundary()](https://github.com/form-data/form-data#string-getboundary)
- [_Void_ setBoundary()](https://github.com/form-data/form-data#void-setboundary)
- [_Buffer_ getBuffer()](https://github.com/form-data/form-data#buffer-getbuffer)
- [_Integer_ getLengthSync()](https://github.com/form-data/form-data#integer-getlengthsync)
- [_Integer_ getLength( **function** _callback_ )](https://github.com/form-data/form-data#integer-getlength-function-callback-)
- [_Boolean_ hasKnownLength()](https://github.com/form-data/form-data#boolean-hasknownlength)
- [_Request_ submit( _params_, **function** _callback_ )](https://github.com/form-data/form-data#request-submit-params-function-callback-)
- [_String_ toString()](https://github.com/form-data/form-data#string-tostring)

#### _Void_ append( **String** _field_, **Mixed** _value_ [, **Mixed** _options_] )
Append data to the form. You can submit about any format (string, integer, boolean, buffer, etc.). However, Arrays are not supported and need to be turned into strings by the user.
```javascript
var form = new FormData();
form.append( 'my_string', 'my value' );
form.append( 'my_integer', 1 );
form.append( 'my_boolean', true );
form.append( 'my_buffer', new Buffer(10) );
form.append( 'my_array_as_json', JSON.stringify( ['bird','cute'] ) )
```

You may provide a string for options, or an object.
```javascript
// Set filename by providing a string for options
form.append( 'my_file', fs.createReadStream('/foo/bar.jpg'), 'bar.jpg' );

// provide an object.
form.append( 'my_file', fs.createReadStream('/foo/bar.jpg'), {filename: 'bar.jpg', contentType: 'image/jpeg', knownLength: 19806} );
```

#### _Headers_ getHeaders( [**Headers** _userHeaders_] )
This method adds the correct `content-type` header to the provided array of `userHeaders`.  

#### _String_ getBoundary()
Return the boundary of the formData. By default, the boundary consists of 26 `-` followed by 24 numbers
for example:
```javascript
--------------------------515890814546601021194782
```

#### _Void_ setBoundary(String _boundary_)
Set the boundary string, overriding the default behavior described above.

_Note: The boundary must be unique and may not appear in the data._

#### _Buffer_ getBuffer()
Return the full formdata request package, as a Buffer. You can insert this Buffer in e.g. Axios to send multipart data.
```javascript
var form = new FormData();
form.append( 'my_buffer', Buffer.from([0x4a,0x42,0x20,0x52,0x6f,0x63,0x6b,0x73]) );
form.append( 'my_file', fs.readFileSync('/foo/bar.jpg') );

axios.post( 'https://example.com/path/to/api',
            form.getBuffer(),
            form.getHeaders()
          )
```
**Note:** Because the output is of type Buffer, you can only append types that are accepted by Buffer: *string, Buffer, ArrayBuffer, Array, or Array-like Object*. A ReadStream for example will result in an error.

#### _Integer_ getLengthSync()
Same as `getLength` but synchronous.

_Note: getLengthSync __doesn't__ calculate streams length._

#### _Integer_ getLength( **function** _callback_ )
Returns the `Content-Length` async. The callback is used to handle errors and continue once the length has been calculated
```javascript
this.getLength(function(err, length) {
  if (err) {
    this._error(err);
    return;
  }

  // add content length
  request.setHeader('Content-Length', length);

  ...
}.bind(this));
```

#### _Boolean_ hasKnownLength()
Checks if the length of added values is known.

#### _Request_ submit( _params_, **function** _callback_ )
Submit the form to a web application.
```javascript
var form = new FormData();
form.append( 'my_string', 'Hello World' );

form.submit( 'http://example.com/', function(err, res) {
  // res – response object (http.IncomingMessage)  //
  res.resume();
} );
```

#### _String_ toString()
Returns the form data as a string. Don't use this if you are sending files or buffers, use `getBuffer()` instead.

### Integration with other libraries

#### Request

Form submission using  [request](https://github.com/request/request):

```javascript
var formData = {
  my_field: 'my_value',
  my_file: fs.createReadStream(__dirname + '/unicycle.jpg'),
};

request.post({url:'http://service.com/upload', formData: formData}, function(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});
```

For more details see [request readme](https://github.com/request/request#multipartform-data-multipart-form-uploads).

#### node-fetch

You can also submit a form using [node-fetch](https://github.com/bitinn/node-fetch):

```javascript
var form = new FormData();

form.append('a', 1);

fetch('http://example.com', { method: 'POST', body: form })
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
```

#### axios

In Node.js you can post a file using [axios](https://github.com/axios/axios):
```javascript
const form = new FormData();
const stream = fs.createReadStream(PATH_TO_FILE);

form.append('image', stream);

// In Node.js environment you need to set boundary in the header field 'Content-Type' by calling method `getHeaders`
const formHeaders = form.getHeaders();

axios.post('http://example.com', form, {
  headers: {
    ...formHeaders,
  },
})
.then(response => response)
.catch(error => error)
```

## Notes

- ```getLengthSync()``` method DOESN'T calculate length for streams, use ```knownLength``` options as workaround.
- Starting version `2.x` FormData has dropped support for `node@0.10.x`.
- Starting version `3.x` FormData has dropped support for `node@4.x`.

## License

Form-Data is released under the [MIT](License) license.

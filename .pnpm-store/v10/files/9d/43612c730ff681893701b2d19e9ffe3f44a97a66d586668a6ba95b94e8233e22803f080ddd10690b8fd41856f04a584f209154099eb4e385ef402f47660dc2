# loader-utils

## Methods

### `urlToRequest`

Converts some resource URL to a webpack module request.

> i Before call `urlToRequest` you need call `isUrlRequest` to ensure it is requestable url

```javascript
const url = "path/to/module.js";

if (loaderUtils.isUrlRequest(url)) {
  // Logic for requestable url
  const request = loaderUtils.urlToRequest(url);
} else {
  // Logic for not requestable url
}
```

Simple example:

```javascript
const url = "path/to/module.js";
const request = loaderUtils.urlToRequest(url); // "./path/to/module.js"
```

#### Module URLs

Any URL containing a `~` will be interpreted as a module request. Anything after the `~` will be considered the request path.

```javascript
const url = "~path/to/module.js";
const request = loaderUtils.urlToRequest(url); // "path/to/module.js"
```

#### Root-relative URLs

URLs that are root-relative (start with `/`) can be resolved relative to some arbitrary path by using the `root` parameter:

```javascript
const url = "/path/to/module.js";
const root = "./root";
const request = loaderUtils.urlToRequest(url, root); // "./root/path/to/module.js"
```

To convert a root-relative URL into a module URL, specify a `root` value that starts with `~`:

```javascript
const url = "/path/to/module.js";
const root = "~";
const request = loaderUtils.urlToRequest(url, root); // "path/to/module.js"
```

### `interpolateName`

Interpolates a filename template using multiple placeholders and/or a regular expression.
The template and regular expression are set as query params called `name` and `regExp` on the current loader's context.

```javascript
const interpolatedName = loaderUtils.interpolateName(
  loaderContext,
  name,
  options
);
```

The following tokens are replaced in the `name` parameter:

- `[ext]` the extension of the resource
- `[name]` the basename of the resource
- `[path]` the path of the resource relative to the `context` query parameter or option.
- `[folder]` the folder the resource is in
- `[query]` the queryof the resource, i.e. `?foo=bar`
- `[contenthash]` the hash of `options.content` (Buffer) (by default it's the hex digest of the `xxhash64` hash)
- `[<hashType>:contenthash:<digestType>:<length>]` optionally one can configure
  - other `hashType`s, i. e. `xxhash64`, `sha1`, `md4` (wasm version), `native-md4` (`crypto` module version), `md5`, `sha256`, `sha512`
  - other `digestType`s, i. e. `hex`, `base26`, `base32`, `base36`, `base49`, `base52`, `base58`, `base62`, `base64`, `base64safe`
  - and `length` the length in chars
- `[hash]` the hash of `options.content` (Buffer) (by default it's the hex digest of the `xxhash64` hash)
- `[<hashType>:hash:<digestType>:<length>]` optionally one can configure
  - other `hashType`s, i. e. `xxhash64`, `sha1`, `md4` (wasm version), `native-md4` (`crypto` module version), `md5`, `sha256`, `sha512`
  - other `digestType`s, i. e. `hex`, `base26`, `base32`, `base36`, `base49`, `base52`, `base58`, `base62`, `base64`, `base64safe`
  - and `length` the length in chars
- `[N]` the N-th match obtained from matching the current file name against `options.regExp`

In loader context `[hash]` and `[contenthash]` are the same, but we recommend using `[contenthash]` for avoid misleading.

`digestType` with `base64safe` don't contain `/`, `+` and `=` symbols.

Examples

```javascript
// loaderContext.resourcePath = "/absolute/path/to/app/js/javascript.js"
loaderUtils.interpolateName(loaderContext, "js/[hash].script.[ext]", { content: ... });
// => js/9473fdd0d880a43c21b7778d34872157.script.js

// loaderContext.resourcePath = "/absolute/path/to/app/js/javascript.js"
// loaderContext.resourceQuery = "?foo=bar"
loaderUtils.interpolateName(loaderContext, "js/[hash].script.[ext][query]", { content: ... });
// => js/9473fdd0d880a43c21b7778d34872157.script.js?foo=bar

// loaderContext.resourcePath = "/absolute/path/to/app/js/javascript.js"
loaderUtils.interpolateName(loaderContext, "js/[contenthash].script.[ext]", { content: ... });
// => js/9473fdd0d880a43c21b7778d34872157.script.js

// loaderContext.resourcePath = "/absolute/path/to/app/page.html"
loaderUtils.interpolateName(loaderContext, "html-[hash:6].html", { content: ... });
// => html-9473fd.html

// loaderContext.resourcePath = "/absolute/path/to/app/flash.txt"
loaderUtils.interpolateName(loaderContext, "[hash]", { content: ... });
// => c31e9820c001c9c4a86bce33ce43b679

// loaderContext.resourcePath = "/absolute/path/to/app/img/image.png"
loaderUtils.interpolateName(loaderContext, "[sha512:hash:base64:7].[ext]", { content: ... });
// => 2BKDTjl.png
// use sha512 hash instead of xxhash64 and with only 7 chars of base64

// loaderContext.resourcePath = "/absolute/path/to/app/img/myself.png"
// loaderContext.query.name =
loaderUtils.interpolateName(loaderContext, "picture.png");
// => picture.png

// loaderContext.resourcePath = "/absolute/path/to/app/dir/file.png"
loaderUtils.interpolateName(loaderContext, "[path][name].[ext]?[hash]", { content: ... });
// => /app/dir/file.png?9473fdd0d880a43c21b7778d34872157

// loaderContext.resourcePath = "/absolute/path/to/app/js/page-home.js"
loaderUtils.interpolateName(loaderContext, "script-[1].[ext]", { regExp: "page-(.*)\\.js", content: ... });
// => script-home.js

// loaderContext.resourcePath = "/absolute/path/to/app/js/javascript.js"
// loaderContext.resourceQuery = "?foo=bar"
loaderUtils.interpolateName(
  loaderContext,
  (resourcePath, resourceQuery) => {
    // resourcePath - `/app/js/javascript.js`
    // resourceQuery - `?foo=bar`

    return "js/[hash].script.[ext]";
  },
  { content: ... }
);
// => js/9473fdd0d880a43c21b7778d34872157.script.js
```

### `getHashDigest`

```javascript
const digestString = loaderUtils.getHashDigest(
  buffer,
  hashType,
  digestType,
  maxLength
);
```

- `buffer` the content that should be hashed
- `hashType` one of `xxhash64`, `sha1`, `md4`, `md5`, `sha256`, `sha512` or any other node.js supported hash type
- `digestType` one of `hex`, `base26`, `base32`, `base36`, `base49`, `base52`, `base58`, `base62`, `base64`, `base64safe`
- `maxLength` the maximum length in chars

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

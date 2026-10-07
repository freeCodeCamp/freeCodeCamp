# loader-utils

## Methods

### `getOptions`

Recommended way to retrieve the options of a loader invocation:

```javascript
// inside your loader
const options = loaderUtils.getOptions(this);
```

1. If `this.query` is a string:
	- Tries to parse the query string and returns a new object
	- Throws if it's not a valid query string
2. If `this.query` is object-like, it just returns `this.query`
3. In any other case, it just returns `null`

**Please note:** The returned `options` object is *read-only*. It may be re-used across multiple invocations.
If you pass it on to another library, make sure to make a *deep copy* of it:

```javascript
const options = Object.assign(
	{},
	defaultOptions,
	loaderUtils.getOptions(this) // it is safe to pass null to Object.assign()
);
// don't forget nested objects or arrays
options.obj = Object.assign({}, options.obj); 
options.arr = options.arr.slice();
someLibrary(options);
```

[clone](https://www.npmjs.com/package/clone) is a good library to make a deep copy of the options.

#### Options as query strings

If the loader options have been passed as loader query string (`loader?some&params`), the string is parsed by using [`parseQuery`](#parsequery).

### `parseQuery`

Parses a passed string (e.g. `loaderContext.resourceQuery`) as a query string, and returns an object.

``` javascript
const params = loaderUtils.parseQuery(this.resourceQuery); // resource: `file?param1=foo`
if (params.param1 === "foo") {
	// do something
}
```

The string is parsed like this:

``` text
                             -> Error
?                            -> {}
?flag                        -> { flag: true }
?+flag                       -> { flag: true }
?-flag                       -> { flag: false }
?xyz=test                    -> { xyz: "test" }
?xyz=1                       -> { xyz: "1" } // numbers are NOT parsed
?xyz[]=a                     -> { xyz: ["a"] }
?flag1&flag2                 -> { flag1: true, flag2: true }
?+flag1,-flag2               -> { flag1: true, flag2: false }
?xyz[]=a,xyz[]=b             -> { xyz: ["a", "b"] }
?a%2C%26b=c%2C%26d           -> { "a,&b": "c,&d" }
?{data:{a:1},isJSON5:true}   -> { data: { a: 1 }, isJSON5: true }
```

### `stringifyRequest`

Turns a request into a string that can be used inside `require()` or `import` while avoiding absolute paths.
Use it instead of `JSON.stringify(...)` if you're generating code inside a loader.

**Why is this necessary?** Since webpack calculates the hash before module paths are translated into module ids, we must avoid absolute paths to ensure
consistent hashes across different compilations.

This function:

- resolves absolute requests into relative requests if the request and the module are on the same hard drive
- replaces `\` with `/` if the request and the module are on the same hard drive
- won't change the path at all if the request and the module are on different hard drives
- applies `JSON.stringify` to the result

```javascript
loaderUtils.stringifyRequest(this, "./test.js");
// "\"./test.js\""

loaderUtils.stringifyRequest(this, ".\\test.js");
// "\"./test.js\""

loaderUtils.stringifyRequest(this, "test");
// "\"test\""

loaderUtils.stringifyRequest(this, "test/lib/index.js");
// "\"test/lib/index.js\""

loaderUtils.stringifyRequest(this, "otherLoader?andConfig!test?someConfig");
// "\"otherLoader?andConfig!test?someConfig\""

loaderUtils.stringifyRequest(this, require.resolve("test"));
// "\"../node_modules/some-loader/lib/test.js\""

loaderUtils.stringifyRequest(this, "C:\\module\\test.js");
// "\"../../test.js\"" (on Windows, in case the module and the request are on the same drive)

loaderUtils.stringifyRequest(this, "C:\\module\\test.js");
// "\"C:\\module\\test.js\"" (on Windows, in case the module and the request are on different drives)

loaderUtils.stringifyRequest(this, "\\\\network-drive\\test.js");
// "\"\\\\network-drive\\\\test.js\"" (on Windows, in case the module and the request are on different drives)
```

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
const interpolatedName = loaderUtils.interpolateName(loaderContext, name, options);
```

The following tokens are replaced in the `name` parameter:

* `[ext]` the extension of the resource
* `[name]` the basename of the resource
* `[path]` the path of the resource relative to the `context` query parameter or option.
* `[folder]` the folder the resource is in
* `[query]` the queryof the resource, i.e. `?foo=bar`
* `[emoji]` a random emoji representation of `options.content`
* `[emoji:<length>]` same as above, but with a customizable number of emojis
* `[contenthash]` the hash of `options.content` (Buffer) (by default it's the hex digest of the md4 hash)
* `[<hashType>:contenthash:<digestType>:<length>]` optionally one can configure
  * other `hashType`s, i. e. `sha1`, `md4`, `md5`, `sha256`, `sha512`
  * other `digestType`s, i. e. `hex`, `base26`, `base32`, `base36`, `base49`, `base52`, `base58`, `base62`, `base64`
  * and `length` the length in chars
* `[hash]` the hash of `options.content` (Buffer) (by default it's the hex digest of the md4 hash)
* `[<hashType>:hash:<digestType>:<length>]` optionally one can configure
  * other `hashType`s, i. e. `sha1`, `md4`, `md5`, `sha256`, `sha512`
  * other `digestType`s, i. e. `hex`, `base26`, `base32`, `base36`, `base49`, `base52`, `base58`, `base62`, `base64`
  * and `length` the length in chars
* `[N]` the N-th match obtained from matching the current file name against `options.regExp`

In loader context `[hash]` and `[contenthash]` are the same, but we recommend using `[contenthash]` for avoid misleading.

Examples

``` javascript
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

// loaderContext.resourcePath = "/absolute/path/to/app/img/image.gif"
loaderUtils.interpolateName(loaderContext, "[emoji]", { content: ... });
// => 👍

// loaderContext.resourcePath = "/absolute/path/to/app/img/image.gif"
loaderUtils.interpolateName(loaderContext, "[emoji:4]", { content: ... });
// => 🙍🏢📤🐝

// loaderContext.resourcePath = "/absolute/path/to/app/img/image.png"
loaderUtils.interpolateName(loaderContext, "[sha512:hash:base64:7].[ext]", { content: ... });
// => 2BKDTjl.png
// use sha512 hash instead of md4 and with only 7 chars of base64

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

``` javascript
const digestString = loaderUtils.getHashDigest(buffer, hashType, digestType, maxLength);
```

* `buffer` the content that should be hashed
* `hashType` one of `sha1`, `md4`, `md5`, `sha256`, `sha512` or any other node.js supported hash type
* `digestType` one of `hex`, `base26`, `base32`, `base36`, `base49`, `base52`, `base58`, `base62`, `base64`
* `maxLength` the maximum length in chars

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

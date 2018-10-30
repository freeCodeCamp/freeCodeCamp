JS-YAML - YAML 1.2 parser / writer for JavaScript
=================================================

[![Build Status](https://travis-ci.org/nodeca/js-yaml.svg?branch=master)](https://travis-ci.org/nodeca/js-yaml)
[![NPM version](https://img.shields.io/npm/v/js-yaml.svg)](https://www.npmjs.org/package/js-yaml)

__[Online Demo](http://nodeca.github.com/js-yaml/)__


This is an implementation of [YAML](http://yaml.org/), a human-friendly data
serialization language. Started as [PyYAML](http://pyyaml.org/) port, it was
completely rewritten from scratch. Now it's very fast, and supports 1.2 spec.


Installation
------------

### YAML module for node.js

```
npm install js-yaml
```


### CLI executable

If you want to inspect your YAML files from CLI, install js-yaml globally:

```
npm install -g js-yaml
```

#### Usage

```
usage: js-yaml [-h] [-v] [-c] [-t] file

Positional arguments:
  file           File with YAML document(s)

Optional arguments:
  -h, --help     Show this help message and exit.
  -v, --version  Show program's version number and exit.
  -c, --compact  Display errors in compact mode
  -t, --trace    Show stack trace on error
```


### Bundled YAML library for browsers

``` html
<!-- esprima required only for !!js/function -->
<script src="esprima.js"></script>
<script src="js-yaml.min.js"></script>
<script type="text/javascript">
var doc = jsyaml.load('greeting: hello\nname: world');
</script>
```

Browser support was done mostly for the online demo. If you find any errors - feel
free to send pull requests with fixes. Also note, that IE and other old browsers
needs [es5-shims](https://github.com/kriskowal/es5-shim) to operate.

Notes:

1. We have no resources to support browserified version. Don't expect it to be
   well tested. Don't expect fast fixes if something goes wrong there.
2. `!!js/function` in browser bundle will not work by default. If you really need
   it - load `esprima` parser first (via amd or directly).
3. `!!bin` in browser will return `Array`, because browsers do not support
   node.js `Buffer` and adding Buffer shims is completely useless on practice.


API
---

Here we cover the most 'useful' methods. If you need advanced details (creating
your own tags), see [wiki](https://github.com/nodeca/js-yaml/wiki) and
[examples](https://github.com/nodeca/js-yaml/tree/master/examples) for more
info.

``` javascript
yaml = require('js-yaml');
fs   = require('fs');

// Get document, or throw exception on error
try {
  var doc = yaml.safeLoad(fs.readFileSync('/home/ixti/example.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}
```


### safeLoad (string [ , options ])

**Recommended loading way.** Parses `string` as single YAML document. Returns a JavaScript
object or throws `YAMLException` on error. By default, does not support regexps,
functions and undefined. This method is safe for untrusted data.

options:

- `filename` _(default: null)_ - string to be used as a file path in
  error/warning messages.
- `onWarning` _(default: null)_ - function to call on warning messages.
  Loader will throw on warnings if this function is not provided.
- `schema` _(default: `DEFAULT_SAFE_SCHEMA`)_ - specifies a schema to use.
  - `FAILSAFE_SCHEMA` - only strings, arrays and plain objects:
    http://www.yaml.org/spec/1.2/spec.html#id2802346
  - `JSON_SCHEMA` - all JSON-supported types:
    http://www.yaml.org/spec/1.2/spec.html#id2803231
  - `CORE_SCHEMA` - same as `JSON_SCHEMA`:
    http://www.yaml.org/spec/1.2/spec.html#id2804923
  - `DEFAULT_SAFE_SCHEMA` - all supported YAML types, without unsafe ones
    (`!!js/undefined`, `!!js/regexp` and `!!js/function`):
    http://yaml.org/type/
  - `DEFAULT_FULL_SCHEMA` - all supported YAML types.
- `json` _(default: false)_ - compatibility with JSON.parse behaviour. If true, then duplicate keys in a mapping will override values rather than throwing an error.

NOTE: This function **does not** understand multi-document sources, it throws
exception on those.

NOTE: JS-YAML **does not** support schema-specific tag resolution restrictions.
So, the JSON schema is not as strictly defined in the YAML specification.
It allows numbers in any notation, use `Null` and `NULL` as `null`, etc.
The core schema also has no such restrictions. It allows binary notation for integers.


### load (string [ , options ])

**Use with care with untrusted sources**. The same as `safeLoad()` but uses
`DEFAULT_FULL_SCHEMA` by default - adds some JavaScript-specific types:
`!!js/function`, `!!js/regexp` and `!!js/undefined`. For untrusted sources, you
must additionally validate object structure to avoid injections:

``` javascript
var untrusted_code = '"toString": !<tag:yaml.org,2002:js/function> "function (){very_evil_thing();}"';

// I'm just converting that string, what could possibly go wrong?
require('js-yaml').load(untrusted_code) + ''
```


### safeLoadAll (string [, iterator] [, options ])

Same as `safeLoad()`, but understands multi-document sources. Applies
`iterator` to each document if specified, or returns array of documents.

``` javascript
var yaml = require('js-yaml');

yaml.safeLoadAll(data, function (doc) {
  console.log(doc);
});
```


### loadAll (string [, iterator] [ , options ])

Same as `safeLoadAll()` but uses `DEFAULT_FULL_SCHEMA` by default.


### safeDump (object [ , options ])

Serializes `object` as a YAML document. Uses `DEFAULT_SAFE_SCHEMA`, so it will
throw an exception if you try to dump regexps or functions. However, you can
disable exceptions by setting the `skipInvalid` option to `true`.

options:

- `indent` _(default: 2)_ - indentation width to use (in spaces).
- `skipInvalid` _(default: false)_ - do not throw on invalid types (like function
  in the safe schema) and skip pairs and single values with such types.
- `flowLevel` (default: -1) - specifies level of nesting, when to switch from
  block to flow style for collections. -1 means block style everwhere
- `styles` - "tag" => "style" map. Each tag may have own set of styles.
- `schema` _(default: `DEFAULT_SAFE_SCHEMA`)_ specifies a schema to use.
- `sortKeys` _(default: `false`)_ - if `true`, sort keys when dumping YAML. If a
  function, use the function to sort the keys.
- `lineWidth` _(default: `80`)_ - set max line width.
- `noRefs` _(default: `false`)_ - if `true`, don't convert duplicate objects into references
- `noCompatMode` _(default: `false`)_ - if `true` don't try to be compatible with older
  yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1
- `condenseFlow` _(default: `false`)_ - if `true` flow sequences will be condensed, omitting the space between `a, b`. Eg. `'[a,b]'`, and omitting the space between `key: value` and quoting the key. Eg. `'{"a":b}'` Can be useful when using yaml for pretty URL query params as spaces are %-encoded.

The following table show availlable styles (e.g. "canonical",
"binary"...) available for each tag (.e.g. !!null, !!int ...). Yaml
output is shown on the right side after `=>` (default setting) or `->`:

``` none
!!null
  "canonical"   -> "~"
  "lowercase"   => "null"
  "uppercase"   -> "NULL"
  "camelcase"   -> "Null"

!!int
  "binary"      -> "0b1", "0b101010", "0b1110001111010"
  "octal"       -> "01", "052", "016172"
  "decimal"     => "1", "42", "7290"
  "hexadecimal" -> "0x1", "0x2A", "0x1C7A"

!!bool
  "lowercase"   => "true", "false"
  "uppercase"   -> "TRUE", "FALSE"
  "camelcase"   -> "True", "False"

!!float
  "lowercase"   => ".nan", '.inf'
  "uppercase"   -> ".NAN", '.INF'
  "camelcase"   -> ".NaN", '.Inf'
```

Example:

``` javascript
safeDump (object, {
  'styles': {
    '!!null': 'canonical' // dump null as ~
  },
  'sortKeys': true        // sort object keys
});
```

### dump (object [ , options ])

Same as `safeDump()` but without limits (uses `DEFAULT_FULL_SCHEMA` by default).


Supported YAML types
--------------------

The list of standard YAML tags and corresponding JavaScipt types. See also
[YAML tag discussion](http://pyyaml.org/wiki/YAMLTagDiscussion) and
[YAML types repository](http://yaml.org/type/).

```
!!null ''                   # null
!!bool 'yes'                # bool
!!int '3...'                # number
!!float '3.14...'           # number
!!binary '...base64...'     # buffer
!!timestamp 'YYYY-...'      # date
!!omap [ ... ]              # array of key-value pairs
!!pairs [ ... ]             # array or array pairs
!!set { ... }               # array of objects with given keys and null values
!!str '...'                 # string
!!seq [ ... ]               # array
!!map { ... }               # object
```

**JavaScript-specific tags**

```
!!js/regexp /pattern/gim            # RegExp
!!js/undefined ''                   # Undefined
!!js/function 'function () {...}'   # Function
```

Caveats
-------

Note, that you use arrays or objects as key in JS-YAML. JS does not allow objects
or arrays as keys, and stringifies (by calling `toString()` method) them at the
moment of adding them.

``` yaml
---
? [ foo, bar ]
: - baz
? { foo: bar }
: - baz
  - baz
```

``` javascript
{ "foo,bar": ["baz"], "[object Object]": ["baz", "baz"] }
```

Also, reading of properties on implicit block mapping keys is not supported yet.
So, the following YAML document cannot be loaded.

``` yaml
&anchor foo:
  foo: bar
  *anchor: duplicate key
  baz: bat
  *anchor: duplicate key
```


Breaking changes in 2.x.x -> 3.x.x
----------------------------------

If you have not used __custom__ tags or loader classes and not loaded yaml
files via `require()`, no changes are needed. Just upgrade the library.

Otherwise, you should:

1. Replace all occurrences of `require('xxxx.yml')` by `fs.readFileSync()` +
  `yaml.safeLoad()`.
2. rewrite your custom tags constructors and custom loader
  classes, to conform the new API. See
  [examples](https://github.com/nodeca/js-yaml/tree/master/examples) and
  [wiki](https://github.com/nodeca/js-yaml/wiki) for details.


License
-------

View the [LICENSE](https://github.com/nodeca/js-yaml/blob/master/LICENSE) file
(MIT).

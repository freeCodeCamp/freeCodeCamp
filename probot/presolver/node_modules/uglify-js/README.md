UglifyJS 2
==========
[![Build Status](https://travis-ci.org/mishoo/UglifyJS2.svg)](https://travis-ci.org/mishoo/UglifyJS2)

UglifyJS is a JavaScript parser, minifier, compressor or beautifier toolkit.

This page documents the command line utility.  For
[API and internals documentation see my website](http://lisperator.net/uglifyjs/).
There's also an
[in-browser online demo](http://lisperator.net/uglifyjs/#demo) (for Firefox,
Chrome and probably Safari).

#### Note:
- `uglify-js` only supports ECMAScript 5 (ES5).
- Support for `const` is [present but incomplete](#support-for-const), and may not be
  transformed properly.
- Those wishing to minify ES2015+ (ES6+) should use the `npm` package [**uglify-es**](https://github.com/mishoo/UglifyJS2/tree/harmony).

Install
-------

First make sure you have installed the latest version of [node.js](http://nodejs.org/)
(You may need to restart your computer after this step).

From NPM for use as a command line app:

    npm install uglify-js -g

From NPM for programmatic use:

    npm install uglify-js

Usage
-----

    uglifyjs [input files] [options]

UglifyJS2 can take multiple input files.  It's recommended that you pass the
input files first, then pass the options.  UglifyJS will parse input files
in sequence and apply any compression options.  The files are parsed in the
same global scope, that is, a reference from a file to some
variable/function declared in another file will be matched properly.

If you want to read from STDIN instead, pass a single dash instead of input
files.

If you wish to pass your options before the input files, separate the two with
a double dash to prevent input files being used as option arguments:

    uglifyjs --compress --mangle -- input.js

The available options are:

```
  --source-map                  Specify an output file where to generate source
                                map.
  --source-map-root             The path to the original source to be included
                                in the source map.
  --source-map-url              The path to the source map to be added in //#
                                sourceMappingURL.  Defaults to the value passed
                                with --source-map.
  --source-map-include-sources  Pass this flag if you want to include the
                                content of source files in the source map as
                                sourcesContent property.
  --source-map-inline           Write base64-encoded source map to the end of js output.
  --in-source-map               Input source map, useful if you're compressing
                                JS that was generated from some other original
                                code. Specify "inline" if the source map is included
                                inline with the sources.
  --screw-ie8                   Use this flag if you don't wish to support
                                Internet Explorer 6/7/8.
                                By default UglifyJS will not try to be IE-proof.
  --support-ie8                 Use this flag to support Internet Explorer 6/7/8.
                                Equivalent to setting `screw_ie8: false` in `minify()`
                                for `compress`, `mangle` and `output` options.
  --expr                        Parse a single expression, rather than a
                                program (for parsing JSON)
  -p, --prefix                  Skip prefix for original filenames that appear
                                in source maps. For example -p 3 will drop 3
                                directories from file names and ensure they are
                                relative paths. You can also specify -p
                                relative, which will make UglifyJS figure out
                                itself the relative paths between original
                                sources, the source map and the output file.
  -o, --output                  Output file (default STDOUT).
  -b, --beautify                Beautify output/specify output options.
  -m, --mangle                  Mangle names/pass mangler options.
  -r, --reserved                Reserved names to exclude from mangling.
  -c, --compress                Enable compressor/pass compressor options, e.g.
                                `-c 'if_return=false,pure_funcs=["Math.pow","console.log"]'`
                                Use `-c` with no argument to enable default compression
                                options.
  -d, --define                  Global definitions
  -e, --enclose                 Embed everything in a big function, with a
                                configurable parameter/argument list.
  --comments                    Preserve copyright comments in the output. By
                                default this works like Google Closure, keeping
                                JSDoc-style comments that contain "@license" or
                                "@preserve". You can optionally pass one of the
                                following arguments to this flag:
                                - "all" to keep all comments
                                - a valid JS RegExp like `/foo/` or `/^!/` to
                                keep only matching comments.
                                Note that currently not *all* comments can be
                                kept when compression is on, because of dead
                                code removal or cascading statements into
                                sequences.
  --preamble                    Preamble to prepend to the output.  You can use
                                this to insert a comment, for example for
                                licensing information.  This will not be
                                parsed, but the source map will adjust for its
                                presence.
  --stats                       Display operations run time on STDERR.
  --acorn                       Use Acorn for parsing.
  --spidermonkey                Assume input files are SpiderMonkey AST format
                                (as JSON).
  --self                        Build itself (UglifyJS2) as a library (implies
                                --wrap=UglifyJS --export-all)
  --wrap                        Embed everything in a big function, making the
                                “exports” and “global” variables available. You
                                need to pass an argument to this option to
                                specify the name that your module will take
                                when included in, say, a browser.
  --export-all                  Only used when --wrap, this tells UglifyJS to
                                add code to automatically export all globals.
  --lint                        Display some scope warnings
  -v, --verbose                 Verbose
  -V, --version                 Print version number and exit.
  --noerr                       Don't throw an error for unknown options in -c,
                                -b or -m.
  --bare-returns                Allow return outside of functions.  Useful when
                                minifying CommonJS modules and Userscripts that
                                may be anonymous function wrapped (IIFE) by the
                                .user.js engine `caller`.
  --keep-fnames                 Do not mangle/drop function names.  Useful for
                                code relying on Function.prototype.name.
  --reserved-file               File containing reserved names
  --reserve-domprops            Make (most?) DOM properties reserved for
                                --mangle-props
  --mangle-props                Mangle property names (default `0`). Set to
                                `true` or `1` to mangle all property names. Set
                                to `unquoted` or `2` to only mangle unquoted
                                property names. Mode `2` also enables the
                                `keep_quoted_props` beautifier option to
                                preserve the quotes around property names and
                                disables the `properties` compressor option to
                                prevent rewriting quoted properties with dot
                                notation. You can override these by setting
                                them explicitly on the command line.
  --mangle-regex                Only mangle property names matching the regex
  --name-cache                  File to hold mangled names mappings
  --pure-funcs                  Functions that can be safely removed if their
                                return value is not used, e.g.
                                `--pure-funcs Math.floor console.info`
                                (requires `--compress`)
```

Specify `--output` (`-o`) to declare the output file.  Otherwise the output
goes to STDOUT.

## Source map options

UglifyJS2 can generate a source map file, which is highly useful for
debugging your compressed JavaScript.  To get a source map, pass
`--source-map output.js.map` (full path to the file where you want the
source map dumped).

Additionally you might need `--source-map-root` to pass the URL where the
original files can be found.  In case you are passing full paths to input
files to UglifyJS, you can use `--prefix` (`-p`) to specify the number of
directories to drop from the path prefix when declaring files in the source
map.

For example:

    uglifyjs /home/doe/work/foo/src/js/file1.js \
             /home/doe/work/foo/src/js/file2.js \
             -o foo.min.js \
             --source-map foo.min.js.map \
             --source-map-root http://foo.com/src \
             -p 5 -c -m

The above will compress and mangle `file1.js` and `file2.js`, will drop the
output in `foo.min.js` and the source map in `foo.min.js.map`.  The source
mapping will refer to `http://foo.com/src/js/file1.js` and
`http://foo.com/src/js/file2.js` (in fact it will list `http://foo.com/src`
as the source map root, and the original files as `js/file1.js` and
`js/file2.js`).

### Composed source map

When you're compressing JS code that was output by a compiler such as
CoffeeScript, mapping to the JS code won't be too helpful.  Instead, you'd
like to map back to the original code (i.e. CoffeeScript).  UglifyJS has an
option to take an input source map.  Assuming you have a mapping from
CoffeeScript → compiled JS, UglifyJS can generate a map from CoffeeScript →
compressed JS by mapping every token in the compiled JS to its original
location.

To use this feature you need to pass `--in-source-map
/path/to/input/source.map` or `--in-source-map inline` if the source map is
included inline with the sources. Normally the input source map should also
point to the file containing the generated JS, so if that's correct you can
omit input files from the command line.

## Mangler options

To enable the mangler you need to pass `--mangle` (`-m`).  The following
(comma-separated) options are supported:

- `toplevel` — mangle names declared in the toplevel scope (disabled by
  default).

- `eval` — mangle names visible in scopes where `eval` or `with` are used
  (disabled by default).

When mangling is enabled but you want to prevent certain names from being
mangled, you can declare those names with `--reserved` (`-r`) — pass a
comma-separated list of names.  For example:

    uglifyjs ... -m -r '$,require,exports'

to prevent the `require`, `exports` and `$` names from being changed.

### Mangling property names (`--mangle-props`)

**Note:** this will probably break your code.  Mangling property names is a
separate step, different from variable name mangling.  Pass
`--mangle-props`.  It will mangle all properties that are seen in some
object literal, or that are assigned to.  For example:

```js
var x = {
  foo: 1
};

x.bar = 2;
x["baz"] = 3;
x[condition ? "moo" : "boo"] = 4;
console.log(x.something());
```

In the above code, `foo`, `bar`, `baz`, `moo` and `boo` will be replaced
with single characters, while `something()` will be left as is.

In order for this to be of any use, we should avoid mangling standard JS
names.  For instance, if your code would contain `x.length = 10`, then
`length` becomes a candidate for mangling and it will be mangled throughout
the code, regardless if it's being used as part of your own objects or
accessing an array's length.  To avoid that, you can use `--reserved-file`
to pass a filename that should contain the names to be excluded from
mangling.  This file can be used both for excluding variable names and
property names.  It could look like this, for example:

```js
{
  "vars": [ "define", "require", ... ],
  "props": [ "length", "prototype", ... ]
}
```

`--reserved-file` can be an array of file names (either a single
comma-separated argument, or you can pass multiple `--reserved-file`
arguments) — in this case it will exclude names from all those files.

A default exclusion file is provided in `tools/domprops.json` which should
cover most standard JS and DOM properties defined in various browsers.  Pass
`--reserve-domprops` to read that in.

You can also use a regular expression to define which property names should be
mangled.  For example, `--mangle-regex="/^_/"` will only mangle property names
that start with an underscore.

When you compress multiple files using this option, in order for them to
work together in the end we need to ensure somehow that one property gets
mangled to the same name in all of them.  For this, pass `--name-cache
filename.json` and UglifyJS will maintain these mappings in a file which can
then be reused.  It should be initially empty.  Example:

```
rm -f /tmp/cache.json  # start fresh
uglifyjs file1.js file2.js --mangle-props --name-cache /tmp/cache.json -o part1.js
uglifyjs file3.js file4.js --mangle-props --name-cache /tmp/cache.json -o part2.js
```

Now, `part1.js` and `part2.js` will be consistent with each other in terms
of mangled property names.

Using the name cache is not necessary if you compress all your files in a
single call to UglifyJS.

#### Mangling unquoted names (`--mangle-props=unquoted` or `--mangle-props=2`)

Using quoted property name (`o["foo"]`) reserves the property name (`foo`)
so that it is not mangled throughout the entire script even when used in an
unquoted style (`o.foo`). Example:

```
$ echo 'var o={"foo":1, bar:3}; o.foo += o.bar; console.log(o.foo);' | uglifyjs --mangle-props=2 -mc
var o={"foo":1,a:3};o.foo+=o.a,console.log(o.foo);
```

#### Debugging property name mangling

You can also pass `--mangle-props-debug` in order to mangle property names
without completely obscuring them. For example the property `o.foo`
would mangle to `o._$foo$_` with this option. This allows property mangling
of a large codebase while still being able to debug the code and identify
where mangling is breaking things.

You can also pass a custom suffix using `--mangle-props-debug=XYZ`. This would then
mangle `o.foo` to `o._$foo$XYZ_`. You can change this each time you compile a
script to identify how a property got mangled. One technique is to pass a
random number on every compile to simulate mangling changing with different
inputs (e.g. as you update the input script with new properties), and to help
identify mistakes like writing mangled keys to storage.

## Compressor options

You need to pass `--compress` (`-c`) to enable the compressor.  Optionally
you can pass a comma-separated list of options.  Options are in the form
`foo=bar`, or just `foo` (the latter implies a boolean option that you want
to set `true`; it's effectively a shortcut for `foo=true`).

- `sequences` (default: true) -- join consecutive simple statements using the
  comma operator.  May be set to a positive integer to specify the maximum number
  of consecutive comma sequences that will be generated. If this option is set to
  `true` then the default `sequences` limit is `200`. Set option to `false` or `0`
  to disable. The smallest `sequences` length is `2`. A `sequences` value of `1`
  is grandfathered to be equivalent to `true` and as such means `200`. On rare
  occasions the default sequences limit leads to very slow compress times in which
  case a value of `20` or less is recommended.

- `properties` -- rewrite property access using the dot notation, for
  example `foo["bar"] → foo.bar`

- `dead_code` -- remove unreachable code

- `drop_debugger` -- remove `debugger;` statements

- `unsafe` (default: false) -- apply "unsafe" transformations (discussion below)

- `unsafe_comps` (default: false) -- Reverse `<` and `<=` to `>` and `>=` to
  allow improved compression. This might be unsafe when an at least one of two
  operands is an object with computed values due the use of methods like `get`,
  or `valueOf`. This could cause change in execution order after operands in the
  comparison are switching. Compression only works if both `comparisons` and
  `unsafe_comps` are both set to true.

- `unsafe_math` (default: false) -- optimize numerical expressions like
  `2 * x * 3` into `6 * x`, which may give imprecise floating point results.

- `unsafe_proto` (default: false) -- optimize expressions like
  `Array.prototype.slice.call(a)` into `[].slice.call(a)`

- `unsafe_regexp` (default: false) -- enable substitutions of variables with
  `RegExp` values the same way as if they are constants.

- `conditionals` -- apply optimizations for `if`-s and conditional
  expressions

- `comparisons` -- apply certain optimizations to binary nodes, for example:
  `!(a <= b) → a > b` (only when `unsafe_comps`), attempts to negate binary
  nodes, e.g. `a = !b && !c && !d && !e → a=!(b||c||d||e)` etc.

- `evaluate` -- attempt to evaluate constant expressions

- `booleans` -- various optimizations for boolean context, for example `!!a
  ? b : c → a ? b : c`

- `loops` -- optimizations for `do`, `while` and `for` loops when we can
  statically determine the condition

- `unused` -- drop unreferenced functions and variables (simple direct variable
  assignments do not count as references unless set to `"keep_assign"`)

- `toplevel` -- drop unreferenced functions (`"funcs"`) and/or variables (`"vars"`)
  in the toplevel scope (`false` by default, `true` to drop both unreferenced
  functions and variables)

- `top_retain` -- prevent specific toplevel functions and variables from `unused`
  removal (can be array, comma-separated, RegExp or function. Implies `toplevel`)

- `hoist_funs` -- hoist function declarations

- `hoist_vars` (default: false) -- hoist `var` declarations (this is `false`
  by default because it seems to increase the size of the output in general)

- `if_return` -- optimizations for if/return and if/continue

- `join_vars` -- join consecutive `var` statements

- `cascade` -- small optimization for sequences, transform `x, x` into `x`
  and `x = something(), x` into `x = something()`

- `collapse_vars` -- Collapse single-use `var` and `const` definitions
  when possible.

- `reduce_vars` -- Improve optimization on variables assigned with and
  used as constant values.

- `warnings` -- display warnings when dropping unreachable code or unused
  declarations etc.

- `negate_iife` -- negate "Immediately-Called Function Expressions"
  where the return value is discarded, to avoid the parens that the
  code generator would insert.

- `pure_getters` -- the default is `false`.  If you pass `true` for
  this, UglifyJS will assume that object property access
  (e.g. `foo.bar` or `foo["bar"]`) doesn't have any side effects.
  Specify `"strict"` to treat `foo.bar` as side-effect-free only when
  `foo` is certain to not throw, i.e. not `null` or `undefined`.

- `pure_funcs` -- default `null`.  You can pass an array of names and
  UglifyJS will assume that those functions do not produce side
  effects.  DANGER: will not check if the name is redefined in scope.
  An example case here, for instance `var q = Math.floor(a/b)`.  If
  variable `q` is not used elsewhere, UglifyJS will drop it, but will
  still keep the `Math.floor(a/b)`, not knowing what it does.  You can
  pass `pure_funcs: [ 'Math.floor' ]` to let it know that this
  function won't produce any side effect, in which case the whole
  statement would get discarded.  The current implementation adds some
  overhead (compression will be slower).

- `drop_console` -- default `false`.  Pass `true` to discard calls to
  `console.*` functions. If you wish to drop a specific function call
  such as `console.info` and/or retain side effects from function arguments
  after dropping the function call then use `pure_funcs` instead.

- `expression` -- default `false`.  Pass `true` to preserve completion values
  from terminal statements without `return`, e.g. in bookmarklets.

- `keep_fargs` -- default `true`.  Prevents the
  compressor from discarding unused function arguments.  You need this
  for code which relies on `Function.length`.

- `keep_fnames` -- default `false`.  Pass `true` to prevent the
  compressor from discarding function names.  Useful for code relying on
  `Function.prototype.name`. See also: the `keep_fnames` [mangle option](#mangle).

- `passes` -- default `1`. Number of times to run compress with a maximum of 3.
  In some cases more than one pass leads to further compressed code.  Keep in
  mind more passes will take more time.

- `keep_infinity` -- default `false`. Pass `true` to prevent `Infinity` from
  being compressed into `1/0`, which may cause performance issues on Chrome.

- `side_effects` -- default `true`. Pass `false` to disable potentially dropping
  functions marked as "pure".  A function call is marked as "pure" if a comment
  annotation `/*@__PURE__*/` or `/*#__PURE__*/` immediately precedes the call. For
  example: `/*@__PURE__*/foo();`


### The `unsafe` option

It enables some transformations that *might* break code logic in certain
contrived cases, but should be fine for most code.  You might want to try it
on your own code, it should reduce the minified size.  Here's what happens
when this flag is on:

- `new Array(1, 2, 3)` or `Array(1, 2, 3)` → `[ 1, 2, 3 ]`
- `new Object()` → `{}`
- `String(exp)` or `exp.toString()` → `"" + exp`
- `new Object/RegExp/Function/Error/Array (...)` → we discard the `new`
- `typeof foo == "undefined"` → `foo === void 0`
- `void 0` → `undefined` (if there is a variable named "undefined" in
  scope; we do it because the variable name will be mangled, typically
  reduced to a single character)

### Conditional compilation

You can use the `--define` (`-d`) switch in order to declare global
variables that UglifyJS will assume to be constants (unless defined in
scope).  For example if you pass `--define DEBUG=false` then, coupled with
dead code removal UglifyJS will discard the following from the output:
```javascript
if (DEBUG) {
	console.log("debug stuff");
}
```

You can specify nested constants in the form of `--define env.DEBUG=false`.

UglifyJS will warn about the condition being always false and about dropping
unreachable code; for now there is no option to turn off only this specific
warning, you can pass `warnings=false` to turn off *all* warnings.

Another way of doing that is to declare your globals as constants in a
separate file and include it into the build.  For example you can have a
`build/defines.js` file with the following:
```javascript
const DEBUG = false;
const PRODUCTION = true;
// etc.
```

and build your code like this:

    uglifyjs build/defines.js js/foo.js js/bar.js... -c

UglifyJS will notice the constants and, since they cannot be altered, it
will evaluate references to them to the value itself and drop unreachable
code as usual.  The build will contain the `const` declarations if you use
them. If you are targeting < ES6 environments which does not support `const`,
using `var` with `reduce_vars` (enabled by default) should suffice.

<a name="codegen-options"></a>

#### Conditional compilation, API
You can also use conditional compilation via the programmatic API. With the difference that the
property name is `global_defs` and is a compressor property:

```js
uglifyJS.minify([ "input.js"], {
    compress: {
        dead_code: true,
        global_defs: {
            DEBUG: false
        }
    }
});
```

## Beautifier options

The code generator tries to output shortest code possible by default.  In
case you want beautified output, pass `--beautify` (`-b`).  Optionally you
can pass additional arguments that control the code output:

- `beautify` (default `true`) -- whether to actually beautify the output.
  Passing `-b` will set this to true, but you might need to pass `-b` even
  when you want to generate minified code, in order to specify additional
  arguments, so you can use `-b beautify=false` to override it.
- `indent-level` (default 4)
- `indent-start` (default 0) -- prefix all lines by that many spaces
- `quote-keys` (default `false`) -- pass `true` to quote all keys in literal
  objects
- `space-colon` (default `true`) -- insert a space after the colon signs
- `ascii-only` (default `false`) -- escape Unicode characters in strings and
  regexps (affects directives with non-ascii characters becoming invalid)
- `inline-script` (default `false`) -- escape the slash in occurrences of
  `</script` in strings
- `width` (default 80) -- only takes effect when beautification is on, this
  specifies an (orientative) line width that the beautifier will try to
  obey.  It refers to the width of the line text (excluding indentation).
  It doesn't work very well currently, but it does make the code generated
  by UglifyJS more readable.
- `max-line-len` (default 32000) -- maximum line length (for uglified code)
- `bracketize` (default `false`) -- always insert brackets in `if`, `for`,
  `do`, `while` or `with` statements, even if their body is a single
  statement.
- `semicolons` (default `true`) -- separate statements with semicolons.  If
  you pass `false` then whenever possible we will use a newline instead of a
  semicolon, leading to more readable output of uglified code (size before
  gzip could be smaller; size after gzip insignificantly larger).
- `preamble` (default `null`) -- when passed it must be a string and
  it will be prepended to the output literally.  The source map will
  adjust for this text.  Can be used to insert a comment containing
  licensing information, for example.
- `quote_style` (default `0`) -- preferred quote style for strings (affects
  quoted property names and directives as well):
  - `0` -- prefers double quotes, switches to single quotes when there are
    more double quotes in the string itself.
  - `1` -- always use single quotes
  - `2` -- always use double quotes
  - `3` -- always use the original quotes
- `keep_quoted_props` (default `false`) -- when turned on, prevents stripping
  quotes from property names in object literals.

### Keeping copyright notices or other comments

You can pass `--comments` to retain certain comments in the output.  By
default it will keep JSDoc-style comments that contain "@preserve",
"@license" or "@cc_on" (conditional compilation for IE).  You can pass
`--comments all` to keep all the comments, or a valid JavaScript regexp to
keep only comments that match this regexp.  For example `--comments
'/foo|bar/'` will keep only comments that contain "foo" or "bar".

Note, however, that there might be situations where comments are lost.  For
example:
```javascript
function f() {
	/** @preserve Foo Bar */
	function g() {
	  // this function is never called
	}
	return something();
}
```

Even though it has "@preserve", the comment will be lost because the inner
function `g` (which is the AST node to which the comment is attached to) is
discarded by the compressor as not referenced.

The safest comments where to place copyright information (or other info that
needs to be kept in the output) are comments attached to toplevel nodes.

## Support for the SpiderMonkey AST

UglifyJS2 has its own abstract syntax tree format; for
[practical reasons](http://lisperator.net/blog/uglifyjs-why-not-switching-to-spidermonkey-ast/)
we can't easily change to using the SpiderMonkey AST internally.  However,
UglifyJS now has a converter which can import a SpiderMonkey AST.

For example [Acorn][acorn] is a super-fast parser that produces a
SpiderMonkey AST.  It has a small CLI utility that parses one file and dumps
the AST in JSON on the standard output.  To use UglifyJS to mangle and
compress that:

    acorn file.js | uglifyjs --spidermonkey -m -c

The `--spidermonkey` option tells UglifyJS that all input files are not
JavaScript, but JS code described in SpiderMonkey AST in JSON.  Therefore we
don't use our own parser in this case, but just transform that AST into our
internal AST.

### Use Acorn for parsing

More for fun, I added the `--acorn` option which will use Acorn to do all
the parsing.  If you pass this option, UglifyJS will `require("acorn")`.

Acorn is really fast (e.g. 250ms instead of 380ms on some 650K code), but
converting the SpiderMonkey tree that Acorn produces takes another 150ms so
in total it's a bit more than just using UglifyJS's own parser.

### Using UglifyJS to transform SpiderMonkey AST

Now you can use UglifyJS as any other intermediate tool for transforming
JavaScript ASTs in SpiderMonkey format.

Example:

```javascript
function uglify(ast, options, mangle) {
  // Conversion from SpiderMonkey AST to internal format
  var uAST = UglifyJS.AST_Node.from_mozilla_ast(ast);

  // Compression
  uAST.figure_out_scope();
  uAST = UglifyJS.Compressor(options).compress(uAST);

  // Mangling (optional)
  if (mangle) {
    uAST.figure_out_scope();
    uAST.compute_char_frequency();
    uAST.mangle_names();
  }

  // Back-conversion to SpiderMonkey AST
  return uAST.to_mozilla_ast();
}
```

Check out
[original blog post](http://rreverser.com/using-mozilla-ast-with-uglifyjs/)
for details.

API Reference
-------------

Assuming installation via NPM, you can load UglifyJS in your application
like this:
```javascript
var UglifyJS = require("uglify-js");
```

It exports a lot of names, but I'll discuss here the basics that are needed
for parsing, mangling and compressing a piece of code.  The sequence is (1)
parse, (2) compress, (3) mangle, (4) generate output code.

### The simple way

There's a single toplevel function which combines all the steps.  If you
don't need additional customization, you might want to go with `minify`.
Example:
```javascript
var result = UglifyJS.minify("/path/to/file.js");
console.log(result.code); // minified output
// if you need to pass code instead of file name
var result = UglifyJS.minify("var b = function () {};", {fromString: true});
```

You can also compress multiple files:
```javascript
var result = UglifyJS.minify([ "file1.js", "file2.js", "file3.js" ]);
console.log(result.code);
```

To generate a source map:
```javascript
var result = UglifyJS.minify([ "file1.js", "file2.js", "file3.js" ], {
	outSourceMap: "out.js.map"
});
console.log(result.code); // minified output
console.log(result.map);
```

To generate a source map with the fromString option, you can also use an object:
```javascript
var result = UglifyJS.minify({"file1.js": "var a = function () {};"}, {
  outSourceMap: "out.js.map",
  outFileName: "out.js",
  fromString: true
});
```

Note that the source map is not saved in a file, it's just returned in
`result.map`.  The value passed for `outSourceMap` is only used to set
`//# sourceMappingURL=out.js.map` in `result.code`. The value of
`outFileName` is only used to set `file` attribute in source map file.

The `file` attribute in the source map (see [the spec][sm-spec]) will
use `outFileName` firstly, if it's falsy, then will be deduced from
`outSourceMap` (by removing `'.map'`).

You can set option `sourceMapInline` to be `true` and source map will
be appended to code.

You can also specify sourceRoot property to be included in source map:
```javascript
var result = UglifyJS.minify([ "file1.js", "file2.js", "file3.js" ], {
	outSourceMap: "out.js.map",
	sourceRoot: "http://example.com/src"
});
```

If you're compressing compiled JavaScript and have a source map for it, you
can use the `inSourceMap` argument:
```javascript
var result = UglifyJS.minify("compiled.js", {
	inSourceMap: "compiled.js.map",
	outSourceMap: "minified.js.map"
});
// same as before, it returns `code` and `map`
```

If your input source map is not in a file, you can pass it in as an object
using the `inSourceMap` argument:

```javascript
var result = UglifyJS.minify("compiled.js", {
	inSourceMap: JSON.parse(my_source_map_string),
	outSourceMap: "minified.js.map"
});
```

The `inSourceMap` is only used if you also request `outSourceMap` (it makes
no sense otherwise).

To set the source map url, use the `sourceMapUrl` option.
If you're using the X-SourceMap header instead, you can just set the `sourceMapUrl` option to false.
Defaults to outSourceMap:

```javascript
var result = UglifyJS.minify([ "file1.js" ], {
  outSourceMap: "out.js.map",
  sourceMapUrl: "localhost/out.js.map"
});
```

Other options:

- `warnings` (default `false`) — pass `true` to display compressor warnings.

- `fromString` (default `false`) — if you pass `true` then you can pass
  JavaScript source code, rather than file names.

- `mangle` (default `true`) — pass `false` to skip mangling names, or pass
  an object to specify mangling options (see below).

- `mangleProperties` (default `false`) — pass an object to specify custom
  mangle property options.

- `output` (default `null`) — pass an object if you wish to specify
  additional [output options][codegen].  The defaults are optimized
  for best compression.

- `compress` (default `{}`) — pass `false` to skip compressing entirely.
  Pass an object to specify custom [compressor options][compressor].

- `parse` (default {}) — pass an object if you wish to specify some
  additional [parser options][parser]. (not all options available... see below)

##### mangle

 - `except` - pass an array of identifiers that should be excluded from mangling

 - `toplevel` — mangle names declared in the toplevel scope (disabled by
  default).

 - `eval` — mangle names visible in scopes where eval or with are used
  (disabled by default).

 - `keep_fnames` -- default `false`.  Pass `true` to not mangle
  function names.  Useful for code relying on `Function.prototype.name`.
  See also: the `keep_fnames` [compress option](#compressor-options).

  Examples:

  ```javascript
  //tst.js
  var globalVar;
  function funcName(firstLongName, anotherLongName)
  {
    var myVariable = firstLongName +  anotherLongName;
  }

  UglifyJS.minify("tst.js").code;
  // 'function funcName(a,n){}var globalVar;'

  UglifyJS.minify("tst.js", { mangle: { except: ['firstLongName'] } }).code;
  // 'function funcName(firstLongName,a){}var globalVar;'

  UglifyJS.minify("tst.js", { mangle: { toplevel: true } }).code;
  // 'function n(n,a){}var a;'
  ```

##### mangleProperties options

 - `regex` — Pass a RegExp to only mangle certain names (maps to the `--mangle-regex` CLI arguments option)
 - `ignore_quoted` – Only mangle unquoted property names (maps to the `--mangle-props 2` CLI arguments option)
 - `debug` – Mangle names with the original name still present (maps to the `--mangle-props-debug` CLI arguments option). Defaults to `false`. Pass an empty string to enable, or a non-empty string to set the suffix.

We could add more options to `UglifyJS.minify` — if you need additional
functionality please suggest!

### The hard way

Following there's more detailed API info, in case the `minify` function is
too simple for your needs.

#### The parser
```javascript
var toplevel_ast = UglifyJS.parse(code, options);
```

`options` is optional and if present it must be an object.  The following
properties are available:

- `strict` — disable automatic semicolon insertion and support for trailing
  comma in arrays and objects
- `bare_returns` — Allow return outside of functions. (maps to the
  `--bare-returns` CLI arguments option and available to `minify` `parse`
  other options object)
- `filename` — the name of the file where this code is coming from
- `toplevel` — a `toplevel` node (as returned by a previous invocation of
  `parse`)

The last two options are useful when you'd like to minify multiple files and
get a single file as the output and a proper source map.  Our CLI tool does
something like this:
```javascript
var toplevel = null;
files.forEach(function(file){
	var code = fs.readFileSync(file, "utf8");
	toplevel = UglifyJS.parse(code, {
		filename: file,
		toplevel: toplevel
	});
});
```

After this, we have in `toplevel` a big AST containing all our files, with
each token having proper information about where it came from.

#### Scope information

UglifyJS contains a scope analyzer that you need to call manually before
compressing or mangling.  Basically it augments various nodes in the AST
with information about where is a name defined, how many times is a name
referenced, if it is a global or not, if a function is using `eval` or the
`with` statement etc.  I will discuss this some place else, for now what's
important to know is that you need to call the following before doing
anything with the tree:
```javascript
toplevel.figure_out_scope()
```

#### Compression

Like this:
```javascript
var compressor = UglifyJS.Compressor(options);
var compressed_ast = compressor.compress(toplevel);
```

The `options` can be missing.  Available options are discussed above in
“Compressor options”.  Defaults should lead to best compression in most
scripts.

The compressor is destructive, so don't rely that `toplevel` remains the
original tree.

#### Mangling

After compression it is a good idea to call again `figure_out_scope` (since
the compressor might drop unused variables / unreachable code and this might
change the number of identifiers or their position).  Optionally, you can
call a trick that helps after Gzip (counting character frequency in
non-mangleable words).  Example:
```javascript
compressed_ast.figure_out_scope();
compressed_ast.compute_char_frequency();
compressed_ast.mangle_names();
```

#### Generating output

AST nodes have a `print` method that takes an output stream.  Essentially,
to generate code you do this:
```javascript
var stream = UglifyJS.OutputStream(options);
compressed_ast.print(stream);
var code = stream.toString(); // this is your minified code
```

or, for a shortcut you can do:
```javascript
var code = compressed_ast.print_to_string(options);
```

As usual, `options` is optional.  The output stream accepts a lot of options,
most of them documented above in section “Beautifier options”.  The two
which we care about here are `source_map` and `comments`.

#### Keeping comments in the output

In order to keep certain comments in the output you need to pass the
`comments` option.  Pass a RegExp (as string starting and closing with `/`
or pass a RegExp object), a boolean or a function.  Stringified options
`all` and `some` can be passed too, where `some` behaves like it's cli
equivalent `--comments` without passing a value. If you pass a RegExp,
only those comments whose body matches the RegExp will be kept.  Note that body
means without the initial `//` or `/*`.  If you pass a function, it will be
called for every comment in the tree and will receive two arguments: the
node that the comment is attached to, and the comment token itself.

The comment token has these properties:

- `type`: "comment1" for single-line comments or "comment2" for multi-line
  comments
- `value`: the comment body
- `pos` and `endpos`: the start/end positions (zero-based indexes) in the
  original code where this comment appears
- `line` and `col`: the line and column where this comment appears in the
  original code
- `file` — the file name of the original file
- `nlb` — true if there was a newline before this comment in the original
  code, or if this comment contains a newline.

Your function should return `true` to keep the comment, or a falsy value
otherwise.

#### Generating a source mapping

You need to pass the `source_map` argument when calling `print`.  It needs
to be a `SourceMap` object (which is a thin wrapper on top of the
[source-map][source-map] library).

Example:
```javascript
var source_map = UglifyJS.SourceMap(source_map_options);
var stream = UglifyJS.OutputStream({
	...
	source_map: source_map
});
compressed_ast.print(stream);

var code = stream.toString();
var map = source_map.toString(); // json output for your source map
```

The `source_map_options` (optional) can contain the following properties:

- `file`: the name of the JavaScript output file that this mapping refers to
- `root`: the `sourceRoot` property (see the [spec][sm-spec])
- `orig`: the "original source map", handy when you compress generated JS
  and want to map the minified output back to the original code where it
  came from.  It can be simply a string in JSON, or a JSON object containing
  the original source map.

  [acorn]: https://github.com/ternjs/acorn
  [source-map]: https://github.com/mozilla/source-map
  [sm-spec]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit
  [codegen]: http://lisperator.net/uglifyjs/codegen
  [compressor]: http://lisperator.net/uglifyjs/compress
  [parser]: http://lisperator.net/uglifyjs/parser

#### Support for `const`

`const` in `uglify-js@2.x` has function scope and as such behaves much like
`var` - unlike `const` in ES2015 (ES6) which has block scope. It is recommended
to avoid using `const` for this reason as it will have undefined behavior when
run on an ES2015 compatible browser.

# gensync

This module allows for developers to write common code that can share
implementation details, hiding whether an underlying request happens
synchronously or asynchronously. This is in contrast with many current Node
APIs which explicitly implement the same API twice, once with calls to
synchronous functions, and once with asynchronous functions.

Take for example `fs.readFile` and `fs.readFileSync`, if you're writing an API
that loads a file and then performs a synchronous operation on the data, it
can be frustrating to maintain two parallel functions.


## Example

```js
const fs = require("fs");
const gensync = require("gensync");

const readFile = gensync({
  sync: fs.readFileSync,
  errback: fs.readFile,
});

const myOperation = gensync(function* (filename) {
  const code = yield* readFile(filename, "utf8");

  return "// some custom prefix\n" + code;
});

// Load and add the prefix synchronously:
const result = myOperation.sync("./some-file.js");

// Load and add the prefix asynchronously with promises:
myOperation.async("./some-file.js").then(result => {

});

// Load and add the prefix asynchronously with promises:
myOperation.errback("./some-file.js", (err, result) => {

});
```

This could even be exposed as your official API by doing
```js
// Using the common 'Sync' suffix for sync functions, and 'Async' suffix for
// promise-returning versions.
exports.myOperationSync = myOperation.sync;
exports.myOperationAsync = myOperation.async;
exports.myOperation = myOperation.errback;
```
or potentially expose one of the async versions as the default, with a
`.sync` property on the function to expose the synchronous version.
```js
module.exports = myOperation.errback;
module.exports.sync = myOperation.sync;
````


## API

### gensync(generatorFnOrOptions)

Returns a function that can be "await"-ed in another `gensync` generator
function, or executed via

* `.sync(...args)` - Returns the computed value, or throws.
* `.async(...args)` - Returns a promise for the computed value.
* `.errback(...args, (err, result) => {})` - Calls the callback with the computed value, or error.


#### Passed a generator

Wraps the generator to populate the `.sync`/`.async`/`.errback` helpers above to
allow for evaluation of the generator for the final value.

##### Example

```js
const readFile = function* () {
  return 42;
};

const readFileAndMore = gensync(function* (){
  const val = yield* readFile();
  return 42 + val;
});

// In general cases
const code = readFileAndMore.sync("./file.js", "utf8");
readFileAndMore.async("./file.js", "utf8").then(code => {})
readFileAndMore.errback("./file.js", "utf8", (err, code) => {});

// In a generator being called indirectly with .sync/.async/.errback
const code = yield* readFileAndMore("./file.js", "utf8");
```


#### Passed an options object

* `opts.sync`

  Example: `(...args) => 4`

  A function that will be called when `.sync()` is called on the `gensync()`
  result, or when the result is passed to `yield*` in another generator that
  is being run synchronously.

  Also called for `.async()` calls if no async handlers are provided.

* `opts.async`

  Example: `async (...args) => 4`

  A function that will be called when `.async()` or `.errback()` is called on
  the `gensync()` result, or when the result is passed to `yield*` in another
  generator that is being run asynchronously.

* `opts.errback`

  Example: `(...args, cb) => cb(null, 4)`

  A function that will be called when `.async()` or `.errback()` is called on
  the `gensync()` result, or when the result is passed to `yield*` in another
  generator that is being run asynchronously.

  This option allows for simpler compatibility with many existing Node APIs,
  and also avoids introducing the extra even loop turns that promises introduce
  to access the result value.

* `opts.name`

  Example: `"readFile"`

  A string name to apply to the returned function. If no value is provided,
  the name of `errback`/`async`/`sync` functions will be used, with any
  `Sync` or `Async` suffix stripped off. If the callback is simply named
  with ES6 inference (same name as the options property), the name is ignored.

* `opts.arity`

  Example: `4`

  A number for the length to set on the returned function. If no value
  is provided, the length will be carried over from the `sync` function's
  `length` value.

##### Example

```js
const readFile = gensync({
  sync: fs.readFileSync,
  errback: fs.readFile,
});

const code = readFile.sync("./file.js", "utf8");
readFile.async("./file.js", "utf8").then(code => {})
readFile.errback("./file.js", "utf8", (err, code) => {});
```


### gensync.all(iterable)

`Promise.all`-like combinator that works with an iterable of generator objects
that could be passed to `yield*` within a gensync generator.

#### Example

```js
const loadFiles = gensync(function* () {
  return yield* gensync.all([
    readFile("./one.js"),
    readFile("./two.js"),
    readFile("./three.js"),
  ]);
});
```


### gensync.race(iterable)

`Promise.race`-like combinator that works with an iterable of generator objects
that could be passed to `yield*` within a gensync generator.

#### Example

```js
const loadFiles = gensync(function* () {
  return yield* gensync.race([
    readFile("./one.js"),
    readFile("./two.js"),
    readFile("./three.js"),
  ]);
});
```

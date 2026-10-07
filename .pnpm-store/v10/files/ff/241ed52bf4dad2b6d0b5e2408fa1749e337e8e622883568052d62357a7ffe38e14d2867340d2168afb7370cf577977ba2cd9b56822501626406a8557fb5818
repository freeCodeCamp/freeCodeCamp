# totalist [![build status](https://badgen.now.sh/github/status/lukeed/totalist)](https://github.com/lukeed/totalist/actions) [![codecov](https://badgen.now.sh/codecov/c/github/lukeed/totalist)](https://codecov.io/gh/lukeed/totalist)

> A tiny (195B to 224B) utility to recursively list all (total) files in a directory

Traverse a directory recursively, running a function for **every file** found.

With this module, you easily apply custom logic to decide which file(s) to process without worrying about accidentally accessing a directory or making repeat `fs.Stats` requests.

## Install

```
$ npm install --save totalist
```


## Modes

There are two "versions" of `totalist` available:

#### "async"
> **Node.js:** >= 8.x<br>
> **Size (gzip):** 220 bytes<br>
> **Availability:** [CommonJS](https://unpkg.com/totalist/dist/index.js), [ES Module](https://unpkg.com/totalist/dist/index.mjs)

This is the primary/default mode. It makes use of `async`/`await` and [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original).

#### "sync"
> **Node.js:** >= 6.x<br>
> **Size (gzip):** 195 bytes<br>
> **Availability:** [CommonJS](https://unpkg.com/totalist/sync/index.js), [ES Module](https://unpkg.com/totalist/sync/index.mjs)

This is the opt-in mode, ideal for scenarios where `async` usage cannot be supported.


## Usage

***Selecting a Mode***

```js
// import via npm module
import { totalist } from 'totalist';
import { totalist } from 'totalist/sync';
```

***Example Usage***

```js
import { totalist } from 'totalist/sync';

const styles = new Set();
const scripts = new Set();

totalist('src', (name, abs, stats) => {
  if (/\.js$/.test(name)) {
    scripts.add(abs);
    if (stats.size >= 100e3) {
      console.warn(`[WARN] "${name}" might cause performance issues (${stats.size})`);
    }
  } else if (/\.css$/.test(name)) {
    styles.add(abs);
  }
});

console.log([...scripts]);
//=> [..., '/Users/lukeed/.../src/path/to/example.css', ...]
```


## API

### totalist(dir, callback)
Returns: `void`

> **Important:** The "async" usage must be `await`ed or included within a Promise chain.

#### dir
Type: `string`<br>
Required: `true`

The directory to traverse.

This may be a relative _or_ an absolute path.

> **Note**: Node.js will assume a relative path is meant to be resolved from the current location (`process.cwd()`).

#### callback
Type: `Function`<br>
Required: `true`

The callback function to run for _every_ file.

The function receives three parameters:

##### relPath
Type: `String`<br>
The path _relative to_ the initial `dir` value you provided.

##### absPath
Type: `String`<br>
The absolute path of the file.

##### stats
Type: `fs.Stats`<br>
The [`fs.Stats`](https://nodejs.org/api/fs.html#fs_class_fs_stats) object for the file.


## License

MIT © [Luke Edwards](https://lukeed.com)

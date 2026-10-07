# npm-run-path [![Build Status](https://travis-ci.org/sindresorhus/npm-run-path.svg?branch=master)](https://travis-ci.org/sindresorhus/npm-run-path)

> Get your [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) prepended with locally installed binaries

In [npm run scripts](https://docs.npmjs.com/cli/run-script) you can execute locally installed binaries by name. This enables the same outside npm.


## Install

```
$ npm install npm-run-path
```


## Usage

```js
const childProcess = require('child_process');
const npmRunPath = require('npm-run-path');

console.log(process.env.PATH);
//=> '/usr/local/bin'

console.log(npmRunPath());
//=> '/Users/sindresorhus/dev/foo/node_modules/.bin:/Users/sindresorhus/dev/node_modules/.bin:/Users/sindresorhus/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/bin'

// `foo` is a locally installed binary
childProcess.execFileSync('foo', {
	env: npmRunPath.env()
});
```


## API

### npmRunPath(options?)

Returns the augmented path string.

#### options

Type: `object`

##### cwd

Type: `string`<br>
Default: `process.cwd()`

Working directory.

##### path

Type: `string`<br>
Default: [`PATH`](https://github.com/sindresorhus/path-key)

PATH to be appended.<br>
Set it to an empty string to exclude the default PATH.

##### execPath

Type: `string`<br>
Default: `process.execPath`

Path to the current Node.js executable. Its directory is pushed to the front of PATH.

This can be either an absolute path or a path relative to the [`cwd` option](#cwd).

### npmRunPath.env(options?)

Returns the augmented [`process.env`](https://nodejs.org/api/process.html#process_process_env) object.

#### options

Type: `object`

##### cwd

Type: `string`<br>
Default: `process.cwd()`

Working directory.

##### env

Type: `Object`

Accepts an object of environment variables, like `process.env`, and modifies the PATH using the correct [PATH key](https://github.com/sindresorhus/path-key). Use this if you're modifying the PATH for use in the `child_process` options.

##### execPath

Type: `string`<br>
Default: `process.execPath`

Path to the Node.js executable to use in child processes if that is different from the current one. Its directory is pushed to the front of PATH.

This can be either an absolute path or a path relative to the [`cwd` option](#cwd).


## Related

- [npm-run-path-cli](https://github.com/sindresorhus/npm-run-path-cli) - CLI for this module
- [execa](https://github.com/sindresorhus/execa) - Execute a locally installed binary


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-npm-run-path?utm_source=npm-npm-run-path&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>

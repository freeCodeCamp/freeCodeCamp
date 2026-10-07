# npm-run-path

> Get your [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) prepended with locally installed binaries

In [npm run scripts](https://docs.npmjs.com/cli/run-script) you can execute locally installed binaries by name. This enables the same outside npm.

## Install

```sh
npm install npm-run-path
```

## Usage

```js
import childProcess from 'node:child_process';
import {npmRunPath, npmRunPathEnv} from 'npm-run-path';

console.log(process.env.PATH);
//=> '/usr/local/bin'

console.log(npmRunPath());
//=> '/Users/sindresorhus/dev/foo/node_modules/.bin:/Users/sindresorhus/dev/node_modules/.bin:/Users/sindresorhus/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/bin'

// `foo` is a locally installed binary
childProcess.execFileSync('foo', {
	env: npmRunPathEnv()
});
```

## API

### npmRunPath(options?)

`options`: [`Options`](#options)\
_Returns_: `string`

Returns the augmented PATH string.

### npmRunPathEnv(options?)

`options`: [`Options`](#options)\
_Returns_: `object`

Returns the augmented [`process.env`](https://nodejs.org/api/process.html#process_process_env) object.

### options

Type: `object`

#### cwd

Type: `string | URL`\
Default: `process.cwd()`

The working directory.

#### execPath

Type: `string | URL`\
Default: [`process.execPath`](https://nodejs.org/api/process.html#processexecpath)

The path to the current Node.js executable.

This can be either an absolute path or a path relative to the [`cwd` option](#cwd).

#### addExecPath

Type: `boolean`\
Default: `true`

Whether to push the current Node.js executable's directory ([`execPath`](#execpath) option) to the front of PATH.

#### preferLocal

Type: `boolean`\
Default: `true`

Whether to push the locally installed binaries' directory to the front of PATH.

#### path

Type: `string`\
Default: [`PATH`](https://github.com/sindresorhus/path-key)

The PATH to be appended.

Set it to an empty string to exclude the default PATH.

Only available with [`npmRunPath()`](#npmrunpathoptions), not [`npmRunPathEnv()`](#npmrunpathenvoptions).

#### env

Type: `object`\
Default: [`process.env`](https://nodejs.org/api/process.html#processenv)

Accepts an object of environment variables, like `process.env`, and modifies the PATH using the correct [PATH key](https://github.com/sindresorhus/path-key). Use this if you're modifying the PATH for use in the `child_process` options.

Only available with [`npmRunPathEnv()`](#npmrunpathenvoptions), not [`npmRunPath()`](#npmrunpathoptions).

## Related

- [npm-run-path-cli](https://github.com/sindresorhus/npm-run-path-cli) - CLI for this module
- [execa](https://github.com/sindresorhus/execa) - Execute a locally installed binary

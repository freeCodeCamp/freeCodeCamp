# stack-utils 

> Captures and cleans stack traces.

[![Linux Build](https://travis-ci.org/tapjs/stack-utils.svg?branch=master)](https://travis-ci.org/tapjs/stack-utils) [![Build status](https://ci.appveyor.com/api/projects/status/fb9i157knoixe3iq/branch/master?svg=true)](https://ci.appveyor.com/project/jamestalmage/stack-utils-oiw96/branch/master)  [![Coverage](https://coveralls.io/repos/tapjs/stack-utils/badge.svg?branch=master&service=github)](https://coveralls.io/github/tapjs/stack-utils?branch=master)


Extracted from `lib/stack.js` in the [`node-tap` project](https://github.com/tapjs/node-tap)

## Install

```
$ npm install --save stack-utils
```


## Usage

```js
const StackUtils = require('stack-utils');
const stack = new StackUtils({cwd: process.cwd(), internals: StackUtils.nodeInternals()});

console.log(stack.clean(new Error().stack));
// outputs a beautified stack trace
```


## API


### new StackUtils([options])

Creates a new `stackUtils` instance.

#### options

##### internals

Type: `array` of `RegularExpression`s  

A set of regular expressions that match internal stack stack trace lines which should be culled from the stack trace.
`StackUtils.nodeInternals()` returns a relatively set of sensible defaults for use on the node platform.

##### cwd

Type: `string`

The path to the current working directory. File names in the stack trace will be shown relative to this directory.

##### wrapCallSite

Type: `function(CallSite)`

A mapping function for manipulating CallSites before processing. The first argument is a CallSite instance, and the function should return a modified CallSite. This is useful for providing source map support.


### StackUtils.nodeInternals()

Returns an array of regular expressions that be used to cull lines from the stack trace that reference common Node.js internal files.


### stackUtils.clean(stack)

Cleans up a stack trace by deleting any lines that match the `internals` passed to the constructor, and shortening file names relative to `cwd`.

Returns a `string` with the cleaned up stack (always terminated with a `\n` newline character).

#### stack

*Required*  
Type: `string` or an `array` of `string`s


### stackUtils.capture([limit], [startStackFunction])

Captures the current stack trace, returning an array of `CallSite`s. There are good overviews of the available CallSite methods [here](https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces), and [here](https://github.com/sindresorhus/callsites#api).

#### limit

Type: `number`
Default: `Infinity`

Limits the number of lines returned by dropping all lines in excess of the limit. This removes lines from the stack trace.

#### startStackFunction

Type: `function`

The function where the stack trace should start. The first line of the stack trace will be the function that called `startStackFunction`. This removes lines from the end of the stack trace.


### stackUtils.captureString([limit], [startStackFunction])

Captures the current stack trace, cleans it using `stackUtils.clean(stack)`, and returns a string with the cleaned stack trace. It takes the same arguments as `stackUtils.capture`.


### stackUtils.at([startStackFunction])

Captures the first line of the stack trace (or the first line after `startStackFunction` if supplied), and returns a `CallSite` like object that is serialization friendly (properties are actual values instead of getter functions). 

The available properties are:

 - `line`: `number` 
 - `column`: `number`
 - `file`: `string`
 - `constructor`: `boolean`
 - `evalOrigin`: `string`
 - `native`: `boolean`
 - `typename`: `string`
 - `function`: `string`
 - `method`: `string`

### stackUtils.parseLine(line)

Parses a `string` (which should be a single line from a stack trace), and generates an object with the following properties:

 - `line`: `number` 
 - `column`: `number`
 - `file`: `string`
 - `constructor`: `boolean`
 - `evalOrigin`: `string`
 - `evalLine`: `number`
 - `evalColumn`: `number`
 - `evalFile`: `string`
 - `native`: `boolean`
 - `function`: `string`
 - `method`: `string`


## License

MIT © [Isaac Z. Schlueter](http://github.com/isaacs), [James Talmage](http://github.com/jamestalmage)

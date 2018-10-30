# ansi-regex [![Build Status](https://travis-ci.org/chalk/ansi-regex.svg?branch=master)](https://travis-ci.org/chalk/ansi-regex)

> Regular expression for matching [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code)


## Install

```
$ npm install ansi-regex
```


## Usage

```js
const ansiRegex = require('ansi-regex');

ansiRegex().test('\u001B[4mcake\u001B[0m');
//=> true

ansiRegex().test('cake');
//=> false

'\u001B[4mcake\u001B[0m'.match(ansiRegex());
//=> ['\u001B[4m', '\u001B[0m']
```


## FAQ

### Why do you test for codes not in the ECMA 48 standard?

Some of the codes we run as a test are codes that we acquired finding various lists of non-standard or manufacturer specific codes. We test for both standard and non-standard codes, as most of them follow the same or similar format and can be safely matched in strings without the risk of removing actual string content. There are a few non-standard control codes that do not follow the traditional format (i.e. they end in numbers) thus forcing us to exclude them from the test because we cannot reliably match them.

On the historical side, those ECMA standards were established in the early 90's whereas the VT100, for example, was designed in the mid/late 70's. At that point in time, control codes were still pretty ungoverned and engineers used them for a multitude of things, namely to activate hardware ports that may have been proprietary. Somewhere else you see a similar 'anarchy' of codes is in the x86 architecture for processors; there are a ton of "interrupts" that can mean different things on certain brands of processors, most of which have been phased out.


## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Josh Junon](https://github.com/qix-)


## License

MIT

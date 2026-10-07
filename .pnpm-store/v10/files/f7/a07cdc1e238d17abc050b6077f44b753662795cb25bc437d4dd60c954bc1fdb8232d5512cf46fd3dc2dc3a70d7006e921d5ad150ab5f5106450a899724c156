# Parser function for floating point hexadecimals

[![license](https://img.shields.io/github/license/maurobringolf/@webassemblyjs/floating-point-hex-parser.svg)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/maurobringolf/@webassemblyjs/floating-point-hex-parser.svg)]()
[![npm](https://img.shields.io/npm/v/@webassemblyjs/floating-point-hex-parser.svg)]()

> A JavaScript function to parse floating point hexadecimals as defined by the [WebAssembly specification](https://webassembly.github.io/spec/core/text/values.html#text-hexfloat).

## Usage

```javascript
import parseHexFloat from '@webassemblyjs/floating-point-hex-parser'

parseHexFloat('0x1p-1')               // 0.5
parseHexFloat('0x1.921fb54442d18p+2') // 6.283185307179586
```

## Tests

This module is tested in two ways. The first one is through a small set of test cases that can be found in [test/regular.test.js](https://github.com/maurobringolf/@webassemblyjs/floating-point-hex-parser/blob/master/test/regular.test.js). The second one is non-deterministic (sometimes called *fuzzing*):

1. Generate a random IEEE754 double precision value `x`.
1. Compute its representation `y` in floating point hexadecimal format using the C standard library function `printf` since C supports this format.
1. Give both values to JS testcase and see if `parseHexFloat(y) === x`.

By default one `npm test` run tests 100 random samples. If you want to do more, you can set the environment variable `FUZZ_AMOUNT` to whatever number of runs you'd like. Because it uses one child process for each sample, it is really slow though. For more details about the randomized tests see [the source](https://github.com/maurobringolf/@webassemblyjs/floating-point-hex-parser/tree/master/test/fuzzing).

## Links

* [maurobringolf.ch/2017/12/hexadecimal-floating-point-notation/](https://maurobringolf.ch/2017/12/hexadecimal-floating-point-notation/)

* [github.com/xtuc/js-webassembly-interpreter/issues/32](https://github.com/xtuc/js-webassembly-interpreter/issues/32)

* [github.com/WebAssembly/design/issues/292](https://github.com/WebAssembly/design/issues/292)

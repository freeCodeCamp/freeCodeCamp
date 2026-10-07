# fast-decode-uri-component

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)  [![Build Status](https://travis-ci.org/delvedor/fast-decode-uri-component.svg?branch=master)](https://travis-ci.org/delvedor/fast-decode-uri-component)

Decodes strings encoded by `encodeURI` and `encodeURIComponent`, without throwing errors on invalid escapes, instead, it returns `null`.


## Installation
```
npm install fast-decode-uri-component
```

## Usage
```js
const fastDecode = require('fast-decode-uri-component')

console.log(fastDecode('test')) // 'test'
console.log(fastDecode('%25')) // '%'
console.log(fastDecode('/test/hel%2Flo')) // '/test/hel/lo'

console.log(fastDecode('/test/hel%"Flo')) // null
console.log(fastDecode('%7B%ab%7C%de%7D')) // null
console.log(fastDecode('%ab')) // null
```

## Benchmarks
You can find the benchmark file [here](https://github.com/delvedor/fast-decode-uri-component/blob/master/bench.js).
```
# fast-decode-uri-component
ok ~539 ms (0 s + 539114308 ns)

# decodeURIComponent
ok ~6.06 s (6 s + 62305153 ns)
```

## Acknowledgements
This project has been forked from [`jridgewell/safe-decode-uri-component`](https://github.com/jridgewell/safe-decode-uri-component) because I wanted to change the behaviour of the library on invalid inputs, plus change some internals.<br>
All the credits before the commit [`53000fe`](https://github.com/delvedor/fast-decode-uri-component/commit/53000feb8c268eec7a24620fd440fdd540be32b7) goes to the `jridgewell/safe-decode-uri-component` project [contributors](https://github.com/delvedor/fast-decode-uri-component/graphs/contributors).<br>
Since the commit [`9673ab7`](https://github.com/delvedor/fast-decode-uri-component/commit/9673ab7820ef92081206a9f4fd158ffe9a352861) the project will be maintained by [**@delvedor**](https://github.com/delvedor).

## License

Licensed under [MIT](./LICENSE).

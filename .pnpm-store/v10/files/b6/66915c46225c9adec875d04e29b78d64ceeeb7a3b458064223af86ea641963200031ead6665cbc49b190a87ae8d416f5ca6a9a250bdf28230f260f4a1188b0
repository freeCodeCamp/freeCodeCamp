<h1 align="center">Welcome to atomic-sleep ⏱️</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/davidmarkclem" target="_blank">
    <img alt="Twitter: davidmarkclem" src="https://img.shields.io/twitter/follow/davidmarkclem.svg?style=social" />
  </a>
</p>

> Zero CPU overhead, zero dependency, true event-loop blocking sleep

## Usage

```js
const sleep = require('atomic-sleep')

console.time('sleep')
setTimeout(() => { console.timeEnd('sleep') }, 100) 
sleep(1000)
```

The `console.time` will report a time of just over 1000ms despite the `setTimeout`
being 100ms. This is because the event loop is paused for 1000ms and the setTimeout
fires immediately after the event loop is no longer blocked (as more than 100ms have passed).

## Install

```sh
npm install
```

## Run tests

```sh
npm test
```

## Support

Node and Browser versions that support both `SharedArrayBuffer` and `Atomics` will have (virtually) zero CPU overhead sleep. 

For Node, Atomic Sleep can provide zero CPU overhead sleep from Node 8 and up.

For browser support see https://caniuse.com/#feat=sharedarraybuffer and https://caniuse.com/#feat=mdn-javascript_builtins_atomics.


For older Node versions and olders browsers we fall back to blocking the event loop in a way that will cause a CPU spike. 



## Author

👤 **David Mark Clements (@davidmarkclem)**

* Twitter: [@davidmarkclem](https://twitter.com/davidmarkclem)
* Github: [@davidmarkclements](https://github.com/davidmarkclements)

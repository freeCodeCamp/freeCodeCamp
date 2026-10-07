# Node.js ABI

[![Build Status](https://github.com/electron/node-abi/actions/workflows/test.yml/badge.svg)](https://github.com/electron/node-abi/actions/workflows/test.yml)
[![Auto-update ABI JSON file](https://github.com/electron/node-abi/actions/workflows/update-abi.yml/badge.svg)](https://github.com/electron/node-abi/actions/workflows/update-abi.yml)
[![Snyk badge](https://snyk.io/test/github/electron/node-abi/badge.svg)](https://snyk.io/test/github/electron/node-abi)
[![npm version](http://img.shields.io/npm/v/node-abi.svg)](https://npmjs.org/package/node-abi)

Get the Node ABI (application binary interface) for a given target and runtime, and vice versa.

## Installation

```shell
npm install node-abi
```

## Usage

```javascript
const nodeAbi = require('node-abi')

nodeAbi.getAbi('7.2.0', 'node')
// '51'
nodeAbi.getAbi('1.4.10', 'electron')
// '50'
nodeAbi.getTarget('51', 'node')
// '7.2.0'
nodeAbi.getTarget('50', 'electron')
// '1.4.15'

nodeAbi.allTargets
// [
//  { runtime: 'node', target: '0.10.48', abi: '11', lts: false },
//  { runtime: 'node', target: '0.12.17', abi: '14', lts: false },
//  { runtime: 'node', target: '4.6.1', abi: '46', lts: true },
//  { runtime: 'node', target: '5.12.0', abi: '47', lts: false },
//  { runtime: 'node', target: '6.9.4', abi: '48', lts: true },
//  { runtime: 'node', target: '7.4.0', abi: '51', lts: false },
//  { runtime: 'electron', target: '1.0.2', abi: '47', lts: false },
//  { runtime: 'electron', target: '1.2.8', abi: '48', lts: false },
//  { runtime: 'electron', target: '1.3.13', abi: '49', lts: false },
//  { runtime: 'electron', target: '1.4.15', abi: '50', lts: false }
// ]
nodeAbi.deprecatedTargets
nodeAbi.supportedTargets
nodeAbi.additionalTargets
nodeAbi.futureTargets
// ...
```

## References

- https://github.com/lgeiger/electron-abi
- https://nodejs.org/en/download/releases/
- https://github.com/nodejs/Release

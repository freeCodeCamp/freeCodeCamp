# detect-libc

Node.js module to detect the C standard library (libc) implementation
family and version in use on a given Linux system.

Provides a value suitable for use with the `LIBC` option of
[prebuild](https://www.npmjs.com/package/prebuild),
[prebuild-ci](https://www.npmjs.com/package/prebuild-ci) and
[prebuild-install](https://www.npmjs.com/package/prebuild-install),
therefore allowing build and provision of pre-compiled binaries
for musl-based Linux e.g. Alpine as well as glibc-based.

Currently supports libc detection of `glibc` and `musl`.

## Install

```sh
npm install detect-libc
```

## Usage

### API

```js
const { GLIBC, MUSL, family, version, isNonGlibcLinux } = require('detect-libc');
```

* `GLIBC` is a String containing the value "glibc" for comparison with `family`.
* `MUSL` is a String containing the value "musl" for comparison with `family`.
* `family` is a String representing the system libc family.
* `version` is a String representing the system libc version number.
* `isNonGlibcLinux` is a Boolean representing whether the system is a non-glibc Linux, e.g. Alpine.

### detect-libc command line tool

When run on a Linux system with a non-glibc libc,
the child command will be run with the `LIBC` environment variable
set to the relevant value.

On all other platforms will run the child command as-is.

The command line feature requires `spawnSync` provided by Node v0.12+.

```sh
detect-libc child-command
```

## Integrating with prebuild

```json
  "scripts": {
    "install": "detect-libc prebuild-install || node-gyp rebuild",
    "test": "mocha && detect-libc prebuild-ci"
  },
  "dependencies": {
    "detect-libc": "^1.0.2",
    "prebuild-install": "^2.2.0"
  },
  "devDependencies": {
    "prebuild": "^6.2.1",
    "prebuild-ci": "^2.2.3"
  }
```

## Licence

Copyright 2017 Lovell Fuller

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

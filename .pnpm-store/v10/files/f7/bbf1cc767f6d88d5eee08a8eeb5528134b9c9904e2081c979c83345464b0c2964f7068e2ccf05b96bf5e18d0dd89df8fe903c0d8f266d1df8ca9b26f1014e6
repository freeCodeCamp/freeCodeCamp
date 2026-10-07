# detect-libc

Node.js module to detect details of the C standard library (libc)
implementation provided by a given Linux system.

Currently supports detection of GNU glibc and MUSL libc.

Provides asychronous and synchronous functions for the
family (e.g. `glibc`, `musl`) and version (e.g. `1.23`, `1.2.3`).

The version numbers of libc implementations
are not guaranteed to be semver-compliant.

For previous v1.x releases, please see the
[v1](https://github.com/lovell/detect-libc/tree/v1) branch.

## Install

```sh
npm install detect-libc
```

## API

### GLIBC

```ts
const GLIBC: string = 'glibc';
```

A String constant containing the value `glibc`.

### MUSL

```ts
const MUSL: string = 'musl';
```

A String constant containing the value `musl`.

### family

```ts
function family(): Promise<string | null>;
```

Resolves asychronously with:

* `glibc` or `musl` when the libc family can be determined
* `null` when the libc family cannot be determined
* `null` when run on a non-Linux platform

```js
const { family, GLIBC, MUSL } = require('detect-libc');

switch (await family()) {
  case GLIBC: ...
  case MUSL: ...
  case null: ...
}
```

### familySync

```ts
function familySync(): string | null;
```

Synchronous version of `family()`.

```js
const { familySync, GLIBC, MUSL } = require('detect-libc');

switch (familySync()) {
  case GLIBC: ...
  case MUSL: ...
  case null: ...
}
```

### version

```ts
function version(): Promise<string | null>;
```

Resolves asychronously with:

* The version when it can be determined
* `null` when the libc family cannot be determined
* `null` when run on a non-Linux platform

```js
const { version } = require('detect-libc');

const v = await version();
if (v) {
  const [major, minor, patch] = v.split('.');
}
```

### versionSync

```ts
function versionSync(): string | null;
```

Synchronous version of `version()`.

```js
const { versionSync } = require('detect-libc');

const v = versionSync();
if (v) {
  const [major, minor, patch] = v.split('.');
}
```

### isNonGlibcLinux

```ts
function isNonGlibcLinux(): Promise<boolean>;
```

Resolves asychronously with:

* `false` when the libc family is `glibc`
* `true` when the libc family is not `glibc`
* `false` when run on a non-Linux platform

```js
const { isNonGlibcLinux } = require('detect-libc');

if (await isNonGlibcLinux()) { ... }
```

### isNonGlibcLinuxSync

```ts
function isNonGlibcLinuxSync(): boolean;
```

Synchronous version of `isNonGlibcLinux()`.

```js
const { isNonGlibcLinuxSync } = require('detect-libc');

if (isNonGlibcLinuxSync()) { ... }
```

## Licensing

Copyright 2017 Lovell Fuller and others.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

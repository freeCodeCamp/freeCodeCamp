NOTE: The default branch has been renamed!
master is now named main

If you have a local clone, you can update it by running:

```shell
git branch -m master main
git fetch origin
git branch -u origin/main main
```

# **node-addon-api module**
This module contains  **header-only C++ wrapper classes** which simplify
the use of the C based [Node-API](https://nodejs.org/dist/latest/docs/api/n-api.html)
provided by Node.js when using C++. It provides a C++ object model
and exception handling semantics with low overhead.

There are three options for implementing addons: Node-API, nan, or direct
use of internal V8, libuv, and Node.js libraries. Unless there is a need for
direct access to functionality that is not exposed by Node-API as outlined
in [C/C++ addons](https://nodejs.org/dist/latest/docs/api/addons.html)
in Node.js core, use Node-API. Refer to
[C/C++ addons with Node-API](https://nodejs.org/dist/latest/docs/api/n-api.html)
for more information on Node-API.

Node-API is an ABI stable C interface provided by Node.js for building native
addons. It is independent of the underlying JavaScript runtime (e.g. V8 or ChakraCore)
and is maintained as part of Node.js itself. It is intended to insulate
native addons from changes in the underlying JavaScript engine and allow
modules compiled for one version to run on later versions of Node.js without
recompilation.

The `node-addon-api` module, which is not part of Node.js, preserves the benefits
of the Node-API as it consists only of inline code that depends only on the stable API
provided by Node-API. As such, modules built against one version of Node.js
using node-addon-api should run without having to be rebuilt with newer versions
of Node.js.

It is important to remember that *other* Node.js interfaces such as
`libuv` (included in a project via `#include <uv.h>`) are not ABI-stable across
Node.js major versions. Thus, an addon must use Node-API and/or `node-addon-api`
exclusively and build against a version of Node.js that includes an
implementation of Node-API (meaning an active LTS version of Node.js) in
order to benefit from ABI stability across Node.js major versions. Node.js
provides an [ABI stability guide][] containing a detailed explanation of ABI
stability in general, and the Node-API ABI stability guarantee in particular.

As new APIs are added to Node-API, node-addon-api must be updated to provide
wrappers for those new APIs. For this reason, node-addon-api provides
methods that allow callers to obtain the underlying Node-API handles so
direct calls to Node-API and the use of the objects/methods provided by
node-addon-api can be used together. For example, in order to be able
to use an API for which the node-addon-api does not yet provide a wrapper.

APIs exposed by node-addon-api are generally used to create and
manipulate JavaScript values. Concepts and operations generally map
to ideas specified in the **ECMA262 Language Specification**.

The [Node-API Resource](https://nodejs.github.io/node-addon-examples/) offers an
excellent orientation and tips for developers just getting started with Node-API
and node-addon-api.

- **[Setup](#setup)**
- **[API Documentation](#api)**
- **[Examples](#examples)**
- **[Tests](#tests)**
- **[More resource and info about native Addons](#resources)**
- **[Badges](#badges)**
- **[Code of Conduct](CODE_OF_CONDUCT.md)**
- **[Contributors](#contributors)**
- **[License](#license)**

## **Current version: 7.1.1**

(See [CHANGELOG.md](CHANGELOG.md) for complete Changelog)

[![NPM](https://nodei.co/npm/node-addon-api.png?downloads=true&downloadRank=true)](https://nodei.co/npm/node-addon-api/) [![NPM](https://nodei.co/npm-dl/node-addon-api.png?months=6&height=1)](https://nodei.co/npm/node-addon-api/)

<a name="setup"></a>

node-addon-api is based on [Node-API](https://nodejs.org/api/n-api.html) and supports using different Node-API versions.
This allows addons built with it to run with Node.js versions which support the targeted Node-API version.
**However** the node-addon-api support model is to support only the active LTS Node.js versions. This means that
every year there will be a new major which drops support for the Node.js LTS version which has gone out of service.

The oldest Node.js version supported by the current version of node-addon-api is Node.js 16.x.

## Setup
  - [Installation and usage](doc/setup.md)
  - [node-gyp](doc/node-gyp.md)
  - [cmake-js](doc/cmake-js.md)
  - [Conversion tool](doc/conversion-tool.md)
  - [Checker tool](doc/checker-tool.md)
  - [Generator](doc/generator.md)
  - [Prebuild tools](doc/prebuild_tools.md)

<a name="api"></a>

### **API Documentation**

The following is the documentation for node-addon-api.

 - [Full Class Hierarchy](doc/hierarchy.md)
 - [Addon Structure](doc/addon.md)
 - Data Types:
    - [Env](doc/env.md)
    - [CallbackInfo](doc/callbackinfo.md)
    - [Reference](doc/reference.md)
    - [Value](doc/value.md)
        - [Name](doc/name.md)
            - [Symbol](doc/symbol.md)
            - [String](doc/string.md)
        - [Number](doc/number.md)
        - [Date](doc/date.md)
        - [BigInt](doc/bigint.md)
        - [Boolean](doc/boolean.md)
        - [External](doc/external.md)
        - [Object](doc/object.md)
            - [Array](doc/array.md)
            - [ObjectReference](doc/object_reference.md)
    - [PropertyDescriptor](doc/property_descriptor.md)
    - [Function](doc/function.md)
        - [FunctionReference](doc/function_reference.md)
    - [ObjectWrap](doc/object_wrap.md)
        - [ClassPropertyDescriptor](doc/class_property_descriptor.md)
    - [Buffer](doc/buffer.md)
    - [ArrayBuffer](doc/array_buffer.md)
    - [TypedArray](doc/typed_array.md)
      - [TypedArrayOf](doc/typed_array_of.md)
    - [DataView](doc/dataview.md)
 - [Error Handling](doc/error_handling.md)
    - [Error](doc/error.md)
      - [TypeError](doc/type_error.md)
      - [RangeError](doc/range_error.md)
      - [SyntaxError](doc/syntax_error.md)
 - [Object Lifetime Management](doc/object_lifetime_management.md)
    - [HandleScope](doc/handle_scope.md)
    - [EscapableHandleScope](doc/escapable_handle_scope.md)
 - [Memory Management](doc/memory_management.md)
 - [Async Operations](doc/async_operations.md)
    - [AsyncWorker](doc/async_worker.md)
    - [AsyncContext](doc/async_context.md)
    - [AsyncWorker Variants](doc/async_worker_variants.md)
 - [Thread-safe Functions](doc/threadsafe.md)
    - [ThreadSafeFunction](doc/threadsafe_function.md)
    - [TypedThreadSafeFunction](doc/typed_threadsafe_function.md)
 - [Promises](doc/promises.md)
 - [Version management](doc/version_management.md)

<a name="examples"></a>

### **Examples**

Are you new to **node-addon-api**? Take a look at our **[examples](https://github.com/nodejs/node-addon-examples)**

- **[Hello World](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/1_hello_world)**
- **[Pass arguments to a function](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/2_function_arguments/node-addon-api)**
- **[Callbacks](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/3_callbacks/node-addon-api)**
- **[Object factory](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/4_object_factory/node-addon-api)**
- **[Function factory](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/5_function_factory/node-addon-api)**
- **[Wrapping C++ Object](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/6_object_wrap/node-addon-api)**
- **[Factory of wrapped object](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/7_factory_wrap/node-addon-api)**
- **[Passing wrapped object around](https://github.com/nodejs/node-addon-examples/tree/main/src/2-js-to-native-conversion/8_passing_wrapped/node-addon-api)**

<a name="tests"></a>

### **Tests**

To run the **node-addon-api** tests do:

```
npm install
npm test
```

To avoid testing the deprecated portions of the API run
```
npm install
npm test --disable-deprecated
```

To run the tests targeting a specific version of Node-API run
```
npm install
export NAPI_VERSION=X
npm test --NAPI_VERSION=X
```

where X is the version of Node-API you want to target.

To run a specific unit test, filter conditions are available

**Example:**
  compile and run only tests on objectwrap.cc and objectwrap.js
  ```
    npm run unit --filter=objectwrap
  ```

Multiple unit tests cane be selected with wildcards

**Example:**
compile and run all test files ending with "reference" -> function_reference.cc, object_reference.cc, reference.cc
 ```
    npm run unit --filter=*reference
 ```

Multiple filter conditions can be joined to broaden the test selection

**Example:**
 compile and run all tests under folders threadsafe_function and typed_threadsafe_function and also the objectwrap.cc file
    npm run unit --filter='*function objectwrap'

### **Debug**

To run the **node-addon-api** tests with `--debug` option:

```
npm run-script dev
```

If you want a faster build, you might use the following option:

```
npm run-script dev:incremental
```

Take a look and get inspired by our **[test suite](https://github.com/nodejs/node-addon-api/tree/HEAD/test)**

### **Benchmarks**

You can run the available benchmarks using the following command:

```
npm run-script benchmark
```

See [benchmark/README.md](benchmark/README.md) for more details about running and adding benchmarks.

<a name="resources"></a>

### **More resource and info about native Addons**
- **[C++ Addons](https://nodejs.org/dist/latest/docs/api/addons.html)**
- **[Node-API](https://nodejs.org/dist/latest/docs/api/n-api.html)**
- **[Node-API - Next Generation Node API for Native Modules](https://youtu.be/-Oniup60Afs)**
- **[How We Migrated Realm JavaScript From NAN to Node-API](https://developer.mongodb.com/article/realm-javascript-nan-to-n-api)**

As node-addon-api's core mission is to expose the plain C Node-API as C++
wrappers, tools that facilitate n-api/node-addon-api providing more
convenient patterns for developing a Node.js add-on with n-api/node-addon-api
can be published to NPM as standalone packages. It is also recommended to tag
such packages with `node-addon-api` to provide more visibility to the community.

Quick links to NPM searches: [keywords:node-addon-api](https://www.npmjs.com/search?q=keywords%3Anode-addon-api).

<a name="other-bindings"></a>

### **Other bindings**

- **[napi-rs](https://napi.rs)** - (`Rust`)

<a name="badges"></a>

### **Badges**

The use of badges is recommended to indicate the minimum version of Node-API
required for the module. This helps to determine which Node.js major versions are
supported. Addon maintainers can consult the [Node-API support matrix][] to determine
which Node.js versions provide a given Node-API version. The following badges are
available:

![Node-API v1 Badge](https://github.com/nodejs/abi-stable-node/blob/doc/assets/Node-API%20v1%20Badge.svg)
![Node-API v2 Badge](https://github.com/nodejs/abi-stable-node/blob/doc/assets/Node-API%20v2%20Badge.svg)
![Node-API v3 Badge](https://github.com/nodejs/abi-stable-node/blob/doc/assets/Node-API%20v3%20Badge.svg)
![Node-API v4 Badge](https://github.com/nodejs/abi-stable-node/blob/doc/assets/Node-API%20v4%20Badge.svg)
![Node-API v5 Badge](https://github.com/nodejs/abi-stable-node/blob/doc/assets/Node-API%20v5%20Badge.svg)
![Node-API v6 Badge](https://github.com/nodejs/abi-stable-node/blob/doc/assets/Node-API%20v6%20Badge.svg)
![Node-API v7 Badge](https://github.com/nodejs/abi-stable-node/blob/doc/assets/Node-API%20v7%20Badge.svg)
![Node-API v8 Badge](https://github.com/nodejs/abi-stable-node/blob/doc/assets/Node-API%20v8%20Badge.svg)
![Node-API v9 Badge](https://github.com/nodejs/abi-stable-node/blob/doc/assets/Node-API%20v9%20Badge.svg)
![Node-API Experimental Version Badge](https://github.com/nodejs/abi-stable-node/blob/doc/assets/Node-API%20Experimental%20Version%20Badge.svg)

## **Contributing**

We love contributions from the community to **node-addon-api**!
See [CONTRIBUTING.md](CONTRIBUTING.md) for more details on our philosophy around extending this module.

<a name="contributors"></a>

## Team members

### Active
| Name                | GitHub Link                                           |
| ------------------- | ----------------------------------------------------- |
| Anna Henningsen     | [addaleax](https://github.com/addaleax)               |
| Chengzhong Wu       | [legendecas](https://github.com/legendecas)           |
| Jack Xia            | [JckXia](https://github.com/JckXia)                   |
| Kevin Eady          | [KevinEady](https://github.com/KevinEady)             |
| Michael Dawson      | [mhdawson](https://github.com/mhdawson)               |
| Nicola Del Gobbo    | [NickNaso](https://github.com/NickNaso)               |
| Vladimir Morozov    | [vmoroz](https://github.com/vmoroz)                   |

### Emeritus
| Name                | GitHub Link                                           |
| ------------------- | ----------------------------------------------------- |
| Arunesh Chandra     | [aruneshchandra](https://github.com/aruneshchandra)   |
| Benjamin Byholm     | [kkoopa](https://github.com/kkoopa)                   |
| Gabriel Schulhof    | [gabrielschulhof](https://github.com/gabrielschulhof) |
| Hitesh Kanwathirtha | [digitalinfinity](https://github.com/digitalinfinity) |
| Jason Ginchereau    | [jasongin](https://github.com/jasongin)               |
| Jim Schlight        | [jschlight](https://github.com/jschlight)             |
| Sampson Gao         | [sampsongao](https://github.com/sampsongao)           |
| Taylor Woll         | [boingoing](https://github.com/boingoing)             |

<a name="license"></a>

Licensed under [MIT](./LICENSE.md)

[ABI stability guide]: https://nodejs.org/en/docs/guides/abi-stability/
[Node-API support matrix]: https://nodejs.org/dist/latest/docs/api/n-api.html#n_api_n_api_version_matrix

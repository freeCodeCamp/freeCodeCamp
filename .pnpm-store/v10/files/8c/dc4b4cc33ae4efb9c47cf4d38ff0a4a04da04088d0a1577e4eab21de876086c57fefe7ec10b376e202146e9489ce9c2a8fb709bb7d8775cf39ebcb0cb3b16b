<h1 align="center">
	<img width="250" src="https://jaredwray.com/images/keyv.svg" alt="keyv">
	<br>
	<br>
</h1>

> Simple key-value storage with support for multiple backends

[![build](https://github.com/jaredwray/keyv/actions/workflows/tests.yaml/badge.svg)](https://github.com/jaredwray/keyv/actions/workflows/tests.yaml)
[![codecov](https://codecov.io/gh/jaredwray/keyv/branch/main/graph/badge.svg?token=bRzR3RyOXZ)](https://codecov.io/gh/jaredwray/keyv)
[![npm](https://img.shields.io/npm/dm/keyv.svg)](https://www.npmjs.com/package/keyv)
[![npm](https://img.shields.io/npm/v/keyv.svg)](https://www.npmjs.com/package/keyv)

Keyv provides a consistent interface for key-value storage across multiple backends via storage adapters. It supports TTL based expiry, making it suitable as a cache or a persistent key-value store.

## Features

There are a few existing modules similar to Keyv, however Keyv is different because it:

- Isn't bloated
- Has a simple Promise based API
- Suitable as a TTL based cache or persistent key-value store
- [Easily embeddable](#add-cache-support-to-your-module) inside another module
- Works with any storage that implements the [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) API
- Handles all JSON types plus `Buffer`
- Supports namespaces
- Wide range of [**efficient, well tested**](#official-storage-adapters) storage adapters
- Connection errors are passed through (db failures won't kill your app)
- Supports the current active LTS version of Node.js or higher

## Usage

Install Keyv.

```
npm install --save keyv
```

By default everything is stored in memory, you can optionally also install a storage adapter.

```
npm install --save @keyv/redis
npm install --save @keyv/mongo
npm install --save @keyv/sqlite
npm install --save @keyv/postgres
npm install --save @keyv/mysql
npm install --save @keyv/etcd
```

Create a new Keyv instance, passing your connection string if applicable. Keyv will automatically load the correct storage adapter.

```js
const Keyv = require('keyv');

// One of the following
const keyv = new Keyv();
const keyv = new Keyv('redis://user:pass@localhost:6379');
const keyv = new Keyv('mongodb://user:pass@localhost:27017/dbname');
const keyv = new Keyv('sqlite://path/to/database.sqlite');
const keyv = new Keyv('postgresql://user:pass@localhost:5432/dbname');
const keyv = new Keyv('mysql://user:pass@localhost:3306/dbname');
const keyv = new Keyv('etcd://localhost:2379');

// Handle DB connection errors
keyv.on('error', err => console.log('Connection Error', err));

await keyv.set('foo', 'expires in 1 second', 1000); // true
await keyv.set('foo', 'never expires'); // true
await keyv.get('foo'); // 'never expires'
await keyv.delete('foo'); // true
await keyv.clear(); // undefined
```

### Namespaces

You can namespace your Keyv instance to avoid key collisions and allow you to clear only a certain namespace while using the same database.

```js
const users = new Keyv('redis://user:pass@localhost:6379', { namespace: 'users' });
const cache = new Keyv('redis://user:pass@localhost:6379', { namespace: 'cache' });

await users.set('foo', 'users'); // true
await cache.set('foo', 'cache'); // true
await users.get('foo'); // 'users'
await cache.get('foo'); // 'cache'
await users.clear(); // undefined
await users.get('foo'); // undefined
await cache.get('foo'); // 'cache'
```

### Custom Serializers

Keyv uses [`json-buffer`](https://github.com/dominictarr/json-buffer) for data serialization to ensure consistency across different backends.

You can optionally provide your own serialization functions to support extra data types or to serialize to something other than JSON.

```js
const keyv = new Keyv({ serialize: JSON.stringify, deserialize: JSON.parse });
```

**Warning:** Using custom serializers means you lose any guarantee of data consistency. You should do extensive testing with your serialisation functions and chosen storage engine.

## Official Storage Adapters

The official storage adapters are covered by [over 150 integration tests](https://github.com/jaredwray/keyv/actions/workflows/tests.yaml) to guarantee consistent behaviour. They are lightweight, efficient wrappers over the DB clients making use of indexes and native TTLs where available.

Database | Adapter | Native TTL
---|---|---
Redis | [@keyv/redis](https://github.com/jaredwray/keyv/tree/master/packages/redis) | Yes
MongoDB | [@keyv/mongo](https://github.com/jaredwray/keyv/tree/master/packages/mongo) | Yes 
SQLite | [@keyv/sqlite](https://github.com/jaredwray/keyv/tree/master/packages/sqlite) | No 
PostgreSQL | [@keyv/postgres](https://github.com/jaredwray/keyv/tree/master/packages/postgres) | No 
MySQL | [@keyv/mysql](https://github.com/jaredwray/keyv/tree/master/packages/mysql) | No 
Etcd | [@keyv/etcd](https://github.com/jaredwray/keyv/tree/master/packages/etcd) | Yes
Memcache | [@keyv/memcache](https://github.com/jaredwray/keyv/tree/master/packages/memcache) | Yes

## Third-party Storage Adapters

You can also use third-party storage adapters or build your own. Keyv will wrap these storage adapters in TTL functionality and handle complex types internally.

```js
const Keyv = require('keyv');
const myAdapter = require('./my-storage-adapter');

const keyv = new Keyv({ store: myAdapter });
```

Any store that follows the [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) api will work.

```js
new Keyv({ store: new Map() });
```

For example, [`quick-lru`](https://github.com/sindresorhus/quick-lru) is a completely unrelated module that implements the Map API.

```js
const Keyv = require('keyv');
const QuickLRU = require('quick-lru');

const lru = new QuickLRU({ maxSize: 1000 });
const keyv = new Keyv({ store: lru });
```

The following are third-party storage adapters compatible with Keyv:

- [quick-lru](https://github.com/sindresorhus/quick-lru) - Simple "Least Recently Used" (LRU) cache
- [keyv-file](https://github.com/zaaack/keyv-file) - File system storage adapter for Keyv
- [keyv-dynamodb](https://www.npmjs.com/package/keyv-dynamodb) - DynamoDB storage adapter for Keyv
- [keyv-lru](https://www.npmjs.com/package/keyv-lru) - LRU storage adapter for Keyv
- [keyv-null](https://www.npmjs.com/package/keyv-null) - Null storage adapter for Keyv
- [keyv-firestore ](https://github.com/goto-bus-stop/keyv-firestore) – Firebase Cloud Firestore adapter for Keyv
- [keyv-mssql](https://github.com/pmorgan3/keyv-mssql) - Microsoft Sql Server adapter for Keyv
- [keyv-azuretable](https://github.com/howlowck/keyv-azuretable) - Azure Table Storage/API adapter for Keyv
- [keyv-arango](https://github.com/TimMikeladze/keyv-arango) - ArangoDB storage adapter for Keyv
- [keyv-momento](https://github.com/momentohq/node-keyv-adaptor/) - Momento storage adapter for Keyv

## Add Cache Support to your Module

Keyv is designed to be easily embedded into other modules to add cache support. The recommended pattern is to expose a `cache` option in your modules options which is passed through to Keyv. Caching will work in memory by default and users have the option to also install a Keyv storage adapter and pass in a connection string, or any other storage that implements the `Map` API.

You should also set a namespace for your module so you can safely call `.clear()` without clearing unrelated app data.

Inside your module:

```js
class AwesomeModule {
	constructor(opts) {
		this.cache = new Keyv({
			uri: typeof opts.cache === 'string' && opts.cache,
			store: typeof opts.cache !== 'string' && opts.cache,
			namespace: 'awesome-module'
		});
	}
}
```

Now it can be consumed like this:

```js
const AwesomeModule = require('awesome-module');

// Caches stuff in memory by default
const awesomeModule = new AwesomeModule();

// After npm install --save keyv-redis
const awesomeModule = new AwesomeModule({ cache: 'redis://localhost' });

// Some third-party module that implements the Map API
const awesomeModule = new AwesomeModule({ cache: some3rdPartyStore });
```

## Compression

Keyv supports `gzip` and `brotli` compression. To enable compression, pass the `compress` option to the constructor.

```js
const KeyvGzip = require('@keyv/compress-gzip');
const Keyv = require('keyv');

const keyvGzip = new KeyvGzip();
const keyv = new Keyv({ compression: KeyvGzip });
```

You can also pass a custom compression function to the `compression` option. Following the pattern of the official compression adapters.

### Want to build your own? 

Great! Keyv is designed to be easily extended. You can build your own compression adapter by following the pattern of the official compression adapters based on this interface:

```typescript
interface CompressionAdapter {
	async compress(value: any, options?: any);
	async decompress(value: any, options?: any);
	async serialize(value: any);
	async deserialize(value: any);
}
```

In addition to the interface, you can test it with our compression test suite using @keyv/test-suite:

```js
const {keyvCompresstionTests} = require('@keyv/test-suite');
const KeyvGzip = require('@keyv/compress-gzip');

keyvCompresstionTests(test, new KeyvGzip());
```

## API

### new Keyv([uri], [options])

Returns a new Keyv instance.

The Keyv instance is also an `EventEmitter` that will emit an `'error'` event if the storage adapter connection fails.

### uri

Type: `String`<br>
Default: `undefined`

The connection string URI.

Merged into the options object as options.uri.

### options

Type: `Object`

The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.

#### options.namespace

Type: `String`<br>
Default: `'keyv'`

Namespace for the current instance.

#### options.ttl

Type: `Number`<br>
Default: `undefined`

Default TTL. Can be overridden by specififying a TTL on `.set()`.

#### options.compression

Type: `@keyv/compress-<compression_package_name>`<br>
Default: `undefined`

Compression package to use. See [Compression](#compression) for more details.

#### options.serialize

Type: `Function`<br>
Default: `JSONB.stringify`

A custom serialization function.

#### options.deserialize

Type: `Function`<br>
Default: `JSONB.parse`

A custom deserialization function.

#### options.store

Type: `Storage adapter instance`<br>
Default: `new Map()`

The storage adapter instance to be used by Keyv.

#### options.adapter

Type: `String`<br>
Default: `undefined`

Specify an adapter to use. e.g `'redis'` or `'mongodb'`.

### Instance

Keys must always be strings. Values can be of any type.

#### .set(key, value, [ttl])

Set a value.

By default keys are persistent. You can set an expiry TTL in milliseconds.

Returns a promise which resolves to `true`.

#### .get(key, [options])

Returns a promise which resolves to the retrieved value.

##### options.raw

Type: `Boolean`<br>
Default: `false`

If set to true the raw DB object Keyv stores internally will be returned instead of just the value.

This contains the TTL timestamp.

#### .delete(key)

Deletes an entry.

Returns a promise which resolves to `true` if the key existed, `false` if not.

#### .clear()

Delete all entries in the current namespace.

Returns a promise which is resolved when the entries have been cleared.

#### .iterator()

Iterate over all entries of the current namespace.

Returns a iterable that can be iterated by for-of loops. For example:

```js
// please note that the "await" keyword should be used here
for await (const [key, value] of this.keyv.iterator()) {
  console.log(key, value);
};
```

# How to Contribute

In this section of the documentation we will cover:

1) How to set up this repository locally
2) How to get started with running commands
3) How to contribute changes using Pull Requests

## Dependencies

This package requires the following dependencies to run:

1) [Yarn V1](https://yarnpkg.com/getting-started/install)
3) [Docker](https://docs.docker.com/get-docker/)

## Setting up your workspace

To contribute to this repository, start by setting up this project locally:

1) Fork this repository into your Git account
2) Clone the forked repository to your local directory using `git clone`
3) Install any of the above missing dependencies

## Launching the project

Once the project is installed locally, you are ready to start up its services:

1) Ensure that your Docker service is running.
2) From the root directory of your project, run the `yarn` command in the command prompt to install yarn.
3) Run the `yarn bootstrap` command to  install any necessary dependencies.
4) Run `yarn test:services:start` to start up this project's Docker container. The container will launch all services within your workspace.

## Available Commands

Once the project is running, you can execute a variety of commands. The root workspace and each subpackage contain a `package.json` file with a  `scripts` field listing all the commands that can be executed from that directory. This project also supports native `yarn`, and `docker` commands.

Here, we'll cover the primary commands that can be executed from the root directory. Unless otherwise noted, these commands can also be executed from a subpackage. If executed from a subpackage, they will only affect that subpackage, rather than the entire workspace.

### `yarn`

The `yarn` command installs yarn in the workspace.

### `yarn bootstrap`

The `yarn bootstrap` command installs all dependencies in the workspace.

### `yarn test:services:start`

The `yarn test:services:start` command starts up the project's Docker container, launching all services in the workspace. This command must be executed from the root directory.

### `yarn test:services:stop`

The `yarn test:services:stop` command brings down the project's Docker container, halting all services. This command must be executed from the root directory.

### `yarn test`

The `yarn test` command runs all tests in the workspace.

### `yarn clean`

The `yarn clean` command removes yarn and all dependencies installed by yarn. After executing this command, you must repeat the steps in *Setting up your workspace* to rebuild your workspace.

## Contributing Changes

Now that you've set up your workspace, you're ready to contribute changes to the `keyv` repository.

1) Make any changes that you would like to contribute in your local workspace.
2) After making these changes, ensure that the project's tests still pass by executing the `yarn test` command in the root directory.
3) Commit your changes and push them to your forked repository.
4) Navigate to the original `keyv` repository and go the *Pull Requests* tab.
5) Click the *New pull request* button, and open a pull request for the branch in your repository that contains your changes.
6) Once your pull request is created, ensure that all checks have passed and that your branch has no conflicts with the base branch. If there are any issues, resolve these changes in your local repository, and then commit and push them to git.
7) Similarly, respond to any reviewer comments or requests for changes by making edits to your local repository and pushing them to Git.
8) Once the pull request has been reviewed, those with write access to the branch will be able to merge your changes into the `keyv` repository.

If you need more information on the steps to create a pull request, you can find a detailed walkthrough in the [Github documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

## License

MIT © Jared Wray

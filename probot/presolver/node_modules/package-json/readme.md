# package-json [![Build Status](https://travis-ci.org/sindresorhus/package-json.svg?branch=master)](https://travis-ci.org/sindresorhus/package-json)

> Get metadata of a package from the npm registry


## Install

```
$ npm install --save package-json
```


## Usage

```js
const packageJson = require('package-json');

packageJson('ava').then(json => {
	console.log(json);
	//=> {name: 'ava', ...}
});

// Also works with scoped packages
packageJson('@sindresorhus/df').then(json => {
	console.log(json);
	//=> {name: '@sindresorhus/df', ...}
});
```


## API

### packageJson(name, [options])

#### name

Type: `string`

Name of the package.

#### options

Type: `Object`

##### version

Type: `string`<br>
Default: `latest`

Package version such as `1.0.0` or a [dist tag](https://docs.npmjs.com/cli/dist-tag) such as `latest`.

The version can also be in any format supported by the [semver](https://github.com/npm/node-semver) module. For example:

- `1` - get the latest `1.x.x`
- `1.2` - get the latest `1.2.x`
- `^1.2.3` - get the latest `1.x.x` but at least `1.2.3`
- `~1.2.3` - get the latest `1.2.x` but at least `1.2.3`

##### fullMetadata

Type: `boolean`<br>
Default: `false`

By default, only an abbreviated metadata object is returned for performance reasons. [Read more.](https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md)

##### allVersions

Type: `boolean`<br>
Default: `false`

Return the [main entry](https://registry.npmjs.org/ava) containing all versions.


## Authentication

Both public and private registries are supported, for both scoped and unscoped packages, as long as the registry uses either bearer tokens or basic authentication.


## Related

- [package-json-cli](https://github.com/sindresorhus/package-json-cli) - CLI for this module
- [latest-version](https://github.com/sindresorhus/latest-version) - Get the latest version of an npm package
- [pkg-versions](https://github.com/sindresorhus/pkg-versions) - Get the version numbers of a package from the npm registry
- [npm-keyword](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword
- [npm-user](https://github.com/sindresorhus/npm-user) - Get user info of an npm user
- [npm-email](https://github.com/sindresorhus/npm-email) - Get the email of an npm user


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

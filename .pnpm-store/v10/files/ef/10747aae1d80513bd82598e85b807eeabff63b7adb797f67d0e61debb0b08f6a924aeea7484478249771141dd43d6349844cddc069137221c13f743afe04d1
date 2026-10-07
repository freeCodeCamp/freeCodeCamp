# package-json

> Get metadata of a package from the npm registry

## Install

```sh
npm install package-json
```

## Usage

```js
import packageJson from 'package-json';

console.log(await packageJson('ava'));
//=> {name: 'ava', …}

// Also works with scoped packages
console.log(await packageJson('@sindresorhus/df'));
```

## API

### packageJson(packageName, options?)

#### packageName

Type: `string`

Name of the package.

#### options

Type: `object`

##### version

Type: `string`\
Default: `latest`

Package version such as `1.0.0` or a [dist tag](https://docs.npmjs.com/cli/dist-tag) such as `latest`.

The version can also be in any format supported by the [semver](https://github.com/npm/node-semver) module. For example:

- `1` - Get the latest `1.x.x`
- `1.2` - Get the latest `1.2.x`
- `^1.2.3` - Get the latest `1.x.x` but at least `1.2.3`
- `~1.2.3` - Get the latest `1.2.x` but at least `1.2.3`

##### fullMetadata

Type: `boolean`\
Default: `false`

By default, only an abbreviated metadata object is returned for performance reasons. [Read more.](https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md)

##### allVersions

Type: `boolean`\
Default: `false`

Return the [main entry](https://registry.npmjs.org/ava) containing all versions.

##### registryUrl

Type: `string`\
Default: Auto-detected

The registry URL is by default inferred from the npm defaults and `.npmrc`. This is beneficial as `package-json` and any project using it will work just like npm. This option is **only** intended for internal tools. You should **not** use this option in reusable packages. Prefer just using `.npmrc` whenever possible.

##### agent

Type: `object`

Overwrite the `agent` option that is passed down to [`got`](https://github.com/sindresorhus/got#agent). This might be useful to add [proxy support](https://github.com/sindresorhus/got#proxies).

### PackageNotFoundError

The error thrown when the given package name cannot be found.

### VersionNotFoundError

The error thrown when the given package version cannot be found.

## Authentication

Both public and private registries are supported, for both scoped and unscoped packages, as long as the registry uses either bearer tokens or basic authentication.

## Related

- [package-json-cli](https://github.com/sindresorhus/package-json-cli) - CLI for this module
- [latest-version](https://github.com/sindresorhus/latest-version) - Get the latest version of an npm package
- [pkg-versions](https://github.com/sindresorhus/pkg-versions) - Get the version numbers of a package from the npm registry
- [npm-keyword](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword
- [npm-user](https://github.com/sindresorhus/npm-user) - Get user info of an npm user
- [npm-email](https://github.com/sindresorhus/npm-email) - Get the email of an npm user

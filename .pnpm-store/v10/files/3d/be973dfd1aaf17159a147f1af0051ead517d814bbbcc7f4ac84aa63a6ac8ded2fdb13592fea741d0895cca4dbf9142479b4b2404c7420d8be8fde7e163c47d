# giget

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Codecov][codecov-src]][codecov-href]

> Download templates and git repositories with pleasure!

## Features

✨ Support popular git providers (GitHub, GitLab, Bitbucket, Sourcehut) out of the box.

✨ Built-in and custom [template registry](#template-registry).

✨ Fast cloning using tarball gzip without depending on local `git` and `tar`.

✨ Works online and offline with disk cache support.

✨ Custom template provider support with programmatic usage.

✨ Support extracting with a sub dir.

✨ Authorization support to download private templates

✨ Optionally install dependencies after clone using [unjs/nypm](https://github.com/unjs/nypm)

✨ HTTP proxy support and native fetch via [unjs/node-fetch-native](https://github.com/unjs/node-fetch-native)

## Usage (CLI)

```bash
npx giget@latest <template> [<dir>] [...options]
```

### Arguments

- **template**: Template name or a URI describing provider, repository, sub dir, and branch/ref. (See [Examples](#examples))
- **dir**: A relative or absolute path where to extract the template.

### Options

- `--force`: Clone to existing directory even if exists.
- `--offline`: Do not attempt to download and use the cached version.
- `--prefer-offline`: Use cache if exists otherwise try to download.
- `--force-clean`: ⚠️ Remove any existing directory or file recursively before cloning.
- `--shell`: ⚠️ Open a new shell with the current working directory in cloned dir. (Experimental).
- `--registry`: URL to a custom registry. (Can be overridden with `GIGET_REGISTRY` environment variable).
- `--no-registry`: Disable registry lookup and functionality.
- `--verbose`: Show verbose debugging info.
- `--cwd`: Set the current working directory to resolve dirs relative to it.
- `--auth`: Custom Authorization token to use for downloading template. (Can be overridden with `GIGET_AUTH` environment variable).
- `--install`: Install dependencies after cloning using [unjs/nypm](https://github.com/unjs/nypm).

### Examples

```sh
# Clone nuxt starter from giget template registry
npx giget@latest nuxt

# Clone the main branch of github.com/unjs/template to unjs-template directory
npx giget@latest gh:unjs/template

# Clone to myProject directory
npx giget@latest gh:unjs/template myProject

# Clone dev branch
npx giget@latest gh:unjs/template#dev

# Clone /test directory from main branch
npx giget@latest gh:unjs/template/test

# Clone from gitlab
npx giget@latest gitlab:unjs/template

# Clone from bitbucket
npx giget@latest bitbucket:unjs/template

# Clone from sourcehut
npx giget@latest sourcehut:pi0/unjs-template

# Clone from https URL (tarball)
npx giget@latest https://api.github.com/repos/unjs/template/tarball/main

# Clone from https URL (JSON)
npx giget@latest https://raw.githubusercontent.com/unjs/giget/main/templates/unjs.json
```

## Template Registry

Giget has a built-in HTTP registry system for resolving templates. This way you can support template name shortcuts and meta-data. The default registry is served from [unjs/giget/templates](./templates/).

If you want to add your template to the built-in registry, just drop a PR to add it to the [./templates](./templates) directory. Slugs are added on a first-come first-served basis but this might change in the future.

### Custom Registry

A custom registry should provide an endpoint with the dynamic path `/:template.json` that returns a JSON response with keys the same as [custom providers](#custom-providers).

- `name`: (required) Name of the template.
- `tar` (required) Link to the tar download link.
- `defaultDir`: (optional) Default cloning directory.
- `url`: (optional) Webpage of the template.
- `subdir`: (optional) Directory inside the tar file.
- `headers`: (optional) Custom headers to send while downloading template.

Because of the simplicity, you can even use a GitHub repository as a template registry but also you can build something more powerful by bringing your own API.

## Usage (Programmatic)

Install package:

```sh
# npm
npm install giget

# yarn
yarn install giget

# pnpm
pnpm install giget
```

Import:

```js
// ESM
import { downloadTemplate } from "giget";

// CommonJS
const { downloadTemplate } = require("giget");
```

### `downloadTemplate(source, options?)`

**Example:**

```js
const { source, dir } = await downloadTemplate("github:unjs/template");
```

**Options:**

- `source`: (string) Input source in format of `[provider]:repo[/subpath][#ref]`.
- `options`: (object) Options are usually inferred from the input string. You can customize them.
  - `dir`: (string) Destination directory to clone to. If not provided, `user-name` will be used relative to the current directory.
  - `provider`: (string) Either `github`, `gitlab`, `bitbucket` or `sourcehut`. The default is `github`.
  - `force`: (boolean) Extract to the existing dir even if already exists.
  - `forceClean`: (boolean) ⚠️ Clean up any existing directory or file before cloning.
  - `offline`: (boolean) Do not attempt to download and use the cached version.
  - `preferOffline`: (boolean) Use cache if exists otherwise try to download.
  - `providers`: (object) A map from provider name to custom providers. Can be used to override built-ins too.
  - `registry`: (string or false) Set to `false` to disable registry. Set to a URL string (without trailing slash) for custom registry. (Can be overridden with `GIGET_REGISTRY` environment variable).
  - `cwd`: (string) Current working directory to resolve dirs relative to it.
  - `auth`: (string) Custom Authorization token to use for downloading template. (Can be overridden with `GIGET_AUTH` environment variable).

**Return value:**

The return value is a promise that resolves to the resolved template.

- `dir`: (string) Path to extracted dir.
- `source`: (string) Normalized version of the input source without provider.
- [other provider template keys]
  - `url`: (string) URL of the repository that can be opened in the browser. Useful for logging.

## Custom Providers

Using the programmatic method, you can make your custom template providers.

```ts
import type { TemplateProvider } from "giget";

const rainbow: TemplateProvider = async (input, { auth }) => {
  return {
    name: "rainbow",
    version: input,
    headers: { authorization: auth },
    url: `https://rainbow.template/?variant=${input}`,
    tar: `https://rainbow.template/dl/rainbow.${input}.tar.gz`,
  };
};

const { source, dir } = await downloadTemplate("rainbow:one", {
  providers: { rainbow },
});
```

### Custom Registry Providers

You can define additional [custom registry](#custom-registry) providers using `registryProvider` utility and register to `providers`.

```ts
import { registryProvider } from "giget";

const themes = registryProvider(
  "https://raw.githubusercontent.com/unjs/giget/main/templates",
);

const { source, dir } = await downloadTemplate("themes:test", {
  providers: { themes },
});
```

## Providing token for private repositories

For private repositories and sources, you might need a token. In order to provide it, using CLI, you can use `--auth`, using programmatic API using `auth` option and in both modes also it is possible to use `GIGET_AUTH` environment variable to set it. The value will be set in `Authorization: Bearer ...` header by default.

**Note:** For github private repository access with Fine-grained access tokens, you need to give **Contents** and **Metadata** repository permissions.

### GitHub Actions

If your project depends on a private GitHub repository, you need to add the access token as a secret. Please see GitHub Actions docs on [creating secrets for a repository](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository). In your workflow, refer to the token as shown in the example below:

```yml
- name: Install packages
  run: npm ci
  env:
    GIGET_AUTH: ${{ secrets.GIGET_AUTH }}
```


## Related projects

Giget wouldn't be possible without inspiration from former projects. In comparison, giget does not depend on any local command which increases stability and performance and supports custom template providers, auth, and many more features out of the box.

- https://github.com/samsonjs/gitter
- https://github.com/tiged/tiged
- https://github.com/Rich-Harris/degit

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/giget?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/giget
[npm-downloads-src]: https://img.shields.io/npm/dm/giget?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/giget
[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/giget/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/unjs/giget

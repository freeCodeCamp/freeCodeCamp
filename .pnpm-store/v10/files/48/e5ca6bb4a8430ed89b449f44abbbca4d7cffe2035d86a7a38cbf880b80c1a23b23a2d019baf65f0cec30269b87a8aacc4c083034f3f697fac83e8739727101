# ⚙️ c12

<!-- automd:badges color=yellow codecov -->

[![npm version](https://img.shields.io/npm/v/c12?color=yellow)](https://npmjs.com/package/c12)
[![npm downloads](https://img.shields.io/npm/dm/c12?color=yellow)](https://npm.chart.dev/c12)
[![codecov](https://img.shields.io/codecov/c/gh/unjs/c12?color=yellow)](https://codecov.io/gh/unjs/c12)

<!-- /automd -->

c12 (pronounced as /siːtwelv/, like c-twelve) is a smart configuration loader.

## ✅ Features

- `.js`, `.ts`, `.mjs`, `.cjs`, `.mts`, `.cts` `.json` config loader with [unjs/jiti](https://jiti.unjs.io)
- `.jsonc`, `.json5`, `.yaml`, `.yml`, `.toml` config loader with [unjs/confbox](https://confbox.unjs.io)
- `.config/` directory support following [config dir proposal](https://github.com/pi0/config-dir)
- `.rc` config support with [unjs/rc9](https://github.com/unjs/rc9)
- `.env` support with [dotenv](https://www.npmjs.com/package/dotenv)
- Multiple sources merged with [unjs/defu](https://github.com/unjs/defu)
- Reads config from the nearest `package.json` file
- [Extends configurations](https://github.com/unjs/c12#extending-configuration) from multiple local or git sources
- Overwrite with [environment-specific configuration](#environment-specific-configuration)
- Config watcher with auto-reload and HMR support
- Create or update configuration files with [magicast](https://github.com/unjs/magicast)

## 🦴 Used by

- [Nuxt](https://nuxt.com/)
- [Nitro](https://nitro.build/)
- [Unbuild](https://unbuild.unjs.io)
- [Automd](https://automd.unjs.io)
- [Changelogen](https://changelogen.unjs.io)
- [RemixKit](https://github.com/jrestall/remix-kit)
- [Hey API](https://github.com/hey-api/openapi-ts)
- [kysely-ctl](https://github.com/kysely-org/kysely-ctl)

## Usage

Install package:

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install c12

# npm
npm install c12

# yarn
yarn add c12

# pnpm
pnpm install c12

# bun
bun install c12

# deno
deno install c12
```

<!-- /automd -->

Import:

```js
// ESM import
import { loadConfig, watchConfig } from "c12";

// or using dynamic import
const { loadConfig, watchConfig } = await import("c12");
```

Load configuration:

```js
// Get loaded config
const { config } = await loadConfig({});

// Get resolved config and extended layers
const { config, configFile, layers } = await loadConfig({});
```

## Loading priority

c12 merged config sources with [unjs/defu](https://github.com/unjs/defu) by below order:

1. Config overrides passed by options
2. Config file in CWD
3. RC file in CWD
4. Global RC file in the user's home directory
5. Config from `package.json`
6. Default config passed by options
7. Extended config layers

## Options

### `cwd`

Resolve configuration from this working directory. The default is `process.cwd()`

### `name`

Configuration base name. The default is `config`.

### `configFile`

Configuration file name without extension. Default is generated from `name` (f.e., if `name` is `foo`, the config file will be => `foo.config`).

### `rcFile`

RC Config file name. Default is generated from `name` (name=foo => `.foorc`).

Set to `false` to disable loading RC config.

### `globalRC`

Load RC config from the workspace directory and the user's home directory. Only enabled when `rcFile` is provided. Set to `false` to disable this functionality.

### `dotenv`

Loads `.env` file if enabled. It is disabled by default.

### `packageJson`

Loads config from nearest `package.json` file. It is disabled by default.

If `true` value is passed, c12 uses `name` field from `package.json`.

You can also pass either a string or an array of strings as a value to use those fields.

### `defaults`

Specify default configuration. It has the **lowest** priority and is applied **after extending** config.

### `defaultConfig`

Specify default configuration. It is applied **before** extending config.

### `overrides`

Specify override configuration. It has the **highest** priority and is applied **before extending** config.

### `omit$Keys`

Exclude environment-specific and built-in keys start with `$` in the resolved config. The default is `false`.

### `jiti`

Custom [unjs/jiti](https://github.com/unjs/jiti) instance used to import configuration files.

### `jitiOptions`

Custom [unjs/jiti](https://github.com/unjs/jiti) options to import configuration files.

### `giget`

Options passed to [unjs/giget](https://github.com/unjs/giget) when extending layer from git source.

### `merger`

Custom options merger function. Default is [defu](https://github.com/unjs/defu).

**Note:** Custom merge function should deeply merge options with arguments high -> low priority.

### `envName`

Environment name used for [environment specific configuration](#environment-specific-configuration).

The default is `process.env.NODE_ENV`. You can set `envName` to `false` or an empty string to disable the feature.

### `resolve`

You can define a custom function that resolves the config.


## Extending configuration

If resolved config contains a `extends` key, it will be used to extend the configuration.

Extending can be nested and each layer can extend from one base or more.

The final config is merged result of extended options and user options with [unjs/defu](https://github.com/unjs/defu).

Each item in extends is a string that can be either an absolute or relative path to the current config file pointing to a config file for extending or the directory containing the config file.
If it starts with either `github:`, `gitlab:`, `bitbucket:`, or `https:`, c12 automatically clones it.

For custom merging strategies, you can directly access each layer with `layers` property.

**Example:**

```js
// config.ts
export default {
  colors: {
    primary: "user_primary",
  },
  extends: ["./theme"],
};
```

```js
// config.dev.ts
export default {
  dev: true,
};
```

```js
// theme/config.ts
export default {
  extends: "../base",
  colors: {
    primary: "theme_primary",
    secondary: "theme_secondary",
  },
};
```

```js
// base/config.ts
export default {
  colors: {
    primary: "base_primary",
    text: "base_text",
  },
};
```

The loaded configuration would look like this:

```js
const config = {
  dev: true,
  colors: {
    primary: "user_primary",
    secondary: "theme_secondary",
    text: "base_text",
  },
};
```

Layers:

```js
[
  {
    config: {
      /* theme config */
    },
    configFile: "/path/to/theme/config.ts",
    cwd: "/path/to/theme ",
  },
  {
    config: {
      /* base  config */
    },
    configFile: "/path/to/base/config.ts",
    cwd: "/path/to/base",
  },
  {
    config: {
      /* dev   config */
    },
    configFile: "/path/to/config.dev.ts",
    cwd: "/path/",
  },
];
```

## Extending config layer from remote sources

You can also extend configuration from remote sources such as npm or github.

In the repo, there should be a `config.ts` (or `config.{name}.ts`) file to be considered as a valid config layer.

**Example:** Extend from a github repository

```js
// config.ts
export default {
  extends: "gh:user/repo",
};
```

**Example:** Extend from a github repository with branch and subpath

```js
// config.ts
export default {
  extends: "gh:user/repo/theme#dev",
};
```

**Example:** Extend a private repository and install dependencies:

```js
// config.ts
export default {
  extends: ["gh:user/repo", { auth: process.env.GITHUB_TOKEN, install: true }],
};
```

You can pass more options to `giget: {}` in layer config or disable it by setting it to `false`.

Refer to [unjs/giget](https://giget.unjs.io) for more information.

## Environment-specific configuration

Users can define environment-specific configuration using these config keys:

- `$test: {...}`
- `$development: {...}`
- `$production: {...}`
- `$env: { [env]: {...} }`

c12 tries to match [`envName`](#envname) and override environment config if specified.

**Note:** Environment will be applied when extending each configuration layer. This way layers can provide environment-specific configuration.

**Example:**

```js
export default {
  // Default configuration
  logLevel: "info",

  // Environment overrides
  $test: { logLevel: "silent" },
  $development: { logLevel: "warning" },
  $production: { logLevel: "error" },
  $env: {
    staging: { logLevel: "debug" },
  },
};
```

## Watching configuration

you can use `watchConfig` instead of `loadConfig` to load config and watch for changes, add and removals in all expected configuration paths and auto reload with new config.

### Lifecycle hooks

- `onWatch`: This function is always called when config is updated, added, or removed before attempting to reload the config.
- `acceptHMR`: By implementing this function, you can compare old and new functions and return `true` if a full reload is not needed.
- `onUpdate`: This function is always called after the new config is updated. If `acceptHMR` returns true, it will be skipped.

```ts
import { watchConfig } from "c12";

const config = watchConfig({
  cwd: ".",
  // chokidarOptions: {}, // Default is { ignoreInitial: true }
  // debounce: 200 // Default is 100. You can set it to false to disable debounced watcher
  onWatch: (event) => {
    console.log("[watcher]", event.type, event.path);
  },
  acceptHMR({ oldConfig, newConfig, getDiff }) {
    const diff = getDiff();
    if (diff.length === 0) {
      console.log("No config changed detected!");
      return true; // No changes!
    }
  },
  onUpdate({ oldConfig, newConfig, getDiff }) {
    const diff = getDiff();
    console.log("Config updated:\n" + diff.map((i) => i.toJSON()).join("\n"));
  },
});

console.log("watching config files:", config.watchingFiles);
console.log("initial config", config.config);

// Stop watcher when not needed anymore
// await config.unwatch();
```

## Updating config

> [!NOTE]
> This feature is experimental

Update or create a new configuration files.

Add `magicast` peer dependency:

<!-- automd:pm-install name="magicast" dev -->

```sh
# ✨ Auto-detect
npx nypm install -D magicast

# npm
npm install -D magicast

# yarn
yarn add -D magicast

# pnpm
pnpm install -D magicast

# bun
bun install -D magicast

# deno
deno install --dev magicast
```

<!-- /automd -->

Import util from `c12/update`

```js
const { configFile, created } = await updateConfig({
  cwd: ".",
  configFile: "foo.config",
  onCreate: ({ configFile }) => {
    // You can prompt user if wants to create a new config file and return false to cancel
    console.log(`Creating new config file in ${configFile}...`);
    return "export default { test: true }";
  },
  onUpdate: (config) => {
    // You can update the config contents just like an object
    config.test2 = false;
  },
});

console.log(`Config file ${created ? "created" : "updated"} in ${configFile}`);
```

## Contribution

<details>
  <summary>Local development</summary>

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run tests using `pnpm dev` or `pnpm test`

</details>

<!-- /automd -->

## License

<!-- automd:contributors license=MIT author="pi0" -->

Published under the [MIT](https://github.com/unjs/c12/blob/main/LICENSE) license.
Made by [@pi0](https://github.com/pi0) and [community](https://github.com/unjs/c12/graphs/contributors) 💛
<br><br>
<a href="https://github.com/unjs/c12/graphs/contributors">
<img src="https://contrib.rocks/image?repo=unjs/c12" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->

# Lilconfig ⚙️
[![npm version](https://badge.fury.io/js/lilconfig.svg)](https://badge.fury.io/js/lilconfig)
[![install size](https://packagephobia.now.sh/badge?p=lilconfig)](https://packagephobia.now.sh/result?p=lilconfig)
[![Coverage Status](https://coveralls.io/repos/github/antonk52/lilconfig/badge.svg)](https://coveralls.io/github/antonk52/lilconfig)

A zero-dependency alternative to [cosmiconfig](https://www.npmjs.com/package/cosmiconfig) with the same API.

## Installation

```sh
npm install lilconfig
```

## Usage

```js
import {lilconfig, lilconfigSync} from 'lilconfig';

// all keys are optional
const options = {
    stopDir: '/Users/you/some/dir',
    searchPlaces: ['package.json', 'myapp.conf.js'],
    ignoreEmptySearchPlaces: false
}

lilconfig(
    'myapp',
    options // optional
).search() // Promise<LilconfigResult>

lilconfigSync(
    'myapp',
    options // optional
).load(pathToConfig) // LilconfigResult

/**
 * LilconfigResult
 * {
 *   config: any; // your config
 *   filepath: string;
 * }
 */
```

## Difference to `cosmiconfig`
Lilconfig does not intend to be 100% compatible with `cosmiconfig` but tries to mimic it where possible. The key differences are:
- **no** support for yaml files out of the box(`lilconfig` attempts to parse files with no extension as JSON instead of YAML). You can still add the support for YAML files by providing a loader, see an [example](#yaml-loader) below.
- **no** cache

### Options difference between the two.

|cosmiconfig option      | lilconfig |
|------------------------|-----------|
|cache                   | ❌        |
|loaders                 | ✅        |
|ignoreEmptySearchPlaces | ✅        |
|packageProp             | ✅        |
|searchPlaces            | ✅        |
|stopDir                 | ✅        |
|transform               | ✅        |

## Loaders examples

### Yaml loader

If you need the YAML support you can provide your own loader

```js
import {lilconfig} from 'lilconfig';
import yaml from 'yaml';

function loadYaml(filepath, content) {
    return yaml.parse(content);
}

const options = {
    loaders: {
        '.yaml': loadYaml,
        '.yml': loadYaml,
        // loader for files with no extension
        noExt: loadYaml
    }
};

lilconfig('myapp', options)
    .search()
    .then(result => {
        result // {config, filepath}
    });
```

### ESM loader

Lilconfig v2 does not support ESM modules out of the box. However, you can support it with a custom a loader. Note that this will only work with the async `lilconfig` function and won't work with the sync `lilconfigSync`.

```js
import {lilconfig} from 'lilconfig';

const loadEsm = filepath => import(filepath);

lilconfig('myapp', {
    loaders: {
        '.js': loadEsm,
        '.mjs': loadEsm,
    }
})
    .search()
    .then(result => {
        result // {config, filepath}

        result.config.default // if config uses `export default`
    });
```

## Version correlation

- lilconig v1 → cosmiconfig v6
- lilconig v2 → cosmiconfig v7

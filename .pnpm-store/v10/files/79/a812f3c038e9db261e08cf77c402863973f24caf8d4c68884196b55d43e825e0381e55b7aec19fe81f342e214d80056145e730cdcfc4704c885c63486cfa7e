# node-gyp-build

> Build tool and bindings loader for [`node-gyp`][node-gyp] that supports prebuilds.

```
npm install node-gyp-build
```

[![Test](https://github.com/prebuild/node-gyp-build/actions/workflows/test.yml/badge.svg)](https://github.com/prebuild/node-gyp-build/actions/workflows/test.yml)

Use together with [`prebuildify`][prebuildify] to easily support prebuilds for your native modules.

## Usage

> **Note.** Prebuild names have changed in [`prebuildify@3`][prebuildify] and `node-gyp-build@4`. Please see the documentation below.

`node-gyp-build` works similar to [`node-gyp build`][node-gyp] except that it will check if a build or prebuild is present before rebuilding your project.

It's main intended use is as an npm install script and bindings loader for native modules that bundle prebuilds using [`prebuildify`][prebuildify].

First add `node-gyp-build` as an install script to your native project

``` js
{
  ...
  "scripts": {
    "install": "node-gyp-build"
  }
}
```

Then in your `index.js`, instead of using the [`bindings`](https://www.npmjs.com/package/bindings) module use `node-gyp-build` to load your binding.

``` js
var binding = require('node-gyp-build')(__dirname)
```

If you do these two things and bundle prebuilds with [`prebuildify`][prebuildify] your native module will work for most platforms
without having to compile on install time AND will work in both node and electron without the need to recompile between usage.

Users can override `node-gyp-build` and force compiling by doing `npm install --build-from-source`.

Prebuilds will be attempted loaded from `MODULE_PATH/prebuilds/...` and then next `EXEC_PATH/prebuilds/...` (the latter allowing use with `zeit/pkg`)

## Supported prebuild names

If so desired you can bundle more specific flavors, for example `musl` builds to support Alpine, or targeting a numbered ARM architecture version.

These prebuilds can be bundled in addition to generic prebuilds; `node-gyp-build` will try to find the most specific flavor first. Prebuild filenames are composed of _tags_. The runtime tag takes precedence, as does an `abi` tag over `napi`. For more details on tags, please see [`prebuildify`][prebuildify].

Values for the `libc` and `armv` tags are auto-detected but can be overridden through the `LIBC` and `ARM_VERSION` environment variables, respectively.

## License

MIT

[prebuildify]: https://github.com/prebuild/prebuildify
[node-gyp]: https://www.npmjs.com/package/node-gyp

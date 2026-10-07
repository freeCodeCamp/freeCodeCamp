# prebuild-install

> **A command line tool to easily install prebuilt binaries for multiple versions of Node.js & Electron on a specific platform.**
> By default it downloads prebuilt binaries from a GitHub release.

[![npm](https://img.shields.io/npm/v/prebuild-install.svg)](https://www.npmjs.com/package/prebuild-install)
![Node version](https://img.shields.io/node/v/prebuild-install.svg)
[![Test](https://img.shields.io/github/workflow/status/prebuild/prebuild-install/Test?label=test)](https://github.com/prebuild/prebuild-install/actions/workflows/test.yml)
[![Standard](https://img.shields.io/badge/standard-informational?logo=javascript\&logoColor=fff)](https://standardjs.com)
[![Common Changelog](https://common-changelog.org/badge.svg)](https://common-changelog.org)

## Note

**Instead of [`prebuild`](https://github.com/prebuild/prebuild) paired with [`prebuild-install`](https://github.com/prebuild/prebuild-install), we recommend [`prebuildify`](https://github.com/prebuild/prebuildify) paired with [`node-gyp-build`](https://github.com/prebuild/node-gyp-build).**

With `prebuildify`, all prebuilt binaries are shipped inside the package that is published to npm, which means there's no need for a separate download step like you find in `prebuild`. The irony of this approach is that it is faster to download all prebuilt binaries for every platform when they are bundled than it is to download a single prebuilt binary as an install script.

Upsides:

1. No extra download step, making it more reliable and faster to install.
2. Supports changing runtime versions locally and using the same install between Node.js and Electron. Reinstalling or rebuilding is not necessary, as all prebuilt binaries are in the npm tarball and the correct one is simply picked on runtime.
3. The `node-gyp-build` runtime dependency is dependency-free and will remain so out of principle, because introducing dependencies would negate the shorter install time.
4. Prebuilt binaries work even if npm install scripts are disabled.
5. The npm package checksum covers prebuilt binaries too.

Downsides:

1. The installed npm package is larger on disk. Using [Node-API](https://nodejs.org/api/n-api.html) alleviates this because Node-API binaries are runtime-agnostic and forward-compatible.
2. Publishing is mildly more complicated, because `npm publish` must be done after compiling and fetching prebuilt binaries (typically in CI).

## Usage

Use [`prebuild`](https://github.com/prebuild/prebuild) to create and upload prebuilt binaries. Then change your package.json install script to:

```json
{
  "scripts": {
    "install": "prebuild-install || node-gyp rebuild"
  }
}
```

When a consumer then installs your package with npm thus triggering the above install script, `prebuild-install` will download a suitable prebuilt binary, or exit with a non-zero exit code if there is none, which triggers `node-gyp rebuild` in order to build from source.

Options (see below) can be passed to `prebuild-install` like so:

```json
{
  "scripts": {
    "install": "prebuild-install -r napi || node-gyp rebuild"
  }
}
```

### Help

```
prebuild-install [options]

  --download    -d  [url]       (download prebuilds, no url means github)
  --target      -t  version     (version to install for)
  --runtime     -r  runtime     (Node runtime [node, napi or electron] to build or install for, default is node)
  --path        -p  path        (make a prebuild-install here)
  --token       -T  gh-token    (github token for private repos)
  --arch            arch        (target CPU architecture, see Node OS module docs, default is current arch)
  --platform        platform    (target platform, see Node OS module docs, default is current platform)
  --tag-prefix <prefix>         (github tag prefix, default is "v")
  --build-from-source           (skip prebuild download)
  --verbose                     (log verbosely)
  --libc                        (use provided libc rather than system default)
  --debug                       (set Debug or Release configuration)
  --version                     (print prebuild-install version and exit)
```

When `prebuild-install` is run via an `npm` script, options `--build-from-source`, `--debug`, `--download`, `--target`, `--runtime`, `--arch` `--platform` and `--libc` may be passed through via arguments given to the `npm` command.

Alternatively you can set environment variables `npm_config_build_from_source=true`, `npm_config_platform`, `npm_config_arch`, `npm_config_target` `npm_config_runtime` and `npm_config_libc`.

### Libc

On non-glibc Linux platforms, the Libc name is appended to platform name. For example, musl-based environments are called `linuxmusl`. If `--libc=glibc` is passed as option, glibc is discarded and platform is called as just `linux`. This can be used for example to build cross-platform packages on Alpine Linux.

### Private Repositories

`prebuild-install` supports downloading prebuilds from private GitHub repositories using the `-T <github-token>`:

```
$ prebuild-install -T <github-token>
```

If you don't want to use the token on cli you can put it in `~/.prebuild-installrc`:

```
token=<github-token>
```

Alternatively you can specify it in the `prebuild-install_token` environment variable.

Note that using a GitHub token uses the API to resolve the correct release meaning that you are subject to the ([GitHub Rate Limit](https://developer.github.com/v3/rate_limit/)).

### Create GitHub Token

To create a token:

- Go to [this page](https://github.com/settings/tokens)
- Click the `Generate new token` button
- Give the token a name and click the `Generate token` button, see below

![prebuild-token](https://cloud.githubusercontent.com/assets/13285808/20844584/d0b85268-b8c0-11e6-8b08-2b19522165a9.png)

The default scopes should be fine.

### Custom binaries

The end user can override binary download location through environment variables in their .npmrc file.
The variable needs to meet the mask `% your package name %_binary_host` or `% your package name %_binary_host_mirror`. For example:

```
leveldown_binary_host=http://overriden-host.com/overriden-path
```

Note that the package version subpath and file name will still be appended.
So if you are installing `leveldown@1.2.3` the resulting url will be:

```
http://overriden-host.com/overriden-path/v1.2.3/leveldown-v1.2.3-node-v57-win32-x64.tar.gz
```

#### Local prebuilds

If you want to use prebuilds from your local filesystem, you can use the `% your package name %_local_prebuilds` .npmrc variable to set a path to the folder containing prebuilds. For example:

```
leveldown_local_prebuilds=/path/to/prebuilds
```

This option will look directly in that folder for bundles created with `prebuild`, for example:

```
/path/to/prebuilds/leveldown-v1.2.3-node-v57-win32-x64.tar.gz
```

Non-absolute paths resolve relative to the directory of the package invoking prebuild-install, e.g. for nested dependencies.

### Cache

All prebuilt binaries are cached to minimize traffic. So first `prebuild-install` picks binaries from the cache and if no binary could be found, it will be downloaded. Depending on the environment, the cache folder is determined in the following order:

- `${npm_config_cache}/_prebuilds`
- `${APP_DATA}/npm-cache/_prebuilds`
- `${HOME}/.npm/_prebuilds`

## Install

With [npm](https://npmjs.org) do:

```
npm install prebuild-install
```

## License

[MIT](./LICENSE)

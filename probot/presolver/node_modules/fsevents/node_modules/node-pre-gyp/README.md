# node-pre-gyp

#### node-pre-gyp makes it easy to publish and install Node.js C++ addons from binaries

[![NPM](https://nodei.co/npm/node-pre-gyp.png?downloads=true&downloadRank=true)](https://nodei.co/npm/node-pre-gyp/)

[![Build Status](https://api.travis-ci.org/mapbox/node-pre-gyp.svg)](https://travis-ci.org/mapbox/node-pre-gyp)
[![Build status](https://ci.appveyor.com/api/projects/status/3nxewb425y83c0gv)](https://ci.appveyor.com/project/Mapbox/node-pre-gyp)
[![Dependencies](https://david-dm.org/mapbox/node-pre-gyp.svg)](https://david-dm.org/mapbox/node-pre-gyp)

`node-pre-gyp` stands between [npm](https://github.com/npm/npm) and [node-gyp](https://github.com/Tootallnate/node-gyp) and offers a cross-platform method of binary deployment.

### Features

 - A command line tool called `node-pre-gyp` that can install your package's C++ module from a binary.
 - A variety of developer targeted commands for packaging, testing, and publishing binaries.
 - A JavaScript module that can dynamically require your installed binary: `require('node-pre-gyp').find`

For a hello world example of a module packaged with `node-pre-gyp` see <https://github.com/springmeyer/node-addon-example> and [the wiki ](https://github.com/mapbox/node-pre-gyp/wiki/Modules-using-node-pre-gyp) for real world examples.

## Credits

 - The module is modeled after [node-gyp](https://github.com/Tootallnate/node-gyp) by [@Tootallnate](https://github.com/Tootallnate)
 - Motivation for initial development came from [@ErisDS](https://github.com/ErisDS) and the [Ghost Project](https://github.com/TryGhost/Ghost).
 - Development is sponsored by [Mapbox](https://www.mapbox.com/)

## FAQ

See the [Frequently Ask Questions](https://github.com/mapbox/node-pre-gyp/wiki/FAQ).

## Depends

 - Node.js >= node v6.x

## Install

`node-pre-gyp` is designed to be installed as a local dependency of your Node.js C++ addon and accessed like:

    ./node_modules/.bin/node-pre-gyp --help

But you can also install it globally:

    npm install node-pre-gyp -g

## Usage

### Commands

View all possible commands:

    node-pre-gyp --help

- clean - Remove the entire folder containing the compiled .node module
- install - Install pre-built binary for module
- reinstall - Run "clean" and "install" at once
- build - Compile the module by dispatching to node-gyp or nw-gyp
- rebuild - Run "clean" and "build" at once
- package - Pack binary into tarball
- testpackage - Test that the staged package is valid
- publish - Publish pre-built binary
- unpublish - Unpublish pre-built binary
- info - Fetch info on published binaries

You can also chain commands:

    node-pre-gyp clean build unpublish publish info

### Options

Options include:

 - `-C/--directory`: run the command in this directory
 - `--build-from-source`: build from source instead of using pre-built binary
 - `--update-binary`: reinstall by replacing previously installed local binary with remote binary
 - `--runtime=node-webkit`: customize the runtime: `node`, `electron` and `node-webkit` are the valid options
 - `--fallback-to-build`: fallback to building from source if pre-built binary is not available
 - `--target=0.4.0`: Pass the target node or node-webkit version to compile against
 - `--target_arch=ia32`: Pass the target arch and override the host `arch`. Valid values are 'ia32','x64', or `arm`.
 - `--target_platform=win32`: Pass the target platform and override the host `platform`. Valid values are `linux`, `darwin`, `win32`, `sunos`, `freebsd`, `openbsd`, and `aix`.

Both `--build-from-source` and `--fallback-to-build` can be passed alone or they can provide values. You can pass `--fallback-to-build=false` to override the option as declared in package.json. In addition to being able to pass `--build-from-source` you can also pass `--build-from-source=myapp` where `myapp` is the name of your module.

For example: `npm install --build-from-source=myapp`. This is useful if:

 - `myapp` is referenced in the package.json of a larger app and therefore `myapp` is being installed as a dependent with `npm install`.
 - The larger app also depends on other modules installed with `node-pre-gyp`
 - You only want to trigger a source compile for `myapp` and the other modules.

### Configuring

This is a guide to configuring your module to use node-pre-gyp.

#### 1) Add new entries to your `package.json`

 - Add `node-pre-gyp` to `dependencies`
 - Add `aws-sdk` as a `devDependency`
 - Add a custom `install` script
 - Declare a `binary` object

This looks like:

```js
    "dependencies"  : {
      "node-pre-gyp": "0.6.x"
    },
    "devDependencies": {
      "aws-sdk": "2.x"
    }
    "bundledDependencies":["node-pre-gyp"],
    "scripts": {
        "install": "node-pre-gyp install --fallback-to-build"
    },
    "binary": {
        "module_name": "your_module",
        "module_path": "./lib/binding/",
        "host": "https://your_module.s3-us-west-1.amazonaws.com"
    }
```

For a full example see [node-addon-examples's package.json](https://github.com/springmeyer/node-addon-example/blob/master/package.json).

Let's break this down:

 - Dependencies need to list `node-pre-gyp`
 - Your devDependencies should list `aws-sdk` so that you can run `node-pre-gyp publish` locally or a CI system. We recommend using `devDependencies` only since `aws-sdk` is large and not needed for `node-pre-gyp install` since it only uses http to fetch binaries
 - You should add `"bundledDependencies":["node-pre-gyp"]`. This ensures that when you publish your module that the correct version of node-pre-gyp will be included in the `node_modules` folder during publishing. Then when uses install your module `node-pre-gyp` will already be present. Without this your module will not be safely installable for downstream applications that have a depedency on node-pre-gyp in the npm tree (without bundling npm deduping might break the install when node-pre-gyp is moved in flight)
 - Your `scripts` section should optionally add `"prepublishOnly": "npm ls"` to ensure the right node-pre-gyp version is bundled before publishing your module. If node-pre-gyp is missing or an old version is present then this will catch that error before you publish a broken package.
 - Your `scripts` section should override the `install` target with `"install": "node-pre-gyp install --fallback-to-build"`. This allows node-pre-gyp to be used instead of the default npm behavior of always source compiling with `node-gyp` directly.
 - Your package.json should contain a `binary` section describing key properties you provide to allow node-pre-gyp to package optimally. They are detailed below.

Note: in the past we recommended using `"preinstall": "npm install node-pre-gyp"` as an alternative method to avoid needing to bundle. But this does not behave predictably across all npm versions - see https://github.com/mapbox/node-pre-gyp/issues/260 for the details. So we do not recommend using `preinstall` to install `node-pre-gyp`. Instead we recommend bundling. More history on this at https://github.com/strongloop/fsevents/issues/157#issuecomment-265545908.

##### The `binary` object has three required properties

###### module_name

The name of your native node module. This value must:

 - Match the name passed to [the NODE_MODULE macro](http://nodejs.org/api/addons.html#addons_hello_world)
 - Must be a valid C variable name (e.g. it cannot contain `-`)
 - Should not include the `.node` extension.

###### module_path

The location your native module is placed after a build. This should be an empty directory without other Javascript files. This entire directory will be packaged in the binary tarball. When installing from a remote package this directory will be overwritten with the contents of the tarball.

Note: This property supports variables based on [Versioning](#versioning).

###### host

A url to the remote location where you've published tarball binaries (must be `https` not `http`).

It is highly recommended that you use Amazon S3. The reasons are:

  - Various node-pre-gyp commands like `publish` and `info` only work with an S3 host.
  - S3 is a very solid hosting platform for distributing large files.
  - We provide detail documentation for using [S3 hosting](#s3-hosting) with node-pre-gyp.

Why then not require S3? Because while some applications using node-pre-gyp need to distribute binaries as large as 20-30 MB, others might have very small binaries and might wish to store them in a GitHub repo. This is not recommended, but if an author really wants to host in a non-s3 location then it should be possible.

It should also be mentioned that there is an optional and entirely separate npm module called [node-pre-gyp-github](https://github.com/bchr02/node-pre-gyp-github) which is intended to complement node-pre-gyp and be installed along with it. It provides the ability to store and publish your binaries within your repositories GitHub Releases if you would rather not use S3 directly. Installation and usage instructions can be found [here](https://github.com/bchr02/node-pre-gyp-github), but the basic premise is that instead of using the ```node-pre-gyp publish``` command you would use ```node-pre-gyp-github publish```.

##### The `binary` object has two optional properties

###### remote_path

It **is recommended** that you customize this property. This is an extra path to use for publishing and finding remote tarballs. The default value for `remote_path` is `""` meaning that if you do not provide it then all packages will be published at the base of the `host`. It is recommended to provide a value like `./{name}/v{version}` to help organize remote packages in the case that you choose to publish multiple node addons to the same `host`.

Note: This property supports variables based on [Versioning](#versioning).

###### package_name

It is **not recommended** to override this property unless you are also overriding the `remote_path`. This is the versioned name of the remote tarball containing the binary `.node` module and any supporting files you've placed inside the `module_path` directory. Unless you specify `package_name` in your `package.json` then it defaults to `{module_name}-v{version}-{node_abi}-{platform}-{arch}.tar.gz` which allows your binary to work across node versions, platforms, and architectures. If you are using `remote_path` that is also versioned by `./{module_name}/v{version}` then you could remove these variables from the `package_name` and just use: `{node_abi}-{platform}-{arch}.tar.gz`. Then your remote tarball will be looked up at, for example, `https://example.com/your-module/v0.1.0/node-v11-linux-x64.tar.gz`.

Avoiding the version of your module in the `package_name` and instead only embedding in a directory name can be useful when you want to make a quick tag of your module that does not change any C++ code. In this case you can just copy binaries to the new version behind the scenes like:

```sh
aws s3 sync --acl public-read s3://mapbox-node-binary/sqlite3/v3.0.3/ s3://mapbox-node-binary/sqlite3/v3.0.4/
```

Note: This property supports variables based on [Versioning](#versioning).

#### 2) Add a new target to binding.gyp

`node-pre-gyp` calls out to `node-gyp` to compile the module and passes variables along like [module_name](#module_name) and [module_path](#module_path).

A new target must be added to `binding.gyp` that moves the compiled `.node` module from `./build/Release/module_name.node` into the directory specified by `module_path`.

Add a target like this at the end of your `targets` list:

```js
    {
      "target_name": "action_after_build",
      "type": "none",
      "dependencies": [ "<(module_name)" ],
      "copies": [
        {
          "files": [ "<(PRODUCT_DIR)/<(module_name).node" ],
          "destination": "<(module_path)"
        }
      ]
    }
```

For a full example see [node-addon-example's binding.gyp](https://github.com/springmeyer/node-addon-example/blob/2ff60a8ded7f042864ad21db00c3a5a06cf47075/binding.gyp).

#### 3) Dynamically require your `.node`

Inside the main js file that requires your addon module you are likely currently doing:

```js
var binding = require('../build/Release/binding.node');
```

or:

```js
var bindings = require('./bindings')
```

Change those lines to:

```js
var binary = require('node-pre-gyp');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname,'./package.json')));
var binding = require(binding_path);
```

For a full example see [node-addon-example's index.js](https://github.com/springmeyer/node-addon-example/blob/2ff60a8ded7f042864ad21db00c3a5a06cf47075/index.js#L1-L4)

#### 4) Build and package your app

Now build your module from source:

    npm install --build-from-source

The `--build-from-source` tells `node-pre-gyp` to not look for a remote package and instead dispatch to node-gyp to build.

Now `node-pre-gyp` should now also be installed as a local dependency so the command line tool it offers can be found at `./node_modules/.bin/node-pre-gyp`.

#### 5) Test

Now `npm test` should work just as it did before.

#### 6) Publish the tarball

Then package your app:

    ./node_modules/.bin/node-pre-gyp package

Once packaged, now you can publish:

    ./node_modules/.bin/node-pre-gyp publish

Currently the `publish` command pushes your binary to S3. This requires:

 - You have installed `aws-sdk` with `npm install aws-sdk`
 - You have created a bucket already.
 - The `host` points to an S3 http or https endpoint.
 - You have configured node-pre-gyp to read your S3 credentials (see [S3 hosting](#s3-hosting) for details).

You can also host your binaries elsewhere. To do this requires:

 - You manually publish the binary created by the `package` command to an `https` endpoint
 - Ensure that the `host` value points to your custom `https` endpoint.

#### 7) Automate builds

Now you need to publish builds for all the platforms and node versions you wish to support. This is best automated.

 - See [Appveyor Automation](#appveyor-automation) for how to auto-publish builds on Windows.
 - See [Travis Automation](#travis-automation) for how to auto-publish builds on OS X and Linux.

#### 8) You're done!

Now publish your module to the npm registry. Users will now be able to install your module from a binary.

What will happen is this:

1. `npm install <your package>` will pull from the npm registry
2. npm will run the `install` script which will call out to `node-pre-gyp`
3. `node-pre-gyp` will fetch the binary `.node` module and unpack in the right place
4. Assuming that all worked, you are done

If a a binary was not available for a given platform and `--fallback-to-build` was used then `node-gyp rebuild` will be called to try to source compile the module.

## N-API Considerations

[N-API](https://nodejs.org/api/n-api.html#n_api_n_api) is an ABI-stable alternative to previous technologies such as [nan](https://github.com/nodejs/nan) which are tied to a specific Node runtime engine. N-API is Node runtime engine agnostic and guarantees modules created today will continue to run, without changes, into the future.

Using `node-pre-gyp` with N-API projects requires a handful of additional configuration values and imposes some additional requirements.

The most significant difference is that an N-API module can be coded to target multiple  N-API versions. Therefore, an N-API module must declare in its `package.json` file which N-API versions the module is designed to run against. In addition, since multiple builds may be required for a single module, path and file names must be specified in way that avoids naming conflicts.

### The `napi_versions` array property

An N-API modules must declare in its `package.json` file, the N-API versions the module is intended to support. This is accomplished by including an `napi-versions` array property in the `binary` object. For example:

```js
"binary": {
    "module_name": "your_module",
    "module_path": "your_module_path",
    "host": "https://your_bucket.s3-us-west-1.amazonaws.com",
    "napi_versions": [1,3]
  }
```

If the `napi_versions` array property is *not* present, `node-pre-gyp` operates as it always has. Including the `napi_versions` array property instructs `node-pre-gyp` that this is a N-API module build.

When the `napi_versions` array property is present, `node-pre-gyp` fires off multiple operations, one for each of the N-API versions in the array. In the example above, two operations are initiated, one for N-API version 1 and second for N-API version 3. How this version number is communicated is described next.

### The `napi_build_version` value

For each of the N-API module operations `node-pre-gyp` initiates, it insures that the `napi_build_version` is set appropriately.

This value is of importance in two areas:

1. The C/C++ code which needs to know against which N-API version it should compile.
2. `node-pre-gyp` itself which must assign appropriate path and file names to avoid collisions.

### Defining `NAPI_BUILD_VERSION` for the C/C++ code

The `napi_build_version` value is communicated to the C/C++ code by adding this code to the `binding.gyp` file:

```
"defines": [
    "NAPI_BUILD_VERSION=<(napi_build_version)",
]
```

This insures that `NAPI_BUILD_VERSION`, an integer value, is declared appropriately to the C/C++ code for each build.

### Path and file naming requirements in `package.json`

Since `node-pre-gyp` fires off multiple operations for each request, it is essential that path and file names be created in such a way as to avoid collisions. This is accomplished by imposing additional path and file naming requirements.

Specifically, when performing N-API builds, the `{napi_build_version}` text substitution string  *must* be present in the `module_path` property. In addition, the `{napi_build_version}` text substitution string  *must* be present in either the `remote_path` or `package_name` property. (No problem if it's in both.)

Here's an example:

```js
"binary": {
    "module_name": "your_module",
    "module_path": "./lib/binding/napi-v{napi_build_version}",
    "remote_path": "./{module_name}/v{version}/{configuration}/",
    "package_name": "{platform}-{arch}-napi-v{napi_build_version}.tar.gz",
    "host": "https://your_bucket.s3-us-west-1.amazonaws.com",
    "napi_versions": [1,3]
  }
```

### Two additional configuration values

For those who need them in legacy projects, two additional configuration values are available for all builds.

1. `napi_version` If N-API is supported by the currently executing Node instance, this value is the N-API version number supported by Node. If N-API is not supported, this value is an empty string.

2. `node_abi_napi` If the value returned for `napi_version` is non empty, this value is `'napi'`. If the value returned for `napi_version` is empty, this value is the value returned for `node_abi`.

These values are present for use in the `binding.gyp` file and may be used as `{napi_version}` and `{node_abi_napi}` for text substituion in the `binary` properties of the `package.json` file.

## S3 Hosting

You can host wherever you choose but S3 is cheap, `node-pre-gyp publish` expects it, and S3 can be integrated well with [Travis.ci](http://travis-ci.org) to automate builds for OS X and Ubuntu, and with [Appveyor](http://appveyor.com) to automate builds for Windows. Here is an approach to do this:

First, get setup locally and test the workflow:

#### 1) Create an S3 bucket

And have your **key** and **secret key** ready for writing to the bucket.

It is recommended to create a IAM user with a policy that only gives permissions to the specific bucket you plan to publish to. This can be done in the [IAM console](https://console.aws.amazon.com/iam/) by: 1) adding a new user, 2) choosing `Attach User Policy`, 3) Using the `Policy Generator`, 4) selecting `Amazon S3` for the service, 5) adding the actions: `DeleteObject`, `GetObject`, `GetObjectAcl`, `ListBucket`, `PutObject`, `PutObjectAcl`, 6) adding an ARN of `arn:aws:s3:::bucket/*` (replacing `bucket` with your bucket name), and finally 7) clicking `Add Statement` and saving the policy. It should generate a policy like:

```js
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1394587197000",
      "Effect": "Allow",
      "Action": [
        "s3:DeleteObject",
        "s3:GetObject",
        "s3:GetObjectAcl",
        "s3:ListBucket",
        "s3:PutObject",
        "s3:PutObjectAcl"
      ],
      "Resource": [
        "arn:aws:s3:::node-pre-gyp-tests/*"
      ]
    }
  ]
}
```

#### 2) Install node-pre-gyp

Either install it globally:

    npm install node-pre-gyp -g

Or put the local version on your PATH

    export PATH=`pwd`/node_modules/.bin/:$PATH

#### 3) Configure AWS credentials

There are several ways to do this.

You can use any of the methods described at http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html.

Or you can create a `~/.node_pre_gyprc`

Or pass options in any way supported by [RC](https://github.com/dominictarr/rc#standards)

A `~/.node_pre_gyprc` looks like:

```js
{
    "accessKeyId": "xxx",
    "secretAccessKey": "xxx"
}
```

Another way is to use your environment:

    export node_pre_gyp_accessKeyId=xxx
    export node_pre_gyp_secretAccessKey=xxx

You may also need to specify the `region` if it is not explicit in the `host` value you use. The `bucket` can also be specified but it is optional because `node-pre-gyp` will detect it from the `host` value.

#### 4) Package and publish your build

Install the `aws-sdk`:

    npm install aws-sdk

Then publish:

    node-pre-gyp package publish

Note: if you hit an error like `Hostname/IP doesn't match certificate's altnames` it may mean that you need to provide the `region` option in your config.

## Appveyor Automation

[Appveyor](http://www.appveyor.com/) can build binaries and publish the results per commit and supports:

 - Windows Visual Studio 2013 and related compilers
 - Both 64 bit (x64) and 32 bit (x86) build configurations
 - Multiple Node.js versions

For an example of doing this see [node-sqlite3's appveyor.yml](https://github.com/mapbox/node-sqlite3/blob/master/appveyor.yml).

Below is a guide to getting set up:

#### 1) Create a free Appveyor account

Go to https://ci.appveyor.com/signup/free and sign in with your GitHub account.

#### 2) Create a new project

Go to https://ci.appveyor.com/projects/new and select the GitHub repo for your module

#### 3) Add appveyor.yml and push it

Once you have committed an `appveyor.yml` ([appveyor.yml reference](http://www.appveyor.com/docs/appveyor-yml)) to your GitHub repo and pushed it AppVeyor should automatically start building your project.

#### 4) Create secure variables

Encrypt your S3 AWS keys by going to <https://ci.appveyor.com/tools/encrypt> and hitting the `encrypt` button.

Then paste the result into your `appveyor.yml`

```yml
environment:
  node_pre_gyp_accessKeyId:
    secure: Dn9HKdLNYvDgPdQOzRq/DqZ/MPhjknRHB1o+/lVU8MA=
  node_pre_gyp_secretAccessKey:
    secure: W1rwNoSnOku1r+28gnoufO8UA8iWADmL1LiiwH9IOkIVhDTNGdGPJqAlLjNqwLnL
```

NOTE: keys are per account but not per repo (this is difference than Travis where keys are per repo but not related to the account used to encrypt them).

#### 5) Hook up publishing

Just put `node-pre-gyp package publish` in your `appveyor.yml` after `npm install`.

#### 6) Publish when you want

You might wish to publish binaries only on a specific commit. To do this you could borrow from the [Travis CI idea of commit keywords](http://about.travis-ci.org/docs/user/how-to-skip-a-build/) and add special handling for commit messages with `[publish binary]`:

    SET CM=%APPVEYOR_REPO_COMMIT_MESSAGE%
    if not "%CM%" == "%CM:[publish binary]=%" node-pre-gyp --msvs_version=2013 publish

If your commit message contains special characters (e.g. `&`) this method might fail. An alternative is to use PowerShell, which gives you additional possibilities, like ignoring case by using `ToLower()`:

    ps: if($env:APPVEYOR_REPO_COMMIT_MESSAGE.ToLower().Contains('[publish binary]')) { node-pre-gyp --msvs_version=2013 publish }

Remember this publishing is not the same as `npm publish`. We're just talking about the binary module here and not your entire npm package.

## Travis Automation

[Travis](https://travis-ci.org/) can push to S3 after a successful build and supports both:

 - Ubuntu Precise and OS X (64 bit)
 - Multiple Node.js versions

For an example of doing this see [node-add-example's .travis.yml](https://github.com/springmeyer/node-addon-example/blob/2ff60a8ded7f042864ad21db00c3a5a06cf47075/.travis.yml).

Note: if you need 32 bit binaries, this can be done from a 64 bit Travis machine. See [the node-sqlite3 scripts for an example of doing this](https://github.com/mapbox/node-sqlite3/blob/bae122aa6a2b8a45f6b717fab24e207740e32b5d/scripts/build_against_node.sh#L54-L74).

Below is a guide to getting set up:

#### 1) Install the Travis gem

    gem install travis

#### 2) Create secure variables

Make sure you run this command from within the directory of your module.

Use `travis-encrypt` like:

    travis encrypt node_pre_gyp_accessKeyId=${node_pre_gyp_accessKeyId}
    travis encrypt node_pre_gyp_secretAccessKey=${node_pre_gyp_secretAccessKey}

Then put those values in your `.travis.yml` like:

```yaml
env:
  global:
    - secure: F+sEL/v56CzHqmCSSES4pEyC9NeQlkoR0Gs/ZuZxX1ytrj8SKtp3MKqBj7zhIclSdXBz4Ev966Da5ctmcTd410p0b240MV6BVOkLUtkjZJyErMBOkeb8n8yVfSoeMx8RiIhBmIvEn+rlQq+bSFis61/JkE9rxsjkGRZi14hHr4M=
    - secure: o2nkUQIiABD139XS6L8pxq3XO5gch27hvm/gOdV+dzNKc/s2KomVPWcOyXNxtJGhtecAkABzaW8KHDDi5QL1kNEFx6BxFVMLO8rjFPsMVaBG9Ks6JiDQkkmrGNcnVdxI/6EKTLHTH5WLsz8+J7caDBzvKbEfTux5EamEhxIWgrI=
```

More details on Travis encryption at http://about.travis-ci.org/docs/user/encryption-keys/.

#### 3) Hook up publishing

Just put `node-pre-gyp package publish` in your `.travis.yml` after `npm install`.

##### OS X publishing

If you want binaries for OS X in addition to linux you can enable [multi-os for Travis](http://docs.travis-ci.com/user/multi-os/#Setting-.travis.yml)

Use a configuration like:

```yml

language: cpp

os:
- linux
- osx

env:
  matrix:
    - NODE_VERSION="4"
    - NODE_VERSION="6"

before_install:
- rm -rf ~/.nvm/ && git clone --depth 1 https://github.com/creationix/nvm.git ~/.nvm
- source ~/.nvm/nvm.sh
- nvm install $NODE_VERSION
- nvm use $NODE_VERSION
```

See [Travis OS X Gotchas](#travis-os-x-gotchas) for why we replace `language: node_js` and `node_js:` sections with `language: cpp` and a custom matrix.

Also create platform specific sections for any deps that need install. For example if you need libpng:

```yml
- if [ $(uname -s) == 'Linux' ]; then apt-get install libpng-dev; fi;
- if [ $(uname -s) == 'Darwin' ]; then brew install libpng; fi;
```

For detailed multi-OS examples see [node-mapnik](https://github.com/mapnik/node-mapnik/blob/master/.travis.yml) and [node-sqlite3](https://github.com/mapbox/node-sqlite3/blob/master/.travis.yml).

##### Travis OS X Gotchas

First, unlike the Travis Linux machines, the OS X machines do not put `node-pre-gyp` on PATH by default. To do so you will need to:

```sh
export PATH=$(pwd)/node_modules/.bin:${PATH}
```

Second, the OS X machines do not support using a matrix for installing different Node.js versions. So you need to bootstrap the installation of Node.js in a cross platform way.

By doing:

```yml
env:
  matrix:
    - NODE_VERSION="4"
    - NODE_VERSION="6"

before_install:
 - rm -rf ~/.nvm/ && git clone --depth 1 https://github.com/creationix/nvm.git ~/.nvm
 - source ~/.nvm/nvm.sh
 - nvm install $NODE_VERSION
 - nvm use $NODE_VERSION
```

You can easily recreate the previous behavior of this matrix:

```yml
node_js:
  - "4"
  - "6"
```

#### 4) Publish when you want

You might wish to publish binaries only on a specific commit. To do this you could borrow from the [Travis CI idea of commit keywords](http://about.travis-ci.org/docs/user/how-to-skip-a-build/) and add special handling for commit messages with `[publish binary]`:

    COMMIT_MESSAGE=$(git log --format=%B --no-merges -n 1 | tr -d '\n')
    if [[ ${COMMIT_MESSAGE} =~ "[publish binary]" ]]; then node-pre-gyp publish; fi;

Then you can trigger new binaries to be built like:

    git commit -a -m "[publish binary]"

Or, if you don't have any changes to make simply run:

    git commit --allow-empty -m "[publish binary]"

WARNING: if you are working in a pull request and publishing binaries from there then you will want to avoid double publishing when Travis CI builds both the `push` and `pr`. You only want to run the publish on the `push` commit. See https://github.com/Project-OSRM/node-osrm/blob/8eb837abe2e2e30e595093d16e5354bc5c573575/scripts/is_pr_merge.sh which is called from https://github.com/Project-OSRM/node-osrm/blob/8eb837abe2e2e30e595093d16e5354bc5c573575/scripts/publish.sh for an example of how to do this.

Remember this publishing is not the same as `npm publish`. We're just talking about the binary module here and not your entire npm package. To automate the publishing of your entire package to npm on Travis see http://about.travis-ci.org/docs/user/deployment/npm/

# Versioning

The `binary` properties of `module_path`, `remote_path`, and `package_name` support variable substitution. The strings are evaluated by `node-pre-gyp` depending on your system and any custom build flags you passed.

 - `node_abi`: The node C++ `ABI` number. This value is available in Javascript as `process.versions.modules` as of [`>= v0.10.4 >= v0.11.7`](https://github.com/joyent/node/commit/ccabd4a6fa8a6eb79d29bc3bbe9fe2b6531c2d8e) and in C++ as the `NODE_MODULE_VERSION` define much earlier. For versions of Node before this was available we fallback to the V8 major and minor version.
 - `platform` matches node's `process.platform` like `linux`, `darwin`, and `win32` unless the user passed the `--target_platform` option to override.
 - `arch` matches node's `process.arch` like `x64` or `ia32` unless the user passes the `--target_arch` option to override.
 - `libc` matches `require('detect-libc').family` like `glibc` or `musl` unless the user passes the `--target_libc` option to override.
 - `configuration` - Either 'Release' or 'Debug' depending on if `--debug` is passed during the build.
 - `module_name` - the `binary.module_name` attribute from `package.json`.
 - `version` - the semver `version` value for your module from `package.json` (NOTE: ignores the `semver.build` property).
 - `major`, `minor`, `patch`, and `prelease` match the individual semver values for your module's `version`
 - `build` - the sevmer `build` value. For example it would be `this.that` if your package.json `version` was `v1.0.0+this.that`
 - `prerelease` - the semver `prerelease` value. For example it would be `alpha.beta` if your package.json `version` was `v1.0.0-alpha.beta`


The options are visible in the code at <https://github.com/mapbox/node-pre-gyp/blob/612b7bca2604508d881e1187614870ba19a7f0c5/lib/util/versioning.js#L114-L127>

# Download binary files from a mirror

S3 is broken in China for the well known reason.

Using the `npm` config argument: `--{module_name}_binary_host_mirror` can download binary files through a mirror.

e.g.: Install [v8-profiler](https://www.npmjs.com/package/v8-profiler) from `npm`.

```bash
$ npm install v8-profiler --profiler_binary_host_mirror=https://npm.taobao.org/mirrors/node-inspector/
```

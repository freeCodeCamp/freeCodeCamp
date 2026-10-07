<div align="center">

<p>
  <sup>
    <a href="https://github.com/sponsors/motdotla">Dotenv libraries are supported by the community.</a>
  </sup>
</p>
<sup>Special thanks to:</sup>
<br>
<br>
<a href="https://www.warp.dev/?utm_source=github&utm_medium=referral&utm_campaign=dotenv_p_20220831">
  <div>
    <img src="https://res.cloudinary.com/dotenv-org/image/upload/v1661980709/warp_hi8oqj.png" width="230" alt="Warp">
  </div>
  <b>Warp is a blazingly fast, Rust-based terminal reimagined to work like a modern app.</b>
  <div>
    <sup>Get more done in the CLI with real text editing, block-based output, and AI command search.</sup>
  </div>
</a>
<br>
<a href="https://retool.com/?utm_source=sponsor&utm_campaign=dotenv">
  <div>
    <img src="https://res.cloudinary.com/dotenv-org/image/upload/c_scale,w_300/v1664466968/logo-full-black_vidfqf.png" width="270" alt="Retool">
  </div>
  <b>Retool helps developers build custom internal software, like CRUD apps and admin panels, really fast.</b>
  <div>
    <sup>Build UIs visually with flexible components, connect to any data source, and write business logic in JavaScript.</sup>
  </div>
</a>
<br>
<a href="https://workos.com/?utm_campaign=github_repo&utm_medium=referral&utm_content=dotenv&utm_source=github">
  <div>
    <img src="https://res.cloudinary.com/dotenv-org/image/upload/c_scale,w_400/v1665605496/68747470733a2f2f73696e647265736f726875732e636f6d2f6173736574732f7468616e6b732f776f726b6f732d6c6f676f2d77686974652d62672e737667_zdmsbu.svg" width="270" alt="WorkOS">
  </div>
  <b>Your App, Enterprise Ready.</b>
  <div>
    <sup>Add Single Sign-On, Multi-Factor Auth, and more, in minutes instead of months.</sup>
  </div>
</a>
<hr>
<br>
<br>
<br>
<br>

</div>

[![dotenv-vault](https://badge.dotenv.org/works-with.svg?r=1)](https://www.dotenv.org/r/github.com/dotenv-org/dotenv-vault?r=1)

# dotenv-expand

<img src="https://raw.githubusercontent.com/motdotla/dotenv-expand/master/dotenv-expand.png" alt="dotenv-expand" align="right" />

Dotenv-expand adds variable expansion on top of 
[dotenv](http://github.com/motdotla/dotenv). If you find yourself needing to
expand environment variables already existing on your machine, then
dotenv-expand is your tool.

[![BuildStatus](https://img.shields.io/travis/motdotla/dotenv-expand/master.svg?style=flat-square)](https://travis-ci.org/motdotla/dotenv-expand)
[![NPM version](https://img.shields.io/npm/v/dotenv-expand.svg?style=flat-square)](https://www.npmjs.com/package/dotenv-expand)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![Featured on Openbase](https://badges.openbase.com/js/featured/dotenv-expand.svg?token=BGZJQVRDGu24cWu/F8LIrCmZvIhC1yUc03IUkk9/sUM=)](https://openbase.com/js/dotenv-expand?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

## Install

```bash
# Install locally (recommended)
npm install dotenv-expand --save
```

Or installing with yarn? `yarn add dotenv-expand`

## Usage

Create a `.env` file in the root of your project:

```dosini
PASSWORD="s1mpl3"
DB_PASS=$PASSWORD

```

As early as possible in your application, import and configure dotenv and then expand dotenv:

```javascript
var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')

var myEnv = dotenv.config()
dotenvExpand.expand(myEnv)

console.log(process.env)
```

That's it. `process.env` now has the expanded keys and values you defined in your `.env` file.

### Preload

You can use the `--require` (`-r`) [command line option](https://nodejs.org/api/cli.html#cli_r_require_module) to preload dotenv & dotenv-expand. By doing this, you do not need to require and load dotenv or dotenv-expand in your application code. This is the preferred approach when using `import` instead of `require`.

```bash
$ node -r dotenv-expand/config your_script.js
```

The configuration options below are supported as command line arguments in the format `dotenv_config_<option>=value`

```bash
$ node -r dotenv-expand/config your_script.js dotenv_config_path=/custom/path/to/your/env/vars
```

Additionally, you can use environment variables to set configuration options. Command line arguments will precede these.

```bash
$ DOTENV_CONFIG_<OPTION>=value node -r dotenv-expand/config your_script.js
```

```bash
$ DOTENV_CONFIG_ENCODING=latin1 node -r dotenv-expand/config your_script.js dotenv_config_path=/custom/path/to/.env
```

## Examples

See [tests/.env](https://github.com/motdotla/dotenv-expand/blob/master/tests/.env) for simple and complex examples of variable expansion in your `.env`
file.

## Documentation

DotenvExpand exposes one function:

* expand

### Expand

`expand` will expand your environment variables.

```js
const dotenv = {
  parsed: {
    BASIC: 'basic',
    BASIC_EXPAND: '${BASIC}',
    BASIC_EXPAND_SIMPLE: '$BASIC'
  }
}

const obj = dotenvExpand.expand(dotenv)

console.log(obj)
```

#### Options

##### ignoreProcessEnv

Default: `false`

Turn off writing to `process.env`.

```js
const dotenv = {
  ignoreProcessEnv: true,
  parsed: {
    SHOULD_NOT_EXIST: 'testing'
  }
}
const obj = dotenvExpand.expand(dotenv).parsed

console.log(obj.SHOULD_NOT_EXIST) // testing
console.log(process.env.SHOULD_NOT_EXIST) // undefined
```

## FAQ

### What rules does the expansion engine follow?

The expansion engine roughly has the following rules:

* `$KEY` will expand any env with the name `KEY`
* `${KEY}` will expand any env with the name `KEY` 
* `\$KEY` will escape the `$KEY` rather than expand
* `${KEY:-default}` will first attempt to expand any env with the name `KEY`. If not one, then it will return `default`

You can see a full list of examples [here](https://github.com/motdotla/dotenv-expand/blob/master/tests/.env).

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## CHANGELOG

See [CHANGELOG.md](CHANGELOG.md)

## Who's using dotenv-expand?

[These npm modules depend on it.](https://www.npmjs.com/browse/depended/dotenv-expand)

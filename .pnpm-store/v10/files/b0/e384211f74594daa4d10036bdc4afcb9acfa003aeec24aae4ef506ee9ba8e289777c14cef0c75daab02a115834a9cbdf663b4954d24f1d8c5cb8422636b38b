# dotenv

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv" align="right" />

Dotenv is a zero-dependency module that loads environment variables from a `.env` file into [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env). Storing configuration in the environment separate from code is based on [The Twelve-Factor App](http://12factor.net/config) methodology.

[![BuildStatus](https://img.shields.io/travis/motdotla/dotenv/master.svg?style=flat-square)](https://travis-ci.org/motdotla/dotenv)
[![Build status](https://ci.appveyor.com/api/projects/status/github/motdotla/dotenv?svg=true)](https://ci.appveyor.com/project/motdotla/dotenv/branch/master)
[![NPM version](https://img.shields.io/npm/v/dotenv.svg?style=flat-square)](https://www.npmjs.com/package/dotenv)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![Coverage Status](https://img.shields.io/coveralls/motdotla/dotenv/master.svg?style=flat-square)](https://coveralls.io/github/motdotla/dotenv?branch=coverall-intergration)

## Install

```bash
# with npm
npm install dotenv

# or with Yarn
yarn add dotenv
```

## Usage

As early as possible in your application, require and configure dotenv.

```javascript
require('dotenv').config()
```

Create a `.env` file in the root directory of your project. Add
environment-specific variables on new lines in the form of `NAME=VALUE`.
For example:

```dosini
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

`process.env` now has the keys and values you defined in your `.env` file.

```javascript
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

### Preload

You can use the `--require` (`-r`) [command line option](https://nodejs.org/api/cli.html#cli_r_require_module) to preload dotenv. By doing this, you do not need to require and load dotenv in your application code. This is the preferred approach when using `import` instead of `require`.

```bash
$ node -r dotenv/config your_script.js
```

The configuration options below are supported as command line arguments in the format `dotenv_config_<option>=value`

```bash
$ node -r dotenv/config your_script.js dotenv_config_path=/custom/path/to/your/env/vars
```

Additionally, you can use environment variables to set configuration options. Command line arguments will precede these.

```bash
$ DOTENV_CONFIG_<OPTION>=value node -r dotenv/config your_script.js
```

```bash
$ DOTENV_CONFIG_ENCODING=latin1 node -r dotenv/config your_script.js dotenv_config_path=/custom/path/to/.env
```

## Config

`config` will read your `.env` file, parse the contents, assign it to
[`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env),
and return an Object with a `parsed` key containing the loaded content or an `error` key if it failed.

```js
const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)
```

You can additionally, pass options to `config`.

### Options

#### Path

Default: `path.resolve(process.cwd(), '.env')`

You may specify a custom path if your file containing environment variables is located elsewhere.

```js
require('dotenv').config({ path: '/full/custom/path/to/your/env/vars' })
```

#### Encoding

Default: `utf8`

You may specify the encoding of your file containing environment variables.

```js
require('dotenv').config({ encoding: 'latin1' })
```

#### Debug

Default: `false`

You may turn on logging to help debug why certain keys or values are not being set as you expect.

```js
require('dotenv').config({ debug: process.env.DEBUG })
```

## Parse

The engine which parses the contents of your file containing environment
variables is available to use. It accepts a String or Buffer and will return
an Object with the parsed keys and values.

```js
const dotenv = require('dotenv')
const buf = Buffer.from('BASIC=basic')
const config = dotenv.parse(buf) // will return an object
console.log(typeof config, config) // object { BASIC : 'basic' }
```

### Options

#### Debug

Default: `false`

You may turn on logging to help debug why certain keys or values are not being set as you expect.

```js
const dotenv = require('dotenv')
const buf = Buffer.from('hello world')
const opt = { debug: true }
const config = dotenv.parse(buf, opt)
// expect a debug message because the buffer is not in KEY=VAL form
```

### Rules

The parsing engine currently supports the following rules:

- `BASIC=basic` becomes `{BASIC: 'basic'}`
- empty lines are skipped
- lines beginning with `#` are treated as comments
- empty values become empty strings (`EMPTY=` becomes `{EMPTY: ''}`)
- inner quotes are maintained (think JSON) (`JSON={"foo": "bar"}` becomes `{JSON:"{\"foo\": \"bar\"}"`)
- whitespace is removed from both ends of unquoted values (see more on [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)) (`FOO=  some value  ` becomes `{FOO: 'some value'}`)
- single and double quoted values are escaped (`SINGLE_QUOTE='quoted'` becomes `{SINGLE_QUOTE: "quoted"}`)
- single and double quoted values maintain whitespace from both ends (`FOO="  some value  "` becomes `{FOO: '  some value  '}`)
- double quoted values expand new lines (`MULTILINE="new\nline"` becomes

```
{MULTILINE: 'new
line'}
```

## FAQ

### Should I commit my `.env` file?

No. We **strongly** recommend against committing your `.env` file to version
control. It should only include environment-specific values such as database
passwords or API keys. Your production database should have a different
password than your development database.

### Should I have multiple `.env` files?

No. We **strongly** recommend against having a "main" `.env` file and an "environment" `.env` file like `.env.test`. Your config should vary between deploys, and you should not be sharing values between environments.

> In a twelve-factor app, env vars are granular controls, each fully orthogonal to other env vars. They are never grouped together as “environments”, but instead are independently managed for each deploy. This is a model that scales up smoothly as the app naturally expands into more deploys over its lifetime.
>
> – [The Twelve-Factor App](http://12factor.net/config)

### What happens to environment variables that were already set?

We will never modify any environment variables that have already been set. In particular, if there is a variable in your `.env` file which collides with one that already exists in your environment, then that variable will be skipped. This behavior allows you to override all `.env` configurations with a machine-specific environment, although it is not recommended.

If you want to override `process.env` you can do something like this:

```javascript
const fs = require('fs')
const dotenv = require('dotenv')
const envConfig = dotenv.parse(fs.readFileSync('.env.override'))
for (let k in envConfig) {
  process.env[k] = envConfig[k]
}
```

### Can I customize/write plugins for dotenv?

For `dotenv@2.x.x`: Yes. `dotenv.config()` now returns an object representing
the parsed `.env` file. This gives you everything you need to continue
setting values on `process.env`. For example:

```js
const dotenv = require('dotenv')
const variableExpansion = require('dotenv-expand')
const myEnv = dotenv.config()
variableExpansion(myEnv)
```

### What about variable expansion?

Try [dotenv-expand](https://github.com/motdotla/dotenv-expand)

### How do I use dotenv with `import`?

ES2015 and beyond offers modules that allow you to `export` any top-level `function`, `class`, `var`, `let`, or `const`.

> When you run a module containing an `import` declaration, the modules it imports are loaded first, then each module body is executed in a depth-first traversal of the dependency graph, avoiding cycles by skipping anything already executed.
>
> – [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)

You must run `dotenv.config()` before referencing any environment variables. Here's an example of problematic code:

`errorReporter.js`:

```js
import { Client } from 'best-error-reporting-service'

export const client = new Client(process.env.BEST_API_KEY)
```

`index.js`:

```js
import dotenv from 'dotenv'
import errorReporter from './errorReporter'

dotenv.config()
errorReporter.client.report(new Error('faq example'))
```

`client` will not be configured correctly because it was constructed before `dotenv.config()` was executed. There are (at least) 3 ways to make this work.

1. Preload dotenv: `node --require dotenv/config index.js` (_Note: you do not need to `import` dotenv with this approach_)
2. Import `dotenv/config` instead of `dotenv` (_Note: you do not need to call `dotenv.config()` and must pass options via the command line or environment variables with this approach_)
3. Create a separate file that will execute `config` first as outlined in [this comment on #133](https://github.com/motdotla/dotenv/issues/133#issuecomment-255298822)

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Change Log

See [CHANGELOG.md](CHANGELOG.md)

## License

See [LICENSE](LICENSE)

## Who's using dotenv?

[These npm modules depend on it.](https://www.npmjs.com/browse/depended/dotenv)

Projects that expand it often use the [keyword "dotenv" on npm](https://www.npmjs.com/search?q=keywords:dotenv).

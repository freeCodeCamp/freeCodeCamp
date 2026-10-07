<img width="945" alt="2017-07-26 9 27 05" src="https://user-images.githubusercontent.com/8784712/28623641-373450f4-7249-11e7-854d-1b076dab274d.png">

[![NPM version](https://img.shields.io/npm/v/cac.svg?style=flat)](https://npmjs.com/package/cac) [![NPM downloads](https://img.shields.io/npm/dm/cac.svg?style=flat)](https://npmjs.com/package/cac) [![CircleCI](https://circleci.com/gh/cacjs/cac/tree/master.svg?style=shield)](https://circleci.com/gh/cacjs/cac/tree/master) [![Codecov](https://badgen.net/codecov/c/github/cacjs/cac/master)](https://codecov.io/gh/cacjs/cac) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe) [![install size](https://badgen.net/packagephobia/install/cac)](https://packagephobia.now.sh/result?p=cac)

## Introduction

**C**ommand **A**nd **C**onquer is a JavaScript library for building CLI apps.

## Features

- **Super light-weight**: No dependency, just a single file.
- **Easy to learn**. There're only 4 APIs you need to learn for building simple CLIs: `cli.option` `cli.version` `cli.help` `cli.parse`.
- **Yet so powerful**. Enable features like default command, git-like subcommands, validation for required arguments and options, variadic arguments, dot-nested options, automated help message generation and so on.
- **Developer friendly**. Written in TypeScript.

## Table of Contents

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
  - [Simple Parsing](#simple-parsing)
  - [Display Help Message and Version](#display-help-message-and-version)
  - [Command-specific Options](#command-specific-options)
  - [Dash in option names](#dash-in-option-names)
  - [Brackets](#brackets)
  - [Negated Options](#negated-options)
  - [Variadic Arguments](#variadic-arguments)
  - [Dot-nested Options](#dot-nested-options)
  - [Default Command](#default-command)
  - [Supply an array as option value](#supply-an-array-as-option-value)
  - [Error Handling](#error-handling)
  - [With TypeScript](#with-typescript)
  - [With Deno](#with-deno)
- [Projects Using CAC](#projects-using-cac)
- [References](#references)
  - [CLI Instance](#cli-instance)
    - [cac(name?)](#cacname)
    - [cli.command(name, description, config?)](#clicommandname-description-config)
    - [cli.option(name, description, config?)](#clioptionname-description-config)
    - [cli.parse(argv?)](#cliparseargv)
    - [cli.version(version, customFlags?)](#cliversionversion-customflags)
    - [cli.help(callback?)](#clihelpcallback)
    - [cli.outputHelp()](#clioutputhelp)
    - [cli.usage(text)](#cliusagetext)
  - [Command Instance](#command-instance)
    - [command.option()](#commandoption)
    - [command.action(callback)](#commandactioncallback)
    - [command.alias(name)](#commandaliasname)
    - [command.allowUnknownOptions()](#commandallowunknownoptions)
    - [command.example(example)](#commandexampleexample)
    - [command.usage(text)](#commandusagetext)
  - [Events](#events)
- [FAQ](#faq)
  - [How is the name written and pronounced?](#how-is-the-name-written-and-pronounced)
  - [Why not use Commander.js?](#why-not-use-commanderjs)
- [Project Stats](#project-stats)
- [Contributing](#contributing)
- [Author](#author)

<!-- tocstop -->

## Install

```bash
yarn add cac
```

## Usage

### Simple Parsing

Use CAC as simple argument parser:

```js
// examples/basic-usage.js
const cli = require('cac')()

cli.option('--type <type>', 'Choose a project type', {
  default: 'node',
})

const parsed = cli.parse()

console.log(JSON.stringify(parsed, null, 2))
```

<img width="500" alt="2018-11-26 12 28 03" src="https://user-images.githubusercontent.com/8784712/48981576-2a871000-f112-11e8-8151-80f61e9b9908.png">

### Display Help Message and Version

```js
// examples/help.js
const cli = require('cac')()

cli.option('--type [type]', 'Choose a project type', {
  default: 'node',
})
cli.option('--name <name>', 'Provide your name')

cli.command('lint [...files]', 'Lint files').action((files, options) => {
  console.log(files, options)
})

// Display help message when `-h` or `--help` appears
cli.help()
// Display version number when `-v` or `--version` appears
// It's also used in help message
cli.version('0.0.0')

cli.parse()
```

<img width="500" alt="2018-11-25 8 21 14" src="https://user-images.githubusercontent.com/8784712/48979012-acb20d00-f0ef-11e8-9cc6-8ffca00ab78a.png">

### Command-specific Options

You can attach options to a command.

```js
const cli = require('cac')()

cli
  .command('rm <dir>', 'Remove a dir')
  .option('-r, --recursive', 'Remove recursively')
  .action((dir, options) => {
    console.log('remove ' + dir + (options.recursive ? ' recursively' : ''))
  })

cli.help()

cli.parse()
```

A command's options are validated when the command is used. Any unknown options will be reported as an error. However, if an action-based command does not define an action, then the options are not validated. If you really want to use unknown options, use [`command.allowUnknownOptions`](#commandallowunknownoptions).

<img alt="command options" width="500" src="https://user-images.githubusercontent.com/8784712/49065552-49dc8500-f259-11e8-9c7b-a7c32d70920e.png">

### Dash in option names

Options in kebab-case should be referenced in camelCase in your code:

```js
cli
  .command('dev', 'Start dev server')
  .option('--clear-screen', 'Clear screen')
  .action((options) => {
    console.log(options.clearScreen)
  })
```

In fact `--clear-screen` and `--clearScreen` are both mapped to `options.clearScreen`.

### Brackets

When using brackets in command name, angled brackets indicate required command arguments, while square bracket indicate optional arguments.

When using brackets in option name, angled brackets indicate that a string / number value is required, while square bracket indicate that the value can also be `true`.

```js
const cli = require('cac')()

cli
  .command('deploy <folder>', 'Deploy a folder to AWS')
  .option('--scale [level]', 'Scaling level')
  .action((folder, options) => {
    // ...
  })

cli
  .command('build [project]', 'Build a project')
  .option('--out <dir>', 'Output directory')
  .action((folder, options) => {
    // ...
  })

cli.parse()
```

### Negated Options

To allow an option whose value is `false`, you need to manually specify a negated option:

```js
cli
  .command('build [project]', 'Build a project')
  .option('--no-config', 'Disable config file')
  .option('--config <path>', 'Use a custom config file')
```

This will let CAC set the default value of `config` to true, and you can use `--no-config` flag to set it to `false`.

### Variadic Arguments

The last argument of a command can be variadic, and only the last argument. To make an argument variadic you have to add `...` to the start of argument name, just like the rest operator in JavaScript. Here is an example:

```js
const cli = require('cac')()

cli
  .command('build <entry> [...otherFiles]', 'Build your app')
  .option('--foo', 'Foo option')
  .action((entry, otherFiles, options) => {
    console.log(entry)
    console.log(otherFiles)
    console.log(options)
  })

cli.help()

cli.parse()
```

<img width="500" alt="2018-11-25 8 25 30" src="https://user-images.githubusercontent.com/8784712/48979056-47125080-f0f0-11e8-9d8f-3219e0beb0ed.png">

### Dot-nested Options

Dot-nested options will be merged into a single option.

```js
const cli = require('cac')()

cli
  .command('build', 'desc')
  .option('--env <env>', 'Set envs')
  .example('--env.API_SECRET xxx')
  .action((options) => {
    console.log(options)
  })

cli.help()

cli.parse()
```

<img width="500" alt="2018-11-25 9 37 53" src="https://user-images.githubusercontent.com/8784712/48979771-6ada9400-f0fa-11e8-8192-e541b2cfd9da.png">

### Default Command

Register a command that will be used when no other command is matched.

```js
const cli = require('cac')()

cli
  // Simply omit the command name, just brackets
  .command('[...files]', 'Build files')
  .option('--minimize', 'Minimize output')
  .action((files, options) => {
    console.log(files)
    console.log(options.minimize)
  })

cli.parse()
```

### Supply an array as option value

```bash
node cli.js --include project-a
# The parsed options will be:
# { include: 'project-a' }

node cli.js --include project-a --include project-b
# The parsed options will be:
# { include: ['project-a', 'project-b'] }
```

### Error Handling

To handle command errors globally:

```js
try {
  // Parse CLI args without running the command
  cli.parse(process.argv, { run: false })
  // Run the command yourself
  // You only need `await` when your command action returns a Promise
  await cli.runMatchedCommand()
} catch (error) {
  // Handle error here..
  // e.g.
  // console.error(error.stack)
  // process.exit(1)
}
```

### With TypeScript

First you need `@types/node` to be installed as a dev dependency in your project:

```bash
yarn add @types/node --dev
```

Then everything just works out of the box:

```js
const { cac } = require('cac')
// OR ES modules
import { cac } from 'cac'
```

### With Deno

```ts
import { cac } from 'https://unpkg.com/cac/mod.ts'

const cli = cac('my-program')
```

## Projects Using CAC

Projects that use **CAC**:

- [VuePress](https://github.com/vuejs/vuepress): :memo: Minimalistic Vue-powered static site generator.
- [SAO](https://github.com/egoist/sao): ⚔️ Futuristic scaffolding tool.
- [DocPad](https://github.com/docpad/docpad): 🏹 Powerful Static Site Generator.
- [Poi](https://github.com/egoist/poi): ⚡️ Delightful web development.
- [bili](https://github.com/egoist/bili): 🥂 Schweizer Armeemesser for bundling JavaScript libraries.
- [Lad](https://github.com/ladjs/lad): 👦 Lad scaffolds a Koa webapp and API framework for Node.js.
- [Lass](https://github.com/lassjs/lass): 💁🏻 Scaffold a modern package boilerplate for Node.js.
- [Foy](https://github.com/zaaack/foy): 🏗 A lightweight and modern task runner and build tool for general purpose.
- [Vuese](https://github.com/vuese/vuese): 🤗 One-stop solution for vue component documentation.
- [NUT](https://github.com/nut-project/nut): 🌰 A framework born for microfrontends
- Feel free to add yours here...

## References

**💁 Check out [the generated docs](https://cac-api-doc.egoist.sh/classes/_cac_.cac.html) from source code if you want a more in-depth API references.**

Below is a brief overview.

### CLI Instance

CLI instance is created by invoking the `cac` function:

```js
const cac = require('cac')
const cli = cac()
```

#### cac(name?)

Create a CLI instance, optionally specify the program name which will be used to display in help and version message. When not set we use the basename of `argv[1]`.

#### cli.command(name, description, config?)

- Type: `(name: string, description: string) => Command`

Create a command instance.

The option also accepts a third argument `config` for additional command config:

- `config.allowUnknownOptions`: `boolean` Allow unknown options in this command.
- `config.ignoreOptionDefaultValue`: `boolean` Don't use the options's default value in parsed options, only display them in help message.

#### cli.option(name, description, config?)

- Type: `(name: string, description: string, config?: OptionConfig) => CLI`

Add a global option.

The option also accepts a third argument `config` for additional option config:

- `config.default`: Default value for the option.
- `config.type`: `any[]` When set to `[]`, the option value returns an array type. You can also use a conversion function such as `[String]`, which will invoke the option value with `String`.

#### cli.parse(argv?)

- Type: `(argv = process.argv) => ParsedArgv`

```ts
interface ParsedArgv {
  args: string[]
  options: {
    [k: string]: any
  }
}
```

When this method is called, `cli.rawArgs` `cli.args` `cli.options` `cli.matchedCommand` will also be available.

#### cli.version(version, customFlags?)

- Type: `(version: string, customFlags = '-v, --version') => CLI`

Output version number when `-v, --version` flag appears.

#### cli.help(callback?)

- Type: `(callback?: HelpCallback) => CLI`

Output help message when `-h, --help` flag appears.

Optional `callback` allows post-processing of help text before it is displayed:

```ts
type HelpCallback = (sections: HelpSection[]) => void

interface HelpSection {
  title?: string
  body: string
}
```

#### cli.outputHelp()

- Type: `() => CLI`

Output help message.

#### cli.usage(text)

- Type: `(text: string) => CLI`

Add a global usage text. This is not used by sub-commands.

### Command Instance

Command instance is created by invoking the `cli.command` method:

```js
const command = cli.command('build [...files]', 'Build given files')
```

#### command.option()

Basically the same as `cli.option` but this adds the option to specific command.

#### command.action(callback)

- Type: `(callback: ActionCallback) => Command`

Use a callback function as the command action when the command matches user inputs.

```ts
type ActionCallback = (
  // Parsed CLI args
  // The last arg will be an array if it's a variadic argument
  ...args: string | string[] | number | number[]
  // Parsed CLI options
  options: Options
) => any

interface Options {
  [k: string]: any
}
```

#### command.alias(name)

- Type: `(name: string) => Command`

Add an alias name to this command, the `name` here can't contain brackets.

#### command.allowUnknownOptions()

- Type: `() => Command`

Allow unknown options in this command, by default CAC will log an error when unknown options are used.

#### command.example(example)

- Type: `(example: CommandExample) => Command`

Add an example which will be displayed at the end of help message.

```ts
type CommandExample = ((name: string) => string) | string
```

#### command.usage(text)

- Type: `(text: string) => Command`

Add a usage text for this command.

### Events

Listen to commands:

```js
// Listen to the `foo` command
cli.on('command:foo', () => {
  // Do something
})

// Listen to the default command
cli.on('command:!', () => {
  // Do something
})

// Listen to unknown commands
cli.on('command:*', () => {
  console.error('Invalid command: %s', cli.args.join(' '))
  process.exit(1)
})
```

## FAQ

### How is the name written and pronounced?

CAC, or cac, pronounced `C-A-C`.

This project is dedicated to our lovely C.C. sama. Maybe CAC stands for C&C as well :P

<img src="http://i.giphy.com/v3FeH4swox9mg.gif" width="400"/>

### Why not use Commander.js?

CAC is very similar to Commander.js, while the latter does not support dot nested options, i.e. something like `--env.API_SECRET foo`. Besides, you can't use unknown options in Commander.js either.

_And maybe more..._

Basically I made CAC to fulfill my own needs for building CLI apps like [Poi](https://poi.js.org), [SAO](https://sao.vercel.app) and all my CLI apps. It's small, simple but powerful :P

## Project Stats

![Alt](https://repobeats.axiom.co/api/embed/58caf6203631bcdb9bbe22f0728a0af1683dc0bb.svg 'Repobeats analytics image')

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**CAC** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/cacjs/cac/contributors)).

> [Website](https://egoist.sh) · GitHub [@egoist](https://github.com/egoist) · Twitter [@\_egoistlily](https://twitter.com/_egoistlily)

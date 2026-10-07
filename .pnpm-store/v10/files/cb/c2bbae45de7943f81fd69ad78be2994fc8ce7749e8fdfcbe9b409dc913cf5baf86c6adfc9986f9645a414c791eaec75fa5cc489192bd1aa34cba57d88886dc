# 🚫💩 lint-staged

[![npm version](https://badge.fury.io/js/lint-staged.svg)](https://badge.fury.io/js/lint-staged)

---

Run tasks like formatters and linters against staged git files and don't let :poop: slip into your code base!

```bash
npm install --save-dev lint-staged # requires further setup
```

```
$ git commit

✔ Backed up original state in git stash (5bda95f)
❯ Running tasks for staged files...
  ❯ packages/frontend/.lintstagedrc.json — 1 file
    ↓ *.js — no files [SKIPPED]
    ❯ *.{json,md} — 1 file
      ⠹ prettier --write
  ↓ packages/backend/.lintstagedrc.json — 2 files
    ❯ *.js — 2 files
      ⠼ eslint --fix
    ↓ *.{json,md} — no files [SKIPPED]
◼ Applying modifications from tasks...
◼ Cleaning up temporary files...
```

<details>
<summary>See asciinema video</summary>

[![asciicast](https://asciinema.org/a/199934.svg)](https://asciinema.org/a/199934)

</details>

> [!Tip]
> Do you only want to check staged files for errors, but not edit them automatically?  
> You might be interested in this simpler shell script: [`lint-staged.sh`](https://github.com/lint-staged/lint-staged.sh).

## Table of Contents

- [Why](#why)
- [Installation and setup](#installation-and-setup)
- [Changelog](#changelog)
- [Command line flags](#command-line-flags)
- [Configuration](#configuration)
- [Filtering files](#filtering-files)
- [What commands are supported?](#what-commands-are-supported)
- [Running multiple commands in a sequence](#running-multiple-commands-in-a-sequence)
- [Using JS configuration files](#using-js-configuration-files)
- [Reformatting the code](#reformatting-the-code)
- [Examples](#examples)
- [Frequently Asked Questions](#frequently-asked-questions)

## Why

Code quality tasks like formatters and linters make more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a task on a whole project can be slow, and opinionated tasks such as linting can sometimes produce irrelevant results. Ultimately you only want to check files that will be committed.

This project contains a script that will run arbitrary shell tasks with a list of staged files as an argument, filtered by a specified glob pattern.

### Related blog posts and talks

- [Introductory Medium post - Andrey Okonetchnikov, 2016](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8#.8qepn2b5l)
- [Running Jest Tests Before Each Git Commit - Ben McCormick, 2017](https://benmccormick.org/2017/02/26/running-jest-tests-before-each-git-commit/)
- [AgentConf presentation - Andrey Okonetchnikov, 2018](https://www.youtube.com/watch?v=-mhY7e-EsC4)
- [SurviveJS interview - Juho Vepsäläinen and Andrey Okonetchnikov, 2018](https://survivejs.com/blog/lint-staged-interview/)
- [Prettier your CSharp with `dotnet-format` and `lint-staged`](https://johnnyreilly.com/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged)

## Installation and setup

To install _lint-staged_ in the recommended way, you need to:

1. Install _lint-staged_ itself:
   - `npm install --save-dev lint-staged`
1. Set up the `pre-commit` git hook to run _lint-staged_
   - [Husky](https://github.com/typicode/husky) is a popular choice for configuring git hooks
   - Read more about git hooks [here](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
1. Install some tools like [ESLint](https://eslint.org) or [Prettier](https://prettier.io)
1. Configure _lint-staged_ to run code checkers and other tasks:
   - for example: `{ "*.js": "eslint" }` to run ESLint for all staged JS files
   - See [Configuration](#configuration) for more info

Don't forget to commit changes to `package.json` and `.husky` to share this setup with your team!

Now change a few files, `git add` or `git add --patch` some of them to your commit, and try to `git commit` them.

See [examples](#examples) and [configuration](#configuration) for more information.

> [!CAUTION]  
> _Lint-staged_ runs `git` operations affecting the files in your repository. By default _lint-staged_ creates a `git stash` as a backup of the original state before running any configured tasks to help prevent data loss.

## Changelog

See [Releases](https://github.com/okonet/lint-staged/releases).

### Migration

For breaking changes, see [MIGRATION.md](./MIGRATION.md).

## Command line flags

```
❯ npx lint-staged --help
Usage: lint-staged [options]

Options:
  -V, --version                      output the version number
  --allow-empty                      allow empty commits when tasks revert all staged changes (default: false)
  -p, --concurrent <number|boolean>  the number of tasks to run concurrently, or false for serial (default: true)
  -c, --config [path]                path to configuration file, or - to read from stdin
  --cwd [path]                       run all tasks in specific directory, instead of the current
  -d, --debug                        print additional debug information (default: false)
  --diff [string]                    override the default "--staged" flag of "git diff" to get list of files. Implies
                                     "--no-stash".
  --diff-filter [string]             override the default "--diff-filter=ACMR" flag of "git diff" to get list of files
  --continue-on-error                run all tasks to completion even if one fails (default: false)
  --fail-on-changes                  fail with exit code 1 when tasks modify tracked files (default: false)
  --max-arg-length [number]          maximum length of the command-line argument string (default: 0)
  --no-revert                        do not revert to original state in case of errors.
  --no-stash                         disable the backup stash. Implies "--no-revert".
  --no-hide-partially-staged         disable hiding unstaged changes from partially staged files
  --hide-unstaged                    hide all unstaged changes, instead of just partially staged (default: false)
  -q, --quiet                        disable lint-staged’s own console output (default: false)
  -r, --relative                     pass relative filepaths to tasks (default: false)
  -v, --verbose                      show task output even when tasks succeed; by default only failed output is shown
                                     (default: false)
  -h, --help                         display help for command

Any lost modifications can be restored from a git stash:

  > git stash list --format="%h %s"
  h0a0s0h0 On main: lint-staged automatic backup
  > git apply --index h0a0s0h0
```

#### `--allow-empty`

By default, when tasks undo all staged changes, lint-staged will exit with an error and abort the commit. Use this flag to allow creating empty git commits.

#### `--concurrent [number|boolean]`

Controls the [concurrency of tasks](#task-concurrency) being run by lint-staged. **NOTE**: This does NOT affect the concurrency of subtasks (they will always be run sequentially). Possible values are:

- `false`: Run all tasks serially
- `true` (default) : _Infinite_ concurrency. Runs as many tasks in parallel as possible.
- `{number}`: Run the specified number of tasks in parallel, where `1` is equivalent to `false`.

#### `--config [path]`

Manually specify a path to a config file or npm package name. Note: when used, lint-staged won't perform the config file search and will print an error if the specified file cannot be found. If '-' is provided as the filename then the config will be read from stdin, allowing piping in the config like `cat my-config.json | npx lint-staged --config -`.

#### `--cwd [path]`

By default tasks run in the current working directory. Use the `--cwd some/directory` to override this. The path can be absolute or relative to the current working directory.

#### `--debug`

Run in debug mode. When set, it does the following:

- log additional information about staged files, commands being executed, location of binaries, etc.
- uses [`verbose` renderer](https://listr2.kilic.dev/renderers/verbose-renderer/) for `listr2`; this causes serial, uncoloured output to the terminal, instead of the default (beautified, dynamic) output.
  (the [`verbose` renderer](https://listr2.kilic.dev/renderers/verbose-renderer/) can also be activated by setting the `TERM=dumb` or `NODE_ENV=test` environment variables)

#### `--diff`

By default tasks are filtered against all files staged in git, generated from `git diff --staged`. This option allows you to override the `--staged` flag with arbitrary revisions. For example to get a list of changed files between two branches, use `--diff="branch1...branch2"`. You can also read more from about [git diff](https://git-scm.com/docs/git-diff) and [gitrevisions](https://git-scm.com/docs/gitrevisions). This option also implies `--no-stash`.

#### `--diff-filter [string]`

By default only files that are _added_, _copied_, _modified_, or _renamed_ are included. Use this flag to override the default `ACMR` value with something else: _added_ (`A`), _copied_ (`C`), _deleted_ (`D`), _modified_ (`M`), _renamed_ (`R`), _type changed_ (`T`), _unmerged_ (`U`), _unknown_ (`X`), or _pairing broken_ (`B`). See also the `git diff` docs for [--diff-filter](https://git-scm.com/docs/git-diff#Documentation/git-diff.txt---diff-filterACDMRTUXB82308203).

#### `--continue-on-error`

By default _lint-staged_ will "exit early" when any of the configured tasks fails, to make sure the runtime is short. With this flag, _lint-staged_ will instead run all tasks to completion and only fail at the end, allowing all task output to be seen.

#### `--fail-on-changes`

By default changes made by tasks are automatically staged and added to the commit. This flag disables the behavior and makes _lint-staged_ exit with code 1, failing the commit instead. Using this flag also implies the `--no-revert` flag which means any changes made my tasks will be left in the working tree after failing, so that they can be manually staged and the commit tried again.

#### `--max-arg-length [number]`

long commands (a lot of files) are automatically split into multiple chunks when it detects the current shell cannot handle them. Use this flag to override the maximum length of the generated command string.

#### `--no-stash`

By default a backup stash will be created before running the tasks, and all task modifications will be reverted in case of an error. This option will disable creating the stash, and instead leave all modifications in the index when aborting the commit.

#### `--no-hide-partially-staged`

By default, unstaged changes from partially staged files will be hidden and applied back after running tasks. This option will disable this behavior, causing those changes to also be committed.

#### `--hide-unstaged`

Use this option to hide all unstaged changes to tracked files before running tasks. The changes will be applied back after running the tasks. Note that the combination of flags `--hide-unstaged --no-hide-partially-staged` isn't meaningful and behaves the same as just `--hide-unstaged`.

#### `--quiet`

Suppress all CLI output, except from tasks.

#### `--relative`

Pass filepaths relative to `process.cwd()` (where `lint-staged` runs) to tasks. Default is `false`.

#### `--no-revert`

By default all task modifications will be reverted in case of an error. This option will disable the behavior, and apply task modifications to the index before aborting the commit.

#### `--verbose`

Show task output even when tasks succeed. By default only failed output is shown.

## Configuration

_Lint-staged_ can be configured in many ways:

- `lint-staged` object in your `package.json`, or [`package.yaml`](https://github.com/pnpm/pnpm/pull/1799)
- `.lintstagedrc` file in JSON or YML format, or you can be explicit with the file extension:
  - `.lintstagedrc.json`
  - `.lintstagedrc.yaml`
  - `.lintstagedrc.yml`
- `.lintstagedrc.mjs` or `lint-staged.config.mjs` file in ESM format
  - the default export value should be a configuration: `export default { ... }`
- `.lintstagedrc.cjs` or `lint-staged.config.cjs` file in CommonJS format
  - the exports value should be a configuration: `module.exports = { ... }`
- `lint-staged.config.js` or `.lintstagedrc.js` in either ESM or CommonJS format, depending on
  whether your project's _package.json_ contains the `"type": "module"` option or not.
- Pass a configuration file using the `--config` or `-c` flag

Configuration should be an object where each value is a **command** to run and its key is a glob pattern to use for this command. This package uses [picomatch](https://github.com/micromatch/picomatch) for glob patterns. JavaScript files can also export advanced configuration as a function. See [Using JS configuration files](#using-js-configuration-files) for more info.

You can also place multiple configuration files in different directories inside a project. For a given staged file, the closest configuration file will always be used. See ["How to use `lint-staged` in a multi-package monorepo?"](#how-to-use-lint-staged-in-a-multi-package-monorepo) for more info and an example.

#### `package.json` example:

```json
{
  "lint-staged": {
    "*": "your-cmd"
  }
}
```

#### `.lintstagedrc` example

```json
{
  "*": "your-cmd"
}
```

This config will execute `your-cmd` with the list of currently staged files passed as arguments.

So, considering you did `git add file1.ext file2.ext`, lint-staged will run the following command:

`your-cmd file1.ext file2.ext`

### TypeScript

_Lint-staged_ provides TypeScript types for the configuration and main Node.js API. You can use the JSDoc syntax in your JS configuration files:

```js
/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*': 'prettier --write',
}
```

It's also possible to use the `.ts` file extension for the configuration if your Node.js version supports it. The `--experimental-strip-types` flag was introduced in [Node.js v22.6.0](https://github.com/nodejs/node/releases/tag/v22.6.0) and unflagged in [v23.6.0](https://github.com/nodejs/node/releases/tag/v23.6.0), enabling Node.js to execute TypeScript files without additional configuration.

```shell
export NODE_OPTIONS="--experimental-strip-types"

npx lint-staged --config lint-staged.config.ts
```

### Task concurrency

By default _lint-staged_ will run configured tasks concurrently. This means that for every glob, all the commands will be started at the same time. With the following config, both `eslint` and `prettier` will run at the same time:

```json
{
  "*.ts": "eslint",
  "*.md": "prettier --list-different"
}
```

This is typically not a problem since the globs do not overlap, and the commands do not make changes to the files, but only report possible errors (aborting the git commit). If you want to run multiple commands for the same set of files, you can use the array syntax to make sure commands are run in order. In the following example, `prettier` will run for both globs, and in addition `eslint` will run for `*.ts` files _after_ it. Both sets of commands (for each glob) are still started at the same time (but do not overlap).

```json
{
  "*.ts": ["prettier --list-different", "eslint"],
  "*.md": "prettier --list-different"
}
```

Pay extra attention when the configured globs overlap, and tasks make edits to files. For example, in this configuration `prettier` and `eslint` might try to make changes to the same `*.ts` file at the same time, causing a _race condition_:

```json
{
  "*": "prettier --write",
  "*.ts": "eslint --fix"
}
```

You can solve it using the negation pattern and the array syntax:

```json
{
  "!(*.ts)": "prettier --write",
  "*.ts": ["eslint --fix", "prettier --write"]
}
```

Another example in which tasks make edits to files and globs match multiple files but don't overlap:

```json
{
  "*.css": ["stylelint --fix", "prettier --write"],
  "*.{js,jsx}": ["eslint --fix", "prettier --write"],
  "!(*.css|*.js|*.jsx)": ["prettier --write"]
}
```

Or, if necessary, you can limit the concurrency using `--concurrent <number>` or disable it entirely with `--concurrent false`.

## Filtering files

Task commands work on a subset of all staged files, defined by a _glob pattern_. lint-staged uses [picomatch](https://github.com/micromatch/picomatch) for matching files with the following rules:

- If the glob pattern contains no slashes (`/`), picomatch's `matchBase` option will be enabled, so globs match a file's basename regardless of directory:
  - `"*.js"` will match all JS files, like `/test.js` and `/foo/bar/test.js`
  - `"!(*test).js"` will match all JS files, except those ending in `test.js`, so `foo.js` but not `foo.test.js`
  - `"!(*.css|*.js)"` will match all files except CSS and JS files
- If the glob pattern does contain a slash (`/`), it will match for paths as well:
  - `"./*.js"` will match all JS files in the git repo root, so `/test.js` but not `/foo/bar/test.js`
  - `"foo/**/*.js"` will match all JS files inside the `/foo` directory, so `/foo/bar/test.js` but not `/test.js`

When matching, lint-staged will do the following

- Resolve the git root automatically, no configuration needed.
- Pick the staged files which are present inside the project directory.
- Filter them using the specified glob patterns.
- Pass absolute paths to the tasks as arguments.

**NOTE:** `lint-staged` will pass _absolute_ paths to the tasks to avoid any confusion in case they're executed in a different working directory (i.e. when your `.git` directory isn't the same as your `package.json` directory).

Also see [How to use `lint-staged` in a multi-package monorepo?](#how-to-use-lint-staged-in-a-multi-package-monorepo)

### Ignoring files

The concept of `lint-staged` is to run configured linter tasks (or other tasks) on files that are staged in git. `lint-staged` will always pass a list of all staged files to the task, and ignoring any files should be configured in the task itself.

Consider a project that uses [`prettier`](https://prettier.io/) to keep code format consistent across all files. The project also stores minified 3rd-party vendor libraries in the `vendor/` directory. To keep `prettier` from throwing errors on these files, the vendor directory should be added to prettier's ignore configuration, the `.prettierignore` file. Running `npx prettier .` will ignore the entire vendor directory, throwing no errors. When `lint-staged` is added to the project and configured to run prettier, all modified and staged files in the vendor directory will be ignored by prettier, even though it receives them as input.

In advanced scenarios, where it is impossible to configure the linter task itself to ignore files, but some staged files should still be ignored by `lint-staged`, it is possible to filter filepaths before passing them to tasks by using the function syntax. See [Example: Ignore files from match](#example-ignore-files-from-match).

## What commands are supported?

Supported are any executables installed locally or globally via `npm` as well as any executable from your \$PATH.

> Using globally installed scripts is discouraged, since lint-staged may not work for someone who doesn't have it installed.

`lint-staged` uses [tinyexec](https://github.com/tinylibs/tinyexec) to spawn locally installed commands. So in your `.lintstagedrc` you can write:

```json
{
  "*.js": "eslint --fix"
}
```

This will result in _lint-staged_ running `eslint --fix file-1.js file-2.js`, when you have staged files `file-1.js`, `file-2.js` and `README.md`.

Pass arguments to your commands separated by space as you would do in the shell. See [examples](#examples) below.

## Running multiple commands in a sequence

You can run multiple commands in a sequence on every glob. To do so, pass an array of commands instead of a single one. This is useful for running autoformatting tools like `eslint --fix` or `stylefmt` but can be used for any arbitrary sequences.

For example:

```json
{
  "*.js": ["eslint", "prettier --write"]
}
```

going to execute `eslint` and if it exits with `0` code, it will execute `prettier --write` on all staged `*.js` files.

This will result in _lint-staged_ running `eslint file-1.js file-2.js`, when you have staged files `file-1.js`, `file-2.js` and `README.md`, and if it passes, `prettier --write file-1.js file-2.js`.

## Using JS configuration files

Writing the configuration file in JavaScript is the most powerful way to configure lint-staged (`lint-staged.config.js`, [similar](https://github.com/okonet/lint-staged#configuration), or passed via `--config`). From the configuration file, you can export either a single function or an object.

If the `exports` value is a function, it will receive an array of all staged filenames. You can then build your own matchers for the files and return a command string or an array of command strings. These strings are considered complete and should include the filename arguments, if wanted.

If the `exports` value is an object, its keys should be glob matches (like in the normal non-js config format). The values can either be like in the normal config or individual functions like described above. Instead of receiving all matched files, the functions in the exported object will only receive the staged files matching the corresponding glob key.

To summarize, by default _lint-staged_ automatically adds the list of matched staged files to your command, but when building the command using JS functions it is expected to do this manually. For example:

```js
export default {
  '*.js': (stagedFiles) => [`eslint .`, `prettier --write ${stagedFiles.join(' ')}`],
}
```

This will result in _lint-staged_ first running `eslint .` (matching _all_ files), and if it passes, `prettier --write file-1.js file-2.js`, when you have staged files `file-1.js`, `file-2.js` and `README.md`.

### JavaScript Functions

You can also configure _lint-staged_ to run a JavaScript/Node.js script directly, passing the list of staged files as an argument:

```js
export default {
  '*.js': {
    title: 'Log staged JS files to console',
    task: async (files) => {
      console.log('Staged JS files:', files)
    },
  },
}
```

### Example: Export a function to build your own matchers

<details>
  <summary>Click to expand</summary>

```js
// lint-staged.config.js
import picomatch from 'picomatch'

export default (allStagedFiles) => {
  const shFiles = allStagedFiles.filter((file) => picomatch.isMatch(file, ['**/src/**/*.sh']))
  if (shFiles.length) {
    return `printf '%s\n' "Script files aren't allowed in src directory" >&2`
  }
  const codeFiles = allStagedFiles.filter((file) => picomatch.isMatch(file, ['**/*.js', '**/*.ts']))
  const docFiles = allStagedFiles.filter((file) => picomatch.isMatch(file, ['**/*.md']))
  return [`eslint ${codeFiles.join(' ')}`, `mdl ${docFiles.join(' ')}`]
}
```

</details>

### Example: Wrap filenames in single quotes and run once per file

<details>
  <summary>Click to expand</summary>

```js
// .lintstagedrc.js
export default {
  '**/*.js?(x)': (filenames) => filenames.map((filename) => `prettier --write '${filename}'`),
}
```

</details>

### Example: Run `tsc` on changes to TypeScript files, but do not pass any filename arguments

<details>
  <summary>Click to expand</summary>

```js
// lint-staged.config.js
export default {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
}
```

</details>

### Example: Run ESLint on entire repo if more than 10 staged files

<details>
  <summary>Click to expand</summary>

```js
// .lintstagedrc.js
export default {
  '**/*.js?(x)': (filenames) =>
    filenames.length > 10 ? 'eslint .' : `eslint ${filenames.join(' ')}`,
}
```

</details>

### Example: Use your own globs

<details>
  <summary>Click to expand</summary>

It's better to use the [function-based configuration (seen above)](https://github.com/okonet/lint-staged#example-export-a-function-to-build-your-own-matchers), if your use case is this.

```js
// lint-staged.config.js
import picomatch from 'picomatch'

export default {
  '*': (allFiles) => {
    const codeFiles = allFiles.filter((file) => picomatch.isMatch(file, ['**/*.js', '**/*.ts']))
    const docFiles = allFiles.filter((file) => picomatch.isMatch(file, ['**/*.md']))
    return [`eslint ${codeFiles.join(' ')}`, `mdl ${docFiles.join(' ')}`]
  },
}
```

</details>

### Example: Ignore files from match

<details>
  <summary>Click to expand</summary>

If for some reason you want to ignore files from the glob match, you can use `picomatch.isMatch()` with negated pattern(s):

```js
// lint-staged.config.js
import picomatch from 'picomatch'

export default {
  '*.js': (files) => {
    // from `files` filter those _NOT_ matching `*test.js`
    const match = files.filter((file) => picomatch.isMatch(file, '!*test.js'))
    return `eslint ${match.join(' ')}`
  },
}
```

Please note that for most cases, globs can achieve the same effect. For the above example, a matching glob would be `!(*test).js`.

</details>

### Example: Use relative paths for commands

<details>
  <summary>Click to expand</summary>

```js
import path from 'path'

export default {
  '*.ts': (absolutePaths) => {
    const cwd = process.cwd()
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file))
    return `ng lint myProjectName --files ${relativePaths.join(' ')}`
  },
}
```

</details>

## Reformatting the code

Tools like [Prettier](https://prettier.io), ESLint/TSLint, or stylelint can reformat your code according to an appropriate config by running `prettier --write`/`eslint --fix`/`tslint --fix`/`stylelint --fix`. Lint-staged will automatically add any modifications to the commit as long as there are no errors.

```json
{
  "*.js": "prettier --write"
}
```

Prior to version 10, tasks had to manually include `git add` as the final step. This behavior has been integrated into lint-staged itself in order to prevent race conditions with multiple tasks editing the same files. If lint-staged detects `git add` in task configurations, it will show a warning in the console. Please remove `git add` from your configuration after upgrading.

## Examples

All examples assume you've already set up lint-staged in the `package.json` file and [husky](https://github.com/typicode/husky) in its own config file.

```json
{
  "name": "My project",
  "version": "0.1.0",
  "scripts": {
    "my-custom-script": "linter --arg1 --arg2"
  },
  "lint-staged": {}
}
```

In `.husky/pre-commit`

```shell
# .husky/pre-commit

npx lint-staged
```

_Note: we don't pass a path as an argument for the runners. This is important since lint-staged will do this for you._

### ESLint with default parameters for `*.js` and `*.jsx` running as a pre-commit hook

<details>
  <summary>Click to expand</summary>

```json
{
  "*.{js,jsx}": "eslint"
}
```

</details>

### Automatically fix code style with `--fix` and add to commit

<details>
  <summary>Click to expand</summary>

```json
{
  "*.js": "eslint --fix"
}
```

This will run `eslint --fix` and automatically add changes to the commit.

</details>

### Reuse npm script

<details>
  <summary>Click to expand</summary>

If you wish to reuse a npm script defined in your package.json:

```json
{
  "*.js": "npm run my-custom-script --"
}
```

The following is equivalent:

```json
{
  "*.js": "linter --arg1 --arg2"
}
```

</details>

### Use environment variables with task commands

<details>
  <summary>Click to expand</summary>

Task commands _do not_ support the shell convention of expanding environment variables. To enable the convention yourself, use a tool like [`cross-env`](https://github.com/kentcdodds/cross-env).

For example, here is `jest` running on all `.js` files with the `NODE_ENV` variable being set to `"test"`:

```json
{
  "*.js": ["cross-env NODE_ENV=test jest --bail --findRelatedTests"]
}
```

</details>

### Automatically fix code style with `prettier` for any format Prettier supports

<details>
  <summary>Click to expand</summary>

```json
{
  "*": "prettier --ignore-unknown --write"
}
```

</details>

### Automatically fix code style with `prettier` for JavaScript, TypeScript, Markdown, HTML, or CSS

<details>
  <summary>Click to expand</summary>

```json
{
  "*.{js,jsx,ts,tsx,md,html,css}": "prettier --write"
}
```

</details>

### Stylelint for CSS with defaults and for SCSS with SCSS syntax

<details>
  <summary>Click to expand</summary>

```json
{
  "*.css": "stylelint",
  "*.scss": "stylelint --syntax=scss"
}
```

</details>

### Run PostCSS sorting and Stylelint to check

<details>
  <summary>Click to expand</summary>

```json
{
  "*.scss": ["postcss --config path/to/your/config --replace", "stylelint"]
}
```

</details>

### Minify the images

<details>
  <summary>Click to expand</summary>

```json
{
  "*.{png,jpeg,jpg,gif,svg}": "imagemin-lint-staged"
}
```

<details>
  <summary>More about <code>imagemin-lint-staged</code></summary>

[imagemin-lint-staged](https://github.com/tomchentw/imagemin-lint-staged) is a CLI tool designed for lint-staged usage with sensible defaults.

See more on [this blog post](https://medium.com/@tomchentw/imagemin-lint-staged-in-place-minify-the-images-before-adding-to-the-git-repo-5acda0b4c57e) for benefits of this approach.

</details>
</details>

### Typecheck your staged files with flow

<details>
  <summary>Click to expand</summary>

```json
{
  "*.{js,jsx}": "flow focus-check"
}
```

</details>

### Integrate with Next.js

<details>
  <summary>Click to expand</summary>

```js
// .lintstagedrc.js
// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
```

</details>

## Frequently Asked Questions

### The output of commit hook looks weird (no colors, duplicate lines, verbose output on Windows, …)

<details>
  <summary>Click to expand</summary>

Git 2.36.0 introduced a change to hooks where they were no longer run in the original TTY.
This was fixed in 2.37.0:

https://raw.githubusercontent.com/git/git/master/Documentation/RelNotes/2.37.0.txt

> - In Git 2.36 we revamped the way how hooks are invoked. One change
>   that is end-user visible is that the output of a hook is no longer
>   directly connected to the standard output of "git" that spawns the
>   hook, which was noticed post release. This is getting corrected.
>   (merge [a082345372](https://github.com/git/git/commit/a082345372) ab/hooks-regression-fix later to maint).

If updating Git doesn't help, you can try to manually redirect the output in your Git hook; for example:

```shell
# .husky/pre-commit

if sh -c ": >/dev/tty" >/dev/null 2>/dev/null; then exec >/dev/tty 2>&1; fi

npx lint-staged
```

Source: https://github.com/typicode/husky/issues/968#issuecomment-1176848345

</details>

### Can I use `lint-staged` via node?

<details>
  <summary>Click to expand</summary>

Yes!

```js
import lintStaged from 'lint-staged'

try {
  const success = await lintStaged()
  console.log(success ? 'Linting was successful!' : 'Linting failed!')
} catch (e) {
  // Failed to load configuration
  console.error(e)
}
```

Parameters to `lintStaged` are equivalent to their CLI counterparts:

```js
const success = await lintStaged({
  allowEmpty: false,
  concurrent: true,
  configPath: './path/to/configuration/file',
  cwd: process.cwd(),
  debug: false,
  maxArgLength: null,
  quiet: false,
  relative: false,
  stash: true,
  verbose: false,
})
```

You can also pass config directly with `config` option:

```js
const success = await lintStaged({
  allowEmpty: false,
  concurrent: true,
  config: { '*.js': 'eslint --fix' },
  cwd: process.cwd(),
  debug: false,
  maxArgLength: null,
  quiet: false,
  relative: false,
  stash: true,
  verbose: false,
})
```

The `maxArgLength` option configures chunking of tasks into multiple parts that are run one after the other. This is to avoid issues on Windows platforms where the maximum length of the command line argument string is limited to 8192 characters. Lint-staged might generate a very long argument string when there are many staged files. This option is set automatically from the cli, but not via the Node.js API by default.

</details>

### Using with JetBrains IDEs _(WebStorm, PyCharm, IntelliJ IDEA, RubyMine, etc.)_

<details>
  <summary>Click to expand</summary>

_**Update**_: The latest version of JetBrains IDEs now support running hooks as you would expect.

When using the IDE's GUI to commit changes with the `precommit` hook, you might see inconsistencies in the IDE and command line. This is [known issue](https://youtrack.jetbrains.com/issue/IDEA-135454) at JetBrains so if you want this fixed, please vote for it on YouTrack.

Until the issue is resolved in the IDE, you can use the following config to work around it:

husky v1.x

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "post-commit": "git update-index --again"
    }
  }
}
```

husky v0.x

```json
{
  "scripts": {
    "precommit": "lint-staged",
    "postcommit": "git update-index --again"
  }
}
```

_Thanks to [this comment](https://youtrack.jetbrains.com/issue/IDEA-135454#comment=27-2710654) for the fix!_

</details>

### How to use `lint-staged` in a multi-package monorepo?

<details>
  <summary>Click to expand</summary>

Install _lint-staged_ on the monorepo root level, and add separate configuration files in each package. When running, _lint-staged_ will always use the configuration closest to a staged file, so having separate configuration files makes sure tasks do not "leak" into other packages.

For example, in a monorepo with `packages/frontend/.lintstagedrc.json` and `packages/backend/.lintstagedrc.json`, a staged file inside `packages/frontend/` will only match that configuration, and not the one in `packages/backend/`.

**Note**: _lint-staged_ discovers the closest configuration to each staged file, even if that configuration doesn't include any matching globs. Given these example configurations:

```js
// ./.lintstagedrc.json
{ "*.md": "prettier --write" }
```

```js
// ./packages/frontend/.lintstagedrc.json
{ "*.js": "eslint --fix" }
```

When committing `./packages/frontend/README.md`, it **will not run** _prettier_, because the configuration in the `frontend/` directory is closer to the file and doesn't include it. You should treat all _lint-staged_ configuration files as isolated and separated from each other. You can always use JS files to "extend" configurations, for example:

```js
import baseConfig from '../.lintstagedrc.js'

export default {
  ...baseConfig,
  '*.js': 'eslint --fix',
}
```

To support backwards-compatibility, monorepo features require multiple _lint-staged_ configuration files present in the git repo. If you still want to run _lint-staged_ in only one of the packages in a monorepo, you can use the `--cwd` option (for example, `lint-staged --cwd packages/frontend`).

</details>

### Can I lint files outside of the current project folder?

<details>
  <summary>Click to expand</summary>

tl;dr: Yes, but the pattern should start with `../`.

By default, `lint-staged` executes tasks only on the files present inside the project folder(where `lint-staged` is installed and run from).
So this question is relevant _only_ when the project folder is a child folder inside the git repo.
In certain project setups, it might be desirable to bypass this restriction. See [#425](https://github.com/okonet/lint-staged/issues/425), [#487](https://github.com/okonet/lint-staged/issues/487) for more context.

`lint-staged` provides an escape hatch for the same(`>= v7.3.0`). For patterns that start with `../`, all the staged files are allowed to match against the pattern.
Note that patterns like `*.js`, `**/*.js` will still only match the project files and not any of the files in parent or sibling directories.

Example repo: [sudo-suhas/lint-staged-django-react-demo](https://github.com/sudo-suhas/lint-staged-django-react-demo).

</details>

### Can I run `lint-staged` in CI, or when there are no staged files?

<details>
  <summary>Click to expand</summary>

Lint-staged will by default run against files staged in git, and should be run during the git pre-commit hook, for example. It's also possible to override this default behaviour and run against files in a specific diff, for example
all changed files between two different branches. If you want to run _lint-staged_ in the CI, maybe you can set it up to compare the branch in a _Pull Request_/_Merge Request_ to the target branch.

Try out the `git diff` command until you are satisfied with the result, for example:

```
git diff --diff-filter=ACMR --name-only main...my-branch
```

This will print a list of _added_, _changed_, _modified_, and _renamed_ files between `main` and `my-branch`.

You can then run lint-staged against the same files with:

```
npx lint-staged --diff="main...my-branch"
```

Note that --diff="main..my-branch" will have files that changed on `main` and are not yet caught up on `my-branch` be detected as changed files.

To see just that changes on the current branch, as compared to `main` you may wish to use:

```
npx lint-staged --diff="$(git merge-base main HEAD)"
```

</details>

### Can I use `lint-staged` with `ng lint`

<details>
  <summary>Click to expand</summary>

You should not use `ng lint` through _lint-staged_, because it's designed to lint an entire project. Instead, you can add `ng lint` to your git pre-commit hook the same way as you would run lint-staged.

See issue [!951](https://github.com/okonet/lint-staged/issues/951) for more details and possible workarounds.

</details>

### How can I ignore files from `.eslintignore`?

<details>
  <summary>Click to expand</summary>

ESLint throws out `warning File ignored because of a matching ignore pattern. Use "--no-ignore" to override` warnings that breaks the linting process ( if you used `--max-warnings=0` which is recommended ).

#### ESLint < 7

<details>
  <summary>Click to expand</summary>

Based on the discussion from [this issue](https://github.com/eslint/eslint/issues/9977), it was decided that using [the outlined script](https://github.com/eslint/eslint/issues/9977#issuecomment-406420893)is the best route to fix this.

So you can setup a `.lintstagedrc.js` config file to do this:

```js
import { CLIEngine } from 'eslint'

export default {
  '*.js': (files) => {
    const cli = new CLIEngine({})
    return 'eslint --max-warnings=0 ' + files.filter((file) => !cli.isPathIgnored(file)).join(' ')
  },
}
```

</details>

#### ESLint >= 7

<details>
  <summary>Click to expand</summary>

In versions of ESLint > 7, [isPathIgnored](https://eslint.org/docs/developer-guide/nodejs-api#-eslintispathignoredfilepath) is an async function and now returns a promise. The code below can be used to reinstate the above functionality.

Since [10.5.3](https://github.com/okonet/lint-staged/releases), any errors due to a bad ESLint config will come through to the console.

```js
import { ESLint } from 'eslint'

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint()
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file)
    })
  )
  const filteredFiles = files.filter((_, i) => !isIgnored[i])
  return filteredFiles.join(' ')
}

export default {
  '**/*.{ts,tsx,js,jsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files)
    return [`eslint --max-warnings=0 ${filesToLint}`]
  },
}
```

</details>

#### ESLint >= 8.51.0 && [Flat ESLint config](https://eslint.org/docs/latest/use/configure/configuration-files-new)

<details>
  <summary>Click to expand</summary>

ESLint v8.51.0 introduced [`--no-warn-ignored` CLI flag](https://eslint.org/docs/latest/use/command-line-interface#--no-warn-ignored). It suppresses the `warning File ignored because of a matching ignore pattern. Use "--no-ignore" to override` warning, so manually ignoring files via `eslint.isPathIgnored` is no longer necessary.

```json
{
  "*.js": "eslint --max-warnings=0 --no-warn-ignored"
}
```

**NOTE:** `--no-warn-ignored` flag is only available when [Flat ESLint config](https://eslint.org/docs/latest/use/configure/configuration-files-new) is used.

</details>

</details>

### How can I resolve TypeScript (`tsc`) ignoring `tsconfig.json` when `lint-staged` runs via Husky hooks?

<details>
  <summary>Click to expand</summary>

When running `lint-staged` via Husky hooks, TypeScript may ignore `tsconfig.json`, leading to errors like:

> **TS17004:** Cannot use JSX unless the '--jsx' flag is provided.
> **TS1056:** Accessors are only available when targeting ECMAScript 5 and higher.

See issue [#825](https://github.com/okonet/lint-staged/issues/825) for more details.

#### Root Cause

1. `lint-staged` automatically passes matched staged files as arguments to commands.
2. Certain input files can cause TypeScript to ignore `tsconfig.json`. For more details, see this TypeScript issue: [Allow tsconfig.json when input files are specified](https://github.com/microsoft/TypeScript/issues/27379).

#### Workaround: Use a [function signature](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments) for the `tsc` command

As suggested by @antoinerousseau in [#825 (comment)](https://github.com/lint-staged/lint-staged/issues/825#issuecomment-620018284), using a function prevents `lint-staged` from appending file arguments:

**Before:**

```js
// package.json

"lint-staged": {
    "*.{ts,tsx}":[
      "tsc --noEmit",
      "prettier --write"
    ]
  }
```

**After:**

```js
// lint-staged.config.js
module.exports = {
  '*.{ts,tsx}': [() => 'tsc --noEmit', 'prettier --write'],
}
```

</details>

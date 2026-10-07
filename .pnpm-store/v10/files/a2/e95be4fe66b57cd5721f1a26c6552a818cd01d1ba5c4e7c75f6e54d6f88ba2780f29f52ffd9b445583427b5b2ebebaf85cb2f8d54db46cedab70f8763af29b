## v16

#### Updated Node.js version requirement

For version `lint-staged@16.0.0` the lowest supported Node.js version is `20.19.0`, following requirements of `nano-spawn`. Please upgrade your Node.js version.

For version `lint-staged@16.1.0` this is lowered to `20.17.0`, again following `nano-spawn`.

#### Removed validation for removed advanced configuration file options

Advanced configuration options (removed in v9) are no longer validated separately, and might be treated as valid globs for tasks. Please do not try to use advanced config options anymore, they haven't been supported since v8.

#### Removed the `--shell` option

The `--shell` flag has been removed and _lint-staged_ no longer supports evaluating commands directly via a shell. To migrate existing commands, you can create a shell script and invoke it instead. Lint-staged will pass matched staged files as a list of arguments, accessible via `"$@"`:

```shell
# my-script.sh
#!/bin/bash

echo "Staged files: $@"
```

and

```json
{ "*.js": "my-script.sh" }
```

If you were using the shell option to avoid passing filenames to tasks, for example `bash -c 'tsc --noEmit'`, use the function syntax instead:

```js
export default { '*.ts': () => 'tsc --noEmit' }
```

#### Processes are spawned using `nano-spawn`

Processes are spawned using [nano-spawn](https://github.com/sindresorhus/nano-spawn) instead of [execa](https://github.com/sindresorhus/execa). If you are using Node.js scripts as tasks, you might need to explicitly run them with `node`, especially when using Windows:

```json
{
  "*.js": "node my-js-linter.js"
}
```

## v15

- Since `v15.0.0` _lint-staged_ no longer supports Node.js 16. Please upgrade your Node.js version to at least `18.12.0`.

## v14

- Since `v14.0.0` _lint-staged_ no longer supports Node.js 14. Please upgrade your Node.js version to at least `16.14.0`.

## v13

- Since `v13.0.0` _lint-staged_ no longer supports Node.js 12. Please upgrade your Node.js version to at least `14.13.1`, or `16.0.0` onward.
- Version `v13.3.0` was incorrectly released including code of version `v14.0.0`. This means the breaking changes of `v14` are also included in `v13.3.0`, the last `v13` version released

## v12

- Since `v12.0.0` _lint-staged_ is a pure ESM module, so make sure your Node.js version is at least `12.20.0`, `14.13.1`, or `16.0.0`. Read more about ESM modules from the official [Node.js Documentation site here](https://nodejs.org/api/esm.html#introduction).

## v10

- From `v10.0.0` onwards any new modifications to originally staged files will be automatically added to the commit.
  If your task previously contained a `git add` step, please remove this.
  The automatic behaviour ensures there are less race-conditions,
  since trying to run multiple git operations at the same time usually results in an error.
- From `v10.0.0` onwards, lint-staged uses git stashes to improve speed and provide backups while running.
  Since git stashes require at least an initial commit, you shouldn't run lint-staged in an empty repo.
- From `v10.0.0` onwards, lint-staged requires Node.js version 10.13.0 or later.
- From `v10.0.0` onwards, lint-staged will abort the commit if linter tasks undo all staged changes. To allow creating an empty commit, please use the `--allow-empty` option.

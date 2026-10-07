| [index](../README.md) | [npm-run-all](npm-run-all.md) | [run-s](run-s.md) | run-p | [Node API](node-api.md) |
|-----------------------|-------------------------------|-------------------|-------|-------------------------|

# `run-p` command

A CLI command to run given npm-scripts in parallel.
This command is the shorthand of `npm-run-all -p`.

```
Usage:
    $ run-p [--help | -h | --version | -v]
    $ run-p [OPTIONS] <tasks>

    Run given npm-scripts in parallel.

    <tasks> : A list of npm-scripts' names and Glob-like patterns.

Options:
    --aggregate-output   - - - Avoid interleaving output by delaying printing of
                               each command's output until it has finished.
    -c, --continue-on-error  - Set the flag to continue executing other tasks
                               even if a task threw an error. 'run-p' itself
                               will exit with non-zero code if one or more tasks
                               threw error(s).
    --max-parallel <number>  - Set the maximum number of parallelism. Default is
                               unlimited.
    --npm-path <string>  - - - Set the path to npm. Default is the value of
                               environment variable npm_execpath.
                               If the variable is not defined, then it's "npm."
                               In this case, the "npm" command must be found in
                               environment variable PATH.
    -l, --print-label  - - - - Set the flag to print the task name as a prefix
                               on each line of output. Tools in tasks may stop
                               coloring their output if this option was given.
    -n, --print-name   - - - - Set the flag to print the task name before
                               running each task.
    -r, --race   - - - - - - - Set the flag to kill all tasks when a task
                               finished with zero.
    -s, --silent   - - - - - - Set 'silent' to the log level of npm.

    Shorthand aliases can be combined.
    For example, '-clns' equals to '-c -l -n -s'.

Examples:
    $ run-p watch:**
    $ run-p --print-label "build:** -- --watch"
    $ run-p -l "build:** -- --watch"
    $ run-p start-server start-browser start-electron
```

### npm-scripts

It's `"scripts"` field of `package.json`.
For example:

```json
{
    "scripts": {
        "clean": "rimraf dist",
        "lint":  "eslint src",
        "build": "babel src -o lib"
    }
}
```

We can run a script with `npm run` command.
On the other hand, this `run-p` command runs multiple scripts in parallel.

The following 2 commands are similar.
The `run-p` command is shorter and **available on Windows**.

```
$ run-p lint build
$ npm run lint & npm run build
```

**Note1:** If a script exited with a non-zero code, the other scripts and those descendant processes are killed with `SIGTERM` (On Windows, with `taskkill.exe /F /T`).
If `--continue-on-error` option is given, this behavior will be disabled.

**Note2:** `&` operator does not work on Windows' `cmd.exe`. But `run-p` works fine there.

### Glob-like pattern matching for script names

We can use [glob]-like patterns to specify npm-scripts.
The difference is one -- the separator is `:` instead of `/`.

```
$ run-p watch:*
```

In this case, runs sub scripts of `watch`. For example: `watch:html`, `watch:js`.
But, doesn't run sub-sub scripts. For example: `watch:js:index`.

```
$ run-p watch:**
```

If we use a globstar `**`, runs both sub scripts and sub-sub scripts.

`run-p` reads the actual npm-script list from `package.json` in the current directory, then filters the scripts by glob-like patterns, then runs those.

### Run with arguments

We can enclose a script name or a pattern in quotes to use arguments.
The following 2 commands are similar.

```
$ run-p "build:* -- --watch"
$ npm run build:aaa -- --watch & npm run build:bbb -- --watch
```

When we use a pattern, arguments are forwarded to every matched script.

### Argument placeholders

We can use placeholders to give the arguments preceded by `--` to scripts.

```
$ run-p "start-server -- --port {1}" -- 8080
```

This is useful to pass through arguments from `npm run` command.

```json
{
    "scripts": {
        "start": "run-p \"start-server -- --port {1}\" --"
    }
}
```

```
$ npm run start 8080

> example@0.0.0 start /path/to/package.json
> run-p "start-server -- --port {1}" -- "8080"
```

There are the following placeholders:

- `{1}`, `{2}`, ... -- An argument. `{1}` is the 1st argument. `{2}` is the 2nd.
- `{@}` -- All arguments.
- `{*}` -- All arguments as combined.

Those are similar to [Shell Parameters](http://www.gnu.org/software/bash/manual/bashref.html#Shell-Parameters). But please note arguments are enclosed by double quotes automatically (similar to npm).

### Known Limitations

- If `--print-label` option is given, some tools in scripts might stop coloring their output.
  Because some coloring library (e.g. [chalk]) will stop coloring if `process.stdout` is not a TTY.
  `run-p` changes the `process.stdout` of child processes to a pipe in order to add labels to the head of each line if `--print-label` option is given.<br>
  For example, [eslint] stops coloring under `run-p --print-label`. But [eslint] has `--color` option to force coloring, we can use it.

[glob]: https://www.npmjs.com/package/glob#glob-primer
[chalk]: https://www.npmjs.com/package/chalk
[eslint]: https://www.npmjs.com/package/eslint

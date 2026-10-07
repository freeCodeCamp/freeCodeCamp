| [index](../README.md) | npm-run-all | [run-s](run-s.md) | [run-p](run-p.md) | [Node API](node-api.md) |
|-----------------------|-------------|-------------------|-------------------|-------------------------|

# `npm-run-all` command

```
Usage:
    $ npm-run-all [--help | -h | --version | -v]
    $ npm-run-all [tasks] [OPTIONS]

    Run given npm-scripts in parallel or sequential.

    <tasks> : A list of npm-scripts' names and Glob-like patterns.

Options:
    --aggregate-output   - - - Avoid interleaving output by delaying printing of
                               each command's output until it has finished.
    -c, --continue-on-error  - Set the flag to continue executing
                               other/subsequent tasks even if a task threw an
                               error. 'npm-run-all' itself will exit with
                               non-zero code if one or more tasks threw error(s)
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
    -p, --parallel <tasks>   - Run a group of tasks in parallel.
                               e.g. 'npm-run-all -p foo bar' is similar to
                                    'npm run foo & npm run bar'.
    -r, --race   - - - - - - - Set the flag to kill all tasks when a task
                               finished with zero. This option is valid only
                               with 'parallel' option.
    -s, --sequential <tasks> - Run a group of tasks sequentially.
        --serial <tasks>       e.g. 'npm-run-all -s foo bar' is similar to
                                    'npm run foo && npm run bar'.
                               '--serial' is a synonym of '--sequential'.
    --silent   - - - - - - - - Set 'silent' to the log level of npm.

Examples:
    $ npm-run-all --serial clean lint build:**
    $ npm-run-all --parallel watch:**
    $ npm-run-all clean lint --parallel "build:** -- --watch"
    $ npm-run-all -l -p start-server start-browser start-electron
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
On the other hand, this `npm-run-all` command runs multiple scripts in parallel or sequential.

### Run scripts sequentially

```
$ npm-run-all clean lint build
```

This is same as `npm run clean && npm run lint && npm run build`.

**Note:** If a script exited with non zero code, the following scripts are not run.
If `--continue-on-error` option is given, this behavior will be disabled.

### Run scripts in parallel

```
$ npm-run-all --parallel lint build
```

This is similar to `npm run lint & npm run build`.

**Note1:** If a script exited with a non-zero code, the other scripts and those descendant processes are killed with `SIGTERM` (On Windows, with `taskkill.exe /F /T`).
If `--continue-on-error` option is given, this behavior will be disabled.

**Note2:** `&` operator does not work on Windows' `cmd.exe`. But `npm-run-all --parallel` works fine there.

### Run a mix of sequential and parallel scripts

```
$ npm-run-all clean lint --parallel watch:html watch:js
```

1. First, this runs `clean` and `lint` sequentially / serially.
2. Next, runs `watch:html` and `watch:js` in parallel.

```
$ npm-run-all a b --parallel c d --sequential e f --parallel g h i
```
or

```
$ npm-run-all a b --parallel c d --serial e f --parallel g h i
```

1. First, runs `a` and `b` sequentially / serially.
2. Second, runs `c` and `d` in parallel.
3. Third, runs `e` and `f` sequentially / serially.
4. Lastly, runs `g`, `h`, and `i` in parallel.

### Glob-like pattern matching for script names

We can use [glob]-like patterns to specify npm-scripts.
The difference is one -- the separator is `:` instead of `/`.

```
$ npm-run-all --parallel watch:*
```

In this case, runs sub scripts of `watch`. For example: `watch:html`, `watch:js`.
But, doesn't run sub-sub scripts. For example: `watch:js:index`.

```
$ npm-run-all --parallel watch:**
```

If we use a globstar `**`, runs both sub scripts and sub-sub scripts.

`npm-run-all` reads the actual npm-script list from `package.json` in the current directory, then filters the scripts by glob-like patterns, then runs those.

### Run with arguments

We can enclose a script name or a pattern in quotes to use arguments.
The following 2 commands are similar.

```
$ npm-run-all --parallel "build:* -- --watch"
$ npm run build:aaa -- --watch & npm run build:bbb -- --watch
```

When we use a pattern, arguments are forwarded to every matched script.

### Argument placeholders

We can use placeholders to give the arguments preceded by `--` to scripts.

```
$ npm-run-all build "start-server -- --port {1}" -- 8080
```

This is useful to pass through arguments from `npm run` command.

```json
{
    "scripts": {
        "start": "npm-run-all build \"start-server -- --port {1}\" --"
    }
}
```

```
$ npm run start 8080

> example@0.0.0 start /path/to/package.json
> npm-run-all build "start-server -- --port {1}" -- "8080"
```

There are the following placeholders:

- `{1}`, `{2}`, ... -- An argument. `{1}` is the 1st argument. `{2}` is the 2nd.
- `{@}` -- All arguments.
- `{*}` -- All arguments as combined.

Those are similar to [Shell Parameters](http://www.gnu.org/software/bash/manual/bashref.html#Shell-Parameters). But please note arguments are enclosed by double quotes automatically (similar to npm).

### Known Limitations

- If `--print-label` option is given, some tools in scripts might stop coloring their output.
  Because some coloring library (e.g. [chalk]) will stop coloring if `process.stdout` is not a TTY.
  `npm-run-all` changes the `process.stdout` of child processes to a pipe in order to add labels to the head of each line if `--print-label` option is given.<br>
  For example, [eslint] stops coloring under `npm-run-all --print-label`. But [eslint] has `--color` option to force coloring, we can use it. For anything [chalk] based you can set the environment variable `FORCE_COLOR=1` to produce colored output anyway.

[glob]: https://www.npmjs.com/package/glob#glob-primer
[chalk]: https://www.npmjs.com/package/chalk
[eslint]: https://www.npmjs.com/package/eslint

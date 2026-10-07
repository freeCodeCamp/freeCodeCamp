| [index](../README.md) | [npm-run-all](npm-run-all.md) | [run-s](run-s.md) | [run-p](run-p.md) | Node API |
|-----------------------|-------------------------------|-------------------|-------------------|----------|

# Node API

A Node module to run given npm-scripts in parallel or sequential.

```js
const runAll = require("npm-run-all");

runAll(["clean", "lint", "build:*"], {parallel: false})
    .then(() => {
        console.log("done!");
    })
    .catch(err => {
        console.log("failed!");
    });

runAll(["build:* -- --watch"], {parallel: true})
    .then(() => {
        console.log("done!");
    })
    .catch(err => {
        console.log("failed!");
    });
```

## runAll

```
let promise = runAll(patterns, options);
```

Run npm-scripts.

- **patterns** `string|string[]` -- Glob-like patterns for script names.
- **options** `object`
  - **options.aggregateOutput** `boolean` --
    The flag to avoid interleaving output by delaying printing of each command's output until it has finished.
    This option is valid only with `options.parallel` option.
    Default is `false`.
  - **options.arguments** `string[]` --
    An argument list to replace argument placeholders (such as `{1}`, `{2}`). If pattern text has `{1}`, it's replaced by `options.arguments[0]`.
    Default is an empty array.
  - **options.continueOnError** `boolean` --
    The flag to continue executing other/subsequent scripts even if a script threw an error.
    Returned `Promise` object will be rejected if one or more scripts threw error(s).
    Default is `false`.
  - **options.parallel** `boolean` --
    The flag to run scripts in parallel.
    Default is `false`.
  - **options.maxParallel** `number` --
    The maximum number of parallelism.
    This option is valid only with `options.parallel` option.
    Default is `Number.POSITIVE_INFINITY`.
  - **options.npmPath** `string` --
    The path to npm.
    Default is `process.env.npm_execpath` or `"npm"`.
  - **options.packageConfig** `object|null` --
    The map-like object to overwrite package configs.
    Keys are package names.
    Every value is a map-like object (Pairs of variable name and value).
    e.g. `{"npm-run-all": {"test": 777, "test2": 333}}`
    Default is `null`.
  - **options.printLabel** `boolean` --
    Set the flag to print the task name as a prefix on each line of output.
    Tools in scripts may stop coloring their output if this option is given.
    Default is `false`.
  - **options.printName** `boolean` --
    Set the flag to print the task name before running each task.
    Default is `false`.
  - **options.race** `boolean` --
    Set the flag to kill all npm-scripts when a npm-script finished with zero.
    This option is valid only with `options.parallel` option.
    Default is `false`.
  - **options.silent** `boolean` --
    The flag to set `silent` to the log level of npm.
    Default is `false`.
  - **options.stdin** `stream.Readable|null` --
    The readable stream to send to the stdin of npm-scripts.
    Default is nothing.
    Set `process.stdin` in order to send from stdin.
  - **options.stdout** `stream.Writable|null` --
    The writable stream to receive from the stdout of npm-scripts.
    Default is nothing.
    Set `process.stdout` in order to print to stdout.
  - **options.stderr** `stream.Writable|null` --
    The writable stream to receive from the stderr of npm-scripts
    Default is nothing.
    Set `process.stderr` in order to print to stderr.
  - **options.taskList** `string[]|null` --
    The string array of all script names.
    If this is `null`, it reads from `package.json` in the current directory.
    Default is `null`.

`runAll` returns a promise that will becomes *fulfilled* when all scripts are completed.
The promise will become *rejected* when any of the scripts exit with a non-zero code.

The promise gives `results` to the fulfilled handler.
`results` is an array of objects which have 2 properties: `name` and `code`.
The `name` property is the name of a npm-script.
The `code` property is the exit code of the npm-script. If the npm-script was not executed, the `code` property is `undefined`.

```js
runAll(["clean", "lint", "build"])
    .then(results => {
        console.log(`${results[0].name}: ${results[0].code}`); // clean: 0
        console.log(`${results[1].name}: ${results[1].code}`); // lint: 0
        console.log(`${results[2].name}: ${results[2].code}`); // build: 0
    });
```

## About MaxListenersExceededWarning

- If you use `options.stdin`, `options.stdout`, or `options.stderr` in parallel mode, please configure max listeners by [emitter.setMaxListeners(n)](https://nodejs.org/api/events.html#events_emitter_setmaxlisteners_n) properly.
- If you don't use those options and `process.stdXXX.isTTY` is `false`, please configure max listeners of the `process.stdXXX` properly. In that case, `npm-run-all` uses piping to connect to child processes.<br>
  On the other hand, if `process.stdXXX.isTTY` is `true`, `npm-run-all` uses `inherit` option, so the configuration is unnecessary.

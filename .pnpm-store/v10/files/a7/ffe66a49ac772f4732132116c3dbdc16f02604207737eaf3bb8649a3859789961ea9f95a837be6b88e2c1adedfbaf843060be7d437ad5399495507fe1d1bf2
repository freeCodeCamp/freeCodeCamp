# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html). (Format adopted after v3.0.0.)

<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD004 -->

## [7.2.0] (2021-03-26)

### Added

- TypeScript typing for `parent` property on `Command` ([#1475])
- TypeScript typing for `.attributeName()` on `Option` ([#1483])
- support information in package ([#1477])

### Changed

- improvements to error messages, README, and tests
- update dependencies

## [7.1.0] (2021-02-15)

### Added

- support for named imports from ECMAScript modules ([#1440])
- add `.cjs` to list of expected script file extensions ([#1449])
- allow using option choices and variadic together ([#1454])

### Fixed

- replace use of deprecated `process.mainModule` ([#1448])
- regression for legacy `command('*')` and call when command line includes options ([#1464])
- regression for `on('command:*', ...)` and call when command line includes unknown options ([#1464])
- display best error for combination of unknown command and unknown option (i.e. unknown command) ([#1464])

### Changed

- make TypeScript typings tests stricter ([#1453])
- improvements to README and tests

## [7.0.0] (2021-01-15)

### Added

- `.enablePositionalOptions()` to let program and subcommand reuse same option ([#1427])
- `.passThroughOptions()` to pass options through to other programs without needing `--` ([#1427])
- `.allowExcessArguments(false)` to show an error message if there are too many command-arguments on command line for the action handler ([#1409])
- `.configureOutput()` to modify use of stdout and stderr or customise display of errors ([#1387])
- use `.addHelpText()` to add text before or after the built-in help, for just current command or also for all subcommands ([#1296])
- enhance Option class ([#1331])
  - allow hiding options from help
  - allow restricting option arguments to a list of choices
  - allow setting how default value is shown in help
- `.createOption()` to support subclassing of automatically created options (like `.createCommand()`) ([#1380])
- refactor the code generating the help into a separate public Help class ([#1365])
  - support sorting subcommands and options in help
  - support specifying wrap width (columns)
  - allow subclassing Help class
  - allow configuring Help class without subclassing

### Changed

- *Breaking:* options are stored safely by default, not as properties on the command ([#1409])
    - this especially affects accessing options on program, use `program.opts()`
    - revert behaviour with `.storeOptionsAsProperties()`
- *Breaking:* action handlers are passed options and command separately ([#1409])
- deprecated callback parameter to `.help()` and `.outputHelp()` (removed from README) ([#1296])
- *Breaking:* errors now displayed using `process.stderr.write()` instead of `console.error()`
- deprecate `.on('--help')` (removed from README) ([#1296])
- initialise the command description to empty string (previously undefined) ([#1365])
- document and annotate deprecated routines ([#1349])

### Fixed

- wrapping bugs in help ([#1365])
  - first line of command description was wrapping two characters early
  - pad width calculation was not including help option and help command
  - pad width calculation was including hidden options and commands
- improve backwards compatibility for custom command event listeners ([#1403])
  
### Deleted

- *Breaking:* `.passCommandToAction()` ([#1409])
    - no longer needed as action handler is passed options and command
- *Breaking:* "extra arguments" parameter to action handler ([#1409])
    - if being used to detect excess arguments, there is now an error available by setting `.allowExcessArguments(false)`

### Migration Tips

The biggest change is the parsed option values. Previously the options were stored by default as properties on the command object, and now the options are stored separately.

If you wish to restore the old behaviour and get running quickly you can call `.storeOptionsAsProperties()`. 
To allow you to move to the new code patterns incrementally, the action handler will be passed the command _twice_,
to match the new "options" and "command" parameters (see below).

**program options**

Use the `.opts()` method to access the options. This is available on any command but is used most with the program.

```js
program.option('-d, --debug');
program.parse();
// Old code before Commander 7
if (program.debug) console.log(`Program name is ${program.name()}`);
```

```js
// New code
const options = program.opts();
if (options.debug) console.log(`Program name is ${program.name()}`);
```

**action handler**

The action handler gets passed a parameter for each command-argument you declared. Previously by default the next parameter was the command object with the options as properties. Now the next two parameters are instead the options and the command. If you
only accessed the options there may be no code changes required.

```js
program
  .command('compress <filename>')
  .option('-t, --trace')
  // Old code before Commander 7
  .action((filename, cmd)) => {
    if (cmd.trace) console.log(`Command name is ${cmd.name()}`);
  });
```

```js
  // New code
  .action((filename, options, command)) => {
    if (options.trace) console.log(`Command name is ${command.name()}`);
  });
```

If you already set `.storeOptionsAsProperties(false)` you may still need to adjust your code.

```js
program
  .command('compress <filename>')
  .storeOptionsAsProperties(false)
  .option('-t, --trace')
  // Old code before Commander 7
  .action((filename, command)) => {
    if (command.opts().trace) console.log(`Command name is ${command.name()}`);
  });
```

```js
   // New code
   .action((filename, options, command)) => {
      if (command.opts().trace) console.log(`Command name is ${command.name()}`);
   });
```

## [7.0.0-2] (2020-12-14)

(Released in 7.0.0)

## [7.0.0-1] (2020-11-21)

(Released in 7.0.0)

## [7.0.0-0] (2020-10-25)

(Released in 7.0.0)

## [6.2.1] (2020-12-13)

### Fixed

- some tests failed if directory path included a space ([1390])

## [6.2.0] (2020-10-25)

### Added

- added 'tsx' file extension for stand-alone executable subcommands ([#1368])
- documented second parameter to `.description()` to describe command arguments ([#1353])
- documentation of special cases with options taking varying numbers of option-arguments ([#1332])
- documentation for terminology ([#1361])
  
### Fixed

- add missing TypeScript definition for `.addHelpCommand()' ([#1375])
- removed blank line after "Arguments:" in help, to match "Options:" and "Commands:" ([#1360])

### Changed

- update dependencies

## [6.1.0] (2020-08-28)

### Added

- include URL to relevant section of README for error for potential conflict between Command properties and option values ([#1306])
- `.combineFlagAndOptionalValue(false)` to ease upgrade path from older versions of Commander ([#1326])
- allow disabling the built-in help option using `.helpOption(false)` ([#1325])
- allow just some arguments in `argumentDescription` to `.description()` ([#1323])

### Changed

- tidy async test and remove lint override ([#1312])

### Fixed

- executable subcommand launching when script path not known ([#1322])

## [6.0.0] (2020-07-21)

### Added

- add support for variadic options ([#1250])
- allow options to be added with just a short flag ([#1256])
  - *Breaking* the option property has same case as flag. e.g. flag `-n` accessed as `opts().n` (previously uppercase)
- *Breaking* throw an error if there might be a clash between option name and a Command property, with advice on how to resolve ([#1275])

### Fixed

- Options which contain -no- in the middle of the option flag should not be treated as negatable. ([#1301])

## [6.0.0-0] (2020-06-20)

(Released in 6.0.0)

## [5.1.0] (2020-04-25)

### Added

- support for multiple command aliases, the first of which is shown in the auto-generated help ([#531], [#1236])
- configuration support in `addCommand()` for `hidden` and `isDefault` ([#1232])

### Fixed

- omit masked help flags from the displayed help ([#645], [#1247])
- remove old short help flag when change help flags using `helpOption` ([#1248])

### Changed

- remove use of `arguments` to improve auto-generated help in editors ([#1235])
- rename `.command()` configuration `noHelp` to `hidden` (but not remove old support) ([#1232])
- improvements to documentation
- update dependencies
- update tested versions of node
- eliminate lint errors in TypeScript ([#1208])

## [5.0.0] (2020-03-14)

### Added

* support for nested commands with action-handlers ([#1] [#764] [#1149])
* `.addCommand()` for adding a separately configured command ([#764] [#1149])
* allow a non-executable to be set as the default command ([#742] [#1149])
* implicit help command when there are subcommands (previously only if executables) ([#1149])
* customise implicit help command with `.addHelpCommand()` ([#1149])
* display error message for unknown subcommand, by default ([#432] [#1088] [#1149])
* display help for missing subcommand, by default ([#1088] [#1149])
* combined short options as single argument may include boolean flags and value flag and value (e.g. `-a -b -p 80` can be written as `-abp80`) ([#1145])
* `.parseOption()` includes short flag and long flag expansions ([#1145])
* `.helpInformation()` returns help text as a string, previously a private routine ([#1169])
* `.parse()` implicitly uses `process.argv` if arguments not specified ([#1172])
* optionally specify where `.parse()` arguments "from", if not following node conventions ([#512] [#1172])
* suggest help option along with unknown command error ([#1179])
* TypeScript definition for `commands` property of `Command` ([#1184])
* export `program` property ([#1195])
* `createCommand` factory method to simplify subclassing ([#1191])

### Fixed

* preserve argument order in subcommands ([#508] [#962] [#1138])
* do not emit `command:*` for executable subcommands ([#809] [#1149])
* action handler called whether or not there are non-option arguments ([#1062] [#1149])
* combining option short flag and value in single argument now works for subcommands ([#1145])
* only add implicit help command when it will not conflict with other uses of argument ([#1153] [#1149])
* implicit help command works with command aliases ([#948] [#1149])
* options are validated whether or not there is an action handler ([#1149])

### Changed

* *Breaking* `.args` contains command arguments with just recognised options removed ([#1032] [#1138])
* *Breaking* display error if required argument for command is missing ([#995] [#1149])
* tighten TypeScript definition of custom option processing function passed to `.option()` ([#1119])
* *Breaking* `.allowUnknownOption()` ([#802] [#1138])
  * unknown options included in arguments passed to command action handler
  * unknown options included in `.args`
* only recognised option short flags and long flags are expanded (e.g. `-ab` or `--foo=bar`) ([#1145])
* *Breaking* `.parseOptions()` ([#1138])
  * `args` in returned result renamed `operands` and does not include anything after first unknown option
  * `unknown` in returned result has arguments after first unknown option including operands, not just options and values
* *Breaking* `.on('command:*', callback)` and other command events passed (changed) results from `.parseOptions`, i.e. operands and unknown  ([#1138])
* refactor Option from prototype to class ([#1133])
* refactor Command from prototype to class ([#1159])
* changes to error handling ([#1165])
  * throw for author error, not just display message
  * preflight for variadic error
  * add tips to missing subcommand executable
* TypeScript fluent return types changed to be more subclass friendly, return `this` rather than `Command` ([#1180])
* `.parseAsync` returns `Promise<this>` to be consistent with `.parse()` ([#1180])
* update dependencies

### Removed

* removed EventEmitter from TypeScript definition for Command, eliminating implicit peer dependency on `@types/node` ([#1146])
* removed private function `normalize` (the functionality has been integrated into `parseOptions`) ([#1145])
* `parseExpectedArgs` is now private ([#1149])

### Migration Tips

If you use `.on('command:*')` or more complicated tests to detect an unrecognised subcommand, you may be able to delete the code and rely on the default behaviour.

If you use `program.args` or more complicated tests to detect a missing subcommand, you may be able to delete the code and rely on the default behaviour.

If you use `.command('*')` to add a default command, you may be be able to switch to `isDefault:true` with a named command.

If you want to continue combining short options with optional values as though they were boolean flags, set `combineFlagAndOptionalValue(false)`
to expand `-fb` to `-f -b` rather than `-f b`.

## [5.0.0-4] (2020-03-03)

(Released in 5.0.0)

## [5.0.0-3] (2020-02-20)

(Released in 5.0.0)

## [5.0.0-2] (2020-02-10)

(Released in 5.0.0)

## [5.0.0-1] (2020-02-08)

(Released in 5.0.0)

## [5.0.0-0] (2020-02-02)

(Released in 5.0.0)

## Older versions

* [4.x](./changelogs/CHANGELOG-4.md)
* [3.x](./changelogs/CHANGELOG-3.md)
* [2.x](./changelogs/CHANGELOG-2.md)
* [1.x](./changelogs/CHANGELOG-1.md)
* [0.x](./changelogs/CHANGELOG-0.md)

[#1]: https://github.com/tj/commander.js/issues/1
[#432]: https://github.com/tj/commander.js/issues/432
[#508]: https://github.com/tj/commander.js/issues/508
[#512]: https://github.com/tj/commander.js/issues/512
[#531]: https://github.com/tj/commander.js/issues/531
[#645]: https://github.com/tj/commander.js/issues/645
[#742]: https://github.com/tj/commander.js/issues/742
[#764]: https://github.com/tj/commander.js/issues/764
[#802]: https://github.com/tj/commander.js/issues/802
[#809]: https://github.com/tj/commander.js/issues/809
[#948]: https://github.com/tj/commander.js/issues/948
[#962]: https://github.com/tj/commander.js/issues/962
[#995]: https://github.com/tj/commander.js/issues/995
[#1032]: https://github.com/tj/commander.js/issues/1032
[#1062]: https://github.com/tj/commander.js/pull/1062
[#1088]: https://github.com/tj/commander.js/issues/1088
[#1119]: https://github.com/tj/commander.js/pull/1119
[#1133]: https://github.com/tj/commander.js/pull/1133
[#1138]: https://github.com/tj/commander.js/pull/1138
[#1145]: https://github.com/tj/commander.js/pull/1145
[#1146]: https://github.com/tj/commander.js/pull/1146
[#1149]: https://github.com/tj/commander.js/pull/1149
[#1153]: https://github.com/tj/commander.js/issues/1153
[#1159]: https://github.com/tj/commander.js/pull/1159
[#1165]: https://github.com/tj/commander.js/pull/1165
[#1169]: https://github.com/tj/commander.js/pull/1169
[#1172]: https://github.com/tj/commander.js/pull/1172
[#1179]: https://github.com/tj/commander.js/pull/1179
[#1180]: https://github.com/tj/commander.js/pull/1180
[#1184]: https://github.com/tj/commander.js/pull/1184
[#1191]: https://github.com/tj/commander.js/pull/1191
[#1195]: https://github.com/tj/commander.js/pull/1195
[#1208]: https://github.com/tj/commander.js/pull/1208
[#1232]: https://github.com/tj/commander.js/pull/1232
[#1235]: https://github.com/tj/commander.js/pull/1235
[#1236]: https://github.com/tj/commander.js/pull/1236
[#1247]: https://github.com/tj/commander.js/pull/1247
[#1248]: https://github.com/tj/commander.js/pull/1248
[#1250]: https://github.com/tj/commander.js/pull/1250
[#1256]: https://github.com/tj/commander.js/pull/1256
[#1275]: https://github.com/tj/commander.js/pull/1275
[#1296]: https://github.com/tj/commander.js/pull/1296
[#1301]: https://github.com/tj/commander.js/issues/1301
[#1306]: https://github.com/tj/commander.js/pull/1306
[#1312]: https://github.com/tj/commander.js/pull/1312
[#1322]: https://github.com/tj/commander.js/pull/1322
[#1323]: https://github.com/tj/commander.js/pull/1323
[#1325]: https://github.com/tj/commander.js/pull/1325
[#1326]: https://github.com/tj/commander.js/pull/1326
[#1331]: https://github.com/tj/commander.js/pull/1331
[#1332]: https://github.com/tj/commander.js/pull/1332
[#1349]: https://github.com/tj/commander.js/pull/1349
[#1353]: https://github.com/tj/commander.js/pull/1353
[#1360]: https://github.com/tj/commander.js/pull/1360
[#1361]: https://github.com/tj/commander.js/pull/1361
[#1365]: https://github.com/tj/commander.js/pull/1365
[#1368]: https://github.com/tj/commander.js/pull/1368
[#1375]: https://github.com/tj/commander.js/pull/1375
[#1380]: https://github.com/tj/commander.js/pull/1380
[#1387]: https://github.com/tj/commander.js/pull/1387
[#1390]: https://github.com/tj/commander.js/pull/1390
[#1403]: https://github.com/tj/commander.js/pull/1403
[#1409]: https://github.com/tj/commander.js/pull/1409
[#1427]: https://github.com/tj/commander.js/pull/1427
[#1440]: https://github.com/tj/commander.js/pull/1440
[#1448]: https://github.com/tj/commander.js/pull/1448
[#1449]: https://github.com/tj/commander.js/pull/1449
[#1453]: https://github.com/tj/commander.js/pull/1453
[#1454]: https://github.com/tj/commander.js/pull/1454
[#1464]: https://github.com/tj/commander.js/pull/1464
[#1475]: https://github.com/tj/commander.js/pull/1475
[#1477]: https://github.com/tj/commander.js/pull/1477
[#1483]: https://github.com/tj/commander.js/pull/1483

[Unreleased]: https://github.com/tj/commander.js/compare/master...develop
[7.2.0]: https://github.com/tj/commander.js/compare/v7.1.0...v7.2.0
[7.1.0]: https://github.com/tj/commander.js/compare/v7.0.0...v7.1.0
[7.0.0]: https://github.com/tj/commander.js/compare/v6.2.1...v7.0.0
[7.0.0-2]: https://github.com/tj/commander.js/compare/v7.0.0-1...v7.0.0-2
[7.0.0-1]: https://github.com/tj/commander.js/compare/v7.0.0-0...v7.0.0-1
[7.0.0-0]: https://github.com/tj/commander.js/compare/v6.2.0...v7.0.0-0
[6.2.1]: https://github.com/tj/commander.js/compare/v6.2.0..v6.2.1
[6.2.0]: https://github.com/tj/commander.js/compare/v6.1.0..v6.2.0
[6.1.0]: https://github.com/tj/commander.js/compare/v6.0.0..v6.1.0
[6.0.0]: https://github.com/tj/commander.js/compare/v5.1.0..v6.0.0
[6.0.0-0]: https://github.com/tj/commander.js/compare/v5.1.0..v6.0.0-0
[5.1.0]: https://github.com/tj/commander.js/compare/v5.0.0..v5.1.0
[5.0.0]: https://github.com/tj/commander.js/compare/v4.1.1..v5.0.0
[5.0.0-4]: https://github.com/tj/commander.js/compare/v5.0.0-3..v5.0.0-4
[5.0.0-3]: https://github.com/tj/commander.js/compare/v5.0.0-2..v5.0.0-3
[5.0.0-2]: https://github.com/tj/commander.js/compare/v5.0.0-1..v5.0.0-2
[5.0.0-1]: https://github.com/tj/commander.js/compare/v5.0.0-0..v5.0.0-1
[5.0.0-0]: https://github.com/tj/commander.js/compare/v4.1.1..v5.0.0-0

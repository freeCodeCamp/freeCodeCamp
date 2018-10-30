
2.19.0 / 2018-10-02
==================

  * Removed newline after Options and Commands headers (#864)
  * Bugfix - Error output (#862)
  * Fix to change default value to string (#856)

2.18.0 / 2018-09-07
==================

  * Standardize help output (#853)
  * chmod 644 travis.yml (#851)
  * add support for execute typescript subcommand via ts-node (#849)

2.17.1 / 2018-08-07
==================

  * Fix bug in command emit (#844)

2.17.0 / 2018-08-03
==================

  * fixed newline output after help information (#833)
  * Fix to emit the action even without command (#778)
  * npm update (#823)

2.16.0 / 2018-06-29
==================

  * Remove Makefile and `test/run` (#821)
  * Make 'npm test' run on Windows (#820)
  * Add badge to display install size (#807)
  * chore: cache node_modules (#814)
  * chore: remove Node.js 4 (EOL), add Node.js 10 (#813)
  * fixed typo in readme (#812)
  * Fix types (#804)
  * Update eslint to resolve vulnerabilities in lodash (#799)
  * updated readme with custom event listeners. (#791)
  * fix tests (#794)

2.15.0 / 2018-03-07
==================

  * Update downloads badge to point to graph of downloads over time instead of duplicating link to npm
  * Arguments description

2.14.1 / 2018-02-07
==================

  * Fix typing of help function

2.14.0 / 2018-02-05
==================

  * only register the option:version event once
  * Fixes issue #727: Passing empty string for option on command is set to undefined
  * enable eqeqeq rule
  * resolves #754 add linter configuration to project
  * resolves #560 respect custom name for version option
  * document how to override the version flag
  * document using options per command

2.13.0 / 2018-01-09
==================

  * Do not print default for --no-
  * remove trailing spaces in command help
  * Update CI's Node.js to LTS and latest version
  * typedefs: Command and Option types added to commander namespace

2.12.2 / 2017-11-28
==================

  * fix: typings are not shipped

2.12.1 / 2017-11-23
==================

  * Move @types/node to dev dependency

2.12.0 / 2017-11-22
==================

  * add attributeName() method to Option objects
  * Documentation updated for options with --no prefix
  * typings: `outputHelp` takes a string as the first parameter
  * typings: use overloads
  * feat(typings): update to match js api
  * Print default value in option help
  * Fix translation error
  * Fail when using same command and alias (#491)
  * feat(typings): add help callback
  * fix bug when description is add after command with options (#662)
  * Format js code
  * Rename History.md to CHANGELOG.md (#668)
  * feat(typings): add typings to support TypeScript (#646)
  * use current node

2.11.0 / 2017-07-03
==================

  * Fix help section order and padding (#652)
  * feature: support for signals to subcommands (#632)
  * Fixed #37, --help should not display first (#447)
  * Fix translation errors. (#570)
  * Add package-lock.json
  * Remove engines
  * Upgrade package version
  * Prefix events to prevent conflicts between commands and options (#494)
  * Removing dependency on graceful-readlink
  * Support setting name in #name function and make it chainable
  * Add .vscode directory to .gitignore (Visual Studio Code metadata)
  * Updated link to ruby commander in readme files

2.10.0 / 2017-06-19
==================

  * Update .travis.yml. drop support for older node.js versions.
  * Fix require arguments in README.md
  * On SemVer you do not start from 0.0.1
  * Add missing semi colon in readme
  * Add save param to npm install
  * node v6 travis test
  * Update Readme_zh-CN.md
  * Allow literal '--' to be passed-through as an argument
  * Test subcommand alias help
  * link build badge to master branch
  * Support the alias of Git style sub-command
  * added keyword commander for better search result on npm
  * Fix Sub-Subcommands
  * test node.js stable
  * Fixes TypeError when a command has an option called `--description`
  * Update README.md to make it beginner friendly and elaborate on the difference between angled and square brackets.
  * Add chinese Readme file

2.9.0 / 2015-10-13
==================

  * Add option `isDefault` to set default subcommand #415 @Qix-
  * Add callback to allow filtering or post-processing of help text #434 @djulien
  * Fix `undefined` text in help information close #414 #416 @zhiyelee

2.8.1 / 2015-04-22
==================

 * Back out `support multiline description` Close #396 #397

2.8.0 / 2015-04-07
==================

  * Add `process.execArg` support, execution args like `--harmony` will be passed to sub-commands #387 @DigitalIO @zhiyelee
  * Fix bug in Git-style sub-commands #372 @zhiyelee
  * Allow commands to be hidden from help #383 @tonylukasavage
  * When git-style sub-commands are in use, yet none are called, display help #382 @claylo
  * Add ability to specify arguments syntax for top-level command #258 @rrthomas
  * Support multiline descriptions #208 @zxqfox

2.7.1 / 2015-03-11
==================

 * Revert #347 (fix collisions when option and first arg have same name) which causes a bug in #367.

2.7.0 / 2015-03-09
==================

 * Fix git-style bug when installed globally. Close #335 #349 @zhiyelee
 * Fix collisions when option and first arg have same name. Close #346 #347 @tonylukasavage
 * Add support for camelCase on `opts()`. Close #353  @nkzawa
 * Add node.js 0.12 and io.js to travis.yml
 * Allow RegEx options. #337 @palanik
 * Fixes exit code when sub-command failing.  Close #260 #332 @pirelenito
 * git-style `bin` files in $PATH make sense. Close #196 #327  @zhiyelee

2.6.0 / 2014-12-30
==================

  * added `Command#allowUnknownOption` method. Close #138 #318 @doozr @zhiyelee
  * Add application description to the help msg. Close #112 @dalssoft

2.5.1 / 2014-12-15
==================

  * fixed two bugs incurred by variadic arguments. Close #291 @Quentin01 #302 @zhiyelee

2.5.0 / 2014-10-24
==================

 * add support for variadic arguments. Closes #277 @whitlockjc

2.4.0 / 2014-10-17
==================

 * fixed a bug on executing the coercion function of subcommands option. Closes #270
 * added `Command.prototype.name` to retrieve command name. Closes #264 #266 @tonylukasavage
 * added `Command.prototype.opts` to retrieve all the options as a simple object of key-value pairs. Closes #262 @tonylukasavage
 * fixed a bug on subcommand name. Closes #248 @jonathandelgado
 * fixed function normalize doesn’t honor option terminator. Closes #216 @abbr

2.3.0 / 2014-07-16
==================

 * add command alias'. Closes PR #210
 * fix: Typos. Closes #99
 * fix: Unused fs module. Closes #217

2.2.0 / 2014-03-29
==================

 * add passing of previous option value
 * fix: support subcommands on windows. Closes #142
 * Now the defaultValue passed as the second argument of the coercion function.

2.1.0 / 2013-11-21
==================

 * add: allow cflag style option params, unit test, fixes #174

2.0.0 / 2013-07-18
==================

 * remove input methods (.prompt, .confirm, etc)

1.3.2 / 2013-07-18
==================

 * add support for sub-commands to co-exist with the original command

1.3.1 / 2013-07-18
==================

 * add quick .runningCommand hack so you can opt-out of other logic when running a sub command

1.3.0 / 2013-07-09
==================

 * add EACCES error handling
 * fix sub-command --help

1.2.0 / 2013-06-13
==================

 * allow "-" hyphen as an option argument
 * support for RegExp coercion

1.1.1 / 2012-11-20
==================

  * add more sub-command padding
  * fix .usage() when args are present. Closes #106

1.1.0 / 2012-11-16
==================

  * add git-style executable subcommand support. Closes #94

1.0.5 / 2012-10-09
==================

  * fix `--name` clobbering. Closes #92
  * fix examples/help. Closes #89

1.0.4 / 2012-09-03
==================

  * add `outputHelp()` method.

1.0.3 / 2012-08-30
==================

  * remove invalid .version() defaulting

1.0.2 / 2012-08-24
==================

  * add `--foo=bar` support [arv]
  * fix password on node 0.8.8. Make backward compatible with 0.6 [focusaurus]

1.0.1 / 2012-08-03
==================

  * fix issue #56
  * fix tty.setRawMode(mode) was moved to tty.ReadStream#setRawMode() (i.e. process.stdin.setRawMode())

1.0.0 / 2012-07-05
==================

  * add support for optional option descriptions
  * add defaulting of `.version()` to package.json's version

0.6.1 / 2012-06-01
==================

  * Added: append (yes or no) on confirmation
  * Added: allow node.js v0.7.x

0.6.0 / 2012-04-10
==================

  * Added `.prompt(obj, callback)` support. Closes #49
  * Added default support to .choose(). Closes #41
  * Fixed the choice example

0.5.1 / 2011-12-20
==================

  * Fixed `password()` for recent nodes. Closes #36

0.5.0 / 2011-12-04
==================

  * Added sub-command option support [itay]

0.4.3 / 2011-12-04
==================

  * Fixed custom help ordering. Closes #32

0.4.2 / 2011-11-24
==================

  * Added travis support
  * Fixed: line-buffered input automatically trimmed. Closes #31

0.4.1 / 2011-11-18
==================

  * Removed listening for "close" on --help

0.4.0 / 2011-11-15
==================

  * Added support for `--`. Closes #24

0.3.3 / 2011-11-14
==================

  * Fixed: wait for close event when writing help info [Jerry Hamlet]

0.3.2 / 2011-11-01
==================

  * Fixed long flag definitions with values [felixge]

0.3.1 / 2011-10-31
==================

  * Changed `--version` short flag to `-V` from `-v`
  * Changed `.version()` so it's configurable [felixge]

0.3.0 / 2011-10-31
==================

  * Added support for long flags only. Closes #18

0.2.1 / 2011-10-24
==================

  * "node": ">= 0.4.x < 0.7.0". Closes #20

0.2.0 / 2011-09-26
==================

  * Allow for defaults that are not just boolean. Default peassignment only occurs for --no-*, optional, and required arguments. [Jim Isaacs]

0.1.0 / 2011-08-24
==================

  * Added support for custom `--help` output

0.0.5 / 2011-08-18
==================

  * Changed: when the user enters nothing prompt for password again
  * Fixed issue with passwords beginning with numbers [NuckChorris]

0.0.4 / 2011-08-15
==================

  * Fixed `Commander#args`

0.0.3 / 2011-08-15
==================

  * Added default option value support

0.0.2 / 2011-08-15
==================

  * Added mask support to `Command#password(str[, mask], fn)`
  * Added `Command#password(str, fn)`

0.0.1 / 2010-01-03
==================

  * Initial release

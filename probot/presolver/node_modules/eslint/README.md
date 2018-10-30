[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Build status][appveyor-image]][appveyor-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![Bountysource](https://www.bountysource.com/badge/tracker?tracker_id=282608)](https://www.bountysource.com/trackers/282608-eslint?utm_source=282608&utm_medium=shield&utm_campaign=TRACKER_BADGE)
[![Join the chat at https://gitter.im/eslint/eslint](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/eslint/eslint?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# ESLint

[Website](http://eslint.org) |
[Configuring](http://eslint.org/docs/user-guide/configuring) |
[Rules](http://eslint.org/docs/rules/) |
[Contributing](http://eslint.org/docs/developer-guide/contributing) |
[Reporting Bugs](http://eslint.org/docs/developer-guide/contributing/reporting-bugs) |
[Code of Conduct](https://js.foundation/conduct/) |
[Twitter](https://twitter.com/geteslint) |
[Mailing List](https://groups.google.com/group/eslint) |
[Chat Room](https://gitter.im/eslint/eslint)

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses [Espree](https://github.com/eslint/espree) for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

## Installation and Usage

There are two ways to install ESLint: globally and locally.

### Local Installation and Usage

If you want to include ESLint as part of your project's build system, we recommend installing it locally. You can do so using npm:

```
$ npm install eslint --save-dev
```

You should then setup a configuration file:

```
$ ./node_modules/.bin/eslint --init
```

After that, you can run ESLint on any file or directory like this:

```
$ ./node_modules/.bin/eslint yourfile.js
```

Any plugins or shareable configs that you use must also be installed locally to work with a locally-installed ESLint.

### Global Installation and Usage

If you want to make ESLint available to tools that run across all of your projects, we recommend installing ESLint globally. You can do so using npm:

```
$ npm install -g eslint
```

You should then setup a configuration file:

```
$ eslint --init
```

After that, you can run ESLint on any file or directory like this:

```
$ eslint yourfile.js
```

Any plugins or shareable configs that you use must also be installed globally to work with a globally-installed ESLint.

**Note:** `eslint --init` is intended for setting up and configuring ESLint on a per-project basis and will perform a local installation of ESLint and its plugins in the directory in which it is run. If you prefer using a global installation of ESLint, any plugins used in your configuration must also be installed globally.

## Configuration

After running `eslint --init`, you'll have a `.eslintrc` file in your directory. In it, you'll see some rules configured like this:

```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

The names `"semi"` and `"quotes"` are the names of [rules](http://eslint.org/docs/rules) in ESLint. The first value is the error level of the rule and can be one of these values:

* `"off"` or `0` - turn the rule off
* `"warn"` or `1` - turn the rule on as a warning (doesn't affect exit code)
* `"error"` or `2` - turn the rule on as an error (exit code will be 1)

The three error levels allow you fine-grained control over how ESLint applies rules (for more configuration options and details, see the [configuration docs](http://eslint.org/docs/user-guide/configuring)).

## Sponsors

* Site search ([eslint.org](http://eslint.org)) is sponsored by [Algolia](https://www.algolia.com)

## Team

These folks keep the project moving and are resources for help.

### Technical Steering Committee (TSC)

* Nicholas C. Zakas ([@nzakas](https://github.com/nzakas))
* Ilya Volodin ([@ilyavolodin](https://github.com/ilyavolodin))
* Brandon Mills ([@btmills](https://github.com/btmills))
* Gyandeep Singh ([@gyandeeps](https://github.com/gyandeeps))
* Toru Nagashima ([@mysticatea](https://github.com/mysticatea))
* Alberto Rodríguez ([@alberto](https://github.com/alberto))
* Kai Cataldo ([@kaicataldo](https://github.com/kaicataldo))
* Teddy Katz ([@not-an-aardvark](https://github.com/not-an-aardvark))

### Development Team

* Mathias Schreck ([@lo1tuma](https://github.com/lo1tuma))
* Jamund Ferguson ([@xjamundx](https://github.com/xjamundx))
* Ian VanSchooten ([@ianvs](https://github.com/ianvs))
* Burak Yiğit Kaya ([@byk](https://github.com/byk))
* Michael Ficarra ([@michaelficarra](https://github.com/michaelficarra))
* Mark Pedrotti ([@pedrottimark](https://github.com/pedrottimark))
* Oleg Gaidarenko ([@markelog](https://github.com/markelog))
* Mike Sherov [@mikesherov](https://github.com/mikesherov))
* Henry Zhu ([@hzoo](https://github.com/hzoo))
* Marat Dulin ([@mdevils](https://github.com/mdevils))
* Alexej Yaroshevich ([@zxqfox](https://github.com/zxqfox))
* Kevin Partington ([@platinumazure](https://github.com/platinumazure))
* Vitor Balocco ([@vitorbal](https://github.com/vitorbal))
* James Henry ([@JamesHenry](https://github.com/JamesHenry))
* Reyad Attiyat ([@soda0289](https://github.com/soda0289))

## Releases

We have scheduled releases every two weeks on Friday or Saturday.

## Filing Issues

Before filing an issue, please be sure to read the guidelines for what you're reporting:

* [Bug Report](http://eslint.org/docs/developer-guide/contributing/reporting-bugs)
* [Propose a New Rule](http://eslint.org/docs/developer-guide/contributing/new-rules)
* [Proposing a Rule Change](http://eslint.org/docs/developer-guide/contributing/rule-changes)
* [Request a Change](http://eslint.org/docs/developer-guide/contributing/changes)

## Semantic Versioning Policy

ESLint follows [semantic versioning](http://semver.org). However, due to the nature of ESLint as a code quality tool, it's not always clear when a minor or major version bump occurs. To help clarify this for everyone, we've defined the following semantic versioning policy for ESLint:

* Patch release (intended to not break your lint build)
    * A bug fix in a rule that results in ESLint reporting fewer errors.
    * A bug fix to the CLI or core (including formatters).
    * Improvements to documentation.
    * Non-user-facing changes such as refactoring code, adding, deleting, or modifying tests, and increasing test coverage.
    * Re-releasing after a failed release (i.e., publishing a release that doesn't work for anyone).
* Minor release (might break your lint build)
    * A bug fix in a rule that results in ESLint reporting more errors.
    * A new rule is created.
    * A new option to an existing rule that does not result in ESLint reporting more errors by default.
    * An existing rule is deprecated.
    * A new CLI capability is created.
    * New capabilities to the public API are added (new classes, new methods, new arguments to existing methods, etc.).
    * A new formatter is created.
* Major release (likely to break your lint build)
    * `eslint:recommended` is updated.
    * A new option to an existing rule that results in ESLint reporting more errors by default.
    * An existing rule is removed.
    * An existing formatter is removed.
    * Part of the public API is removed or changed in an incompatible way.

According to our policy, any minor update may report more errors than the previous release (ex: from a bug fix). As such, we recommend using the tilde (`~`) in `package.json` e.g. `"eslint": "~3.1.0"` to guarantee the results of your builds.

## Frequently Asked Questions

### How is ESLint different from JSHint?

The most significant difference is that ESlint has pluggable linting rules. That means you can use the rules it comes with, or you can extend it with rules created by others or by yourself!

### How does ESLint performance compare to JSHint?

ESLint is slower than JSHint, usually 2-3x slower on a single file. This is because ESLint uses Espree to construct an AST before it can evaluate your code whereas JSHint evaluates your code as it's being parsed. The speed is also based on the number of rules you enable; the more rules you enable, the slower the process.

Despite being slower, we believe that ESLint is fast enough to replace JSHint without causing significant pain.

### I heard ESLint is going to replace JSCS?

Yes. Since we are solving the same problems, ESLint and JSCS teams have decided to join forces and work together in the development of ESLint instead of competing with each other. You can read more about this in both [ESLint](http://eslint.org/blog/2016/04/welcoming-jscs-to-eslint) and [JSCS](https://medium.com/@markelog/jscs-end-of-the-line-bc9bf0b3fdb2#.u76sx334n) announcements.

### So, should I stop using JSCS and start using ESLint?

Maybe, depending on how much you need it. [JSCS has reached end of life](http://eslint.org/blog/2016/07/jscs-end-of-life), but if it is working for you then there is no reason to move yet. We are still working to smooth the transition. You can see our progress [here](https://github.com/eslint/eslint/milestones/JSCS%20Compatibility). We’ll announce when all of the changes necessary to support JSCS users in ESLint are complete and will start encouraging JSCS users to switch to ESLint at that time.

If you are having issues with JSCS, you can try to move to ESLint. We are focusing our time and energy on JSCS compatibility issues.


### Is ESLint just linting or does it also check style?

ESLint does both traditional linting (looking for problematic patterns) and style checking (enforcement of conventions). You can use it for both.

### Does ESLint support JSX?

Yes, ESLint natively supports parsing JSX syntax (this must be enabled in [configuration](http://eslint.org/docs/user-guide/configuring).). Please note that supporting JSX syntax *is not* the same as supporting React. React applies specific semantics to JSX syntax that ESLint doesn't recognize. We recommend using [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) if you are using React and want React semantics.

### What about ECMAScript 6 support?

ESLint has full support for ECMAScript 6. By default, this support is off. You can enable ECMAScript 6 support through [configuration](http://eslint.org/docs/user-guide/configuring).

### What about experimental features?

ESLint doesn't natively support experimental ECMAScript language features. You can use [babel-eslint](https://github.com/babel/babel-eslint) to use any option available in Babel.

Once a language feature has been adopted into the ECMAScript standard (stage 4 according to the [TC39 process](https://tc39.github.io/process-document/)), we will accept issues and pull requests related to the new feature, subject to our [contributing guidelines](http://eslint.org/docs/developer-guide/contributing). Until then, please use the appropriate parser and plugin(s) for your experimental feature.

### Where to ask for help?

Join our [Mailing List](https://groups.google.com/group/eslint) or [Chatroom](https://gitter.im/eslint/eslint)


[npm-image]: https://img.shields.io/npm/v/eslint.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/eslint
[travis-image]: https://img.shields.io/travis/eslint/eslint/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/eslint/eslint
[appveyor-image]: https://ci.appveyor.com/api/projects/status/iwxmiobcvbw3b0av/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/nzakas/eslint/branch/master
[coveralls-image]: https://img.shields.io/coveralls/eslint/eslint/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/eslint/eslint?branch=master
[downloads-image]: https://img.shields.io/npm/dm/eslint.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/eslint

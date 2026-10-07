[![npm version](https://img.shields.io/npm/v/eslint.svg)](https://www.npmjs.com/package/eslint)
[![Downloads](https://img.shields.io/npm/dm/eslint.svg)](https://www.npmjs.com/package/eslint)
[![Build Status](https://github.com/eslint/eslint/workflows/CI/badge.svg)](https://github.com/eslint/eslint/actions)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Feslint%2Feslint.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Feslint%2Feslint?ref=badge_shield)
<br />
[![Open Collective Backers](https://img.shields.io/opencollective/backers/eslint)](https://opencollective.com/eslint)
[![Open Collective Sponsors](https://img.shields.io/opencollective/sponsors/eslint)](https://opencollective.com/eslint)
[![Follow us on Twitter](https://img.shields.io/twitter/follow/geteslint?label=Follow&style=social)](https://twitter.com/intent/user?screen_name=geteslint)

# ESLint

[Website](https://eslint.org) |
[Configuring](https://eslint.org/docs/user-guide/configuring) |
[Rules](https://eslint.org/docs/rules/) |
[Contributing](https://eslint.org/docs/developer-guide/contributing) |
[Reporting Bugs](https://eslint.org/docs/developer-guide/contributing/reporting-bugs) |
[Code of Conduct](https://eslint.org/conduct) |
[Twitter](https://twitter.com/geteslint) |
[Mailing List](https://groups.google.com/group/eslint) |
[Chat Room](https://eslint.org/chat)

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses [Espree](https://github.com/eslint/espree) for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

## Table of Contents

1. [Installation and Usage](#installation-and-usage)
2. [Configuration](#configuration)
3. [Code of Conduct](#code-of-conduct)
4. [Filing Issues](#filing-issues)
5. [Frequently Asked Questions](#faq)
6. [Releases](#releases)
7. [Security Policy](#security-policy)
8. [Semantic Versioning Policy](#semantic-versioning-policy)
9. [Stylistic Rule Updates](#stylistic-rule-updates)
10. [License](#license)
11. [Team](#team)
12. [Sponsors](#sponsors)
13. [Technology Sponsors](#technology-sponsors)

## <a name="installation-and-usage"></a>Installation and Usage

Prerequisites: [Node.js](https://nodejs.org/) (`^10.12.0`, or `>=12.0.0`) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

You can install ESLint using npm:

```
$ npm install eslint --save-dev
```

You should then set up a configuration file:

```
$ ./node_modules/.bin/eslint --init
```

After that, you can run ESLint on any file or directory like this:

```
$ ./node_modules/.bin/eslint yourfile.js
```

## <a name="configuration"></a>Configuration

After running `eslint --init`, you'll have a `.eslintrc` file in your directory. In it, you'll see some rules configured like this:

```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

The names `"semi"` and `"quotes"` are the names of [rules](https://eslint.org/docs/rules) in ESLint. The first value is the error level of the rule and can be one of these values:

* `"off"` or `0` - turn the rule off
* `"warn"` or `1` - turn the rule on as a warning (doesn't affect exit code)
* `"error"` or `2` - turn the rule on as an error (exit code will be 1)

The three error levels allow you fine-grained control over how ESLint applies rules (for more configuration options and details, see the [configuration docs](https://eslint.org/docs/user-guide/configuring)).

## <a name="code-of-conduct"></a>Code of Conduct

ESLint adheres to the [JS Foundation Code of Conduct](https://eslint.org/conduct).

## <a name="filing-issues"></a>Filing Issues

Before filing an issue, please be sure to read the guidelines for what you're reporting:

* [Bug Report](https://eslint.org/docs/developer-guide/contributing/reporting-bugs)
* [Propose a New Rule](https://eslint.org/docs/developer-guide/contributing/new-rules)
* [Proposing a Rule Change](https://eslint.org/docs/developer-guide/contributing/rule-changes)
* [Request a Change](https://eslint.org/docs/developer-guide/contributing/changes)

## <a name="faq"></a>Frequently Asked Questions

### I'm using JSCS, should I migrate to ESLint?

Yes. [JSCS has reached end of life](https://eslint.org/blog/2016/07/jscs-end-of-life) and is no longer supported.

We have prepared a [migration guide](https://eslint.org/docs/user-guide/migrating-from-jscs) to help you convert your JSCS settings to an ESLint configuration.

We are now at or near 100% compatibility with JSCS. If you try ESLint and believe we are not yet compatible with a JSCS rule/configuration, please create an issue (mentioning that it is a JSCS compatibility issue) and we will evaluate it as per our normal process.

### Does Prettier replace ESLint?

No, ESLint does both traditional linting (looking for problematic patterns) and style checking (enforcement of conventions). You can use ESLint for everything, or you can combine both using Prettier to format your code and ESLint to catch possible errors.

### Why can't ESLint find my plugins?

* Make sure your plugins (and ESLint) are both in your project's `package.json` as devDependencies (or dependencies, if your project uses ESLint at runtime).
* Make sure you have run `npm install` and all your dependencies are installed.
* Make sure your plugins' peerDependencies have been installed as well. You can use `npm view eslint-plugin-myplugin peerDependencies` to see what peer dependencies `eslint-plugin-myplugin` has.

### Does ESLint support JSX?

Yes, ESLint natively supports parsing JSX syntax (this must be enabled in [configuration](https://eslint.org/docs/user-guide/configuring)). Please note that supporting JSX syntax *is not* the same as supporting React. React applies specific semantics to JSX syntax that ESLint doesn't recognize. We recommend using [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) if you are using React and want React semantics.

### What ECMAScript versions does ESLint support?

ESLint has full support for ECMAScript 3, 5 (default), 2015, 2016, 2017, 2018, 2019, and 2020. You can set your desired ECMAScript syntax (and other settings, like global variables or your target environments) through [configuration](https://eslint.org/docs/user-guide/configuring).

### What about experimental features?

ESLint's parser only officially supports the latest final ECMAScript standard. We will make changes to core rules in order to avoid crashes on stage 3 ECMAScript syntax proposals (as long as they are implemented using the correct experimental ESTree syntax). We may make changes to core rules to better work with language extensions (such as JSX, Flow, and TypeScript) on a case-by-case basis.

In other cases (including if rules need to warn on more or fewer cases due to new syntax, rather than just not crashing), we recommend you use other parsers and/or rule plugins. If you are using Babel, you can use the [babel-eslint](https://github.com/babel/babel-eslint) parser and [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel) to use any option available in Babel.

Once a language feature has been adopted into the ECMAScript standard (stage 4 according to the [TC39 process](https://tc39.github.io/process-document/)), we will accept issues and pull requests related to the new feature, subject to our [contributing guidelines](https://eslint.org/docs/developer-guide/contributing). Until then, please use the appropriate parser and plugin(s) for your experimental feature.

### Where to ask for help?

Join our [Mailing List](https://groups.google.com/group/eslint) or [Chatroom](https://eslint.org/chat).

### Why doesn't ESLint lock dependency versions?

Lock files like `package-lock.json` are helpful for deployed applications. They ensure that dependencies are consistent between environments and across deployments.

Packages like `eslint` that get published to the npm registry do not include lock files. `npm install eslint` as a user will respect version constraints in ESLint's `package.json`. ESLint and its dependencies will be included in the user's lock file if one exists, but ESLint's own lock file would not be used.

We intentionally don't lock dependency versions so that we have the latest compatible dependency versions in development and CI that our users get when installing ESLint in a project.

The Twilio blog has a [deeper dive](https://www.twilio.com/blog/lockfiles-nodejs) to learn more.

## <a name="releases"></a>Releases

We have scheduled releases every two weeks on Friday or Saturday. You can follow a [release issue](https://github.com/eslint/eslint/issues?q=is%3Aopen+is%3Aissue+label%3Arelease) for updates about the scheduling of any particular release.

## <a name="security-policy"></a>Security Policy

ESLint takes security seriously. We work hard to ensure that ESLint is safe for everyone and that security issues are addressed quickly and responsibly. Read the full [security policy](https://github.com/eslint/.github/blob/master/SECURITY.md).

## <a name="semantic-versioning-policy"></a>Semantic Versioning Policy

ESLint follows [semantic versioning](https://semver.org). However, due to the nature of ESLint as a code quality tool, it's not always clear when a minor or major version bump occurs. To help clarify this for everyone, we've defined the following semantic versioning policy for ESLint:

* Patch release (intended to not break your lint build)
    * A bug fix in a rule that results in ESLint reporting fewer linting errors.
    * A bug fix to the CLI or core (including formatters).
    * Improvements to documentation.
    * Non-user-facing changes such as refactoring code, adding, deleting, or modifying tests, and increasing test coverage.
    * Re-releasing after a failed release (i.e., publishing a release that doesn't work for anyone).
* Minor release (might break your lint build)
    * A bug fix in a rule that results in ESLint reporting more linting errors.
    * A new rule is created.
    * A new option to an existing rule that does not result in ESLint reporting more linting errors by default.
    * A new addition to an existing rule to support a newly-added language feature (within the last 12 months) that will result in ESLint reporting more linting errors by default.
    * An existing rule is deprecated.
    * A new CLI capability is created.
    * New capabilities to the public API are added (new classes, new methods, new arguments to existing methods, etc.).
    * A new formatter is created.
    * `eslint:recommended` is updated and will result in strictly fewer linting errors (e.g., rule removals).
* Major release (likely to break your lint build)
    * `eslint:recommended` is updated and may result in new linting errors (e.g., rule additions, most rule option updates).
    * A new option to an existing rule that results in ESLint reporting more linting errors by default.
    * An existing formatter is removed.
    * Part of the public API is removed or changed in an incompatible way. The public API includes:
        * Rule schemas
        * Configuration schema
        * Command-line options
        * Node.js API
        * Rule, formatter, parser, plugin APIs

According to our policy, any minor update may report more linting errors than the previous release (ex: from a bug fix). As such, we recommend using the tilde (`~`) in `package.json` e.g. `"eslint": "~3.1.0"` to guarantee the results of your builds.

## <a name="stylistic-rule-updates"></a>Stylistic Rule Updates

Stylistic rules are frozen according to [our policy](https://eslint.org/blog/2020/05/changes-to-rules-policies) on how we evaluate new rules and rule changes.
This means:

* **Bug fixes**: We will still fix bugs in stylistic rules.
* **New ECMAScript features**: We will also make sure stylistic rules are compatible with new ECMAScript features.
* **New options**: We will **not** add any new options to stylistic rules unless an option is the only way to fix a bug or support a newly-added ECMAScript feature.

## <a name="license"></a>License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Feslint%2Feslint.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Feslint%2Feslint?ref=badge_large)

## <a name="team"></a>Team

These folks keep the project moving and are resources for help.

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--teamstart-->

### Technical Steering Committee (TSC)

The people who manage releases, review feature requests, and meet regularly to ensure ESLint is properly maintained.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/nzakas">
<img src="https://github.com/nzakas.png?s=75" width="75" height="75"><br />
Nicholas C. Zakas
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/btmills">
<img src="https://github.com/btmills.png?s=75" width="75" height="75"><br />
Brandon Mills
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/mdjermanovic">
<img src="https://github.com/mdjermanovic.png?s=75" width="75" height="75"><br />
Milos Djermanovic
</a>
</td></tr></tbody></table>


### Reviewers

The people who review and implement new features.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/mysticatea">
<img src="https://github.com/mysticatea.png?s=75" width="75" height="75"><br />
Toru Nagashima
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/aladdin-add">
<img src="https://github.com/aladdin-add.png?s=75" width="75" height="75"><br />
薛定谔的猫
</a>
</td></tr></tbody></table>




### Committers

The people who review and fix bugs and help triage issues.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/brettz9">
<img src="https://github.com/brettz9.png?s=75" width="75" height="75"><br />
Brett Zamir
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/bmish">
<img src="https://github.com/bmish.png?s=75" width="75" height="75"><br />
Bryan Mishkin
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/g-plane">
<img src="https://github.com/g-plane.png?s=75" width="75" height="75"><br />
Pig Fang
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/anikethsaha">
<img src="https://github.com/anikethsaha.png?s=75" width="75" height="75"><br />
Anix
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/yeonjuan">
<img src="https://github.com/yeonjuan.png?s=75" width="75" height="75"><br />
YeonJuan
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/snitin315">
<img src="https://github.com/snitin315.png?s=75" width="75" height="75"><br />
Nitin Kumar
</a>
</td></tr></tbody></table>


<!--teamend-->

## <a name="sponsors"></a>Sponsors

The following companies, organizations, and individuals support ESLint's ongoing maintenance and development. [Become a Sponsor](https://opencollective.com/eslint) to get your logo on our README and website.

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--sponsorsstart-->
<h3>Platinum Sponsors</h3>
<p><a href="https://automattic.com"><img src="https://images.opencollective.com/photomatt/d0ef3e1/logo.png" alt="Automattic" height="undefined"></a></p><h3>Gold Sponsors</h3>
<p><a href="https://nx.dev"><img src="https://images.opencollective.com/nx/0efbe42/logo.png" alt="Nx (by Nrwl)" height="96"></a> <a href="https://google.com/chrome"><img src="https://images.opencollective.com/chrome/dc55bd4/logo.png" alt="Chrome's Web Framework & Tools Performance Fund" height="96"></a> <a href="https://www.salesforce.com"><img src="https://images.opencollective.com/salesforce/ca8f997/logo.png" alt="Salesforce" height="96"></a> <a href="https://www.airbnb.com/"><img src="https://images.opencollective.com/airbnb/d327d66/logo.png" alt="Airbnb" height="96"></a> <a href="https://coinbase.com"><img src="https://avatars.githubusercontent.com/u/1885080?v=4" alt="Coinbase" height="96"></a> <a href="https://substack.com/"><img src="https://avatars.githubusercontent.com/u/53023767?v=4" alt="Substack" height="96"></a></p><h3>Silver Sponsors</h3>
<p><a href="https://retool.com/"><img src="https://images.opencollective.com/retool/98ea68e/logo.png" alt="Retool" height="64"></a> <a href="https://liftoff.io/"><img src="https://images.opencollective.com/liftoff/5c4fa84/logo.png" alt="Liftoff" height="64"></a></p><h3>Bronze Sponsors</h3>
<p><a href="https://www.crosswordsolver.org/anagram-solver/"><img src="https://images.opencollective.com/anagram-solver/2666271/logo.png" alt="Anagram Solver" height="32"></a> <a href="null"><img src="https://images.opencollective.com/bugsnag-stability-monitoring/c2cef36/logo.png" alt="Bugsnag Stability Monitoring" height="32"></a> <a href="https://mixpanel.com"><img src="https://images.opencollective.com/mixpanel/cd682f7/logo.png" alt="Mixpanel" height="32"></a> <a href="https://www.vpsserver.com"><img src="https://images.opencollective.com/vpsservercom/logo.png" alt="VPS Server" height="32"></a> <a href="https://icons8.com"><img src="https://images.opencollective.com/icons8/7fa1641/logo.png" alt="Icons8: free icons, photos, illustrations, and music" height="32"></a> <a href="https://discord.com"><img src="https://images.opencollective.com/discordapp/f9645d9/logo.png" alt="Discord" height="32"></a> <a href="https://themeisle.com"><img src="https://images.opencollective.com/themeisle/d5592fe/logo.png" alt="ThemeIsle" height="32"></a> <a href="https://www.firesticktricks.com"><img src="https://images.opencollective.com/fire-stick-tricks/b8fbe2c/logo.png" alt="Fire Stick Tricks" height="32"></a> <a href="https://www.practiceignition.com"><img src="https://avatars.githubusercontent.com/u/5753491?v=4" alt="Practice Ignition" height="32"></a></p>
<!--sponsorsend-->

## <a name="technology-sponsors"></a>Technology Sponsors

* Site search ([eslint.org](https://eslint.org)) is sponsored by [Algolia](https://www.algolia.com)
* Hosting for ([eslint.org](https://eslint.org)) is sponsored by [Netlify](https://www.netlify.com)
* Password management is sponsored by [1Password](https://www.1password.com)

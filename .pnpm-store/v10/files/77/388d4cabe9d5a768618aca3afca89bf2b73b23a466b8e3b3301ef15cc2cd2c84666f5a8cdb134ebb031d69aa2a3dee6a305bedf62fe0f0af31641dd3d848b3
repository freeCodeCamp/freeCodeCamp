# axe-core

[![License](https://img.shields.io/npm/l/axe-core.svg?color=c41)](LICENSE)
[![Version](https://img.shields.io/npm/v/axe-core.svg)](https://www.npmjs.com/package/axe-core)
[![NPM downloads](https://img.shields.io/npm/dw/axe-core.svg?color=080)![](https://img.shields.io/npm/dy/axe-core.svg?color=080&label=)](https://npm-stat.com/charts.html?package=axe-core&from=2017-01-01)
[![Commits](https://img.shields.io/github/commit-activity/y/dequelabs/axe-core.svg)](https://github.com/dequelabs/axe-core/commits/develop)
[![GitHub contributors](https://img.shields.io/github/contributors/dequelabs/axe-core.svg?color=080)](https://github.com/dequelabs/axe-core/graphs/contributors)
[![Join our Slack chat](https://img.shields.io/badge/slack-chat-purple.svg?logo=slack)](https://accessibility.deque.com/axe-community)
[![Package Quality](https://npm.packagequality.com/shield/axe-core.svg)](https://packagequality.com/#?package=axe-core)

Axe is an accessibility testing engine for websites and other HTML-based user interfaces. It's fast, secure, lightweight, and was built to seamlessly integrate with any existing test environment so you can automate accessibility testing alongside your regular functional testing.

[Sign up for axe news](https://hubs.ly/H0fsN0b0) to get the latest on axe features, future releases, and events.

## The Accessibility Rules

Axe-core has different types of rules, for WCAG 2.0, 2.1, 2.2 on level A, AA and AAA as well as a number of best practices that help you identify common accessibility practices like ensuring every page has an `h1` heading, and to help you avoid "gotchas" in ARIA like where an ARIA attribute you used will get ignored. The complete list of rules, grouped WCAG level and best practice, can be found in [doc/rule-descriptions.md](./doc/rule-descriptions.md).

With axe-core, you can find **on average 57% of WCAG issues automatically**. Additionally, axe-core will return elements as "incomplete" where axe-core could not be certain, and manual review is needed.

To catch bugs earlier in the development cycle we recommend using the [axe-linter vscode extension](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter). To improve test coverage even further we recommend the [intelligent guided tests](https://www.youtube.com/watch?v=AtsX0dPCG_4&feature=youtu.be&ab_channel=DequeSystems) in the [axe Extension](https://www.deque.com/axe/browser-extensions/).

## Getting started

First download the package:

```console
npm install axe-core --save-dev
```

Now include the javascript file in each of your iframes in your fixtures or test systems:

```html
<script src="node_modules/axe-core/axe.min.js"></script>
```

Now insert calls at each point in your tests where a new piece of UI becomes visible or exposed:

```js
axe
  .run()
  .then(results => {
    if (results.violations.length) {
      throw new Error('Accessibility issues found');
    }
  })
  .catch(err => {
    console.error('Something bad happened:', err.message);
  });
```

## Philosophy

The web can only become an accessible, inclusive space if developers are empowered to take responsibility for accessibility testing and accessible coding practices.

Automated accessibility testing is a huge timesaver, it doesn't require special expertise, and it allows teams to focus expert resources on the accessibility issues that really need them. Unfortunately, most accessibility tools are meant to be run on sites and applications that have reached the end of the development process and often don't give clear or consistent results, causing frustration and delays just when you thought your product was ready to ship.

Axe was built to reflect how web development actually works. It works with all modern browsers, tools, and testing environments a dev team might use. With axe, accessibility testing can be performed as part of your unit testing, integration testing, browser testing, and any other functional testing your team already performs on a day-to-day basis. Building accessibility testing into the early development process saves time, resources, and all kinds of frustration.

## About axe - our Manifesto

- Axe is open source.
- It returns zero false positives (bugs notwithstanding).
- It's designed to work on all modern browsers and with whatever tools, frameworks, libraries and environments you use today.
- It's actively supported by [Deque Systems](https://www.deque.com), a major accessibility vendor.
- It integrates with your existing functional/acceptance automated tests.
- It automatically determines which rules to run based on the evaluation context.
- Axe supports in-memory fixtures, static fixtures, integration tests, and iframes of infinite depth.
- Axe is highly configurable.

## Supported Browsers

The [axe-core API](doc/API.md) fully supports the following browsers:

- Microsoft Edge v40 and above
- Google Chrome v42 and above
- Mozilla Firefox v38 and above
- Apple Safari v7 and above
- Internet Explorer v11 (DEPRECATED)

Support means that we will fix bugs and attempt to test each browser regularly. Only Chrome and Firefox are currently tested on every pull request.

There is limited support for JSDOM. We will attempt to make all rules compatible with JSDOM but where this is not possible, we recommend turning those rules off. Currently the `color-contrast` rule is known not to work with JSDOM.

We can only support environments where features are either natively supported or polyfilled correctly. We do not support the deprecated v0 Shadow DOM implementation.

## Contents of the API Package

The [axe-core API](doc/API.md) package consists of:

- `axe.js` - the JavaScript file that should be included in your web site under test (API)
- `axe.min.js` - a minified version of the above file

## Localization

Axe can be built using your local language. To do so, a localization file must be added to the `./locales` directory. This file must be named in the following manner: `<langcode>.json`. To build axe using this locale, instead of the default, run axe with the `--lang` flag, like so:

`grunt build --lang=nl`

or equivalently:

`npm run build -- --lang=nl`

This will create a new build for axe, called `axe.<lang>.js` and `axe.<lang>.min.js`. If you want to build all localized versions, simply pass in `--all-lang` instead. If you want to build multiple localized versions (but not all of them), you can pass in a comma-separated list of languages to the `--lang` flag, like `--lang=nl,ja`.

To create a new translation for axe, start by running `grunt translate --lang=<langcode>`. This will create a json file in the `./locales` directory, with the default English text in it for you to translate. Alternatively, you could copy `./locales/_template.json`. We welcome any localization for axe-core. For details on how to contribute, see the Contributing section below. For details on the message syntax, see [Check Message Template](/doc/check-message-template.md).

To update an existing translation file, re-run `grunt translate --lang=<langcode>`. This will add new messages used in English and remove messages which were not used in English.

Additionally, locale can be applied at runtime by passing a `locale` object to `axe.configure()`. The locale object must be of the same shape as existing locales in the `./locales` directory. For example:

```js
axe.configure({
  locale: {
    lang: 'de',
    rules: {
      accesskeys: {
        help: 'Der Wert des accesskey-Attributes muss einzigartig sein.'
      }
      // ...
    },
    checks: {
      abstractrole: {
        fail: 'Abstrakte ARIA-Rollen dürfen nicht direkt verwendet werden.'
      },
      'aria-errormessage': {
        // Note: doT (https://github.com/olado/dot) templates are supported here.
        fail: 'Der Wert der aria-errormessage ${data.values}` muss eine Technik verwenden, um die Message anzukündigen (z. B., aria-live, aria-describedby, role=alert, etc.).'
      }
      // ...
    }
  }
});
```

### Supported Locales

Axe-core supports the following locales. Do note that since locales are contributed by our community, they are not guaranteed to include all translations needed in a release.

- Basque
- Danish
- Dutch
- French
- German
- Hebrew
- Japanese
- Korean
- Norwegian (Bokmål)
- Polish
- Portuguese (Brazilian)
- Spanish
- Greek
- Italian
- Simplified Chinese
- Traditional Chinese

## Updates & Security

Axe-core has a new minor release every 3 to 5 months, which usually introduces new rules and features. We recommend scheduling time to upgrade to these versions. Security updates will be made available for minor version lines up to **18 months old**.

- See [release and support](doc/release-and-support.md) for details on the frequency of releases, long-term support and recommendations on upgrading axe-core.
- See [backward compatibility](doc/backwards-compatibility-doc.md) for details on the types of changes different releases may introduce.

## Deque Trademarks Policy

DEQUE, DEQUELABS, AXE®, and AXE-CORE® are trademarks of Deque Systems, Inc. Use of the Deque trademarks must be in accordance with [Deque's trademark policy](https://www.deque.com/legal/trademarks/).

## Supported ARIA Roles and Attributes.

Refer [axe-core ARIA support](./doc/aria-supported.md) for a complete list of ARIA supported roles and attributes by axe.

## Contributing

Read the [Proposing Axe-core Rules guide](./doc/rule-proposal.md)

Read the [documentation on the architecture](./doc/developer-guide.md)

Read the [documentation on contributing](CONTRIBUTING.md)

## Projects using axe-core

[List of projects using axe-core](doc/projects.md)

## Acknowledgements

Thanks to Marat Dulin for his [css-selector-parser](https://www.npmjs.com/package/css-selector-parser) implementation which is included for shadow DOM support. Another thank you to the [Slick Parser](https://github.com/mootools/slick/blob/master/Source/Slick.Parser.js) implementers for their contribution, we have used some of their algorithms in our shadow DOM support code. Thanks to Lea Verou and Chris Lilley for their [colorjs.io](https://colorjs.io/) library which we have used for converting between color formats.

## Licenses

Axe-core is distributed under the [Mozilla Public License, version 2.0](LICENSE). It comes bundled with several dependencies which are distributed under their own terms. (See [LICENSE-3RD-PARTY.txt](LICENSE-3RD-PARTY.txt))

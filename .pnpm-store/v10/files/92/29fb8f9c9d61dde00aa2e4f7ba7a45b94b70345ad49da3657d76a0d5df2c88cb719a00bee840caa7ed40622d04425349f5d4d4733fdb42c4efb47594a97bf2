<h1 align="center">
  <img align="center" src="https://media.githubusercontent.com/media/dubzzz/fast-check/main/website/static/img/logo.png" alt="fast-check logo" />
</h1>

<p align="center">
Property based testing framework for JavaScript/TypeScript
</p>

<p align="center">
  <a href="https://github.com/dubzzz/fast-check/actions?query=branch%3Amain+workflow%3A%22Build+Status%22"><img src="https://github.com/dubzzz/fast-check/workflows/Build%20Status/badge.svg?branch=main" alt="Build Status" /></a>
  <a href="https://badge.fury.io/js/fast-check"><img src="https://badge.fury.io/js/fast-check.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/fast-check"><img src="https://img.shields.io/npm/dm/fast-check" alt="monthly downloads" /></a>
  <a href="https://fast-check.dev/"><img src="https://img.shields.io/badge/-Documentation-%23282ea9.svg" title="Documentation" /></a>
</p>
<p align="center">
  <a href="https://app.codecov.io/gh/dubzzz/fast-check/branch/main"><img src="https://codecov.io/gh/dubzzz/fast-check/branch/main/graph/badge.svg" alt="Coverage Status (unit tests)" /></a>
  <a href="https://packagequality.com/#?package=fast-check"><img src="https://packagequality.com/shield/fast-check.svg" alt="Package quality" /></a>
  <a href="https://snyk.io/advisor/npm-package/fast-check"><img src="https://snyk.io/advisor/npm-package/fast-check/badge.svg" alt="Snyk Package quality" /></a>
  <a href="https://securityscorecards.dev/viewer/?platform=github.com&org=dubzzz&repo=fast-check"><img src="https://api.securityscorecards.dev/projects/github.com/dubzzz/fast-check/badge" alt="OpenSSF Scorecard" /></a>
  <a href="https://bestpractices.coreinfrastructure.org/projects/7450"><img src="https://bestpractices.coreinfrastructure.org/projects/7450/badge" alt="OpenSSF Best Practices" /></a>
</p>
<p align="center">
  <a href="https://github.com/dubzzz/fast-check/labels/good%20first%20issue"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" /></a>
  <a href="https://github.com/dubzzz/fast-check/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/fast-check.svg" alt="License" /></a>
</p>

## Getting started

Hands-on tutorial and definition of Property Based Testing: [🏁 see tutorial](https://fast-check.dev/docs/tutorials/quick-start/). Or directly try it online on our pre-configured [CodeSandbox](https://codesandbox.io/s/github/dubzzz/fast-check/tree/main/examples?previewwindow=tests).

Property based testing frameworks check the truthfulness of properties. A property is a statement like: _for all (x, y, ...) such that precondition(x, y, ...) holds predicate(x, y, ...) is true_.

Install the module with: `yarn add fast-check --dev` or `npm install fast-check --save-dev`

Example of integration in [mocha](http://mochajs.org/):

```js
import fc from 'fast-check';

// Code under test
const contains = (text, pattern) => text.indexOf(pattern) >= 0;

// Properties
describe('properties', () => {
  // string text always contains itself
  it('should always contain itself', () => {
    fc.assert(fc.property(fc.string(), (text) => contains(text, text)));
  });
  // string a + b + c always contains b, whatever the values of a, b and c
  it('should always contain its substrings', () => {
    fc.assert(
      fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
        // Alternatively: no return statement and direct usage of expect or assert
        return contains(a + b + c, b);
      }),
    );
  });
});
```

In case of failure, the test raises a red flag. Its output should help you to diagnose what went wrong in your implementation. Example with a failing implementation of contain:

```
1) should always contain its substrings
    Error: Property failed after 1 tests (seed: 1527422598337, path: 0:0): ["","",""]
    Shrunk 1 time(s)
    Got error: Property failed by returning false

    Hint: Enable verbose mode in order to have the list of all failing values encountered during the run
```

Integration with other test frameworks: [ava](https://github.com/dubzzz/fast-check-examples/blob/main/test-ava/example.spec.js), [jasmine](https://github.com/dubzzz/fast-check-examples/blob/main/test-jasmine/example.spec.js), [jest](https://github.com/dubzzz/fast-check-examples/blob/main/test-jest/example.spec.js), [mocha](https://github.com/dubzzz/fast-check-examples/blob/main/test/longest%20common%20substr/test.js) and [tape](https://github.com/dubzzz/fast-check-examples/blob/main/test-tape/example.spec.js).

More examples: [simple examples](https://github.com/dubzzz/fast-check/tree/main/examples), [fuzzing](https://github.com/dubzzz/fuzz-rest-api) and [against various algorithms](https://github.com/dubzzz/fast-check-examples).

Useful documentations:

- [🏁 Introduction to Property Based & Hands On](https://fast-check.dev/docs/tutorials/quick-start/)
- [🐣 Built-in arbitraries](https://fast-check.dev/docs/core-blocks/arbitraries/)
- [🔧 Custom arbitraries](https://fast-check.dev/docs/core-blocks/arbitraries/combiners/)
- [🏃‍♂️ Property based runners](https://fast-check.dev/docs/core-blocks/runners/)
- [💥 Tips](https://fast-check.dev/docs/configuration/)
- [🔌 API Reference](https://fast-check.dev/api-reference/index.html)
- [⭐ Awesome fast-check](https://fast-check.dev/docs/ecosystem/)

## Why should I migrate to fast-check?

fast-check has initially been designed in an attempt to cope with limitations I encountered while using other property based testing frameworks designed for JavaScript:

- **Types:** strong and up-to-date types - _thanks to TypeScript_
- **Extendable:** easy `map` method to derive existing arbitraries while keeping shrink \[[more](https://fast-check.dev/docs/core-blocks/arbitraries/combiners/any/#map)\] - _some frameworks ask the user to provide both a->b and b->a mappings in order to keep a shrinker_
- **Extendable:** kind of flatMap-operation called `chain` \[[more](https://fast-check.dev/docs/core-blocks/arbitraries/combiners/any/#chain)\] - _able to bind the output of an arbitrary as input of another one while keeping the shrink working_
- **Extendable:** precondition checks with `fc.pre(...)` \[[more](https://fast-check.dev/docs/core-blocks/properties/#example)\] - _filtering invalid entries can be done directly inside the check function if needed_
- **Extendable:** easily switch from fake data in tests to property based with `fc.gen()` \[[more](https://fast-check.dev/docs/core-blocks/arbitraries/others/#gen)\] - _generate random values within your predicates_
- **Smart:** ability to shrink on `fc.oneof` \[[more](https://fast-check.dev/docs/core-blocks/arbitraries/combiners/any/#oneof)\] - _surprisingly some frameworks don't_
- **Smart:** biased by default - _by default it generates both small and large values, making it easier to dig into counterexamples without having to tweak a size parameter manually_
- **Debug:** verbose mode \[[more](https://fast-check.dev/docs/configuration/custom-reports/#verbosity)\]\[[tutorial](https://fast-check.dev/docs/tutorials/quick-start/read-test-reports/#how-to-increase-verbosity)\] - _easier troubleshooting with verbose mode enabled_
- **Debug:** replay directly on the minimal counterexample \[[tutorial](https://fast-check.dev/docs/tutorials/quick-start/read-test-reports/#how-to-re-run)\] - _no need to replay the whole sequence, you get directly the counterexample_
- **Debug:** custom examples in addition of generated ones \[[more](https://fast-check.dev/docs/configuration/user-definable-values/#run-against-custom-values)\] - _no need to duplicate the code to play the property on custom examples_
- **Debug:** logger per predicate run \[[more](https://fast-check.dev/docs/core-blocks/arbitraries/others/#context)\] - _simplify your troubleshoot with fc.context and its logging feature_
- **Unique:** model based approach \[[more](https://fast-check.dev/docs/advanced/model-based-testing/)\]\[[article](https://medium.com/criteo-labs/detecting-the-unexpected-in-web-ui-fuzzing-1f3822c8a3a5)\] - _use the power of property based testing to test UI, APIs or state machines_
- **Unique:** detect race conditions in your code \[[more](https://fast-check.dev/docs/advanced/race-conditions/)\]\[[tutorial](https://fast-check.dev/docs/tutorials/detect-race-conditions/)\] - _shuffle the way your promises and async calls resolve using the power of property based testing to detect races_
- **Unique:** simplify user definable corner cases \[[more](https://fast-check.dev/docs/configuration/user-definable-values/#shrink-custom-values)\] - _simplify bug resolution by asking fast-check if it can find an even simpler corner case_

For more details, refer to the documentation in the links above.

### Trusted

fast-check has been trusted for years by big projects like: [jest](https://github.com/jestjs/jest), [jasmine](https://github.com/jasmine/jasmine), [fp-ts](https://github.com/gcanti/fp-ts), [io-ts](https://github.com/gcanti/io-ts), [ramda](https://github.com/ramda/ramda), [js-yaml](https://github.com/nodeca/js-yaml), [query-string](https://github.com/sindresorhus/query-string)...

### Powerful

It also proved useful in finding bugs among major open source projects such as [jest](https://github.com/jestjs/jest), [query-string](https://github.com/sindresorhus/query-string)... and [many others](https://fast-check.dev/docs/introduction/track-record/).

## Compatibility

Here are the minimal requirements to use fast-check properly without any polyfills:

| fast-check | node                | ECMAScript version | _TypeScript (optional)_ |
| ---------- | ------------------- | ------------------ | ----------------------- |
| **3.x**    | ≥8<sup>(1)</sup>    | ES2017             | ≥4.1<sup>(2)</sup>      |
| **2.x**    | ≥8<sup>(1)</sup>    | ES2017             | ≥3.2<sup>(3)</sup>      |
| **1.x**    | ≥0.12<sup>(1)</sup> | ES3                | ≥3.0<sup>(3)</sup>      |

<details>
<summary>More details...</summary>

1. Except for features that cannot be polyfilled - such as `bigint`-related ones - all the capabilities of fast-check should be usable given you use at least the minimal recommended version of node associated to your major of fast-check.
2. Require either lib or target ≥ ES2020 or `@types/node` to be installed.
3. Require either lib or target ≥ ES2015 or `@types/node` to be installed.

</details>

### ReScript bindings

Bindings to use fast-check in [ReScript](https://rescript-lang.org) are available in package [rescript-fast-check](https://www.npmjs.com/rescript-fast-check). They are maintained by [@TheSpyder](https://github.com/TheSpyder) as an external project.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dubzzz"><img src="https://avatars.githubusercontent.com/u/5300235?v=4?s=100" width="100px;" alt="Nicolas DUBIEN"/><br /><sub><b>Nicolas DUBIEN</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=dubzzz" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=dubzzz" title="Documentation">📖</a> <a href="https://github.com/dubzzz/fast-check/commits?author=dubzzz" title="Tests">⚠️</a> <a href="#infra-dubzzz" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#design-dubzzz" title="Design">🎨</a> <a href="#maintenance-dubzzz" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hath995"><img src="https://avatars.githubusercontent.com/u/381037?v=4?s=100" width="100px;" alt="Aaron Elligsen"/><br /><sub><b>Aaron Elligsen</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=hath995" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=hath995" title="Documentation">📖</a> <a href="https://github.com/dubzzz/fast-check/commits?author=hath995" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/willheslam"><img src="https://avatars.githubusercontent.com/u/5377213?v=4?s=100" width="100px;" alt="Will Heslam"/><br /><sub><b>Will Heslam</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=willheslam" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kazchimo"><img src="https://avatars.githubusercontent.com/u/31263328?v=4?s=100" width="100px;" alt="kazchimo"/><br /><sub><b>kazchimo</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=kazchimo" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=kazchimo" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/brandon-leapyear"><img src="https://avatars.githubusercontent.com/u/27799541?v=4?s=100" width="100px;" alt="Brandon Chinn"/><br /><sub><b>Brandon Chinn</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=brandon-leapyear" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=brandon-leapyear" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://safareli.github.io/resume/"><img src="https://avatars.githubusercontent.com/u/1932383?v=4?s=100" width="100px;" alt="Irakli Safareli"/><br /><sub><b>Irakli Safareli</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=safareli" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TheSpyder"><img src="https://avatars.githubusercontent.com/u/298292?v=4?s=100" width="100px;" alt="Andrew Herron"/><br /><sub><b>Andrew Herron</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=TheSpyder" title="Documentation">📖</a> <a href="#plugin-TheSpyder" title="Plugin/utility libraries">🔌</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/EricCrosson"><img src="https://avatars.githubusercontent.com/u/1596818?v=4?s=100" width="100px;" alt="Eric Crosson"/><br /><sub><b>Eric Crosson</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=EricCrosson" title="Documentation">📖</a> <a href="https://github.com/dubzzz/fast-check/commits?author=EricCrosson" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/burrscurr"><img src="https://avatars.githubusercontent.com/u/23213508?v=4?s=100" width="100px;" alt="burrscurr"/><br /><sub><b>burrscurr</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=burrscurr" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.dijonkitchen.org/"><img src="https://avatars.githubusercontent.com/u/11434205?v=4?s=100" width="100px;" alt="JC (Jonathan Chen)"/><br /><sub><b>JC (Jonathan Chen)</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=dijonkitchen" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://fixate.it/"><img src="https://avatars.githubusercontent.com/u/1510520?v=4?s=100" width="100px;" alt="Larry Botha"/><br /><sub><b>Larry Botha</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=larrybotha" title="Documentation">📖</a> <a href="https://github.com/dubzzz/fast-check/commits?author=larrybotha" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=larrybotha" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://epa.ms/RomanGusev"><img src="https://avatars.githubusercontent.com/u/5839225?v=4?s=100" width="100px;" alt="Roman Gusev"/><br /><sub><b>Roman Gusev</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=102" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://timwis.com/"><img src="https://avatars.githubusercontent.com/u/761444?v=4?s=100" width="100px;" alt="Tim Wisniewski"/><br /><sub><b>Tim Wisniewski</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=timwis" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://world.hey.com/brais"><img src="https://avatars.githubusercontent.com/u/17855450?v=4?s=100" width="100px;" alt="Brais Piñeiro"/><br /><sub><b>Brais Piñeiro</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=brapifra" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=brapifra" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/brds"><img src="https://avatars.githubusercontent.com/u/118620?v=4?s=100" width="100px;" alt="Renaud-Pierre Bordes"/><br /><sub><b>Renaud-Pierre Bordes</b></sub></a><br /><a href="#design-brds" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/fwip"><img src="https://avatars.githubusercontent.com/u/190414?v=4?s=100" width="100px;" alt="Jemma Nelson"/><br /><sub><b>Jemma Nelson</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=fwip" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://fullof.bs/"><img src="https://avatars.githubusercontent.com/u/77482?v=4?s=100" width="100px;" alt="John Haugeland"/><br /><sub><b>John Haugeland</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=StoneCypher" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/treydavis"><img src="https://avatars.githubusercontent.com/u/1691239?v=4?s=100" width="100px;" alt="Trey Davis"/><br /><sub><b>Trey Davis</b></sub></a><br /><a href="#design-treydavis" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://leonzalion.com/"><img src="https://avatars.githubusercontent.com/u/36966635?v=4?s=100" width="100px;" alt="Leon Si"/><br /><sub><b>Leon Si</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=leonzalion" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://spion.github.io/"><img src="https://avatars.githubusercontent.com/u/502412?v=4?s=100" width="100px;" alt="Gorgi Kosev"/><br /><sub><b>Gorgi Kosev</b></sub></a><br /><a href="#infra-spion" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mayconsacht"><img src="https://avatars.githubusercontent.com/u/5214042?v=4?s=100" width="100px;" alt="mayconsacht"/><br /><sub><b>mayconsacht</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=mayconsacht" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/paldepind"><img src="https://avatars.githubusercontent.com/u/521604?v=4?s=100" width="100px;" alt="Simon Friis Vindum"/><br /><sub><b>Simon Friis Vindum</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=paldepind" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=paldepind" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/gibson042"><img src="https://avatars.githubusercontent.com/u/1199584?v=4?s=100" width="100px;" alt="Richard Gibson"/><br /><sub><b>Richard Gibson</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=gibson042" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://alanharper.com.au/"><img src="https://avatars.githubusercontent.com/u/475?v=4?s=100" width="100px;" alt="Alan Harper"/><br /><sub><b>Alan Harper</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=aussiegeek" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Osman-Sodefa"><img src="https://avatars.githubusercontent.com/u/90332566?v=4?s=100" width="100px;" alt="Makien Osman"/><br /><sub><b>Makien Osman</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=Osman-Sodefa" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sommd"><img src="https://avatars.githubusercontent.com/u/7817485?v=4?s=100" width="100px;" alt="David Sommerich"/><br /><sub><b>David Sommerich</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=sommd" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=sommd" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/diegopedro94"><img src="https://avatars.githubusercontent.com/u/7157796?v=4?s=100" width="100px;" alt="Diego Pedro"/><br /><sub><b>Diego Pedro</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=diegopedro94" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=diegopedro94" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/BoruiGu"><img src="https://avatars.githubusercontent.com/u/8686167?v=4?s=100" width="100px;" alt="Borui Gu"/><br /><sub><b>Borui Gu</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=BoruiGu" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/eventualbuddha"><img src="https://avatars.githubusercontent.com/u/1938?v=4?s=100" width="100px;" alt="Brian Donovan"/><br /><sub><b>Brian Donovan</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=eventualbuddha" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/volrk"><img src="https://avatars.githubusercontent.com/u/32265974?v=4?s=100" width="100px;" alt="volrk"/><br /><sub><b>volrk</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=volrk" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=volrk" title="Documentation">📖</a> <a href="https://github.com/dubzzz/fast-check/commits?author=volrk" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tinydylan"><img src="https://avatars.githubusercontent.com/u/41112113?v=4?s=100" width="100px;" alt="tinydylan"/><br /><sub><b>tinydylan</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=tinydylan" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=tinydylan" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jasikpark"><img src="https://avatars.githubusercontent.com/u/10626596?v=4?s=100" width="100px;" alt="Caleb Jasik"/><br /><sub><b>Caleb Jasik</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=jasikpark" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rulai-hu"><img src="https://avatars.githubusercontent.com/u/2570932?v=4?s=100" width="100px;" alt="Rulai Hu"/><br /><sub><b>Rulai Hu</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=rulai-hu" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/afonsojramos"><img src="https://avatars.githubusercontent.com/u/19473034?v=4?s=100" width="100px;" alt="Afonso Jorge Ramos"/><br /><sub><b>Afonso Jorge Ramos</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=afonsojramos" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tjenkinson.me/"><img src="https://avatars.githubusercontent.com/u/3259993?v=4?s=100" width="100px;" alt="Tom Jenkinson"/><br /><sub><b>Tom Jenkinson</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=tjenkinson" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/phormio"><img src="https://avatars.githubusercontent.com/u/28146332?v=4?s=100" width="100px;" alt="phormio"/><br /><sub><b>phormio</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=phormio" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://buildo.io/"><img src="https://avatars.githubusercontent.com/u/2643520?v=4?s=100" width="100px;" alt="Giovanni Gonzaga"/><br /><sub><b>Giovanni Gonzaga</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=giogonzo" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=giogonzo" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://caurea.org/"><img src="https://avatars.githubusercontent.com/u/34538?v=4?s=100" width="100px;" alt="Tomas Carnecky"/><br /><sub><b>Tomas Carnecky</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=wereHamster" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Djaler"><img src="https://avatars.githubusercontent.com/u/7964583?v=4?s=100" width="100px;" alt="Kirill Romanov"/><br /><sub><b>Kirill Romanov</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=Djaler" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=Djaler" title="Documentation">📖</a> <a href="https://github.com/dubzzz/fast-check/commits?author=Djaler" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://giovannyg.github.io/"><img src="https://avatars.githubusercontent.com/u/5326411?v=4?s=100" width="100px;" alt="Giovanny González"/><br /><sub><b>Giovanny González</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=giovannyg" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/markkulube"><img src="https://avatars.githubusercontent.com/u/34955942?v=4?s=100" width="100px;" alt="Mark Kulube"/><br /><sub><b>Mark Kulube</b></sub></a><br /><a href="#infra-markkulube" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.undiscoveredfeatures.com/"><img src="https://avatars.githubusercontent.com/u/354848?v=4?s=100" width="100px;" alt="Peter Hamilton"/><br /><sub><b>Peter Hamilton</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=hamiltop" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ChineduOzodi"><img src="https://avatars.githubusercontent.com/u/11678369?v=4?s=100" width="100px;" alt="Chinedu Ozodi"/><br /><sub><b>Chinedu Ozodi</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=ChineduOzodi" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gunar"><img src="https://avatars.githubusercontent.com/u/7684574?v=4?s=100" width="100px;" alt="Gunar Gessner"/><br /><sub><b>Gunar Gessner</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=gunar" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/CSBatchelor"><img src="https://avatars.githubusercontent.com/u/18668440?v=4?s=100" width="100px;" alt="Christian Batchelor"/><br /><sub><b>Christian Batchelor</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=CSBatchelor" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tomeraberba.ch/"><img src="https://avatars.githubusercontent.com/u/23299544?v=4?s=100" width="100px;" alt="Tomer Aberbach"/><br /><sub><b>Tomer Aberbach</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=TomerAberbach" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=TomerAberbach" title="Documentation">📖</a> <a href="https://github.com/dubzzz/fast-check/commits?author=TomerAberbach" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0xflotus"><img src="https://avatars.githubusercontent.com/u/26602940?v=4?s=100" width="100px;" alt="0xflotus"/><br /><sub><b>0xflotus</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=0xflotus" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/CodeLenny"><img src="https://avatars.githubusercontent.com/u/9272847?v=4?s=100" width="100px;" alt="Ryan Leonard"/><br /><sub><b>Ryan Leonard</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=CodeLenny" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=CodeLenny" title="Documentation">📖</a> <a href="https://github.com/dubzzz/fast-check/commits?author=CodeLenny" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.bitjson.com/"><img src="https://avatars.githubusercontent.com/u/904007?v=4?s=100" width="100px;" alt="Jason Dreyzehner"/><br /><sub><b>Jason Dreyzehner</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=bitjson" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=bitjson" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://matinzd.dev/"><img src="https://avatars.githubusercontent.com/u/24797481?v=4?s=100" width="100px;" alt="Matin Zadeh Dolatabad"/><br /><sub><b>Matin Zadeh Dolatabad</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=matinzd" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://goo.gl/IlWG8U"><img src="https://avatars.githubusercontent.com/u/500?v=4?s=100" width="100px;" alt="Juan Julián Merelo Guervós"/><br /><sub><b>Juan Julián Merelo Guervós</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=JJ" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SimenB"><img src="https://avatars.githubusercontent.com/u/1404810?v=4?s=100" width="100px;" alt="Simen Bekkhus"/><br /><sub><b>Simen Bekkhus</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=SimenB" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tskj"><img src="https://avatars.githubusercontent.com/u/25415972?v=4?s=100" width="100px;" alt="Tarjei Skjærset"/><br /><sub><b>Tarjei Skjærset</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=tskj" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://denisgorbachev.com/"><img src="https://avatars.githubusercontent.com/u/829578?v=4?s=100" width="100px;" alt="Denis Gorbachev"/><br /><sub><b>Denis Gorbachev</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=DenisGorbachev" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://senocular.github.io/"><img src="https://avatars.githubusercontent.com/u/3536716?v=4?s=100" width="100px;" alt="Trevor McCauley"/><br /><sub><b>Trevor McCauley</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=senocular" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://grantkiely.com/"><img src="https://avatars.githubusercontent.com/u/1948935?v=4?s=100" width="100px;" alt="Grant Kiely"/><br /><sub><b>Grant Kiely</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=gkiely" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vecerek"><img src="https://avatars.githubusercontent.com/u/5737996?v=4?s=100" width="100px;" alt="Attila Večerek"/><br /><sub><b>Attila Večerek</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=vecerek" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=vecerek" title="Documentation">📖</a> <a href="https://github.com/dubzzz/fast-check/commits?author=vecerek" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.zachbjornson.com/"><img src="https://avatars.githubusercontent.com/u/469365?v=4?s=100" width="100px;" alt="Zach Bjornson"/><br /><sub><b>Zach Bjornson</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=zbjornson" title="Code">💻</a> <a href="https://github.com/dubzzz/fast-check/commits?author=zbjornson" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/bennettp123"><img src="https://avatars.githubusercontent.com/u/1610227?v=4?s=100" width="100px;" alt="Bennett Perkins"/><br /><sub><b>Bennett Perkins</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=bennettp123" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nielk"><img src="https://avatars.githubusercontent.com/u/4980521?v=4?s=100" width="100px;" alt="Alexandre Oger"/><br /><sub><b>Alexandre Oger</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=nielk" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ej-shafran"><img src="https://avatars.githubusercontent.com/u/116496520?v=4?s=100" width="100px;" alt="ej shafran"/><br /><sub><b>ej shafran</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=ej-shafran" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gruhn"><img src="https://avatars.githubusercontent.com/u/26570572?v=4?s=100" width="100px;" alt="Niklas Gruhn"/><br /><sub><b>Niklas Gruhn</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=gruhn" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://patrickroza.com/"><img src="https://avatars.githubusercontent.com/u/42661?v=4?s=100" width="100px;" alt="Patrick Roza"/><br /><sub><b>Patrick Roza</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=patroza" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cindywu"><img src="https://avatars.githubusercontent.com/u/1177031?v=4?s=100" width="100px;" alt="Cindy Wu"/><br /><sub><b>Cindy Wu</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=cindywu" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nmay231"><img src="https://avatars.githubusercontent.com/u/35386821?v=4?s=100" width="100px;" alt="Noah"/><br /><sub><b>Noah</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=nmay231" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jamesbvaughan"><img src="https://avatars.githubusercontent.com/u/2906913?v=4?s=100" width="100px;" alt="James Vaughan"/><br /><sub><b>James Vaughan</b></sub></a><br /><a href="https://github.com/dubzzz/fast-check/commits?author=jamesbvaughan" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome! [Become one of them](CONTRIBUTING.md)

## Sponsors 💸

Many individuals and companies offer their financial support to the project, a huge thanks to all of them too 💓

<a href="https://github.com/sponsors/dubzzz"><img align="center" src="https://raw.githubusercontent.com/dubzzz/sponsors-svg/main/sponsorkit/sponsors.svg" alt="all sponsors" /></a>

You can also become one of them by contributing via [GitHub Sponsors](https://github.com/sponsors/dubzzz) or [OpenCollective](https://opencollective.com/fast-check/contribute).

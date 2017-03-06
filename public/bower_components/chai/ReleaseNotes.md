# Release Notes

## Note

As of 3.0.0, the ReleaseNotes.md file has been deprecated. [Please refer to the release notes available on Github](https://github.com/chaijs/chai/releases). Or
[the release notes on the chaijs.com website](https://chaijs.com/releases).

---

## 2.3.0 / 2015-04-26

Added `ownPropertyDescriptor` assertion:

```js
expect('test').to.have.ownPropertyDescriptor('length');
expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
expect('test').ownPropertyDescriptor('length').to.have.keys('value');
```

### Community Contributions

#### Code Features & Fixes

 * [#408](https://github.com/chaijs/chai/pull/408) Add `ownPropertyDescriptor`
   assertion.
   By [@ljharb](https://github.com/ljharb)
 * [#422](https://github.com/chaijs/chai/pull/422) Improve ownPropertyDescriptor
   tests.
   By [@ljharb](https://github.com/ljharb)

#### Documentation fixes

 * [#417](https://github.com/chaijs/chai/pull/417) Fix documentation typo
 By [@astorije](https://github.com/astorije)
 * [#423](https://github.com/chaijs/chai/pull/423) Fix inconsistency in docs.
 By [@ehntoo](https://github.com/ehntoo)


## 2.2.0 / 2015-03-26

Deep property strings can now be escaped using `\\` - for example:

```js
var deepCss = { '.link': { '[target]': 42 }};
expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42)
```

### Community Contributions

#### Code Features & Fixes

 * [#402](https://github.com/chaijs/chai/pull/402) Allow escaping of deep
   property keys.
   By [@umireon](https://github.com/umireon)

#### Documentation fixes

 * [#405](https://github.com/chaijs/chai/pull/405) Tweak documentation around
 deep property escaping.
 By [@keithamus](https://github.com/keithamus)


## 2.1.2 / 2015-03-15

A minor bug fix. No new features.

### Community Contributions

#### Code Features & Fixes

 * [#395](https://github.com/chaijs/chai/pull/395) Fix eval-related bugs with
   assert.operator ([#386](https://github.com/chaijs/chai/pull/386)).
   By [@cjqed](https://github.com/cjqed)

## 2.1.1 / 2015-03-04

Two minor bugfixes. No new features.

### Community Contributions

#### Code Features & Fixes

 * [#385](https://github.com/chaijs/chai/pull/385) Fix a bug (also described in
   [#387](https://github.com/chaijs/chai/pull/385)) where `deep.property` would not work with single
   key names. By [@eldritch-fossicker](https://github.com/eldritch-fossicker)
 * [#379](https://github.com/chaijs/chai/pull/379) Fix bug where tools which overwrite
   primitive prototypes, such as Babel or core-js would fail.
   By [@dcneiner](https://github.com/dcneiner)

#### Documentation fixes

 * [#382](https://github.com/chaijs/chai/pull/382) Add doc for showDiff argument in assert.
   By [@astorije](https://github.com/astorije)
 * [#383](https://github.com/chaijs/chai/pull/383) Improve wording for truncateTreshold docs
   By [@gurdiga](https://github.com/gurdiga)
 * [#381](https://github.com/chaijs/chai/pull/381) Improve wording for assert.empty docs
   By [@astorije](https://github.com/astorije)

## 2.1.0 / 2015-02-23

Small release; fixes an issue where the Chai lib was incorrectly reporting the
version number.

Adds new `should.fail()` and `expect.fail()` methods, which are convinience
methods to throw Assertion Errors.

### Community Contributions

#### Code Features & Fixes

 * [#356](https://github.com/chaijs/chai/pull/356) Add should.fail(), expect.fail(). By [@Soviut](https://github.com/Soviut)
 * [#374](https://github.com/chaijs/chai/pull/374) Increment version. By [@jmm](https://github.com/jmm)

## 2.0.0 / 2015-02-09

Unfortunately with 1.10.0 - compatibility broke with older versions because of
the `addChainableNoop`. This change has been reverted.

Any plugins using `addChainableNoop` should cease to do so.

Any developers wishing for this behaviour can use [dirty-chai](https://www.npmjs.com/package/dirty-chai)
by [@joshperry](https://github.com/joshperry)

### Community Contributions

#### Code Features & Fixes

 * [#361](https://github.com/chaijs/chai/pull/361) `.keys()` now accepts Objects, extracting keys from them. By [@gregglind](https://github.com/gregglind)
 * [#359](https://github.com/chaijs/chai/pull/359) `.keys()` no longer mutates passed arrays. By [@gregglind](https://github.com/gregglind)
 * [#349](https://github.com/chaijs/chai/pull/349) Add a new chainable keyword - `.which`. By [@toastynerd](https://github.com/toastynerd)
 * [#333](https://github.com/chaijs/chai/pull/333) Add `.change`, `.increase` and `.decrease` assertions. By [@cmpolis](https://github.com/cmpolis)
 * [#335](https://github.com/chaijs/chai/pull/335) `chai.util` is now exposed [@DingoEatingFuzz](https://github.com/DingoEatingFuzz)
 * [#328](https://github.com/chaijs/chai/pull/328) Add `.includes` and `.contains` aliases (for `.include` and `.contain`). By [@lo1tuma](https://github.com/lo1tuma)
 * [#313](https://github.com/chaijs/chai/pull/313) Add `.any.keys()` and `.all.keys()` qualifiers. By [@cjqed](https://github.com/cjqed)
 * [#312](https://github.com/chaijs/chai/pull/312) Add `assert.sameDeepMembers()`. By [@cjqed](https://github.com/cjqed)
 * [#311](https://github.com/chaijs/chai/pull/311) Add `assert.isAbove()` and `assert.isBelow()`. By [@cjqed](https://github.com/cjqed)
 * [#308](https://github.com/chaijs/chai/pull/308) `property` and `deep.property` now pass if a value is set to `undefined`. By [@prodatakey](https://github.com/prodatakey)
 * [#309](https://github.com/chaijs/chai/pull/309) optimize deep equal in Arrays. By [@ericdouglas](https://github.com/ericdouglas)
 * [#306](https://github.com/chaijs/chai/pull/306) revert #297 - allowing lint-friendly tests. By [@keithamus](https://github.com/keithamus)

#### Documentation fixes

 * [#357](https://github.com/chaijs/chai/pull/357) Copyright year updated in docs. By [@danilovaz](https://github.com/danilovaz)
 * [#325](https://github.com/chaijs/chai/pull/325) Fix documentation for overwriteChainableMethod. By [@chasenlehara](https://github.com/chasenlehara)
 * [#334](https://github.com/chaijs/chai/pull/334) Typo fix. By [@hurrymaplelad](https://github.com/hurrymaplelad)
 * [#317](https://github.com/chaijs/chai/pull/317) Typo fix. By [@jasonkarns](https://github.com/jasonkarns)
 * [#318](https://github.com/chaijs/chai/pull/318) Typo fix. By [@jasonkarns](https://github.com/jasonkarns)
 * [#316](https://github.com/chaijs/chai/pull/316) Typo fix. By [@jasonkarns](https://github.com/jasonkarns)


## 1.10.0 / 2014-11-10

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required
- **Plugin Developers:**
  - Review `addChainableNoop` notes below.
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Noop Function for Terminating Assertion Properties

The following assertions can now also be used in the function-call form:

* ok
* true
* false
* null
* undefined
* exist
* empty
* arguments
* Arguments

The above list of assertions are property getters that assert immediately on
access. Because of that, they were written to be used by terminating the assertion
chain with a property access.

```js
expect(true).to.be.true;
foo.should.be.ok;
```

This syntax is definitely aesthetically pleasing but, if you are linting your
test code, your linter will complain with an error something like "Expected an
assignment or function call and instead saw an expression." Since the linter
doesn't know about the property getter it assumes this line has no side-effects,
and throws a warning in case you made a mistake.

Squelching these errors is not a good solution as test code is getting to be
just as important as, if not more than, production code. Catching syntactical
errors in tests using static analysis is a great tool to help make sure that your
tests are well-defined and free of typos.

A better option was to provide a function-call form for these assertions so that
the code's intent is more clear and the linters stop complaining about something
looking off. This form is added in addition to the existing property access form
and does not impact existing test code.

```js
expect(true).to.be.true();
foo.should.be.ok();
```

These forms can also be mixed in any way, these are all functionally identical:

```js
expect(true).to.be.true.and.not.false();
expect(true).to.be.true().and.not.false;
expect(true).to.be.true.and.not.false;
```

#### Plugin Authors

If you would like to provide this function-call form for your terminating assertion
properties, there is a new function to register these types of asserts. Instead
of using `addProperty` to register terminating assertions, simply use `addChainableNoop`
instead; the arguments to both are identical. The latter will make the assertion
available in both the attribute and function-call forms and should have no impact
on existing users of your plugin.

### Community Contributions

- [#297](https://github.com/chaijs/chai/pull/297) Allow writing lint-friendly tests. [@joshperry](https://github.com/joshperry)
- [#298](https://github.com/chaijs/chai/pull/298) Add check for logging `-0`. [@dasilvacontin](https://github.com/dasilvacontin)
- [#300](https://github.com/chaijs/chai/pull/300) Fix #299: the test is defining global variables [@julienw](https://github.com/julienw)

Thank you to all who took time to contribute!

## 1.9.2 / 2014-09-29

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required
- **Plugin Developers:**
  - No changes required
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Community Contributions

- [#264](https://github.com/chaijs/chai/pull/264) Show diff for keys assertions [@cjthompson](https://github.com/cjthompson)
- [#267](https://github.com/chaijs/chai/pull/267) Use SVG badges [@shinnn](https://github.com/shinnn)
- [#268](https://github.com/chaijs/chai/pull/268) Allow messages to be functions (sinon-compat) [@charlierudolph](https://github.com/charlierudolph)
- [#269](https://github.com/chaijs/chai/pull/269) Remove unused argument for #lengthOf [@charlierudolph](https://github.com/charlierudolph)
- [#275](https://github.com/chaijs/chai/pull/275) Rewrite pretty-printing HTML elements to prevent throwing internal errors [@DrRataplan](https://github.com/DrRataplan)
- [#277](https://github.com/chaijs/chai/pull/277) Fix assert documentation for #sameMembers [@charlierudolph](https://github.com/charlierudolph)
- [#279](https://github.com/chaijs/chai/pull/279) closeTo should check value's type before assertion [@mohayonao](https://github.com/mohayonao)
- [#289](https://github.com/chaijs/chai/pull/289) satisfy is called twice [@charlierudolph](https://github.com/charlierudolph)
- [#292](https://github.com/chaijs/chai/pull/292) resolve conflicts with node-webkit and global usage [@boneskull](https://github.com/boneskull)

Thank you to all who took time to contribute!

## 1.9.1 / 2014-03-19

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - Migrate configuration options to new interface. (see notes)
- **Plugin Developers:**
  - No changes required
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Configuration

There have been requests for changes and additions to the configuration mechanisms
and their impact in the Chai architecture. As such, we have decoupled the
configuration from the `Assertion` constructor. This not only allows for centralized
configuration, but will allow us to shift the responsibility from the `Assertion`
constructor to the `assert` interface in future releases.

These changes have been implemented in a non-breaking way, but a depretiation
warning will be presented to users until they migrate. The old config method will
be removed in either `v1.11.0` or `v2.0.0`, whichever comes first.

#### Quick Migration

```js
// change this:
chai.Assertion.includeStack = true;
chai.Assertion.showDiff = false;

// ... to this:
chai.config.includeStack = true;
chai.config.showDiff = false;
```

#### All Config Options

##### config.includeStack

- **@param** _{Boolean}_
- **@default** `false`

User configurable property, influences whether stack trace is included in
Assertion error message. Default of `false` suppresses stack trace in the error
message.

##### config.showDiff

- **@param** _{Boolean}_
- **@default** `true`

User configurable property, influences whether or not the `showDiff` flag
should be included in the thrown AssertionErrors. `false` will always be `false`;
`true` will be true when the assertion has requested a diff be shown.

##### config.truncateThreshold **(NEW)**

- **@param** _{Number}_
- **@default** `40`

User configurable property, sets length threshold for actual and expected values
in assertion errors. If this threshold is exceeded, the value is truncated.

Set it to zero if you want to disable truncating altogether.

```js
chai.config.truncateThreshold = 0; // disable truncating
```

### Community Contributions

- [#228](https://github.com/chaijs/chai/pull/228) Deep equality check for memebers. [@duncanbeevers](https://github.com/duncanbeevers)
- [#247](https://github.com/chaijs/chai/pull/247) Proofreading. [@didorellano](https://github.com/didoarellano)
- [#244](https://github.com/chaijs/chai/pull/244) Fix `contain`/`include` 1.9.0 regression. [@leider](https://github.com/leider)
- [#233](https://github.com/chaijs/chai/pull/233) Improvements to `ssfi` for `assert` interface. [@refack](https://github.com/refack)
- [#251](https://github.com/chaijs/chai/pull/251) New config option: object display threshold. [@romario333](https://github.com/romario333)

Thank you to all who took time to contribute!

### Other Bug Fixes

- [#183](https://github.com/chaijs/chai/issues/183) Allow `undefined` for actual. (internal api)
- Update Karam(+plugins)/Istanbul to most recent versions.

## 1.9.0 / 2014-01-29

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required
- **Plugin Developers:**
  - Review [#219](https://github.com/chaijs/chai/pull/219).
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Community Contributions

- [#202](https://github.com/chaijs/chai/pull/201) Improve error message for .throw(). [@andreineculau](https://github.com/andreineculau)
- [#217](https://github.com/chaijs/chai/pull/217) Chai tests can be run with `--watch`. [@demands](https://github.com/demands)
- [#219](https://github.com/chaijs/chai/pull/219) Add overwriteChainableMethod utility. [@demands](https://github.com/demands)
- [#224](https://github.com/chaijs/chai/pull/224) Return error on throw method to chain on error properties. [@vbardales](https://github.com/vbardales)
- [#226](https://github.com/chaijs/chai/pull/226) Add `has` to language chains. [@duncanbeevers](https://github.com/duncanbeevers)
- [#230](https://github.com/chaijs/chai/pull/230) Support `{a:1,b:2}.should.include({a:1})` [@jkroso](https://github.com/jkroso)
- [#231](https://github.com/chaijs/chai/pull/231) Update Copyright notices to 2014 [@duncanbeevers](https://github.com/duncanbeevers)
- [#232](https://github.com/chaijs/chai/pull/232) Avoid error instantiation if possible on assert.throws. [@laconbass](https://github.com/laconbass)

Thank you to all who took time to contribute!

### Other Bug Fixes

- [#225](https://github.com/chaijs/chai/pull/225) Improved AMD wrapper provided by upstream `component(1)`.
- [#185](https://github.com/chaijs/chai/issues/185) `assert.throws()` returns thrown error for further assertions.
- [#237](https://github.com/chaijs/chai/pull/237) Remove coveralls/jscoverage, include istanbul coverage report in travis test.
- Update Karma and Sauce runner versions for consistent CI results. No more karma@canary.

## 1.8.1 / 2013-10-10

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - Refresh `node_modules` folder for updated dependencies.
- **Plugin Developers:**
  - No changes required
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Browserify

This is a small patch that updates the dependency tree so browserify users can install
chai. (Remove conditional requires)

## 1.8.0 / 2013-09-18

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - See `deep.equal` notes.
- **Plugin Developers:**
  - No changes required
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Deep Equals

This version of Chai focused on a overhaul to the deep equal utility. The code for this
tool has been removed from the core lib and can now be found at:
[chai / deep-eql](https://github.com/chaijs/deep-eql). As stated in previous releases,
this is part of a larger initiative to provide transparency, independent testing, and coverage for
some of the more complicated internal tools.

For the most part `.deep.equal` will behave the same as it has. However, in order to provide a
consistent ruleset across all types being tested, the following changes have been made and _might_
require changes to your tests.

**1.** Strict equality for non-traversable nodes according to [egal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).

_Previously:_ Non-traversable equal via `===`.

```js
expect(NaN).to.deep.equal(NaN);
expect(-0).to.not.deep.equal(+0);
```

**2.** Arguments are not Arrays (and all types must be equal):

_Previously:_ Some crazy nonsense that led to empty arrays deep equaling empty objects deep equaling dates.

```js
expect(arguments).to.not.deep.equal([]);
expect(Array.prototype.slice.call(arguments)).to.deep.equal([]);
```

- [#156](https://github.com/chaijs/chai/issues/156) Empty object is eql to empty array
- [#192](https://github.com/chaijs/chai/issues/192) empty object is eql to a Date object
- [#194](https://github.com/chaijs/chai/issues/194) refactor deep-equal utility

### CI and Browser Testing

Chai now runs the browser CI suite using [Karma](http://karma-runner.github.io/) directed at
[SauceLabs](https://saucelabs.com/). This means we get to know where our browser support stands...
and we get a cool badge:

[![Selenium Test Status](https://saucelabs.com/browser-matrix/logicalparadox.svg)](https://saucelabs.com/u/logicalparadox)

Look for the list of browsers/versions to expand over the coming releases.

- [#195](https://github.com/chaijs/chai/issues/195) karma test framework

## 1.7.2 / 2013-06-27

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required.
- **Plugin Developers:**
  - No changes required
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Coverage Reporting

Coverage reporting has always been available for core-developers but the data has never been published
for our end users. In our ongoing effort to improve accountability this data will now be published via
the [coveralls.io](https://coveralls.io/) service. A badge has been added to the README and the full report
can be viewed online at the [chai coveralls project](https://coveralls.io/r/chaijs/chai). Furthermore, PRs
will receive automated messages indicating how their PR impacts test coverage. This service is tied to TravisCI.

### Other Fixes

- [#175](https://github.com/chaijs/chai/issues/175) Add `bower.json`. (Fix ignore all)

## 1.7.1 / 2013-06-24

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required.
- **Plugin Developers:**
  - No changes required
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Official Bower Support

Support has been added for the Bower Package Manager ([bower.io])(http://bower.io/). Though
Chai could be installed via Bower in the past, this update adds official support via the `bower.json`
specification file.

- [#175](https://github.com/chaijs/chai/issues/175) Add `bower.json`.

## 1.7.0 / 2013-06-17

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required.
- **Plugin Developers:**
  - Review AssertionError update notice.
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### AssertionError Update Notice

Chai now uses [chaijs/assertion-error](https://github.com/chaijs/assertion-error) instead an internal
constructor. This will allow for further iteration/experimentation of the AssertionError constructor
independant of Chai. Future plans include stack parsing for callsite support.

This update constructor has a different constructor param signature that conforms more with the standard
`Error` object. If your plugin throws and `AssertionError` directly you will need to update your plugin
with the new signature.

```js
var AssertionError = require('chai').AssertionError;

/**
 * previous
 *
 * @param {Object} options
 */

throw new AssertionError({
    message: 'An assertion error occurred'
  , actual: actual
  , expect: expect
  , startStackFunction: arguments.callee
  , showStack: true
});

/**
 * new
 *
 * @param {String} message
 * @param {Object} options
 * @param {Function} start stack function
 */

throw new AssertionError('An assertion error occurred', {
    actual: actual
  , expect: expect
  , showStack: true
}, arguments.callee);

// other signatures
throw new AssertionError('An assertion error occurred');
throw new AssertionError('An assertion error occurred', null, arguments.callee);
```

#### External Dependencies

This is the first non-developement dependency for Chai. As Chai continues to evolve we will begin adding
more; the next will likely be improved type detection and deep equality. With Chai's userbase continually growing
there is an higher need for accountability and documentation. External dependencies will allow us to iterate and
test on features independent from our interfaces.

Note: The browser packaged version `chai.js` will ALWAYS contain all dependencies needed to run Chai.

### Community Contributions

- [#169](https://github.com/chaijs/chai/pull/169) Fix deep equal comparison for Date/Regexp types. [@katsgeorgeek](https://github.com/katsgeorgeek)
- [#171](https://github.com/chaijs/chai/pull/171) Add `assert.notOk()`. [@Bartvds](https://github.com/Bartvds)
- [#173](https://github.com/chaijs/chai/pull/173) Fix `inspect` utility. [@domenic](https://github.com/domenic)

Thank you to all who took the time to contribute!

## 1.6.1 / 2013-06-05

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required.
- **Plugin Developers:**
  - No changes required.
- **Core Contributors:**
  - Refresh `node_modules` folder for updated developement dependencies.

### Deep Equality

Regular Expressions are now tested as part of all deep equality assertions. In previous versions
they silently passed for all scenarios. Thanks to [@katsgeorgeek](https://github.com/katsgeorgeek) for the contribution.

### Community Contributions

- [#161](https://github.com/chaijs/chai/pull/161) Fix documented name for assert interface's isDefined method. [@brandonpayton](https://github.com/brandonpayton)
- [#168](https://github.com/chaijs/chai/pull/168) Fix comparison equality of two regexps for when using deep equality. [@katsgeorgeek](https://github.com/katsgeorgeek)

Thank you to all who took the time to contribute!

### Additional Notes

- Mocha has been locked at version `1.8.x` to ensure `mocha-phantomjs` compatibility.

## 1.6.0 / 2013-04-29

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required.
- **Plugin Developers:**
  - No changes required.
- **Core Contributors:**
  - Refresh `node_modules` folder for updated developement dependencies.

### New Assertions

#### Array Members Inclusion

Asserts that the target is a superset of `set`, or that the target and `set` have the same members.
Order is not taken into account. Thanks to [@NickHeiner](https://github.com/NickHeiner) for the contribution.

```js
// (expect/should) full set
expect([4, 2]).to.have.members([2, 4]);
expect([5, 2]).to.not.have.members([5, 2, 1]);

// (expect/should) inclusion
expect([1, 2, 3]).to.include.members([3, 2]);
expect([1, 2, 3]).to.not.include.members([3, 2, 8]);

// (assert) full set
assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');

// (assert) inclusion
assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');

```

#### Non-inclusion for Assert Interface

Most `assert` functions have a negative version, like `instanceOf()` has a corresponding `notInstaceOf()`.
However `include()` did not have a corresponding `notInclude()`. This has been added.

```js
assert.notInclude([ 1, 2, 3 ], 8);
assert.notInclude('foobar', 'baz');
```

### Community Contributions

- [#140](https://github.com/chaijs/chai/pull/140) Restore `call`/`apply` methods for plugin interface. [@RubenVerborgh](https://github.com/RubenVerborgh)
- [#148](https://github.com/chaijs/chai/issues/148)/[#153](https://github.com/chaijs/chai/pull/153) Add `members` and `include.members` assertions. [#NickHeiner](https://github.com/NickHeiner)

Thank you to all who took time to contribute!

### Other Bug Fixes

- [#142](https://github.com/chaijs/chai/issues/142) `assert#include` will no longer silently pass on wrong-type haystack.
- [#158](https://github.com/chaijs/chai/issues/158) `assert#notInclude` has been added.
- Travis-CI now tests Node.js `v0.10.x`. Support for `v0.6.x` has been removed. `v0.8.x` is still tested as before.

## 1.5.0 / 2013-02-03

### Migration Requirements

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - _Update [2013-02-04]:_ Some users may notice a small subset of deep equality assertions will no longer pass. This is the result of
  [#120](https://github.com/chaijs/chai/issues/120), an improvement to our deep equality algorithm. Users will need to revise their assertions
  to be more granular should this occur. Further information: [#139](https://github.com/chaijs/chai/issues/139).
- **Plugin Developers:**
  - No changes required.
- **Core Contributors:**
  - Refresh `node_modules` folder for updated developement dependencies.

### Community Contributions

- [#126](https://github.com/chaijs/chai/pull/126): Add `eqls` alias for `eql`. [@RubenVerborgh](https://github.com/RubenVerborgh)
- [#127](https://github.com/chaijs/chai/issues/127): Performance refactor for chainable methods. [@RubenVerborgh](https://github.com/RubenVerborgh)
- [#133](https://github.com/chaijs/chai/pull/133): Assertion `.throw` support for primitives. [@RubenVerborgh](https://github.com/RubenVerborgh)
- [#137](https://github.com/chaijs/chai/issues/137): Assertion `.throw` support for empty messages. [@timnew](https://github.com/timnew)
- [#136](https://github.com/chaijs/chai/pull/136): Fix backward negation messages when using `.above()` and `.below()`. [@whatthejeff](https://github.com/whatthejeff)

Thank you to all who took time to contribute!

### Other Bug Fixes

- Improve type detection of `.a()`/`.an()` to work in cross-browser scenarios.
- [#116](https://github.com/chaijs/chai/issues/116): `.throw()` has cleaner display of errors when WebKit browsers.
- [#120](https://github.com/chaijs/chai/issues/120): `.eql()` now works to compare dom nodes in browsers.


### Usage Updates

#### For Users

**1. Component Support:** Chai now included the proper configuration to be installed as a
[component](https://github.com/component/component). Component users are encouraged to consult
[chaijs.com](http://chaijs.com) for the latest version number as using the master branch
does not gaurantee stability.

```js
// relevant component.json
  devDependencies: {
    "chaijs/chai": "1.5.0"
  }
```

Alternatively, bleeding-edge is available:

    $ component install chaijs/chai

**2. Configurable showDiff:** Some test runners (such as [mocha](http://visionmedia.github.com/mocha/))
include support for showing the diff of strings and objects when an equality error occurs. Chai has
already included support for this, however some users may not prefer this display behavior. To revert to
no diff display, the following configuration is available:

```js
chai.Assertion.showDiff = false; // diff output disabled
chai.Assertion.showDiff = true; // default, diff output enabled
```

#### For Plugin Developers

**1. New Utility - type**: The new utility `.type()` is available as a better implementation of `typeof`
that can be used cross-browser. It handles the inconsistencies of Array, `null`, and `undefined` detection.

- **@param** _{Mixed}_ object to detect type of
- **@return** _{String}_ object type

```js
chai.use(function (c, utils) {
  // some examples
  utils.type({}); // 'object'
  utils.type(null); // `null'
  utils.type(undefined); // `undefined`
  utils.type([]); // `array`
});
```

#### For Core Contributors

**1. Browser Testing**: Browser testing of the `./chai.js` file is now available in the command line
via PhantomJS. `make test` and Travis-CI will now also rebuild and test `./chai.js`. Consequently, all
pull requests will now be browser tested in this way.

_Note: Contributors opening pull requests should still NOT include the browser build._

**2. SauceLabs Testing**: Early SauceLab support has been enabled with the file `./support/mocha-cloud.js`.
Those interested in trying it out should create a free [Open Sauce](https://saucelabs.com/signup/plan) account
and include their credentials in `./test/auth/sauce.json`.

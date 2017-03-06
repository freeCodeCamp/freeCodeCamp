### Note

As of 3.0.0, the History.md file has been deprecated. [Please refer to the full
commit logs available on GitHub](https://github.com/chaijs/chai/commits/master).

---

2.3.0 / 2015-04-26
==================

  * Merge pull request #423 from ehntoo/patch-1
  * Merge pull request #422 from ljharb/fix_descriptor_tests
  * Fix a small bug in the .null assertion docs
  * Use a regex to account for property ordering issues across engines.
  * Add `make test-firefox`
  * Merge pull request #417 from astorije/astorije/minimalist-typo
  * Remove trailing whitespaces
  * Fix super minor typo in an example
  * Merge pull request #408 from ljharb/enumerableProperty
  * Add `ownPropertyDescriptor` assertion.

2.2.0 / 2015-03-26
==================

  * Merge pull request #405 from chaijs/deep-escape-doc-tweaks
  * Tweak documentation on `.deep` flag.
  * Merge pull request #402 from umireon/escaping-dot-should-be-taken
  * Documentation of escaping in `.deep` flag.
  * take regular expression apart
  * Feature: backslash-escaping in `.deep.property`
  * Escaping dot should be taken in deep property

2.1.2 / 2015-03-15
==================

  * Merge pull request #396 from chaijs/add-keith-cirkel-contributing-md
  * Add Keith Cirkel to CONTRIBUTING.md
  * Merge pull request #395 from cjqed/386-assert-operator-no-eval
  * No longer using eval on assert operator #386
  * Merge pull request #389 from chaijs/update-git-summary
  * Update `git summary` in README

2.1.1 / 2015-03-04
==================

  * Merge pull request #385 from eldritch-fossicker/master
  * updates to reflect code style preference from @keithamus
  * fix indexing into array with deep propery
  * Merge pull request #382 from astorije/patch-2
  * Merge pull request #383 from gurdiga/config-doc-wording-improvement
  * config.truncateThreshold docs: simpler wording
  * Add missing docstring for showDiff argument of assert
  * Merge pull request #381 from astorije/patch-1
  * Add a minor precision that empty asserts on strings too.
  * Merge pull request #379 from dcneiner/should-primitive-fix
  * Primitives now use valueOf in shouldGetter

2.1.0 / 2015-02-23
==================

  * Merge pull request #374 from jmm/v2.0.1
  * Increment version to 2.0.1.
  * Merge pull request #365 from chaijs/fix-travis
  * Fix travis.yml deploy
  * Merge pull request #356 from Soviut/master
  * documented fail methods for expect and should interfaces
  * fail method added directly to expect

2.0.0 / 2015-02-09
==================

 * Merge pull request #361 from gregglind/b265-keys-object
 * fix #359.  Add `.keys(object)`
 * Merge pull request #359 from gregglind/b359-unexpected-keys-sort
 * Fix #359 keys() sorts input unexpectedly
 * contrib: publish release strategy and travis npm creds #337
 * Merge pull request #357 from danilovaz/master
 * Update copyright date
 * Merge pull request #349 from toastynerd/add-which-chain-method
 * add the which chain method as per issue #347
 * Merge pull request #333 from cmpolis/change-assertions
 * more `by` cleanup
 * cleaned out `.by` for #333
 * Merge pull request #335 from DingoEatingFuzz/expose-util
 * Expose chai util through the chai object
 * cleanup (per notes on pr #333)
 * updated `change` to work w/ non-number values + tests
 * Merge pull request #334 from hurrymaplelad/patch-1
 * Typo, the flag is called 'contains' with an 's'
 * updated assertion interface with `change` (#330)
 * added `change`,`increase`,`decrease` assertions (#330)
 * assert tests for `change`,`increase`,`decrease`
 * expect/should tests for `change`,`increase`,`decrease`
 * Merge pull request #328 from lo1tuma/issue-327
 * Add includes and contains alias (fixes #327)
 * Merge pull request #325 from chasenlehara/overwriteChainableMethodDocs
 * Fix docs for overwriteChainableMethod parameters
 * Merge pull request #317 from jasonkarns/patch-2
 * Merge pull request #318 from jasonkarns/patch-3
 * Merge pull request #316 from jasonkarns/patch-1
 * typos in docs
 * minor docs typo
 * update docs: getAllFlags -> transferFlags
 * Merge pull request #313 from cjqed/254-expect-any-all
 * Added the all and any flags for keys assertion, with all being the default behavior
 * Merge pull request #312 from cjqed/291-assert-same-deep-members
 * Changed public comment of sameDeepMemebers to be more clear
 * Fixes issue #291, adds assert.sameDeepMembers
 * Merge pull request #311 from cjqed/305-above-below-on-assert
 * Merge pull request #308 from prodatakey/hasproperty
 * Issue #305 fixed, added assert.isAbove and assert.isBelow
 * Fix typo
 * More unit tests for new utility functions
 * Refactor common functionality, document, test
 * Refactor if statement out
 * Small unit test fix
 * Handle array indexing terminating paths
 * Merge pull request #309 from ericdouglas/iterableEqual-couting-once
 * couting variables just once
 * Fix properties with `undefined` value pass property assertion
 * Merge pull request #306 from chaijs/revert-297-noopchainfunc
 * Revert "Allows writing lint-friendly tests"

1.10.0 / 2014-11-10
==================

 * Merge pull request #297 from prodatakey/noopchainfunc
 * Merge pull request #300 from julienw/299-fix-getMessage-test
 * Fix #299: the test is defining global variables
 * Add a couple more unit tests
 * Add unit tests for chained terminating property asserts
 * Revise documentation wording
 * Add docs for function style NOOP asserts
 * Make the NOOP function a shared constant
 * Merge pull request #298 from dasilvacontin/negativeZeroLogging
 * why not more assertions
 * added test for inspecting `-0`
 * a more readable/simple condition statement, as pointed out by @keithamus
 * added check for logging negative zero
 * Change test to not trigger argument bug
 * Allows writing lint-friendly tests
 * readme: update contributors for 1.9.2

1.9.2 / 2014-09-29
==================

 * Merge pull request #268 from charlierudolph/cr-lazyMessages
 * Merge pull request #269 from charlierudolph/cr-codeCleanup
 * Merge pull request #277 from charlierudolph/fix-doc
 * Merge pull request #279 from mohayonao/fix-closeTo
 * Merge pull request #292 from boneskull/mocha
 * resolves #255: upgrade mocha
 * Merge pull request #289 from charlierudolph/cr-dryUpCode
 * Dry up code
 * Merge pull request #275 from DrRataplan/master
 * assert: .closeTo() verify value's type before assertion
 * Rewrite pretty-printing HTML elements to prevent throwing internal errors Fixes errors occuring when using a non-native DOM implementation
 * Fix assert documentation
 * Remove unused argument
 * Allow messages to be functions
 * Merge pull request #267 from shinnn/master
 * Use SVG badge
 * Merge pull request #264 from cjthompson/keys_diff
 * Show diff for keys assertion

1.9.1 / 2014-03-19
==================

  * deps update
  * util: [getActual] select actual logic now allows undefined for actual. Closes #183
  * docs: [config] make public, express param type
  * Merge pull request #251 from romario333/threshold3
  * Fix issue #166 - configurable threshold in objDisplay.
  * Move configuration options to config.js.
  * Merge pull request #233 from Empeeric/master
  * Merge pull request #244 from leider/fix_for_contains
  * Merge pull request #247 from didoarellano/typo-fixes
  * Fix typos
  * Merge pull request #245 from lfac-pt/patch-1
  * Update `exports.version` to 1.9.0
  * aborting loop on finding
  * declaring variable only once
  * additional test finds incomplete implementation
  * simplified code
  * fixing #239 (without changing chai.js)
  * ssfi as it should be
  * Merge pull request #228 from duncanbeevers/deep_members
  * Deep equality check for collection membership

1.9.0 / 2014-01-29
==================

  * docs: add contributing.md #238
  * assert: .throws() returns thrown error. Closes #185
  * Merge pull request #232 from laconbass/assert-throws
  * assert: .fail() parameter mismatch. Closes #206
  * Merge branch 'karma-fixes'
  * Add karma phantomjs launcher
  * Use latest karma and sauce launcher
  * Karma tweaks
  * Merge pull request #230 from jkroso/include
  * Merge pull request #237 from chaijs/coverage
  * Add coverage to npmignore
  * Remove lib-cov from test-travisci dependents
  * Remove the not longer needed lcov reporter
  * Test coverage with istanbul
  * Remove jscoverage
  * Remove coveralls
  * Merge pull request #226 from duncanbeevers/add_has
  * Avoid error instantiation if possible on assert.throws
  * Merge pull request #231 from duncanbeevers/update_copyright_year
  * Update Copyright notices to 2014
  * handle negation correctly
  * add failing test case
  * support `{a:1,b:2}.should.include({a:1})`
  * Merge pull request #224 from vbardales/master
  * Add `has` to language chains
  * Merge pull request #219 from demands/overwrite_chainable
  * return error on throw method to chain on error properties, possibly different from message
  * util: store chainable behavior in a __methods object on ctx
  * util: code style fix
  * util: add overwriteChainableMethod utility (for #215)
  * Merge pull request #217 from demands/test_cleanup
  * test: make it possible to run utilities tests with --watch
  * makefile: change location of karma-runner bin script
  * Merge pull request #202 from andreineculau/patch-2
  * test: add tests for throwing custom errors
  * Merge pull request #201 from andreineculau/patch-1
  * test: updated for the new assertion errors
  * core: improve message for assertion errors (throw assertion)

1.8.1 / 2013-10-10
==================

 * pkg: update deep-eql version

1.8.0 / 2013-09-18
==================

 * test: [sauce] add a few more browsers
 * Merge branch 'refactor/deep-equal'
 * util: remove embedded deep equal utility
 * util: replace embedded deep equal with external module
 * Merge branch 'feature/karma'
 * docs: add sauce badge to readme [ci skip]
 * test: [sauce] use karma@canary to prevent timeouts
 * travis: only run on node 0.10
 * test: [karma] use karma phantomjs runner
 * Merge pull request #181 from tricknotes/fix-highlight
 * Fix highlight for example code

1.7.2 / 2013-06-27
==================

  * coverage: add coveralls badge
  * test: [coveralls] add coveralls api integration. testing travis-ci integration
  * Merge branch 'master' of github.com:chaijs/chai
  * Merge branch 'feature/bower'
  * Merge pull request #180 from tricknotes/modify-method-title
  * Merge pull request #179 from tricknotes/highlight-code-example
  * Modify method title to include argument name
  * Fix to highlight code example
  * bower: granular ignores

1.7.1 / 2013-06-24
==================

  * Merge branch 'feature/bower'. #175
  * bower: add json file
  * build: browser

1.7.0 / 2013-06-17
==================

  * error: remove internal assertion error constructor
  * core: [assertion-error] replace internal assertion error with dep
  * deps: add chaijs/assertion-error@1.0.0
  * docs: fix typo in source file. #174
  * Merge pull request #174 from piecioshka/master
  * typo
  * Merge branch 'master' of github.com:chaijs/chai
  * pkg: lock mocha/mocha-phantomjs versions (for now)
  * Merge pull request #173 from chaijs/inspect-fix
  * Fix `utils.inspect` with custom object-returning inspect()s.
  * Merge pull request #171 from Bartvds/master
  * replaced tabs with 2 spaces
  * added assert.notOk()
  * Merge pull request #169 from katsgeorgeek/topics/master
  * Fix comparison objects.

1.6.1 / 2013-06-05
==================

  * Merge pull request #168 from katsgeorgeek/topics/master
  * Add test for different RegExp flags.
  * Add test for regexp comparison.
  * Downgrade mocha version for fix running Phantom tests.
  * Fix comparison equality of two regexps.
  * Merge pull request #161 from brandonpayton/master
  * Fix documented name for assert interfaces isDefined method

1.6.0 / 2013-04-29
==================

  * build: browser
  * assert: [(not)include] throw on incompatible haystack. Closes #142
  * assert: [notInclude] add assert.notInclude. Closes #158
  * browser build
  * makefile: force browser build on browser-test
  * makefile: use component for browser build
  * core: [assertions] remove extraneous comments
  * Merge branch 'master' of github.com:chaijs/chai
  * test: [assert] deep equal ordering
  * Merge pull request #153 from NickHeiner/array-assertions
  * giving members a no-flag assertion
  * Code review comments - changing syntax
  * Code review comments
  * Adding members and memberEquals assertions for checking for subsets and set equality. Implements chaijs/chai#148.
  * Merge pull request #140 from RubenVerborgh/function-prototype
  * Restore the `call` and `apply` methods of Function when adding a chainable method.
  * readme: 2013
  * notes: migration notes for deep equal changes
  * test: for ever err() there must be a passing version

1.5.0 / 2013-02-03
==================

  * docs: add Release Notes for non-gitlog summary of changes.
  * lib: update copyright to 2013
  * Merge branch 'refactor/travis'
  * makefile: remove test-component for full test run
  * pkg: script test now runs make test so travis will test browser
  * browser: build
  * tests: refactor some tests to support new objDisplay output
  * test: [bootstrap] normalize boostrap across all test scenarios
  * assertions: refactor some assertions to use objDisplay instead of inspect
  * util: [objDisplay] normalize output of functions
  * makefile: refactor for full build scenarios
  * component: fix build bug where missing util:type file
  * assertions: [throw] code cleanup
  * Merge branch 'refactor/typeDetection'
  * browser: build
  * makefile: chai.js is .PHONY so it builds every time
  * test: [expect] add arguments type detection test
  * core/assertions: [type] (a/an) refactor to use type detection utility
  * util: add cross-browser type detection utility
  * Merge branch 'feature/component'
  * browser: build
  * component: add component.json file
  * makefile: refactor for fine grain control of testing scenarios
  * test: add mochaPhantomJS support and component test file
  * deps: add component and mocha-phantomjs for browser testing
  * ignore: update ignore files for component support
  * travis: run for all branches
  * Merge branch 'feature/showDiff'
  * test: [Assertion] configruable showDiff flag. Closes #132
  * lib: [Assertion] add configurable showDiff flag. #132
  * Merge branch 'feature/saucelabs'
  * Merge branch 'master' into feature/saucelabs
  * browser: build
  * support: add mocha cloud runner, client, and html test page
  * test: [saucelabs] add auth placeholder
  * deps: add mocha-cloud
  * Merge pull request #136 from whatthejeff/message_fix
  * Merge pull request #138 from timnew/master
  * Fix issue #137, test message existence by using message!=null rather than using message
  * Fixed backwards negation messages.
  * Merge pull request #133 from RubenVerborgh/throw
  * Functions throwing strings can reliably be tested.
  * Merge pull request #131 from RubenVerborgh/proto
  * Cache whether __proto__ is supported.
  * Use __proto__ if available.
  * Determine the property names to exclude beforehand.
  * Merge pull request #126 from RubenVerborgh/eqls
  * Add alias eqls for eql.
  * Use inherited enumerable properties in deep equality comparison.
  * Show inherited properties when inspecting an object.
  * Add new getProperties and getEnumerableProperties utils.
  * showDiff: force true for equal and eql

1.4.2 / 2012-12-21
==================

  * browser build: (object diff support when used with mocha) #106
  * test: [display] array test for mocha object diff
  * browser: no longer need different AssertionError constructor

1.4.1 / 2012-12-21
==================

  * showDiff: force diff for equal and eql. #106
  * test: [expect] type null. #122
  * Merge pull request #115 from eshao/fix-assert-Throw
  * FIX: assert.Throw checks error type/message
  * TST: assert.Throw should check error type/message

1.4.0 / 2012-11-29
==================

  * pre-release browser build
  * clean up index.js to not check for cov, revert package.json to use index.js
  * convert tests to use new bootstrap
  * refactor testing bootstrap
  * use spaces (not tabs). Clean up #114
  * Merge pull request #114 from trantorLiu/master
  * Add most() (alias: lte) and least() (alias: gte) to the API with new chainers "at" and "of".
  * Change `main` to ./lib/chai. Fixes #28.
  * Merge pull request #104 from connec/deep_equals_circular_references_
  * Merge pull request #109 from nnarhinen/patch-1
  * Check for 'actual' type
  * Added support for circular references when checking deep (in)equality.

1.3.0 / 2012-10-01
==================

  * browser build w/ folio >= 0.3.4. Closes #99
  * add back buffer test for deep equal
  * do not write flags to assertion.prototype
  * remove buffer test from expect
  * browser build
  * improve documentation of custom error messages
  * Merge branch 'master' of git://github.com/Liffft/chai into Liffft-master
  * browser build
  * improved buffer deep equal checking
  * mocha is npm test command
  * Cleaning up the js style…
  * expect tests now include message pass-through
  * packaging up browser-side changes…
  * Increasing Throws error message verbosity
  * Should syntax: piping message through
  * Make globalShould test work in browser too.
  * Add a setter for `Object.prototype.should`. Closes #86.

1.2.0 / 2012-08-07
==================

  * Merge branch 'feature/errmsg'
  * browser build
  * comment updates for utilities
  * tweak objDislay to only kick in if object inspection is too long
  * Merge branch 'master' into feature/errmsg
  * add display sample for error message refactor
  * first draft of error message refactor. #93
  * add `closeTo` assertion to `assert` interface. Closes #89.
  * update folio build for better require.js handling. Closes #85
  * Merge pull request #92 from paulmillr/topics/add-dom-checks
  * Add check for DOM objects.
  * browser build
  * Merge branch 'master' of github.com:chaijs/chai
  * bug - getActual not defaulting to assertion subject
  * Merge pull request #88 from pwnall/master
  * Don't inspect() assertion arguments if the assertion passes.

1.1.1 / 2012-07-09
==================

  * improve commonjs support on browser build
  * Merge pull request #83 from tkazec/equals
  * Document .equals
  * Add .equals as an alias of .equal
  * remove unused browser prefix/suffix
  * Merge branch 'feature/folio-build'
  * browser build
  * using folio to compile
  * clean up makefile
  * early folio 0.3.x support

1.1.0 / 2012-06-26
==================

  * browser build
  * Disable "Assertion.includeStack is false" test in IE.
  * Use `utils.getName` for all function inspections.
  * Merge pull request #80 from kilianc/closeTo
  * fixes #79
  * browser build
  * expand  docs to indicate change of subject for chaining. Closes #78
  * add `that` chain noop
  * Merge branch 'bug/74'
  * comments on how to property use `length` as chain. Closes #74
  * tests for length as chainable property. #74
  * add support for `length` as chainable prop/method.
  * Merge branch 'bug/77'
  * tests for getPathValue when working with nested arrays. Closes #77
  * add getPathValue support for nested arrays
  * browser build
  * fix bug for missing browser utils
  * compile tool aware of new folder layout
  * Merge branch 'refactor/1dot1'
  * move core assertions to own file and refactor all using utils
  * rearrange folder structure

1.0.4 / 2012-06-03
==================

  * Merge pull request #68 from fizker/itself
  * Added itself chain.
  * simplify error inspections for cross browser compatibility
  * fix safari `addChainableMethod` errors. Closes #69

1.0.3 / 2012-05-27
==================

  * Point Travis badge to the right place.
  * Make error message for eql/deep.equal more clear.
  * Fix .not.deep.equal.
  * contributors list

1.0.2 / 2012-05-26
==================

  * Merge pull request #67 from chaijs/chaining-and-flags
  * Browser build.
  * Use `addChainableMethod` to get away from `__proto__` manipulation.
  * New `addChainableMethod` utility.
  * Replace `getAllFlags` with `transferFlags` utility.
  * browser build
  * test - get all flags
  * utility - get all flags
  * Add .mailmap to .npmignore.
  * Add a .mailmap file to fix my name in shortlogs.

1.0.1 / 2012-05-18
==================

  * browser build
  * Fixing "an" vs. "a" grammar in type assertions.
  * Uniformize `assert` interface inline docs.
  * Don't use `instanceof` for `assert.isArray`.
  * Add `deep` flag for equality and property value.
  * Merge pull request #64 from chaijs/assertion-docs
  * Uniformize assertion inline docs.
  * Add npm-debug.log to .gitignore.
  * no reserved words as actuals. #62

1.0.0 / 2012-05-15
==================

  * readme cleanup
  * browser build
  * utility comments
  * removed docs
  * update to package.json
  * docs build
  * comments / docs updates
  * plugins app cleanup
  * Merge pull request #61 from joliss/doc
  * Fix and improve documentation of assert.equal and friends
  * browser build
  * doc checkpoint - texture
  * Update chai-jquery link
  * Use defined return value of Assertion extension functions
  * Update utility docs

1.0.0-rc3 / 2012-05-09
==================

  * Merge branch 'feature/rc3'
  * docs update
  * browser build
  * assert test conformity for minor refactor api
  * assert minor refactor
  * update util tests for new add/overwrite prop/method format
  * added chai.Assertion.add/overwrite prop/method for plugin toolbox
  * add/overwrite prop/method don't make assumptions about context
  * doc test suite
  * docs don't need coverage
  * refactor all simple chains into one forEach loop, for clean documentation
  * updated npm ignore
  * remove old docs
  * docs checkpoint - guide styled
  * Merge pull request #59 from joliss/doc
  * Document how to run the test suite
  * don't need to rebuild docs to view
  * dep update
  * docs checkpoint - api section
  * comment updates for docs
  * new doc site checkpoint - plugin directory!
  * Merge pull request #57 from kossnocorp/patch-1
  * Fix typo: devDependancies → devDependencies
  * Using message flag in `getMessage` util instead of old `msg` property.
  * Adding self to package.json contributors.
  * `getMessage` shouldn't choke on null/omitted messages.
  * `return this` not necessary in example.
  * `return this` not necessary in example.
  * Sinon–Chai has a dash
  * updated plugins list for docs

1.0.0-rc2 / 2012-05-06
==================

  * Merge branch 'feature/test-cov'
  * browser build
  * missing assert tests for ownProperty
  * appropriate assert equivalent for expect.to.have.property(key, val)
  * reset AssertionError to include full stack
  * test for plugin utilities
  * overwrite Property and Method now ensure chain
  * version notes in readme

1.0.0-rc1 / 2012-05-04
==================

  * browser build (rc1)
  * assert match/notMatch tests
  * assert interface - notMatch, ownProperty, notOwnProperty, ownPropertyVal, ownPropertyNotVal
  * cleaner should interface export.
  * added chai.Assertion.prototype._obj (getter) for quick access to object flag
  * moved almostEqual / almostDeepEqual to stats plugin
  * added mocha.opts
  * Add test for `utils.addMethod`
  * Fix a typo
  * Add test for `utils.overwriteMethod`
  * Fix a typo
  * Browser build
  * Add undefined assertion
  * Add null assertion
  * Fix an issue with `mocha --watch`
  * travis no longer tests on node 0.4.x
  * removing unnecissary carbon dep
  * Merge branch 'feature/plugins-app'
  * docs build
  * templates for docs express app for plugin directory
  * express app for plugin and static serving
  * added web server deps
  * Merge pull request #54 from josher19/master
  * Remove old test.assert code
  * Use util.inspect instead of inspect for deepAlmostEqual and almostEqual
  * browser build
  * Added almostEqual and deepAlmostEqual to assert test suite.
  * bug - context determinants for utils
  * dec=0 means rounding, so assert.deepAlmostEqual({pi: 3.1416}, {pi: 3}, 0) is true
  * wrong travis link
  * readme updates for version information
  * travis tests 0.5.x branch as well
  * [bug] util `addProperty` not correctly exporting
  * read me version notes
  * browser build 1.0.0alpha1
  * not using reserved words in internal assertions. #52
  * version tick
  * clean up redundant tests
  * Merge branch 'refs/heads/0.6.x'
  * update version tag in package 1.0.0alpha1
  * browser build
  * added utility tests to browser specs
  * beginning utility testing
  * updated utility comments
  * utility - overwriteMethod
  * utility - overwriteProperty
  * utility - addMethod
  * utility - addProperty
  * missing ;
  * contributors list update
  * Merge branch 'refs/heads/0.6.x-docs' into 0.6.x
  * Added guide link to docs. WIP
  * Include/contain are now both properties and methods
  * Add an alias annotation
  * Remove usless function wrapper
  * Fix a typo
  * A/an are now both properties and methods
  * [docs] new site homepage layout / color checkpoint
  * Ignore IE-specific error properties.
  * Fixing order of error message test.
  * New cross-browser `getName` util.
  * Fixing up `AssertionError` inheritance.
  * backup docs
  * Add doctypes
  * [bug] was still using `constructor.name` in `throw` assertion
  * [bug] flag Object.create(null) instead of new Object
  * [test] browser build
  * [refactor] all usage of Assertion.prototype.assert now uses template tags and flags
  * [refactor] remove Assertion.prototype.inspect for testable object inspection
  * [refactor] object to test is now stored in flag, with ssfi and custom message
  * [bug] flag util - don't return on `set`
  * [docs] comments for getMessage utility
  * [feature] getMessage
  * [feature] testing utilities
  * [refactor] flag doesn't require `call`
  * Make order of source files well-defined
  * Added support for throw(errorInstance).
  * Use a foolproof method of grabbing an error's name.
  * Removed constructor.name check from throw.
  * disabled stackTrack configuration tests until api is stable again
  * first version of line displayed error for node js (unstable)
  * refactor core Assertion to use flag utility for negation
  * added flag utility
  * tests for assert interface negatives. Closed #42
  * added assertion negatives that were missing. #42
  * Support for expected and actual parameters in assert-style error object
  * chai as promised - readme
  * Added assert.fail. Closes #40
  * better error message for assert.operator. Closes #39
  * [refactor] Assertion#property to use getPathValue property
  * added getPathValue utility helper
  * removed todo about browser build
  * version notes
  * version bumb 0.6.0
  * browser build
  * [refactor] browser compile function to replace with `require('./error')' with 'require('./browser/error')'
  * [feature] browser uses different error.js
  * [refactor] error without chai.fail
  * Assertion & interfaces use new utils helper export
  * [refactor] primary export for new plugin util usage
  * added util index.js helper
  * added 2012 to copyright headers
  * Added DeepEqual assertions

0.5.3 / 2012-04-21
==================

  * Merge branch 'refs/heads/jgonera-oldbrowsers'
  * browser build
  * fixed reserved names for old browsers in interface/assert
  * fixed reserved names for old browsers in interface/should
  * fixed: chai.js no longer contains fail()
  * fixed reserved names for old browsers in Assertion
  * Merge pull request #49 from joliss/build-order
  * Make order of source files well-defined
  * Merge pull request #43 from zzen/patch-1
  * Support for expected and actual parameters in assert-style error object
  * chai as promised - readme

0.5.2 / 2012-03-21
==================

  * browser build
  * Merge branch 'feature/assert-fail'
  * Added assert.fail. Closes #40
  * Merge branch 'bug/operator-msg'
  * better error message for assert.operator. Closes #39
  * version notes

0.5.1 / 2012-03-14
==================

  * chai.fail no longer exists
  * Merge branch 'feature/assertdefined'
  * Added asset#isDefined. Closes #37.
  * dev docs update for Assertion#assert

0.5.0 / 2012-03-07
==================

  * [bug] on inspect of reg on n 0.4.12
  * Merge branch 'bug/33-throws'
  * Merge pull request #35 from logicalparadox/empty-object
  * browser build
  * updated #throw docs
  * Assertion#throw `should` tests updated
  * Assertion#throw `expect` tests
  * Should interface supports multiple throw parameters
  * Update Assertion#throw to support strings and type checks.
  * Add more tests for `empty` in `should`.
  * Add more tests for `empty` in `expect`.
  * Merge branch 'master' into empty-object
  * don't switch act/exp
  * Merge pull request #34 from logicalparadox/assert-operator
  * Update the compiled verison.
  * Add `assert.operator`.
  * Notes on messages. #22
  * browser build
  * have been test
  * below tests
  * Merge branch 'feature/actexp'
  * browser build
  * remove unnecessary fail export
  * full support for actual/expected where relevant
  * Assertion.assert support expected value
  * clean up error
  * Update the compiled version.
  * Add object & sane arguments support to `Assertion#empty`.

0.4.2 / 2012-02-28
==================

  * fix for `process` not available in browser when used via browserify. Closes #28
  * Merge pull request #31 from joliss/doc
  * Document that "should" works in browsers other than IE
  * Merge pull request #30 from logicalparadox/assert-tests
  * Update the browser version of chai.
  * Update `assert.doesNotThrow` test in order to check the use case when type is a string.
  * Add test for `assert.ifError`.
  * Falsey -> falsy.
  * Full coverage for `assert.throws` and `assert.doesNotThrow`.
  * Add test for `assert.doesNotThrow`.
  * Add test for `assert.throws`.
  * Add test for `assert.length`.
  * Add test for `assert.include`.
  * Add test for `assert.isBoolean`.
  * Fix the implementation of `assert.isNumber`.
  * Add test for `assert.isNumber`.
  * Add test for `assert.isString`.
  * Add test for `assert.isArray`.
  * Add test for `assert.isUndefined`.
  * Add test for `assert.isNotNull`.
  * Fix `assert.isNotNull` implementation.
  * Fix `assert.isNull` implementation.
  * Add test for `assert.isNull`.
  * Add test for `assert.notDeepEqual`.
  * Add test for `assert.deepEqual`.
  * Add test for `assert.notStrictEqual`.
  * Add test for `assert.strictEqual`.
  * Add test for `assert.notEqual`.

0.4.1 / 2012-02-26
==================

  * Merge pull request #27 from logicalparadox/type-fix
  * Update the browser version.
  * Add should tests for type checks.
  * Add function type check test.
  * Add more type checks tests.
  * Add test for `new Number` type check.
  * Fix type of actual checks.

0.4.0 / 2012-02-25
==================

  * docs and readme for upcoming 0.4.0
  * docs generated
  * putting coverage and tests for docs in docs/out/support
  * make docs
  * makefile copy necessary resources for tests in docs
  * rename configuration test
  * Merge pull request #21 from logicalparadox/close-to
  * Update the browser version.
  * Update `closeTo()` docs.
  * Add `Assertion.closeTo()` method.
  * Add `.closeTo()` should test.
  * Add `.closeTo()` expect test.
  * Merge pull request #20 from logicalparadox/satisfy
  * Update the browser version.
  * `..` -> `()` in `.satisfy()` should test.
  * Update example for `.satisfy()`.
  * Update the compiled browser version.
  * Add `Assertion.satisfy()` method.
  * Add `.satisfy()` should test.
  * Add `.satisfy()` expect test.
  * Merge pull request #19 from logicalparadox/respond-to
  * Update the compiled browser version.
  * Add `respondTo` Assertion.
  * Add `respondTo` should test.
  * Add `respondTo` expect test.
  * Merge branch 'feature/coverage'
  * mocha coverage support
  * doc contributors
  * README contributors

0.3.4 / 2012-02-23
==================

  * inline comment typos for #15
  * Merge branch 'refs/heads/jeffbski-configErrorStackCompat'
  * includeStack documentation for all interfaces
  * suite name more generic
  * Update test to be compatible with browsers that do not support err.stack
  * udpated compiled chai.js and added to browser tests
  * Allow inclusion of stack trace for Assert error messages to be configurable
  * docs sharing buttons
  * sinon-chai link
  * doc updates
  * read me updates include plugins

0.3.3 / 2012-02-12
==================

  * Merge pull request #14 from jfirebaugh/configurable_properties
  * Make Assertion.prototype properties configurable

0.3.2 / 2012-02-10
==================

  * codex version
  * docs
  * docs cleanup

0.3.1 / 2012-02-07
==================

  * node 0.4.x compat

0.3.0 / 2012-02-07
==================

  * Merge branch 'feature/03x'
  * browser build
  * remove html/json/headers testign
  * regex error.message testing
  * tests for using plugins
  * Merge pull request #11 from domenic/master
  * Make `chai.use` a no-op if the function has already been used.

0.2.4 / 2012-02-02
==================

  * added in past tense switch for `been`

0.2.3 / 2012-02-01
==================

  * try that again

0.2.2 / 2012-02-01
==================

  * added `been` (past of `be`) alias

0.2.1 / 2012-01-29
==================

  * added Throw, with a capital T, as an alias to `throw` (#7)

0.2.0 / 2012-01-26
==================

  * update gitignore for vim *.swp
  * Merge branch 'feature/plugins'
  * browser build
  * interfaces now work with use
  * simple .use function. See #9.
  * readme notice on browser compat

0.1.7 / 2012-01-25
==================

  * added assert tests to browser test runner
  * browser update
  * `should` interface patch for primitives support in FF
  * fix isObject() Thanks @milewise
  * travis only on branch `master`
  * add instanceof alias `instanceOf`. #6
  * some tests for assert module

0.1.6 / 2012-01-02
==================

  * commenting for assert interface
  * updated codex dep

0.1.5 / 2012-01-02
==================

  * browser tests pass
  * type in should.not.equal
  * test for should (not) exist
  * added should.exist and should.not.exist
  * browser uses tdd
  * convert tests to tdd

0.1.4 / 2011-12-26
==================

  * browser lib update for new assert interface compatiblitiy
  * inspect typos
  * added strict equal + negatives and ifError
  * interface assert had doesNotThrow
  * added should tests to browser
  * new expect empty tests
  * should test browser compat
  * Fix typo for instanceof docs. Closes #3 [ci skip]

0.1.3 / 2011-12-18
==================

  * much cleaner reporting string on error.

0.1.2 / 2011-12-18
==================

  * [docs] for upcoming 0.1.2
  * browser version built with pre/suffix … all tests passing
  * make / compile now use prefix/suffix correctly
  * code clean
  * prefix/suffix to wrap browser output to prevent conflicts with other `require` methods.
  * Merge branch 'feature/should4xcompatibility'
  * compile for browser tests.. all pass
  * added header/status/html/json
  * throw tests
  * should.throw & should.not.throw shortcuts
  * improved `throw` type detection and messaging
  * contain is now `include` … keys modifier is now `contain`
  * removed object() test
  * removed #respondTo
  * Merge branch 'bug/2'
  * replaced __defineGetter__ with defineProperty for all uses
  * [docs] change mp tracking code
  * docs site updated with assert (TDD) interface
  * updated doc comments for assert interface

0.1.1 / 2011-12-16
==================

  * docs ready for upcoming 0.1.1
  * readme image fixed [ci skip]
  * more readme tweaks [ci skip]
  * réadmet image fixed [ci skip]
  * documentation
  * codex locked in version 0.0.5
  * more comments to assertions for docs
  * assertions fully commented, browser library updated
  * adding codex as doc dependancy
  * prepping for docs
  * assertion component completely commented for documentation
  * added exist test
  * var expect outside of browser if check
  * added keywords to package.json

0.1.0 / 2011-12-15
==================

  * failing on purpose successful .. back to normal
  * testing travis failure
  * assert#arguments getter
  * readme typo
  * updated README
  * added travis and npmignore
  * copyright notices … think i got them all
  * moved expect interface to own file for consistency
  * assert ui deepEqual
  * browser tests expect (all working)
  * browser version built
  * chai.fail (should ui)
  * expect tests browser compatible
  * tests for should and expect (all pass)
  * moved fail to primary export
  * should compatibility testing
  * within, greaterThan, object, keys,
  * Aliases
  * Assertion#property now correctly works with negate and undefined values
  * error message language matches should
  * Assertion#respondTo
  * Assertion now uses inspect util
  * git ignore node modules
  * should is exported
  * AssertionError __proto__ from Error.prototype
  * add should interface for should.js compatibility
  * moved eql to until folder and added inspect from (joyent/node)
  * added mocha for testing
  * browser build for current api
  * multiple .property assertions
  * added deep equal from node

0.0.2 / 2011-12-07
==================

  * cleaner output on error
  * improved exists detection
  * package remnant artifact
  * empty deep equal
  * test browser build
  * assertion cleanup
  * client compile script
  * makefile
  * most of the basic assertions
  * allow no parameters to assertion error
  * name change
  * assertion error instance
  * main exports: assert() & expect()
  * initialize

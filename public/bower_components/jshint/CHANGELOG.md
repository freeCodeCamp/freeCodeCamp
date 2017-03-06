<a name="2.9.4"></a>
## [2.9.4](https://github.com/jshint/jshint/compare/2.9.3...v2.9.4) (2016-10-20)


### Bug Fixes

* Allow RegExp literal as `yield` operand (#3011) ([b646aea](https://github.com/jshint/jshint/commit/b646aea))
* Allow W100 to be ignored during lookahead ([a2b3881](https://github.com/jshint/jshint/commit/a2b3881)), closes [#3013](https://github.com/jshint/jshint/issues/3013)
* Avoid crashing on invalid input (#3046) ([bec152c](https://github.com/jshint/jshint/commit/bec152c))
* Correct interpretation of ASI (#3045) ([9803e11](https://github.com/jshint/jshint/commit/9803e11))
* Do not duplicate reported warnings/errors ([dc4a4fe](https://github.com/jshint/jshint/commit/dc4a4fe))
* Enforce TDZ within initializer of lexical declaration [8e9d406](https://github.com/jshint/jshint/commit/8e9d406)), closes [#2637](https://github.com/jshint/jshint/issues/2637)
* Enforce TDZ within class heritage definition [8e9d406](https://github.com/jshint/jshint/commit/8e9d406))
* Enforce TDZ within for in/of head [8e9d406](https://github.com/jshint/jshint/commit/8e9d406)), closes [#2693](https://github.com/jshint/jshint/issues/2693)
* Offset line no.s of errors from eval code ([2a31c94](https://github.com/jshint/jshint/commit/2a31c94))
* Remove `null` value from `errors` array (#3049) ([f7eb3d7](https://github.com/jshint/jshint/commit/f7eb3d7))
* Report error for offending token value ([3b06d01](https://github.com/jshint/jshint/commit/3b06d01))



<a name="2.9.3"></a>
## [2.9.3](https://github.com/jshint/jshint/compare/2.9.2...v2.9.3) (2016-08-18)


### Bug Fixes

* Add TypedArray globals for ES2015 ([ee0acab](https://github.com/jshint/jshint/commit/ee0acab))
* Allow Expression within for-in head ([56c95d0](https://github.com/jshint/jshint/commit/56c95d0))
* Avoid crash when peeking past end of prog (#2937) ([330d429](https://github.com/jshint/jshint/commit/330d429))
* Correct behavior of singleGroups (#2951) ([97fefb7](https://github.com/jshint/jshint/commit/97fefb7))
* Correct interpretation of ASI (#2977) ([3ef7a03](https://github.com/jshint/jshint/commit/3ef7a03))
* Correctly recognize asi after directives ([039ee2e](https://github.com/jshint/jshint/commit/039ee2e)), closes [#2714](https://github.com/jshint/jshint/issues/2714)
* Disallow Import declarations below top lvl ([d800e44](https://github.com/jshint/jshint/commit/d800e44))
* Support `y` RegExp flag in ES2015 code (#2999) ([a801433](https://github.com/jshint/jshint/commit/a801433))
* Support semicolons within arrow fn params (#3003) ([179a9d6](https://github.com/jshint/jshint/commit/179a9d6))

### Features

* Error for literals on rhs of `instanceof` ([e3e745b](https://github.com/jshint/jshint/commit/e3e745b)), closes [#2777](https://github.com/jshint/jshint/issues/2777)



<a name="2.9.2"></a>
## [2.9.2](https://github.com/jshint/jshint/compare/2.9.1...v2.9.2) (2016-04-19)

This release contains a number of bug fixes. As always, we thank everyone who
reported issues and submitted patches; those contributions are essential to the
continuing improvement of the project. We hope you'll keep it up!

### Bug Fixes

* (cli - extract) lines can end with "\\r\\n", not "\\n\\r" ([93818f3](https://github.com/jshint/jshint/commit/93818f3)), closes [#2825](https://github.com/jshint/jshint/issues/2825)
* Account for implied closures ([c3b4d63](https://github.com/jshint/jshint/commit/c3b4d63))
* Add CompositionEvent to browser globals ([56515cf](https://github.com/jshint/jshint/commit/56515cf))
* Allow destructuring in setter parameter ([97d0ac1](https://github.com/jshint/jshint/commit/97d0ac1))
* Allow parentheses around object destructuring assignment. ([7a0bd70](https://github.com/jshint/jshint/commit/7a0bd70)), closes [#2775](https://github.com/jshint/jshint/issues/2775)
* Allow regex inside template literal ([5dd9c90](https://github.com/jshint/jshint/commit/5dd9c90)), closes [#2791](https://github.com/jshint/jshint/issues/2791)
* Allow regexp literal after 'instanceof' ([caa30e6](https://github.com/jshint/jshint/commit/caa30e6)), closes [#2773](https://github.com/jshint/jshint/issues/2773)
* Correct CLI's indentation offset logic ([47daf76](https://github.com/jshint/jshint/commit/47daf76)), closes [#2778](https://github.com/jshint/jshint/issues/2778)
* Do not crash on invalid input ([2e0026f](https://github.com/jshint/jshint/commit/2e0026f))
* Do not fail on valid configurations ([2fb3c24](https://github.com/jshint/jshint/commit/2fb3c24))
* Don't throw E056 for vars used in two functions ([fd91d4a](https://github.com/jshint/jshint/commit/fd91d4a)), closes [#2838](https://github.com/jshint/jshint/issues/2838)
* Emit correct token value from "module" API ([4a43fb9](https://github.com/jshint/jshint/commit/4a43fb9))
* Expand forms accepted in dstr. assignment ([8bbd537](https://github.com/jshint/jshint/commit/8bbd537))
* Improve binding power for tagged templates ([9cf2ff0](https://github.com/jshint/jshint/commit/9cf2ff0))
* Improve reporting of "Bad assignment." ([08df19e](https://github.com/jshint/jshint/commit/08df19e))
* Make the 'freeze' option less strict ([b76447c](https://github.com/jshint/jshint/commit/b76447c)), closes [#1600](https://github.com/jshint/jshint/issues/1600)
* Report "Bad assignment." in destructuring ([fe559ed](https://github.com/jshint/jshint/commit/fe559ed))
* Report character position for camelcase errors ([480252a](https://github.com/jshint/jshint/commit/480252a)), closes [#2845](https://github.com/jshint/jshint/issues/2845)
* Reserve `await` keyword in ES6 module code ([b1c8d5b](https://github.com/jshint/jshint/commit/b1c8d5b))


<a name="2.9.1"></a>
## [2.9.1](https://github.com/jshint/jshint/compare/2.9.1-rc3...v2.9.1) (2016-01-14)

Following the revocation of version 2.9.0, we observed an extended "release
candidate" phase where we encouraged users to vet JSHint for undesirable
changes in behavior. During that time, we identified and resolved a number of
such regressions. This release comprises all changes from the release candidate
phase along with the improvements initially released as version 2.9.0. This
release does not itself contain any changes to the codebase. If you are
upgrading from version 2.8.0 or earlier, please refer to the
previously-published release notes for details on bug fixes and features--these
can be found in the project's `CHANGELOG.md` file and on the project's website.


<a name="2.9.1-rc3"></a>
## [2.9.1-rc3](https://github.com/jshint/jshint/compare/2.9.1-rc2...v2.9.1-rc3) (2016-01-12)


### Bug Fixes

* Do not require global USD for any envs ([3fa9ece](https://github.com/jshint/jshint/commit/3fa9ece))



<a name="2.9.1-rc2"></a>
## [2.9.1-rc2](https://github.com/jshint/jshint/compare/2.9.1-rc1...v2.9.1-rc2) (2015-12-22)


### Bug Fixes

* Abort in the presence of invalid config ([767c47d](https://github.com/jshint/jshint/commit/767c47d))
* Allow ignoring W020 and W021 ([46db923](https://github.com/jshint/jshint/commit/46db923)), closes [#2761](https://github.com/jshint/jshint/issues/2761)
* Correct `unused` for function-scoped vars ([91fa9fc](https://github.com/jshint/jshint/commit/91fa9fc))
* Disallow ambiguous configuration values ([eb54a4c](https://github.com/jshint/jshint/commit/eb54a4c))
* Do not disable ES6 when `moz` is set ([97dfd90](https://github.com/jshint/jshint/commit/97dfd90))
* Don't throw '(NaN% scanned)' ([903b698](https://github.com/jshint/jshint/commit/903b698))



<a name="2.9.1-rc1"></a>
## [2.9.1-rc1](https://github.com/jshint/jshint/compare/2.9.0...v2.9.1-rc1) (2015-11-12)

Version 2.9.0 was revoked shortly after its release due to a number of
regressions. Although the underlying issues have been resolved, we are
sensitive to the possibility that there may be still more; as mentioned in
2.9.0's release notes, the variable tracking system saw a significant
refactoring.

In an effort to minimize friction with a new version, we're publishing a
release candidate and requesting feedback from early adopters. Please give it a
try in your projects and let us know about any surprising behavior!

### Bug Fixes

* `latedef` shouldn't warn when marking a var as exported ([c630994](https://github.com/jshint/jshint/commit/c630994)), closes [#2662](https://github.com/jshint/jshint/issues/2662)
* Add `File` and `FileList` to browser global variables ([7f2a729](https://github.com/jshint/jshint/commit/7f2a729)), closes [#2690](https://github.com/jshint/jshint/issues/2690)
* Allow comments and new lines after /* falls through */ ([3b1c925](https://github.com/jshint/jshint/commit/3b1c925)), closes [#2652](https://github.com/jshint/jshint/issues/2652) [#1660](https://github.com/jshint/jshint/issues/1660)
* Allow let and const to be in a block outside of a block ([84a9145](https://github.com/jshint/jshint/commit/84a9145)), closes [#2685](https://github.com/jshint/jshint/issues/2685)
* Always warn about missing "use strict" directive ([e85c2a1](https://github.com/jshint/jshint/commit/e85c2a1)), closes [#2668](https://github.com/jshint/jshint/issues/2668)
* Disallow incompatible option values ([72ba5ad](https://github.com/jshint/jshint/commit/72ba5ad))
* Do not enable `newcap` within strict mode ([acaf3f7](https://github.com/jshint/jshint/commit/acaf3f7))
* Don't throw W080 when the initializer starts with `undefined` ([0d87919](https://github.com/jshint/jshint/commit/0d87919)), closes [#2699](https://github.com/jshint/jshint/issues/2699)
* Don't warn that an exported function is used before it is defined. ([d0433d2](https://github.com/jshint/jshint/commit/d0433d2)), closes [#2658](https://github.com/jshint/jshint/issues/2658)
* Enforce Identifier restrictions lazily ([ceca549](https://github.com/jshint/jshint/commit/ceca549))
* Global "use strict" regressions ([04b43d2](https://github.com/jshint/jshint/commit/04b43d2)), closes [#2657](https://github.com/jshint/jshint/issues/2657) [#2661](https://github.com/jshint/jshint/issues/2661)
* Support property assignment when destructure assigning ([b6df1f2](https://github.com/jshint/jshint/commit/b6df1f2)), closes [#2659](https://github.com/jshint/jshint/issues/2659) [#2660](https://github.com/jshint/jshint/issues/2660)
* Throw W119 instead of "Unexpected '`'" when using templates in ES5 mode. ([87064e8](https://github.com/jshint/jshint/commit/87064e8))

### Features

* Support QUnit's global notOk ([73ac9b8](https://github.com/jshint/jshint/commit/73ac9b8))



<a name="2.9.0"></a>
# [2.9.0](https://github.com/jshint/jshint/compare/2.8.0...v2.9.0) (2015-09-03)

**Note** This release was revoked shortly following its publication. Please
refer to the release notes for version 2.9.1 for more information (found in the
project's `CHANGELOG.md` file and on the project's website).

This release was a long time in the making, but it may not be the most exciting
version we've published. Most of the changes are internal refactorings that
were necessary to properly fix bugs. And fix bugs we did! Special thanks go to
Luke Page, the newest addition to the JSHint team. Luke is a maintainer of [the
Less CSS project](http://lesscss.org/), and he introduced himself to use by
overhauling JSHint's variable tracking logic.

JSHint 3.0 is closer than ever. We're excited for the opportunity to break a
few things in order to make real strides forward. In fact, the hardest part
will be *limiting* ourselves (we don't want to make migrating to the new
version onerous). If you have any ideas along these lines, please submit them
on [the project's issue tracker](https://github.com/jshint/jshint/issues).
We'll mark them with [the label "Breaking
Change"](https://github.com/jshint/jshint/labels/Breaking%20Change), and as we
decide what's definitely "in" for 3.0, we'll add them to [the "v3.0.0"
milestone](https://github.com/jshint/jshint/milestones/v3.0.0).

### Bug Fixes

* Add `HTMLCollection` to browser environment. ([e92d375](https://github.com/jshint/jshint/commit/e92d375)), closes [#2443](https://github.com/jshint/jshint/issues/2443)
* Add `window.performance` to browser vars ([3ff1b05](https://github.com/jshint/jshint/commit/3ff1b05)), closes [#2461](https://github.com/jshint/jshint/issues/2461)
* Allow `__proto__` when using ES6 ([06b5764](https://github.com/jshint/jshint/commit/06b5764)), closes [#2371](https://github.com/jshint/jshint/issues/2371)
* Allow binary and octal numbers, and templates when using inline `esnext` ([b5ba7d6](https://github.com/jshint/jshint/commit/b5ba7d6)), closes [#2519](https://github.com/jshint/jshint/issues/2519)
* Allow default values in destructuring. ([04ace9a](https://github.com/jshint/jshint/commit/04ace9a)), closes [#1941](https://github.com/jshint/jshint/issues/1941)
* Allow destructuring in catch blocks parameter ([759644c](https://github.com/jshint/jshint/commit/759644c)), closes [#2526](https://github.com/jshint/jshint/issues/2526)
* Allow latedef in the initialiser of variable ([18f8775](https://github.com/jshint/jshint/commit/18f8775)), closes [#2628](https://github.com/jshint/jshint/issues/2628)
* Allow line breaking after yield if `asi: true` ([728c84b](https://github.com/jshint/jshint/commit/728c84b)), closes [#2530](https://github.com/jshint/jshint/issues/2530)
* Allow non-identifier PropertyNames in object destructuring. ([aa8a023](https://github.com/jshint/jshint/commit/aa8a023)), closes [#2467](https://github.com/jshint/jshint/issues/2467)
* Allow object destructuring assignment ([ae48966](https://github.com/jshint/jshint/commit/ae48966)), closes [#2269](https://github.com/jshint/jshint/issues/2269)
* Allow semicolon as string value in JSON ([ab73e01](https://github.com/jshint/jshint/commit/ab73e01))
* block scope vars dont redefine in blocks ([9e74025](https://github.com/jshint/jshint/commit/9e74025)), closes [#2438](https://github.com/jshint/jshint/issues/2438)
* Catch blocks are no longer functions ([8a864f3](https://github.com/jshint/jshint/commit/8a864f3)), closes [#2510](https://github.com/jshint/jshint/issues/2510)
* Change imported variables to be constants ([94a6779](https://github.com/jshint/jshint/commit/94a6779)), closes [#2428](https://github.com/jshint/jshint/issues/2428)
* Classes are not hoisted ([87378cc](https://github.com/jshint/jshint/commit/87378cc)), closes [#1934](https://github.com/jshint/jshint/issues/1934)
* Correct exported AssignmentExpressions ([282b40e](https://github.com/jshint/jshint/commit/282b40e))
* Correctly parse empty destructuring ([97c188b](https://github.com/jshint/jshint/commit/97c188b)), closes [#2513](https://github.com/jshint/jshint/issues/2513)
* Correctly parse exported generators ([0604816](https://github.com/jshint/jshint/commit/0604816)), closes [#2472](https://github.com/jshint/jshint/issues/2472)
* Declare `func` as a property of `state` ([3be8d36](https://github.com/jshint/jshint/commit/3be8d36))
* default params can't reference future arg ([bc2741c](https://github.com/jshint/jshint/commit/bc2741c)), closes [#2422](https://github.com/jshint/jshint/issues/2422)
* Define "build" module ([2f98f91](https://github.com/jshint/jshint/commit/2f98f91))
* Define npm scripts for each test suite ([5c33ded](https://github.com/jshint/jshint/commit/5c33ded))
* Do not accept empty values for directives ([a5bfefb](https://github.com/jshint/jshint/commit/a5bfefb))
* Do not crash if the forin check is block ([d1cbe84](https://github.com/jshint/jshint/commit/d1cbe84)), closes [#1920](https://github.com/jshint/jshint/issues/1920)
* Do not mark `ignore` directives as special ([f14c262](https://github.com/jshint/jshint/commit/f14c262))
* Do not parse arrays which contain `for` as array comprehensions. ([d70876c](https://github.com/jshint/jshint/commit/d70876c)), closes [#1413](https://github.com/jshint/jshint/issues/1413)
* Don't crash on uncomplete typeof expression ([a32cf50](https://github.com/jshint/jshint/commit/a32cf50)), closes [#2506](https://github.com/jshint/jshint/issues/2506)
* Don't warn when Array() is used without 'new'. ([5f88aa7](https://github.com/jshint/jshint/commit/5f88aa7)), closes [#1987](https://github.com/jshint/jshint/issues/1987)
* Dont crash when testing x == keyword if eqnull is on ([6afd373](https://github.com/jshint/jshint/commit/6afd373)), closes [#2587](https://github.com/jshint/jshint/issues/2587)
* Dont warn twice in var redeclaration ([e32e17b](https://github.com/jshint/jshint/commit/e32e17b))
* handle no 'home' environment variables ([946af3e](https://github.com/jshint/jshint/commit/946af3e))
* Honor `ignore` directive more consistently ([0971608](https://github.com/jshint/jshint/commit/0971608))
* Ignore directive should ignore max line length for comments ([f2f871a](https://github.com/jshint/jshint/commit/f2f871a)), closes [#1575](https://github.com/jshint/jshint/issues/1575)
* Immediately-invoked arrow funcs' param doesn't need parentheses ([d261071](https://github.com/jshint/jshint/commit/d261071)), closes [#2351](https://github.com/jshint/jshint/issues/2351)
* Improve support for `__proto__` identifier ([925a983](https://github.com/jshint/jshint/commit/925a983))
* It is not un-necessary to assign undefined in a loop ([e8ce9bf](https://github.com/jshint/jshint/commit/e8ce9bf)), closes [#1191](https://github.com/jshint/jshint/issues/1191)
* labeled break and continue semantics ([da66f70](https://github.com/jshint/jshint/commit/da66f70))
* Labels shadowing within a function is a syntax error ([124e00f](https://github.com/jshint/jshint/commit/124e00f)), closes [#2419](https://github.com/jshint/jshint/issues/2419)
* Load JSHint from package root ([92acdd1](https://github.com/jshint/jshint/commit/92acdd1))
* Make `strict: func` have precedence over env options. ([d138db8](https://github.com/jshint/jshint/commit/d138db8))
* Param destructuring should not effect max params ([9d021ee](https://github.com/jshint/jshint/commit/9d021ee)), closes [#2183](https://github.com/jshint/jshint/issues/2183)
* Params cannot always have the same name ([9f2b64c](https://github.com/jshint/jshint/commit/9f2b64c)), closes [#2492](https://github.com/jshint/jshint/issues/2492)
* Prevent regressions in bug fix ([477d3ad](https://github.com/jshint/jshint/commit/477d3ad))
* Regular args can come after args with default ([f2a59f1](https://github.com/jshint/jshint/commit/f2a59f1)), closes [#1779](https://github.com/jshint/jshint/issues/1779)
* Relax restriction on `module` option ([56c19a5](https://github.com/jshint/jshint/commit/56c19a5))
* Remove bad error E048 in for loop init ([a8fc16b](https://github.com/jshint/jshint/commit/a8fc16b)), closes [#1862](https://github.com/jshint/jshint/issues/1862)
* Remove module import declaration ([1749ac0](https://github.com/jshint/jshint/commit/1749ac0))
* Report an error when a necessary semicolon is missing ([45d8e3e](https://github.com/jshint/jshint/commit/45d8e3e)), closes [#1327](https://github.com/jshint/jshint/issues/1327)
* report line numbers of destructured params ([7d25451](https://github.com/jshint/jshint/commit/7d25451)), closes [#2494](https://github.com/jshint/jshint/issues/2494)
* Report loopfunc for all function types ([4d4cfcd](https://github.com/jshint/jshint/commit/4d4cfcd)), closes [#2153](https://github.com/jshint/jshint/issues/2153)
* singleGroups: Allow grouping for integers ([8c265ca](https://github.com/jshint/jshint/commit/8c265ca))
* Support `new.target` ([2fbf621](https://github.com/jshint/jshint/commit/2fbf621))
* The `__iterator__` property is deprecated. ([7780613](https://github.com/jshint/jshint/commit/7780613))
* Unify assign operation checks. ([06eb1d2](https://github.com/jshint/jshint/commit/06eb1d2)), closes [#2589](https://github.com/jshint/jshint/issues/2589)
* use of params is not capturing loopfunc ([827e335](https://github.com/jshint/jshint/commit/827e335))
* Warn about using `var` inside `for (...)` when `varstmt: true` ([f1ab638](https://github.com/jshint/jshint/commit/f1ab638)), closes [#2627](https://github.com/jshint/jshint/issues/2627)

### Features

* Add `esversion` option ([cf5a699](https://github.com/jshint/jshint/commit/cf5a699)), closes [#2124](https://github.com/jshint/jshint/issues/2124)
* Add pending to Jasmine's globals ([02790b9](https://github.com/jshint/jshint/commit/02790b9)), closes [#2154](https://github.com/jshint/jshint/issues/2154)
* Add Window constructor to browser vars ([7f5806f](https://github.com/jshint/jshint/commit/7f5806f)), closes [#2132](https://github.com/jshint/jshint/issues/2132)
* Option to assume strict mode ([8de8247](https://github.com/jshint/jshint/commit/8de8247)), closes [#924](https://github.com/jshint/jshint/issues/924)
* Support multiple files in the exclude option ([bd4ec25](https://github.com/jshint/jshint/commit/bd4ec25))



<a name="2.8.0"></a>
# [2.8.0](https://github.com/jshint/jshint/compare/2.7.0...2.8.0) (2015-05-31)


### Bug Fixes

* add the "fetch" global for "browser" environment ([b3b41c8](https://github.com/jshint/jshint/commit/b3b41c8)), closes [#2355](https://github.com/jshint/jshint/issues/2355)
* Allow lexer to communicate completion ([a093f78](https://github.com/jshint/jshint/commit/a093f78))
* Distinguish between directive and mode ([51059bd](https://github.com/jshint/jshint/commit/51059bd))
* Don't throw "Duplicate class method" with computed method names ([ab12dfb](https://github.com/jshint/jshint/commit/ab12dfb)), closes [#2350](https://github.com/jshint/jshint/issues/2350)
* Ignore unused arrow-function parameters if unused: vars ([2ea9cb0](https://github.com/jshint/jshint/commit/2ea9cb0)), closes [#2345](https://github.com/jshint/jshint/issues/2345)
* Move helper methods to `state` object ([678da76](https://github.com/jshint/jshint/commit/678da76))
* parse `const` declarations in ForIn/Of loops ([2b673d9](https://github.com/jshint/jshint/commit/2b673d9)), closes [#2334](https://github.com/jshint/jshint/issues/2334) [#2335](https://github.com/jshint/jshint/issues/2335)
* Parse semicolons in class bodies ([58c8e64](https://github.com/jshint/jshint/commit/58c8e64))
* Prevent regression in `enforceall` ([6afcde4](https://github.com/jshint/jshint/commit/6afcde4))
* Relax singleGroups restrictions: arrow fns ([4a4f522](https://github.com/jshint/jshint/commit/4a4f522))
* Relax singleGroups restrictions: IIFEs ([9f55160](https://github.com/jshint/jshint/commit/9f55160))
* Reset generator flag for each method definition ([2444a04](https://github.com/jshint/jshint/commit/2444a04)), closes [#2388](https://github.com/jshint/jshint/issues/2388) [#2389](https://github.com/jshint/jshint/issues/2389)

### Features

* Implement `module` option ([290280c](https://github.com/jshint/jshint/commit/290280c))
* support destructuring in ForIn/Of loops, lint bad ForIn/Of LHS ([c0edd9f](https://github.com/jshint/jshint/commit/c0edd9f)), closes [#2341](https://github.com/jshint/jshint/issues/2341)



<a name="2.7.0"></a>
# [2.7.0](https://github.com/jshint/jshint/compare/2.6.3...2.7.0) (2015-04-10)


### Bug Fixes

* Accept `get` and `set` as ID properties ([2ad235c](https://github.com/jshint/jshint/commit/2ad235c))
* allow trailing comma in ArrayBindingPattern ([3477933](https://github.com/jshint/jshint/commit/3477933)), closes [#2222](https://github.com/jshint/jshint/issues/2222)
* allow typeof symbol === "symbol" ([7f7aac2](https://github.com/jshint/jshint/commit/7f7aac2)), closes [#2241](https://github.com/jshint/jshint/issues/2241) [#2242](https://github.com/jshint/jshint/issues/2242)
* Correctly enforce maxparams:0 ([011364e](https://github.com/jshint/jshint/commit/011364e))
* default to empty string in src/cli.js loadIgnores ([0eeba14](https://github.com/jshint/jshint/commit/0eeba14))
* disallow 'lone' rest operator in identifier() ([dd08f85](https://github.com/jshint/jshint/commit/dd08f85)), closes [#2222](https://github.com/jshint/jshint/issues/2222)
* emit I003 more carefully and less annoyingly ([757fb73](https://github.com/jshint/jshint/commit/757fb73)), closes [#2251](https://github.com/jshint/jshint/issues/2251)
* export all names for var/let/const declarations ([3ce1267](https://github.com/jshint/jshint/commit/3ce1267)), closes [#2248](https://github.com/jshint/jshint/issues/2248) [#2253](https://github.com/jshint/jshint/issues/2253) [#2252](https://github.com/jshint/jshint/issues/2252)
* Incorrect 'Unclosed string' when the closing quote is the first character after a newline ([b804e65](https://github.com/jshint/jshint/commit/b804e65)), closes [#1532](https://github.com/jshint/jshint/issues/1532) [#1532](https://github.com/jshint/jshint/issues/1532) [#1319](https://github.com/jshint/jshint/issues/1319)
* predefine HTMLTemplateElement in browser ([231557a](https://github.com/jshint/jshint/commit/231557a)), closes [#2246](https://github.com/jshint/jshint/issues/2246)
* Prevent incorrect warnings for relations ([64f85f3](https://github.com/jshint/jshint/commit/64f85f3))
* Relax restrictions on `singleGroups` ([896bf82](https://github.com/jshint/jshint/commit/896bf82))
* templates are operands, not operators ([162dee6](https://github.com/jshint/jshint/commit/162dee6)), closes [#2223](https://github.com/jshint/jshint/issues/2223) [#2224](https://github.com/jshint/jshint/issues/2224)

### Features

* add `varstmt` enforcement option to disallow use of VariableStatements ([59396f7](https://github.com/jshint/jshint/commit/59396f7)), closes [#1549](https://github.com/jshint/jshint/issues/1549)



<a name="2.6.3"></a>
## [2.6.3](https://github.com/jshint/jshint/compare/2.6.2...2.6.3) (2015-02-28)


### Bug Fixes

* parse trailing comma in ObjectBindingPattern ([7a2b713](https://github.com/jshint/jshint/commit/7a2b713)), closes [#2220](https://github.com/jshint/jshint/issues/2220)



<a name="2.6.2"></a>
## [2.6.2](https://github.com/jshint/jshint/compare/2.6.1...2.6.2) (2015-02-28)


### Bug Fixes

* Disable `futurehostile` option by default ([3cbd41f](https://github.com/jshint/jshint/commit/3cbd41f))
* Make let variables in the closure shadow predefs ([cfd2e0b](https://github.com/jshint/jshint/commit/cfd2e0b))



<a name="2.6.1"></a>
## [2.6.1](https://github.com/jshint/jshint/compare/2.6.0...2.6.1) (2015-02-27)


### Bug Fixes

* Allow object-literals within template strings ([4f08b74](https://github.com/jshint/jshint/commit/4f08b74)), closes [#2082](https://github.com/jshint/jshint/issues/2082)
* Correct behavior of `singleGroups` ([6003c83](https://github.com/jshint/jshint/commit/6003c83))
* Correct token reported by `singleGroups` ([bc857f3](https://github.com/jshint/jshint/commit/bc857f3))
* Disambiguate argument ([d75ef69](https://github.com/jshint/jshint/commit/d75ef69))
* Do not crash on improper use of `delete` ([35df49f](https://github.com/jshint/jshint/commit/35df49f))
* ES6 modules respect undef and unused ([438d928](https://github.com/jshint/jshint/commit/438d928))
* Fix false positives in 'nocomma' option ([33612f8](https://github.com/jshint/jshint/commit/33612f8))
* Handle multi-line tokens after return or yield ([5c9c7fd](https://github.com/jshint/jshint/commit/5c9c7fd)), closes [#1814](https://github.com/jshint/jshint/issues/1814) [#2142](https://github.com/jshint/jshint/issues/2142)
* Miss xdescribe/xit/context/xcontext in mocha ([8fe6610](https://github.com/jshint/jshint/commit/8fe6610))
* Parse nested templates ([3da1eaf](https://github.com/jshint/jshint/commit/3da1eaf)), closes [#2151](https://github.com/jshint/jshint/issues/2151) [#2152](https://github.com/jshint/jshint/issues/2152)
* Permit "eval" as object key ([b5f5d5d](https://github.com/jshint/jshint/commit/b5f5d5d))
* Prevent beginning array from being confused for JSON ([813d97a](https://github.com/jshint/jshint/commit/813d97a))
* Refactor `doFunction` ([06b5d40](https://github.com/jshint/jshint/commit/06b5d40))
* Remove quotmark linting for NoSubstTemplates ([7e80490](https://github.com/jshint/jshint/commit/7e80490))
* Remove tautological condition ([f0bff58](https://github.com/jshint/jshint/commit/f0bff58))
* remove unused var ([e69acfe](https://github.com/jshint/jshint/commit/e69acfe)), closes [#2156](https://github.com/jshint/jshint/issues/2156)
* Simulate class scope for class expr names ([ac98a24](https://github.com/jshint/jshint/commit/ac98a24))
* Support more cases of ES6 module usage ([776ed69](https://github.com/jshint/jshint/commit/776ed69)), closes [#2118](https://github.com/jshint/jshint/issues/2118) [#2143](https://github.com/jshint/jshint/issues/2143)
* Templates can not be directives ([20ff670](https://github.com/jshint/jshint/commit/20ff670))
* Unfollowable path in lexer. ([065961a](https://github.com/jshint/jshint/commit/065961a))

### Features

* Implement new option `futurehostile` ([da52aa0](https://github.com/jshint/jshint/commit/da52aa0))
* parse and lint tagged template literals ([4816dbd](https://github.com/jshint/jshint/commit/4816dbd)), closes [#2000](https://github.com/jshint/jshint/issues/2000)



<a name="2.6.0"></a>
# [2.6.0](https://github.com/jshint/jshint/compare/2.5.11...2.6.0) (2015-01-21)


### Bug Fixes

* Add missing globals to browser environment ([32f02e0](https://github.com/jshint/jshint/commit/32f02e0))
* Allow array, grouping and string form to follow spread operator in function call args. ([437655a](https://github.com/jshint/jshint/commit/437655a)), closes [#2060](https://github.com/jshint/jshint/issues/2060) [#2060](https://github.com/jshint/jshint/issues/2060)
* Correct bug in enforcement of `singleGroups` ([5fedda6](https://github.com/jshint/jshint/commit/5fedda6)), closes [#2064](https://github.com/jshint/jshint/issues/2064)
* Remove dead code ([3b5d94a](https://github.com/jshint/jshint/commit/3b5d94a)), closes [#883](https://github.com/jshint/jshint/issues/883)
* Remove dead code for parameter parsing ([a1d5817](https://github.com/jshint/jshint/commit/a1d5817))
* Revert unnecessary commit ([a70bbda](https://github.com/jshint/jshint/commit/a70bbda))

### Features

* `elision` option to relax "Extra comma" warnings ([cbfc827](https://github.com/jshint/jshint/commit/cbfc827)), closes [#2062](https://github.com/jshint/jshint/issues/2062)
* Add new Jasmine 2.1 globals to "jasmine" option ([343c45e](https://github.com/jshint/jshint/commit/343c45e)), closes [#2023](https://github.com/jshint/jshint/issues/2023)
* Support generators in class body ([ee348c3](https://github.com/jshint/jshint/commit/ee348c3))


### BREAKING CHANGES

* In projects which do not enable ES3 mode, it is now an error by default to use elision array elements,
also known as empty array elements (such as `[1, , 3, , 5]`)



<a name="2.5.11"></a>
## [2.5.11](https://github.com/jshint/jshint/compare/2.5.10...2.5.11) (2014-12-18)




<a name="2.5.10"></a>
## [2.5.10](https://github.com/jshint/jshint/compare/2.5.9...2.5.10) (2014-11-06)




<a name="2.5.9"></a>
## [2.5.9](https://github.com/jshint/jshint/compare/2.5.8...2.5.9) (2014-11-06)




<a name="2.5.8"></a>
## [2.5.8](https://github.com/jshint/jshint/compare/2.5.7...2.5.8) (2014-10-29)




<a name="2.5.7"></a>
## [2.5.7](https://github.com/jshint/jshint/compare/2.5.6...2.5.7) (2014-10-28)




<a name="2.5.6"></a>
## [2.5.6](https://github.com/jshint/jshint/compare/2.5.5...2.5.6) (2014-09-21)




<a name="2.5.5"></a>
## [2.5.5](https://github.com/jshint/jshint/compare/2.5.4...2.5.5) (2014-08-24)




<a name="2.5.4"></a>
## [2.5.4](https://github.com/jshint/jshint/compare/2.5.3...2.5.4) (2014-08-18)




<a name="2.5.3"></a>
## [2.5.3](https://github.com/jshint/jshint/compare/2.5.2...2.5.3) (2014-08-08)




<a name="2.5.2"></a>
## [2.5.2](https://github.com/jshint/jshint/compare/2.5.1...2.5.2) (2014-07-05)




<a name="2.5.1"></a>
## [2.5.1](https://github.com/jshint/jshint/compare/2.5.0...2.5.1) (2014-05-16)




<a name="2.5.0"></a>
# [2.5.0](https://github.com/jshint/jshint/compare/2.4.4...2.5.0) (2014-04-02)




<a name="2.4.4"></a>
## [2.4.4](https://github.com/jshint/jshint/compare/2.4.3...2.4.4) (2014-02-21)




<a name="2.4.3"></a>
## [2.4.3](https://github.com/jshint/jshint/compare/2.4.2...2.4.3) (2014-01-26)




<a name="2.4.2"></a>
## [2.4.2](https://github.com/jshint/jshint/compare/2.4.1...2.4.2) (2014-01-21)




<a name="2.4.1"></a>
## [2.4.1](https://github.com/jshint/jshint/compare/2.4.0...2.4.1) (2014-01-03)




<a name="2.4.0"></a>
# [2.4.0](https://github.com/jshint/jshint/compare/2.3.0...2.4.0) (2013-12-25)




<a name="2.3.0"></a>
# [2.3.0](https://github.com/jshint/jshint/compare/2.2.0...2.3.0) (2013-10-21)




<a name="2.2.0"></a>
# [2.2.0](https://github.com/jshint/jshint/compare/2.1.11...2.2.0) (2013-10-18)




<a name="2.1.11"></a>
## [2.1.11](https://github.com/jshint/jshint/compare/2.1.10...2.1.11) (2013-09-20)




<a name="2.1.10"></a>
## [2.1.10](https://github.com/jshint/jshint/compare/2.1.9...2.1.10) (2013-08-15)

Thanks to [Dave Camp](https://twitter.com/campd) JSHint now supports list
comprehensions, a declarative way of transforming a list:

    [ for (i of [ 1, 2, 3 ]) i + 2 ]; // Returns [ 3, 4, 5 ]

Note: SpiderMonkey currently implements a slightly different syntax for list
comprehensions which is also supported by JSHint.

### Patch summary

* [ae96e5c](https://github.com/jshint/jshint/commit/ae96e5c1e0fb6a80921c8e9bd1eba8f3c96eaaee)
  Fixed [#1220](https://github.com/jshint/jshint/issues/1220/): Add typed array
  option, implied by 'node' option
* [27bd241](https://github.com/jshint/jshint/commit/27bd241c17e3bedb4e4b66f44e2612e6d4ef0041)
  Fixed [#1222](https://github.com/jshint/jshint/issues/1222/): Update
  PhantomJS globals to 1.7 API
* [6c5a085](https://github.com/jshint/jshint/commit/6c5a08553f1fcb2bbd89220b539aa0568ff99481)
  Fixed [#1216](https://github.com/jshint/jshint/issues/1216/): Support for
  array comprehensions using for-of (closed #1095)
* [83374ad](https://github.com/jshint/jshint/commit/83374adb3dad7c5bf708a8f6488d023d65232660)
  No issue: Remove /stable/ subdirectories
* [1a3c47f](https://github.com/jshint/jshint/commit/1a3c47fb1278159e9db2a13e41f442f92e08a099)
  Fixed [#1174](https://github.com/jshint/jshint/issues/1174/): Fixed a false
  positive 'destructuring assignment' warning (closed #1177)
* [303c535](https://github.com/jshint/jshint/commit/303c53555d36651285a1decc7faacd94f400b7e8)
  Fixed [#1183](https://github.com/jshint/jshint/issues/1183/): Fix an issue
  with debugger warning pointing to a wrong line in some cases
* [a0b7181](https://github.com/jshint/jshint/commit/a0b7181578c2f07058bd1ff4f11fc622056005a3)
  No issue: Add helper programs to apply and land patches from GitHub
* [9c2b8dd](https://github.com/jshint/jshint/commit/9c2b8dd55bcc131420b6326cc56cc2863d0b268f)
  Fixed [#1194](https://github.com/jshint/jshint/issues/1194/): Don't look for
  a config when input is /dev/stdin
* [a17ae9e](https://github.com/jshint/jshint/commit/a17ae9ed1e01ba465487b97066fdc2ba65ce109a)
  Fixed [#1189](https://github.com/jshint/jshint/issues/1189/): Support spaces
  in /*global ... */
* [dcc1251](https://github.com/jshint/jshint/commit/dcc125147455556c8fbc4d51ed59b8afa7174ff3)
  Fixed [#1197](https://github.com/jshint/jshint/issues/1197/): Make Rhino
  wrapper to be more consistent with NPM package.
* [96ea1a8](https://github.com/jshint/jshint/commit/96ea1a88f19681f35ca534045aa6e990a39713ca)
  No issue: Split make.js into bin/build and bin/changelog
* [4ac19fa](https://github.com/jshint/jshint/commit/4ac19fa53016dfc8686d0ec882da2269aee1e964)
  No issue: Move JSHint config into package.json

**Thanks** to Rob Wu, Ryan Cannon, Dave Camp, Amir Livneh, Josh Hoff, Nikolay
S. Frantsev, Lapo Luchini, Lukas Domnick for sending patches!


<a name="2.1.9"></a>
## [2.1.9](https://github.com/jshint/jshint/compare/2.1.8...2.1.9) (2013-08-02)




<a name="2.1.8"></a>
## [2.1.8](https://github.com/jshint/jshint/compare/2.1.7...2.1.8) (2013-08-01)




<a name="2.1.7"></a>
## [2.1.7](https://github.com/jshint/jshint/compare/2.1.6...2.1.7) (2013-07-29)




<a name="2.1.6"></a>
## [2.1.6](https://github.com/jshint/jshint/compare/2.1.5...2.1.6) (2013-07-29)

**UPDATE:** We just published another version, 2.1.7, which contains only one
bugfix: [#1199](https://github.com/jshint/jshint/pull/1199).

In this release we added two new arguments to our CLI program: `exclude` which
allows you to exclude directories from linting and `prereq` which allows you to
specify a file containing declarations of the global variables used throughout
your project. In addition to that, we added support for stdin. JSHint now
follows a UNIX convention where if a given file path is a dash (`-`) the the
program reads from stdin.

We also extended our ES6 coverage by adding support for `yield` statements and
`import/export` declarations. JSHint is still **the only** linter that can
parse most ES6 and Mozilla-specific JavaScript code.

For more changes, see the patch summary below.

* [004dc61](https://github.com/jshint/jshint/commit/004dc619b263449ab8e05635428f0dabc80ae9b2)
  Fixed [#1178](https://github.com/jshint/jshint/issues/1178/): Changed
  'predef' to 'globals' in the example .jshintrc
* [cd69f13](https://github.com/jshint/jshint/commit/cd69f1390bd40d02b6d8dc06abddc4d744310981)
  Fixed [#1187](https://github.com/jshint/jshint/issues/1187/): Explicitly
  define contents of our NPM package
* [c83caf3](https://github.com/jshint/jshint/commit/c83caf33a3c867e557039433b25bb57a5be6ae5f)
  Fixed [#1166](https://github.com/jshint/jshint/issues/1166/): Tweaks to
  import/export support
* [537dcbd](https://github.com/jshint/jshint/commit/537dcbd4be49f5b52ede08e98b23e49bbc5e4bbc)
  Fixed [#1164](https://github.com/jshint/jshint/issues/1164/): Add codes to
  errors generated by quit()
* [6aed7ed](https://github.com/jshint/jshint/commit/6aed7ede44f16dc5195831fa6d85ba9c75b40394)
  Fixed [#1155](https://github.com/jshint/jshint/issues/1155/): Use shelljs
  option in make.js
* [87df213](https://github.com/jshint/jshint/commit/87df213d19dffc75a30f4929d9302ab2e653e332)
  Fixed [#1153](https://github.com/jshint/jshint/issues/1153/): Moved E037 and
  E038 to the warnings section and changed their message.
* [dd060c7](https://github.com/jshint/jshint/commit/dd060c7373971cac2a965deee38d72ff5214d417)
  Fixed [#779](https://github.com/jshint/jshint/issues/779/): Add support for
  !pattern in the .jshintignore files
* [5de09c4](https://github.com/jshint/jshint/commit/5de09c434a62f9a63086959fd8ddb8d8d7369d50)
  Fixed [#696](https://github.com/jshint/jshint/issues/696/): Add support for
  `--exclude` arg
* [ee3d598](https://github.com/jshint/jshint/commit/ee3d59830b0cea0d7cb814e8ac654f25d9f38f03)
  Fixed [#809](https://github.com/jshint/jshint/issues/809/): Added short
  options to bin/jshint where it made sense
* [b937895](https://github.com/jshint/jshint/commit/b9378950554277c9b67ad01ab537d2ca94e59294)
  Fixed [#810](https://github.com/jshint/jshint/issues/810/): Made --reporter
  description in -h more straightforward
* [1c70362](https://github.com/jshint/jshint/commit/1c703625e26f95f1a77263e52dbdbcc494eeed01)
  Fixed [#839](https://github.com/jshint/jshint/issues/839/): Add support for
  prereq files
* [28dae4b](https://github.com/jshint/jshint/commit/28dae4baf2286d6044e96851b0acf52945262bb4)
  Fixed [#741](https://github.com/jshint/jshint/issues/741/): expose loadConfig
  from CLI
* [b39e2ac](https://github.com/jshint/jshint/commit/b39e2acea8ad53e9d288e1ec94d829dce26dfd5e)
  Followup [#687](https://github.com/jshint/jshint/issues/687/):
  eqnull
* [90b733b](https://github.com/jshint/jshint/commit/90b733bcf2c13e196039d994b8d374acbd0b5c28)
  Followup [#687](https://github.com/jshint/jshint/issues/687/): Use '-' as a
  marker for stding
* [68db0d8](https://github.com/jshint/jshint/commit/68db0d82d11426072a28409a1101ea180fa957eb)
  Fixed [#687](https://github.com/jshint/jshint/issues/687/): Allow input via
  stdin
* [5924b2a](https://github.com/jshint/jshint/commit/5924b2aa5aafdf8fede525b7156bd1962f824a14)
  Fixed [#1157](https://github.com/jshint/jshint/issues/1157/): Add support for
  import/export.
* [729cfd7](https://github.com/jshint/jshint/commit/729cfd718cf11585bd03713d314d1367d92ac7d7)
  Fixed [#1154](https://github.com/jshint/jshint/issues/1154/): Add MouseEvent
  and CustomEvent browser globals
* [9782fc8](https://github.com/jshint/jshint/commit/9782fc812703e60cfee8acae347aab4dd065844b)
  Fixed [#1134](https://github.com/jshint/jshint/issues/1134/): Catch reserved
  words in ES3 mode.
* [87e3e6c](https://github.com/jshint/jshint/commit/87e3e6ccfb3c37417a56946dce5904742bd43311)
  Fixed [#1138](https://github.com/jshint/jshint/issues/1138/): Count ternary
  and or operators for complexity
* [66f3e4c](https://github.com/jshint/jshint/commit/66f3e4c13434de9c9951dfff084b438db9ed525f)
  Fixed [#1133](https://github.com/jshint/jshint/issues/1133/): Make shelljs
  imply node.
* [79dc812](https://github.com/jshint/jshint/commit/79dc812bfd7510e196d811653db406d2001e159f)
  Fixed [#704](https://github.com/jshint/jshint/issues/704/): Add config file
  support for the Rhino wrappers.
* [88c862d](https://github.com/jshint/jshint/commit/88c862df3dba9e2cfa1e44d4be909099d8306c97)
  Fixed [#1109](https://github.com/jshint/jshint/issues/1109/): Parse yield
  expressions.

**Thanks** to Terry Roe, Sindre Sorhus, Thomas Boyt, Nikolay S. Frantsev,
XhmikosR, Jacob Rask, Kevin Chu, Tim Ruffles, Stephen Mathieson, Lukas Domnick,
usrbincc for sending patches!

<a name="2.1.5"></a>
## [2.1.5](https://github.com/jshint/jshint/compare/2.1.4...2.1.5) (2013-07-27)




<a name="2.1.4"></a>
## [2.1.4](https://github.com/jshint/jshint/compare/2.1.3...2.1.4) (2013-06-24)




<a name="2.1.3"></a>
## [2.1.3](https://github.com/jshint/jshint/compare/2.1.2...2.1.3) (2013-06-03)




<a name="2.1.2"></a>
## [2.1.2](https://github.com/jshint/jshint/compare/2.1.1...2.1.2) (2013-05-22)




<a name="2.1.1"></a>
## [2.1.1](https://github.com/jshint/jshint/compare/2.1.0...2.1.1) (2013-05-21)




<a name="2.1.0"></a>
# [2.1.0](https://github.com/jshint/jshint/compare/2.0.1...2.1.0) (2013-05-21)

JSHint 2.1.0 is out. This releases adds support for ES6 `class` syntax and
fixes some issues with our parser.

* Added support for ES6 `class` syntax.
  ([#1048](https://github.com/jshint/jshint/pull/1048))
* Added support for error code in the Checkstyle reporter.
  ([#1088](https://github.com/jshint/jshint/pull/1088))
* Added support for `do` statement bodies that are not block
  statements.
  ([#1062](https://github.com/jshint/jshint/pull/1062))
* Fixed issues with JSHint not parsing comma expressions correctly.
  ([#1084](https://github.com/jshint/jshint/pull/1084))
* Fixed a bug with W080 no longer pointing to relevant identifiers.
  ([#1070](https://github.com/jshint/jshint/pull/1070))
* Fixed a potential issue with Node 0.10 and Windows.
  ([#1065](https://github.com/jshint/jshint/pull/1065))
* Fixed issues with JSHint not parsing assignments in `switch`
  conditionals.
  ([#1064](https://github.com/jshint/jshint/pull/1064))
* Fixed an issue with `esnext` and `moz` modes turning off the
  default `es5` mode.
  ([#1068](https://github.com/jshint/jshint/issues/1068))

**Thanks** to usrbincc, James Allardice, Iraê Carvalho, Nick Schonning and
jklein for sending patches!

<a name="2.0.1"></a>
## [2.0.1](https://github.com/jshint/jshint/compare/2.0.0...2.0.1) (2013-05-08)




<a name="2.0.0"></a>
# [2.0.0](https://github.com/jshint/jshint/compare/1.1.0...2.0.0) (2013-05-08)

**WARNING:** This release introduces backwards incompatible changes.

JSHint 2.0.0 is out! This version hits a pretty big milestone for the project:
this is the first JSHint release for which I'm not the biggest contributor. I
personally believe this fact validates JSHint as a successful *open source*
project. And I'm extremely thankful to all you who file bug reports and send
patches—you're all awesome.

#### EcmaScript 5

The first and foremost: starting with this version JSHint will assume ES5 as
the default environment. Before, JSHint was checking all the code per ES3
specification with an option to enable ES5 mode. Now ES5 mode is the default
mode and if you want to check your code against the ES3 specification (useful
when developing for super old browsers such as Internet Explorer 6) you will
have to use `es3:true`.

Special thanks to Rick Waldron for championing this change.

#### Partial support for Mozilla JavaScript extensions and ES6

Thanks to our newest core contributor, Bernard Pratz, JSHint now has partial
support for Mozilla JavaScript extensions (`moz` option) and ES6 (`esnext`
option):

* Destructuring assignment
* `const`
* `let` blocks and expressions
* Generators and iterators
* List comprehension
* Try/catch filters and multiple catch blocks
* Concise method declaration
* `for ... of` loops
* Fat arrows

We have more patches in queue that add support for classes and other nifty ES6
things. Stay tuned!

#### CLI

* JSHint now looks for `.jshintrc` in the directory being linted.
  ([#833](https://github.com/jshint/jshint/issues/833))
* Various cross-platform fixes for our Node CLI module.
* New public method for the CLI export that allows third-parties to hook into
  the file resolution logic.
  ([#741](https://github.com/jshint/jshint/issues/741))

#### General

* For non-Node system we upgraded to the latest version of Browserify.  This
  resolves some performance issues we had with Rhino.
* Added SVG globals to the browser environment.
* Option `smarttabs` now ignores mixed tabs and spaces within single-
  and multi-line comments.
* Added a new pragma to unignore a warning:

      /*jshint -W096 */

      // All warnings about keys producing unexpected results will
      // be ignored here.

      /*jshint +W096 */

      // But not here.

* JSHint now ignores unrecognized JSLint options.
* Fixed a bug where `indent:false` was triggering indentation warnings.
  ([#1035](https://github.com/jshint/jshint/issues/1035))
* Fixed a regression bug where `unused` was not behaving correctly.
  ([#996](https://github.com/jshint/jshint/issues/996))
* Plus lots and lots of other, smaller bug fixes.

#### New rapid release schedule

And last but not least: starting with this version, I'm switching JSHint to a
more rapid release schedule. This simply means that I will be publishing new
versions of JSHint more often. I will try my best to follow
[semver](http://semver.org/) recommendations and ship working software. But as
our license says, no guarantees.

**Thanks** to Bernarnd Pratz, Michelle Steigerwalt, Yuya Tanaka, Matthew
Flaschen, Juan Pablo Buritica, Matt Cheely, Steve Mosley, Stephen Sorensen,
Rick Waldron, Hugues Malphettes, Jeff Thompson, xzyfer, Lee Leathers, croensch,
Steven Benner, James Allardice, Sindre Sorhus, Jordan Harband, Stuart Knightley
and Kevin Locke for sending patches!

<a name="1.1.0"></a>
# [1.1.0](https://github.com/jshint/jshint/compare/1.0.0...1.1.0) (2013-03-06)




<a name="1.0.0"></a>
# [1.0.0](https://github.com/jshint/jshint/compare/1.0.0-rc4...1.0.0) (2013-01-30)




<a name="1.0.0-rc4"></a>
# [1.0.0-rc4](https://github.com/jshint/jshint/compare/1.0.0-rc3...1.0.0-rc4) (2013-01-18)

JSHint 1.0.0 Release Candidate 4 is now out:

* Fixes a bug with JSHint not allowing reserved words to be used as property
  names. ([#768](https://github.com/jshint/jshint/issues/768))
* Fixes a bug with JSHint lexer not recognizing `/` after `]`.
  ([#803](https://github.com/jshint/jshint/issues/803))
* Fixes a bug with JSHint not recognizing `predef` when its value is an array,
  and not an object. ([#800](https://github.com/jshint/jshint/issues/800))
* Fixes a bug with JSHint crashing on unrecoverable syntax errors such as
  `if (name <) {}`. ([#818](https://github.com/jshint/jshint/issues/818))

Here's how you can install this release candidate:

    $ npm install https://github.com/jshint/jshint/archive/1.0.0-rc4.tar.gz

For full 1.0.0 changelog please see our
[1.0.0 RC1 announcement](http://jshint.com/blog/2012-12-29/1-0-0-rc1/).

<a name="1.0.0-rc3"></a>
# [1.0.0-rc3](https://github.com/jshint/jshint/compare/1.0.0-rc2...1.0.0-rc3) (2013-01-02)

JSHint 1.0.0 Release Candidate 3 is now out:

* Fixes a bug with JSHint not allowing `new` and `debugger` to
  appear after a comma. ([#793](https://github.com/jshint/jshint/issues/793))
* Fixes a bug with JSHint not collecting file recursively.
  ([#794](https://github.com/jshint/jshint/issues/794))
* Fixes a bug with JSHint crashing when future reserved words are used as
  identifiers.
* Adds a newline separator between files in the CLI output.
* Fixes a bug with JSHint not parsing `/*global global:true */` correctly.
  ([#795](https://github.com/jshint/jshint/issues/795))
* Fixes a bug with JSHint crashing when files can't be found.

Here's how you can install this release candidate:

    $ npm install https://github.com/jshint/jshint/archive/1.0.0-rc3.tar.gz

For full 1.0.0 changelog please see our [1.0.0 RC1
announcement](http://jshint.com/blog/2012-12-29/1-0-0-rc1/).

<a name="1.0.0-rc2"></a>
# [1.0.0-rc2](https://github.com/jshint/jshint/compare/1.0.0-rc1...1.0.0-rc2) (2012-12-31)

JSHint 1.0.0 Release Candidate 2 is now out:

* Fixes a bug with JSHint not recognizing regular expressions after commas.
  ([#792](https://github.com/jshint/jshint/pull/792))
* Fixes two failed tests on Windows.
  ([#790](https://github.com/jshint/jshint/pull/790))
* Fixes a bug with JSHint builder failing when there is no dist/ directory.
  ([#788](https://github.com/jshint/jshint/pull/788))
* Adds JSHint binary to *package.json* so that JSHint could be, once again,
  installed and used globally as a CLI program.
  ([#787](https://github.com/jshint/jshint/pull/787))

Here's how you can install this release candidate:

    $ npm install https://github.com/jshint/jshint/archive/1.0.0-rc2.tar.gz

For full 1.0.0 changelog please see our
[1.0.0 RC1 announcement](http://jshint.com/blog/2012-12-29/1-0-0-rc1/).

Big thanks to Samuel Cole for submitting patches and finding bugs!

<a name="1.0.0-rc1"></a>
# 1.0.0-rc1 (2012-12-31)

After three months and 100+ commits, JSHint 1.0.0 is ready for release.  This
is the biggest release for JSHint so far, and that's why I've decided to run it
through a release candidate phase first. I tried my best to make it as
backwards compatible as possible, but there might be a small number of
incompatibilities depending on how you use JSHint. Please keep that in mind and
test your integration before updating to 1.0.0.

One of the biggest changes is that node-jshint is now part of the main JSHint
project, which means that there will no longer be lag time between releasing a
new version and publishing it on NPM. **Node and NPM is now the main and
recommended way of using JSHint on all platforms.** This also means that
starting with "1.0.0", JSHint will start using the
[node-semver](https://github.com/isaacs/node-semver) versioning system instead
of the old rN system.

In addition, this version drops support for non-ES5 environments. This means
that JavaScript engines that don't support the ES5 syntax will not even parse
JSHint's source code. (For example, the online interface for JSHint will not
work in older versions of IE.)

I'm very excited to finally release this version and I encourage everyone to
try out the release candidate and report any bugs and issues you encounter. The
full changelog is provided below, with examples and links to relevant issues.

#### Parser

This version has a completely rewritten lexer. Since it's no longer a giant
regexp, the new lexer is more robust and easier to read. I'd like to thank the
authors of Esprima and Traceur since I borrowed some pieces from them.

* This version **adds support for Unicode identifiers!**
  ([#301](https://github.com/jshint/jshint/issues/301) and
  [#716](https://github.com/jshint/jshint/issues/716/))

      var π = 3.1415;

* Adds support for the comma operator. ([#56](https://github.com/jshint/jshint/issues/56/))
  JSHint now parses code like the following (note the comma in the middle
  expression):

      for (var i = 0, ch; ch = channels[i], i < channels.length; i++) {
        // ...
      }

* Improves support for numbers. JSHint now understands numbers with leading
  dots (e.g. .12) and doesn't generate false positives on invalid numbers (e.g.
  099). In case of invalid numbers the parser still parses them but marks as
  malformed and generates a nice little warning.

* Adds support for more relaxed JSHint directive syntax. JSHint now recognizes
  space between `/*` and jshint/global/etc. and allows you to use single-line
  comments for directives in addition to multi-line comments:

      Before:
      /*jshint strict:true */

      Now:
      /*jshint strict:true */
      /* jshint strict:true */ (note the space)
      //jshint strict:true
      // jshint strict:true

  One potentially breaking change is that all lists inside JSHint directives
  must be separated by commas from now on. So `/*jshint strict:true undef:true
  */` won't fly anymore but `/*jshint strict:true, undef:true */` will (note
  the comma).

* Adds better parser for regular expressions. Previously, JSHint would check
  the  grammar of regular expressions using its own internal logic. Now, JSHint
  compiles the parsed expressions using the native RegExp object to check
  for grammar errors.

* Adds support for a defensive semicolon before `[`. (Ticket
  [#487](https://github.com/jshint/jshint/issues/487/))

* Adds support for unclosed multi-line strings and removes warnings about
  unnecessary escaping for `\u` and `\x` in strings.
  ([#494](https://github.com/jshint/jshint/issues/494/))

Bug fixes:

* Fixes a bug with JSHint not warning about reserved words being used as
  variable and function declaration identifiers. (Ticket
  [#744](https://github.com/jshint/jshint/issues/744/))

* Fixes a bug with JSHint generating a false positive *Missing whitespace...*
  warning on trailing commas.
  ([#363](https://github.com/jshint/jshint/issues/363/))

* Fixes a bug with JSHint not being able to parse regular expressions preceded
  by *typeof* (e.g. `typeof /[a-z]/`) and, in some cases, \*=, /=, etc.  (e.g.
  `if (x /= 2) { ... }`).
  ([#657](https://github.com/jshint/jshint/issues/657/))

#### General

* This version adds a unique numeric code to every warning and error message
  produced by JSHint. That means that you can now **ignore any warning**
  produced by JSHint even when there is no corresponding option for it. You can
  do that using the special minus (-) operator. For example, here's how you
  ignore all messages about trailing decimal points (W047):

      /*jshint -W047 */

  or

      JSHINT(src, { "-W047": true });

  Keep in mind that this syntax can't be used to ignore errors.

* Due to popular demand, this version splits *indent* and *white* options
  meaning that *indent* won't imply *white* anymore.
  ([#667](https://github.com/jshint/jshint/issues/667/))

* Changes *node* option to not assume that all programs must be running in
  strict mode. ([#721](https://github.com/jshint/jshint/issues/721/))

* Adds new globals for the *browser* option: Element and Uint8ClampedArray.
  ([#707](https://github.com/jshint/jshint/issues/707/) and
  [#766](https://github.com/jshint/jshint/issues/766/))

* Adds new global for the *node* option: DataView.
  ([#773](https://github.com/jshint/jshint/issues/773/) and
  [#774](https://github.com/jshint/jshint/issues/774/))

* Removes option *onecase*.

* **Adds new directive: exported**. Use `/* exported ... ` for global variables
  that are defined in the current file but used elsewhere to prevent
  unnecessary *X is defined but never used* warnings. As before, you need to
  declare those variables as global in the other files.

  ([#726](https://github.com/jshint/jshint/issues/726/) and
  [#659](https://github.com/jshint/jshint/issues/659/))

* Removes a warning about missing *break* before *default* when *default* is
  the first switch statement
  ([#490](https://github.com/jshint/jshint/issues/490/)):

      switch (name) {
      default: // No warning here
        doSomething();
        break;
      case "JSHint":
        doSomethingElse();
      }

* Improves support for [future reserved
  keywords](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Reserved_Words#Words_reserved_for_possible_future_use).
  JSHint now properly recognizes future reserved keywords both for ES3 and ES5
  environments with their corresponding rules.
  ([#674](https://github.com/jshint/jshint/issues/674/))

* Changes behavior for *hasOwnProperty*
  ([#770](https://github.com/jshint/jshint/issues/770/)):

      var hasOwnProperty = ...; // No warning
      var obj = { hasOwnProperty: ... }; // Warning
      obj.hasOwnProperty = ...; // Warning
      obj['hasOwnProperty'] = ...; // Warning

* Adds ability to disable option *unused* per function!
  ([#639](https://github.com/jshint/jshint/issues/639/))

      // jshint unused:true
      var a; // Warning

      function foo(b) { // No warning
        // jshint unused:false
        return 1;
      }

      foo();

Bug fixes:

* Adds *scope* property to critical errors.
  ([#714](https://github.com/jshint/jshint/issues/714/))
* Fixes a regression bug with option *predef* making all global variables
  writeable. ([#665](https://github.com/jshint/jshint/issues/665/))
* Fixes a bug with JSHint not warning about potential typos on `return o.a =
  1`. ([#670](https://github.com/jshint/jshint/issues/670/))
* Fixes a bug with *implied* property containing false positive data when
  option *undef* is off. ([#668](https://github.com/jshint/jshint/issues/668/))


#### CLI

* This version **removes support for the JavaScriptCore shell** due to its
  limited API. Note that this doesn't mean that JSHint no longer works in
  Safari, it simply means that we removed the ability to use jshint via the
  command line JSC shell.

* This version also **removes support for Windows Script Host**. WSH support
  was initially added due to Node not working well on Windows but, thanks to
  Microsoft engineers, this is no longer true. So everyone is encouraged to use
  JSHint with Node.

* This version relies on ES5 syntax, so if you use JSHint with Rhino, please
  make sure you have the latest version: 1.7R4.

This version includes several improvements to the Node version of JSHint:

* Adds a new flag, `--verbose`, that changes output to display message codes:

      $ jshint --verbose my.js
      my.js: line 7, col 23, Extra comma. (...) (W070)

* Makes `--config` raise an error if it can't find provided file or if the file
  is invalid JSON. ([#691](https://github.com/jshint/jshint/issues/691/))

Bug fixes:

* Fixes a bug with `.jshintignore` globbing not working properly.
  ([#777](https://github.com/jshint/jshint/issues/777/) and
  [#692](https://github.com/jshint/jshint/issues/692/))

* Fixes a bug with JSHint skipping over files with no extensions.
  ([#690](https://github.com/jshint/jshint/issues/690/))


#### What's next?

I plan to test this release candidate for about a week before marking it as
stable and publishing on NPM. And, at the same time, I will be updating the
documentation and the [jshint.com](http://jshint.com/) website. If you notice
any bugs or unexpected backwards-incompatible changes, please file a bug.

**RC3 is out:** [JSHint 1.0.0 RC3](http://jshint.com/blog/2013-01-01/1-0-0-rc3/).

Here's how you can install this release candidate:

    $ npm install https://github.com/jshint/jshint/archive/1.0.0-rc1.tar.gz

For Rhino wrapper, you will need to clone our repo and build jshint-rhino:

    $ node make.js build
    $ rhino dist/jshint-rhino.js ...

#### Contributors

Thanks to Bernhard K. Weisshuhn, James Allardice, Mike MacCana, Stephen Fry,
Steven Olmsted, Leith Abdulla, Eric Promislow and Vlad Gurdiga for submitting
patches!

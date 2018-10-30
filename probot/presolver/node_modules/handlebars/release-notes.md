# Release Notes

## Development

[Commits](https://github.com/wycats/handlebars.js/compare/v4.0.5...master)

## v4.0.5 - November 19th, 2015
- [#1132](https://github.com/wycats/handlebars.js/pull/1132) - Update uglify-js to avoid vulnerability ([@plynchnlm](https://api.github.com/users/plynchnlm))
- [#1129](https://github.com/wycats/handlebars.js/issues/1129) - Minified lib returns an empty string ([@bricss](https://api.github.com/users/bricss))
- Return current handlebars instance from noConflict - 685cf92
- Add webpack to dev dependency to support npm 3 - 7a6c228
- Further relax uglify dependency - 0a3b3c2
- Include tests for minimized artifacts - c21118d
- Fix lint errors under latest eslint - 9f59de9
- Add print-script helper script - 98a6717

[Commits](https://github.com/wycats/handlebars.js/compare/v4.0.4...v4.0.5)

## v4.0.4 - October 29th, 2015
- [#1121](https://github.com/wycats/handlebars.js/pull/1121) - Include partial name in 'undefined partial' exception message ([@shinypb](https://api.github.com/users/shinypb))
- [#1125](https://github.com/wycats/handlebars.js/pull/1125) - Add promised-handlebars to "in-the-wild"-list ([@nknapp](https://api.github.com/users/nknapp))

[Commits](https://github.com/wycats/handlebars.js/compare/v4.0.3...v4.0.4)

## v4.0.3 - September 23rd, 2015
- [#1099](https://github.com/wycats/handlebars.js/issues/1099) - @partial-block is overridden ([@btmorex](https://api.github.com/users/btmorex))
- [#1093](https://github.com/wycats/handlebars.js/issues/1093) - #each skips iteration on undefined values ([@florianpilz](https://api.github.com/users/florianpilz))
- [#1092](https://github.com/wycats/handlebars.js/issues/1092) - Square braces in key name ([@distantnative](https://api.github.com/users/distantnative))
- [#1091](https://github.com/wycats/handlebars.js/pull/1091) - fix typo in release notes ([@nikolas](https://api.github.com/users/nikolas))
- [#1090](https://github.com/wycats/handlebars.js/pull/1090) - grammar fixes in 4.0.0 release notes ([@nikolas](https://api.github.com/users/nikolas))

Compatibility notes:
- `each` iteration with `undefined` values has been restored to the 3.0 behaviors. Helper calls with undefined context values will now execute against an arbitrary empty object to avoid executing against global object in non-strict mode.
- `]` can now be included in `[]` wrapped identifiers by escaping with `\`. Any `[]` identifiers that include `\` will now have to properly escape these values.

[Commits](https://github.com/wycats/handlebars.js/compare/v4.0.2...v4.0.3)

## v4.0.2 - September 4th, 2015
- [#1089](https://github.com/wycats/handlebars.js/issues/1089) - "Failover content" not working in multiple levels of inline partials ([@michaellopez](https://api.github.com/users/michaellopez))

[Commits](https://github.com/wycats/handlebars.js/compare/v4.0.1...v4.0.2)

## v4.0.1 - September 2nd, 2015
- Fix failure when using decorators in partials - 05b82a2

[Commits](https://github.com/wycats/handlebars.js/compare/v4.0.0...v4.0.1)

## v4.0.0 - September 1st, 2015
- [#1082](https://github.com/wycats/handlebars.js/pull/1082) - Decorators and Inline Partials ([@kpdecker](https://api.github.com/users/kpdecker))
- [#1076](https://github.com/wycats/handlebars.js/pull/1076) - Implement partial blocks ([@kpdecker](https://api.github.com/users/kpdecker))
- [#1087](https://github.com/wycats/handlebars.js/pull/1087) - Fix #each when last object entry has empty key ([@denniskuczynski](https://api.github.com/users/denniskuczynski))
- [#1084](https://github.com/wycats/handlebars.js/pull/1084) - Bump uglify version to fix vulnerability ([@John-Steidley](https://api.github.com/users/John-Steidley))
- [#1068](https://github.com/wycats/handlebars.js/pull/1068) - Fix typo ([@0xack13](https://api.github.com/users/0xack13))
- [#1060](https://github.com/wycats/handlebars.js/pull/1060) - #1056 Fixed grammar for nested raw blocks ([@ericbn](https://api.github.com/users/ericbn))
- [#1052](https://github.com/wycats/handlebars.js/pull/1052) - Updated year in License ([@maqnouch](https://api.github.com/users/maqnouch))
- [#1037](https://github.com/wycats/handlebars.js/pull/1037) - Fix minor typos in README ([@tomxtobin](https://api.github.com/users/tomxtobin))
- [#1032](https://github.com/wycats/handlebars.js/issues/1032) - Is it possible to render a partial without the parent scope? ([@aputinski](https://api.github.com/users/aputinski))
- [#1019](https://github.com/wycats/handlebars.js/pull/1019) - Fixes typo in tests ([@aymerick](https://api.github.com/users/aymerick))
- [#1016](https://github.com/wycats/handlebars.js/issues/1016) - Version mis-match ([@mayankdedhia](https://api.github.com/users/mayankdedhia))
- [#1023](https://github.com/wycats/handlebars.js/issues/1023) - is it possible for nested custom helpers to communicate between each other?
- [#893](https://github.com/wycats/handlebars.js/issues/893) - [Proposal] Section blocks.
- [#792](https://github.com/wycats/handlebars.js/issues/792) - feature request: inline partial definitions
- [#583](https://github.com/wycats/handlebars.js/issues/583) - Parent path continues to drill down depth with multiple conditionals
- [#404](https://github.com/wycats/handlebars.js/issues/404) - Add named child helpers that can be referenced by block helpers
- Escape = in HTML content - [83b8e84](https://github.com/wycats/handlebars.js/commit/83b8e84)
- Drop AST constructors in favor of JSON - [95d84ba](https://github.com/wycats/handlebars.js/commit/95d84ba)
- Pass container rather than exec as context - [9a2d1d6](https://github.com/wycats/handlebars.js/commit/9a2d1d6)
- Add ignoreStandalone compiler option - [ea3a5a1](https://github.com/wycats/handlebars.js/commit/ea3a5a1)
- Ignore empty when iterating on sparse arrays - [06d515a](https://github.com/wycats/handlebars.js/commit/06d515a)
- Add support for string and stdin precompilation - [0de8dac](https://github.com/wycats/handlebars.js/commit/0de8dac)
- Simplify object assignment generation logic - [77e6bfc](https://github.com/wycats/handlebars.js/commit/77e6bfc)
- Bulletproof AST.helpers.helperExpression - [93b0760](https://github.com/wycats/handlebars.js/commit/93b0760)
- Always return string responses - [8e868ab](https://github.com/wycats/handlebars.js/commit/8e868ab)
- Pass undefined fields to helpers in strict mode - [5d4b8da](https://github.com/wycats/handlebars.js/commit/5d4b8da)
- Avoid depth creation when context remains the same - [279e038](https://github.com/wycats/handlebars.js/commit/279e038)
- Improve logging API - [9a49d35](https://github.com/wycats/handlebars.js/commit/9a49d35)
- Fix with operator in no @data mode - [231a8d7](https://github.com/wycats/handlebars.js/commit/231a8d7)
- Allow empty key name in each iteration - [1bb640b](https://github.com/wycats/handlebars.js/commit/1bb640b)
- Add with block parameter support - [2a85106](https://github.com/wycats/handlebars.js/commit/2a85106)
- Fix escaping of non-javascript identifiers - [410141c](https://github.com/wycats/handlebars.js/commit/410141c)
- Fix location information for programs - [93faffa](https://github.com/wycats/handlebars.js/commit/93faffa)

Compatibility notes:
- Depthed paths are now conditionally pushed on to the stack. If the helper uses the same context, then a new stack is not created. This leads to behavior that better matches expectations for helpers like `if` that do not seem to alter the context. Any instances of `../` in templates will need to be checked for the correct behavior under 4.0.0. In general templates will either reduce the number of `../` instances or leave them as is. See [#1028](https://github.com/wycats/handlebars.js/issues/1028).
- The `=` character is now HTML escaped. This closes a potential exploit case when using unquoted attributes, i.e. `<div foo={{bar}}>`. In general it's recommended that attributes always be quoted when their values are generated from a mustache to avoid any potential exploit surfaces.
- AST constructors have been dropped in favor of plain old javascript objects
- The runtime version has been increased. Precompiled templates will need to use runtime of at least 4.0.0.

[Commits](https://github.com/wycats/handlebars.js/compare/v3.0.3...v4.0.0)

## v3.0.3 - April 28th, 2015
- [#1004](https://github.com/wycats/handlebars.js/issues/1004) - Latest version breaks with RequireJS (global is undefined) ([@boskee](https://api.github.com/users/boskee))

[Commits](https://github.com/wycats/handlebars.js/compare/v3.0.2...v3.0.3)

## v3.0.2 - April 20th, 2015
- [#998](https://github.com/wycats/handlebars.js/pull/998) - Add full support for es6 ([@kpdecker](https://api.github.com/users/kpdecker))
- [#994](https://github.com/wycats/handlebars.js/issues/994) - Access Handlebars.Visitor in browser ([@tamlyn](https://api.github.com/users/tamlyn))
- [#990](https://github.com/wycats/handlebars.js/issues/990) - Allow passing null/undefined literals subexpressions ([@blimmer](https://api.github.com/users/blimmer))
- [#989](https://github.com/wycats/handlebars.js/issues/989) - Source-map error with requirejs ([@SteppeEagle](https://api.github.com/users/SteppeEagle))
- [#967](https://github.com/wycats/handlebars.js/issues/967) - can't access "this" property  ([@75lb](https://api.github.com/users/75lb))
- Use captureStackTrace for error handler - a009a97
- Ignore branches tested without coverage monitoring - 37a664b

[Commits](https://github.com/wycats/handlebars.js/compare/v3.0.1...v3.0.2)

## v3.0.1 - March 24th, 2015
- [#984](https://github.com/wycats/handlebars.js/pull/984) - Adding documentation for passing arguments into partials ([@johneke](https://api.github.com/users/johneke))
- [#973](https://github.com/wycats/handlebars.js/issues/973) - version 3 is slower than version 2 ([@elover](https://api.github.com/users/elover))
- [#966](https://github.com/wycats/handlebars.js/issues/966) - "handlebars --version" does not work with v3.0.0 ([@abloomston](https://api.github.com/users/abloomston))
- [#964](https://github.com/wycats/handlebars.js/pull/964) - default is a reserved word ([@grassick](https://api.github.com/users/grassick))
- [#962](https://github.com/wycats/handlebars.js/pull/962) - Add dashbars' link on README. ([@pismute](https://api.github.com/users/pismute))

[Commits](https://github.com/wycats/handlebars.js/compare/v3.0.0...v3.0.1)

## v3.0.0 - February 10th, 2015
- [#941](https://github.com/wycats/handlebars.js/pull/941) - Add support for dynamic partial names ([@kpdecker](https://api.github.com/users/kpdecker))
- [#940](https://github.com/wycats/handlebars.js/pull/940) - Add missing reserved words so compiler knows to use array syntax: ([@mattflaschen](https://api.github.com/users/mattflaschen))
- [#938](https://github.com/wycats/handlebars.js/pull/938) - Fix example using #with helper ([@diwo](https://api.github.com/users/diwo))
- [#930](https://github.com/wycats/handlebars.js/pull/930) - Add parent tracking and mutation to AST visitors ([@kpdecker](https://api.github.com/users/kpdecker))
- [#926](https://github.com/wycats/handlebars.js/issues/926) - Depthed lookups fail when program duplicator runs ([@kpdecker](https://api.github.com/users/kpdecker))
- [#918](https://github.com/wycats/handlebars.js/pull/918) - Add instructions for 'spec/mustache' to CONTRIBUTING.md, fix a few typos ([@oneeman](https://api.github.com/users/oneeman))
- [#915](https://github.com/wycats/handlebars.js/pull/915) - Ast update ([@kpdecker](https://api.github.com/users/kpdecker))
- [#910](https://github.com/wycats/handlebars.js/issues/910) - Different behavior of {{@last}} when {{#each}} in {{#each}} ([@zordius](https://api.github.com/users/zordius))
- [#907](https://github.com/wycats/handlebars.js/issues/907) - Implement named helper variable references ([@kpdecker](https://api.github.com/users/kpdecker))
- [#906](https://github.com/wycats/handlebars.js/pull/906) - Add parser support for block params ([@mmun](https://api.github.com/users/mmun))
- [#903](https://github.com/wycats/handlebars.js/issues/903) - Only provide aliases for multiple use calls ([@kpdecker](https://api.github.com/users/kpdecker))
- [#902](https://github.com/wycats/handlebars.js/pull/902) - Generate Source Maps ([@kpdecker](https://api.github.com/users/kpdecker))
- [#901](https://github.com/wycats/handlebars.js/issues/901) - Still escapes with noEscape enabled on isolated Handlebars environment ([@zedknight](https://api.github.com/users/zedknight))
- [#896](https://github.com/wycats/handlebars.js/pull/896) - Simplify BlockNode by removing intermediate MustacheNode ([@mmun](https://api.github.com/users/mmun))
- [#892](https://github.com/wycats/handlebars.js/pull/892) - Implement parser for else chaining of helpers ([@kpdecker](https://api.github.com/users/kpdecker))
- [#889](https://github.com/wycats/handlebars.js/issues/889) - Consider extensible parser API ([@kpdecker](https://api.github.com/users/kpdecker))
- [#887](https://github.com/wycats/handlebars.js/issues/887) - Handlebars.noConflict() option? ([@bradvogel](https://api.github.com/users/bradvogel))
- [#886](https://github.com/wycats/handlebars.js/issues/886) - Add SafeString to context (or use duck-typing) ([@dominicbarnes](https://api.github.com/users/dominicbarnes))
- [#870](https://github.com/wycats/handlebars.js/pull/870) - Registering undefined partial throws exception. ([@max-b](https://api.github.com/users/max-b))
- [#866](https://github.com/wycats/handlebars.js/issues/866) - comments don't respect whitespace control ([@75lb](https://api.github.com/users/75lb))
- [#863](https://github.com/wycats/handlebars.js/pull/863) - + jsDelivr CDN info ([@tomByrer](https://api.github.com/users/tomByrer))
- [#858](https://github.com/wycats/handlebars.js/issues/858) - Disable new default auto-indent at included partials ([@majodev](https://api.github.com/users/majodev))
- [#856](https://github.com/wycats/handlebars.js/pull/856) - jspm compatibility ([@MajorBreakfast](https://api.github.com/users/MajorBreakfast))
- [#805](https://github.com/wycats/handlebars.js/issues/805) - Request: "strict" lookups ([@nzakas](https://api.github.com/users/nzakas))

- Export the default object for handlebars/runtime - 5594416
- Lookup partials when undefined - 617dd57

Compatibility notes:
- Runtime breaking changes. Must match 3.x runtime and precompiler.
- The AST has been upgraded to a public API.
  - There are a number of changes to this, but the format is now documented in docs/compiler-api.md
  - The Visitor API has been expanded to support mutation and provide a base implementation
- The `JavaScriptCompiler` APIs have been formalized and documented. As part of the sourcemap handling these should be updated to return arrays for concatenation.
- `JavaScriptCompiler.namespace` has been removed as it was unused.
- `SafeString` is now duck typed on `toHTML`

New Features:
- noConflict
- Source Maps
- Block Params
- Strict Mode
- @last and other each changes
- Chained else blocks
- @data methods can now have helper parameters passed to them
- Dynamic partials

[Commits](https://github.com/wycats/handlebars.js/compare/v2.0.0...v3.0.0)

## v2.0.0 - September 1st, 2014
- Update jsfiddle to 2.0.0-beta.1 - 0670f65
- Add contrib note regarding handlebarsjs.com docs - 4d17e3c
- Play nice with gemspec version numbers - 64d5481

[Commits](https://github.com/wycats/handlebars.js/compare/v2.0.0-beta.1...v2.0.0)

## v2.0.0-beta.1 - August 26th, 2014
- [#787](https://github.com/wycats/handlebars.js/pull/787) - Remove whitespace surrounding standalone statements ([@kpdecker](https://api.github.com/users/kpdecker))
- [#827](https://github.com/wycats/handlebars.js/issues/827) - Render false literal as “false” ([@scoot557](https://api.github.com/users/scoot557))
- [#767](https://github.com/wycats/handlebars.js/issues/767) - Subexpressions bug with hash and context ([@evensoul](https://api.github.com/users/evensoul))
- Changes to 0/undefined handling
  - [#731](https://github.com/wycats/handlebars.js/pull/731) - Strange behavior for {{#foo}} {{bar}} {{/foo}} when foo is 0 ([@kpdecker](https://api.github.com/users/kpdecker))
  - [#820](https://github.com/wycats/handlebars.js/issues/820) - strange behavior for {{foo.bar}} when foo is 0 or null or false ([@zordius](https://api.github.com/users/zordius))
  - [#837](https://github.com/wycats/handlebars.js/issues/837) - Strange input for custom helper ( foo.bar == false when foo is undefined ) ([@zordius](https://api.github.com/users/zordius))
- [#819](https://github.com/wycats/handlebars.js/pull/819) - Implement recursive field lookup ([@kpdecker](https://api.github.com/users/kpdecker))
- [#764](https://github.com/wycats/handlebars.js/issues/764) - This reference not working for helpers ([@kpdecker](https://api.github.com/users/kpdecker))
- [#773](https://github.com/wycats/handlebars.js/issues/773) - Implicit parameters in {{#each}} introduces a peculiarity in helpers calling convention  ([@Bertrand](https://api.github.com/users/Bertrand))
- [#783](https://github.com/wycats/handlebars.js/issues/783) - helperMissing and consistency for different expression types ([@ErisDS](https://api.github.com/users/ErisDS))
- [#795](https://github.com/wycats/handlebars.js/pull/795) - Turn the precompile script into a wrapper around a module. ([@jwietelmann](https://api.github.com/users/jwietelmann))
- [#823](https://github.com/wycats/handlebars.js/pull/823) - Support inverse sections on the with helper ([@dan-manges](https://api.github.com/users/dan-manges))
- [#834](https://github.com/wycats/handlebars.js/pull/834) - Refactor blocks, programs and inverses ([@mmun](https://api.github.com/users/mmun))
- [#852](https://github.com/wycats/handlebars.js/issues/852) - {{foo~}} space control behavior is different from older version ([@zordius](https://api.github.com/users/zordius))
- [#835](https://github.com/wycats/handlebars.js/issues/835) - Templates overwritten if file is loaded twice

- Expose escapeExpression on the root object - 980c38c
- Remove nested function eval in blockHelperMissing - 6f22ec1
- Fix compiler program de-duping - 9e3f824

Compatibility notes:
- The default build now outputs a generic UMD wrapper. This should be transparent change but may cause issues in some environments.
- Runtime compatibility breaks in both directions. Ensure that both compiler and client are upgraded to 2.0.0-beta.1 or higher at the same time.
  - `programWithDepth` has been removed an instead an array of context values is passed to fields needing depth lookups.
- `false` values are now printed to output rather than silently dropped
- Lines containing only block statements and whitespace are now removed. This matches the Mustache spec but may cause issues with code that expects whitespace to exist but would not otherwise.
- Partials that are standalone will now indent their rendered content
- `AST.ProgramNode`'s signature has changed. 
- Numerious methods/features removed from psuedo-API classes
  - `JavaScriptCompiler.register`
  - `JavaScriptCompiler.replaceStack` no longer supports non-inline replace
  - `Compiler.disassemble`
  - `DECLARE` opcode
  - `strip` opcode
  - `lookup` opcode
  - Content nodes may have their `string` values mutated over time. `original` field provides the unmodified value.
- Removed unused `Handlebars.registerHelper` `inverse` parameter
- `each` helper requires iterator parameter

[Commits](https://github.com/wycats/handlebars.js/compare/v2.0.0-alpha.4...v2.0.0-beta.1)

## v2.0.0-alpha.4 - May 19th, 2014
- Expose setup wrappers for compiled templates - 3638874

[Commits](https://github.com/wycats/handlebars.js/compare/v2.0.0-alpha.3...v2.0.0-alpha.4)

## v2.0.0-alpha.3 - May 19th, 2014
- [#797](https://github.com/wycats/handlebars.js/pull/797) - Pass full helper ID to helperMissing when options are provided ([@tomdale](https://api.github.com/users/tomdale))
- [#793](https://github.com/wycats/handlebars.js/pull/793) - Ensure isHelper is coerced to a boolean ([@mmun](https://api.github.com/users/mmun))
- Refactor template init logic - 085e5e1

[Commits](https://github.com/wycats/handlebars.js/compare/v2.0.0-alpha.2...v2.0.0-alpha.3)

## v2.0.0-alpha.2 - March 6th, 2014
- [#756](https://github.com/wycats/handlebars.js/pull/756) - fix bug in IE<=8 (no Array::map), closes #751 ([@jenseng](https://api.github.com/users/jenseng))
- [#749](https://github.com/wycats/handlebars.js/pull/749) - properly handle multiple subexpressions in the same hash, fixes #748 ([@jenseng](https://api.github.com/users/jenseng))
- [#743](https://github.com/wycats/handlebars.js/issues/743) - subexpression confusion/problem? ([@waynedpj](https://api.github.com/users/waynedpj))
- [#746](https://github.com/wycats/handlebars.js/issues/746) - [CLI] support `handlebars --version` ([@apfelbox](https://api.github.com/users/apfelbox))
- [#747](https://github.com/wycats/handlebars.js/pull/747) - updated grunt-saucelabs, failing tests revealed ([@Jonahss](https://api.github.com/users/Jonahss))
- Make JSON a requirement for the compiler. - 058c0fb
- Temporarily kill the AWS publish CI step - 8347ee2

Compatibility notes:
- A JSON polyfill is required to run the compiler under IE8 and below. It's recommended that the precompiler be used in lieu of running the compiler on these legacy environments.

[Commits](https://github.com/wycats/handlebars.js/compare/v2.0.0-alpha.1...v2.0.0-alpha.2)

## v2.0.0-alpha.1 - February 10th, 2014
- [#182](https://github.com/wycats/handlebars.js/pull/182) - Allow passing hash parameters to partials ([@kpdecker](https://api.github.com/users/kpdecker))
- [#392](https://github.com/wycats/handlebars.js/pull/392) - Access to root context in partials and helpers ([@kpdecker](https://api.github.com/users/kpdecker))
- [#472](https://github.com/wycats/handlebars.js/issues/472) - Helpers cannot have decimal parameters ([@kayleg](https://api.github.com/users/kayleg))
- [#569](https://github.com/wycats/handlebars.js/pull/569) - Unable to lookup array values using @index ([@kpdecker](https://api.github.com/users/kpdecker))
- [#491](https://github.com/wycats/handlebars.js/pull/491) - For nested helpers: get the @ variables of the outer helper from the inner one ([@kpdecker](https://api.github.com/users/kpdecker))
- [#669](https://github.com/wycats/handlebars.js/issues/669) - Ability to unregister a helper ([@dbachrach](https://api.github.com/users/dbachrach))
- [#730](https://github.com/wycats/handlebars.js/pull/730) - Raw block helpers ([@kpdecker](https://api.github.com/users/kpdecker))
- [#634](https://github.com/wycats/handlebars.js/pull/634) - It would be great to have the helper name passed to `blockHelperMissing` ([@kpdecker](https://api.github.com/users/kpdecker))
- [#729](https://github.com/wycats/handlebars.js/pull/729) - Convert template spec to object literal ([@kpdecker](https://api.github.com/users/kpdecker))

- [#658](https://github.com/wycats/handlebars.js/issues/658) - Depthed helpers do not work after an upgrade from 1.0.0 ([@xibxor](https://api.github.com/users/xibxor))
- [#671](https://github.com/wycats/handlebars.js/issues/671) - Crashes on no-parameter {{#each}} ([@stepancheg](https://api.github.com/users/stepancheg))
- [#689](https://github.com/wycats/handlebars.js/issues/689) - broken template precompilation ([@AAS](https://api.github.com/users/AAS))
- [#698](https://github.com/wycats/handlebars.js/pull/698) - Fix parser generation under windows ([@osiris43](https://api.github.com/users/osiris43))
- [#699](https://github.com/wycats/handlebars.js/issues/699) - @DATA not compiles to invalid JS in stringParams mode ([@kpdecker](https://api.github.com/users/kpdecker))
- [#705](https://github.com/wycats/handlebars.js/issues/705) - 1.3.0 can not be wrapped in an IIFE ([@craigteegarden](https://api.github.com/users/craigteegarden))
- [#706](https://github.com/wycats/handlebars.js/pull/706) - README: Use with helper instead of relying on blockHelperMissing ([@scottgonzalez](https://api.github.com/users/scottgonzalez))

- [#700](https://github.com/wycats/handlebars.js/pull/700) - Remove redundant conditions ([@blakeembrey](https://api.github.com/users/blakeembrey))
- [#704](https://github.com/wycats/handlebars.js/pull/704) - JavaScript Compiler Cleanup ([@blakeembrey](https://api.github.com/users/blakeembrey))

Compatibility notes:
- `helperMissing` helper no longer has the indexed name argument. Helper name is now available via `options.name`.
- Precompiler output has changed, which breaks compatibility with prior versions of the runtime and precompiled output.
- `JavaScriptCompiler.compilerInfo` now returns generic objects rather than javascript source.
- AST changes
  - INTEGER -> NUMBER
  - Additional PartialNode hash parameter
  - New RawBlockNode type
- Data frames now have a `_parent` field. This is internal but is enumerable for performance/compatibility reasons.

[Commits](https://github.com/wycats/handlebars.js/compare/v1.3.0...v2.0.0-alpha.1)

## v1.3.0 - January 1st, 2014
- [#690](https://github.com/wycats/handlebars.js/pull/690) - Added support for subexpressions ([@machty](https://api.github.com/users/machty))
- [#696](https://github.com/wycats/handlebars.js/pull/696) - Fix for reserved keyword "default" ([@nateirwin](https://api.github.com/users/nateirwin))
- [#692](https://github.com/wycats/handlebars.js/pull/692) - add line numbers to nodes when parsing ([@fivetanley](https://api.github.com/users/fivetanley))
- [#695](https://github.com/wycats/handlebars.js/pull/695) - Pull options out from param setup to allow easier extension ([@blakeembrey](https://api.github.com/users/blakeembrey))
- [#694](https://github.com/wycats/handlebars.js/pull/694) - Make the environment reusable ([@blakeembrey](https://api.github.com/users/blakeembrey))
- [#636](https://github.com/wycats/handlebars.js/issues/636) - Print line and column of errors ([@sgronblo](https://api.github.com/users/sgronblo))
- Use literal for data lookup - c1a93d3
- Add stack handling sanity checks - cd885bf
- Fix stack id "leak" on replaceStack - ddfe457
- Fix incorrect stack pop when replacing literals - f4d337d

[Commits](https://github.com/wycats/handlebars.js/compare/v1.2.1...v1.3.0)

## v1.2.1 - December 26th, 2013
- [#684](https://github.com/wycats/handlebars.js/pull/684) - Allow any number of trailing characters for valid JavaScript variable ([@blakeembrey](https://api.github.com/users/blakeembrey))
- [#686](https://github.com/wycats/handlebars.js/pull/686) - Falsy AMD module names in version 1.2.0 ([@kpdecker](https://api.github.com/users/kpdecker))

[Commits](https://github.com/wycats/handlebars.js/compare/v1.2.0...v1.2.1)

## v1.2.0 - December 23rd, 2013
- [#675](https://github.com/wycats/handlebars.js/issues/675) - Cannot compile empty template for partial ([@erwinw](https://api.github.com/users/erwinw))
- [#677](https://github.com/wycats/handlebars.js/issues/677) - Triple brace statements fail under IE ([@hamzaCM](https://api.github.com/users/hamzaCM))
- [#655](https://github.com/wycats/handlebars.js/issues/655) - Loading Handlebars using bower ([@niki4810](https://api.github.com/users/niki4810))
- [#657](https://github.com/wycats/handlebars.js/pull/657) - Fixes issue where cli compiles non handlebars templates ([@chrishoage](https://api.github.com/users/chrishoage))
- [#681](https://github.com/wycats/handlebars.js/pull/681) - Adds in-browser testing and Saucelabs CI ([@kpdecker](https://api.github.com/users/kpdecker))
- [#661](https://github.com/wycats/handlebars.js/pull/661) - Add @first and @index to #each object iteration ([@cgp](https://api.github.com/users/cgp))
- [#650](https://github.com/wycats/handlebars.js/pull/650) - Handlebars is MIT-licensed ([@thomasboyt](https://api.github.com/users/thomasboyt))
- [#641](https://github.com/wycats/handlebars.js/pull/641) - Document ember testing process ([@kpdecker](https://api.github.com/users/kpdecker))
- [#662](https://github.com/wycats/handlebars.js/issues/662) - handlebars-source 1.1.2 is missing from RubyGems.
- [#656](https://github.com/wycats/handlebars.js/issues/656) - Expose COMPILER_REVISION checks as a hook ([@machty](https://api.github.com/users/machty))
- [#668](https://github.com/wycats/handlebars.js/issues/668) - Consider publishing handlebars-runtime as a separate module on npm ([@dlmanning](https://api.github.com/users/dlmanning))
- [#679](https://github.com/wycats/handlebars.js/issues/679) - Unable to override invokePartial ([@mattbrailsford](https://api.github.com/users/mattbrailsford))
- [#646](https://github.com/wycats/handlebars.js/pull/646) - Fix "\\{{" immediately following "\{{" ([@dmarcotte](https://api.github.com/users/dmarcotte))
- Allow extend to work with non-prototyped objects - eb53f2e
- Add JavascriptCompiler public API tests - 1a751b2
- Add AST test coverage for more complex paths - ddea5be
- Fix handling of boolean escape in MustacheNode - b4968bb

Compatibility notes:
- `@index` and `@first` are now supported for `each` iteration on objects
- `Handlebars.VM.checkRevision` and `Handlebars.JavaScriptCompiler.prototype.compilerInfo` now available to modify the version checking behavior.
- Browserify users may link to the runtime library via `require('handlebars/runtime')`

[Commits](https://github.com/wycats/handlebars.js/compare/v1.1.2...v1.2.0)

## v1.1.2 - November 5th, 2013

- [#645](https://github.com/wycats/handlebars.js/issues/645) - 1.1.1 fails under IE8 ([@kpdecker](https://api.github.com/users/kpdecker))
- [#644](https://github.com/wycats/handlebars.js/issues/644) - Using precompiled templates (AMD mode) with handlebars.runtime 1.1.1 ([@fddima](https://api.github.com/users/fddima))

- Add simple binary utility tests - 96a45a4
- Fix empty string compilation - eea708a

[Commits](https://github.com/wycats/handlebars.js/compare/v1.1.1...v1.1.2)

## v1.1.1 - November 4th, 2013

- [#642](https://github.com/wycats/handlebars.js/issues/642) - handlebars 1.1.0 are broken with nodejs

- Fix release notes link - 17ba258

[Commits](https://github.com/wycats/handlebars.js/compare/v1.1.0...v1.1.1)

## v1.1.0 - November 3rd, 2013

- [#628](https://github.com/wycats/handlebars.js/pull/628) - Convert code to ES6 modules ([@kpdecker](https://api.github.com/users/kpdecker))
- [#336](https://github.com/wycats/handlebars.js/pull/336) - Add whitespace control syntax ([@kpdecker](https://api.github.com/users/kpdecker))
- [#535](https://github.com/wycats/handlebars.js/pull/535) - Fix for probable JIT error under Safari ([@sorentwo](https://api.github.com/users/sorentwo))
- [#483](https://github.com/wycats/handlebars.js/issues/483) - Add first and last @ vars to each helper ([@denniskuczynski](https://api.github.com/users/denniskuczynski))
- [#557](https://github.com/wycats/handlebars.js/pull/557) - `\\{{foo}}` escaping only works in some situations ([@dmarcotte](https://api.github.com/users/dmarcotte))
- [#552](https://github.com/wycats/handlebars.js/pull/552) - Added BOM removal flag. ([@blessenm](https://api.github.com/users/blessenm))
- [#543](https://github.com/wycats/handlebars.js/pull/543) - publish passing master builds to s3 ([@fivetanley](https://api.github.com/users/fivetanley))

- [#608](https://github.com/wycats/handlebars.js/issues/608) - Add `includeZero` flag to `if` conditional
- [#498](https://github.com/wycats/handlebars.js/issues/498) - `Handlebars.compile` fails on empty string although a single blank works fine
- [#599](https://github.com/wycats/handlebars.js/issues/599) - lambda helpers only receive options if used with arguments
- [#592](https://github.com/wycats/handlebars.js/issues/592) - Optimize array and subprogram performance
- [#571](https://github.com/wycats/handlebars.js/issues/571) - uglify upgrade breaks compatibility with older versions of node
- [#587](https://github.com/wycats/handlebars.js/issues/587) - Partial inside partial breaks?


Compatibility notes:
- The project now includes separate artifacts for AMD, CommonJS, and global objects. 
  - AMD: Users may load the bundled `handlebars.amd.js` or `handlebars.runtime.amd.js` files or load individual modules directly. AMD users should also note that the handlebars object is exposed via the `default` field on the imported object. This [gist](https://gist.github.com/wycats/7417be0dc361a69d5916) provides some discussion of possible compatibility shims.
  - CommonJS/Node: Node loading occurs as normal via `require`
  - Globals: The `handlebars.js` and `handlebars.runtime.js` files should behave in the same manner as the v1.0.12 / 1.0.0 release.
- Build artifacts have been removed from the repository. [npm][npm], [components/handlebars.js][components], [cdnjs][cdnjs], or the [builds page][builds-page] should now be used as the source of built artifacts. 
- Context-stored helpers are now always passed the `options` hash. Previously no-argument helpers did not have this argument.


[Commits](https://github.com/wycats/handlebars.js/compare/v1.0.12...v1.1.0)

## v1.0.12 / 1.0.0 - May 31 2013

- [#515](https://github.com/wycats/handlebars.js/issues/515) - Add node require extensions support ([@jjclark1982](https://github.com/jjclark1982))
- [#517](https://github.com/wycats/handlebars.js/issues/517) - Fix amd precompiler output with directories ([@blessenm](https://github.com/blessenm))
- [#433](https://github.com/wycats/handlebars.js/issues/433) - Add support for unicode ids
- [#469](https://github.com/wycats/handlebars.js/issues/469) - Add support for `?` in ids
- [#534](https://github.com/wycats/handlebars.js/issues/534) - Protect from object prototype modifications
- [#519](https://github.com/wycats/handlebars.js/issues/519) - Fix partials with . name ([@jamesgorrie](https://github.com/jamesgorrie))
- [#519](https://github.com/wycats/handlebars.js/issues/519) - Allow ID or strings in partial names
- [#437](https://github.com/wycats/handlebars.js/issues/437) - Require matching brace counts in escaped expressions
- Merge passed partials and helpers with global namespace values
- Add support for complex ids in @data references
- Docs updates

Compatibility notes:
- The parser is now stricter on `{{{`, requiring that the end token be `}}}`. Templates that do not
  follow this convention should add the additional brace value.
- Code that relies on global the namespace being muted when custom helpers or partials are passed will need to explicitly pass an `undefined` value for any helpers that should not be available.
- The compiler version has changed. Precompiled templates with 1.0.12 or higher must use the 1.0.0 or higher runtime.

[Commits](https://github.com/wycats/handlebars.js/compare/v1.0.11...v1.0.12)

## v1.0.11 / 1.0.0-rc4 - May 13 2013

- [#458](https://github.com/wycats/handlebars.js/issues/458) - Fix `./foo` syntax ([@jpfiset](https://github.com/jpfiset))
- [#460](https://github.com/wycats/handlebars.js/issues/460) - Allow `:` in unescaped identifers ([@jpfiset](https://github.com/jpfiset))
- [#471](https://github.com/wycats/handlebars.js/issues/471) - Create release notes (These!)
- [#456](https://github.com/wycats/handlebars.js/issues/456) - Allow escaping of `\\`
- [#211](https://github.com/wycats/handlebars.js/issues/211) - Fix exception in `escapeExpression`
- [#375](https://github.com/wycats/handlebars.js/issues/375) - Escape unicode newlines
- [#461](https://github.com/wycats/handlebars.js/issues/461) - Do not fail when compiling `""`
- [#302](https://github.com/wycats/handlebars.js/issues/302) - Fix sanity check in knownHelpersOnly mode
- [#369](https://github.com/wycats/handlebars.js/issues/369) - Allow registration of multiple helpers and partial by passing definition object
- Add bower package declaration ([@DevinClark](https://github.com/DevinClark))
- Add NuSpec package declaration ([@MikeMayer](https://github.com/MikeMayer))
- Handle empty context in `with` ([@thejohnfreeman](https://github.com/thejohnfreeman))
- Support custom template extensions in CLI ([@matteoagosti](https://github.com/matteoagosti))
- Fix Rhino support ([@broady](https://github.com/broady))
- Include contexts in string mode ([@leshill](https://github.com/leshill))
- Return precompiled scripts when compiling to AMD ([@JamesMaroney](https://github.com/JamesMaroney))
- Docs updates ([@iangreenleaf](https://github.com/iangreenleaf), [@gilesbowkett](https://github.com/gilesbowkett), [@utkarsh2012](https://github.com/utkarsh2012))
- Fix `toString` handling under IE and browserify ([@tommydudebreaux](https://github.com/tommydudebreaux))
- Add program metadata

[Commits](https://github.com/wycats/handlebars.js/compare/v1.0.10...v1.0.11)

## v1.0.10 - Node - Feb 27 2013

- [#428](https://github.com/wycats/handlebars.js/issues/428) - Fix incorrect rendering of nested programs
- Fix exception message ([@tricknotes](https://github.com/tricknotes))
- Added negative number literal support
- Concert library to single IIFE
- Add handlebars-source gemspec ([@machty](https://github.com/machty))

[Commits](https://github.com/wycats/handlebars.js/compare/v1.0.9...v1.0.10)

## v1.0.9 - Node - Feb 15 2013

- Added `Handlebars.create` API in node module for sandboxed instances ([@tommydudebreaux](https://github.com/tommydudebreaux))

[Commits](https://github.com/wycats/handlebars.js/compare/1.0.0-rc.3...v1.0.9)

## 1.0.0-rc3 - Browser - Feb 14 2013

- Prevent use of `this` or `..` in illogical place ([@leshill](https://github.com/leshill))
- Allow AST passing for `parse`/`compile`/`precompile` ([@machty](https://github.com/machty))
- Optimize generated output by inlining statements where possible
- Check compiler version when evaluating templates
- Package browser dist in npm package

[Commits](https://github.com/wycats/handlebars.js/compare/v1.0.8...1.0.0-rc.3)

## Prior Versions

When upgrading from the Handlebars 0.9 series, be aware that the
signature for passing custom helpers or partials to templates has
changed.

Instead of:

```js
template(context, helpers, partials, [data])
```

Use:

```js
template(context, {helpers: helpers, partials: partials, data: data})
```

[builds-page]: http://builds.handlebarsjs.com.s3.amazonaws.com/index.html
[cdnjs]: http://cdnjs.com/libraries/handlebars.js/
[components]: https://github.com/components/handlebars.js
[npm]: https://npmjs.org/package/handlebars

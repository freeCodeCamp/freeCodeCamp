v3.5.4 - March 4, 2018

* 706167b Upgrade: acorn 5.5.0 (#369) (Toru Nagashima)

v3.5.3 - February 2, 2018

* 70f9859 Upgrade: acorn 5.4.0 (#367) (Toru Nagashima)
* cea4823 Chore: Adding .gitattributes file (#366) (Kevin Partington)
* 4160aee Upgrade: acorn v5.3.0 (#365) (Toru Nagashima)

v3.5.2 - November 10, 2017

* 019b70a Fix: Remove blockBindings from docs (fixes #307, fixes #339) (#356) (Jan Pilzer)
* b2016cb Chore: refactoring rest/spread properties (#361) (Toru Nagashima)
* 59c9d06 Chore: upgrade acorn@5.2 (fixes #358) (#360) (Toru Nagashima)
* 06c35c9 Chore: add .npmrc (#359) (Toru Nagashima)

v3.5.1 - September 15, 2017

* 5eb1388 Fix: Fix parsing of async keyword-named object methods (#352) (#353) (Mark Banner)

v3.5.0 - August 5, 2017

* 4d442a1 Update: add initial support for ES2018 (#348) (Teddy Katz)
* d4bdcb6 Fix: Make template token objects adhere to token object structure (#343) (Ian Christian Myers)
* 9ac671a Upgrade: acorn to 5.1.1 (#347) (Teddy Katz)
* 16e1fec Docs: Specify default values of options (fixes #325) (#342) (Jan Pilzer)
* be85b8e Fix: async shorthand properties (fixes #340) (#341) (Toru Nagashima)

v3.4.3 - May 5, 2017

* 343590a Fix: add AwaitExpression to espree.Syntax (fixes #331) (#332) (Teddy Katz)

v3.4.2 - April 21, 2017

* c99e436 Upgrade: eslint to 2.13.1 (#328) (Teddy Katz)
* 628cf3a Fix: don't mutate user-provided configs (fixes #329) (#330) (Teddy Katz)

v3.4.1 - March 31, 2017

* a3ae0bd Upgrade: acorn to 5.0.1 (#327) (Teddy Katz)
* 15ef24f Docs: Add badges (#326) (Jan Pilzer)
* 652990a Fix: raise error for trailing commas after rest properties (fixes #310) (#323) (Teddy Katz)
* 9d86ba5 Upgrade: acorn to ^4.0.11 (#317) (Toru Nagashima)
* a3442b5 Chore: fix tests for Node 6+ (#315) (Teddy Katz)

v3.4.0 - February 2, 2017

* f55fa51 Build: Lock acorn to v4.0.4 (#314) (Kai Cataldo)
* 58f75be Fix:generic error for invalid ecmaVersion(fixes eslint#7405) (#303) (Scott Stern)
* d6b383d Docs: Update license copyright (Nicholas C. Zakas)
* e5df542 Update: To support year in ecmaVersion number (fixes #300) (#301) (Gyandeep Singh)

v3.3.2 - September 29, 2016

* 7d3e2fc Fix: reset `isAsync` flag for each property (fixes #298) (#299) (Toru Nagashima)

v3.3.1 - September 26, 2016

* 80abdce Fix: `}` token followed by template had been lost (fixes #293) (#294) (Toru Nagashima)
* 9810bab Fix: parsing error on `async` as property name. (#295) (Toru Nagashima)

v3.3.0 - September 20, 2016

* 92b04b1 Update: create-test script (fixes #291) (#292) (Jamund Ferguson)

v3.2.0 - September 16, 2016

* 5a37f80 Build: Update release tool (Nicholas C. Zakas)
* 9bbcad8 Update: Upgrade Acorn to support ES2017 (fixes #287) (#290) (Jamund Ferguson)
* 8d9767d Build: Add CI release scripts (Nicholas C. Zakas)

v3.1.7 - July 29, 2016

* 8f6cfbd Build: Add CI release (Nicholas C. Zakas)
* ff15922 Fix: Catch ES2016 invalid syntax (fixes #284) (#285) (Nicholas C. Zakas)

v3.1.6 - June 15, 2016

* a90edc2 Upgrade: acorn 3.2.0 (fixes #279) (#280) (Toru Nagashima)

v3.1.5 - May 27, 2016

* 7df2e4a Fix: Convert ~ and ! prefix tokens to esprima (fixes #274) (#276) (Daniel Tschinder)

v3.1.4 - April 21, 2016

* e044705 Fix: remove extra leading comments at node level (fixes #264) (Kai Cataldo)
* 25c27fb Chore: Remove jQuery copyright from header of each file (Kai Cataldo)
* 10709f0 Chore: Add jQuery Foundation copyright (Nicholas C. Zakas)
* d754b32 Upgrade: Acorn 3.1.0 (fixes #270) (Toru Nagashima)
* 3a90886 Docs: replace a dead link with the correct contributing guide URL (Shinnosuke Watanabe)
* 55184a2 Build: replace optimist with a simple native method (Shinnosuke Watanabe)
* c7e5a13 Fix: Disallow namespaces objects in JSX (fixes #261) (Kai Cataldo)
* 22290b9 Fix: Add test for leading comments (fixes #136) (Kai Cataldo)

v3.1.3 - March 18, 2016

* 98441cb Fix: Fix behavior of ignoring comments within previous nodes (refs #256) (Kai Cataldo)

v3.1.2 - March 14, 2016

* a2b23ca Fix: Ensure 'var let' works (fixes #149) (Nicholas C. Zakas)
* 5783282 Fix: Make obj.await work in modules (fixes #258) (Nicholas C. Zakas)
* d1b4929 Fix: leading comments added from previous node (fixes #256) (Kai Cataldo)

v3.1.1 - February 26, 2016

* 3614e81 Fix: exponentiation operator token (fixes #254) (Nicholas C. Zakas)

v3.1.0 - February 25, 2016

* da35d98 New: Support ecmaVersion 7 (fixes #246) (Nicholas C. Zakas)

v3.0.2 - February 19, 2016

* 0973cda Build: Update release script (Nicholas C. Zakas)
* 106000f Fix: use the plugins feature of acorn (fixes #250) (Toru Nagashima)
* 36d84c7 Build: Add tests (fixes #243) (Nicholas C. Zakas)

v3.0.1 - February 2, 2016

* ecfe4c8 Upgrade: eslint-config-eslint to 3.0.0 (Nicholas C. Zakas)
* ea6261e Fix: Object rest/spread in assign (fixes #247) (Nicholas C. Zakas)
* 7e57ee0 Docs: fix `options.comment` typo (xuezu)
* dd5863e Build: Add prerelease script (Nicholas C. Zakas)
* 0b409ee Upgrade: eslint-release to 0.2.0 (Nicholas C. Zakas)

v3.0.0 - January 20, 2016

* 5ff65f6 Upgrade: Change Esprima version to latest (Nicholas C. Zakas)
* a8badcc Upgrade: eslint-release to 0.1.4 (Nicholas C. Zakas)
* 34d195b Build: Switch to eslint-release (Nicholas C. Zakas)
* a0ddc30 Breaking: Remove binary scripts (Nicholas C. Zakas)
* 02b5284 Build: Fix package.json dependencies (Nicholas C. Zakas)
* b07696f Fix: tests for importing keywords (fixes #225) (Toru Nagashima)
* 2e2808a Build: Add node@5 to CI (fixes #237) (alberto)
* 445c685 Update: Unrecognized license format in package.json (fixes #234) (alberto)
* 61cb5ee Update: Remove duplicated acorn-jsx dep (fixes #232) (alberto)
* df5b71c Upgrade: eslint and eslint-config-eslint (fixes #231) (alberto)
* ef7a06d Fix: lastToken not reset between calls to parse (fixes #229) (alberto)
* cdf8407 New: ecmaFeatures.impliedStrict (fixes: #227) (Nick Evans)

v3.0.0-alpha-2 - December 9, 2015

* 3.0.0-alpha-2 (Nicholas C. Zakas)
* Breaking: move ecmaFeatures into ecmaVersion (fixes #222) (Nicholas C. Zakas)
* New: Export VisitorKeys (fixes #220) (Nicholas C. Zakas)

v3.0.0-alpha-1 - December 1, 2015

* 3.0.0-alpha-1 (Nicholas C. Zakas)
* Fix: parse unicode escapes in identifiers (fixes #181) (Nicholas C. Zakas)
* Fix: Ensur object rest works in destructed arg (fixes #213) (Nicholas C. Zakas)
* Breaking: Switch to Acorn (fixes #200) (Nicholas C. Zakas)
* Update: Add tokens to tests (fixes #203) (Nicholas C. Zakas)
* Docs: Update README (Nicholas C. Zakas)

v2.2.5 - September 15, 2015

* 2.2.5 (Nicholas C. Zakas)
* Fix: Ensure node type is correct for destructured (fixes #195) (Nicholas C. Zakas)

v2.2.4 - August 13, 2015

* 2.2.4 (Nicholas C. Zakas)
* Fix: newlines in arrow functions (fixes #172) (Jamund Ferguson)
* Fix: nested arrow function as default param (fixes #145) (Jamund Ferguson)
* Fix: Rest Params & Arrow Functions (fixes #187) (Jamund Ferguson)
* Fix: trailing commas in import/export (fixes #148) (Jamund Ferguson)
* Build: Added sudo false to Travis to build faster (fixes #177) (KahWee Teng)

v2.2.3 - July 22, 2015

* 2.2.3 (Nicholas C. Zakas)
* Fix: Incorrect error location (fixes #173) (Nicholas C. Zakas)

v2.2.2 - July 16, 2015

* 2.2.2 (Nicholas C. Zakas)
* 2.2.1 (Nicholas C. Zakas)
* Fix: Yield as identifier in arrow func args (fixes #165) (Nicholas C. Zakas)
* Fix: Allow AssignmentExpression in object spread (fixes #167) (Nicholas C. Zakas)

v2.2.1 - July 16, 2015

* 2.2.1 (Nicholas C. Zakas)

v2.2.0 - July 15, 2015

* 2.2.0 (Nicholas C. Zakas)
* New: Add experimental object rest/spread (fixes #163) (Nicholas C. Zakas)
* Fix: npm browserify (fixes #156) (Jason Laster)

v2.1.0 - July 10, 2015

* 2.1.0 (Nicholas C. Zakas)
* Fix: Leading comments for anonymous classes (fixes #155, fixes #158) (Toru Nagashima)
* New: Add newTarget option (fixes #157) (Nicholas C. Zakas)

v2.0.4 - June 26, 2015

* 2.0.4 (Nicholas C. Zakas)
* Docs: added missing `ecmaFeatures.superInFunctions` option from doc (Clément Fiorio)
* Fix: "await" is a future reserved word (fixes #151) (Jose Roberto Vidal)

v2.0.3 - June 2, 2015

* 2.0.3 (Nicholas C. Zakas)
* Fix: Incomplete Switch Statement Hangs (Fixes #146) (Jamund Ferguson)
* Docs: Clarify ecmaFeatures usage (Dan Wolff)

v2.0.2 - April 28, 2015

* 2.0.2 (Nicholas C. Zakas)
* Fix: Allow yield without value as function param (fixes #134) (Nicholas C. Zakas)
* Fix: Allow computed generators in classes (fixes #123) (Nicholas C. Zakas)
* Fix: Don't allow arrow function rest param (fixes #130) (Nicholas C. Zakas)

v2.0.1 - April 11, 2015

* 2.0.1 (Nicholas C. Zakas)
* Fix: Yield should parse without an argument (fixes #121) (Nicholas C. Zakas)

v2.0.0 - April 4, 2015

* 2.0.0 (Nicholas C. Zakas)
* Docs: Update README with latest info (Nicholas C. Zakas)
* Breaking: Use ESTree format for default params (fixes #114) (Nicholas C. Zakas)
* New: Add Super node (fixes #115) (Nicholas C. Zakas)
* Breaking: Switch to RestElement for rest args (fixes #84) (Nicholas C. Zakas)
* Docs: Correct license info on README (fixes #117) (AJ Ortega)
* Breaking: Remove guardedHandlers/handlers from try (fixes #71) (Nicholas C. Zakas)

v1.12.3 - March 28, 2015

* 1.12.3 (Nicholas C. Zakas)
* Fix: Tagged template strings (fixes #110) (Nicholas C. Zakas)

v1.12.2 - March 21, 2015

* 1.12.2 (Nicholas C. Zakas)
* Fix: Destructured arg for catch (fixes #105) (Nicholas C. Zakas)

v1.12.1 - March 21, 2015

* 1.12.1 (Nicholas C. Zakas)
* Fix: Disallow octals in template strings (fixes #96) (Nicholas C. Zakas)
* Fix: Template string parsing (fixes #95) (Nicholas C. Zakas)
* Fix: shorthand properties named get or set (fixes #100) (Brandon Mills)
* Fix: bad error in parsing invalid class setter (fixes #98) (Marsup)

v1.12.0 - March 14, 2015

* 1.12.0 (Nicholas C. Zakas)
* Fix: Update broken tests (Nicholas C. Zakas)
* New: Add sourceType to Program node (fixes #93) (Nicholas C. Zakas)
* Allow spread in more places (fixes #89) (Nicholas C. Zakas)
* Fix: Deeply nested template literals (fixes #86) (Nicholas C. Zakas)
* Fix: Allow super in classes by default (fixes #87) (Nicholas C. Zakas)
* Fix: generator methods in classes (fixes #85) (Jamund Ferguson)
* Remove XJS note from Esprima-FB incompatibilities (Joe Lencioni)

v1.11.0 - March 7, 2015

* 1.11.0 (Nicholas C. Zakas)
* Fix: Don't allow default export class by mistake (fixes #82) (Nicholas C. Zakas)
* Fix: Export default function should be FunctionDeclaration (fixes #81) (Nicholas C. Zakas)
* Fix: Ensure class declarations must have IDs outside of exports (refs #72) (Nicholas C. Zakas)
* Fix: export class expression support (refs #72) (Jamund Ferguson)
* Update: Add tests for sourceType=module (refs #72) (Nicholas C. Zakas)
* Fix: Class name should be id (fixes #78) (Nicholas C. Zakas)
* Fix: disallow import/export in functions (refs #72) (Jamund Ferguson)
* Test: strict mode enforced in modules (refs #72) (Jamund Ferguson)
* New: Add modules feature flag (refs #72) (Nicholas C. Zakas)
* merging upstream and solving conflicts for PR #43 (Caridy Patino)
* New: Add ES6 module support (fixes #35) (Caridy Patino)
* Update: Add TryStatement.handler (fixes #69) (Brandon Mills)
* Fix: Destructured Defaults (fixes #56) (Jamund Ferguson)
* Update: Refactor out comment attachment logic (Nicholas C. Zakas)

v1.10.0 - March 1, 2015

* 1.10.0 (Nicholas C. Zakas)
* New: Support ES6 classes (refs #10) (Nicholas C. Zakas)
* Docs: Update README.md (Jamund Ferguson)

v1.9.1 - February 21, 2015

* 1.9.1 (Nicholas C. Zakas)
* Fix: Allow let/const in switchcase (fixes #54) (Nicholas C. Zakas)

v1.9.0 - February 21, 2015

* 1.9.0 (Nicholas C. Zakas)
* Fix: Extend property method range and loc to include params (fixes #36) (Brandon Mills)
* New: spread operator (refs #10) (Jamund Ferguson)
* Fix: incorrectly parsed arrow fragment (refs #58) (Jamund Ferguson)
* New: Rest Parameter (refs: #10) (Jamund Ferguson)
* New: Destructuring (refs #10) (Jamund Ferguson)

v1.8.1 - February 7, 2015

* 1.8.1 (Nicholas C. Zakas)
* Build: Add Node.js 0.12 testing (Nicholas C. Zakas)
* Fix: Actuall fix tokenization issue with templates (fixes #44) (Nicholas C. Zakas)

v1.8.0 - February 6, 2015

* 1.8.0 (Nicholas C. Zakas)
* New: Support for Arrow Functions (refs #10) (Jamund Ferguson)
* New: Allow super references in functions (refs #10) (Nicholas C. Zakas)
* Update create-test.js (Jamund Ferguson)
* Fix: Tokenization for template strings (fixes #44) (Nicholas C. Zakas)
* New: Allow return in global scope (fixes #46) (Nicholas C. Zakas)

v1.7.1 - January 23, 2015

* 1.7.1 (Nicholas C. Zakas)
* Fix: When ecmaFeatures.forOf is true, check for operater is "undefined" when match keyword is "in" (fixes #39) (Peter Chanthamynavong)

v1.7.0 - January 23, 2015

* 1.7.0 (Nicholas C. Zakas)
* New: Add support for template strings (FredKSchott)
* New: Add support for default parameters (refs #10) (Jamund Ferguson)
* New: Add support for unicode code point escape sequences (FredKSchott)

v1.6.0 - January 10, 2015

* 1.6.0 (Nicholas C. Zakas)
* Update: Make comment attachment tests look at whole AST (Nicholas C. Zakas)
* Docs: Update README to reflect feature flags (Nicholas C. Zakas)
* Docs: Add a couple more FAQs to README (Nicholas C. Zakas)
* New: Add support for duplicate object literal properties (FredKSchott)
* New: Implement generators (refs #10) (Nicholas C. Zakas)

v1.5.0 - December 29, 2014

* 1.5.0 (Nicholas C. Zakas)
* Docs: Update README with compat info (Nicholas C. Zakas)
* Update: Add regex parsing test (Nicholas C. Zakas)
* Update: s/XJS/JSX/g (Nicholas C. Zakas)
* Build: Update release script (Nicholas C. Zakas)
* Update: Move SyntaxTree to ast-node-factory.js (FredKSchott)
* New: Add JSX parsing (fixes #26) (Nicholas C. Zakas)
* Update: Switch location marker logic (fixes #15) (Nicholas C. Zakas)
* 1.4.0 (Nicholas C. Zakas)

v1.4.0 - December 23, 2014

* 1.4.0 (Nicholas C. Zakas)
* Fix: Parsing issues with property methods (fixes #21) (Nicholas C. Zakas)
* New: Add support for shorthand properties (refs #10) (Nicholas C. Zakas)
* New: Add support for object literal method shorthand (refs #10) (Nicholas C. Zakas)
* Fix: Ensure comments are attached for return (fixes #2) (Nicholas C. Zakas)
* Build: Ensure CHANGELOG.md is committed on release (Nicholas C. Zakas)
* 1.3.1 (Nicholas C. Zakas)

v1.3.1 - December 22, 2014

* 1.3.1 (Nicholas C. Zakas)
* Fix: Add all files to npm package (fixes #17) (Nicholas C. Zakas)
* Update: Move Messages to separate file (Nicholas C. Zakas)
* Docs: Removed unnecessary comment (Nicholas C. Zakas)
* 1.3.0 (Nicholas C. Zakas)

v1.3.0 - December 21, 2014

* 1.3.0 (Nicholas C. Zakas)
* Build: Add release scripts (Nicholas C. Zakas)
* New: Add computed object literal properties (refs #10) (Nicholas C. Zakas)
* Build: Fix commands in Makefile.js (Nicholas C. Zakas)
* Docs: Add FAQ to README (Nicholas C. Zakas)
* Fix: Don't allow let/const in for loops (fixes #14) (Nicholas C. Zakas)
* New: Support for-of loops (refs #10) (Nicholas C. Zakas)
* Update: Change .ast.js files to .result.js files (Nicholas C. Zakas)
* New: Support ES6 octal literals (Nicholas C. Zakas)
* New: Ability to parse binary literals (Nicholas C. Zakas)
* Update: More tests for regex u flag (Nicholas C. Zakas)
* Update: Switch to using ecmaFeatures (Nicholas C. Zakas)
* Update: Add comment attachment tests (Nicholas C. Zakas)
* Update README.md (Jamund Ferguson)
* New: Add u and y regex flags (refs #10) (Nicholas C. Zakas)
* Update: Cleanup tests (Nicholas C. Zakas)
* New: Add ecmascript flag (fixes #7) (Nicholas C. Zakas)
* Docs: Update README with build commands (Nicholas C. Zakas)
* Update: Move some things around (Nicholas C. Zakas)
* Update: Read version number from package.json (Nicholas C. Zakas)
* Update: Move AST node types to separate file (Nicholas C. Zakas)
* Update: Remove duplicate file (Nicholas C. Zakas)
* Update: Move token information to a separate file (Nicholas C. Zakas)
* Update: Bring in Makefile.js for linting and browserify (Nicholas C. Zakas)
* Update: Fix ESLint warnings, remove check-version (Nicholas C. Zakas)
* Update: Move Position and SourceLocation to separate file (Nicholas C. Zakas)
* Update: Move syntax checks into separate file (Nicholas C. Zakas)
* Update: Remove UMD format (Nicholas C. Zakas)
* Docs: Update README with more info (Nicholas C. Zakas)
* Update: remove npm-debug.log from tracked files (Brandon Mills)
* Docs: Remove redundant 'features' in readme (Matthias Oßwald)
* Docs: Fix a link to Wikipedia (Ryuichi Okumura)
* Update: Split parsing tests into smaller files (Nicholas C. Zakas)
* Update: Normalize values in tests (Nicholas C. Zakas)
* Update: CommonJSify test file (Nicholas C. Zakas)

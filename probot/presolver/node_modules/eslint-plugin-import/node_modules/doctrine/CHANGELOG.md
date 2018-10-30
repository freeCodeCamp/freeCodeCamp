v1.5.0 - October 13, 2016

* e33c6bb Update: Add support for BooleanLiteralType (#173) (Erik Arvidsson)

v1.4.0 - September 13, 2016

* d7426e5 Update: add ability to parse optional properties in typedefs (refs #5) (#174) (ikokostya)

v1.3.0 - August 22, 2016

* 12c7ad9 Update: Add support for numeric and string literal types (fixes #156) (#172) (Andrew Walter)

v1.2.3 - August 16, 2016

* b96a884 Build: Add CI release script (Nicholas C. Zakas)
* 8d9b3c7 Upgrade: Upgrade esutils to v2.0.2 (fixes #170) (#171) (Emeegeemee)

v1.2.2 - May 19, 2016

* ebe0b08 Fix: Support case insensitive tags (fixes #163) (#164) (alberto)
* 8e6d81e Chore: Remove copyright and license from headers (Nicholas C. Zakas)
* 79035c6 Chore: Include jQuery Foundation copyright (Nicholas C. Zakas)
* 06910a7 Fix: Preserve whitespace in default param string values (fixes #157) (Kai Cataldo)

v1.2.1 - March 29, 2016

* 1f54014 Fix: allow hyphens in names (fixes #116) (Kai Cataldo)
* bbee469 Docs: Add issue template (Nicholas C. Zakas)

v1.2.0 - February 19, 2016

* 18136c5 Build: Cleanup build system (Nicholas C. Zakas)
* b082f85 Update: Add support for slash in namepaths (fixes #100) (Ryan Duffy)
* def53a2 Docs: Fix typo in option lineNumbers (Daniel Tschinder)
* e2cbbc5 Update: Bump isarray to v1.0.0 (Shinnosuke Watanabe)
* ae07aa8 Fix: Allow whitespace in optional param with default value (fixes #141) (chris)

v1.1.0 - January 6, 2016

* Build: Switch to Makefile.js (Nicholas C. Zakas)
* New: support name expression for @this tag (fixes #143) (Tim Schaub)
* Build: Update ESLint settings (Nicholas C. Zakas)

v1.0.0 - December 21, 2015

* New: parse caption tags in examples into separate property. (fixes #131) (Tom MacWright)

v0.7.2 - November 27, 2015

* Fix: Line numbers for some tags (fixes #138) Fixing issue where input was not consumed via advance() but was skipped when parsing tags resulting in sometimes incorrect reported lineNumber. (TEHEK)
* Build: Add missing linefix package (Nicholas C. Zakas)

v0.7.1 - November 13, 2015

* Update: Begin switch to Makefile.js (Nicholas C. Zakas)
* Fix: permit return tag without type (fixes #136) (Tom MacWright)
* Fix: package.json homepage field (Bogdan Chadkin)
* Fix: Parse array default syntax. Fixes #133 (Tom MacWright)
* Fix: Last tag always has \n in the description (fixes #87) (Burak Yigit Kaya)
* Docs: Add changelog (Nicholas C. Zakas)

v0.7.0 - September 21, 2015

* Docs: Update README with new info (fixes #127) (Nicholas C. Zakas)
* Fix: Parsing fix for param with arrays and properties (fixes #111) (Gyandeep Singh)
* Build: Add travis build (fixes #123) (Gyandeep Singh)
* Fix: Parsing of parameter name without a type (fixes #120) (Gyandeep Singh)
* New: added preserveWhitespace option (Aleks Totic)
* New: Add "files" entry to only deploy select files (Rob Loach)
* New: Add support and tests for typedefs. Refs #5 (Tom MacWright)

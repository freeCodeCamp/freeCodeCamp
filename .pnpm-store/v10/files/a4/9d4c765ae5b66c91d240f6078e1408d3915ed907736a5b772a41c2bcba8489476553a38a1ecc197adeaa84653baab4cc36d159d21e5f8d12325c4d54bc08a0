# Release Notes

## v5.2.0

[Commits](https://github.com/kpdecker/jsdiff/compare/v5.1.0...master)

- [#411](https://github.com/kpdecker/jsdiff/pull/411) Big performance improvement. Previously an O(n) array-copying operation inside the innermost loop of jsdiff's base diffing code increased the overall worst-case time complexity of computing a diff from O(n²) to O(n³). This is now fixed, bringing the worst-case time complexity down to what it theoretically should be for a Myers diff implementation.
- [#448](https://github.com/kpdecker/jsdiff/pull/411) Performance improvement. Diagonals whose furthest-reaching D-path would go off the edge of the edit graph are now skipped, rather than being pointlessly considered as called for by the original Myers diff algorithm. This dramatically speeds up computing diffs where the new text just appends or truncates content at the end of the old text.
- [#351](https://github.com/kpdecker/jsdiff/issues/351) Importing from the lib folder - e.g. `require("diff/lib/diff/word.js")` - will work again now. This had been broken for users on the latest version of Node since Node 17.5.0, which changed how Node interprets the `exports` property in jsdiff's `package.json` file.
- [#344](https://github.com/kpdecker/jsdiff/issues/344) `diffLines`, `createTwoFilesPatch`, and other patch-creation methods now take an optional `stripTrailingCr: true` option which causes Windows-style `\r\n` line endings to be replaced with Unix-style `\n` line endings before calculating the diff, just like GNU `diff`'s `--strip-trailing-cr` flag.
- [#451](https://github.com/kpdecker/jsdiff/pull/451) Added `diff.formatPatch`.
- [#450](https://github.com/kpdecker/jsdiff/pull/450) Added `diff.reversePatch`.
- [#478](https://github.com/kpdecker/jsdiff/pull/478) Added `timeout` option.

## v5.1.0

- [#365](https://github.com/kpdecker/jsdiff/issues/365) Allow early termination to limit execution time with degenerate cases

[Commits](https://github.com/kpdecker/jsdiff/compare/v5.0.0...v5.1.0)

## v5.0.0

- Breaking: UMD export renamed from `JsDiff` to `Diff`.
- Breaking: Newlines separated into separate tokens for word diff.
- Breaking: Unified diffs now match ["quirks"](https://www.artima.com/weblogs/viewpost.jsp?thread=164293)

[Commits](https://github.com/kpdecker/jsdiff/compare/v4.0.1...v5.0.0)

## v4.0.1 - January 6th, 2019

- Fix main reference path - b826104

[Commits](https://github.com/kpdecker/jsdiff/compare/v4.0.0...v4.0.1)

## v4.0.0 - January 5th, 2019

- [#94](https://github.com/kpdecker/jsdiff/issues/94) - Missing "No newline at end of file" when comparing two texts that do not end in newlines ([@federicotdn](https://api.github.com/users/federicotdn))
- [#227](https://github.com/kpdecker/jsdiff/issues/227) - Licence
- [#199](https://github.com/kpdecker/jsdiff/issues/199) - Import statement for jsdiff
- [#159](https://github.com/kpdecker/jsdiff/issues/159) - applyPatch affecting wrong line number with with new lines
- [#8](https://github.com/kpdecker/jsdiff/issues/8) - A new state "replace"
- Drop ie9 from karma targets - 79c31bd
- Upgrade deps. Convert from webpack to rollup - 2c1a29c
- Make ()[]"' as word boundaries between each other - f27b899
- jsdiff: Replaced phantomJS by chrome - ec3114e
- Add yarn.lock to .npmignore - 29466d8

Compatibility notes:

- Bower and Component packages no longer supported

[Commits](https://github.com/kpdecker/jsdiff/compare/v3.5.0...v4.0.0)

## v3.5.0 - March 4th, 2018

- Omit redundant slice in join method of diffArrays - 1023590
- Support patches with empty lines - fb0f208
- Accept a custom JSON replacer function for JSON diffing - 69c7f0a
- Optimize parch header parser - 2aec429
- Fix typos - e89c832

[Commits](https://github.com/kpdecker/jsdiff/compare/v3.4.0...v3.5.0)

## v3.4.0 - October 7th, 2017

- [#183](https://github.com/kpdecker/jsdiff/issues/183) - Feature request: ability to specify a custom equality checker for `diffArrays`
- [#173](https://github.com/kpdecker/jsdiff/issues/173) - Bug: diffArrays gives wrong result on array of booleans
- [#158](https://github.com/kpdecker/jsdiff/issues/158) - diffArrays will not compare the empty string in array?
- comparator for custom equality checks - 30e141e
- count oldLines and newLines when there are conflicts - 53bf384
- Fix: diffArrays can compare falsey items - 9e24284
- Docs: Replace grunt with npm test - 00e2f94

[Commits](https://github.com/kpdecker/jsdiff/compare/v3.3.1...v3.4.0)

## v3.3.1 - September 3rd, 2017

- [#141](https://github.com/kpdecker/jsdiff/issues/141) - Cannot apply patch because my file delimiter is "/r/n" instead of "/n"
- [#192](https://github.com/kpdecker/jsdiff/pull/192) - Fix: Bad merge when adding new files (#189)
- correct spelling mistake - 21fa478

[Commits](https://github.com/kpdecker/jsdiff/compare/v3.3.0...v3.3.1)

## v3.3.0 - July 5th, 2017

- [#114](https://github.com/kpdecker/jsdiff/issues/114) - /patch/merge not exported
- Gracefully accept invalid newStart in hunks, same as patch(1) does. - d8a3635
- Use regex rather than starts/ends with for parsePatch - 6cab62c
- Add browser flag - e64f674
- refactor: simplified code a bit more - 8f8e0f2
- refactor: simplified code a bit - b094a6f
- fix: some corrections re ignoreCase option - 3c78fd0
- ignoreCase option - 3cbfbb5
- Sanitize filename while parsing patches - 2fe8129
- Added better installation methods - aced50b
- Simple export of functionality - 8690f31

[Commits](https://github.com/kpdecker/jsdiff/compare/v3.2.0...v3.3.0)

## v3.2.0 - December 26th, 2016

- [#156](https://github.com/kpdecker/jsdiff/pull/156) - Add `undefinedReplacement` option to `diffJson` ([@ewnd9](https://api.github.com/users/ewnd9))
- [#154](https://github.com/kpdecker/jsdiff/pull/154) - Add `examples` and `images` to `.npmignore`. ([@wtgtybhertgeghgtwtg](https://api.github.com/users/wtgtybhertgeghgtwtg))
- [#153](https://github.com/kpdecker/jsdiff/pull/153) - feat(structuredPatch): Pass options to diffLines ([@Kiougar](https://api.github.com/users/Kiougar))

[Commits](https://github.com/kpdecker/jsdiff/compare/v3.1.0...v3.2.0)

## v3.1.0 - November 27th, 2016

- [#146](https://github.com/kpdecker/jsdiff/pull/146) - JsDiff.diffArrays to compare arrays ([@wvanderdeijl](https://api.github.com/users/wvanderdeijl))
- [#144](https://github.com/kpdecker/jsdiff/pull/144) - Split file using all possible line delimiter instead of hard-coded "/n" and join lines back using the original delimiters ([@soulbeing](https://api.github.com/users/soulbeing))

[Commits](https://github.com/kpdecker/jsdiff/compare/v3.0.1...v3.1.0)

## v3.0.1 - October 9th, 2016

- [#139](https://github.com/kpdecker/jsdiff/pull/139) - Make README.md look nicer in npmjs.com ([@takenspc](https://api.github.com/users/takenspc))
- [#135](https://github.com/kpdecker/jsdiff/issues/135) - parsePatch combines patches from multiple files into a single IUniDiff when there is no "Index" line ([@ramya-rao-a](https://api.github.com/users/ramya-rao-a))
- [#124](https://github.com/kpdecker/jsdiff/issues/124) - IE7/IE8 failure since 2.0.0 ([@boneskull](https://api.github.com/users/boneskull))

[Commits](https://github.com/kpdecker/jsdiff/compare/v3.0.0...v3.0.1)

## v3.0.0 - August 23rd, 2016

- [#130](https://github.com/kpdecker/jsdiff/pull/130) - Add callback argument to applyPatches `patched` option ([@piranna](https://api.github.com/users/piranna))
- [#120](https://github.com/kpdecker/jsdiff/pull/120) - Correctly handle file names containing spaces ([@adius](https://api.github.com/users/adius))
- [#119](https://github.com/kpdecker/jsdiff/pull/119) - Do single reflow ([@wifiextender](https://api.github.com/users/wifiextender))
- [#117](https://github.com/kpdecker/jsdiff/pull/117) - Make more usable with long strings. ([@abnbgist](https://api.github.com/users/abnbgist))

Compatibility notes:

- applyPatches patch callback now is async and requires the callback be called to continue operation

[Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.3...v3.0.0)

## v2.2.3 - May 31st, 2016

- [#118](https://github.com/kpdecker/jsdiff/pull/118) - Add a fix for applying 0-length destination patches ([@chaaz](https://api.github.com/users/chaaz))
- [#115](https://github.com/kpdecker/jsdiff/pull/115) - Fixed grammar in README ([@krizalys](https://api.github.com/users/krizalys))
- [#113](https://github.com/kpdecker/jsdiff/pull/113) - fix typo ([@vmazare](https://api.github.com/users/vmazare))

[Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.2...v2.2.3)

## v2.2.2 - March 13th, 2016

- [#102](https://github.com/kpdecker/jsdiff/issues/102) - diffJson with dates, returns empty curly braces ([@dr-dimitru](https://api.github.com/users/dr-dimitru))
- [#97](https://github.com/kpdecker/jsdiff/issues/97) - Whitespaces & diffWords ([@faiwer](https://api.github.com/users/faiwer))
- [#92](https://github.com/kpdecker/jsdiff/pull/92) - Fixes typo in the readme ([@bg451](https://api.github.com/users/bg451))

[Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.1...v2.2.2)

## v2.2.1 - November 12th, 2015

- [#89](https://github.com/kpdecker/jsdiff/pull/89) - add in display selector to readme ([@FranDias](https://api.github.com/users/FranDias))
- [#88](https://github.com/kpdecker/jsdiff/pull/88) - Split diffs based on file headers instead of 'Index:' metadata ([@piranna](https://api.github.com/users/piranna))

[Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.0...v2.2.1)

## v2.2.0 - October 29th, 2015

- [#80](https://github.com/kpdecker/jsdiff/pull/80) - Fix a typo: applyPath -> applyPatch ([@fluxxu](https://api.github.com/users/fluxxu))
- [#83](https://github.com/kpdecker/jsdiff/pull/83) - Add basic fuzzy matching to applyPatch ([@piranna](https://github.com/piranna))
  [Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.0...v2.2.0)

## v2.2.0 - October 29th, 2015

- [#80](https://github.com/kpdecker/jsdiff/pull/80) - Fix a typo: applyPath -> applyPatch ([@fluxxu](https://api.github.com/users/fluxxu))
- [#83](https://github.com/kpdecker/jsdiff/pull/83) - Add basic fuzzy matching to applyPatch ([@piranna](https://github.com/piranna))
  [Commits](https://github.com/kpdecker/jsdiff/compare/v2.1.3...v2.2.0)

## v2.1.3 - September 30th, 2015

- [#78](https://github.com/kpdecker/jsdiff/pull/78) - fix: error throwing when apply patch to empty string ([@21paradox](https://api.github.com/users/21paradox))

[Commits](https://github.com/kpdecker/jsdiff/compare/v2.1.2...v2.1.3)

## v2.1.2 - September 23rd, 2015

- [#76](https://github.com/kpdecker/jsdiff/issues/76) - diff headers give error ([@piranna](https://api.github.com/users/piranna))

[Commits](https://github.com/kpdecker/jsdiff/compare/v2.1.1...v2.1.2)

## v2.1.1 - September 9th, 2015

- [#73](https://github.com/kpdecker/jsdiff/issues/73) - Is applyPatches() exposed in the API? ([@davidparsson](https://api.github.com/users/davidparsson))

[Commits](https://github.com/kpdecker/jsdiff/compare/v2.1.0...v2.1.1)

## v2.1.0 - August 27th, 2015

- [#72](https://github.com/kpdecker/jsdiff/issues/72) - Consider using options object API for flag permutations ([@kpdecker](https://api.github.com/users/kpdecker))
- [#70](https://github.com/kpdecker/jsdiff/issues/70) - diffWords treats \n at the end as significant whitespace ([@nesQuick](https://api.github.com/users/nesQuick))
- [#69](https://github.com/kpdecker/jsdiff/issues/69) - Missing count ([@wfalkwallace](https://api.github.com/users/wfalkwallace))
- [#68](https://github.com/kpdecker/jsdiff/issues/68) - diffLines seems broken ([@wfalkwallace](https://api.github.com/users/wfalkwallace))
- [#60](https://github.com/kpdecker/jsdiff/issues/60) - Support multiple diff hunks ([@piranna](https://api.github.com/users/piranna))
- [#54](https://github.com/kpdecker/jsdiff/issues/54) - Feature Request: 3-way merge ([@mog422](https://api.github.com/users/mog422))
- [#42](https://github.com/kpdecker/jsdiff/issues/42) - Fuzz factor for applyPatch ([@stuartpb](https://api.github.com/users/stuartpb))
- Move whitespace ignore out of equals method - 542063c
- Include source maps in babel output - 7f7ab21
- Merge diff/line and diff/patch implementations - 1597705
- Drop map utility method - 1ddc939
- Documentation for parsePatch and applyPatches - 27c4b77

Compatibility notes:

- The undocumented ignoreWhitespace flag has been removed from the Diff equality check directly. This implementation may be copied to diff utilities if dependencies existed on this functionality.

[Commits](https://github.com/kpdecker/jsdiff/compare/v2.0.2...v2.1.0)

## v2.0.2 - August 8th, 2015

- [#67](https://github.com/kpdecker/jsdiff/issues/67) - cannot require from npm module in node ([@commenthol](https://api.github.com/users/commenthol))
- Convert to chai since we don’t support IE8 - a96bbad

[Commits](https://github.com/kpdecker/jsdiff/compare/v2.0.1...v2.0.2)

## v2.0.1 - August 7th, 2015

- Add release build at proper step - 57542fd

[Commits](https://github.com/kpdecker/jsdiff/compare/v2.0.0...v2.0.1)

## v2.0.0 - August 7th, 2015

- [#66](https://github.com/kpdecker/jsdiff/issues/66) - Add karma and sauce tests ([@kpdecker](https://api.github.com/users/kpdecker))
- [#65](https://github.com/kpdecker/jsdiff/issues/65) - Create component repository for bower ([@kpdecker](https://api.github.com/users/kpdecker))
- [#64](https://github.com/kpdecker/jsdiff/issues/64) - Automatically call removeEmpty for all tokenizer calls ([@kpdecker](https://api.github.com/users/kpdecker))
- [#62](https://github.com/kpdecker/jsdiff/pull/62) - Allow access to structured object representation of patch data ([@bittrance](https://api.github.com/users/bittrance))
- [#61](https://github.com/kpdecker/jsdiff/pull/61) - Use svg instead of png to get better image quality ([@PeterDaveHello](https://api.github.com/users/PeterDaveHello))
- [#29](https://github.com/kpdecker/jsdiff/issues/29) - word tokenizer works only for 7 bit ascii ([@plasmagunman](https://api.github.com/users/plasmagunman))

Compatibility notes:

- `this.removeEmpty` is now called automatically for all instances. If this is not desired, this may be overridden on a per instance basis.
- The library has been refactored to use some ES6 features. The external APIs should remain the same, but bower projects that directly referenced the repository will now have to point to the [components/jsdiff](https://github.com/components/jsdiff) repository.

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.4.0...v2.0.0)

## v1.4.0 - May 6th, 2015

- [#57](https://github.com/kpdecker/jsdiff/issues/57) - createPatch -> applyPatch failed. ([@mog422](https://api.github.com/users/mog422))
- [#56](https://github.com/kpdecker/jsdiff/pull/56) - Two files patch ([@rgeissert](https://api.github.com/users/rgeissert))
- [#14](https://github.com/kpdecker/jsdiff/issues/14) - Flip added and removed order? ([@jakesandlund](https://api.github.com/users/jakesandlund))

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.3.2...v1.4.0)

## v1.3.2 - March 30th, 2015

- [#53](https://github.com/kpdecker/jsdiff/pull/53) - Updated README.MD with Bower installation instructions ([@ofbriggs](https://api.github.com/users/ofbriggs))
- [#49](https://github.com/kpdecker/jsdiff/issues/49) - Cannot read property 'oldlines' of undefined ([@nwtn](https://api.github.com/users/nwtn))
- [#44](https://github.com/kpdecker/jsdiff/issues/44) - invalid-meta jsdiff is missing "main" entry in bower.json

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.3.1...v1.3.2)

## v1.3.1 - March 13th, 2015

- [#52](https://github.com/kpdecker/jsdiff/pull/52) - Fix for #51 Wrong result of JsDiff.diffLines ([@felicienfrancois](https://api.github.com/users/felicienfrancois))

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.3.0...v1.3.1)

## v1.3.0 - March 2nd, 2015

- [#47](https://github.com/kpdecker/jsdiff/pull/47) - Adding Diff Trimmed Lines ([@JamesGould123](https://api.github.com/users/JamesGould123))

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.2.2...v1.3.0)

## v1.2.2 - January 26th, 2015

- [#45](https://github.com/kpdecker/jsdiff/pull/45) - Fix AMD module loading ([@pedrocarrico](https://api.github.com/users/pedrocarrico))
- [#43](https://github.com/kpdecker/jsdiff/pull/43) - added a bower file ([@nbrustein](https://api.github.com/users/nbrustein))

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.2.1...v1.2.2)

## v1.2.1 - December 26th, 2014

- [#41](https://github.com/kpdecker/jsdiff/pull/41) - change condition of using node export system. ([@ironhee](https://api.github.com/users/ironhee))

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.2.0...v1.2.1)

## v1.2.0 - November 29th, 2014

- [#37](https://github.com/kpdecker/jsdiff/pull/37) - Add support for sentences. ([@vmariano](https://api.github.com/users/vmariano))
- [#28](https://github.com/kpdecker/jsdiff/pull/28) - Implemented diffJson ([@papandreou](https://api.github.com/users/papandreou))
- [#27](https://github.com/kpdecker/jsdiff/issues/27) - Slow to execute over diffs with a large number of changes ([@termi](https://api.github.com/users/termi))
- Allow for optional async diffing - 19385b9
- Fix diffChars implementation - eaa44ed

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.1.0...v1.2.0)

## v1.1.0 - November 25th, 2014

- [#33](https://github.com/kpdecker/jsdiff/pull/33) - AMD and global exports ([@ovcharik](https://api.github.com/users/ovcharik))
- [#32](https://github.com/kpdecker/jsdiff/pull/32) - Add support for component ([@vmariano](https://api.github.com/users/vmariano))
- [#31](https://github.com/kpdecker/jsdiff/pull/31) - Don't rely on Array.prototype.map ([@papandreou](https://api.github.com/users/papandreou))

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.0.8...v1.1.0)

## v1.0.8 - December 22nd, 2013

- [#24](https://github.com/kpdecker/jsdiff/pull/24) - Handle windows newlines on non windows machines. ([@benogle](https://api.github.com/users/benogle))
- [#23](https://github.com/kpdecker/jsdiff/pull/23) - Prettied up the API formatting a little, and added basic node and web examples ([@airportyh](https://api.github.com/users/airportyh))

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.0.7...v1.0.8)

## v1.0.7 - September 11th, 2013

- [#22](https://github.com/kpdecker/jsdiff/pull/22) - Added variant of WordDiff that doesn't ignore whitespace differences ([@papandreou](https://api.github.com/users/papandreou)

- Add 0.10 to travis tests - 243a526

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.0.6...v1.0.7)

## v1.0.6 - August 30th, 2013

- [#19](https://github.com/kpdecker/jsdiff/pull/19) - Explicitly define contents of npm package ([@sindresorhus](https://api.github.com/users/sindresorhus)

[Commits](https://github.com/kpdecker/jsdiff/compare/v1.0.5...v1.0.6)

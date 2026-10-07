## 4.2.0 (November 26, 2020)

- Trim Custom Property values when possible (#393)
- Fixed removing unit for zero-length dimentions in `min()`, `max()` and `clamp()` functions (#426)
- Fixed crash on bad value in TRBL declaration value (#412)

## 4.1.1 (November 15, 2020)

- Fixed build setup to exclude full `mdn/data` that reduced the lib size:
    * dist/csso.js: 794.5Kb -> 255.2Kb
    * dist/csso.min.js: 394.4Kb -> 194.2Kb
    * package size: 237.8 kB -> 156.1 kB
    * package unpacked size: 1.3 MB -> 586.8 kB

## 4.1.0 (October 27, 2020)

- Bumped [CSSTree](https://github.com/csstree/csstree) to `^1.0.0`
- Fixed wrongly merging of TRBL values when one of them contains `var()` (#420)
- Fixed wrongly merging of pseudo class and element with the same name, e.g. `:-ms-input-placeholder` and `::-ms-input-placeholder` (#383, #416)
- Fixed wrongly merging of `overflow` fallback (#415)

## 4.0.3 (March 24, 2020)

- Prevented percent sign removal in `flex`/`-ms-flex` (#410)
- Fixed restructuring optimisation in some cases (@charlessuh & @chsuh, #358, #411)
- Bumped dependencies (@AviVahl, #409)

## 4.0.2 (October 28, 2019)

- Fixed clean stage to avoid exceptions when source has unparsed or bad parts (#380)
- Fixed wrong percentage sign removal for zero values (#395)

## 4.0.1 (October 22, 2019)

- Bumped CSSTree to [`1.0.0-alpha.37`](https://github.com/csstree/csstree/releases/tag/v1.0.0-alpha.37) to avoid source map generation inconsistency across Node.js versions

## 4.0.0 (October 21, 2019)

- Dropped support for Node.js < 8
- Refreshed dev dependencies and scripts
- Bumped [CSSTree](https://github.com/csstree/csstree) to `1.0.0-alpha.36` (#399)
- Changed bundle files: `dist/csso.js` and `dist/csso.min.js` instead single `dist/csso-browser.js` (min version)
- Expose `compress()` as `syntax.compress()`

## 3.5.1 (June 7, 2018)

- Bumped [CSSTree](https://github.com/csstree/csstree) to `1.0.0-alpha.29` (fixes some issues)

## 3.5.0 (January 14, 2018)

- Migrated to [CSSTree](https://github.com/csstree/csstree) `1.0.0-alpha.27`

## 3.4.0 (November 3, 2017)

- Added percent sign removal for zero percentages for some properties that is safe (@RubaXa, #286)
- Removed unit removal for zero values in `-ms-flex` due it breaks flex in IE10/11 (#362)
- Improved performance of selectors comparison (@smelukov, #343)

## 3.3.1 (October 17, 2017)

- Fixed merge of `position` declarations when `sticky` fallback is using (@gruzzilkin, #356)

## 3.3.0 (October 12, 2017)

- Migrated to [CSSTree](https://github.com/csstree/csstree) `1.0.0-alpha25`
    - Changed AST format (see [CSSTree change log](https://github.com/csstree/csstree/blob/master/HISTORY.md) for details)
    - Fixed performance issue when generate CSS with source map (quadratic increase in time depending on the size of the CSS)

## 3.2.0 (September 10, 2017)

- Fixed named color compression to apply only when an identifier is guaranteed to be a color
- Added lifting of `@keyframes` to the beginning of style sheet (chunk), but after `@charset` and `@import` rules
- Added removal of `@keyframes`, `@media` and `@supports` with no prelude
- Added removal of duplicate `@keyframes` (#202)
- Added new option `forceMediaMerge` to force media rules merging. It's unsafe in general, but works fine in many cases. Use it on your own risk (#350)
- Bumped `CSSTree` to `1.0.0-alpha23`

## 3.1.1 (April 25, 2017)

- Fixed crash on a number processing when it used not in a list (#335)

## 3.1.0 (April 24, 2017)

- Implemented optimisation for `none` keyword in `border` and `outline` properties (@zoobestik, #41)
- Implemented replacing `rgba(x, x, x, 0)` to `transparent`
- Fixed plus sign omitting for numbers following identifier, hex color, number or unicode range, since it can change the meaning of CSS (e.g. `calc(1px+2px)` has been optimized to `calc(1px2px)` before, now it stays the same)
- Improved usage filtering for nested selectors (i.e. for `:nth-*()`, `:has()`, `:matches` and other pseudos)
- Implemented `blacklist` filtering in usage (#334, see [Black list filtering](https://github.com/css/csso#black-list-filtering))
- Improved white space removing, now white spaces are removing in the beginning and at the ending of sequences, and between stylesheet and block nodes
- Bumped `CSSTree` to `1.0.0-alpha19`

## 3.0.1 (March 14, 2017)

- Fixed declaration merging when declaration contains an `!important`

## 3.0.0 (March 13, 2017)

- Migrated to [CSSTree](https://github.com/csstree/csstree) as AST backend and exposed its API behind `syntax` property
- Extracted CLI into standalone package [css/csso-cli](https://github.com/css/csso-cli)

## 2.3.1 (January 6, 2017)

- Added `\0` IE hack support (#320)

## 2.3.0 (October 25, 2016)

- Added `beforeCompress` and `afterCompress` options support (#316)
- Fixed crash on empty argument in function (#317)

## 2.2.1 (July 25, 2016)

- Fixed shorthand optimisation issue when value has a color value or something unknown (#311)
- Fixed `cursor` broken fallback (#306)

## 2.2.0 (June 23, 2016)

- Implement AST cloning by adding `clone()` [function](https://github.com/css/csso#cloneast) and `clone` [option](https://github.com/css/csso#compressast-options) for `compress()` function (#296)
- Fix parse and translate attribute selector with flags but w/o operator (i.e. `[attrName i]`)
- Don't merge rules with flagged attribute selectors with others (#291)
- Take in account functions when merge TRBL-properties (#297, thanks to @ArturAralin)
- Improve partial merge (#304)
- Tweak scanner, reduce code deoptimizations and other small improvements

## 2.1.1 (May 11, 2016)

- Fix wrong declaration with `\9` hack merge (#295)

## 2.1.0 (May 8, 2016)

- New option `comments` to specify what comments to left: `exclamation`, `first-exclamation` and `none`
- Add `offset` to CSS parse error details
- Fix token `offset` computation

## 2.0.0 (April 5, 2016)

- No more `gonzales` AST format and related code
- `minify()` and `minifyBlock()` is always return an object as result now (i.e. `{ css: String, map: SourceMapGenerator or null }`)
- `parse()`
    - Returns AST in new format (so called `internal`)
    - Dynamic scanner implemented
    - New AST format + dynamic scanner = performance boost and less memory consumption
    - No more `context` argument, context should be specified via `options`
    - Supported contexts now: `stylesheet`, `atrule`, `atruleExpression`, `ruleset`, `selector`, `simpleSelector`, `block`, `declaration` and `value` 
    - Drop `needPositions` option, `positions` option should be used instead
    - Drop `needInfo` option, `info` object is attaching to nodes when some information is requested by `options`
    - `options` should be an object, otherwise it treats as empty object
- `compress()`
    - No more AST converting (performance boost and less memory consumption)
    - Drop `outputAst` option
    - Returns an object as result instead of AST (i.e. `{ ast: Object }`)
- Drop methods: `justDoIt()`, `stringify()`, `cleanInfo()`

## 1.8.1 (March 30, 2016)

- Don't remove spaces after function/braces/urls since unsafe (#289)

## 1.8.0 (March 24, 2016)

- Usage data support:
    - Filter rulesets by tag names, class names and ids white lists.
    - More aggressive ruleset moving using class name scopes information.
    - New CLI option `--usage` to pass usage data file.
- Improve initial ruleset merge
    - Change order of ruleset processing, now it's left to right. Previously unmerged rulesets may prevent lookup and other rulesets merge.
    - Difference in pseudo signature just prevents ruleset merging, but don't stop lookup.
    - Simplify block comparison (performance).
- New method `csso.minifyBlock()` for css block compression (e.g. `style` attribute content).
- Ruleset merge improvement: at-rules with block (like `@media` or `@supports`) now can be skipped during ruleset merge lookup if doesn't contain something prevents it.
- FIX: Add negation (`:not()`) to pseudo signature to avoid unsafe merge (old browsers doesn't support it).
- FIX: Check nested parts of value when compute compatibility. It fixes unsafe property merging.

## 1.7.1 (March 16, 2016)

- pass block mode to tokenizer for correct parsing of declarations properties with `//` hack
- fix wrongly `@import` and `@charset` removal on double exclamation comment

## 1.7.0 (March 10, 2016)

- support for [CSS Custom Properties](https://www.w3.org/TR/css-variables/) (#279)
- rework RTBL properties merge – better merge for values with special units and don't merge values with CSS-wide keywords (#255)
- remove redundant universal selectors (#178)
- take in account `!important` when check for property overriding (#280)
- don't merge `text-align` declarations with some values (#281)
- add spaces around `/deep/` combinator on translate, since it together with universal selector can produce a comment
- better keyword and property name resolving (tolerant to hacks and so on)
- integration improvements
    - compression log function could be customized by `logger` option for `compress()` and `minify()`
    - make possible to set initial line and column for parser

## 1.6.4 (March 1, 2016)

- `npm` publish issue (#276)

## 1.6.3 (February 29, 2016)

- add `file` to generated source map since other tools can relay on it in source map transform chain

## 1.6.2 (February 29, 2016)

- tweak some parse error messages and their positions
- fix `:not()` parsing and selector groups in `:not()` is supported now (#215)
- `needPosition` parser option is deprecated, `positions` option should be used instead (`needPosition` is used still if `positions` option omitted)
- expose internal AST API as `csso.internal.*`
- `minify()` adds `sourcesContent` by default when source map is generated
- bring back support for node.js `0.10` until major release (#275)

## 1.6.1 (February 28, 2016)

- fix exception on zero length dimension compress outside declaration (#273)

## 1.6.0 (February 27, 2016)

- **source maps support**
- parser remake:
    - various parsing issues fixed
    - fix unicode sequence processing in ident (#191)
    - support for flags in attribute selector (#270)
    - position (line and column) of parse error (#109)
    - 4x performance boost, less memory consumption
- compressor refactoring
    - internal AST is using doubly linked lists (with safe transformation support during iteration) instead of arrays
    - rename `restructuring` to `restructure` option for `minify()`/`compress()` (`restructuring` is alias for `restructure` now, with lower priority)
    - unquote urls when possible (#141, #60)
- setup code coverage and a number of related fixes
- add eslint to check unused things

## 1.5.4 (January 27, 2016)

- one more fix (in `restructRuleset` this time) with merge of rulesets when a ruleset with same specificity places between them (#264)
- disable partial merge of rulesets in `@keyframes` rulesets (until sure it's correct)

## 1.5.3 (January 25, 2016)

- don't override display values with different browser support (#259)
- fix publish issue (one of modules leak in development state)

## 1.5.2 (January 24, 2016)

- don't merge rulesets if between them a ruleset with same specificity (#264)

## 1.5.1 (January 14, 2016)

- ensure `-` is not used as an identifier in attribute selectors (thanks to @mathiasbynens)
- fix broken `justDoIt()` function
- various small fixes

## 1.5.0 (January 14, 2016)

### Parser

- attach minus to number

### Compressor

- split code base into small modules and related refactoring
- introduce internal AST format for compressor (`gonzales`→`internal` and `internal`→`gonzales` convertors, walkers, translator)
- various optimizations: no snapshots, using caches and indexes
- sort selectors, merge selectors in alphabet order
- compute selector's specificity
- better ruleset restructuring, improve compression of partially equal blocks
- better ruleset merge – not only closest but also disjoined by other rulesets when safe
- join `@media` with same query
- `outputAst` – new option to specify output AST format (`gonzales` by default for backward compatibility)
- remove quotes surrounding attribute values in attribute selectors when possible (#73)
- replace `from`→`0%` and `100%`→`to` at `@keyframes` (#205)
- prevent partial merge of rulesets at `@keyframes` (#80, #197)

### API

- walker for `gonzales` AST was implemented

### CLI

- new option `--stat` (output stat in `stderr`)
- new optional parameter `level` for `--debug` option

## 1.4.4 (December 10, 2015)

- prevent removal of spaces after braces that before identifier that breaking at-rules expressions (#258)

## 1.4.3 (December 4, 2015)

- fix unicode-range parsing that cause to wrong function detection (#250)

## 1.4.2 (November 9, 2015)

- allow spaces between `progid:` and rest part of value for IE's `filter` property as `autoprefixer` generates this kind of code (#249)
- fixes for Windows:
  - correct processing new lines
  - normalize file content in test suite
- fixes to work in strict mode (#252)
- init compressor dictionaries for every css block (#248, #251)
- bump uglify-js version

## 1.4.1 (October 20, 2015)

- allow merge for `display` property (#167, #244)
- more accurate `rect` (`clip` property value) merge
- fix typo when specifying options in cli (thanks to @Taritsyn)
- fix safe unit values merge with keyword values (#244)
- fix wrong descendant combinator removal (#246)
- build browser version on `prepublish` (thanks to @silentroach)
- parser: store whitespaces as single token (performance and reduce memory consumption)
- rearrange compress tests layout

## 1.4 (October 16, 2015)

Bringing project back to life. Changed files structure, cleaned up and refactored most of sources.

### Common

- single code base (no more `src` folder)
- build browser version with `browserify` (no more `make`, and `web` folder), browser version is available at `dist/csso-browser.js`
- main file is `lib/index.js` now
- minimal `node.js` version is `0.12` now
- restrict file list to publish on npm (no more useless folders and files in package)
- add `jscs` to control code style
- automate `gh-pages` update
- util functions reworked
- translator reworked
- test suite reworked
- compressor refactored
- initial parser refactoring

### API

- new method `minify(src, options)`, options:
  - `restructuring` – if set to `false`, disable structure optimisations (`true` by default)
  - `debug` - outputs intermediate state of CSS during compression (`false` by default)
- deprecate `justDoIt()` method (use `minify` instead)
- rename `treeToString()` method to `stringify()`
- drop `printTree()` method
- AST node info
  - `column` and `offset` added
  - `ln` renamed to `line`
  - fix line counting across multiple files and input with CR LF (#147)

### CLI

- completely reworked, use [clap](https://github.com/lahmatiy/clap) to parse argv
- add support for input from stdin (#128)
- drop undocumented and obsoleted options `--rule` and `--parser` (suppose nobody use it)
- drop `-off` alias for `--restructure-off` as incorrect (only one letter options should starts with single `-`)
- new option `--debug` that reflecting to `options.debug` for `minify`

### Parsing and optimizations

- keep all exclamation comments (#194)
- add `/deep/` combinator support (#209)
- attribute selector
  - allow colon in attribute name (#237)
  - support for namespaces (#233)
- color
  - support all css/html colors
  - convert `hsla` to `rgba` and `hls` to `rgb`
  - convert `rgba` with 1 as alpha value to `rgb` (#122)
  - interpolate `rgb` and `rgba` percentage values to absolute values
  - replace percentage values in `rgba` for normalized/interpolated values
  - lowercase hex colors and color names (#169)
  - fix color minification when hex value replaced for color name (#176)
  - fit rgb values to 0..255 range (#181)
- calc
  - remove spaces for multiple operator in calc
  - don't remove units inside calc (#222)
  - fix wrong white space removal around `+` and `-` (#228)
- don't remove units in `flex` property as it could change value meaning (#200)
- don't merge `\9` hack values (#231)
- merge property values only if they have the same functions (#150, #227)
- don't merge property values with some sort of units (#140, #161)
- fix `!important` issue for `top-right-bottom-left` properties (#189)
- fix `top-right-bottom-left` properties merge (#139, #175)
- support for unicode-range (#148)
- don't crash on ruleset with no selector (#135)
- tolerant to class names that starts with digit (#99, #105)
- fix background compressing (#170)

## 1.3.12 (October 8, 2015)

- Case insensitive check for `!important` (#187)
- Fix problems with using `csso` as cli command on Windows (#83, #136, #142 and others)
- Remove byte order marker (the UTF-8 BOM) from input
- Don't strip space between funktion-funktion and funktion-vhash (#134)
- Don't merge TRBL values having \9 (hack for IE8 in bootstrap) (#159, #214, #230, #231 and others)
- Don't strip units off dimensions of non-length (#226, #229 and others)

## 1.3.7 (February 11, 2013)

- Gonzales 1.0.7.

## 1.3.6 (November 26, 2012)

- Gonzales 1.0.6.

## 1.3.5 (October 28, 2012)

- Gonzales 1.0.5.
- Protecting copyright notices in CSS: https://github.com/css/csso/issues/92
- Zero CSS throws an error: https://github.com/css/csso/issues/96
- Don't minify the second `0s` in Firefox for animations: https://github.com/css/csso/issues/100
- Japan manual
- BEM ready documentation

## 1.3.4 (October 10, 2012)

- @page inside @media Causes Error: https://github.com/css/csso/issues/90

## 1.3.3 (October 9, 2012)

- CSSO 1.3.2 compresses ".t-1" and ".t-01" as identical classes: https://github.com/css/csso/issues/88

## 1.3.2 (October 8, 2012)

- filter + important breaks CSSO v1.3.1: https://github.com/css/csso/issues/87

## 1.3.1 (October 8, 2012)

- "filter" IE property breaks CSSO v1.3.0: https://github.com/css/csso/issues/86

## 1.3.0 (October 4, 2012)

- PeCode CSS parser replaced by Gonzales CSS parser

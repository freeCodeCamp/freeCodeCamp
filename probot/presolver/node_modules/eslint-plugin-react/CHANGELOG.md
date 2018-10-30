# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](http://keepachangelog.com).

## [6.10.3] - 2017-03-20
### Fixed
* Revert [#1057][] due to issues with [`jsx-indent`][] ([#1117][])

[6.10.3]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.10.2...v6.10.3

## [6.10.2] - 2017-03-19
### Fixed
* Fix [`jsx-indent`][] indentation calculation with nested JSX ([#1117][])

[6.10.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.10.1...v6.10.2
[#1117]: https://github.com/yannickcr/eslint-plugin-react/issues/1117

## [6.10.1] - 2017-03-19
### Fixed
* Fix [`jsx-indent`][] auto fix with tabs ([#1057][] @kentcdodds @webOS101)
* Fix [`jsx-indent`][] crash ([#1061][] @iancmyers)
* Fix [`void-dom-elements-no-children`][] crash and fix it to only checks for a createElement call from
React ([#1073][] @jomasti)
* Fix component detection that caused a false positive in [`no-multi-comp`][] ([#1088][] @benstepp)

[6.10.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.10.0...v6.10.1
[#1057]: https://github.com/yannickcr/eslint-plugin-react/issues/1057
[#1061]: https://github.com/yannickcr/eslint-plugin-react/issues/1061
[#1073]: https://github.com/yannickcr/eslint-plugin-react/issues/1073
[#1088]: https://github.com/yannickcr/eslint-plugin-react/issues/1088

## [6.10.0] - 2017-02-16
### Added
* Add [`forbid-foreign-prop-types`][] rule ([#696][] @iancmyers)
* Add [`void-dom-elements-no-children`][] rule ([#709][] @lencioni)
* Add [`forbid-elements`][] rule ([#887][] @kentor)
* Add `noSortAlphabetically` option to [`jsx-sort-props`][] ([#541][] [#786][] @markus101)
* Add `when` option to [`jsx-max-props-per-line`][] ([#878][] @kentor)
* Add support for `nextProps` to [`prop-types`][] ([#814][])

### Fixed
* Fix [`require-default-props`][] crash ([#1029][])
* Fix [`require-default-props`][] rule when using Flow type from assignment ([#1043][] @wyze @CarlRosell)
* Fix [`style-prop-object`][] to not warn with explicit `null` or `undefined` ([#812][] @ljharb)
* Fix [`no-unused-prop-types`][] props detection in stateless components ([#885][] @BarryThePenguin)
* Fix [`display-name`] false positive with `document.createElement` ([#996][] @jomasti)
* Fix ESLint 2 compatibility (@ljharb)

### Changed
* Tests improvements (@ljharb)
* Documentation improvements ([#958][] @Jorundur, [#1010][] @amilajack, [#1041][] @EvNaverniouk, [#1050][] @lencioni, [#1062][] @dguo)

[6.10.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.9.0...v6.10.0
[#696]: https://github.com/yannickcr/eslint-plugin-react/issues/696
[#709]: https://github.com/yannickcr/eslint-plugin-react/issues/709
[#887]: https://github.com/yannickcr/eslint-plugin-react/issues/887
[#541]: https://github.com/yannickcr/eslint-plugin-react/issues/541
[#786]: https://github.com/yannickcr/eslint-plugin-react/issues/786
[#878]: https://github.com/yannickcr/eslint-plugin-react/issues/878
[#814]: https://github.com/yannickcr/eslint-plugin-react/issues/814
[#1029]: https://github.com/yannickcr/eslint-plugin-react/issues/1029
[#1043]: https://github.com/yannickcr/eslint-plugin-react/issues/1043
[#812]: https://github.com/yannickcr/eslint-plugin-react/issues/812
[#885]: https://github.com/yannickcr/eslint-plugin-react/issues/885
[#996]: https://github.com/yannickcr/eslint-plugin-react/issues/996
[#958]: https://github.com/yannickcr/eslint-plugin-react/pull/958
[#1010]: https://github.com/yannickcr/eslint-plugin-react/pull/1010
[#1041]: https://github.com/yannickcr/eslint-plugin-react/pull/1041
[#1050]: https://github.com/yannickcr/eslint-plugin-react/pull/1050
[#1062]: https://github.com/yannickcr/eslint-plugin-react/pull/1062

## [6.9.0] - 2017-01-08
### Added
* Add support for variable reference to [`sort-prop-types`][] ([#622][])

### Fixed
* Fix Node.js 0.10 support ([#1000][] @ljharb)
* Fix [`prop-types`][] to correctly assign props to components ([#991][])

### Changed
* Documentation improvements ([#995][] @rutsky)

[6.9.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.8.0...v6.9.0
[#622]: https://github.com/yannickcr/eslint-plugin-react/issues/622
[#1000]: https://github.com/yannickcr/eslint-plugin-react/pull/1000
[#991]: https://github.com/yannickcr/eslint-plugin-react/issues/991
[#995]: https://github.com/yannickcr/eslint-plugin-react/pull/995

## [6.8.0] - 2016-12-05
### Added
* Add [`no-array-index-key`][] rule ([#978][] @lencioni)
* Add [`require-default-props`][] rule ([#528][]  @vitorbal)
* Add support for flow variance syntax to [`prop-types`][] ([#961][] @ajhyndman)

### Fixed
* Fix [`jsx-indent`][] with multiline jsx in ternaries ([#966][])
* Fix component detection to ignore async functions ([#989][] @taion)
* Fix [`jsx-curly-spacing`][] autofix to not delete comments ([#648][])
* Fix auto-enabling of `eslint-plugin-react` in exported configurations ([#984][] @jamischarles)

### Changed
* Update dependencies
* Documentation improvements ([#960][] @evilebottnawi, [#973][] @JamesWatling, [#982][] @captbaritone)

[6.8.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.7.1...v6.8.0
[#978]: https://github.com/yannickcr/eslint-plugin-react/pull/978
[#528]: https://github.com/yannickcr/eslint-plugin-react/issues/528
[#961]: https://github.com/yannickcr/eslint-plugin-react/issues/961
[#966]: https://github.com/yannickcr/eslint-plugin-react/issues/966
[#989]: https://github.com/yannickcr/eslint-plugin-react/pull/989
[#648]: https://github.com/yannickcr/eslint-plugin-react/issues/648
[#984]: https://github.com/yannickcr/eslint-plugin-react/pull/984
[#960]: https://github.com/yannickcr/eslint-plugin-react/pull/960
[#973]: https://github.com/yannickcr/eslint-plugin-react/pull/973
[#982]: https://github.com/yannickcr/eslint-plugin-react/pull/982

## [6.7.1] - 2016-11-15
### Fixed
* Fix [`jsx-tag-spacing`][] crash when options object isn't passed ([#955][] @daltones)

[6.7.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.7.0...v6.7.1
[#955]: https://github.com/yannickcr/eslint-plugin-react/issues/955

## [6.7.0] - 2016-11-14
### Added
* Add [`jsx-tag-spacing`][] rule ([#693][] @Kovensky)

### Fixed
* Fix [`jsx-indent`][] for parenthesized ternaries ([#945][] @voxpelli)
* Fix [`jsx-indent`][] for multiline ternaries
* Fix [`jsx-indent`][] for arrays in jsx ([#947][])
* Fix [`no-danger-with-children`][] crash with spread on global variables ([#921][])
* Fix [`jsx-wrap-multilines`][] ternaries handling ([#916][])

### Changed
* Enable [`no-unused-prop-types`][] `skipShapeProps` option by default to limit false positive ([#953][] @everdimension)

[6.7.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.6.0...v6.7.0
[#693]: https://github.com/yannickcr/eslint-plugin-react/issues/693
[#945]: https://github.com/yannickcr/eslint-plugin-react/issues/945
[#947]: https://github.com/yannickcr/eslint-plugin-react/issues/947
[#921]: https://github.com/yannickcr/eslint-plugin-react/issues/921
[#916]: https://github.com/yannickcr/eslint-plugin-react/issues/916
[#953]: https://github.com/yannickcr/eslint-plugin-react/pull/953

## [6.6.0] - 2016-11-06
### Added
* Add [`jsx-first-prop-new-line`][] auto fix ([#886][] @snowypowers)

### Fixed
* Fix [`no-unused-prop-types`][] crash with destructured prop-types ([#938][])
* Fix [`jsx-indent`][] in multi-line conditional expressions ([#901][], [#907][])
* Fix [`sort-comp`][] bad error message if 2 methods in the same group must be moved ([#507][])

### Changed
* Documentation improvements ([#941][] @pwmckenna)

[6.6.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.5.0...v6.6.0
[#886]: https://github.com/yannickcr/eslint-plugin-react/pull/886
[#938]: https://github.com/yannickcr/eslint-plugin-react/issues/938
[#901]: https://github.com/yannickcr/eslint-plugin-react/issues/901
[#907]: https://github.com/yannickcr/eslint-plugin-react/issues/907
[#507]: https://github.com/yannickcr/eslint-plugin-react/issues/507
[#941]: https://github.com/yannickcr/eslint-plugin-react/pull/941

## [6.5.0] - 2016-11-01
### Added
* Add tab support to [`jsx-closing-bracket-location`][] auto fixer ([#909][] @arperry)
* Add tab and space support to [`jsx-indent`][] auto fixer ([#608][] @jayphelps)
* Add `multiline-multiprop` option to [`jsx-first-prop-new-line`][] ([#883][] @kentor)

### Fixed
* Fix [`forbid-component-props`][] crash with self reference JSX element ([#839][] @xeodou)
* Fix [`jsx-indent`][] to ignore lines starting by literals ([#900][])
* Fix [`no-set-state`][] to correctly detect `setState` in arrow functions ([#931][])

### Changed
* Update dependencies
* Add `deprecated` metadata to deprecated rules ([#911][] @randycoulman)
* Auto-enable `eslint-plugin-react` in exported configurations ([#925][] @MoOx)
* Documentation improvements ([#910][] @Wilfred, [#932][] @gnarf)

[6.5.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.4.1...v6.5.0
[#909]: https://github.com/yannickcr/eslint-plugin-react/pull/909
[#608]: https://github.com/yannickcr/eslint-plugin-react/pull/608
[#883]: https://github.com/yannickcr/eslint-plugin-react/pull/883
[#839]: https://github.com/yannickcr/eslint-plugin-react/pull/839
[#900]: https://github.com/yannickcr/eslint-plugin-react/issues/900
[#931]: https://github.com/yannickcr/eslint-plugin-react/issues/931
[#911]: https://github.com/yannickcr/eslint-plugin-react/pull/911
[#925]: https://github.com/yannickcr/eslint-plugin-react/pull/925
[#910]: https://github.com/yannickcr/eslint-plugin-react/pull/910
[#932]: https://github.com/yannickcr/eslint-plugin-react/pull/932

## [6.4.1] - 2016-10-10
### Fixed
* Fix [`jsx-indent`][] for arrays ([#897][], [#898][])
* Fix [`jsx-indent`][] to allow multi-line logical expressions with one level of indent ([#896][])

[6.4.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.4.0...v6.4.1
[#897]: https://github.com/yannickcr/eslint-plugin-react/issues/897
[#898]: https://github.com/yannickcr/eslint-plugin-react/issues/898
[#896]: https://github.com/yannickcr/eslint-plugin-react/pull/896

## [6.4.0] - 2016-10-09
### Added
* Add `skipUndeclared` option to [`prop-types`][] ([#846][] @pfhayes)

### Fixed
* Fix [`jsx-no-bind`][] crash on arrow functions ([#854][])
* Fix [`display-name`][] false negative on es6-style method in `React.createClass` ([#852][])
* Fix [`prefer-stateless-function`][] to allow components with `childContextTypes` ([#853][])
* Fix [`no-children-prop`][] spread support ([#862][] @randycoulman)
* Fix [`no-unused-prop-types`][] to ignore validation when spread is used ([#840][])
* Fix [`jsx-closing-bracket-location`][] for multi-line prop ([#889][])
* Fix [`jsx-indent`][] in multi-line function calls ([#895][])
* Fix [`jsx-indent`][] in multi-line logical expressions ([#540][])

### Changed
* Update dependencies
* Documentation improvements ([#860][] @fson, [#863][] @corydolphin, [#830][] @eelyafi, [#876][] @manovotny, [#877][] @gaearon)

[6.4.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.3.0...v6.4.0
[#846]: https://github.com/yannickcr/eslint-plugin-react/pull/846
[#854]: https://github.com/yannickcr/eslint-plugin-react/issues/854
[#852]: https://github.com/yannickcr/eslint-plugin-react/issues/852
[#853]: https://github.com/yannickcr/eslint-plugin-react/issues/853
[#862]: https://github.com/yannickcr/eslint-plugin-react/pull/862
[#840]: https://github.com/yannickcr/eslint-plugin-react/issues/840
[#889]: https://github.com/yannickcr/eslint-plugin-react/issues/889
[#895]: https://github.com/yannickcr/eslint-plugin-react/issues/895
[#540]: https://github.com/yannickcr/eslint-plugin-react/issues/540
[#860]: https://github.com/yannickcr/eslint-plugin-react/pull/860
[#863]: https://github.com/yannickcr/eslint-plugin-react/pull/863
[#830]: https://github.com/yannickcr/eslint-plugin-react/pull/830
[#876]: https://github.com/yannickcr/eslint-plugin-react/pull/876
[#877]: https://github.com/yannickcr/eslint-plugin-react/pull/877

## [6.3.0] - 2016-09-20
### Added
* Add [`no-children-prop`][] rule ([#720][] @benstepp)
* Add [`no-unescaped-entities`][] rule ([#681][] @pfhayes)
* Add JSXExpressionContainer support to [`jsx-indent`][] rule ([#838][] @eelyafi)

### Fixed
* Fix [`style-prop-object`][] crash ([#834][])
* Fix [`style-prop-object`][] false positive on computed properties ([#820][])
* Fix [`style-prop-object`][] to deal with null and spread props that can't be resolved ([#809][] [#812][] @petersendidit)

[6.3.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.2.2...v6.3.0
[#720]: https://github.com/yannickcr/eslint-plugin-react/issues/720
[#681]: https://github.com/yannickcr/eslint-plugin-react/pull/681
[#838]: https://github.com/yannickcr/eslint-plugin-react/pull/838
[#834]: https://github.com/yannickcr/eslint-plugin-react/issues/834
[#820]: https://github.com/yannickcr/eslint-plugin-react/issues/820
[#809]: https://github.com/yannickcr/eslint-plugin-react/issues/809
[#812]: https://github.com/yannickcr/eslint-plugin-react/issues/812

## [6.2.2] - 2016-09-15
### Fixed
* Fix [`no-unused-prop-types`][] crash ([#825][] @EvNaverniouk)
* Fix [`jsx-no-target-blank`][] crash ([#821][])

[6.2.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.2.1...v6.2.2
[#821]: https://github.com/yannickcr/eslint-plugin-react/issues/821
[#825]: https://github.com/yannickcr/eslint-plugin-react/pull/825

## [6.2.1] - 2016-09-13
### Fixed
* Fix false positive in [`no-unused-prop-types`][] ([#792][] @EvNaverniouk)
* Fix [`jsx-no-target-blank`][] to target only anchor elements ([#793][] @aduth)
* Fix [`jsx-no-target-blank`][] to be case insensitive [#796][] @dmnd)
* Fix [`jsx-uses-vars`][] shadowed variables handling ([#799][])

### Changed
* Update dependencies
* Documentation improvements (@ljharb, [#794][] @dougshamoo, [#813][] @AndiDog, [#815][] @chris-vaszauskas)

[6.2.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.2.0...v6.2.1
[#792]: https://github.com/yannickcr/eslint-plugin-react/pull/792
[#793]: https://github.com/yannickcr/eslint-plugin-react/pull/793
[#794]: https://github.com/yannickcr/eslint-plugin-react/pull/794
[#796]: https://github.com/yannickcr/eslint-plugin-react/pull/796
[#799]: https://github.com/yannickcr/eslint-plugin-react/issues/799
[#813]: https://github.com/yannickcr/eslint-plugin-react/pull/813
[#815]: https://github.com/yannickcr/eslint-plugin-react/pull/815

## [6.2.0] - 2016-08-28
### Added
* Add [`no-unused-prop-types`][] rule ([#226][] @EvNaverniouk)
* Add [`style-prop-object`][] rule ([#715][] @petersendidit)
* Add auto fix for [`self-closing-comp`][] ([#770][] @pl12133)
* Add support for `typeAnnotations` in [`sort-comp`][] ([#235][] @dozoisch)
* Add support for `PureComponent` in [`prefer-stateless-function`][] ([#781][] @tiemevanveen)

### Fixed
* Fix [`jsx-uses-vars`][] to work better with [`prefer-const`](http://eslint.org/docs/rules/prefer-const). You'll need to upgrade to ESLint 3.4.0 to completely fix the compatibility issue ([#716][])
* Fix [`require-render-return`][] crash ([#784][])
* Fix related components detection in [`prop-types`][] ([#735][])
* Fix component detection to ignore functions expression without a parent component

### Changed
* Update dependencies
* Documentation improvements (@lencioni)

[6.2.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.1.2...v6.2.0
[#226]: https://github.com/yannickcr/eslint-plugin-react/issues/226
[#715]: https://github.com/yannickcr/eslint-plugin-react/issues/715
[#770]: https://github.com/yannickcr/eslint-plugin-react/pull/770
[#235]: https://github.com/yannickcr/eslint-plugin-react/issues/235
[#781]: https://github.com/yannickcr/eslint-plugin-react/pull/781
[#716]: https://github.com/yannickcr/eslint-plugin-react/issues/716
[#784]: https://github.com/yannickcr/eslint-plugin-react/issues/784
[#735]: https://github.com/yannickcr/eslint-plugin-react/issues/735

## [6.1.2] - 2016-08-17
### Fixed
* Fix nested spread handling in [`no-danger-with-children`][] ([#771][] @petersendidit)

### Changed
* Documentation improvements

[6.1.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.1.1...v6.1.2
[#771]: https://github.com/yannickcr/eslint-plugin-react/issues/771

## [6.1.1] - 2016-08-16
### Fixed
* Fix [`prop-types`][] on annotated components ([#766][])
* Fix [`no-danger-with-children`][] spread support ([#767][] @petersendidit)

### Changed
* Documentation improvements ([#769][] @daltones)

[6.1.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.1.0...v6.1.1
[#766]: https://github.com/yannickcr/eslint-plugin-react/issues/766
[#767]: https://github.com/yannickcr/eslint-plugin-react/issues/767
[#769]: https://github.com/yannickcr/eslint-plugin-react/pull/769

## [6.1.0] - 2016-08-14
### Added
* Add `React.PureComponent` support ([#737][])
* Add [`forbid-component-props`][] rule ([#314][] @lencioni)
* Add [`no-danger-with-children`][] rule ([#710][] @petersendidit)
* Add pragma for `createClass` factory method ([#725][] @zurawiki)

### Fixed
* Fix Node.js 0.10 support ([#746][])
* Fix [`prop-types`][] on annotated components ([#729][])
* Fix [`require-optimization`][] test for function declaration ([#744][] @Tom910)
* Fix [`jsx-uses-vars`][] to handle nested object properties ([#761][] @yayalice)
* Fix rules metadata

### Changed
* Update dependencies
* Documentation improvements ([#759][] @embrown, [#703][] [#753][] @lencioni, [#739][] @ljharb, [#731][] @wKich, [#745][] @petersendidit, [#659][] @dguo)

[6.1.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v6.0.0...v6.1.0
[#737]: https://github.com/yannickcr/eslint-plugin-react/issues/737
[#710]: https://github.com/yannickcr/eslint-plugin-react/issues/710
[#725]: https://github.com/yannickcr/eslint-plugin-react/pull/725
[#746]: https://github.com/yannickcr/eslint-plugin-react/issues/746
[#729]: https://github.com/yannickcr/eslint-plugin-react/issues/729
[#744]: https://github.com/yannickcr/eslint-plugin-react/pull/744
[#761]: https://github.com/yannickcr/eslint-plugin-react/pull/761
[#759]: https://github.com/yannickcr/eslint-plugin-react/pull/759
[#703]: https://github.com/yannickcr/eslint-plugin-react/pull/703
[#753]: https://github.com/yannickcr/eslint-plugin-react/pull/753
[#739]: https://github.com/yannickcr/eslint-plugin-react/issues/739
[#731]: https://github.com/yannickcr/eslint-plugin-react/pull/731
[#745]: https://github.com/yannickcr/eslint-plugin-react/pull/745
[#659]: https://github.com/yannickcr/eslint-plugin-react/pull/659
[#314]: https://github.com/yannickcr/eslint-plugin-react/pull/314

## [6.0.0] - 2016-08-01
### Added
* Add an `all` shareable configuration with all rules enabled ([#674][] @pfhayes)
* Add [`no-find-dom-node`][] rule ([#678][])
* Add `shorthandLast` option to [`jsx-sort-props`][] ([#391][] @mathieumg)
* Add `allowDecorators` option to [`require-optimization`][] ([#669][] @Tom910)

### Breaking
* Deprecate [`require-extension`][] rule, use the [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) [`extensions`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md) rule instead. [`require-extension`][] still works but will trigger a warning
* Enable `allow-in-func` mode by default in [`no-did-mount-set-state`][] and [`no-did-update-set-state`][] rules ([#702][] @lencioni)
* Enable html tags check by default in `self-closing-comp`
* Remove `pragma` option from `jsx-uses-react`, use the [shared settings](README.md#configuration) to specify a custom pragma ([#700][] @lencioni)
* Remove `react` option from [`no-deprecated`][] rule, use the [shared settings](README.md#configuration) to specify the React version ([#700][] @lencioni)
* Add [`require-render-return`][] rule to recommended rules
* Remove [`no-danger`][] from recommended rules ([#636][] @mjackson)
* Remove [`no-did-mount-set-state`][] and [`no-did-update-set-state`][] from recommended rules ([#596][])
* Remove deprecated [`jsx-sort-prop-types`][] rule, use [`sort-prop-types`][] instead ([#549][] @lencioni)
* Rename [`no-comment-textnodes`][] to [`jsx-no-comment-textnodes`][]. [`no-comment-textnodes`][] still works but will trigger a warning ([#668][] @lencioni)
* Rename [`wrap-multilines`][] to [`jsx-wrap-multilines`][]. [`wrap-multilines`][] still works but will trigger a warning ([#668][] @lencioni)
* Add ESLint as peerDependency ([#657][] @jokeyrhyme)
* Add Node.js 0.10 as minimum required version ([#657][] @jokeyrhyme)

### Fixed
* Fix [`jsx-handler-names`][] incorrectly flagging [`only`][] ([#571][] @lencioni)
* Fix spread props cash in [`jsx-no-target-blank`][] ([#679][] @randycoulman)
* Fix [`require-optimization`][] warning on stateless components ([#687][])
* Fix [`jsx-uses-vars`][] that incorrectly marked some variables as used ([#694][] @lencioni)
* Fix [`no-unknown-property`][] check on SVG attributes ([#718][])
* Fix [`jsx-no-bind`][] reporting errors on render functions that don't return JSX ([#663][] @petersendidit)
* Fix [`jsx-closing-bracket-location`][] autofix when `location` is set to `props-aligned` ([#684][] @pfhayes)
* Fix [`prop-types`][] for destructured arguments being assigned to the parent stateless component in some cases ([#698][])
* Fix [`prop-types`][] for JSX return being assigned to the parent function in some cases ([#504][])
* Fix [`jsx-curly-spacing`][] for reporting on JSX content by mistake ([#671][])
* Fix [`prop-types`][] crash when accessing constructor on props ([#654][])
* Fix [`jsx-filename-extension`][] to not check filenames on text input ([#662][] @ljharb)
* Fix [`jsx-no-comment-textnodes`][] incorrectly catching urls ([#664][] @petersendidit)

### Changed
* Only report [`jsx-filename-extension`][] warning once per file ([#660][] @mathieumg)
* Update SVG and DOM attribute list for `no-unknown-property`
* Update rules to use the new ESLint rule format ([#661][] @petersendidit)
* Update dependencies
* Documentation improvements ([#724][] @lencioni)
* Update Travis CI and AppVeyor CI configurations (@ljharb)

[6.0.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v5.2.2...v6.0.0
[#571]: https://github.com/yannickcr/eslint-plugin-react/issues/571
[#728]: https://github.com/yannickcr/eslint-plugin-react/pull/728
[#679]: https://github.com/yannickcr/eslint-plugin-react/pull/679
[#687]: https://github.com/yannickcr/eslint-plugin-react/issues/687
[#694]: https://github.com/yannickcr/eslint-plugin-react/issues/694
[#718]: https://github.com/yannickcr/eslint-plugin-react/issues/718
[#723]: https://github.com/yannickcr/eslint-plugin-react/pull/723
[#702]: https://github.com/yannickcr/eslint-plugin-react/pull/702
[#700]: https://github.com/yannickcr/eslint-plugin-react/pull/700
[#636]: https://github.com/yannickcr/eslint-plugin-react/pull/636
[#596]: https://github.com/yannickcr/eslint-plugin-react/issues/596
[#661]: https://github.com/yannickcr/eslint-plugin-react/issues/661
[#724]: https://github.com/yannickcr/eslint-plugin-react/pull/724
[#674]: https://github.com/yannickcr/eslint-plugin-react/issues/674
[#678]: https://github.com/yannickcr/eslint-plugin-react/issues/678
[#391]: https://github.com/yannickcr/eslint-plugin-react/issues/391
[#669]: https://github.com/yannickcr/eslint-plugin-react/pull/669
[#663]: https://github.com/yannickcr/eslint-plugin-react/issues/663
[#684]: https://github.com/yannickcr/eslint-plugin-react/pull/684
[#698]: https://github.com/yannickcr/eslint-plugin-react/issues/698
[#504]: https://github.com/yannickcr/eslint-plugin-react/issues/504
[#671]: https://github.com/yannickcr/eslint-plugin-react/issues/671
[#549]: https://github.com/yannickcr/eslint-plugin-react/issues/549
[#668]: https://github.com/yannickcr/eslint-plugin-react/issues/668
[#660]: https://github.com/yannickcr/eslint-plugin-react/pull/660
[#654]: https://github.com/yannickcr/eslint-plugin-react/issues/654
[#662]: https://github.com/yannickcr/eslint-plugin-react/issues/662
[#664]: https://github.com/yannickcr/eslint-plugin-react/issues/664
[#657]: https://github.com/yannickcr/eslint-plugin-react/pull/657

## [5.2.2] - 2016-06-17
### Fixed
* Fix [`jsx-no-bind`][] crash ([#641][])

[5.2.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v5.2.1...v5.2.2
[#641]: https://github.com/yannickcr/eslint-plugin-react/issues/641

## [5.2.1] - 2016-06-17
### Fixed
* Fix [`jsx-pascal-case`][] for namespaced components ([#637][] @evcohen)

[5.2.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v5.2.0...v5.2.1
[#637]: https://github.com/yannickcr/eslint-plugin-react/issues/637

## [5.2.0] - 2016-06-17
### Added
* Add [`require-optimization`][] rule ([#240][] @EvNaverniouk)
* Add [`jsx-filename-extension`][] rule  ([#495][] @lencioni)
* Add [`no-render-return-value`][] rule ([#531][] @iamdustan)
* Add [`no-comment-textnodes`][] rule ([#616][] @benvinegar)
* Add `objectLiterals` option to [`jsx-curly-spacing`][] ([#388][], [#211][] @casesandberg @ljharb)
* Add option to [`self-closing-comp`][] to check html tags ([#572][] @gitim)
* Add `ignore` option to [`no-unknown-property`][] rule ([#631][] @insin)
* Add support for ES7 bind operator to [`jsx-handler-names`][] ([#630][])
* Add support for explicit declaration that class extends React.Component ([#68][] @gausie)

### Fixed
* Fix [`jsx-closing-bracket-location`][] multiline prop support ([#493][] @tuures)
* Fix [`prop-types`][] for props that where not assigned to the right component ([#591][])
* Fix [`display-name`][] when JSON style is used for defining components ([#590][] @gitim)
* Fix [`jsx-no-bind`][] for bind detection in render when assigned to a variable ([#474][] @petersendidit)
* Fix [`jsx-curly-spacing`][] for spread operator ([#606][] @gitim)
* Fix [`sort-comp`][] crash on spread operator ([#624][])
* Fix [`prop-types`][] crash when destructuring props with spread only

### Changed
* Update dependencies
* Add [doctrine](https://github.com/eslint/doctrine) as a dependency ([#68][] @gausie)
* Add [jsx-ast-utils](https://github.com/evcohen/jsx-ast-utils) as a dependency ([#634][] @evcohen)
* Documentation improvements ([#594][] @lencioni, [#598][] @mLuby, [#633][] @appsforartists)

[5.2.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v5.1.1...v5.2.0
[#68]: https://github.com/yannickcr/eslint-plugin-react/issues/68
[#211]: https://github.com/yannickcr/eslint-plugin-react/issues/211
[#240]: https://github.com/yannickcr/eslint-plugin-react/issues/240
[#388]: https://github.com/yannickcr/eslint-plugin-react/issues/388
[#474]: https://github.com/yannickcr/eslint-plugin-react/issues/474
[#493]: https://github.com/yannickcr/eslint-plugin-react/pull/493
[#495]: https://github.com/yannickcr/eslint-plugin-react/issues/495
[#531]: https://github.com/yannickcr/eslint-plugin-react/issues/531
[#572]: https://github.com/yannickcr/eslint-plugin-react/issues/572
[#590]: https://github.com/yannickcr/eslint-plugin-react/issues/590
[#591]: https://github.com/yannickcr/eslint-plugin-react/issues/591
[#594]: https://github.com/yannickcr/eslint-plugin-react/pull/594
[#598]: https://github.com/yannickcr/eslint-plugin-react/pull/598
[#606]: https://github.com/yannickcr/eslint-plugin-react/issues/606
[#616]: https://github.com/yannickcr/eslint-plugin-react/pull/616
[#624]: https://github.com/yannickcr/eslint-plugin-react/issues/624
[#630]: https://github.com/yannickcr/eslint-plugin-react/issues/630
[#631]: https://github.com/yannickcr/eslint-plugin-react/pull/631
[#633]: https://github.com/yannickcr/eslint-plugin-react/pull/633
[#634]: https://github.com/yannickcr/eslint-plugin-react/pull/634

## [5.1.1] - 2016-05-10
### Fixed
* Fix [`require-render-return`][] crash ([#589][])

[5.1.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v5.1.0...v5.1.1
[#589]: https://github.com/yannickcr/eslint-plugin-react/issues/589

## [5.1.0] - 2016-05-10
### Added
* Add [`jsx-no-target-blank`][] rule ([#582][] @Gasparila)
* Add `allowAllCaps` and `ignore` options to [`jsx-pascal-case`][] ([#575][])
* Add class properties support to [`require-render-return`][] ([#564][])

### Fixed
* Fix [`jsx-closing-bracket-location`][] fixer ([#533][] @dtinth)
* Fix [`require-render-return`][] to only check valid render methods ([#563][])
* Fix detection to allow simple `this` usage in fonctional components ([#576][])
* Fix [`forbid-prop-types`][] crash ([#579][])
* Fix comment handling in [`jsx-curly-spacing`][] ([#584][])

### Changed
* Update dependencies
* Documentation improvements (@coryhouse, [#581][] @scurker, [#588][])

[5.1.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v5.0.1...v5.1.0
[#582]: https://github.com/yannickcr/eslint-plugin-react/pull/582
[#575]: https://github.com/yannickcr/eslint-plugin-react/issues/575
[#564]: https://github.com/yannickcr/eslint-plugin-react/issues/564
[#533]: https://github.com/yannickcr/eslint-plugin-react/issues/533
[#563]: https://github.com/yannickcr/eslint-plugin-react/issues/563
[#576]: https://github.com/yannickcr/eslint-plugin-react/issues/576
[#579]: https://github.com/yannickcr/eslint-plugin-react/issues/579
[#584]: https://github.com/yannickcr/eslint-plugin-react/pull/584
[#559]: https://github.com/yannickcr/eslint-plugin-react/pull/559
[#581]: https://github.com/yannickcr/eslint-plugin-react/pull/581
[#588]: https://github.com/yannickcr/eslint-plugin-react/issues/588

## [5.0.1] - 2016-04-18
### Fixed
* Fix [`require-render-return`][] to not check stateless functions ([#550][])

[5.0.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v5.0.0...v5.0.1
[#550]: https://github.com/yannickcr/eslint-plugin-react/issues/550

## [5.0.0] - 2016-04-17
### Added
* Add [`jsx-first-prop-new-line`][] rule ([#410][] @jseminck)

### Breaking
* Update rules for React 15:
  * Add warnings for `LinkedStateMixin`, `ReactPerf.printDOM` and `ReactPerf.getMeasurementsSummaryMap` in `no-deprecated`
  * Allow stateless components to return `null` in [`prefer-stateless-function`][]
  * Remove SVG attributes warnings ([#490][])

If you're still not using React 15 you can keep the old behavior by setting the React version to `0.14` in the [shared settings](README.md#configuration).

### Fixed
* Rewrite [`require-render-return`][] rule ([#542][], [#543][])
* Fix [`prefer-stateless-function`][] crash ([#544][])
* Fix external propTypes handling ([#545][])
* Do not mark inline functions in JSX as components ([#546][])

### Changed
* Update dependencies
* Documentation improvements

[5.0.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v4.3.0...v5.0.0
[#410]: https://github.com/yannickcr/eslint-plugin-react/issues/410
[#490]: https://github.com/yannickcr/eslint-plugin-react/issues/490
[#542]: https://github.com/yannickcr/eslint-plugin-react/issues/542
[#543]: https://github.com/yannickcr/eslint-plugin-react/issues/543
[#544]: https://github.com/yannickcr/eslint-plugin-react/issues/544
[#545]: https://github.com/yannickcr/eslint-plugin-react/issues/545
[#546]: https://github.com/yannickcr/eslint-plugin-react/issues/546

## [4.3.0] - 2016-04-07
### Added
* Add [`require-render-return`][] rule ([#482][] @shmuga)
* Add auto fix for [`jsx-equals-spacing`][] ([#506][] @peet)
* Add auto fix for [`jsx-closing-bracket-location`][] ([#511][] @KevinGrandon)

### Fixed
* Fix [`prefer-stateless-function`][] for conditional JSX ([#516][])
* Fix [`jsx-pascal-case`][] to support single letter component names ([#505][] @dthielman)

### Changed
* Update dependencies
* Documentation improvements ([#509][] @coryhouse, [#526][] @ahoym)

[4.3.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v4.2.3...v4.3.0
[#482]: https://github.com/yannickcr/eslint-plugin-react/issues/482
[#506]: https://github.com/yannickcr/eslint-plugin-react/pull/506
[#511]: https://github.com/yannickcr/eslint-plugin-react/pull/511
[#516]: https://github.com/yannickcr/eslint-plugin-react/issues/516
[#505]: https://github.com/yannickcr/eslint-plugin-react/issues/505
[#509]: https://github.com/yannickcr/eslint-plugin-react/pull/509
[#526]: https://github.com/yannickcr/eslint-plugin-react/pull/526

## [4.2.3] - 2016-03-15
### Fixed
* Fix class properties retrieval in [`prefer-stateless-function`][] ([#499][])

[4.2.3]: https://github.com/yannickcr/eslint-plugin-react/compare/v4.2.2...v4.2.3
[#499]: https://github.com/yannickcr/eslint-plugin-react/issues/499

## [4.2.2] - 2016-03-14
### Fixed
* Rewrite [`prefer-stateless-function`][] rule ([#491][])
* Fix [`self-closing-comp`][] to treat non-breaking spaces as content ([#496][])
* Fix detection for direct props in [`prop-types`][] ([#497][])
* Fix annotated function detection in [`prop-types`][] ([#498][])
* Fix `this` usage in [`jsx-no-undef`][] ([#489][])

### Changed
* Update dependencies
* Add shared setting for React version

[4.2.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v4.2.1...v4.2.2
[#491]: https://github.com/yannickcr/eslint-plugin-react/issues/491
[#496]: https://github.com/yannickcr/eslint-plugin-react/issues/496
[#497]: https://github.com/yannickcr/eslint-plugin-react/issues/497
[#498]: https://github.com/yannickcr/eslint-plugin-react/issues/498
[#489]: https://github.com/yannickcr/eslint-plugin-react/issues/489

## [4.2.1] - 2016-03-08
### Fixed
* Fix [`sort-prop-types`][] crash with spread operator ([#478][])
* Fix stateless components detection when conditionally returning JSX ([#486][])
* Fix case where props were not assigned to the right component ([#485][])
* Fix missing `getChildContext` lifecycle method in [`prefer-stateless-function`][] ([#492][])

[4.2.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v4.2.0...v4.2.1
[#478]: https://github.com/yannickcr/eslint-plugin-react/issues/478
[#486]: https://github.com/yannickcr/eslint-plugin-react/issues/486
[#485]: https://github.com/yannickcr/eslint-plugin-react/issues/485
[#492]: https://github.com/yannickcr/eslint-plugin-react/issues/492

## [4.2.0] - 2016-03-05
### Added
* Add support for Flow annotations on stateless components ([#467][])
* Add [`prefer-stateless-function`][] rule ([#214][])
* Add auto fix for [`jsx-indent-props`][] ([#483][] @shioju)

### Fixed
* Fix [`jsx-no-undef`][] crash on objects ([#469][])
* Fix propTypes detection when declared before the component ([#472][])

### Changed
* Update dependencies
* Documentation improvements ([#464][] @alex-tan, [#466][] @awong-dev, [#470][] @Gpx; [#462][] @thaggie)

[4.2.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v4.1.0...v4.2.0
[#467]: https://github.com/yannickcr/eslint-plugin-react/issues/467
[#214]: https://github.com/yannickcr/eslint-plugin-react/issues/214
[#483]: https://github.com/yannickcr/eslint-plugin-react/pull/483
[#469]: https://github.com/yannickcr/eslint-plugin-react/issues/469
[#472]: https://github.com/yannickcr/eslint-plugin-react/issues/472
[#464]: https://github.com/yannickcr/eslint-plugin-react/pull/464
[#466]: https://github.com/yannickcr/eslint-plugin-react/pull/466
[#470]: https://github.com/yannickcr/eslint-plugin-react/pull/470
[#462]: https://github.com/yannickcr/eslint-plugin-react/pull/462

## [4.1.0] - 2016-02-23
### Added
* Add component detection for class expressions
* Add displayName detection for class expressions in [`display-name`][] ([#419][])

### Fixed
* Fix used props detection in components for which we are not confident in [`prop-types`][] ([#420][])
* Fix false positive in [`jsx-key`][] ([#456][] @jkimbo)

### Changed
* Documentation improvements ([#457][] @wyze)

[4.1.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v4.0.0...v4.1.0
[#419]: https://github.com/yannickcr/eslint-plugin-react/issues/419
[#420]: https://github.com/yannickcr/eslint-plugin-react/issues/420
[#456]: https://github.com/yannickcr/eslint-plugin-react/pull/456
[#457]: https://github.com/yannickcr/eslint-plugin-react/pull/457

## [4.0.0] - 2016-02-19
### Added
* Add [`jsx-space-before-closing`][] rule ([#244][] @ryym)
* Add support for destructing in function signatures to [`prop-types`][] ([#354][] @lencioni)

### Breaking
* Add support for static methods to `sort-comp`. Static methods must now be declared first, see [rule documentation](docs/rules/sort-comp.md) ([#128][] @lencioni)
* Add shareable config in place of default configuration. [`jsx-uses-vars`][] is not enabled by default anymore, see [documentation](README.md#recommended-configuration) ([#192][])
* Rename `jsx-sort-prop-types` to [`sort-prop-types`][]. `jsx-sort-prop-types` still works but will trigger a warning ([#87][] @lencioni)
* Remove deprecated `jsx-quotes` rule ([#433][] @lencioni)
* [`display-name`][] now accept the transpiler name by default. You can use the `ignoreTranspilerName` option to get the old behavior, see [rule documentation](docs/rules/display-name.md#ignoretranspilername) ([#440][] @lencioni)

### Fixed
* Only ignore lowercase JSXIdentifier in [`jsx-no-undef`][] ([#435][])
* Fix [`jsx-handler-names`][] regex ([#425][])
* Fix destructured props detection in [`prop-types`][] ([#443][])

### Changed
* Update dependencies ([#426][] @quentin-)
* Documentation improvements ([#414][] @vkrol, [#370][] @tmcw, [#441][] [#429][] @lencioni, [#432][] @note89, [#438][] @jmann6)

[4.0.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.16.1...v4.0.0
[#244]: https://github.com/yannickcr/eslint-plugin-react/issues/244
[#354]: https://github.com/yannickcr/eslint-plugin-react/issues/354
[#128]: https://github.com/yannickcr/eslint-plugin-react/issues/128
[#192]: https://github.com/yannickcr/eslint-plugin-react/issues/192
[#87]: https://github.com/yannickcr/eslint-plugin-react/issues/87
[#440]: https://github.com/yannickcr/eslint-plugin-react/pull/440
[#435]: https://github.com/yannickcr/eslint-plugin-react/issues/435
[#425]: https://github.com/yannickcr/eslint-plugin-react/issues/425
[#443]: https://github.com/yannickcr/eslint-plugin-react/issues/443
[#426]: https://github.com/yannickcr/eslint-plugin-react/pull/426
[#414]: https://github.com/yannickcr/eslint-plugin-react/pull/414
[#370]: https://github.com/yannickcr/eslint-plugin-react/pull/370
[#441]: https://github.com/yannickcr/eslint-plugin-react/pull/441
[#429]: https://github.com/yannickcr/eslint-plugin-react/pull/429
[#432]: https://github.com/yannickcr/eslint-plugin-react/pull/432
[#438]: https://github.com/yannickcr/eslint-plugin-react/pull/438
[#433]: https://github.com/yannickcr/eslint-plugin-react/pull/433

## [3.16.1] - 2016-01-24
### Fixed
* Fix [`jsx-sort-prop-types`][] issue with custom propTypes ([#408][] @alitaheri)

[3.16.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.16.0...v3.16.1
[#408]: https://github.com/yannickcr/eslint-plugin-react/issues/408

## [3.16.0] - 2016-01-24
### Added
* Add [`jsx-equals-spacing`][] rule ([#394][] @ryym)
* Add auto fix for `wrap-multiline`
* Add auto fix for `jsx-boolean-value`
* Add auto fix for `no-unknown-property`
* Add auto fix for [`jsx-curly-spacing`][] ([#407][] @ewendel)
* Add `requiredFirst` option to [`jsx-sort-prop-types`][] ([#392][] @chrislaskey)
* Add `ignoreRefs` option to [`jsx-no-bind`][] ([#330][] @silvenon)

### Fixed
* Ignore `ref` in [`jsx-handler-names`][] (again) ([#396][])

### Changed
* Update dependencies

[3.16.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.15.0...v3.16.0
[#394]: https://github.com/yannickcr/eslint-plugin-react/issues/394
[#407]: https://github.com/yannickcr/eslint-plugin-react/pull/407
[#392]: https://github.com/yannickcr/eslint-plugin-react/pull/392
[#330]: https://github.com/yannickcr/eslint-plugin-react/issues/330
[#396]: https://github.com/yannickcr/eslint-plugin-react/issues/396

## [3.15.0] - 2016-01-12
### Added
* Add support for flow annotations to [`prop-types`][] ([#382][] @phpnode)

### Fixed
* Fix [`prop-types`][] crash when initializing class variable with an empty object ([#383][])
* Fix [`prop-types`][] crash when propTypes are using the spread operator ([#389][])

### Changed
* Improve [`sort-comp`][] error messages ([#372][] @SystemParadox)
* Update dependencies

[3.15.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.14.0...v3.15.0
[#382]: https://github.com/yannickcr/eslint-plugin-react/pull/382
[#383]: https://github.com/yannickcr/eslint-plugin-react/issues/383
[#389]: https://github.com/yannickcr/eslint-plugin-react/issues/389
[#372]: https://github.com/yannickcr/eslint-plugin-react/pull/372

## [3.14.0] - 2016-01-05
### Added
* Add [`jsx-indent`][] rule ([#342][])
* Add shared setting for pragma configuration ([#228][] @NickStefan)

### Fixed
* Fix crash in [`jsx-key`][] ([#380][] @nfcampos)
* Fix crash in [`forbid-prop-types`][] ([#377][] @nfcampos)
* Ignore `ref` in [`jsx-handler-names`][] ([#375][])

### Changed
* Add AppVeyor CI to run tests on a Windows platform
* Add [`sort-comp`][] codemod to [`sort-comp`][] documentation ([#381][] @turadg)

[3.14.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.13.1...v3.14.0
[#342]: https://github.com/yannickcr/eslint-plugin-react/issues/342
[#228]: https://github.com/yannickcr/eslint-plugin-react/issues/228
[#380]: https://github.com/yannickcr/eslint-plugin-react/pull/380
[#377]: https://github.com/yannickcr/eslint-plugin-react/pull/377
[#375]: https://github.com/yannickcr/eslint-plugin-react/issues/375
[#381]: https://github.com/yannickcr/eslint-plugin-react/pull/381

## [3.13.1] - 2015-12-26
### Fixed
* Fix crash in [`jsx-key`][] ([#373][] @lukekarrys)

[3.13.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.13.0...v3.13.1
[#373]: https://github.com/yannickcr/eslint-plugin-react/issues/373

## [3.13.0] - 2015-12-24
### Added
* Add [`no-string-refs`][] rule ([#341][] @Intellicode)
* Add support for propTypes assigned via a variable in [`prop-types`][] ([#355][])

### Fixed
* Fix `never` option in [`prefer-es6-class`][]
* Fix [`jsx-key`][] false-positives ([#320][] @silvenon)

### Changed
* Documentation improvements ([#368][] @lencioni, [#370][] @tmcw, [#371][])
* Update dependencies

[3.13.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.12.0...v3.13.0
[#341]: https://github.com/yannickcr/eslint-plugin-react/issues/341
[#355]: https://github.com/yannickcr/eslint-plugin-react/issues/355
[#320]: https://github.com/yannickcr/eslint-plugin-react/issues/320

[#368]: https://github.com/yannickcr/eslint-plugin-react/pull/368
[#370]: https://github.com/yannickcr/eslint-plugin-react/pull/370
[#371]: https://github.com/yannickcr/eslint-plugin-react/issues/371

## [3.12.0] - 2015-12-20
### Added
* Add [`no-deprecated`][] rule ([#356][] @graue)
* Add [`no-is-mounted`][] rule ([#37][] @lencioni)
* Add `never` option to [`prefer-es6-class`][] rule ([#359][] @pwmckenna)

### Fixed
* Fix [`jsx-pascal-case`][] to stop checking lower cased components ([#329][])
* Fix crash in component detection class ([#364][])

### Changed
* Add link to [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) in Readme
* Update dependencies

[3.12.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.11.3...v3.12.0
[#356]: https://github.com/yannickcr/eslint-plugin-react/pull/356
[#37]: https://github.com/yannickcr/eslint-plugin-react/issues/37
[#359]: https://github.com/yannickcr/eslint-plugin-react/pull/359
[#329]: https://github.com/yannickcr/eslint-plugin-react/issues/329
[#364]: https://github.com/yannickcr/eslint-plugin-react/issues/364

## [3.11.3] - 2015-12-05
### Fixed
* Fix crash in [`prop-types`][] when reassigning props ([#345][])
* Fix [`jsx-handler-names`][] for stateless components ([#346][])

### Changed
* Update [`jsx-handler-names`][] error messages to be less specific ([#348][] @jakemmarsh)

[3.11.3]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.11.2...v3.11.3
[#345]: https://github.com/yannickcr/eslint-plugin-react/issues/345
[#346]: https://github.com/yannickcr/eslint-plugin-react/issues/346
[#348]: https://github.com/yannickcr/eslint-plugin-react/pull/348

## [3.11.2] - 2015-12-01
### Fixed
* Allow numbers in [`jsx-pascal-case`][] ([#339][])
* Fix [`jsx-handler-names`][] crash with arrays ([#340][])

### Changed
* Add `allow-in-func` option to [`no-did-update-set-state`][] documentation

[3.11.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.11.1...v3.11.2
[#339]: https://github.com/yannickcr/eslint-plugin-react/issues/339
[#340]: https://github.com/yannickcr/eslint-plugin-react/issues/340

## [3.11.1] - 2015-11-29
### Fixed
* Fix SVG attributes support for [`no-unknown-property`][] ([#338][])

[3.11.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.11.0...v3.11.1
[#338]: https://github.com/yannickcr/eslint-plugin-react/issues/338

## [3.11.0] - 2015-11-29
### Added
* Add [`jsx-handler-names`][] rule ([#315][] @jakemmarsh)
* Add SVG attributes support to [`no-unknown-property`][] ([#318][])
* Add shorthandFirst option to [`jsx-sort-props`][] ([#336][] @lucasmotta)

### Fixed
* Fix destructured props detection in stateless components ([#326][])
* Fix props validation for nested stateless components ([#331][])
* Fix [`require-extension`][] to ignore extension if it's part of the package name ([#319][])

### Changed
* Allow consecutive uppercase letters in [`jsx-pascal-case`][] ([#328][] @lencioni)
* Update dependencies

[3.11.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.10.0...v3.11.0
[#315]: https://github.com/yannickcr/eslint-plugin-react/pull/315
[#318]: https://github.com/yannickcr/eslint-plugin-react/issues/318
[#336]: https://github.com/yannickcr/eslint-plugin-react/pull/336
[#326]: https://github.com/yannickcr/eslint-plugin-react/issues/326
[#331]: https://github.com/yannickcr/eslint-plugin-react/issues/331
[#319]: https://github.com/yannickcr/eslint-plugin-react/issues/319
[#328]: https://github.com/yannickcr/eslint-plugin-react/issues/328

## [3.10.0] - 2015-11-21
### Added
* Add [`jsx-pascal-case`][] rule ([#306][] @jakemmarsh)

### Fixed
* Fix crash on incomplete class property declaration ([#317][] @dapetcu21)
* Fix crash with ESLint 1.10.0 ([#323][] @lukekarrys)

[3.10.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.9.0...v3.10.0
[#306]: https://github.com/yannickcr/eslint-plugin-react/pull/306
[#317]: https://github.com/yannickcr/eslint-plugin-react/issues/317
[#323]: https://github.com/yannickcr/eslint-plugin-react/issues/323

## [3.9.0] - 2015-11-17
### Added
* Add [`jsx-key`][] rule ([#293][] @benmosher)
* Add `allow-in-func` option to [`no-did-update-set-state`][] ([#300][])
* Add option to only enforce [`jsx-closing-bracket-location`][] rule to one type of tag (nonEmpty or selfClosing) ([#307][])

### Fixed
* Fix crash when destructuring with only the rest spread ([#269][])
* Fix variables detection when searching for related components ([#303][])
* Fix [`no-unknown-property`][] to not check custom elements ([#308][] @zertosh)

### Changed
* Improve [`jsx-closing-bracket-location`][] error message ([#301][] @alopatin)
* Update dependencies

[3.9.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.8.0...v3.9.0
[#293]: https://github.com/yannickcr/eslint-plugin-react/pull/293
[#300]: https://github.com/yannickcr/eslint-plugin-react/issues/300
[#307]: https://github.com/yannickcr/eslint-plugin-react/issues/307
[#269]: https://github.com/yannickcr/eslint-plugin-react/issues/269
[#303]: https://github.com/yannickcr/eslint-plugin-react/issues/303
[#308]: https://github.com/yannickcr/eslint-plugin-react/pull/308
[#301]: https://github.com/yannickcr/eslint-plugin-react/pull/301

## [3.8.0] - 2015-11-07
### Added
* Add ignoreStateless option to [`no-multi-comp`][] ([#290][])

### Fixed
* Fix classes with properties to always be marked as components ([#291][])
* Fix ES5 class detection when using `createClass` by itself ([#297][])
* Fix direct props detection ([#298][])
* Ignore functions containing the keyword `this` during component detection

[3.8.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.7.1...v3.8.0
[#290]: https://github.com/yannickcr/eslint-plugin-react/issues/290
[#291]: https://github.com/yannickcr/eslint-plugin-react/issues/291
[#297]: https://github.com/yannickcr/eslint-plugin-react/issues/297
[#298]: https://github.com/yannickcr/eslint-plugin-react/issues/298

## [3.7.1] - 2015-11-05
### Fixed
* Fix [`sort-comp`][] crash on stateless components ([#285][])
* Fix crash in ES5 components detection ([#286][])
* Fix ES5 components detection from nested functions ([#287][])

[3.7.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.7.0...v3.7.1
[#285]: https://github.com/yannickcr/eslint-plugin-react/issues/285
[#286]: https://github.com/yannickcr/eslint-plugin-react/issues/286
[#287]: https://github.com/yannickcr/eslint-plugin-react/issues/287

## [3.7.0] - 2015-11-05
### Added
* Add [`jsx-no-bind`][] rule ([#184][] @Daniel15)
* Add line-aligned option to [`jsx-closing-bracket-location`][] ([#243][] @alopatin)

### Fixed
* Fix a lot of issues about components detection, mostly related to stateless components ([#264][], [#267][], [#268][], [#276][], [#277][], [#280][])

### Changed
* Update dependencies

[3.7.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.6.3...v3.7.0
[#184]: https://github.com/yannickcr/eslint-plugin-react/issues/184
[#243]: https://github.com/yannickcr/eslint-plugin-react/issues/243
[#264]: https://github.com/yannickcr/eslint-plugin-react/issues/264
[#267]: https://github.com/yannickcr/eslint-plugin-react/issues/267
[#268]: https://github.com/yannickcr/eslint-plugin-react/issues/268
[#276]: https://github.com/yannickcr/eslint-plugin-react/issues/276
[#277]: https://github.com/yannickcr/eslint-plugin-react/issues/277
[#280]: https://github.com/yannickcr/eslint-plugin-react/issues/280

## [3.6.3] - 2015-10-20
### Fixed
* Fix [`display-name`][] for stateless components ([#256][])
* Fix [`prop-types`][] props validation in constructor ([#259][])
* Fix typo in README ([#261][] @chiedojohn)

[3.6.3]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.6.2...v3.6.3
[#256]: https://github.com/yannickcr/eslint-plugin-react/issues/256
[#259]: https://github.com/yannickcr/eslint-plugin-react/issues/259
[#261]: https://github.com/yannickcr/eslint-plugin-react/pull/261

## [3.6.2] - 2015-10-18
### Fixed
* Fix wrong prop-types detection ([#255][])

[3.6.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.6.1...v3.6.2
[#255]: https://github.com/yannickcr/eslint-plugin-react/issues/255

## [3.6.1] - 2015-10-18
### Fixed
* Fix props validation in constructor ([#254][])

[3.6.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.6.0...v3.6.1
[#254]: https://github.com/yannickcr/eslint-plugin-react/issues/254

## [3.6.0] - 2015-10-18
### Added
* Add support for stateless function components to [`display-name`][] and [`prop-types`][] ([#237][])
* Add callbacksLast option to [`jsx-sort-props`][] and [`jsx-sort-prop-types`][] ([#242][] @Daniel15)
* Add [`prefer-es6-class`][] rule ([#247][] @hamiltondanielb)

### Fixed
* Fix [`forbid-prop-types`][] crash with destructured PropTypes ([#230][] @epmatsw)
* Fix [`forbid-prop-types`][] to do not modify AST directly ([#249][] @rhysd)
* Fix [`prop-types`][] crash with empty destructuring ([#251][])
* Fix [`prop-types`][] to not validate computed keys in destructuring ([#236][])

### Changed
* Update dependencies
* Improve components detection ([#233][])
* Documentation improvements ([#248][] @dguo)

[3.6.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.5.1...v3.6.0
[#237]: https://github.com/yannickcr/eslint-plugin-react/issues/237
[#242]: https://github.com/yannickcr/eslint-plugin-react/pull/242
[#247]: https://github.com/yannickcr/eslint-plugin-react/issues/247
[#230]: https://github.com/yannickcr/eslint-plugin-react/issues/230
[#249]: https://github.com/yannickcr/eslint-plugin-react/issues/249
[#251]: https://github.com/yannickcr/eslint-plugin-react/issues/251
[#236]: https://github.com/yannickcr/eslint-plugin-react/issues/236
[#233]: https://github.com/yannickcr/eslint-plugin-react/issues/233
[#248]: https://github.com/yannickcr/eslint-plugin-react/pull/248

## [3.5.1] - 2015-10-01
### Fixed
* Fix [`no-direct-mutation-state`][] to report only in React components ([#229][])
* Fix [`forbid-prop-types`][] for arrayOf and instanceOf ([#230][])

### Changed
* Documentation improvements ([#232][] @edge)

[3.5.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.5.0...v3.5.1
[#229]: https://github.com/yannickcr/eslint-plugin-react/issues/229
[#230]: https://github.com/yannickcr/eslint-plugin-react/issues/230
[#232]: https://github.com/yannickcr/eslint-plugin-react/pull/232

## [3.5.0] - 2015-09-28
### Added
* Add [`no-direct-mutation-state`][] rule ([#133][], [#201][] @petersendidit)
* Add [`forbid-prop-types`][] rule ([#215][] @pwmckenna)

### Fixed
* Fix no-did-mount/update-set-state rules, these rules were not working on ES6 classes

### Changed
* Update dependencies
* Documentation improvements ([#222][] @Andersos)

[3.5.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.4.2...v3.5.0
[#133]: https://github.com/yannickcr/eslint-plugin-react/issues/133
[#201]: https://github.com/yannickcr/eslint-plugin-react/issues/201
[#215]: https://github.com/yannickcr/eslint-plugin-react/issues/215
[#222]: https://github.com/yannickcr/eslint-plugin-react/pull/222

## [3.4.2] - 2015-09-18
### Fixed
* Only display the `jsx-quotes` deprecation warning with the default formatter ([#221][])

[3.4.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.4.1...v3.4.2
[#221]: https://github.com/yannickcr/eslint-plugin-react/issues/221

## [3.4.1] - 2015-09-17
### Fixed
* Fix `jsx-quotes` rule deprecation message ([#220][])

[3.4.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.4.0...v3.4.1
[#220]: https://github.com/yannickcr/eslint-plugin-react/issues/220

## [3.4.0] - 2015-09-16
### Added
* Add namespaced JSX support to [`jsx-no-undef`][] ([#219][] @zertosh)
* Add option to [`jsx-closing-bracket-location`][] to configure different styles for self-closing and non-empty tags ([#208][] @evocateur)

### Deprecated
* Deprecate `jsx-quotes` rule, will now trigger a warning if used ([#217][])

[3.4.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.3.2...v3.4.0
[#219]: https://github.com/yannickcr/eslint-plugin-react/pull/219
[#208]: https://github.com/yannickcr/eslint-plugin-react/pull/208
[#217]: https://github.com/yannickcr/eslint-plugin-react/issues/217

## [3.3.2] - 2015-09-10
### Changed
* Add `state` in lifecycle methods for [`sort-comp`][] rule ([#197][] @mathieudutour)
* Treat component with render which returns `createElement` as valid ([#206][] @epmatsw)

### Fixed
* Fix allowed methods on arrayOf in [`prop-types`][] ([#146][])
* Fix default configuration for [`jsx-boolean-value`][] ([#210][])

[3.3.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.3.1...v3.3.2
[#146]: https://github.com/yannickcr/eslint-plugin-react/issues/146
[#197]: https://github.com/yannickcr/eslint-plugin-react/pull/197
[#206]: https://github.com/yannickcr/eslint-plugin-react/pull/206
[#210]: https://github.com/yannickcr/eslint-plugin-react/issues/210

## [3.3.1] - 2015-09-01
### Changed
* Update dependencies
* Update changelog to follow the Keep a CHANGELOG standards
* Documentation improvements ([#198][] @lencioni)

### Fixed
* Fix [`jsx-closing-bracket-location`][] for multiline props ([#199][])

[3.3.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.3.0...v3.3.1
[#198]: https://github.com/yannickcr/eslint-plugin-react/pull/198
[#199]: https://github.com/yannickcr/eslint-plugin-react/issues/199

## [3.3.0] - 2015-08-26
### Added
* Add [`jsx-indent-props`][] rule ([#15][], [#181][])
* Add `no-set-state rule` ([#197][] @markdalgleish)
* Add [`jsx-closing-bracket-location`][] rule ([#14][], [#64][])

### Changed
* Update dependencies

### Fixed
* Fix crash on propTypes declarations with an empty body ([#193][] @mattyod)

[3.3.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.2.3...v3.3.0
[#15]: https://github.com/yannickcr/eslint-plugin-react/issues/15
[#181]: https://github.com/yannickcr/eslint-plugin-react/issues/181
[#197]: https://github.com/yannickcr/eslint-plugin-react/pull/197
[#14]: https://github.com/yannickcr/eslint-plugin-react/issues/14
[#64]: https://github.com/yannickcr/eslint-plugin-react/issues/64
[#193]: https://github.com/yannickcr/eslint-plugin-react/pull/193

## [3.2.3] - 2015-08-16
### Changed
* Update dependencies

### Fixed
* Fix object rest/spread handling ([#187][] @xjamundx, [#189][] @Morantron)

[3.2.3]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.2.2...v3.2.3
[#187]: https://github.com/yannickcr/eslint-plugin-react/pull/187
[#189]: https://github.com/yannickcr/eslint-plugin-react/pull/189

## [3.2.2] - 2015-08-11
### Changed
* Remove peerDependencies ([#178][])

[3.2.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.2.1...v3.2.2
[#178]: https://github.com/yannickcr/eslint-plugin-react/issues/178

## [3.2.1] - 2015-08-08
### Fixed
* Fix crash when propTypes don't have any parent ([#182][])
* Fix jsx-no-literals reporting errors outside JSX ([#183][] @CalebMorris)

[3.2.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.2.0...v3.2.1
[#182]: https://github.com/yannickcr/eslint-plugin-react/issues/182
[#183]: https://github.com/yannickcr/eslint-plugin-react/pull/183

## [3.2.0] - 2015-08-04
### Added
* Add [`jsx-max-props-per-line`][] rule ([#13][])
* Add [`jsx-no-literals`][] rule ([#176][] @CalebMorris)

### Changed
* Update dependencies

### Fixed
* Fix object access in [`jsx-no-undef`][] ([#172][])

[3.2.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.1.0...v3.2.0
[#13]: https://github.com/yannickcr/eslint-plugin-react/issues/13
[#176]: https://github.com/yannickcr/eslint-plugin-react/pull/176
[#172]: https://github.com/yannickcr/eslint-plugin-react/issues/172

## [3.1.0] - 2015-07-28
### Added
* Add event handlers to [`no-unknown-property`][] ([#164][] @mkenyon)
* Add customValidators option to [`prop-types`][] ([#145][] @CalebMorris)

### Changed
* Update dependencies
* Documentation improvements ([#167][] @ngbrown)

### Fixed
* Fix comment handling in [`jsx-curly-spacing`][] ([#165][])

[3.1.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v3.0.0...v3.1.0
[#164]: https://github.com/yannickcr/eslint-plugin-react/pull/164
[#145]: https://github.com/yannickcr/eslint-plugin-react/issues/145
[#165]: https://github.com/yannickcr/eslint-plugin-react/issues/165
[#167]: https://github.com/yannickcr/eslint-plugin-react/pull/167

## [3.0.0] - 2015-07-21
### Added
* Add jsx-no-duplicate-props rule ([#161][] @hummlas)
* Add allowMultiline option to the [`jsx-curly-spacing`][] rule ([#156][] @mathieumg)

### Breaking
* In [`jsx-curly-spacing`][] braces spanning multiple lines are now allowed with `never` option ([#156][] @mathieumg)

### Fixed
* Fix multiple var and destructuring handling in [`props-types`][] ([#159][])
* Fix crash when retrieving propType name ([#163][])

[3.0.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.7.1...v3.0.0
[#161]: https://github.com/yannickcr/eslint-plugin-react/pull/161
[#156]: https://github.com/yannickcr/eslint-plugin-react/pull/156
[#159]: https://github.com/yannickcr/eslint-plugin-react/issues/159
[#163]: https://github.com/yannickcr/eslint-plugin-react/issues/163

## [2.7.1] - 2015-07-16
### Changed
* Update peerDependencies requirements ([#154][])
* Update codebase for ESLint v1.0.0
* Change oneOfType to actually keep the child types ([#148][] @CalebMorris)
* Documentation improvements ([#147][] @lencioni)

[2.7.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.7.0...v2.7.1
[#154]: https://github.com/yannickcr/eslint-plugin-react/issues/154
[#148]: https://github.com/yannickcr/eslint-plugin-react/issues/148
[#147]: https://github.com/yannickcr/eslint-plugin-react/pull/147

## [2.7.0] - 2015-07-11
### Added
* Add [`no-danger`][] rule ([#138][] @scothis)
* Add [`jsx-curly-spacing`][] rule ([#142][])

### Fixed
* Fix properties limitations on propTypes ([#139][])
* Fix component detection ([#144][])

[2.7.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.6.4...v2.7.0
[#138]: https://github.com/yannickcr/eslint-plugin-react/pull/138
[#142]: https://github.com/yannickcr/eslint-plugin-react/issues/142
[#139]: https://github.com/yannickcr/eslint-plugin-react/issues/139
[#144]: https://github.com/yannickcr/eslint-plugin-react/issues/144

## [2.6.4] - 2015-07-02
### Fixed
* Fix simple destructuring handling ([#137][])

[2.6.4]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.6.3...v2.6.4
[#137]: https://github.com/yannickcr/eslint-plugin-react/issues/137

## [2.6.3] - 2015-06-30
### Fixed
* Fix ignore option for [`prop-types`][] rule ([#135][])
* Fix nested props destructuring ([#136][])

[2.6.3]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.6.2...v2.6.3
[#135]: https://github.com/yannickcr/eslint-plugin-react/issues/135
[#136]: https://github.com/yannickcr/eslint-plugin-react/issues/136

## [2.6.2] - 2015-06-28
### Fixed
* Fix props validation when using a prop as an object key ([#132][])

[2.6.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.6.1...v2.6.2
[#132]: https://github.com/yannickcr/eslint-plugin-react/issues/132

## [2.6.1] - 2015-06-28
### Fixed
* Fix crash in [`prop-types`][] when encountering an empty variable declaration ([#130][])

[2.6.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.6.0...v2.6.1
[#130]: https://github.com/yannickcr/eslint-plugin-react/issues/130

## [2.6.0] - 2015-06-28
### Added
* Add support for nested propTypes ([#62][] [#105][] @Cellule)
* Add [`require-extension`][] rule ([#117][] @scothis)
* Add support for computed string format in [`prop-types`][] ([#127][] @Cellule)
* Add ES6 methods to [`sort-comp`][] default configuration ([#97][] [#122][])
* Add support for props destructuring directly on the this keyword
* Add `acceptTranspilerName` option to [`display-name`][] rule ([#75][])
* Add schema to validate rules options

### Changed
* Update dependencies

### Fixed
* Fix test command for Windows ([#114][] @Cellule)
* Fix detection of missing displayName and propTypes when `ecmaFeatures.jsx` is false ([#119][] @rpl)
* Fix propTypes destructuring with properties as string ([#118][] @Cellule)
* Fix [`jsx-sort-prop-types`][] support for keys as string ([#123][] @Cellule)
* Fix crash if a ClassProperty has only one token ([#125][])
* Fix invalid class property handling in [`jsx-sort-prop-types`][] ([#129][])

[2.6.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.5.2...v2.6.0
[#62]: https://github.com/yannickcr/eslint-plugin-react/issues/62
[#105]: https://github.com/yannickcr/eslint-plugin-react/issues/105
[#114]: https://github.com/yannickcr/eslint-plugin-react/pull/114
[#117]: https://github.com/yannickcr/eslint-plugin-react/pull/117
[#119]: https://github.com/yannickcr/eslint-plugin-react/pull/119
[#118]: https://github.com/yannickcr/eslint-plugin-react/issues/118
[#123]: https://github.com/yannickcr/eslint-plugin-react/pull/123
[#125]: https://github.com/yannickcr/eslint-plugin-react/issues/125
[#127]: https://github.com/yannickcr/eslint-plugin-react/pull/127
[#97]: https://github.com/yannickcr/eslint-plugin-react/issues/97
[#122]: https://github.com/yannickcr/eslint-plugin-react/issues/122
[#129]: https://github.com/yannickcr/eslint-plugin-react/issues/129
[#75]: https://github.com/yannickcr/eslint-plugin-react/issues/75

## [2.5.2] - 2015-06-14
### Fixed
* Fix regression in [`jsx-uses-vars`][] with `babel-eslint` ([#110][])

[2.5.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.5.1...v2.5.2
[#110]: https://github.com/yannickcr/eslint-plugin-react/issues/110

## [2.5.1] - 2015-06-14
### Changed
* Update dependencies
* Documentation improvements ([#99][] @morenoh149)

### Fixed
* Fix [`prop-types`][] crash when propTypes definition is invalid ([#95][])
* Fix [`jsx-uses-vars`][] for ES6 classes ([#96][])
* Fix hasOwnProperty that is taken for a prop ([#102][])

[2.5.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.5.0...v2.5.1
[#95]: https://github.com/yannickcr/eslint-plugin-react/issues/95
[#96]: https://github.com/yannickcr/eslint-plugin-react/issues/96
[#102]: https://github.com/yannickcr/eslint-plugin-react/issues/102
[#99]: https://github.com/yannickcr/eslint-plugin-react/pull/99

## [2.5.0] - 2015-06-04
### Added
* Add option to make [`wrap-multilines`][] more granular ([#94][] @PiPeep)

### Changed
* Update dependencies
* Documentation improvements ([#92][] [#93][] @lencioni)

[2.5.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.4.0...v2.5.0
[#94]: https://github.com/yannickcr/eslint-plugin-react/pull/94
[#92]: https://github.com/yannickcr/eslint-plugin-react/pull/92
[#93]: https://github.com/yannickcr/eslint-plugin-react/pull/93

## [2.4.0] - 2015-05-30
### Added
* Add pragma option to [`jsx-uses-react`][] ([#82][] @dominicbarnes)
* Add context props to [`sort-comp`][] ([#89][] @zertosh)

### Changed
* Update dependencies
* Documentation improvement ([#91][] @matthewwithanm)

### Fixed
* Fix itemID in [`no-unknown-property`][] rule ([#85][] @cody)
* Fix license field in package.json ([#90][] @zertosh)
* Fix usage of contructor in [`sort-comp`][] options ([#88][])

[2.4.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.3.0...v2.4.0
[#82]: https://github.com/yannickcr/eslint-plugin-react/pull/82
[#89]: https://github.com/yannickcr/eslint-plugin-react/pull/89
[#85]: https://github.com/yannickcr/eslint-plugin-react/pull/85
[#90]: https://github.com/yannickcr/eslint-plugin-react/pull/90
[#88]: https://github.com/yannickcr/eslint-plugin-react/issues/88
[#91]: https://github.com/yannickcr/eslint-plugin-react/pull/91

## [2.3.0] - 2015-05-14
### Added
* Add [`sort-comp`][] rule ([#39][])
* Add `allow-in-func` option to [`no-did-mount-set-state`][] ([#56][])

### Changed
* Update dependencies
* Improve errors locations for `prop-types`

### Fixed
* Fix quoted propTypes in ES6 ([#77][])

[2.3.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.2.0...v2.3.0
[#39]: https://github.com/yannickcr/eslint-plugin-react/issues/39
[#77]: https://github.com/yannickcr/eslint-plugin-react/issues/77
[#56]: https://github.com/yannickcr/eslint-plugin-react/issues/56

## [2.2.0] - 2015-04-22
### Added
* Add [`jsx-sort-prop-types`][] rule ([#38][] @AlexKVal)

### Changed
* Documentation improvements ([#71][] @AlexKVal)

### Fixed
* Fix variables marked as used when a prop has the same name ([#69][] @burnnat)

[2.2.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.1.1...v2.2.0
[#38]: https://github.com/yannickcr/eslint-plugin-react/issues/38
[#69]: https://github.com/yannickcr/eslint-plugin-react/pull/69
[#71]: https://github.com/yannickcr/eslint-plugin-react/pull/71

## [2.1.1] - 2015-04-17
### Added
* Add support for classes static properties ([#43][])
* Add tests for the `babel-eslint` parser
* Add ESLint as peerDependency ([#63][] @AlexKVal)

### Changed
* Documentation improvements ([#55][] @AlexKVal, [#60][] @chriscalo)

[2.1.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.1.0...v2.1.1
[#43]: https://github.com/yannickcr/eslint-plugin-react/issues/43
[#63]: https://github.com/yannickcr/eslint-plugin-react/pull/63
[#55]: https://github.com/yannickcr/eslint-plugin-react/pull/55
[#60]: https://github.com/yannickcr/eslint-plugin-react/pull/60

## [2.1.0] - 2015-04-06
### Added
* Add [`jsx-boolean-value`][] rule ([#11][])
* Add support for static methods in [`display-name`][] and [`prop-types`][] ([#48][])

### Changed
* Update [`jsx-sort-props`][] to reset the alphabetical verification on spread ([#47][] @zertosh)
* Update [`jsx-uses-vars`][] to be enabled by default ([#49][] @banderson)

### Fixed
* Fix describing comment for hasSpreadOperator() method ([#53][] @AlexKVal)

[2.1.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.0.2...v2.1.0
[#47]: https://github.com/yannickcr/eslint-plugin-react/pull/47
[#49]: https://github.com/yannickcr/eslint-plugin-react/pull/49
[#11]: https://github.com/yannickcr/eslint-plugin-react/issues/11
[#48]: https://github.com/yannickcr/eslint-plugin-react/issues/48
[#53]: https://github.com/yannickcr/eslint-plugin-react/pull/53

## [2.0.2] - 2015-03-31
### Fixed
* Fix ignore rest spread when destructuring props ([#46][])
* Fix component detection in [`prop-types`][] and [`display-name`][] ([#45][])
* Fix spread handling in [`jsx-sort-props`][] ([#42][] @zertosh)

[2.0.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.0.1...v2.0.2
[#46]: https://github.com/yannickcr/eslint-plugin-react/issues/46
[#45]: https://github.com/yannickcr/eslint-plugin-react/issues/45
[#42]: https://github.com/yannickcr/eslint-plugin-react/pull/42

## [2.0.1] - 2015-03-30
### Fixed
* Fix props detection when used in an object ([#41][])

[2.0.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v2.0.0...v2.0.1
[#41]: https://github.com/yannickcr/eslint-plugin-react/issues/41

## [2.0.0] - 2015-03-29
### Added
* Add [`jsx-sort-props`][] rule ([#16][])
* Add [`no-unknown-property`][] rule ([#28][])
* Add ignore option to [`prop-types`][] rule

### Changed
* Update dependencies

### Breaking
* In [`prop-types`][] the children prop is no longer ignored

### Fixed
* Fix components are now detected when using ES6 classes ([#24][])
* Fix [`prop-types`][] now return the right line/column ([#33][])
* Fix props are now detected when destructuring ([#27][])
* Fix only check for computed property names in [`prop-types`][] ([#36][] @burnnat)

[2.0.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.6.1...v2.0.0
[#16]: https://github.com/yannickcr/eslint-plugin-react/issues/16
[#28]: https://github.com/yannickcr/eslint-plugin-react/issues/28
[#24]: https://github.com/yannickcr/eslint-plugin-react/issues/24
[#33]: https://github.com/yannickcr/eslint-plugin-react/issues/33
[#27]: https://github.com/yannickcr/eslint-plugin-react/issues/27
[#36]: https://github.com/yannickcr/eslint-plugin-react/pull/36

## [1.6.1] - 2015-03-25
### Changed
* Update `jsx-quotes` documentation

### Fixed
* Fix [`jsx-no-undef`][] with `babel-eslint` ([#30][])
* Fix `jsx-quotes` on Literal childs ([#29][])

[1.6.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.6.0...v1.6.1
[#30]: https://github.com/yannickcr/eslint-plugin-react/issues/30
[#29]: https://github.com/yannickcr/eslint-plugin-react/issues/29

## [1.6.0] - 2015-03-22
### Added
* Add [`jsx-no-undef`][] rule
* Add `jsx-quotes` rule ([#12][])
* Add `@jsx` pragma support ([#23][])

### Changed
* Allow `this.getState` references (not calls) in lifecycle methods ([#22][] @benmosher)
* Update dependencies

### Fixed
* Fix [`react-in-jsx-scope`][] in Node.js env
* Fix usage of propTypes with an external object ([#9][])

[1.6.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.5.0...v1.6.0
[#12]: https://github.com/yannickcr/eslint-plugin-react/issues/12
[#23]: https://github.com/yannickcr/eslint-plugin-react/issues/23
[#9]: https://github.com/yannickcr/eslint-plugin-react/issues/9
[#22]: https://github.com/yannickcr/eslint-plugin-react/pull/22

## [1.5.0] - 2015-03-14
### Added
* Add [`jsx-uses-vars`][] rule

### Fixed
* Fix [`jsx-uses-react`][] for ESLint 0.17.0

[1.5.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.4.1...v1.5.0

## [1.4.1] - 2015-03-03
### Fixed
* Fix `this.props.children` marked as missing in props validation ([#7][])
* Fix usage of `this.props` without property ([#8][])

[1.4.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.4.0...v1.4.1
[#7]: https://github.com/yannickcr/eslint-plugin-react/issues/7
[#8]: https://github.com/yannickcr/eslint-plugin-react/issues/8

## [1.4.0] - 2015-02-24
### Added
* Add [`react-in-jsx-scope`][] rule ([#5][] @glenjamin)
* Add [`jsx-uses-react`][] rule ([#6][] @glenjamin)

### Changed
* Update [`prop-types`][] to check props usage insead of propTypes presence ([#4][])

[1.4.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.3.0...v1.4.0
[#4]: https://github.com/yannickcr/eslint-plugin-react/issues/4
[#5]: https://github.com/yannickcr/eslint-plugin-react/pull/5
[#6]: https://github.com/yannickcr/eslint-plugin-react/pull/6

## [1.3.0] - 2015-02-24
### Added
* Add [`no-did-mount-set-state`][] rule
* Add [`no-did-update-set-state`][] rule

### Changed
* Update dependencies

[1.3.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.2.2...v1.3.0

## [1.2.2] - 2015-02-09
### Changed
* Update dependencies

### Fixed
* Fix childs detection in [`self-closing-comp`][] ([#3][])

[1.2.2]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.2.1...v1.2.2
[#3]: https://github.com/yannickcr/eslint-plugin-react/issues/3

## [1.2.1] - 2015-01-29
### Changed
* Update Readme
* Update dependencies
* Update [`wrap-multilines`][] and [`self-closing-comp`][] rules for ESLint 0.13.0

[1.2.1]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.2.0...v1.2.1

## [1.2.0] - 2014-12-29
### Added
* Add [`self-closing-comp`][] rule

### Fixed
* Fix [`display-name`][] and [`prop-types`][] rules

[1.2.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.1.0...v1.2.0

## [1.1.0] - 2014-12-28
### Added
 * Add [`display-name`][] rule
 * Add [`wrap-multilines`][] rule
 * Add rules documentation
 * Add rules tests

[1.1.0]: https://github.com/yannickcr/eslint-plugin-react/compare/v1.0.0...v1.1.0

## 1.0.0 - 2014-12-16
### Added
 * First revision

[`display-name`]: docs/rules/display-name.md
[`forbid-component-props`]: docs/rules/forbid-component-props.md
[`forbid-elements`]: docs/rules/forbid-elements.md
[`forbid-foreign-prop-types`]: docs/rules/forbid-foreign-prop-types.md
[`forbid-prop-types`]: docs/rules/forbid-prop-types.md
[`no-array-index-key`]: docs/rules/no-array-index-key.md
[`no-children-prop`]: docs/rules/no-children-prop.md
[`no-danger`]: docs/rules/no-danger.md
[`no-danger-with-children`]: docs/rules/no-danger-with-children.md
[`no-deprecated`]: docs/rules/no-deprecated.md
[`no-did-mount-set-state`]: docs/rules/no-did-mount-set-state.md
[`no-did-update-set-state`]: docs/rules/no-did-update-set-state.md
[`no-direct-mutation-state`]: docs/rules/no-direct-mutation-state.md
[`no-find-dom-node`]: docs/rules/no-find-dom-node.md
[`no-is-mounted`]: docs/rules/no-is-mounted.md
[`no-multi-comp`]: docs/rules/no-multi-comp.md
[`no-render-return-value`]: docs/rules/no-render-return-value.md
[`no-set-state`]: docs/rules/no-set-state.md
[`no-string-refs`]: docs/rules/no-string-refs.md
[`no-unescaped-entities`]: docs/rules/no-unescaped-entities.md
[`no-unknown-property`]: docs/rules/no-unknown-property.md
[`no-unused-prop-types`]: docs/rules/no-unused-prop-types.md
[`prefer-es6-class`]: docs/rules/prefer-es6-class.md
[`prefer-stateless-function`]: docs/rules/prefer-stateless-function.md
[`prop-types`]: docs/rules/prop-types.md
[`react-in-jsx-scope`]: docs/rules/react-in-jsx-scope.md
[`require-optimization`]: docs/rules/require-optimization.md
[`require-render-return`]: docs/rules/require-render-return.md
[`self-closing-comp`]: docs/rules/self-closing-comp.md
[`sort-comp`]: docs/rules/sort-comp.md
[`sort-prop-types`]: docs/rules/sort-prop-types.md
[`style-prop-object`]: docs/rules/style-prop-object.md
[`jsx-boolean-value`]: docs/rules/jsx-boolean-value.md
[`jsx-closing-bracket-location`]: docs/rules/jsx-closing-bracket-location.md
[`jsx-curly-spacing`]: docs/rules/jsx-curly-spacing.md
[`jsx-equals-spacing`]: docs/rules/jsx-equals-spacing.md
[`jsx-filename-extension`]: docs/rules/jsx-filename-extension.md
[`jsx-first-prop-new-line`]: docs/rules/jsx-first-prop-new-line.md
[`jsx-handler-names`]: docs/rules/jsx-handler-names.md
[`jsx-indent`]: docs/rules/jsx-indent.md
[`jsx-indent-props`]: docs/rules/jsx-indent-props.md
[`jsx-key`]: docs/rules/jsx-key.md
[`jsx-max-props-per-line`]: docs/rules/jsx-max-props-per-line.md
[`jsx-no-bind`]: docs/rules/jsx-no-bind.md
[`jsx-no-comment-textnodes`]: docs/rules/jsx-no-comment-textnodes.md
[`jsx-no-duplicate-props`]: docs/rules/jsx-no-duplicate-props.md
[`jsx-no-literals`]: docs/rules/jsx-no-literals.md
[`jsx-no-target-blank`]: docs/rules/jsx-no-target-blank.md
[`jsx-no-undef`]: docs/rules/jsx-no-undef.md
[`jsx-pascal-case`]: docs/rules/jsx-pascal-case.md
[`require-default-props`]: docs/rules/require-default-props.md
[`jsx-sort-props`]: docs/rules/jsx-sort-props.md
[`jsx-space-before-closing`]: docs/rules/jsx-space-before-closing.md
[`jsx-tag-spacing`]: docs/rules/jsx-tag-spacing.md
[`jsx-uses-react`]: docs/rules/jsx-uses-react.md
[`jsx-uses-vars`]: docs/rules/jsx-uses-vars.md
[`jsx-wrap-multilines`]: docs/rules/jsx-wrap-multilines.md
[`void-dom-elements-no-children`]: docs/rules/void-dom-elements-no-children.md

[`jsx-sort-prop-types`]: docs/rules/sort-prop-types.md
[`require-extension`]: docs/rules/require-extension.md
[`no-comment-textnodes`]: docs/rules/jsx-no-comment-textnodes.md
[`wrap-multilines`]: docs/rules/jsx-wrap-multilines.md

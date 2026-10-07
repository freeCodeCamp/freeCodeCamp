# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.8.1](https://github.com/ljharb/shell-quote/compare/v1.8.0...v1.8.1) - 2023-04-07

### Fixed

- [Fix] `parse`: preserve whitespace in comments [`#6`](https://github.com/ljharb/shell-quote/issues/6)
- [Fix] properly support the `escape` option [`#5`](https://github.com/ljharb/shell-quote/issues/5)

### Commits

- [Refactor] `parse`: hoist `getVar` to module level [`b42ac73`](https://github.com/ljharb/shell-quote/commit/b42ac73e39e566cfc355a4addc4bd2df2652556c)
- [Refactor] hoist some vars to module level [`8f0c5c3`](https://github.com/ljharb/shell-quote/commit/8f0c5c3c9df3a10e32f1972636675af6fffef998)
- [Refactor] `parse`: use `slice` over `substr`, cache some values [`fcb2e1a`](https://github.com/ljharb/shell-quote/commit/fcb2e1acd5312a1a1a4e6c66ec688aab383023b5)
- [Refactor] `parse`: a bit of cleanup [`6780ec5`](https://github.com/ljharb/shell-quote/commit/6780ec5194e36e2a696bfbaaf85169682a333321)
- [Refactor] `parse`: tweak the regex to not match nothing [`227d474`](https://github.com/ljharb/shell-quote/commit/227d4742a006e81ec3fde1eee103731a6f7ea920)
- [Tests] increase coverage [`a66de94`](https://github.com/ljharb/shell-quote/commit/a66de943555e49fbb1b657cbe3c5b2c703ae507d)
- [Refactor] `parse`: avoid shadowing a function arg [`1d58679`](https://github.com/ljharb/shell-quote/commit/1d5867907ecbf553556fe6ad790b6d6658aedba3)

## [v1.8.0](https://github.com/ljharb/shell-quote/compare/v1.7.4...v1.8.0) - 2023-01-30

### Commits

- [New] extract `parse` and `quote` to their own deep imports [`553fdfc`](https://github.com/ljharb/shell-quote/commit/553fdfc32cc41b4c2f77e061b6957703958ca575)
- [Tests] add `nyc` coverage [`fd7ddcd`](https://github.com/ljharb/shell-quote/commit/fd7ddcdd84bfef064c6d9a06b055a95531b26897)
- [New] Add support for here strings (`&lt;&lt;&lt;`) [`9802fb3`](https://github.com/ljharb/shell-quote/commit/9802fb37c7946e18c672b81122520dc296bde271)
- [New] `parse`: Add syntax support for duplicating input file descriptors [`216b198`](https://github.com/ljharb/shell-quote/commit/216b19894f76b14d164c4c5a68f05a51b06336c4)
- [Dev Deps] update `@ljharb/eslint-config`, `aud`, `tape` [`85f8e31`](https://github.com/ljharb/shell-quote/commit/85f8e31dd80e1dde63d58204b653e497a53857e6)
- [Tests] add `evalmd` [`c5549fc`](https://github.com/ljharb/shell-quote/commit/c5549fcd82d70046bdc2b1c34184ae9f9d0191f9)
- [actions] update checkout action [`62e9b49`](https://github.com/ljharb/shell-quote/commit/62e9b4958cfa2f9009b7069076612fe33528c1fb)

## [v1.7.4](https://github.com/ljharb/shell-quote/compare/1.7.3...v1.7.4) - 2022-10-12

### Merged

- Add node_modules to .gitignore [`#48`](https://github.com/ljharb/shell-quote/pull/48)

### Commits

- [eslint] fix indentation and whitespace [`aaa9d1f`](https://github.com/ljharb/shell-quote/commit/aaa9d1f65bf3445e6af1efaa4a8f8c13a21aa593)
- [eslint] additional cleanup [`397cb62`](https://github.com/ljharb/shell-quote/commit/397cb628f3d96e4e47763147c0d6074997a13880)
- [meta] add `auto-changelog` [`497fca5`](https://github.com/ljharb/shell-quote/commit/497fca509af3b7d6daaba459bad1f45ac0af3ff1)
- [actions] add reusable workflows [`4763c36`](https://github.com/ljharb/shell-quote/commit/4763c36274c5881a2d141ce9f2b17b7d1d95e8cd)
- [eslint] add eslint [`6ee1437`](https://github.com/ljharb/shell-quote/commit/6ee1437df1b10a79bdf2aaa04f2bacc9f420dc15)
- [readme] rename, add badges [`7eb5134`](https://github.com/ljharb/shell-quote/commit/7eb513483d931602452ec572ed456714148acd2b)
- [meta] update URLs [`67381b6`](https://github.com/ljharb/shell-quote/commit/67381b61fa95e57819333463f491428747893186)
- [meta] create FUNDING.yml; add `funding` in package.json [`8641572`](https://github.com/ljharb/shell-quote/commit/86415722d875578adf1f95f9e649ba42c805bc32)
- [meta] use `npmignore` to autogenerate an npmignore file [`2e2007a`](https://github.com/ljharb/shell-quote/commit/2e2007a393f90bf079fc556a921120b3508c4fc3)
- Only apps should have lockfiles [`f97411e`](https://github.com/ljharb/shell-quote/commit/f97411ef4d2f183200fc8a28beca9faf9b08a640)
- [Dev Deps] update `tape` [`051f608`](https://github.com/ljharb/shell-quote/commit/051f60857ad5035280208abdc348bf5ba42a6254)
- [meta] add `safe-publish-latest` [`18cadf9`](https://github.com/ljharb/shell-quote/commit/18cadf95357392fcd78ea8619956fd41eed62649)
- [Tests] add `aud` in `posttest` [`dc1cc12`](https://github.com/ljharb/shell-quote/commit/dc1cc12b956ccd93d58aaaad263bee7d50576d27)

<!-- auto-changelog-above -->

## 1.7.3
* Fix a security issue where the regex for windows drive letters allowed some shell meta-characters
to escape the quoting rules. (CVE-2021-42740)

## 1.7.2
* Fix a regression introduced in 1.6.3. This reverts the Windows path quoting fix. ([144e1c2](https://github.com/ljharb/shell-quote/commit/144e1c20cd57549a414c827fb3032e60b7b8721c))

## 1.7.1
* Fix `$` being removed when not part of an environment variable name. ([@Adman](https://github.com/Admin) in [#32](https://github.com/ljharb/shell-quote/pull/32))

## 1.7.0
* Add support for parsing `>>` and `>&` redirection operators. ([@forivall](https://github.com/forivall) in [#16](https://github.com/ljharb/shell-quote/pull/16))
* Add support for parsing `<(` process substitution operator. ([@cuonglm](https://github.com/cuonglm) in [#15](https://github.com/ljharb/shell-quote/pull/15))

## 1.6.3
* Fix Windows path quoting problems. ([@dy](https://github.com/dy) in [#34](https://github.com/ljharb/shell-quote/pull/34))

## [v1.6.2](https://github.com/ljharb/shell-quote/compare/1.6.1...v1.6.2) - 2019-08-13

### Merged

- Use native JSON and Array methods [`#21`](https://github.com/ljharb/shell-quote/pull/21)

### Commits

- fix whitespace [`72fb5a8`](https://github.com/ljharb/shell-quote/commit/72fb5a8ce29b4f67f28302af33c217b58f92e260)
- Disable package-lock.json [`d450577`](https://github.com/ljharb/shell-quote/commit/d4505770b2a4251af2da8e177385c5e0456a83b6)

## [1.6.1](https://github.com/ljharb/shell-quote/compare/1.6.0...1.6.1) - 2016-06-17

### Commits

- Fix some more escaping for .quote() [`ace52f4`](https://github.com/ljharb/shell-quote/commit/ace52f4c8717b370b301a3db3a4727db26e309ad)
- Fix escaping for greater than and less than [`70e9eb2`](https://github.com/ljharb/shell-quote/commit/70e9eb2a854eb56a3dfa255be12610a722bbe080)

## [1.6.0](https://github.com/ljharb/shell-quote/compare/1.5.0...1.6.0) - 2016-04-23

### Commits

- add comment parsing feature [`b8b5c31`](https://github.com/ljharb/shell-quote/commit/b8b5c31c16a15aa4ab26c8f23d362a24b9fa57c4)

## [1.5.0](https://github.com/ljharb/shell-quote/compare/1.4.3...1.5.0) - 2016-03-16

### Commits

- add escape option to .parse [`4d400e7`](https://github.com/ljharb/shell-quote/commit/4d400e773be448c320b6dc9b2eb1323d7a3461ca)

## [1.4.3](https://github.com/ljharb/shell-quote/compare/1.4.2...1.4.3) - 2015-03-07

### Commits

- Fix quote() with special chars [`811b5a0`](https://github.com/ljharb/shell-quote/commit/811b5a0aff79f347db245edcf88750977c111844)

## [1.4.2](https://github.com/ljharb/shell-quote/compare/1.4.1...1.4.2) - 2014-07-20

### Commits

- Handle non-strings when quoting [`d435827`](https://github.com/ljharb/shell-quote/commit/d43582741c5599807249c28722487aa86bb16f06)
- falseys ok [`22dbd94`](https://github.com/ljharb/shell-quote/commit/22dbd9492c372038d439d6ec08c6288ca5fa3c10)
- all the falseys test [`c99dca5`](https://github.com/ljharb/shell-quote/commit/c99dca59dca64743877a0411d299ce669f0a2d1d)

## [1.4.1](https://github.com/ljharb/shell-quote/compare/1.4.0...1.4.1) - 2013-12-24

### Commits

- es5 shims [`00dc6ab`](https://github.com/ljharb/shell-quote/commit/00dc6abfdd2f3ff2908616dbe7b6584bbf1b0e24)
- separate shim file to get the coverage up [`e29a216`](https://github.com/ljharb/shell-quote/commit/e29a2167319913af3f26603bc33938bb9be1d74d)
- use array-{filter,map,reduce} [`97a2fc9`](https://github.com/ljharb/shell-quote/commit/97a2fc9c92917343a33662b3705860e4f2044730)
- add testling badge [`44c98b1`](https://github.com/ljharb/shell-quote/commit/44c98b1e341d348ce9b5b4d78bb4d26345e868ea)
- upgrade tape [`3fc22d3`](https://github.com/ljharb/shell-quote/commit/3fc22d3d38592e6fc3b3308cc73a282d641bad34)

## [1.4.0](https://github.com/ljharb/shell-quote/compare/1.3.3...1.4.0) - 2013-10-17

### Merged

- Add MIT LICENSE file [`#6`](https://github.com/ljharb/shell-quote/pull/6)

### Commits

- Rewrite parser as a character based scanner [`c7ca9a2`](https://github.com/ljharb/shell-quote/commit/c7ca9a200350c02fb86c4222b63f15b54a0a0226)
- Add tests for glob patterns [`3418892`](https://github.com/ljharb/shell-quote/commit/3418892031b126197302eb57cc92a729b740fac6)
- Update algo description [`e1442cf`](https://github.com/ljharb/shell-quote/commit/e1442cfe0521497b59a8204eb1e4d6c4202d42b9)
- Fix test case for backslash in double quotes [`89bc550`](https://github.com/ljharb/shell-quote/commit/89bc5500711643e87fe93dd1bde0e8745c34d733)
- Add failing tests for crazy quoting tricks [`58a5e48`](https://github.com/ljharb/shell-quote/commit/58a5e4800a62fdc3e980feae1e6c6b15c812f0cb)

## [1.3.3](https://github.com/ljharb/shell-quote/compare/1.3.2...1.3.3) - 2013-06-24

### Commits

- failing set test with an env cb [`9fb2096`](https://github.com/ljharb/shell-quote/commit/9fb20968b407c590745a982d2a562960e952142d)
- remove the broken special case [`f9a0ee5`](https://github.com/ljharb/shell-quote/commit/f9a0ee574f9d5e5d5b382f55da960c23eb7d44c5)

## [1.3.2](https://github.com/ljharb/shell-quote/compare/1.3.1...1.3.2) - 2013-06-24

### Commits

- tests for setting env vars [`f44b039`](https://github.com/ljharb/shell-quote/commit/f44b03906c60598470676edcabea79c4f7488407)
- fixed the parse test, broke the op tests [`74d6686`](https://github.com/ljharb/shell-quote/commit/74d66863615a60fcb222d2279991cff3a89ff015)
- factored out single and double quote regex [`de9e0a5`](https://github.com/ljharb/shell-quote/commit/de9e0a5081156e5483b5df24878c7414f90ec67e)
- updated set env test, already passes [`7d5636b`](https://github.com/ljharb/shell-quote/commit/7d5636bec5e76ff542712e07643b09c597d20b21)
- ops fixed [`2b4e1b1`](https://github.com/ljharb/shell-quote/commit/2b4e1b1fb63519456c7850d365e1ffe5fa5972b2)
- passing all tests [`44177e3`](https://github.com/ljharb/shell-quote/commit/44177e3dcbd96dfa331483eba0abbfb0291c130f)
- backreferences in negated capture groups don't actually work [`e189d9d`](https://github.com/ljharb/shell-quote/commit/e189d9d5910c6ecc7d564309ca9e110062f9589e)
- another crazy ridiculous passing parse test [`d1beb6b`](https://github.com/ljharb/shell-quote/commit/d1beb6b32ec7ad8752b305834a21c800cae74a95)
- failing test for quoted whitespace and nested quotes [`9a4c11c`](https://github.com/ljharb/shell-quote/commit/9a4c11cba0f61762aaa7887591d78fe7e965cf65)
- failing test for quotes embedded inside barewords [`d997384`](https://github.com/ljharb/shell-quote/commit/d997384018ce107ab8e12aa5b8d8359c2f77128b)

## [1.3.1](https://github.com/ljharb/shell-quote/compare/1.3.0...1.3.1) - 2013-05-13

### Commits

- pass objects through [`f9c0514`](https://github.com/ljharb/shell-quote/commit/f9c0514abbdf8ba16fafb68736863d14b39015ef)

## [1.3.0](https://github.com/ljharb/shell-quote/compare/1.2.0...1.3.0) - 2013-05-13

### Commits

- hacky tokenizer is much simpler [`7e91b18`](https://github.com/ljharb/shell-quote/commit/7e91b18d1cf3fffd6a9c5f69d785f200c0c81b66)
- nearly passing with a clunky state env parser, array issues [`d6d6416`](https://github.com/ljharb/shell-quote/commit/d6d64160f2fc8a23018410ffe84ab7f1b0c4fa02)
- test for functional env expansion [`666395f`](https://github.com/ljharb/shell-quote/commit/666395f9f195241c6077f242dc4f2851bed95f8d)
- upgrade travis versions, tape [`f6f8bd6`](https://github.com/ljharb/shell-quote/commit/f6f8bd6026375d44d40c7f2e1fead43d006be211)
- 1.3.0, document env() lookups [`041c5da`](https://github.com/ljharb/shell-quote/commit/041c5da88800b4e15f0ed023049050b11b623a23)
- first half of functional env() works [`7a0cf79`](https://github.com/ljharb/shell-quote/commit/7a0cf79987fbdcc00d8f36c6dc164d22db963d23)
- env() objects even work inside quote strings [`16139f5`](https://github.com/ljharb/shell-quote/commit/16139f52bf7a2beb7e1ca9b61b93a9ea598b0f1a)
- another check just to make sure env() works [`914a1a9`](https://github.com/ljharb/shell-quote/commit/914a1a9ec55cd76bedfed4086c35866733128036)

## [1.2.0](https://github.com/ljharb/shell-quote/compare/1.1.0...1.2.0) - 2013-05-13

### Commits

- failing test for special shell parameter env vars [`728862a`](https://github.com/ljharb/shell-quote/commit/728862a6ff246754083da5cf22322caf914ae990)
- add the special vars to the replace regex but the chunker breaks on them [`d1ff82a`](https://github.com/ljharb/shell-quote/commit/d1ff82a07c44cb53ab909b61833296f38257eabd)
- fixed the env test, everything is fine [`a45897f`](https://github.com/ljharb/shell-quote/commit/a45897f53ba184a77bc762c63777b95590a83962)

## [1.1.0](https://github.com/ljharb/shell-quote/compare/1.0.0...1.1.0) - 2013-05-13

### Commits

- quote all ops objects [`ac7be63`](https://github.com/ljharb/shell-quote/commit/ac7be63574e1da48bc6f495aee363d31863222c3)
- test for parsed ops objects in quote() [`59fb71b`](https://github.com/ljharb/shell-quote/commit/59fb71b39c53b83306d015bec62fc93667745f75)
- another test for op object quoting [`5819a31`](https://github.com/ljharb/shell-quote/commit/5819a31a19c34967dcb7bd1719250ed2aa480583)

## [1.0.0](https://github.com/ljharb/shell-quote/compare/0.1.1...1.0.0) - 2013-05-13

### Commits

- document ops, op example [`a6381e6`](https://github.com/ljharb/shell-quote/commit/a6381e612361148a8433c6ec4891aabc4649cb40)
- some more passing double-char op tests [`fbc6e5c`](https://github.com/ljharb/shell-quote/commit/fbc6e5c40858ef4ea4d69651ac8fdf6c0c780eed)
- failing test for | and & ops [`d817736`](https://github.com/ljharb/shell-quote/commit/d81773643cbc2e25576884d606165dc87e8bbfac)
- labeled regex states [`8c008b2`](https://github.com/ljharb/shell-quote/commit/8c008b223e6174d6bec098251527053e5cc1f30c)
- refactored the chunker regex into a string [`0331c7f`](https://github.com/ljharb/shell-quote/commit/0331c7f63077fda116b3c73540b71880538a4391)
- simple failing double-char op test [`e51fa90`](https://github.com/ljharb/shell-quote/commit/e51fa90f854063a408e8c1645b385c1ed42c72c6)
- failing expanded single-op tests for ; and () [`710bb24`](https://github.com/ljharb/shell-quote/commit/710bb243f23d4a55158688b71cb56b67f66ea99f)
- now passing all the single-char op tests [`e3e9ac1`](https://github.com/ljharb/shell-quote/commit/e3e9ac17ef02300bad7f4faefee5c7a993b3bc97)
- using the control ops directly from the docs [`f535987`](https://github.com/ljharb/shell-quote/commit/f53598732ba606c7bca66fd7d55d809544c452cf)
- first part of op parsing works [`e6f9199`](https://github.com/ljharb/shell-quote/commit/e6f91991fe437eae6b7e4f571843b3d48c746aeb)
- failing redirect tests [`cb94c10`](https://github.com/ljharb/shell-quote/commit/cb94c105a4e32fac2d356b956f53aff999ae88e8)
- another double-char op test just to be sure [`5cf1bf2`](https://github.com/ljharb/shell-quote/commit/5cf1bf29e3324a6cc1e40c01c4529b28ca0b47a5)
- 1.0.0 for ops [`17a40ed`](https://github.com/ljharb/shell-quote/commit/17a40edb3cd7a0f1c44be2be5ddd412c8ca2b7ca)
- adding redirect &lt;&gt; ops to CONTROL makes the tests pass [`48b1eb9`](https://github.com/ljharb/shell-quote/commit/48b1eb97cfa306659de66bd29615051a3644b9ce)
- double-char op test now passing [`3998b0f`](https://github.com/ljharb/shell-quote/commit/3998b0f9ecb32883f8eb3be31110a84d276ac764)
- using the meta chars directly from the docs [`b009ef6`](https://github.com/ljharb/shell-quote/commit/b009ef6d04eb1cc57d66cf3670d24e03fa0fc6bd)
- the spec says tabs are also allowed [`2adb373`](https://github.com/ljharb/shell-quote/commit/2adb37366bdfae198ce61e4658e513d3e0bc98fa)
- op test completely passing [`20a0147`](https://github.com/ljharb/shell-quote/commit/20a01475741d9fba801bbd2b0c1a5f215dc9cec4)

## [0.1.1](https://github.com/ljharb/shell-quote/compare/0.1.0...0.1.1) - 2013-04-17

### Commits

- Return empty list when parsing an empty (or whitespace-only) string [`1475717`](https://github.com/ljharb/shell-quote/commit/14757177ead209f5ae3c9d4a3020fba9f522725f)

## [0.1.0](https://github.com/ljharb/shell-quote/compare/0.0.1...0.1.0) - 2013-04-14

### Commits

- externalize the regex declaration [`37d6058`](https://github.com/ljharb/shell-quote/commit/37d60580a4a4656ff836c4a2ecdd7282705ffd27)
- modernize the readme [`24106f5`](https://github.com/ljharb/shell-quote/commit/24106f5c81ab83bddb2bf735cad60e99e1494dcf)
- factor out interpolation [`1b21b01`](https://github.com/ljharb/shell-quote/commit/1b21b018e01392d2c74e53136f8fa0ca838d7643)
- half the env tests are working with basic interpolation [`5891471`](https://github.com/ljharb/shell-quote/commit/589147176be93834bad7fcee83bd255e35c14adc)
- env parse example [`5757c42`](https://github.com/ljharb/shell-quote/commit/5757c4256a4cbaeaabd3d8cd91c7e19109329067)
- failing tests for unimplemented env interpolation [`590534a`](https://github.com/ljharb/shell-quote/commit/590534ae8eced91974a4be8f2b6bc7dcb53e3211)
- denormalize the interpolate logic to make room for special cases [`c669d2e`](https://github.com/ljharb/shell-quote/commit/c669d2e8b84e0eb0dde1798eae7c37a21dc5b7a1)
- cleaner implementation recursing on the double quote case [`adae66f`](https://github.com/ljharb/shell-quote/commit/adae66f47cf11bb7a686c98059436f496d881955)
- one test was wrong, checking for pre escapes [`42b5f83`](https://github.com/ljharb/shell-quote/commit/42b5f8355196d5f2a2c40178576a5d37167e8cb2)
- finally passing all the tests [`efa4084`](https://github.com/ljharb/shell-quote/commit/efa408481db33993fce2a1dd3c15ffac0203fe4c)
- one more test passing with quote recursion [`e9537b9`](https://github.com/ljharb/shell-quote/commit/e9537b943d89535b38c0777c210b5aa9780349b2)
- use tape everywhere [`ed0c1c6`](https://github.com/ljharb/shell-quote/commit/ed0c1c6ae383998874002ae9aa452505c266d630)
- some extra metacharacter tests just to be sure [`a6782ae`](https://github.com/ljharb/shell-quote/commit/a6782aeb931221a459f9cebc371c2311ad680992)
- minor fix to an env test [`601b340`](https://github.com/ljharb/shell-quote/commit/601b3406e7012da97771b0ed538288ddb12d9af8)
- document parse env [`cc0efba`](https://github.com/ljharb/shell-quote/commit/cc0efba0bce75aaab1ead72e81470154a71ec525)
- better parse recursion to capture the containing quotes [`8467961`](https://github.com/ljharb/shell-quote/commit/84679611fd5843777d3d94f157a7b6efe11097ca)
- now just 2 tests failing with a subtle regex reordering [`5448a02`](https://github.com/ljharb/shell-quote/commit/5448a02d356722ec8ef57db2e075e10566e2dcdb)
- pass another test by using "" as the undefined [`46e6cf4`](https://github.com/ljharb/shell-quote/commit/46e6cf4b974e1cec0601e81a0dc2820dc849f775)
- fixed a failing env test [`17d1fda`](https://github.com/ljharb/shell-quote/commit/17d1fdac759e7a94ffc6edc26af27769d30e53bb)
- actually the test was wrong, module works fine [`9d7b727`](https://github.com/ljharb/shell-quote/commit/9d7b727f2911692cffe03e7792b5defad3dd75d2)
- another test to be even more sure [`5afd47b`](https://github.com/ljharb/shell-quote/commit/5afd47ba563d4c1bb7966695e100f63da4b65915)
- failing test for: echo "foo = \"foo\"" [`8dbb280`](https://github.com/ljharb/shell-quote/commit/8dbb2803136a2f7643e7e66b2d6b95f9adfbfd41)

## [0.0.1](https://github.com/ljharb/shell-quote/compare/0.0.0...0.0.1) - 2012-05-18

### Commits

- fixed unescaped metachars and bump [`5ce339f`](https://github.com/ljharb/shell-quote/commit/5ce339feeaf971a5172fe58faa3ac5f90bdfe8b5)
- failing test for unescaped metachars [`a315125`](https://github.com/ljharb/shell-quote/commit/a315125a0742b01799c89469efd20821540694f6)
- fix for escaped spaces [`669b616`](https://github.com/ljharb/shell-quote/commit/669b61610aad3e6f47e8c043e1635dcc4b5ce375)
- failing test for escaped space [`c6ff3dc`](https://github.com/ljharb/shell-quote/commit/c6ff3dc6811816a667e55a69ec09bffa52f5ee0a)

## 0.0.0 - 2012-05-18

### Commits

- readme with examples [`6373c0f`](https://github.com/ljharb/shell-quote/commit/6373c0f56de87702a61063ffae354e2bb989de91)
- package.json [`bc27efa`](https://github.com/ljharb/shell-quote/commit/bc27efa033709ede8483bb6ec0f182dcb2b87061)
- passing the parse test [`69c0f85`](https://github.com/ljharb/shell-quote/commit/69c0f8529825d3fdc700e81d32b75378cef47994)
- crazy initial thing [`d6469c9`](https://github.com/ljharb/shell-quote/commit/d6469c95adf0172adc65c4adab04910486368ee7)
- passing quote tests [`e1d6695`](https://github.com/ljharb/shell-quote/commit/e1d669503f0f159068deb45f14ba3a4bf77e90f0)
- failing parse test [`980aa58`](https://github.com/ljharb/shell-quote/commit/980aa585937d049b152b5e7b08c1e068faaaf378)
- using travis [`1c72261`](https://github.com/ljharb/shell-quote/commit/1c72261f45002744fac3fecec3f0395924d66717)
- expand more escape sequences in parse() [`8b2224c`](https://github.com/ljharb/shell-quote/commit/8b2224c465ef70d2320985c57dc0b8ee1c0a3664)

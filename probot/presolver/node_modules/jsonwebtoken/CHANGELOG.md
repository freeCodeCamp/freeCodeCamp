# Change Log


All notable changes to this project will be documented in this file starting from version **v4.0.0**.
This project adheres to [Semantic Versioning](http://semver.org/).

## 8.3.0 - 2018-06-11

 - docs: add some clarifications (#473) ([cd33cc81f06068b9df6c224d300dc6f70d8904ab](https://github.com/auth0/node-jsonwebtoken/commit/cd33cc81f06068b9df6c224d300dc6f70d8904ab)), closes [#473](https://github.com/auth0/node-jsonwebtoken/issues/473)
 - ci: fix ci execution, remove not needed script (#472) ([c8ff7b2c3ffcd954a64a0273c20a7d1b22339aa5](https://github.com/auth0/node-jsonwebtoken/commit/c8ff7b2c3ffcd954a64a0273c20a7d1b22339aa5)), closes [#472](https://github.com/auth0/node-jsonwebtoken/issues/472)
 - new feature: Secret callback revisited (#480) ([d01cc7bcbdeb606d997a580f967b3169fcc622ba](https://github.com/auth0/node-jsonwebtoken/commit/d01cc7bcbdeb606d997a580f967b3169fcc622ba)), closes [#480](https://github.com/auth0/node-jsonwebtoken/issues/480)
 - docs:Update README.md (#461) ([f0e0954505f274da95a8d9603598e455b4d2c894](https://github.com/auth0/node-jsonwebtoken/commit/f0e0954505f274da95a8d9603598e455b4d2c894)), closes [#461](https://github.com/auth0/node-jsonwebtoken/issues/461)


## 8.2.2 - 2018-05-30

 - security: deps: jws@3.1.5 (#477) ([ebde9b7cc75cb7ab5176de7ebc4a1d6a8f05bd51](https://github.com/auth0/node-jsonwebtoken/commit/ebde9b7cc75cb7ab5176de7ebc4a1d6a8f05bd51)), closes [#465](https://github.com/auth0/node-jsonwebtoken/issues/465)
 - docs: add some clarifications (#473) ([cd33cc81f06068b9df6c224d300dc6f70d8904ab](https://github.com/auth0/node-jsonwebtoken/commit/cd33cc81f06068b9df6c224d300dc6f70d8904ab)), closes [#473](https://github.com/auth0/node-jsonwebtoken/issues/473)
 - ci: fix ci execution, remove not needed script (#472) ([c8ff7b2c3ffcd954a64a0273c20a7d1b22339aa5](https://github.com/auth0/node-jsonwebtoken/commit/c8ff7b2c3ffcd954a64a0273c20a7d1b22339aa5)), closes [#472](https://github.com/auth0/node-jsonwebtoken/issues/472)
 - docs: Update README.md (#461) ([f0e0954505f274da95a8d9603598e455b4d2c894](https://github.com/auth0/node-jsonwebtoken/commit/f0e0954505f274da95a8d9603598e455b4d2c894)), closes [#461](https://github.com/auth0/node-jsonwebtoken/issues/461)


## 8.2.1 - 2018-04-05

 - bug fix: Check payload is not null when decoded. (#444) ([1232ae9352ce5fd1ca6c593291ce6ad0834a1ff5](https://github.com/auth0/node-jsonwebtoken/commit/1232ae9352ce5fd1ca6c593291ce6ad0834a1ff5))
 - docs: Clarify that buffer/string payloads must be JSON (#442) ([e8ac1be7565a3fd986d40cb5e31a9f6c4d9aed1b](https://github.com/auth0/node-jsonwebtoken/commit/e8ac1be7565a3fd986d40cb5e31a9f6c4d9aed1b))


## 8.2.0 - 2018-03-02

 - Add a new mutatePayload option (#446) ([d6d7c5e5103f05a92d3633ac190d3025a0455be0](https://github.com/auth0/node-jsonwebtoken/commit/d6d7c5e5103f05a92d3633ac190d3025a0455be0))


## 8.1.1 - 2018-01-22

 - ci: add newer node versions to build matrix (#428) ([83f3eee44e122da06f812d7da4ace1fa26c24d9d](https://github.com/auth0/node-jsonwebtoken/commit/83f3eee44e122da06f812d7da4ace1fa26c24d9d))
 - deps: Bump ms version to add support for negative numbers (#438) ([25e0e624545eaef76f3c324a134bf103bc394724](https://github.com/auth0/node-jsonwebtoken/commit/25e0e624545eaef76f3c324a134bf103bc394724))
 - docs: Minor typo (#424) ([dddcb73ac05de11b81feeb629f6cf78dd03d2047](https://github.com/auth0/node-jsonwebtoken/commit/dddcb73ac05de11b81feeb629f6cf78dd03d2047))
 - bug fix: Not Before (nbf) calculated based on iat/timestamp (#437) ([2764a64908d97c043d62eba0bf6c600674f9a6d6](https://github.com/auth0/node-jsonwebtoken/commit/2764a64908d97c043d62eba0bf6c600674f9a6d6)), closes [#435](https://github.com/auth0/node-jsonwebtoken/issues/435)


## 8.1.0 - 2017-10-09

 - #402: Don't fail if captureStackTrace is not a function (#410) ([77ee965d9081faaf21650f266399f203f69533c5](https://github.com/auth0/node-jsonwebtoken/commit/77ee965d9081faaf21650f266399f203f69533c5))
 - #403: Clarify error wording for "Expected object" error. (#409) ([bb27eb346f0ff675a320b2de16b391a7cfeadc58](https://github.com/auth0/node-jsonwebtoken/commit/bb27eb346f0ff675a320b2de16b391a7cfeadc58))
 - Enhance audience check to verify against regular expressions (#398) ([81501a17da230af7b74a3f7535ab5cd3a19c8315](https://github.com/auth0/node-jsonwebtoken/commit/81501a17da230af7b74a3f7535ab5cd3a19c8315))


## 8.0.1 - 2017-09-12

 - Remove `lodash.isarray` dependency (#394) ([7508e8957cb1c778f72fa9a363a7b135b3c9c36d](https://github.com/auth0/node-jsonwebtoken/commit/7508e8957cb1c778f72fa9a363a7b135b3c9c36d))

## 8.0.0 - 2017-09-06

  **Breaking changes: See [Migration notes from v7](https://github.com/auth0/node-jsonwebtoken/wiki/Migration-Notes:-v7-to-v8)**

 - docs: readme, migration notes ([12cd8f7f47224f904f6b8f39d1dee73775de4f6f](https://github.com/auth0/node-jsonwebtoken/commit/12cd8f7f47224f904f6b8f39d1dee73775de4f6f))
 - verify: remove process.nextTick (#302) ([3305cf04e3f674b9fb7e27c9b14ddd159650ff82](https://github.com/auth0/node-jsonwebtoken/commit/3305cf04e3f674b9fb7e27c9b14ddd159650ff82))
 - Reduce size of NPM package (#347) ([0be5409ac6592eeaae373dce91ec992fa101bd8a](https://github.com/auth0/node-jsonwebtoken/commit/0be5409ac6592eeaae373dce91ec992fa101bd8a))
 - Remove joi to shrink module size (#348) ([2e7e68dbd59e845cdd940afae0a296f48438445f](https://github.com/auth0/node-jsonwebtoken/commit/2e7e68dbd59e845cdd940afae0a296f48438445f))
 - maxAge: Add validation to timespan result ([66a4f8b996c8357727ce62a84605a005b2f5eb18](https://github.com/auth0/node-jsonwebtoken/commit/66a4f8b996c8357727ce62a84605a005b2f5eb18))

## 7.4.3 - 2017-08-17

 - Fix breaking change on 7.4.2 for empty secret + "none" algorithm (sync code style) ([PR 386](https://github.com/auth0/node-jsonwebtoken/pull/386))

## 7.4.2 - 2017-08-04

 - bugfix: sign: add check to be sure secret has a value ([c584d1cbc34b788977b36f17cd57ab2212f1230e](https://github.com/auth0/node-jsonwebtoken/commit/c584d1cbc34b788977b36f17cd57ab2212f1230e))
 - docs: about refreshing tokens ([016fc10b847bfbb76b82171cb530f32d7da2001b](https://github.com/auth0/node-jsonwebtoken/commit/016fc10b847bfbb76b82171cb530f32d7da2001b))
 - docs: verifying with base64 encoded secrets ([c25e9906801f89605080cc71b3ee23a5e45a5811](https://github.com/auth0/node-jsonwebtoken/commit/c25e9906801f89605080cc71b3ee23a5e45a5811))
 - tests: Add tests for ES256 ([89900ea00735f76b04f437c9f542285b420fa9cb](https://github.com/auth0/node-jsonwebtoken/commit/89900ea00735f76b04f437c9f542285b420fa9cb))
 - docs: document keyid as option (#361) ([00086c2c006d7fc1a47bae02fa87d194d79aa558](https://github.com/auth0/node-jsonwebtoken/commit/00086c2c006d7fc1a47bae02fa87d194d79aa558))
 - docs: readme: Using private key with passpharase (#353) ([27a7f1d4f35b662426ff0270526d48658da4c8b7](https://github.com/auth0/node-jsonwebtoken/commit/27a7f1d4f35b662426ff0270526d48658da4c8b7))

## 7.4.1 - 2017-05-17

 - bump ms to v2 due a ReDoS vulnerability (#352) ([adcfd6ae4088c838769d169f8cd9154265aa13e0](https://github.com/auth0/node-jsonwebtoken/commit/adcfd6ae4088c838769d169f8cd9154265aa13e0))

## 7.4.0 - 2017-04-24

 - Add docs about numeric date fields ([659f73119900a4d837650d9b3f5af4e64a2f843b](https://github.com/auth0/node-jsonwebtoken/commit/659f73119900a4d837650d9b3f5af4e64a2f843b))
 - Make Options object optional for callback-ish sign ([e202c4fd00c35a24e9ab606eab89186ade13d0cc](https://github.com/auth0/node-jsonwebtoken/commit/e202c4fd00c35a24e9ab606eab89186ade13d0cc))

## 7.3.0 - 2017-02-13

 - Add more information to `maxAge` option in README ([1b0592e99cc8def293eed177e2575fa7f1cf7aa5](https://github.com/auth0/node-jsonwebtoken/commit/1b0592e99cc8def293eed177e2575fa7f1cf7aa5))
 - Add `clockTimestamp` option to `verify()` you can set the current time in seconds with it (#274) ([8fdc1504f4325e7003894ffea078da9cba5208d9](https://github.com/auth0/node-jsonwebtoken/commit/8fdc1504f4325e7003894ffea078da9cba5208d9))
 - Fix handling non string tokens on `verify()` input (#305) ([1b6ec8d466504f58c5a6e2dae3360c828bad92fb](https://github.com/auth0/node-jsonwebtoken/commit/1b6ec8d466504f58c5a6e2dae3360c828bad92fb)), closes [#305](https://github.com/auth0/node-jsonwebtoken/issues/305)
 - Fixed a simple typo in docs (#287) ([a54240384e24e18c00e75884295306db311d0cb7](https://github.com/auth0/node-jsonwebtoken/commit/a54240384e24e18c00e75884295306db311d0cb7)), closes [#287](https://github.com/auth0/node-jsonwebtoken/issues/287)
 - Raise jws.decode error to avoid confusion with "invalid token" error  (#294) ([7f68fe06c88d5c5653785bd66bc68c5b20e1bd8e](https://github.com/auth0/node-jsonwebtoken/commit/7f68fe06c88d5c5653785bd66bc68c5b20e1bd8e))
 - rauchg/ms.js changed to zeit/ms (#303) ([35d84152a6b716d757cb5b1dd3c79fe3a1bc0628](https://github.com/auth0/node-jsonwebtoken/commit/35d84152a6b716d757cb5b1dd3c79fe3a1bc0628))

## 7.2.1 - 2016-12-07

 - add nsp check to find vulnerabilities on npm test ([4219c34b5346811c07f520f10516cc495bcc70dd](https://github.com/auth0/node-jsonwebtoken/commit/4219c34b5346811c07f520f10516cc495bcc70dd))
 - revert to joi@^6 to keep ES5 compatibility ([51d4796c07344bf817687f7ccfeef78f00bf5b4f](https://github.com/auth0/node-jsonwebtoken/commit/51d4796c07344bf817687f7ccfeef78f00bf5b4f))

## 7.2.0 - 2016-12-06

 - improve the documentation for expiration ([771e0b5f9bed90771fb79140eb38e51a3ecac8f0](https://github.com/auth0/node-jsonwebtoken/commit/771e0b5f9bed90771fb79140eb38e51a3ecac8f0))
 - Restructured a sentence ([ccc7610187a862f7a50177eadc9152eef26cd065](https://github.com/auth0/node-jsonwebtoken/commit/ccc7610187a862f7a50177eadc9152eef26cd065))
 - Allow `keyid` on `sign`. ([b412be91b89acb3a742bb609d3b54e47e1dfc441](https://github.com/auth0/node-jsonwebtoken/commit/b412be91b89acb3a742bb609d3b54e47e1dfc441))
 - upgrade joi ([715e3d928023d414d45c6dc3f096a7c8448139ae](https://github.com/auth0/node-jsonwebtoken/commit/715e3d928023d414d45c6dc3f096a7c8448139ae))
 - upgrade to latest nodes and Travis infrastructure ([3febcc1dd23ecdec1abbf89313959941d15eb47a](https://github.com/auth0/node-jsonwebtoken/commit/3febcc1dd23ecdec1abbf89313959941d15eb47a))


## 7.1.10 - 2016-12-06

 - Bump node-jws version number ([07813dd7194630c9f452684279178af76464a759](https://github.com/auth0/node-jsonwebtoken/commit/07813dd7194630c9f452684279178af76464a759))
 - improve the documentation for expiration ([771e0b5f9bed90771fb79140eb38e51a3ecac8f0](https://github.com/auth0/node-jsonwebtoken/commit/771e0b5f9bed90771fb79140eb38e51a3ecac8f0))

## 7.1.9 - 2016-08-11

 - Revert "Merge branch 'venatir-master'" ([d06359ef3b4e619680e043ee7c16adda16598f52](https://github.com/auth0/node-jsonwebtoken/commit/d06359ef3b4e619680e043ee7c16adda16598f52))



## 7.1.8 - 2016-08-10

 - Fixed tests, however typ: 'JWT' should not be in the options at all, so please review other tests ([01903bcdc61b4ed429acbbd1fe0ffe0db364473b](https://github.com/auth0/node-jsonwebtoken/commit/01903bcdc61b4ed429acbbd1fe0ffe0db364473b))
 - Removing unnecessary extra decoding. jwtString is already verified as valid and signature checked ([55d5834f7b637011e1d8b927ff78a92a5fd521cf](https://github.com/auth0/node-jsonwebtoken/commit/55d5834f7b637011e1d8b927ff78a92a5fd521cf))
 - update changelog ([5117aacd0118a10331889a64e61d8186112d8a23](https://github.com/auth0/node-jsonwebtoken/commit/5117aacd0118a10331889a64e61d8186112d8a23))


## 7.1.7 - 2016-07-29

 - Use lodash.once instead of unlicensed/unmaintained cb ([3ac95ad93ef3068a64e03d8d14deff231b1ed529](https://github.com/auth0/node-jsonwebtoken/commit/3ac95ad93ef3068a64e03d8d14deff231b1ed529))

## 7.1.6 - 2016-07-15

 - fix issue with buffer payload. closes #216 ([6b50ff324b4dfd2cb0e49b666f14a6672d015b22](https://github.com/auth0/node-jsonwebtoken/commit/6b50ff324b4dfd2cb0e49b666f14a6672d015b22)), closes [#216](https://github.com/auth0/node-jsonwebtoken/issues/216)


## 7.1.5 - 2016-07-15

 - update jws in package.json ([b6260951eefc68aae5f4ede359210761f901ff7a](https://github.com/auth0/node-jsonwebtoken/commit/b6260951eefc68aae5f4ede359210761f901ff7a))


## 7.1.4 - 2016-07-14

 - add redundant test ([bece8816096f324511c3efcb8db0e64b75d757a1](https://github.com/auth0/node-jsonwebtoken/commit/bece8816096f324511c3efcb8db0e64b75d757a1))
 - fix an issue of double callback on error ([758ca5eeca2f1b06c32c9fce70642bf488b2e52b](https://github.com/auth0/node-jsonwebtoken/commit/758ca5eeca2f1b06c32c9fce70642bf488b2e52b))

## 7.1.2 - 2016-07-12

 - do not stringify the payload when signing async - closes #224 ([084f537d3dfbcef2bea411cc0a1515899cc8aa21](https://github.com/auth0/node-jsonwebtoken/commit/084f537d3dfbcef2bea411cc0a1515899cc8aa21)), closes [#224](https://github.com/auth0/node-jsonwebtoken/issues/224)

## 7.1.1 - 2016-07-12

 - do not mutate options in jwt.verify, closes #227 ([63263a28a268624dab0927b9ad86fffa44a10f84](https://github.com/auth0/node-jsonwebtoken/commit/63263a28a268624dab0927b9ad86fffa44a10f84)), closes [#227](https://github.com/auth0/node-jsonwebtoken/issues/227)
 - refactor into multiple files ([e11d505207fa33501298300c9accbfb809d8748d](https://github.com/auth0/node-jsonwebtoken/commit/e11d505207fa33501298300c9accbfb809d8748d))

## 7.1.0 - 2016-07-12

 - Exp calculated based on iat. fix #217 ([757a16e0e35ad19f9e456820f55d5d9f3fc76aee](https://github.com/auth0/node-jsonwebtoken/commit/757a16e0e35ad19f9e456820f55d5d9f3fc76aee)), closes [#217](https://github.com/auth0/node-jsonwebtoken/issues/217)

## 7.0.0 - 2016-05-19

 - change jwt.sign to return errors on callback instead of throwing errors ([1e46c5a42aa3dab8478efa4081d8f8f5c5485d56](https://github.com/auth0/node-jsonwebtoken/commit/1e46c5a42aa3dab8478efa4081d8f8f5c5485d56))

## 6.2.0 - 2016-04-29

 - add support for `options.clockTolerance` to `jwt.verify` ([65ddea934f226bf06bc9d6a55be9587515cfc38d](https://github.com/auth0/node-jsonwebtoken/commit/65ddea934f226bf06bc9d6a55be9587515cfc38d))

## 6.1.2 - 2016-04-29

 - fix sign method for node.js 0.12. closes #193 ([9c38374142d3929be3c9314b5e9bc5d963c5955f](https://github.com/auth0/node-jsonwebtoken/commit/9c38374142d3929be3c9314b5e9bc5d963c5955f)), closes [#193](https://github.com/auth0/node-jsonwebtoken/issues/193)
 - improve async test ([7b0981380ddc40a5f1208df520631785b5ffb85a](https://github.com/auth0/node-jsonwebtoken/commit/7b0981380ddc40a5f1208df520631785b5ffb85a))

## 6.1.0 - 2016-04-27

 - verify unsigned tokens ([ec880791c10ed5ef7c8df7bf28ebb95c810479ed](https://github.com/auth0/node-jsonwebtoken/commit/ec880791c10ed5ef7c8df7bf28ebb95c810479ed))

## 6.0.1 - 2016-04-27

This was an immediate change after publishing 6.0.0.

 - throw error on invalid options when the payload is not an object ([304f1b33075f79ed66f784e27dc4f5307aa39e27](https://github.com/auth0/node-jsonwebtoken/commit/304f1b33075f79ed66f784e27dc4f5307aa39e27))

## 6.0.0 - 2016-04-27

 - Change .sign to standard async callback ([50873c7d45d2733244d5da8afef3d1872e657a60](https://github.com/auth0/node-jsonwebtoken/commit/50873c7d45d2733244d5da8afef3d1872e657a60))
 - Improved the options for the `sign` method ([53c3987b3cc34e95eb396b26fc9b051276e2f6f9](https://github.com/auth0/node-jsonwebtoken/commit/53c3987b3cc34e95eb396b26fc9b051276e2f6f9))

    -  throw error on invalid options like `expiresIn` when the payload is not an object ([304f1b33075f79ed66f784e27dc4f5307aa39e27](https://github.com/auth0/node-jsonwebtoken/commit/304f1b33075f79ed66f784e27dc4f5307aa39e27))
    -  `expiresInMinutes` and `expiresInSeconds` are deprecated and no longer supported.
    -  `notBeforeInMinutes` and `notBeforeInSeconds` are deprecated and no longer supported.
    -  `options` are strongly validated.
    -  `options.expiresIn`, `options.notBefore`, `options.audience`, `options.issuer`, `options.subject` and `options.jwtid` are mutually exclusive with `payload.exp`, `payload.nbf`, `payload.aud`, `payload.iss`
    -  `options.algorithm` is properly validated.
    -  `options.headers` is renamed to `options.header`.

 - update CHANGELOG to reflect most of the changes. closes #136 ([b87a1a8d2e2533fbfab518765a54f00077918eb7](https://github.com/auth0/node-jsonwebtoken/commit/b87a1a8d2e2533fbfab518765a54f00077918eb7)), closes [#136](https://github.com/auth0/node-jsonwebtoken/issues/136)
 - update readme ([53a88ecf4494e30e1d62a1cf3cc354650349f486](https://github.com/auth0/node-jsonwebtoken/commit/53a88ecf4494e30e1d62a1cf3cc354650349f486))

## 5.7.0 - 2016-02-16


 - add support for validating multiples issuers. closes #163 ([39d9309ae05648dbd72e5fd1993df064ad0e8fa5](https://github.com/auth0/node-jsonwebtoken/commit/39d9309ae05648dbd72e5fd1993df064ad0e8fa5)), closes [#163](https://github.com/auth0/node-jsonwebtoken/issues/163)


## 5.6.1 - 2016-02-16


 - 5.6.1 ([06d8209d499dbc9a8dd978ab6cbb9c6818fde203](https://github.com/auth0/node-jsonwebtoken/commit/06d8209d499dbc9a8dd978ab6cbb9c6818fde203))
 - fix wrong error when setting expiration on non-object payload. closes #153 ([7f7d76edfd918d6afc7c7cead888caa42ccaceb4](https://github.com/auth0/node-jsonwebtoken/commit/7f7d76edfd918d6afc7c7cead888caa42ccaceb4)), closes [#153](https://github.com/auth0/node-jsonwebtoken/issues/153)



## 5.6.0 - 2016-02-16


 - added missing validations of sub and jti ([a1affe960d0fc52e9042bcbdedb65734f8855580](https://github.com/auth0/node-jsonwebtoken/commit/a1affe960d0fc52e9042bcbdedb65734f8855580))
 - Fix tests in jwt.rs.tests.js which causes 4 to fail ([8aedf2b1f575b0d9575c1fc9f2ac7bc868f75ff1](https://github.com/auth0/node-jsonwebtoken/commit/8aedf2b1f575b0d9575c1fc9f2ac7bc868f75ff1))
 - Update README.md ([349b7cd00229789b138928ca060d3ef015aedaf9](https://github.com/auth0/node-jsonwebtoken/commit/349b7cd00229789b138928ca060d3ef015aedaf9))



## 5.5.4 - 2016-01-04


 - minor ([46552e7c45025c76e3f647680d7539a66bfac612](https://github.com/auth0/node-jsonwebtoken/commit/46552e7c45025c76e3f647680d7539a66bfac612))



## 5.5.3 - 2016-01-04


 - add a console.warn on invalid options for string payloads ([71200f14deba0533d3261266348338fac2d14661](https://github.com/auth0/node-jsonwebtoken/commit/71200f14deba0533d3261266348338fac2d14661))
 - minor ([65b1f580382dc58dd3da6f47a52713776fd7cdf2](https://github.com/auth0/node-jsonwebtoken/commit/65b1f580382dc58dd3da6f47a52713776fd7cdf2))



## 5.5.2 - 2016-01-04


 - fix signing method with sealed objects, do not modify the params object. closes #147 ([be9c09af83b09c9e72da8b2c6166fa51d92aeab6](https://github.com/auth0/node-jsonwebtoken/commit/be9c09af83b09c9e72da8b2c6166fa51d92aeab6)), closes [#147](https://github.com/auth0/node-jsonwebtoken/issues/147)



## 5.5.1 - 2016-01-04


 - fix nbf verification. fix #152 ([786d37b299c67771b5e71a2ca476666ab0f97d98](https://github.com/auth0/node-jsonwebtoken/commit/786d37b299c67771b5e71a2ca476666ab0f97d98)), closes [#152](https://github.com/auth0/node-jsonwebtoken/issues/152)



## 5.5.0 - 2015-12-28


 - improvements to nbf and jti claims ([46372e928f6d2e7398f9b88022ca617d2a3b0699](https://github.com/auth0/node-jsonwebtoken/commit/46372e928f6d2e7398f9b88022ca617d2a3b0699))
 - Remove duplicate payload line (fix bug in IE strict mode) ([8163d698e0c5ad8c44817a5dcd42a15d7e9c6bc8](https://github.com/auth0/node-jsonwebtoken/commit/8163d698e0c5ad8c44817a5dcd42a15d7e9c6bc8))
 - Remove duplicate require('ms') line ([7c00bcbcbf8f7503a1070b394a165eccd41de66f](https://github.com/auth0/node-jsonwebtoken/commit/7c00bcbcbf8f7503a1070b394a165eccd41de66f))
 - Update README to reflect addition of async sign ([d661d4b6f68eb417834c99b36769444723041ccf](https://github.com/auth0/node-jsonwebtoken/commit/d661d4b6f68eb417834c99b36769444723041ccf))



## 5.4.0 - 2015-10-02


 - deprecate expireInMinutes and expireInSeconds - in favor of expiresIn ([39ecc6f8f310f8462e082f1d53de0b4222b29b6f](https://github.com/auth0/node-jsonwebtoken/commit/39ecc6f8f310f8462e082f1d53de0b4222b29b6f))


## 5.3.0 - 2015-10-02


 - 5.3.0 ([5d559ced3fbf10c1adae2e5792deda06ea89bcd3](https://github.com/auth0/node-jsonwebtoken/commit/5d559ced3fbf10c1adae2e5792deda06ea89bcd3))
 - minor ([6e81ff87a3799b0e56db09cbae42a97e784716c4](https://github.com/auth0/node-jsonwebtoken/commit/6e81ff87a3799b0e56db09cbae42a97e784716c4))



## 5.1.0 - 2015-10-02


 - added async signing ([9414fbcb15a1f9cf4fe147d070e9424c547dabba](https://github.com/auth0/node-jsonwebtoken/commit/9414fbcb15a1f9cf4fe147d070e9424c547dabba))
 - Update README.md ([40b2aaaa843442dfb8ee7b574f0a788177e7c904](https://github.com/auth0/node-jsonwebtoken/commit/40b2aaaa843442dfb8ee7b574f0a788177e7c904))



## 5.0.5 - 2015-08-19


 - add ms dep to package.json ([f13b3fb7f29dff787e7c91ebe2eb5adeeb05f251](https://github.com/auth0/node-jsonwebtoken/commit/f13b3fb7f29dff787e7c91ebe2eb5adeeb05f251))
 - add note to explain, related to #96 #101 #6 ([dd8969e0e6ed0bcb9cae905d2b1a96476bd85da3](https://github.com/auth0/node-jsonwebtoken/commit/dd8969e0e6ed0bcb9cae905d2b1a96476bd85da3))
 - add tests for options.headers ([7787dd74e705787c39a871ca29c75a2e0a3948ac](https://github.com/auth0/node-jsonwebtoken/commit/7787dd74e705787c39a871ca29c75a2e0a3948ac))
 - add tests for verify expires ([d7c5793d98c300603440ab460c11665f661ad3a0](https://github.com/auth0/node-jsonwebtoken/commit/d7c5793d98c300603440ab460c11665f661ad3a0))
 - add verify option maxAge (with tests) ([49d54e54f7e70b1c53a2e4ee67e116c907d75319](https://github.com/auth0/node-jsonwebtoken/commit/49d54e54f7e70b1c53a2e4ee67e116c907d75319))
 - fix spelling error in error message ([8078b11b224fa05ac9003ca5aa2c85e9f0128cfb](https://github.com/auth0/node-jsonwebtoken/commit/8078b11b224fa05ac9003ca5aa2c85e9f0128cfb))
 - Fix typo options.header is not a documented option + ([5feaa5b962ccbddeff054817a410f7b0c1e6ce7f](https://github.com/auth0/node-jsonwebtoken/commit/5feaa5b962ccbddeff054817a410f7b0c1e6ce7f))
 - update JWT spec link. closes #112 ([f5fa50f797456a12240589161835c7ea30807195](https://github.com/auth0/node-jsonwebtoken/commit/f5fa50f797456a12240589161835c7ea30807195)), closes [#112](https://github.com/auth0/node-jsonwebtoken/issues/112)


## 5.0.3 - 2015-07-15

 - Added nbf support ([f26ba4e2fa197a20497632b63ffcd13ae93aacc4](https://github.com/auth0/node-jsonwebtoken/commit/f26ba4e2fa197a20497632b63ffcd13ae93aacc4))
 - Added support for subject and jwt id ([ab76ec5bc554e2d1e25376ddb7cea711d86af651](https://github.com/auth0/node-jsonwebtoken/commit/ab76ec5bc554e2d1e25376ddb7cea711d86af651))
 - Fix `this` referring to the global object instead of `module.exports` in `verify()` ([93f554312e37129027fcf4916f48cb8d1b53588c](https://github.com/auth0/node-jsonwebtoken/commit/93f554312e37129027fcf4916f48cb8d1b53588c))
 - Fix typo, line 139 README, complete option for .decode. ([59c110aeb8c7c1847ef2ffd77702d13627c89e10](https://github.com/auth0/node-jsonwebtoken/commit/59c110aeb8c7c1847ef2ffd77702d13627c89e10))
 - minor ([61ff1172272b582902313e958058ff22413494af](https://github.com/auth0/node-jsonwebtoken/commit/61ff1172272b582902313e958058ff22413494af))



## 5.0.2 - 2015-06-15


 - fix typo in docs . closes #86 ([3d3413221f36acef4dfd1cbed87f1f3565cd6f84](https://github.com/auth0/node-jsonwebtoken/commit/3d3413221f36acef4dfd1cbed87f1f3565cd6f84)), closes [#86](https://github.com/auth0/node-jsonwebtoken/issues/86)



## 5.0.1 - 2015-05-15


 - Add option to return header and payload when decoding. ([7254e011b59f892d1947e6c11819281adac7069d](https://github.com/auth0/node-jsonwebtoken/commit/7254e011b59f892d1947e6c11819281adac7069d))
 - Avoid uncaught "SyntaxError: Unexpected token ͧ" error. ([0dc59cd6ee15d83a606acffa7909ee76176ae186](https://github.com/auth0/node-jsonwebtoken/commit/0dc59cd6ee15d83a606acffa7909ee76176ae186))
 - Document complete option in README. ([ec32b20241a74d9681ea26e1a7024b4642468c00](https://github.com/auth0/node-jsonwebtoken/commit/ec32b20241a74d9681ea26e1a7024b4642468c00))
 - Fix example in README, silence verbose logging. ([ba3174d10033c41e9c211a38f1cc67f74fbd7f69](https://github.com/auth0/node-jsonwebtoken/commit/ba3174d10033c41e9c211a38f1cc67f74fbd7f69))
 - Fix link to auth0.com in README ([1b3c5ff72c9bc25e9271646e679f3080f2a042a0](https://github.com/auth0/node-jsonwebtoken/commit/1b3c5ff72c9bc25e9271646e679f3080f2a042a0))
 - Immediate return if not decoded. ([851bda2b10168f3269c3da6e74d310742f31a193](https://github.com/auth0/node-jsonwebtoken/commit/851bda2b10168f3269c3da6e74d310742f31a193))
 - Prevent throw on undefined/null secret ([0fdf78d4dbf609455f3277d6169a987aef0384d4](https://github.com/auth0/node-jsonwebtoken/commit/0fdf78d4dbf609455f3277d6169a987aef0384d4))
 - Removed path from test ([d6240e24186732d368bffe21143becf44c38f0d6](https://github.com/auth0/node-jsonwebtoken/commit/d6240e24186732d368bffe21143becf44c38f0d6))
 - Simplified checking for missing key ([f1cffd033bffc44f20558eda4a797c3fa2f4ee05](https://github.com/auth0/node-jsonwebtoken/commit/f1cffd033bffc44f20558eda4a797c3fa2f4ee05))
 - Typo ([ffe68dbe0219bab535c1018448eb4c0b22f1f902](https://github.com/auth0/node-jsonwebtoken/commit/ffe68dbe0219bab535c1018448eb4c0b22f1f902))
 - Update CHANGELOG.md ([927cce0dad1bc9aad75aeef53e276cf4cfc0d776](https://github.com/auth0/node-jsonwebtoken/commit/927cce0dad1bc9aad75aeef53e276cf4cfc0d776))
 - Update CHANGELOG.md ([6879e0fdde222995c70a3a69a4af94993d9c667e](https://github.com/auth0/node-jsonwebtoken/commit/6879e0fdde222995c70a3a69a4af94993d9c667e))
 - Update CHANGELOG.md ([c5596c10e8705727fa13e0394184a606083078bc](https://github.com/auth0/node-jsonwebtoken/commit/c5596c10e8705727fa13e0394184a606083078bc))
 - Update CHANGELOG.md ([07541f0315f26d179e1cde92732b6124d6869b6f](https://github.com/auth0/node-jsonwebtoken/commit/07541f0315f26d179e1cde92732b6124d6869b6f))
 - Update CHANGELOG.md ([e6465d48ddd1dc2c3297229b28c78fd5490a2ba9](https://github.com/auth0/node-jsonwebtoken/commit/e6465d48ddd1dc2c3297229b28c78fd5490a2ba9))

## [5.0.0] - 2015-04-11

### Changed

 - [sign] Only set defautl `iat` if the user does not specify that argument.

  https://github.com/auth0/node-jsonwebtoken/commit/e900282a8d2dff1d4dec815f7e6aa7782e867d91
  https://github.com/auth0/node-jsonwebtoken/commit/35036b188b4ee6b42df553bbb93bc8a6b19eae9d
  https://github.com/auth0/node-jsonwebtoken/commit/954bd7a312934f03036b6bb6f00edd41f29e54d9
  https://github.com/auth0/node-jsonwebtoken/commit/24a370080e0b75f11d4717cd2b11b2949d95fc2e
  https://github.com/auth0/node-jsonwebtoken/commit/a77df6d49d4ec688dfd0a1cc723586bffe753516

### Security

 - [verify] Update to jws@^3.0.0 and renaming `header.alg` mismatch exception to `invalid algorithm` and adding more mismatch tests.

  As `jws@3.0.0` changed the verify method signature to be `jws.verify(signature, algorithm, secretOrKey)`, the token header must be decoded first in order to make sure that the `alg` field matches one of the allowed `options.algorithms`. After that, the now validated `header.alg` is passed to `jws.verify`

 As the order of steps has changed, the error that was thrown when the JWT was invalid is no longer the `jws` one:
 ```
 { [Error: Invalid token: no header in signature 'a.b.c'] code: 'MISSING_HEADER', signature: 'a.b.c' }
 ```

 That old error (removed from jws) has been replaced by a `JsonWebTokenError` with message `invalid token`.

 > Important: versions >= 4.2.2 this library are safe to use but we decided to deprecate everything `< 5.0.0` to prevent security warnings from library `node-jws` when doing `npm install`.

  https://github.com/auth0/node-jsonwebtoken/commit/634b8ed0ff5267dc25da5c808634208af109824e
  https://github.com/auth0/node-jsonwebtoken/commit/9f24ffd5791febb449d4d03ff58d7807da9b9b7e
  https://github.com/auth0/node-jsonwebtoken/commit/19e6cc6a1f2fd90356f89b074223b9665f2aa8a2
  https://github.com/auth0/node-jsonwebtoken/commit/1e4623420159c6410616f02a44ed240f176287a9
  https://github.com/auth0/node-jsonwebtoken/commit/954bd7a312934f03036b6bb6f00edd41f29e54d9
  https://github.com/auth0/node-jsonwebtoken/commit/24a370080e0b75f11d4717cd2b11b2949d95fc2e
  https://github.com/auth0/node-jsonwebtoken/commit/a77df6d49d4ec688dfd0a1cc723586bffe753516

## [4.2.2] - 2015-03-26
### Fixed

 - [asymmetric-keys] Fix verify for RSAPublicKey formated keys (`jfromaniello - awlayton`)
  https://github.com/auth0/node-jsonwebtoken/commit/402794663b9521bf602fcc6f2e811e7d3912f9dc
  https://github.com/auth0/node-jsonwebtoken/commit/8df6aabbc7e1114c8fb3917931078254eb52c222

## [4.2.1] - 2015-03-17
### Fixed

 - [asymmetric-keys] Fixed issue when public key starts with BEING PUBLIC KEY (https://github.com/auth0/node-jsonwebtoken/issues/70) (`jfromaniello`)
  https://github.com/auth0/node-jsonwebtoken/commit/7017e74db9b194448ff488b3e16468ada60c4ee5

## [4.2.0] - 2015-03-16
### Security

 - [asymmetric-keys] Making sure a token signed with an asymmetric key will be verified using a asymmetric key.
   When the verification part was expecting a token digitally signed with an asymmetric key (RS/ES family) of algorithms an attacker could send a token signed with a symmetric algorithm (HS* family).

  The issue was caused because the same signature was used to verify both type of tokens (`verify` method parameter: `secretOrPublicKey`).

  This change adds a new parameter to the verify called `algorithms`. This can be used to specify a list of supported algorithms, but the default value depends on the secret used: if the secretOrPublicKey contains the string `BEGIN CERTIFICATE` the default is `[ 'RS256','RS384','RS512','ES256','ES384','ES512' ]` otherwise is `[ 'HS256','HS384','HS512' ]`. (`jfromaniello`)
  https://github.com/auth0/node-jsonwebtoken/commit/c2bf7b2cd7e8daf66298c2d168a008690bc4bdd3
  https://github.com/auth0/node-jsonwebtoken/commit/1bb584bc382295eeb7ee8c4452a673a77a68b687

## [4.1.0] - 2015-03-10
### Changed
- Assume the payload is JSON even when there is no `typ` property. [5290db1](https://github.com/auth0/node-jsonwebtoken/commit/5290db1bd74f74cd38c90b19e2355ef223a4d931)

## [4.0.0] - 2015-03-06
### Changed
- The default encoding is now utf8 instead of binary. [92d33bd](https://github.com/auth0/node-jsonwebtoken/commit/92d33bd99a3416e9e5a8897d9ad8ff7d70a00bfd)
- Add `encoding` as a new option to `sign`. [1fc385e](https://github.com/auth0/node-jsonwebtoken/commit/1fc385ee10bd0018cd1441552dce6c2e5a16375f)
- Add `ignoreExpiration` to `verify`. [8d4da27](https://github.com/auth0/node-jsonwebtoken/commit/8d4da279e1b351ac71ace276285c9255186d549f)
- Add `expiresInSeconds` to `sign`. [dd156cc](https://github.com/auth0/node-jsonwebtoken/commit/dd156cc30f17028744e60aec0502897e34609329)

### Fixed
- Fix wrong error message when the audience doesn't match. [44e3c8d](https://github.com/auth0/node-jsonwebtoken/commit/44e3c8d757e6b4e2a57a69a035f26b4abec3e327)
- Fix wrong error message when the issuer doesn't match. [44e3c8d](https://github.com/auth0/node-jsonwebtoken/commit/44e3c8d757e6b4e2a57a69a035f26b4abec3e327)
- Fix wrong `iat` and `exp` values when signing with `noTimestamp`. [331b7bc](https://github.com/auth0/node-jsonwebtoken/commit/331b7bc9cc335561f8806f2c4558e105cb53e0a6)

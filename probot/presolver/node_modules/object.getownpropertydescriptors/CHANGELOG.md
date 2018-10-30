2.0.3 / 2016-07-26
=================
  * [Fix] Update implementation to not return `undefined` descriptors
  * [Deps] update `es-abstract`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `@es-shims/api`, `jscs`, `nsp`, `tape`, `semver`
  * [Dev Deps] remove unused eccheck script + dep
  * [Tests] up to `node` `v6.3`, `v5.12`, `v4.4`
  * [Tests] use pretest/posttest for linting/security
  * Update to stage 4

2.0.2 / 2016-01-27
=================
  * [Fix] ensure that `Object.getOwnPropertyDescriptors` does not fail when `Object.prototype` has a poisoned setter (#1, #2)

2.0.1 / 2016-01-27
=================
  * [Deps] move `@es-shims/api` to dev deps

2.0.0 / 2016-01-27
=================
  * [Breaking] implement the es-shims API
  * [Deps] update `define-properties`, `es-abstract`
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `semver`
  * [Tests] fix npm upgrades in older nodes
  * [Tests] up to `node` `v5.5`
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG

1.0.4 / 2015-07-20
=================
  * [Tests] Test on `io.js` `v2.4`
  * [Deps, Dev Deps] Update `define-properties`, `tape`, `eslint`, `semver`

1.0.3 / 2015-06-28
=================
  * Increase robustness by caching `Array#{concat, reduce}`
  * [Deps] Update `define_properties`
  * [Dev Deps] Update `eslint`, `semver`, `nsp`
  * [Tests] Test up to `io.js` `v2.3`

1.0.2 / 2015-05-23
=================
  * Update `es-abstract`, `tape`, `eslint`, `jscs`, `semver`, `covert`
  * Test up to `io.js` `v2.0`

1.0.1 / 2015-03-20
=================
  * Update `es-abstract`, `editorconfig-tools`, `nsp`, `eslint`, `semver`, `replace`

1.0.0 / 2015-02-17
=================
  * v1.0.0

1.2.0 / 2018-09-27
=================
  * [New] create ES2015 entry point/property, to replace ES6
  * [Fix] Ensure optional arguments are not part of the length (#29)
  * [Deps] update `is-callable`
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `semver`, `object-inspect`, `replace`
  * [Tests] avoid util.inspect bug with `new Date(NaN)` on node v6.0 and v6.1.
  * [Tests] up to `node` `v10.11`, `v9.11`, `v8.12`, `v6.14`, `v4.9`

1.1.1 / 2016-01-03
=================
  * [Fix: ES5] fix coercion logic: ES5’s ToPrimitive does not coerce any primitive value, regardless of hint (#2)

1.1.0 / 2015-12-27
=================
  * [New] add `Symbol.toPrimitive` support
  * [Deps] update `is-callable`, `is-date-object`
  * [Dev Deps] update `eslint`, `tape`, `semver`, `jscs`, `covert`, `nsp`, `@ljharb/eslint-config`
  * [Dev Deps] remove unused deps
  * [Tests] up to `node` `v5.3`
  * [Tests] fix npm upgrades on older node versions
  * [Tests] fix testling
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG

1.0.1 / 2016-01-03
=================
  * [Fix: ES5] fix coercion logic: ES5’s ToPrimitive does not coerce any primitive value, regardless of hint (#2)
  * [Deps] update `is-callable`, `is-date-object`
  * [Dev Deps] update `eslint`, `tape`, `semver`, `jscs`, `covert`, `nsp`, `@ljharb/eslint-config`
  * [Dev Deps] remove unused deps
  * [Tests] up to `node` `v5.3`
  * [Tests] fix npm upgrades on older node versions
  * [Tests] fix testling
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG

1.0.0 / 2015-03-19
=================
  * Initial release.

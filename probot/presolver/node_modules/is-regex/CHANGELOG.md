1.0.4 / 2016-02-18
=================
  * [Fix] ensure that `lastIndex` is not mutated (#3)
  * [Refactor] when try/catch is needed, bail early if the value lacks an own `lastIndex` data property
  * [Refactor] use an early return instead of a ternary
  * [Refactor] bail earlier when the value is falsy
  * Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG
  * [Dev Deps] update `tape`, `jscs`, `editorconfig-tools`, `eslint`, `semver`, `replace`, `nsp`, `covert`, `@ljharb/eslint-config`
  * [Tests] on all the node and io.js versions; improve test matri
  * [Tests] Fix tests for faked @@toStringTag

1.0.3 / 2015-01-29
=================
  * If @@toStringTag is not present, use the old-school Object#toString test.

1.0.2 / 2015-01-29
=================
  * Improve optimization by separating the try/catch, and bailing out early when not typeof "object".

1.0.1 / 2015-01-28
=================
  * Update `jscs`, `tape`, `covert`
  * Use RegExp#exec to test if something is a regex, which works even with ES6 @@toStringTag.

1.0.0 / 2014-05-19
=================
  * Initial release.

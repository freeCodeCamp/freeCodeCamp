Changelog
=========

v0.5.1
------

- Fix prototype pollution vulnerability (thanks to @mwakerman for the PR)
- Avoid using deprecated Buffer API (thanks to @ChALkeR for the PR)

v0.5.0
------

- Auto-testing provided by Travis CI;
- Support older Node.JS versions (`v0.11.x` and `v0.10.x`);
- Removed tests files from npm package.

v0.4.2
------

- Fix for `null` as an argument.

v0.4.1
------

- Removed test code from <b>npm</b> package
  ([see pull request #21](https://github.com/unclechu/node-deep-extend/pull/21));
- Increased minimal version of Node from `0.4.0` to `0.12.0`
  (because can't run tests on lesser version anyway).

v0.4.0
------

- **WARNING!** Broken backward compatibility with `v0.3.x`;
- Fixed bug with extending arrays instead of cloning;
- Deep cloning for arrays;
- Check for own property;
- Fixed some documentation issues;
- Strict JS mode.

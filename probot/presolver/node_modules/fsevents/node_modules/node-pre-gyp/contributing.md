# Contributing


### Releasing a new version:

- Ensure tests are passing on travis and appveyor
- Run `node scripts/abi_crosswalk.js` and commit any changes
- Update the changelog
- Tag a new release like: `git tag -a v0.6.34 -m "tagging v0.6.34" && git push --tags`
- Run `npm publish`

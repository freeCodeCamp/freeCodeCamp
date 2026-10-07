# Contributing

**`README.md` is a generated file. Do not edit it directly.** Edit the files inside `.README` instead.

## Pre-Commit Hook

When making a commit, the following Pre-Commit hooks run:

* test and documentation checks
* tests
* lint
* commit message validation (see "Commit Messages" below)

## Commit Messages

All commit messages must begin with one of the following prefixes:

* `fix: `
* `feat: `
* `refactor: `
* `docs: `
* `chore: `

The prefix is used to bump the correct segment of the version number during the automatic release.

## Tests

Run them with `npm test`.

## Lint

Run with `npm run lint`.

## Adding a Rule

### Source & Tests

1. Create a file in `tests/rules/assertions` named the `camelCase` version of your rule name with the following template:
  * `export default { invalid: [], valid: [] }`
2. Add your test file to `tests/rules/index.js`
3. Create a file in `src/rules` named the `camelCase` version  of your rule name
4. Add your rule file to `src/index.js`

### Adding Documentation

1. Create new file in `./.README/rules/[rule-name].md`.
  * Use [./.README/rules/require-valid-file-annotation.md](./.README/rules/require-valid-file-annotation.md) as a template.
  * Ensure that rule documentation document includes `<!-- assertions spaceAfterTypeColon -->` declaration.
1. Update [./.README/README.md](/.README/README.md) to include the new rule.
1. Run `npm run create-readme` to generate the new `README.md` (you should be on `master` branch for this command to work)

Note: Sections "The following patterns are considered problems:" and "The following patterns are not considered problems:" are **generated automatically** using the test cases.

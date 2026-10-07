# Developing React Fontawesome

## Tasks

The following commands are available through `npm run`

| Command         | Purpose                                                        |
| --------------- | -------------------------------------------------------------- |
| build           | Build this project with TSUP                                   |
| format:check    | Check formatting of all files with Prettier                    |
| format:fix      | Auto-fix formatting of all files with Prettier                 |
| format:staged   | Auto-fix formatting of current staged files with Prettier      |
| lint            | Check linting using ESLint                                     |
| lint:commits    | Lint commits against conventional-commits specs                |
| test            | Run tests                                                      |
| test:watch      | Run tests in 'watch' mode                                      |
| test:prepublish | Run tests against both v6 and v7 peer dependencies             |
| validate-types  | Validate types and check that TypeScript compiles successfully |

## Releasing a new version

<a name="release"></a>

This project has been configured to use [semantic-release](https://semantic-release.gitbook.io/semantic-release) for automated version management and package publishing. However, we do not run semantic-release in the CI - we prefer to run it locally since each maintainer has their own access tokens for npm and our private PRO registry.

Running semantic-release will:

- analyse our recent commits to determine what the next release version should be according to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [Semantic Versioning](http://semver.org/)
- set the new version in `package.json` & `package-lock.json`
- generate release notes and update the `CHANGELOG.md` file
- publish the updated package to both public and private npm registries
- create relevant tags and release notes on GitHub
- push release-related changes to GitHub with `chore(release): vX.X.X [skip ci]`

### Release Step-by-step Process

1. Add any new contributors to the `contributors` section in `package.json` (if relevant)
2. Update the `README.md` contributors section (if relevant)
3. Ensure the tests pass with both v6 and v7 peer dependencies:
   - `npm run test:prepublish`
4. Build the distributable with `npm run build`
5. Run semantic-release dry-run first to ensure everything looks correct:
   - `npx semantic-release --dry-run`
6. If the output of the dry-run looks good, run it for real:
   - `npx semantic-release`
7. Check the GitHub repository, npm listing and Cloudsmith packages to ensure everything has published correctly and as expected
8. Go and relax!

## Authenticating with the npm.fontawesome.com registry

Contributors with authorization to publish to npm.fontawesome.com will receive an invite
from a Font Awesome project owner.

1. Respond to the invite in your email
2. Let the owner know when you've setup your account
3. Owner will add you to the team

You can then run:

```
npm login --registry https://npm.fontawesome.com
```

- The username is the "slug" for your Cloudsmith account. For example mine is "rob-madole".
- Enter the password that you setup just a few minutes ago.
- It says that your email is PUBLIC. Pretty sure that's false since the auth is through Cloudsmith.
- This doesn't overwrite your standard login, just adds to your `~/.npmrc`

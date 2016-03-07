## FreeCodeCamp Pull Request template
Please, go through these steps before you submit a PR.

1. Make sure that your PR is not a duplicate.
2. If not, then make sure that:

  2.1. You have done your changes in a separate branch. Branches MUST have descriptive names that start with either the `fix/` or `feature/` prefixes. Good examples are: `fix/signin-issue` or `feature/issue-templates`.

  2.2. You have a descriptive commit message with a short title (first line).

  2.3. You have only one commit (if not, [squash](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/git-rebase#squashing-multiple-commits-into-one) them into one commit).

  2.4. `npm test` doesn't throw any error. If it does, fix them first and amend your commit (`git commit --amend`).

3. **After** these steps, you're ready to open a pull request.

  3.1. Your pull request MUST NOT target the `master` branch on FreeCodeCamp's repository. You probably want to target `staging` instead.

  3.2. Give a descriptive title to your PR.

  3.3. Provide a description of your changes.

  3.4. Put `closes #XXXX` in your comment to auto-close the issue that your PR fixes (if such).

IMPORTANT: Please review the [CONTRIBUTING.md](../CONTRIBUTING.md) file for detailed contributing guidelines.

**PLEASE REMOVE THIS TEMPLATE BEFORE SUBMITTING**

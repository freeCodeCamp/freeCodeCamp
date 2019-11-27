<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# How to open a Pull Request

## How to prepare a good Pull Request title:

When opening a Pull Request(PR), use the following scope table to decide what to title your PR in the following format:
`fix/feat/chore/refactor/docs/perf (scope): PR Title`

An example is `fix(learn): Fixed tests for the do...while loop challenge`.

| Scope | Documentation |
|---|---|
| `learn`,`curriculum` | For Pull Requests making changes to the curriculum challenges. |
| `client` | For Pull Requests making changes to client platform logic or user interface |
| `guide` | For Pull Requests which make changes to the guide. |
| `docs` | For Pull Requests making changes to the project's documentation. |

## Proposing a Pull Request (PR)

1. Once the edits have been committed, you will be prompted to create a pull request on your fork's GitHub Page.

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. By default, all pull requests should be against the freeCodeCamp main repo, `master` branch.

    Make sure that your Base Fork is set to freeCodeCamp/freeCodeCamp when raising a Pull Request.

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Submit the pull request from your branch to freeCodeCamp's `master` branch.

4. In the body of your PR include a more detailed summary of the changes you made and why.

    - You will be presented with a pull request template. This is a checklist that you should have followed before opening the pull request.

    - Fill in the details as you see fit. This information will be reviewed and the reviewers will decide whether or not your pull request is accepted.

    - If the PR is meant to address an existing GitHub Issue then, at the end of
      your PR's description body, use the keyword _Closes_ with the issue number to [automatically close that issue if the PR is accepted and merged](https://help.github.com/en/articles/closing-issues-using-keywords).
      
      > Example: `Closes #123` will close issue 123

5. Indicate if you have tested on a local copy of the site or not.

    This is very important when making changes that are not just edits to text content like documentation or a challenge description. Examples of changes that need local testing include JavaScript, CSS, or HTML which could change the functionality or layout of a page.

Follow these guidelines to contribute to the codebase. This is highly recommended if you want to contribute regularly.

Ignoring these steps may soil your copy which makes the contributing, maintaining, and reviewing processes difficult.

## Contributing to the Codebase

You can now make changes to files and commit your changes to your fork, which you can prepare by reading [how to set up freecodecamp](how-to-setup-freecodecamp-locally.md).

Follow these steps:

1. Validate that you are on the `main` branch:

   ```console
   git status
   ```

   You should get an output like this:

   ```console
   On branch main
   Your branch is up-to-date with 'origin/main'.

   nothing to commit, working directory clean
   ```

   If you got different message, then you aren't on main or your working directory isn't clean, resolve any outstanding files/commits and checkout `main`:

   ```console
   git checkout main
   ```

2. Sync the latest changes from the freeCodeCamp upstream `main` branch to your `main` fork branch:

   > [!WARNING] If you have any outstanding pull requests that you made from the `main` branch of your fork, you will lose them at the end of this step.
   > 
   > You should ensure your pull request is merged by a moderator before performing this step. To avoid this scenario, you should **always** work on a branch other than the `main`.

   This step **will sync the latest changes** from the main repository of freeCodeCamp.

   Update your copy of the freeCodeCamp upstream repository:

   ```console
   git fetch upstream
   ```

   Hard reset your main branch with the freeCodeCamp main:

   ```console
   git reset --hard upstream/main
   ```

   Push your main branch to your origin to have a clean history on your fork on GitHub:

   ```console
   git push origin main --force
   ```

   You can validate your current main matches the upstream/main by performing a diff:

   ```console
   git diff upstream/main
   ```

   The resulting output should be empty. This process is important, because you will be rebase your branch on top of the latest `upstream/main` as often as possible to avoid conflicts later.

3. Create a fresh new branch:

   Working on a separate branch for each issue helps you keep your work copy clean. You should never work on the `main`. This will soil your copy of freeCodeCamp and you may have to start over with a fresh clone or fork.

   Check that you are on `main` as explained previously, and branch off from there:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Your branch name should start with a `fix/`, `feat/`, `docs/`, etc. Avoid using issue numbers in branches. Keep them short, meaningful and unique.

   Some examples of good branch names are:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Edit pages and work on code in your favorite text editor.

5. Once you are happy with the changes you should optionally run freeCodeCamp to preview the changes.

6. Make sure you fix any errors and check the formatting of your changes.

7. Check and confirm the files you are updating:

   ```console
   git status
   ```

   This should show a list of `unstaged` files that you have edited.

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes were not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in the working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Stage the changes and make a commit:

   In this step, you should only mark files that you have edited or added yourself. You can perform a reset and resolve files that you did not intend to change if needed.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Or you can add all the `unstaged` files to the staging area:

   ```console
   git add .
   ```

   Only the files that were moved to the staging area will be added when you make a commit.

   ```console
   git status
   ```

   Output:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   Now, you can commit your changes with a short message like so:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Some examples:

   ```md
   fix: add test for JavaScript - for loop step
   feat: add link for article for alexa skills
   ```

   Make a conventional commit message. This is a good practice as a developer, and you will be following standard practices.

   Some examples of conventional commit messages are:

   ```md
   fix: improve HTML step
   fix: fix build scripts for Travis-CI
   feat: add link to JavaScript hoisting article
   docs: update contributing guidelines
   ```

   Keep these short, not more than 50 characters. You can always add additional information in the description of the commit message.

   This does not take any more time than an unconventional message like 'update file' or 'add index.md'

   You can learn more about why you should use conventional commits [here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. If you realize that you need to edit a file or update the commit message after making a commit you can do so after editing the files with:

   ```console
   git commit --amend
   ```

   This will open up a default text editor like `nano` or `vi` where you can edit the commit message title and add/edit the description.

10. Next, you can push your changes to your fork:

    ```console
    git push origin branch/name-here
    ```

## Proposing a Pull Request (PR)

After you've committed your changes, check here for [how to open a Pull Request](how-to-open-a-pull-request.md).

## Quick commands reference

A quick reference to the commands that you will need when working.

| command                                                           | description                                                                         |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `pnpm test`                                                       | Run all JS tests in the system, including client, server, lint and challenge tests. |
| `pnpm run test-client`                                            | Run the client test suite.                                                          |
| `pnpm run test:curriculum`                                        | Run the curriculum test suite.                                                      |
| `FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum`       | Test a specific Block.                                                              |
| `FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum` | Test a specific SuperBlock.                                                         |
| `pnpm run test-curriculum-full-output`                            | Run the curriculum test suite, without bailing after the first error                |
| `pnpm run test-server`                                            | Run the server test suite.                                                          |
| `pnpm run e2e`                                                    | Run the Cypress end to end tests.                                                   |
| `pnpm run clean`                                                  | Uninstalls all dependencies and cleans up caches.                                   |
| `pnpm run storybook`                                              | Starts Storybook for component library development.                                 |

This page describes how to contribute to the freeCodeCamp tutorials and projects that are completed using the CodeRoad VS Code extension.

## How the tutorials work

The freeCodeCamp tutorials that use CodeRoad each have their own repo under the freeCodeCamp GitHub organization. They all start with `learn-`. For example, `https://github.com/freeCodeCamp/learn-bash-by-building-a-boilerplate/`.

Each tutorial repo has a `main` branch and a "version" branch, e.g. `v1.0.0`.

The two main files on the `main` branch are `TUTORIAL.md` and `coderoad.yaml`. `TUTORIAL.md` contains all the instructions, hints, titles, and so on, for the tutorial. `coderoad.yaml` contains instructions for CodeRoad, such as what commands to run and when, what files to watch for changes, and what version branch to use for the steps.

The "version" branch contains the commits that will be loaded on each step of a tutorial. The commit messages on this branch have to be specific. The first commit needs `INIT` for its message and contains all the files to load before the first lesson.

Subsequent commit messages have to match the step number in `TUTORIAL.md` from the `main` branch. For example, the commit with the message `10.1` will be loaded when a user goes to step `10.1`.

In order to make changes to commits on a version branch, you would need to rebase and edit the commits you want to change. This will rewrite the Git history, so we cannot accept PRs to these types of branches. Once a version branch is on the freeCodeCamp repo, it should never change.

> [!WARNING]
>
> Never make or push changes to a version branch that is on one of the freeCodeCamp repos. Always create a new one

## How to contribute

### Prerequisites

Install the [CodeRoad CLI tools](https://www.npmjs.com/package/@coderoad/cli) with `npm install -g @coderoad/cli`.

There have been some issues with the latest version. If `coderoad --version` doesn't work after installing, downgrade to `0.7.0` with `npm install -g @coderoad/cli@0.7.0`.

### Working on `main`

This set of instructions is for PRs that only make minor changes on `main` to **existing lessons**. That mainly consists of typo, grammar, hint, and instructional changes or fixes in the `TUTORIAL.md` file.

For everything else, including adding or deleting lessons, follow the [working on a version branch instructions](#working-on-version-branch). You will not need to create a new version branch for this - you can create a PR following the instructions below.

> [!NOTE]
>
> These changes will use the existing version branch. If they are substantial, feel free to add them to `CHANGELOG.md`. Most of the time, a good commit message should work

You never need to modify the `tutorial.json` file directly. That will be created with the CLI tools.

If you are only making minor changes like fixing a typo or grammatical error, you don't have to test your changes.

Follow these instructions to make a PR, keeping in mind that instructions usually use the lessons around them for context:

- Create a copy of the latest version branch with `git branch vX.X.X upstream/vX.X.X` - you do not need to check this branch out, it just needs to exist.
- Create and checkout a new branch off of `main`
- Make **and commit** your changes. Reminder: You don't need to change anything in the `tutorial.json` file. You likely only need to make changes to `TUTORIAL.md`
- Run `coderoad build` to recreate the `tutorial.json` file
- Commit the changes with `update json` as the message
- Make a PR

### Testing changes on `main`

If you want to test your changes to `main` after using the above instructions, follow these instructions:

- Follow the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) to run a container
- Start the tutorial using the `tutorial.json` file on the new branch

### Reviewing PR's to `main`

If reviewing a PR that only changes `main` with instructional or grammar issues as described above, the changes in `TUTORIAL.md` should match the changes in `tutorial.json`.

The `tutorial.json` file should not have changes to commit hashes, or step/level ids. Startup or level commands or file watchers likely should not be changed either. There are exceptions if there's an issue with a step, but they should be treated with more caution.

Also, keep in mind that instructions usually use the lessons around them for context, so make sure they make sense.

### Working on version branch

> [!WARNING]
>
> Reminder: Never make or push changes to a version branch that is on one of the freeCodeCamp repos. Always create a new one

There's no easy way to see exactly what changed between version branches since the Git history will be rewritten. Accepting new version branches to use will need to be done with careful consideration and testing.

These instructions are for changing anything on a "version" branch, such as tests, test text, reset files, adding and deleting steps, among other things.

Follow these instructions to create a new version:

- Checkout the **latest** version branch with `git checkout -b vX.X.X upstream/vX.X.X`
- Create a new branch off of that, incrementing the version, with `git checkout -b vX.X.Y`
- Make your changes to the version branch. See more info in the [CodeRoad Documentation](https://coderoad.github.io/docs/edit-tutorial) for how to work with tutorials
- Push the new branch to your fork with `git push -u origin vX.X.Y`
- Checkout the `main` branch
- Create a new branch off `main`. e.g. `feat/version-X.X.Y`
- Change the `uri` in `coderoad.yaml` to your fork of the repo. This is so you and reviewers can test it before pushing it to the freeCodeCamp repo. Change the version to the new branch in the two spots of that file. Add your changes for the new version to `CHANGELOG.md`. Make any other changes you need.
- Commit your changes with the message `feat: release version X.X.Y - <optional description>`
- Run `coderoad build` to create a new `tutorial.json` file
- Add and commit the file
- Push the changes to your fork
- Test your changes following the [testing instructions below](#testing-changes-to-a-version-branch). Make any additional changes and commit them as you just did, or, if you are satisfied, follow the rest of the instructions
- Make a PR to `main` using your new `feat/version-X.X.Y` branch. Give it a title of `version X.X.Y ready for review`. This will not be merged, it is just to let reviewers know that there is a new version ready
- Leave it here for reviewers

### Testing changes to a version branch

- Follow the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) to run a container
- Start the tutorial using the `tutorial.json` file on whatever fork the changes are on. Make sure to use the file on the `feat: version-X.X.Y` branch and not the `main` branch

### Pushing a new version

Before pushing a new version, view the new `feat/version-vX.X.Y` (will be merged to `main`) branch on the user's fork. Make sure there are additions to the `CHANGELOG.md` file that include the new changes, and the version in the two spots of `coderoad.yaml` matches the new version branch.

If you have write access to the freeCodeCamp repo, have verified the `CHANGELOG` and `coderoad.yaml` files, have tested the changes using the instructions above, and want to push a new version of a tutorial:

> [!WARNING]
>
> Reminder: Never make or push changes to a version branch that is on one of the freeCodeCamp repos. Always create a new one

- If you don't have a remote to where the new changes exist, create a remote to the user's fork with `git remote add <users_fork>`
- Delete any **local** branches that share a name with the new branches. Likely named either `vX.X.Y` or `feat/version-X.X.Y`
- Checkout the new version branch with `git checkout -b vX.X.Y <remote>/vX.X.Y`
- Push the new version branch to the freeCodeCamp repo with `git push -u upstream/vX.X.Y`. You need to push the new branch before you update `main` with the new `tutorial.json` file
- Checkout the users branch that will be merged into `main` with `git checkout -b feat/version-X.X.Y <remote>/feat/version-X.X.Y`
- Change the `uri` in `coderoad.yaml` back to the freeCodeCamp repo
- Add and commit the changes
- Run `coderoad build` to create the new `tutorial.json` file
- Add and commit the file
- Push the changes to your fork with `git push -u origin/feat/version-X.X.Y`
- Make a PR to `main` on the freeCodeCamp repo
- If you are satisfied, merge it or leave it and ask for a review from someone
- After the PR is merged, open the tutorial by following the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) to make sure it's loading properly, and that you can get through a few steps
- Finally, if any PRs for this version exists, close them

### How to revert to a previous version

- Create a new branch off the latest `main` with `git checkout -b revert/to-version-X.X.X`
- Revert all commits on this branch up to and including the commit of the version after the one you want to revert to. For example, you may have commits that look like this:

```
fix: typo
release: version 1.0.1
fix: typo
release: version 1.0.0
```

If you want to revert to v1.0.0, revert all the commits from `release: version 1.0.1` and after

- Create a PR. Give it a title of `revert: to version X.X.X`

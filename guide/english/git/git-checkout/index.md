---
title: Git Checkout
---
## Git Checkout

The `git checkout` command switches between branches or restores working tree files.  There are a number of different options for this command that won't be covered here, but you can take a look at all of them in the <a href='https://git-scm.com/docs/git-checkout' target='_blank' rel='nofollow'>Git documentation</a>.

### Checkout a specific commit

to checkout a specific commit, run the command:
```shell
git checkout specific-commit-id
```
we can get the specific commit id's by running: 
```shell
git log
```
### Checkout an Existing Branch
To checkout an existing branch, run the command:
```shell
git checkout BRANCH-NAME
```
Generally, Git won't let you checkout another branch unless your working directory is clean, because you would lose any working directory changes that aren't committed. You have three options to handle your changes: 1) trash them, 2) <a href='https://guide.freecodecamp.org/git/git-commit/' target='_blank' rel='nofollow'>commit them</a>, or 3) <a href='https://guide.freecodecamp.org/git/git-stash/' target='_blank' rel='nofollow'>stash them</a>.

### Checkout a New Branch
To create and checkout a new branch with a single command, you can use:
```shell
git checkout -b NEW-BRANCH-NAME
```
This will automatically switch you to the new branch.

### Checkout a New Branch or Reset a Branch to a Start Point
The following command is similar to checking out a new branch, but uses the `-B` (note the captital B) flag and an optional `START-POINT` parameter:
```shell
git checkout -B BRANCH-NAME START-POINT
```
If the `BRANCH-NAME` branch doesn't exist, Git will create it and start it at `START-POINT`. If the `BRANCH-NAME` branch already exists, then Git resets the branch to `START-POINT`. This is equivalent to running `git branch` with `-f`.

### Force a Checkout 
You can pass the `-f` or `--force` option with the `git checkout` command to force Git to switch branches, even if you have unstaged changes (in other words, the index of the working tree differs from `HEAD`). Basically, it can be used to throw away local changes.

When you run the following command, Git will ignore unmerged entries:

```shell
git checkout -f BRANCH-NAME

# Alternative
git checkout --force BRANCH-NAME
```

### Undo Changes in your Working Directory
You can use the `git checkout` command to undo changes you've made to a file in your working directory. This will revert the file back to the version in `HEAD`:
```shell
git checkout -- FILE-NAME
```

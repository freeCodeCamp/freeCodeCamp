---
title: How to Undo Things in Git
---
## How to Undo Things in Git

As a version control software, Git gives you the ability to undo your changes at all levels. This includes the un-staged edits you made in your working directory all the way through undoing multiple commits.

Here's a quick summary outlining how to undo or revert changes in your Git project. There are Guide articles with more details for each of the following commands.

### Undoing changes in your working directory

If you want to undo changes you made to a file or directory in your working directory (that you haven't staged or committed yet), you use the `git checkout` command. Git replaces the file or directory you've specified with the version of them from in `HEAD`. The `--` in the command tells Git to stay in the current branch and use that branch's `HEAD`.

```shell
git checkout -- FILE-NAME
```

Typically, Git won't allow you to checkout another branch when you have un-staged changes. However, you can do a forced checkout to switch to a different branch, and this will discard all the changes you've made to files in your working directory.

```shell
git checkout (-f | --force) OTHER-BRANCH-NAME
```

See the [Git Checkout article](../git-checkout/index.md) for more details.

### Un-staging files

Say you ran `git add .` to move several files you edited in your working directory to the staging area. It's possible to remove one or all of them from the staging area while keeping your changes in your working directory. You can un-stage certain files with the `git reset` command. This may happen when you edit several files, add everything to your staging area, but decide you want to make multiple, more focused, commits.

```shell
git reset HEAD FILE-NAME
```

See the [Git Reset article](../git-reset/index.md) for more details.

### Amending the last commit

If you've committed your changes, but need to make more edits, Git allows you to amend your last commit. Simply make your changes, stage them with the `git add` command, then use the `git commit` command with the `--amend` option.

```shell
# Use the original commit message
git add EDITED-FILE
git commit --amend --no-edit

# Change the commit message
git add EDITED-FILE
git commit --amend -m "new message"
```

When you're working with others, you should try to avoid amending commits if the last commit is already pushed into the project repository.

See the [Git Commit article](../git-commit/index.md) for more details.

### Changing a file back to a version in an older commit

In a similar workflow to how you removed changes in your working directory, the `git checkout` command also lets you revert to a version of that file in an older commit. First, you need to find the SHA-1 hash for the older commit with the version of the file you want, and copy about the first 8-10 characters of it.

```shell
git checkout PART-OF-SHA-OF-OLDER-COMMIT -- FILE-NAME
```

This puts the file (in the state it was in from the older commit) into your working directory and staging area.

### Reverting a commit

You can undo changes from a recent commit with the `git revert` command. This will rollback the changes you committed but keep a record of the action in the commit history. It's not just for the recent commit, you can revert to older versions.

```shell
git revert PART-OF-SHA-OF-OLDER-COMMIT
```

See the [Git Revert article](../git-revert/index.md) for a detailed example and more information.


### Undoing multiple commits

You can use the `git reset` command to change where your current `HEAD` pointer points. This works for specific files or for the entire branch. The command is different than `git revert` because it will overwrite everything that came after that point.

The following command resets your current branch's `HEAD` to the given `COMMIT` and updates the index. It basically rewinds the state of your branch, then all commits you make going forward write over anything that came after the reset point. If you omit the `MODE`, it defaults to `--mixed`:

```shell
git reset MODE COMMIT
```

There are five options for the `MODE`, but the three you'll likely want to use are `--soft` (resets `HEAD` but doesn't reset the staging area or working directory), `--mixed` (resets the staging area but not the working directory), and `--hard` (resets the staging area and working directory).

See the [Git Reset article](../git-reset/index.md) for all the options and more information.

### More Information:
- [Git checkout documentation](https://git-scm.com/docs/git-checkout)
- [Git commit documentation](https://git-scm.com/docs/git-commit)
- [Git revert documentation](https://git-scm.com/docs/git-revert)
- [Git reset documentation](https://git-scm.com/docs/git-reset)

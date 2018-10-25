---
title: Git Reset
---
## Git Reset

The `git reset` command allows you to RESET your current head to a specified state. You can reset the state of specific files as well as an entire branch.

### Reset a file or set of files
The following command lets you selectively choose chunks of content and revert or unstage it.

```shell
git reset (--patch | -p) [tree-ish] [--] [paths]
```

### Unstage a file
If you moved a file into the staging area with `git add`, but no longer want it to be part of a commit, you can use `git reset` to unstage that file:

```shell
git reset HEAD FILE-TO-UNSTAGE
```

The changes you made will still be in the file, this command just removes that file from your staging area.

### Reset a branch to a prior commit
The following command resets your current branch's HEAD to the given `COMMIT` and updates the index. It basically rewinds the state of your branch, then all commits you make going forward write over anything that came after the reset point. If you omit the `MODE`, it defaults to `--mixed`:

```shell
git reset MODE COMMIT
```

The options for `MODE` are:

- `--soft`: does not reset the index file or working tree, but resets HEAD to `commit`. Changes all files to "Changes to be commited"
- `--mixed`: resets the index but not the working tree and reports what has not been updated
- `--hard`: resets the index and working tree. Any changes to tracked files in the working tree since `commit` are discarded
- `--merge`: resets the index and updates the files in the working tree that are different between `commit` and HEAD, but keeps those which are different between the index and working tree 
- `--keep`: resets index entries and updates files in the working tree that are different between `commit` and HEAD. If a file that is different between `commit` and HEAD has local changes, the reset is aborted

### More Information:
- [Git reset documentation](https://git-scm.com/docs/git-reset)

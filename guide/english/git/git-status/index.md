---
title: Git Status
---
## Git Status

The `git status` commands displays the state of the working directory and the staging area. It displays paths that have differences between the `index` file and the current `HEAD` commit, paths that have differences between the working tree and the `index` file, and paths in the working tree that are not tracked by Git (and are not ignored by [gitignore](https://git-scm.com/docs/gitignore)

`git status` command output does not show you any information regarding the committed project history. For this, you need to use `git log`.

### Usage
```shell
git status
```

List which files are staged, unstaged, and untracked.

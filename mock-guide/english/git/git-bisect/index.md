---
title: Git Bisect
---

## Git Bisect

The `git bisect` command helps you find commits that added specific changes in your project. This is particularly useful if you need to find which change introduced a bug.

This command works by providing it a "bad" commit that includes the bug and a "good" commit from before the bug was introduced. Through binary search, `git bisect` will pick commits and ask you to identify whether the commit is "good" or "bad". This continues until the command is able to find the exact commit that introduced the change.

### Bisect Commands
To start a bisect session, you will tell git to start a bisect session, identify a "bad" version, and identify a "good" version. Assuming the current commit is broken but commit `4b60707` is good, you will run the following:
```shell
git bisect start
git bisect bad
git bisect good 4b60707
```

Git will check out a commit between the "good" and "bad" versions and output something like the following:
```
Bisecting: 2 revisions left to test after this (roughly 2 steps)
```

You should now tell git if the current commit works with `git bisect good` or if the current commit is broken with `git bisect bad`. This process will repeat until the command is able to print out the first bad commit.

When finished, you should clean up the bisect session. This will reset your HEAD to what it was before you started the bisect session:
```shell
git bisect reset
```

### Other Resources
- [Git bisect documentation](https://git-scm.com/docs/git-bisect)

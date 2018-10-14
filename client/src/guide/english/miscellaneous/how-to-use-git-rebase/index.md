---
title: How to Use Git Rebase
---
**Were you referred to this page to get your PR accepted? Scroll right to Git Rebase at FCC then!**

`git rebase` is an extremely useful tool that is all about rewriting git history, though most commonly used to _squash_ multiple commits into one. While useful in this scenario, this is not the only function that the `git rebase` command can perform. It in fact proves to be far more useful when used for the intended function that its name suggests: to essentially _rebase_ a branch. Let me explain what I mean by that.

Let us say that you have a repository such as this:

                                                      --- Commit 5 ----------- auth branch
                                                    /               
                                                   --- Commit 4 -------------- dev branch 
                                                 /
     --- Commit 1 ---- Commit 2 ---- Commit 3 -------------------------------- master branch

If you wanted to merge the `auth` branch with the `dev` branch, git will throw an error at you because your `auth` branch is out-of-date: it doesn't account for Commit 4\. You'll have to bring your branch up-to-date.

Git provides you with two methods to do this: the `merge` command and the `rebase` command. For an exploration of the `merge` command, visit the relevant wiki article: [Git Merge](//forum.freecodecamp.com/t/understand-how-to-use-git-merge/13215)

Let's run `rebase` now:

    $ git checkout auth
    $ git rebase dev

The repo will now look like this:

                                                                     --- Commit 5 --- auth branch
                                                                   /
                                                   --- Commit 4 --------------------- dev branch 
                                                 /
     --- Commit 1 ---- Commit 2 ---- Commit 3 --------------------------------------- master branch

Do you see what happened? Git essentially saved the commits in the `auth` branch, 'removed' it, and then created it again with the same commits _after_ the commits in the `dev` branch. This means that `Commit 4` only exists in the `dev` branch and not the `auth` branch! And that is really all there is to it! This might seem a bit confusing at first, but try to understand the diagram. This is an extremely useful tool.

## Git-Rebase at FCC

### Preventing merge conflicts

If you contribute to the FCC codebase, or are planning to do it, always run this command before you make any changes in your local files and push them:

`git pull --rebase upstream staging`

If you don't have `upstream` set up, then run this command before you run the above command (git will throw an error because it doesn't know what upstream is): `git remote add upstream https://github.com/freecodecamp/freecodecamp.git`

This will pull the latest changes from the FCC staging branch and rebase them with your fork's staging branch so that you will not have any conflicts when opening the PR ![:slight_smile:](//forum.freecodecamp.com/images/emoji/emoji_one/slight_smile.png?v=2 ":slight_smile:")

### Squashing

If you have multiple commits that you want to squash into one then follow the instructions for **[Squashing](//forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231)**.
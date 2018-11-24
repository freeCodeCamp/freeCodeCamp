---
title: Git Rebase
---
## Git Rebase

Rebasing a branch in Git is a way to move the entirety of a branch to another point in the tree. The simplest example is moving a branch further up in the tree. Say we have a branch that diverged from the master branch at point A:

            /o-----o---o--o-----o--------- branch
    --o-o--A--o---o---o---o----o--o-o-o--- master

When you rebase you can move it like this:

                                       /o-----o---o--o-----o------ branch
    --o-o--A--o---o---o---o----o--o-o-o master

To rebase, make sure you have all the commits you want in the rebase in your master branch. Check out the branch you want to rebase and type `git rebase master` (where master is the branch you want to rebase on).

It is also possible to rebase on a different branch, so that for example a branch that was based on another branch (let's call it feature) is rebased on master:

                                /---o-o branch
               /---o-o-o-o---o--o------ feature
    ----o--o-o-A----o---o--o-o-o--o--o- master

After `git rebase master branch` or `git rebase master` when you have checked out the branch, you'll get:


               /---o-o-o-o---o--o------ feature
    ----o--o-o-A----o---o--o-o-o--o--o- master
                                      \---o-o branch

### Git rebase interactive in the console

To use `git rebase` in the console with a list of commits you can choose, edit or drop in the rebase:

- Enter `git rebase -i HEAD~5` with the last number being any number of commits from the most recent backwards you want to review.
- In vim, press `esc`, then `i` to start editing the test.
- On the left hand side you can overwrite the `pick` with one of the commands below. If you want to squash a commit into a previous one and discard the commit message, enter `f` in the place of the `pick` of the commit.

```
pick 452b159 <message for this commit>
pick 7fd4192 <message for this commit>
pick c1af3e5 <message for this commit>
pick 5f5e8d3 <message for this commit>
pick 5186a9f <message for this commit>

# Rebase 0617e63..5186a9f onto 0617e63 (30 commands)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

- Enter `esc` followed by `:wq` to save and quit.
- If it rebases successfully then you need to force push your changes with `git push -f` to add the rebased version to your github repo.
- If there is a merge conflict, there are a number of ways to fix this, including following the suggestions in [this guide](https://help.github.com/enterprise/2.11/user/articles/resolving-a-merge-conflict-using-the-command-line/). One way is to open the files in a text editor and delete the parts of the code you do not want. Then use `git add <file name>` followed by `git rebase --continue`. You can skip over the conflicted commit by entering `git rebase --skip`, exit the git rebase by entering `git rebase --abort` in your console.

### More Information:
- [Git documentation: rebase](https://git-scm.com/docs/git-rebase)
- [Thoughbot interactive guide to git rebase](https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history)

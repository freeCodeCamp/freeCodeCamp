---
title: Git Squash
---
## Git Squash

One of the things that developers hear quite often regarding their pull requests is something like "That looks good to me, please squash and merge". The fun part is that there is no such command like `git squash` (unless you create an [alias](https://guide.freecodecamp.org/git/git-rebase) to it). To `squash` pull request means commonly to compact all the commits in this request into one (rarely to other number) to make it more concise, readable and not to pollute main branch's history. To achieve that developer needs to use **interactive mode** of [Git Rebase](https://guide.freecodecamp.org/git/git-rebase) command.

Quite often when you develop some new feature you end up with several intermittent commits in your history - you develop incrementally after all. That might be just some typos or steps to final solution. Most of the time there is no use in having all these commits in final public version of code, so it's more beneficial to have all of them compacted into one, single and final.

So let's assume you have following commit log in the branch you'd like to merge as part of pull request:
```shell
$ git log --pretty=oneline --abbrev-commit
30374054 Add Jupyter Notebook stub to Data Science Tools
8490f5fc Minor formatting and Punctuation changes
3233cb21 Prototype for Notebook page
```

Clearly we would prefer to have only one commit here, since there is no benefit in knowing what we started on writing and which typos we fixed there later, only final result is of importance.  

So what we do is starting interactive rebase session from current **HEAD** (commit **30374054**) to commit **3233cb21**, with intention to combine **3** latest commits into one:

```shell
$ git rebase -i HEAD~3
```

That will open an editor with something like following:


```shell
pick 3233cb21 Prototype for Notebook page
pick 8490f5fc Minor formatting and Punctuation changes
pick 30374054 Add Jupyter Notebook to Data Science Tools
# Rebase
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

As always, Git gives us very nice help message where you can see this `squash` option we are looking for.

Currently the instructions for interactive rebase say to `pick` every specified commit **and** preserve corresponding commit message. That is - don't change anything. But we want to have only one commit in the end. Simply edit the text in you editor replacing `pick` with `squash` (or just `s`) next yo every commit we want to get rid of and save/exit the editor. That might look like this:

```shell
s 3233cb21 Prototype for Notebook page
s 8490f5fc Minor formatting and Punctuation changes
pick 30374054 Add Jupyter Notebook to Data Science Tools
```

When you close your editor saving this changes it will be reopened right away suggesting to choose and reword commit messages. Something like
```shell
# This is a combination of 3 commits.
# The first commit's message is:
Prototype for Notebook page

# This is the 2nd commit message:

Minor formatting and Punctuation changes

# This is the 3rd commit message:

Add Jupyter Notebook to Data Science Tools

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
```

At this point you can delete all the messages you don't want to be included in the final commit version, reword them or just write commit message from scratch. Just remember that new version will include all the lines that are not starting with `#` character. Once again, save and exit your editor.

Your terminal now should show a success message including `Successfully rebased and updated <branch name>` and the git log should show nice and compacted history with only one commit. All intermediary commits are gone and we are ready to merge!

### Warning about local and remote commit history mismatch

This operation is slightly dangerous if you have your branch already published in a remote repository - you are modifying commit history after all. So it's best to do squash operation on local branch before you do **push**. Sometimes, it will be already pushed - how would you create pull request after all? In this case you'll have to **force** the changes on remote branch after doing the squashing, since your local history and branch history in the remote repository are different:

``` shell
$ git push origin +my-branch-name
```

Do your best to make sure you are the only one using this remote branch at this point, or you'll make their life harder having history mismatch. But since **squashing** is usually done as the final operation on a branch before getting rid of it, it's usually not so big of a concern.

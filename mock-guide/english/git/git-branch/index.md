---
title: Git Branch
---

## Git Branch

Git's branching functionality lets you create new branches of a project to test ideas, isolate new features, or experiment without impacting the main project.

**Table of Contents**
- [View Branches](#view-branches)
- [Checkout a Branch](#checkout-a-branch)
- [Create a New Branch](#create-a-new-branch)
- [Rename a Branch](#rename-a-branch)
- [Delete a Branch](#delete-a-branch)
- [Compare Branches](#compare-branches)
- [Help with Git Branch](#help-with-git-branch)
- [More Information](#more-information)

### View Branches <a name="view-branches"></a>
To view the branches in a Git repository, run the command:
```shell
git branch
```

To view both remote-tracking branches and local branches, run the command:
```shell
git branch -a
```

There will be an asterisk (\*) next to the branch that you're currently on.

There are a number of different options you can include with `git branch` to see different information. For more details about the branches, you can use the `-v` (or `-vv`, or `--verbose`) option. The list of branches will include the SHA-1 value and commit subject line for the `HEAD` of each branch next to its name.

You can use the `-a` (or `--all`) option to show the local branches as well as any remote branches for a repository. If you only want to see the remote branches, use the `-r` (or `--remotes`) option.

### Checkout a Branch <a name="checkout-a-branch"></a>
To checkout an existing branch, run the command:
```shell
git checkout BRANCH-NAME
```

Generally, Git won't let you checkout another branch unless your working directory is clean, because you would lose any working directory changes that aren't committed. You have three options to handle your changes: 
1) trash them (see <a href='https://guide.freecodecamp.org/git/git-checkout/' target='_blank' rel='nofollow'>Git checkout for details</a>) or
2) commit them (see <a href='https://guide.freecodecamp.org/git/git-commit/' target='_blank' rel='nofollow'>Git commit for details</a>) or 
3) stash them (see <a href='https://guide.freecodecamp.org/git/git-stash/' target='_blank' rel='nofollow'>Git stash for details</a>).

### Create a New Branch <a name="create-a-new-branch"></a>
To create a new branch, run the command:
```shell
git branch NEW-BRANCH-NAME
```

Note that this command only creates the new branch. You'll need to run `git checkout NEW-BRANCH-NAME` to switch to it.

There's a shortcut to create and checkout a new branch at once. You can pass the `-b` option (for branch) with `git checkout`. The following commands do the same thing:
```shell
# Two-step method
git branch NEW-BRANCH-NAME
git checkout NEW-BRANCH-NAME

# Shortcut
git checkout -b NEW-BRANCH-NAME
```

When you create a new branch, it will include all commits from the parent branch. The parent branch is the branch you're on when you create the new branch.

### Rename a Branch <a name="rename-a-branch"></a>
To rename a branch, run the command:
```shell
git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME

# Alternative
git branch --move OLD-BRANCH-NAME NEW-BRANCH-NAME
```

### Delete a Branch <a name="delete-a-branch"></a>
Git won't let you delete a branch that you're currently on. You first need to checkout a different branch, then run the command:
```shell
git branch -d BRANCH-TO-DELETE

# Alternative:
git branch --delete BRANCH-TO-DELETE
```

The branch that you switch to makes a difference. Git will throw an error if the changes in the branch you're trying to delete are not fully merged into the current branch. You can override this and force Git to delete the branch with the `-D` option (note the capital letter) or using the `--force` option with `-d` or `--delete`:
```shell
git branch -D BRANCH-TO-DELETE

# Alternatives
git branch -d --force BRANCH-TO-DELETE
git branch --delete --force BRANCH-TO-DELETE
```

### Compare Branches <a name="compare-branches"></a>
You can compare branches with the `git diff` command:
```shell
git diff FIRST-BRANCH..SECOND-BRANCH
```

You'll see colored output for the changes between branches. For all lines that have changed, the `SECOND-BRANCH` version will be a green line starting with a "+", and the `FIRST-BRANCH` version will be a red line starting with a "-". If you don't want Git to display two lines for each change, you can use the `--color-words` option. Instead, Git will show one line with deleted text in red, and added text in green.

If you want to see a list of all the branches that are completely merged into your current branch (in other words, your current branch includes all the changes of the other branches that are listed), run the command `git branch --merged`.

### Help with Git Branch <a name="help-with-git-branch"></a>
If you forget how to use an option, or want to explore other functionality around the `git branch` command, you can run any of these commands:
```shell
git help branch
git branch --help
man git-branch
```

### More Information:  <a name="more-information"></a>
- The `git merge` command: <a href='https://guide.freecodecamp.org/git/git-merge/' target='_blank' rel='nofollow'>fCC Guide</a>
- The `git checkout` command: <a href='https://guide.freecodecamp.org/git/git-checkout/' target='_blank' rel='nofollow'>fCC Guide</a>
- The `git commit` command: <a href='https://guide.freecodecamp.org/git/git-commit/' target='_blank' rel='nofollow'>fCC Guide</a>
- The `git stash` command: <a href='https://guide.freecodecamp.org/git/git-stash/' target='_blank' rel='nofollow'>fCC Guide</a>
- Git documentation: <a href='https://git-scm.com/docs/git-branch' target='_blank' rel='nofollow'>branch</a>

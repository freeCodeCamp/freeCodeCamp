---
title: Git Cherry Pick
---
## Git Cherry Pick

The `git cherry-pick` command applies the changes introduced by some existing commits. This guide will be focusing on explaining this feature as much as possible but of course the real <a href='https://git-scm.com/docs/git-cherry-pick' target='_blank' rel='nofollow'>Git documentation</a> will always come in handy.

### Checkout an Existing Branch Cherry Pick from master
To apply the change introduced by the commit at the tip of the master branch and create a new commit with this change. Run the following command
```shell
git cherry-pick master
```

### Check in a change from a different commit
To apply the change introduced by the commit at the particular hash value you want, run the following command
```shell
git cherry-pick {HASHVALUE}
```
This will add the changes included referenced in that commit, to your current repository

### Apply certain commits from one branch to another
`cherry-pick` allows you to pick and choose between commits from one branch one to another. Let's say you have two branches `master` and `develop-1`. In the branch `develop-1` you have 3 commits with commit ids `commit-1`,`commit-2` and `commit-3`. Here you can only apply `commit-2` to branch `master` by:
```shell
git checkout master
git cherry-pick commit-2
```
If you encounter any conflicts at this point, you have to fix them and add them using `git add` and then you can use the continue flag to apply the cherry-pick.
```shell
git cherry-pick --continue
```
If you wish to abort a cherry-pick in between you can use the abort flag:
```shell
git cherry-pick --abort
```


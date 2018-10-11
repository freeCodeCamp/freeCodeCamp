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
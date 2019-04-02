---
title: Override Local Files with Git Pull
---
# When do you need to overwrite local files?

If you feel the need to discard all your local changes and just reset/overwrite everything with a copy from the remote branch then you should follow this guide.

Important: If you have any local changes, they will be lost. With or without `--hard` option, any local commits that haven't been pushed will be lost.  
If you have any files that are not tracked by Git (e.g. uploaded user content), these files will not be affected.

## The Overwrite workflow:

To overwrite your local files do:

    git fetch --all
    git reset --hard <remote>/<branch_name>

For example:

    git fetch --all
    git reset --hard origin/master

## How it works:

`git fetch` downloads the latest from remote without trying to merge or rebase anything.

Then the git reset resets the master branch to what you just fetched. The `--hard` option changes all the files in your working tree to match the files in `origin/master`.

## Additional Information:

It's worth noting that it is possible to maintain current local commits by creating a branch from `master` or whichever branch you want to work on before resetting:

For Example:

    git checkout master
    git branch new-branch-to-save-current-commits
    git fetch --all
    git reset --hard origin/master

After this, all of the old commits will be kept in `new-branch-to-save-current-commits`. Uncommitted changes however (even staged), will be lost. Make sure to stash and commit anything you need.

## Attribution:

_This article is based on a Stack Overflow question <a href='http://stackoverflow.com/questions/1125968/force-git-to-overwrite-local-files-on-pull/8888015#8888015' target='_blank' rel='nofollow'>here</a>_
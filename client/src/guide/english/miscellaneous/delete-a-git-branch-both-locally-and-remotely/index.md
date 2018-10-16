---
title: Delete a Git Branch Both Locally and Remotely
---
// locally ((if you know what you are doing!)
    git branch -d localBranchName

    // and then if you need to...
    // on remote
    git push origin :remoteBranchName

## When to Delete branches?

Normally in a contribution flow `Branches` are a great way to work on different features, fixes, etc. while isolating them from the main codebase. So a repo may have a `master` branch, and separate branches to work on different features.

Typically once the work is completed on a feature and it is recommended to delete the branch.

## The Delete workflow:

Lets say you have a repo called as `AwesomeRepo`, and its hosted on Github, at a location such as `https://github.com/my_username/AwesomeRepo`.

Also lets assume it has the branches like:  
`master`  
`feature/some-cool-new-stuff`  
`fix/authentication`  
`staging`

For consistency we will assume branch names are same on `local` as well as on the `remote`.

Now, lets say you are done with that fix for authentication and want to remove the branch `fix/authentication`.

## Deleting the branch REMOTELY:

Simply do:

`git push --delete <remote> <branch>`.

For example: `git branch --delete origin fix/authentication`

If you get the error

    error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to 'git@repository_name'

Perhaps someone else has already deleted the branch. Try to synchronize your branch list using

    git fetch -p

The git manual says -p, --prune After fetching, remove any remote-tracking branches which no longer exist on the remote.

## Deleting the branch LOCALLY:

First checkout to a branch other that the one you want to delete:

`git checkout <branch>`.

For example: `git checkout master`

Git will not let you delete the branch you are currently on.

Then proceed with deleting:

`git branch -D <branch>`.

For example: `git branch -D fix/authentication`
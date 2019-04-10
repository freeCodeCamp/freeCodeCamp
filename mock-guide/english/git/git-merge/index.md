---
title: Git Merge
---
## Git Merge
The `git merge` command will merge any changes that were made to the code base on a seperate branch to your current branch. 

The command syntax is as follows:
```shell
git merge BRANCH-NAME
```
For example, if you are currently working in a branch named `dev` and would like to merge any new changes that were made in a branch named `new-features`, you would issue the following command:

```shell
git merge new-features
```

**Please Note:** If there are any uncommitted changes on your current branch, Git will not allow you to merge until all changes in your current branch have been committed. To handle those changes, you can either:

* Create a new branch and commit the changes
```shell
git checkout -b new-branch-name
git add .
git commit -m "<your commit message>"
```

* Stash them
```shell
git stash               # add them to the stash
git merge new-features  # do your merge
git stash pop           # get the changes back into your working tree
```

* Abandon it all
```shell
git reset --hard        # removes all pending changes
```

## Merge Conflict

A merge conflict is when you make commits on separate branches that alter the same line in conflicting ways. Therefore Git will not know which version of the file to keep

resulting in the error message:

CONFLICT (content): Merge conflict in resumé.txt
Automatic merge failed; fix conflicts and then commit the result.

In the code editor Git uses markings to indicate the HEAD (master) version of the file and the other version of the file.

`<<<<<<< HEAD`

`>>>>>>> OTHER`

From the code editor delete/update to resolve conflict and remove the special markings including the HEAD and OTHER file names, reload your file, then re add and recommit your changes. 

For more information about the `git merge` command and all available options, please refer to the <a href="https://git-scm.com/docs/git-merge" target="_blank" rel="nofollow">Git documentation</a>.

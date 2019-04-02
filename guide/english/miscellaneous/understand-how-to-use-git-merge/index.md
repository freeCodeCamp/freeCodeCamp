---
title: Understand How to Use Git Merge
---
Let us say that you are working on an application that is similar to Reddit, but specifically for code snippets. In such an application, you would likely have a `master` branch which contains all the released features, a `dev` branch which might contain features that have been coded, but not implemented yet. Every developer in the team will create his own branches off the `dev` branch for individual features. The repository structure would look something like this:

                                      --- Commit 3 --------- dev branch 
                                    /
     --- Commit 1 ---- Commit 2 ---------------------------- master branch

If you decided to merge the 3rd commit (`Commit 3`) into the `master` branch from the `dev` branch, then it would be as simple as running a `git merge` command because the `dev` branch is _up-to-date_ with the `master` branch: all of the commits in the `master` branch exist in the `dev` branch. You can merge the branches by running the following commands:  

    git checkout dev
    git merge master

The result would be something like this:

                                                   --------- dev branch 
                                                 /
     --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch

Now you decide to work on the authentication feature. To work on the authentication feature, you create another branch based on the `dev` branch and decide to call it `auth`. This is what the repo structure looks like:

                                                      ------ auth branch
                                                    /
                                                   --------- dev branch 
                                                 /
     --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch

If you were to commit any changes to the `auth` branch, merging them with the `dev` branch would be trivial because it is up-to-date with the `dev` branch. Now while you were working away on the authentication feature, one of the developers finished coding the syntax-highlighting feature, and decided to merge it with the `dev` branch. The repo looks like this now:

                                                      --- Commit 5 --- auth branch
                                                    /
                                                   --- Commit 4 ------ dev branch 
                                                 /
     --- Commit 1 ---- Commit 2 ---- Commit 3 ------------------------ master branch

Your branch, in Git terminology, is now a commit behind the `dev` branch. This means that you cannot simply merge the two branches: you must bring your `auth` branch up-to-date with the `dev` branch. This can be done with `git merge`!

Merging the `auth` branch with the `dev` branch, or the `dev` branch with the `master` branch is straightforward and does what you expect, but merging the other way around has its own idiosyncrasies that are not intuitive at first blush. I can babble about it, or I can show you another great diagram of what would happen if you merged the `dev` branch with the `auth` branch at this moment:

                                                      --- Commit 5 ----------- auth branch
                                                    /               /
                                                   --- Commit 4 -------------- dev branch 
                                                 /
     --- Commit 1 ---- Commit 2 ---- Commit 3 -------------------------------- master branch

See what I did there? Look at the diagram for a second and try to understand what is happening here before you move on. You essentially made another commit to the `auth` branch with the commits in the `dev` branch included. But that's all right, right? After all, at the end of the day I wanted to bring my `auth` branch up-to-date with the `dev` branch, and now it _is_ up-to-date? Yep. But let me show you a diagram to explicitly illustrate what the other diagram implies: Your `auth` branch now looks like this:

        --- Commit 5 ------- Commit 4 ------- auth branch
      /                /
    ------ Commit 4 --- --------------------- dev branch

See it now? You _copied_ the commit over. If you were to merge to the `dev` branch now, it would look something like this:

        --- Commit 5 ------- Commit 4 -------------------------------------- auth branch
      /                /                  \
    ------- Commit 4 ----------------------- Commit 5 ---- Commit 4 -------- dev branch

You merged the same commit twice! This will of course have no repercussions for your code itself, but if you one fine day decide to look at your `git logs`, you will immediately realize how dirty your git history is, with some commits being made over and over. If you wanted to revert to a commit, it would be very difficult to decide which commit to revert to.

It is preferred that to you use <a href='http://forum.freecodecamp.com/t/how-to-use-git-rebase/13226' target='_blank' rel='nofollow'>Git-Rebase</a>.
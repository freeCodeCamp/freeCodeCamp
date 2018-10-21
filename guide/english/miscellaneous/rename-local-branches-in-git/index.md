---
title: Rename Local Branches in Git
---
To rename a local branch, enter the following into the terminal:

> `-m` stands for move, just like `mv` is used in linux to rename files.

    git branch -m <oldname> <newname>

If you have already checked out the branch you want to change:  

    git branch -m <newname>

Here is an example of renaming the `feature/react-challenges` branch to `fix/react-hikes` from FreeCodeCamp:  

    git checkout feature/react-challenges
    git branch -m fix/react-hikes
---
title: Cloning All Remote Branches in Git
---
To clone a remote git repository, enter the following into the terminal:

> Note: Make sure you are in a root folder e.g. `webdev` instead of a project specific folder.

    git clone <remote_repo>
    cd <remote_repo>

List your branches using these commands:  

    git branch // Lists local branches
    git branch -a // Lists local and remote branches

To checkout a remote branch locally:

    git checkout <branch>

Here is an example of fetching the remote `master` branch from FreeCodeCamp:  

    git clone https://github.com/FreeCodeCamp/FreeCodeCamp.git
    cd FreeCodeCamp
    git checkout master
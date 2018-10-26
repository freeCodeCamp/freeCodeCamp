---
title: Checkout a Remote Branch in Git
---
# Checkout a remote branch workflow

Depending on how many remotes are present for your local repo, follow the appropriate flow.

## For repos with one remote:

If your local repo is having just one remote for example just `origin`:

    git remote -v
    origin  https://github.com/my_username/AwesomeRepo.git (fetch)
    origin  https://github.com/my_username/AwesomeRepo.git (push)

Then you can simply do:  

`git fetch`  

`git checkout some_branch_name`

## For repos with multiple remote:

If your local repo is having multiple remotes:

    git remote -v
    origin      https://github.com/raisedadead/wiki.git (fetch)
    origin      https://github.com/raisedadead/wiki.git (push)
    upstream    https://github.com/FreeCodeCamp/wiki.git (fetch)
    upstream    https://github.com/FreeCodeCamp/wiki.git (push)

Then you have to specify a remote as well:  
`git fetch`  
`git checkout -b some_branch_name <remote>/some_branch_name`  
where `<remote>` in this example is either `upstream` or `origin`.
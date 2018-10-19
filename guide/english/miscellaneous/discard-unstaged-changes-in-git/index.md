---
title: Discard Unstaged Changes in Git
---
When using Git, it is common to make changes that you want to remove entirely before the staging phase. For example, after working on a few files, you realize that you want to revert the changes made to one specific file. To discard the changes before staging and committing, use the `$ git checkout` command.

## To unstage one file :

`$ git checkout <path-to-file>`

_Remember to replace `<path-to-file>` with the actual file name._

## To unstage all files:

`$ git checkout -- .`
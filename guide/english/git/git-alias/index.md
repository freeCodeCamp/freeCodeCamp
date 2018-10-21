---
title: Git Aliases
---

## Git Alias

Git doesn’t automatically infer your command if you type it in partially. If you don’t want to type the entire text of each of the Git commands, you can easily set up an alias for each command using git config. Here are a couple of examples you may want to set up:

```shell
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status
```
This means that, for example, instead of typing git commit, you just need to type git ci. As you go on using Git, you’ll probably use other commands frequently as well; don’t hesitate to create new aliases.

This technique can also be very useful in creating commands that you think should exist. For example, to correct the usability problem you encountered with unstaging a file, you can add your own unstage alias to Git:

```shell
$ git config --global alias.unstage 'reset HEAD --'
```
This makes the following two commands equivalent:

```shell
$ git unstage fileA
$ git reset HEAD fileA
```
This seems a bit clearer. It’s also common to add a last command, like this:

```shell
$ git config --global alias.last 'log -1 HEAD'
```
This way, you can see the last commit easily:

```shell
$ git last
commit 66938dae3329c7aebe598c2246a8e6af90d04646
Author: Josh Goebel <dreamer3@example.com>
Date:   Tue Aug 26 19:48:51 2008 +0800

    test for current head

    Signed-off-by: Scott Chacon <schacon@example.com>
```

```shell
$ git config --global alias.st status --short --branch
```
When you run the command `git st`, your git status will be displayed in a nice, streamlined format.

### View, Edit and Delete Aliases
To view all of the aliases you have created on your machine, run the command:
```shell
cat ~/.gitconfig
```
Replacing `cat` with `nano` will allow you to edit them or remove them completely.

### Alias to view all Aliases
To add an alias to view all others created on your machine, add the alias
```shell
    git config --global alias.aliases 'config --get-regexp alias'
```

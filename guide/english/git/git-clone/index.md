---
title: Git Clone
---
## Git Clone

The `git clone` command allows you to copy a remote repository onto your local machine.

First, find the remote repository for the project you're working on or interested in - this can also be your fork of a project. Next, copy the URL for it. For example, if you've forked the freeCodeCamp guides repository, the URL looks like `https://github.com/YOUR-GITHUB-USERNAME/guides.git`.

In the command line on your local machine, navigate to where you want to save the project in your working directory. Finally, run the `git clone` command:

```shell
git clone URL-OF-REPOSITORY
```

The default name of the new directory on your computer is the name of the repository, but you can change this by including the last (optional) parameter:

```shell
git clone URL-OF-REPOSITORY NAME-OF-DIRECTORY-ON-COMPUTER
```
The `git clone` command not only allows to copy a remote repository but also can clone a repository if it's on a local machine. This can be done using the `-l` or `--local` option.

Git gives the remote the alias "origin". This is a useful way to refer to the remote when you want to push your changes to the remote server or pull changes from it. See <a href='https://guide.freecodecamp.org/git/git-push/' target='_blank' rel='nofollow'>Git push</a> and <a href='https://guide.freecodecamp.org/git/git-pull/' target='_blank' rel='nofollow'>Git pull</a> for more details.

Instead of using the default "origin" alias to the remote repository, git allows you to set your own alias name by using `-o <name>` or `--origin <name>`

Git only pulls the remote's main branch onto your computer. This branch is usually named "master" by convention but may be defined differently depending on the project.

Also, Git automatically sets up your local main branch to track the remote branch. When you run `git status`, you'll see information about whether your local branch is up-to-date with the remote. Here's an example output:

```shell
myCommandPrompt (master) >> git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean
myCommandPrompt (master) >>
```

If your local `master` branch has three commits that you haven't pushed up to the remote server yet, the status would say "Your branch is ahead of 'origin/master' by 3 commits."

### Git Clone Mirror

If you want to host mirror of a repository you can use mirror parameter. 

```shell
git clone URL-OF-REPOSITORY --mirror
```

After mirroring a repository, you can clone your local mirror from your server.

```shell
git clone NAME-OF-DIRECTORY-ON-COMPUTER
```

### To clone a specific branch

If you want to clone a specific branch, you can do that by the following command.

```shell
git clone URL-OF-REPOSITORY -R branch_name
```

### More Information:
- Git documentation: [clone](https://git-scm.com/docs/git-clone)

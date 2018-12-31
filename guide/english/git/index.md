---
title: Git
---
## Git


Git is an open source distributed version control system created in 2005 by Linus Torvalds and others from the Linux development community. Git can work with many types of projects, but it's most commonly used for software source code.

Version control is a system that keeps track of changes to a file or group of files over time. When you have a history of these changes, it lets you find specific versions later, compare changes between versions, recover files you may have deleted, revert files to previous versions, and to experiment with different code solutions to the same problem.

The last point deserves emphasis. Although many people focus on git's ability to revert to previous versions, one of its most powerful features is that branching (creating a new version) is not only very easy and fast, it also uses very little hard disk space. New developers often don't take advantage of the ability to quickly create experiments to help them work with several candidate solutions and as a starting point for discussing each branch / solution with other developers. While junior devs might try to accomplish the same thing by commenting out code in the same version, an experienced dev will just take the few seconds required to create a new branch.

A *distributed* version control system means that different users maintain their own repositories of a project, instead of working from one central repository. Users automatically have full file tracking abilities and the project's complete version history without needing access to a central server or network.

When Git is initialized in a project directory, it begins tracking file changes and stores them as "changesets" or "patches." Users working together on a project submit their changesets which are then included (or rejected) in the project.

**Table of Contents**
- [Understand the Three Sections of a Git Project](#understand-the-three-sections-of-a-git-project)
- [Install Git](#install-git)
- [Configure the Git Environment](#configure-the-git-environment)
- [Initialize Git in a Project](#initialize-git-in-a-project)
- [Get Help in Git](#get-help-in-git)
- [Sources](#sources)
- [More Information](#more-information)

### Understand the Three Sections of a Git Project <a name="understand-the-three-sections-of-a-git-project"></a>
A Git project will have the following three main sections:
1. Git directory
2. Working directory (or working tree)
3. Staging area

The **Git directory** (located in `YOUR-PROJECT-PATH/.git/`) is where Git stores everything it needs to accurately track the project. This includes metadata and an object database which includes compressed versions of the project files.

The **working directory** is where a user makes local changes to a project. The working directory pulls the project's files from the Git directory's object database and places them on the user's local machine.

The **staging area** is a file (also called the "index", "stage", or "cache") that stores information about what will go into your next commit. A commit is when you tell Git to save these staged changes. Git takes a snapshot of the files as they are and permanently stores that snapshot in the Git directory.

With three sections, there are three main states that a file can be in at any given time: committed, modified, or staged. You *modify* a file any time you make changes to it in your working directory. Next, it's *staged* when you move it to the staging area. Finally, it's *committed* after a commit.

### Install Git <a name="install-git"></a>
- Ubuntu: `sudo apt-get install git`
- Windows: <a href="https://git-scm.com/download/win" target="_blank">Download</a>
- Mac: <a href="https://git-scm.com/download/mac" target="_blank">Download</a>

### Configure the Git Environment <a name="configure-the-git-environment"></a>
Git has a `git config` tool that allows you to customize your Git environment. You can change the way Git looks and functions by setting certain configuration variables. Run these commands from a command line interface on your machine (Terminal in Mac, Command Prompt or Powershell in Windows).

There are three levels of where these configuration variables are stored:
1. System: located in `/etc/gitconfig`, applies default settings to every user of the computer. To make changes to this file, use the `--system` option with the `git config` command.
2. User: located in `~/.gitconfig` or `~/.config/git/config`, applies settings to a single user. To make changes to this file, use the `--global` option with the `git config` command.
3. Project: located in `YOUR-PROJECT-PATH/.git/config`, applies settings to the project only. To make changes to this file, use the `git config` command.

If there are settings that conflict with each other, the project-level configurations will override the user-level ones, and the user-level configurations will override the system-level ones.

Note for Windows users: Git looks for the user-level configuration file (`.gitconfig`) in your `$HOME` directory (`C:\Users\$USER`). Git also looks for `/etc/gitconfig`, although it's relative to the MSys root, which is wherever you decide to install Git on your Windows system when you run the installer. If you are using version 2.x or later of Git for Windows, there is also a system-level config file at `C:\Documents and Settings\All Users\Application Data\Git\config` on Windows XP, and in `C:\ProgramData\Git\config` on Windows Vista and newer. This config file can only be changed by `git config -f FILE` as an admin.

#### Add Your Name and Email
Git includes the user name and email as part of the information in a commit. You'll want to set this up under your user-level configuration file with these commands:
```shell
git config --global user.name "My Name"
git config --global user.email "myemail@example.com"
```

#### Change Your Text Editor
Git automatically uses your default text editor, but you can change this. Here's an example to use the Atom editor instead (the `--wait` option tells the shell to wait for the text editor so you can do your work in it before the program moves on):
```shell
git config --global core.editor "atom --wait"
```

#### Add Color to Git Output
You can configure your shell to add color to Git output with this command:
```shell
git config --global color.ui true
```

To see all your configuration settings, use the command `git config --list`.

### Initialize Git in a Project <a name="initialize-git-in-a-project"></a>
Once Git is installed and configured on your computer, you need to initialize it in your project to start using its version control powers. In the command line, use the `cd` command to navigate to the top-level (or root) folder for your project. Next, run the command `git init`. This installs a Git directory folder with all the files and objects Git needs to track your project.

It's important that the Git directory is installed in the project root folder. Git can track files in subfolders, but it won't track files located in a parent folder relative to the Git directory.

### Get Help in Git <a name="get-help-in-git"></a>
If you forget how any command works in Git, you can access Git help from the command line several ways:
```shell
git help COMMAND
git COMMAND --help
man git-COMMAND
```
This displays the manual page for the command in your shell window. To navigate, scroll with the up and down arrow keys or use the following keyboard shortcuts: <!-- Need to confirm these work in Windows -->
- `f` or `spacebar` to page forward
- `b` to page back
- `q` to quit

### Sources <a name="sources"></a>
This article uses information from the <a href='https://github.com/progit/progit2' target='_blank' rel='nofollow'>Pro Git</a> book, written by Scott Chacon and Ben Straub and published by Apress. The book is displayed in full in the <a href='https://git-scm.com/book/en/v2' target='_blank' rel='nofollow'>Git documentation</a>.

#### More Information
- For downloads, documentation, and a browser-based tutorial: <a href='https://git-scm.com/' target='_blank' rel='nofollow'>Git official website</a>
- Most useful commands when you're in bad GIT situation: <a href='http://ohshitgit.com/' target='_blank' rel='nofollow'>Oh shit, git!</a>
- [Resources to learn Git](https://try.github.io/) 

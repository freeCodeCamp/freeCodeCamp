---
title: How to Fork and Maintain a Local Instance of Free Code Camp on Mac and Linux
---
If you plan to write a <a>Pull Request for Free Code Camp</a>, you will almost certainly need a local copy of the site. Having a local copy of the site will give you additional capability with Git that are not available via the GitHub browser interface, including updating your fork and rebasing/squashing commits.

This guide will cover how to fork the FCC project, clone a local copy, and how to maintain your fork. All Git commands will be given for the command line, which we strongly recommend that you use, but most commands can be executed in a graphical Git environment as well.

If you're using Windows, <a href='https://forum.freecodecamp.com/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366' target='_blank' rel='nofollow'>use this guide instead</a>.

## Need Help?

Free Code Camp Issue Mods and staff are on hand to assist with Pull Request related issues on our <a href='https://gitter.im/FreeCodeCamp/HelpContributors' target='_blank' rel='nofollow'>Help Contributors Chat Room</a>

## Setting Up your System

1.  Install <a href='https://git-scm.com/' target='_blank' rel='nofollow'>Git</a> or your favorite Git client
2.  (Optional) <a href='https://help.github.com/articles/generating-ssh-keys/' target='_blank' rel='nofollow'>Setup an SSH Key</a> for Github.  
    Using SSH can greatly speed up your interactions with GitHub, since you will not be prompted for your password.
3.  Create a parent projects directory on your system. For the purposes of this document we will assume it is `/mean/`

## Forking Free Code Camp

1.  Navigate to the top level Free Code Camp repository: `https://github.com/FreeCodeCamp/freecodecamp`
2.  Click the "Fork" Button in the upper right hand corner of the interface. <a href='https://help.github.com/articles/fork-a-repo/' target='_blank' rel='nofollow'>More Details Here</a>.
3.  After the project is forked, you will be taken to your copy of the FCC repo at `username/freecodecamp`

## Cloning Your Fork

1.  From your fork of FCC, copy the HTTPS or SSH (if you installed SSH Keys) clone URL
2.  Open a Bash Shell/Command Line/Terminal to your projects directory (IE: `/mean/`)
3.  Clone your fork of git:

`git clone https://github.com/yourUserName/FreeCodeCamp.git`

This will download the entire FCC repo to your projects directory.

`bash  
$ git clone https://github.com/yourUserName/FreeCodeCamp.git  
Cloning into 'FreeCodeCamp'...  
remote: Counting objects: 37294, done.  
remote: Compressing objects: 100% (13/13), done.  
remote: Total 37294 (delta 5), reused 0 (delta 0), pack-reused 37281  
Receiving objects: 100% (37294/37294), 18.69 MiB | 3.99 MiB/s, done.  
Resolving deltas: 100% (26053/26053), done.  
Checking connectivity... done.  
Checking out files: 100% (573/573), done.` 

### Setting up your Upstream

1.  Change directory to the new `FreeCodeCamp` directory
2.  Add a remote to the official FCC repo:

`git remote add upstream https://github.com/FreeCodeCamp/FreeCodeCamp.git`

Congratulations, you now have a local copy of the FCC repo!

## Maintaining your Fork

Now that you have a copy of your fork, there is work you will need to do to keep it current.

## Rebasing from Upstream

Do this every time prior to creating a branch for a PR:

1.  Make sure you are in the `staging` branch

`bash  
$ git status  
On branch staging  
Your branch is up-to-date with 'origin/staging'.` 

1.  If you are not on staging, resolve any outstanding files/commits and checkout staging  
    `git checkout staging`
2.  Do a pull with rebase against `upstream`:

`git pull --rebase upstream staging`

This will pull down all of the changes on the official staging without making an additional commit in your local repo.  
4\. (Optional) Force push your updated staging to your GitHub fork

`git push origin staging --force`

This will overwrite the staging branch on your fork.

`bash  
$ git push origin staging --force  
Counting objects: 99, done.  
Delta compression using up to 12 threads.  
Compressing objects: 100% (38/38), done.  
Writing objects: 100% (38/38), 16.14 KiB | 0 bytes/s, done.  
Total 38 (delta 25), reused 0 (delta 0)  
To git@github.com:yourUserName/FreeCodeCamp.git  
f7a525c..8a2271d staging -> staging`
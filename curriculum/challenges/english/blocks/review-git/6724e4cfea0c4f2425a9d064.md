---
id: 6724e4cfea0c4f2425a9d064
title: Git Review
challengeType: 31
dashedName: review-git
---

# --description--

## Introduction to Version Control 

- **Definition**: A version control system allows you to track and manage changes in your project. Examples of version control systems used in software are Git, SVN, or Mercurial.

## Cloud-Based Version Control Providers

- **List of Cloud-Based Version Control Providers**: GitHub and GitLab are popular examples of cloud-based version control providers that allow software teams to collaborate and manage repositories. 

## Installing and Setting up Git

- **Installing Git**: To check if Git is already installed on your machine you can run the following command in the terminal:

```sh
git --version
```

If you see a version number, that means Git is installed. If not, then you will need to install it.

For Linux systems, Git often comes preinstalled with most distros. If you do not have Git pre-installed, you should be able to install it with your package manager commands such as `sudo apt-get install git` or `sudo pacman -S git`.

For Mac users, you can install Git via Homebrew with `brew install git`, or you can download the executable installer from Git's website.

For Windows, you can download the executable installer from Git's website. Or, if you have set up Chocolatey, you can run `choco install git.install` in PowerShell. Note that on Windows, you may also want to download Git Bash so you have a Unix-like shell environment available.

To make sure the installation worked, run the `git --version` command again in the terminal.

- **Git Configurations**: `git config` is used to set configuration variables that are responsible for how Git operates on your machine. To view your current setting variables and where they are stored on your system, you can run the following command:

```sh
git config --list --show-origin
```

Right now you should be seeing only system-level configuration settings if you just installed Git for the first time. 

To set your user name, you can run the following command:

```sh
git config --global user.name "Jane Doe"
```

The `--global` flag is used here to set the user name for all projects on your system that use Git. If you need to override the user name for a particular project, then you can run the command in that particular project directory without the `--global` flag.

To set the user email address, you can run the following command:

```sh
git config --global user.email janedoe@example.com
```

Another configuration you can set is the preferred editor you want Git to use. Here is an example of how to set your preferred editor to Emacs:

```sh
git config --global core.editor emacs
```

If you choose not to set a preferred editor, then Git will default to your system's default editor.

## Open vs. Closed Source Software

- **Definition**: "Open-source" means people can see the code you publish, propose changes, report issues, and even run a modified version. "Closed-source" means the only people who can see and interact with the project are the people you explicitly authorize.

## GitHub 

- **Definition**: GitHub is a cloud-based solution that offers storage of version-controlled projects in something called "repositories", and enables collaboration features to use with those projects.
- **GitHub CLI**: This tool is used to do GitHub-specific tasks without leaving the command line. If you do not have it installed, you can get instructions to do so from GitHub's documentation - but you should have it available in your system's package manager.
- **GitHub Pages**: GitHub Pages is an option for deploying static sites, or applications that do not require a back-end server to handle logic. That is, applications that run entirely client-side, or in the user's browser, can be fully deployed on this platform.
- **GitHub Actions**: GitHub Actions is a feature that lets you automate workflows directly in your GitHub repository including building, testing, and deploying your code.

## Common Git Commands

- **`git init`**: This will initialize an empty Git repository so Git can begin tracking changes for this project. When you initialize an empty Git repository to a project, a new `.git` hidden directory will be added. This `.git` directory contains important information for Git to manage your project. 
- **`git status`**: This command is used to show the current state of your working directory - you will be using this command a lot in your workflow.
- **`git add`**: This command is used to stage your changes. Anything in the staging area will be added for the next commit. If you want to stage all unstaged changes, then you can use `git add .` The period (`.`) is an alias for the current directory you are in. 
- **`git commit`**: This command is used to commit your changes. A commit is a snapshot of your project state at that given time. If you run `git commit`, it will open up your preferred editor you set in the Git configuration. Once the editor is open, you can provide a detailed message of your changes. You can also choose to provide a shorter message by using the `git commit -m` command like this:

```sh
git commit -m "short message goes here"
```

- **`git log`**: This will list all prior commits with helpful information like the author, date of commit, commit message and commit hash. The commit hash is a long string which serves as a unique identifier for a commit.
- **`git remote add`**: This command is used to setup the remote connection to your remote repo.
- **`git push`**: This command is used to push up your changes to a remote repository.
- **`git pull`**: This command is used to pull down the latest changes from your remote repository into your local repository.  
- **`git clone`**: This command will clone a repository. This means you will have a copy of the repository. This copy includes the repository history, all files/folders and commits on your local device.
- **`git remote -v`**: This command will show the list of remote repositories associated with your local Git repository.
- **`git branch`**: This command will list all of your local branches.
- **`git fetch upstream`**: This command tells Git to go get the latest changes that are on your upstream remote (which is the original repo).
- **`git merge upstream/main`**: This command tells Git to merge the latest changes from the `main` branch in the upstream remote into your current branch.
- **`git reset`**: This command allows you to reset the current state of a branch. Passing the `--hard` flag tells Git to force the local files to match the branch state. This ensures that you have a clean slate to work from. 
- **`git rebase`**: A rebase in Git is a way to move or combine a sequence of commits from one branch onto another. 
  
## Working with Branches

- **Definition**: A branch in Git is a separate workspace where you can make changes. The `main` branch will often represent the primary or production branch in a real world application. Developer teams will create multiple branches for new features and bug fixes and then merge those changes back into the `main` branch. 
- **Creating a New Branch**: To create a new branch you can run the following command:

```sh
git branch feature
```

To checkout that branch, you can run the following command:

```sh
git checkout feature
```

Most developers will use the shorthand command for creating and checking out a branch which is the following:

```sh
git checkout -b new-branch-name
```

A newer and alternative command would be the `git switch` command. Here is an example for creating and switching to a new branch:

```sh
git switch -c new-branch-name
```

- **Branching Strategies**: Your `main` branch is your default branch and usually is pretty stable. So it is best to branch off from there to create new branches for items like bug fixes, new features, or other miscellaneous work. 
- **Merge Conflicts**: This happens when Git tries to automatically merge changes from different branches but can't decide which changes to keep. This usually happens when there are conflicting changes for the same portion of the file. 

## Five States for a Git Tracked File

- **"Untracked"**: This means that the file is new to the repository, and Git has not "seen" it before.
- **"Modified"**: This file existed in the previous commit, and has changes that have not been committed.
- **"Ignored"**: You likely won't see ignored files in Git, but your IDE might have an indicator for them. Ignored files are excluded from Git operations, typically because they are included in the `.gitignore` file.
- **"Deleted"**: A deleted file is the opposite of an untracked file - it's a file that previously existed, and has been removed.
- **"Renamed"**: A renamed file is a file where the contents are unchanged, but the name or location of the file was modified. In some cases, a file can be considered renamed even if it has a small amount of changes.

## `.gitignore` Files

- **Definition**: The `.gitignore` file is a special type of file related to Git operations. The name suggests that this file is used to tell Git to ignore things, and that's the common use case. But what it actually does is it tells Git to stop tracking a file.

## Working with Repositories 

- **Definition**: A repository is like a container for a project - if you are working on an app, you would keep the files for that app together in a repository. Repositories can be local on your computer, or remote on a service like GitHub. 
- **Public vs. Private Repositories**: A public repository can be viewed and downloaded by anyone. A private repository can only be accessed by you, and anyone you grant explicit access to.
- **Creating Repositories on GitHub**: To create a new repository on GitHub, you can click on the `"New Repository"` button and walk through the GitHub UI of setting up a new repository.
- **Pushing Local Repositories to GitHub**: If you have a local project on your computer, you can push up that repository to GitHub. Here is a step-by-step overview of the process:

1. Initialize an empty git repository in the project directory (`git init`).
2. Make changes to your project.
3. Run the `git status` command to see all changes made that are being tracked by git.
4. Stage your changes (`git add`).
5. Commit your changes (`git commit`).
6. Setup the remote connection (`git remote add`).
7. Push your changes to GitHub (`git push`).

## Pull Requests

- **Pull Requests**: A pull request is a request to pull changes in from your branch into the target branch. Pull requests are the flow you use when you want to contribute code changes to a project. This approach allows the maintainers of the project to review your changes. They can leave comments, ask questions, and suggest tweaks. Then once the review process is complete, it can be approved and merged into the main branch.

## Contributing to Other Repositories

- **Process**: There are thousands of projects that you can contribute to. Here is the basic process on how to contribute to another repository:

1. Read the contributing documentation
2. Find an available issue to work on
3. Fork the repository
4. Clone your forked copy of the repository
5. Create a new branch
6. Make the changes according to the issue
7. Create a PR (Pull Request)
8. Wait for a review for that PR

## Working with SSH and GPG Keys 

- **GPG Keys**: GPG, or Gnu Privacy Guard, keys are typically used to sign files or commits. Someone can then use your public GPG key to verify that the file signature is from your key and that the contents of the file have not been modified or tampered with. 

To generate a GPG key, you'll need to run:

```sh
gpg --full-generate-key
```

- **SSH Keys**: SSH, or Secure SHell, keys are typically used to authenticate a remote connection to a server - via the `ssh` utility. You can also use an SSH key to sign commits.

For an SSH key, you'll run:

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

`ed25519` is a modern public-key signature algorithm.

- **Signing Commits with GPG Keys**: In order to sign your commits with your GPG key, you'll need to upload your public key, not the private key, to your GitHub account. To list your public keys, you will need to run the following: 

```sh
gpg --list-secret-keys --keyid-format=long
```

Then, to get the public key, use:

```sh
gpg --armor --export "<key id>"
```
  
Then, take the short ID you got from listing the keys and run this command to set it as your git signing key:

```sh
git config --global user.signingkey <your_gpg_key_id>
```

Then, you can pass the `-S` flag to your `git commit` command to sign a specific commit - you'll need to provide your passphrase. Alternatively, if you want to sign every commit automatically, you can set the autosign config to `true`:

```sh
git config --global commit.gpgsign true
```

- **Signing Commits with SSH Keys**: To sign with an SSH key, which is a relatively new feature on GitHub, you'll need to start by uploading the key to your GitHub account. Then you'll need to set the signing mode for git to use SSH:

```sh
git config --global gpg.format ssh
```

Then, to set the signing key, you'll pass the file path instead of an ID:

```sh
git config --global user.signingkey <path_to_your_ssh_keys>
```

# --assignment--

Review Git topics and concepts.

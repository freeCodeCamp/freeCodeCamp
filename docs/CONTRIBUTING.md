# Contributor's Guide

Contributions to freeCodeCamp include code, documentation, answering user questions, running the project's infrastructure, and advocating for all types of freeCodeCamp users.

The freeCodeCamp project welcomes all contributions from anyone willing to work in good faith with other contributors and the community. No contribution is too small and all contributions are valued.

To learn more about contributing to the community see our [Contribute page](https://contribute.freeCodeCamp.org).

This guide explains the process for contributing to code, documentation, etc. and describes what to expect at each step.

---

## Follow these steps to contribute to this code-base:

1. Find an issue that needs assistance by searching for the [Help Wanted](https://github.com/freeCodeCamp/freeCodeCamp/labels/help%20wanted) tag.

2. If you are contributing to the code-base or Open Source for in general, first time, search for the [First Timers Welcome](https://github.com/freeCodeCamp/freeCodeCamp/labels/first%20timers%20welcome) tag. These are usually a good place to get started, and familiarize yourself with the workflow.

    > Tip: Working on your first contribution? You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

3. Let us know you are working on it by posting a comment on the issue.

4. Follow the [Contribution Guidelines](#contribution-guidelines) to start working on the issue.

Remember to feel free to ask for help in our [Contributors Chat room](https://gitter.im/FreeCodeCamp/Contributors).

## If you've found a bug that is not on the board, [follow these steps](README.md#found-a-bug).

---

## Contribution Guidelines

* [Code of Conduct](#code-of-conduct)
* [Prerequisites](#prerequisites)
* [Getting the code for the project](#getting-the-code-for-the-project)
* [Create a Branch](#create-a-branch)
* [Set Up Linting](#set-up-linting)
* [Set Up MailHog](#set-up-mailhog)
* [Set Up freeCodeCamp](#set-up-freecodecamp)
* [Make Changes](#make-changes)
* [Run The Test Suite](#run-the-test-suite)
* [Creating a Pull Request](#creating-a-pull-request)
* [Common Steps](#common-steps)
* [How We Review and Merge Pull Requests](#how-we-review-and-merge-pull-requests)
* [How We Close Stale Issues](#how-we-close-stale-issues)
* [Next Steps](#next-steps)
* [Other Resources](#other-resources)

### Code of Conduct

Before, we start let's learn more about our [Code of Conduct](CODE_OF_CONDUCT.md).

We are a very friendly and open community. But to remain so it is expected that everyone contributing should follow the code of conduct. It outlines the minimum expected behavior from contributors.

Please read it carefully, be courteous, and respectful to your fellow contributors. The Code of Conduct is designed and intended, above all else, to help establish a culture within the project that allows anyone and everyone who wants to contribute to feel safe doing so.

Open, diverse, and inclusive communities live and die on the basis of trust. Contributors can disagree with one another so long as they trust that those disagreements are in good faith and everyone is working towards a common goal.

> In short, its okay to disagree with others, but be polite and welcoming to all fellow contributors, that is how you can help build this community welcoming to all.

### Prerequisites

Start by installing the following tools, and softwares, if not already, on your local machine.

| Prerequisite                                                                                  | Version    |
| --------------------------------------------------------------------------------------------- | ---------- |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `~ ^3`     |
| [MailHog](https://github.com/mailhog/MailHog)                                                 | `~ ^1`     |
| [Node.js](http://nodejs.org)                                                                  | `~ ^8.9.3` |
| npm (comes with Node)                                                                         | `~ ^5`     |

> _Updating to the latest releases which provide long term support (LTS) is highly recommended_.

If Node.js or MongoDB is already installed on your machine, run the following commands to validate the versions:

```shell
node -v
mongo --version
```

To check your MongoDB version on Windows, you have to locate the installation directory. It is probably located at something like `C:\Program Files\MongoDB\Server\3.4\` where 3.4 is your version number.

If your versions are lower than the prerequisite versions, you should update.

Note:
Support from the maintainers of this project is available only for Devices/OS/Browsers which are the latest stable public editions.
For example `Chrome stable` is supported but `Chrome Canary` is not, etc.

Platform-specific guides to setting up a development environment:

* [How to clone and setup freeCodeCamp locally on Windows](https://forum.freecodecamp.org/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366)
* [How to clone and setup freeCodeCamp locally on macOS](https://forum.freecodecamp.org/t/how-to-clone-and-setup-the-freecodecamp-website-on-a-mac/78450)

### Getting the code for the project

#### Setting Up Your System

1. Install [Git](https://git-scm.com/) or your favorite Git client.
2. (Optional) [Setup an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

#### Forking freeCodeCamp

1. Go to the top level freeCodeCamp repository: <https://github.com/freeCodeCamp/freeCodeCamp>
2. Click the "Fork" Button in the upper right hand corner of the interface ([More Details Here](https://help.github.com/articles/fork-a-repo/))
3. After the repository has been forked, you will be taken to your copy of the freeCodeCamp repository at <https://github.com/yourUsername/freeCodeCamp>

#### Cloning Your Fork

1. Open a Terminal / Command Line / Bash Shell in your projects directory (_i.e.: `/yourprojectdirectory/`_)
2. Clone your fork of freeCodeCamp

    ```shell
    git clone https://github.com/yourUsername/freeCodeCamp.git
    ```

**(make sure to replace `yourUsername` with your GitHub username)**

This will download the entire freeCodeCamp repository to your projects directory.

#### Setup Your Upstream

1. Change directory to the new freeCodeCamp directory (`cd freeCodeCamp`)
2. Add a remote to the official freeCodeCamp repository:

    ```shell
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

Congratulations, you now have a local copy of the freeCodeCamp repository!

#### Maintaining Your Fork

Now that you have a copy of your fork, there is work you will need to do to keep it current.

##### Rebasing from Upstream

Do this prior to every time you create a branch for a pull request:

1. Make sure you are on the `staging` branch

    ```shell
    git status
    On branch staging
    Your branch is up-to-date with 'origin/staging'.
    ```

    If your aren't on `staging`, resolve outstanding files / commits and checkout the `staging` branch

    ```shell
    git checkout staging
    ```

2. Do a pull with rebase against `upstream`

    ```shell
    git pull --rebase upstream staging
    ```

    This will pull down all of the changes to the official staging branch, without making an additional commit in your local repository.

3. (_Optional_) Force push your updated staging branch to your GitHub fork, useful if you lose your local copy or want to start over.

    ```shell
    git push origin staging --force
    ```

    This will overwrite the staging branch of your fork.

### Create a Branch

Before you start working, you will need to create a separate branch specific to the issue / feature you're working on. You will push your work to this branch.

#### Naming Your Branch

Name the branch something like `fix/xxx` or `feature/xxx` where `xxx` is a short description of the changes or feature you are attempting to add. For example `fix/email-login` would be a branch where you fix something specific to email login.

#### Adding Your Branch

To create a branch on your local machine (and switch to this branch):

```shell
git checkout -b [name_of_your_new_branch]
```

and to push to GitHub:

```shell
git push origin [name_of_your_new_branch]
```

**If you need more help with branching, take a look at [this](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches).**

### Set Up Linting

You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything doesn't conform to [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121) (you can find a summary of those rules [here](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/.eslintrc)).

> Please do not ignore any linting errors, as they are meant to **help** you and to ensure a clean and simple code base.

### Set Up MailHog

To be able to log in, you need to set up MailHog. MailHog is a local SMTP mail server that will catch the emails your freeCodeCamp instance is sending. How you install MailHog is dependent upon your OS.

#### macOS

Here is how to set up MailHog on macOS with [Homebrew](https://brew.sh/):

```shell
brew install mailhog
brew services start mailhog
```

#### Windows

Download the latest MailHog version from [MailHog's official repository](https://github.com/mailhog/MailHog/blob/master/docs/RELEASES.md). Click on the link for your Windows version (32 or 64 bit) and .exe file will be downloaded to your computer.

Once it finishes downloading, click on the file. You will probably get a Windows firewall notification where you will have to allow access to MailHog. Once you do, a standard Windows command line prompt will open with MailHog already running.

To close MailHog, close the command prompt. To run it again, click on the same .exe file. You don't need to download a new one.

#### Linux

First install Go.

For Debian-based systems like Ubuntu and Linux Mint, run:

```shell
sudo apt-get install golang
```

For CentOS, Fedora, Red Hat Linux, and other RPM-based systems, run:

```shell
sudo dnf install golang
```

Or:

```shell
sudo yum install golang
```

Then install and run MailHog:

```shell
go get github.com/mailhog/MailHog
MailHog
```

To access your MailHog inbox, open your browser and navigate to <http://localhost:8025>. For any other questions related to MailHog or for instructions on custom configurations, check out the [MailHog](https://github.com/mailhog/MailHog) repository.

### Set Up freeCodeCamp

Once you have freeCodeCamp cloned, before you start the application, you first need to install all of the dependencies:

```shell
# Install NPM dependencies
npm install
```

Then you need to add the private environment variables (API Keys):

```shell
# Create a copy of the "sample.env" and name it as ".env".
# Populate it with the necessary API keys and secrets:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

Then edit the `.env` file and modify the API keys only for services that you will use.

Note: Not all keys are required, to run the app locally, however `MONGOHQ_URL` is the most important one. Unless you have MongoDB running in a setup different than the defaults, the URL in the sample.env should work fine.

You can leave the other keys as they are. Keep in mind if you want to use more services you'll have to get your own API keys for those services and edit those entries accordingly in the .env file.

Now you will need to start MongoDB, and then seed the database, then you can start the application:

```shell
# Start the mongo server in a separate terminal
# On OS X:
mongod

# If you are using Windows, you have to instead specify the full path to the mongod binary
# Make sure to replace 3.4 with the version you have installed
"C:\Program Files\MongoDB\Server\3.4\bin\mongod"

# Initialize freeCodeCamp
# This will seed the database for the first time.
# This command should only be run once.
npm run only-once

# Start the application
npm run develop
```

Now navigate to your browser and open <http://localhost:3000>. If the app loads, congratulations – you're all set. Otherwise, let us know by asking in the [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors) on Gitter. There might be an error in the console of your browser or in Bash / Terminal / Command Line that will help identify the problem.

If the app launches but you are encountering errors with the UI itself, for example if fonts are not being loaded or if the code editor is not displaying properly, you may try the following:

```shell
# Remove all installed node modules
rm -rf node_modules

# Reinstall npm packages
npm install

# Seed the database
node seed

# Re-start the application
npm run develop
```

### Make Changes

This bit is up to you!

#### How to find the code in the freeCodeCamp codebase to fix/edit

The best way to find out any code you wish to change/add or remove is using the GitHub search bar at the top of the repository page. For example, you could search for a challenge name and the results will display all the files along with line numbers. Then you can proceed to the files and verify this is the area that you were looking forward to edit. Always feel free to reach out to the chat room when you are not certain of any thing specific in the code.

#### Changes to the seed files

If you made changes to any file in the `/seed` directory, you need to run

```shell
node seed
```

in order to see the changes.

### Run The Test Suite

When you're ready to share your code, run the test suite:

```shell
npm test
```

and ensure all tests pass.

### Creating a Pull Request

#### What is a Pull Request?

A pull request (pull request) is a method of submitting proposed changes to the freeCodeCamp repository (or any repository, for that matter). You will make changes to copies of the files which make up freeCodeCamp in a personal fork, then apply to have them accepted by freeCodeCamp proper.

#### Need Help?

freeCodeCamp Issue Mods and staff are on hand to assist with Pull Request related issues in our [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors).

#### Important: ALWAYS EDIT ON A BRANCH

Take away only one thing from this document: Never, **EVER** make edits to the `staging` branch. ALWAYS make a new branch BEFORE you edit files. This is critical, because if your pull request is not accepted, your copy of staging will be forever sullied and the only way to fix it is to delete your fork and re-fork.

#### Methods

There are two methods of creating a pull request for freeCodeCamp:

* Editing files on a local clone (recommended)
* Editing files via the GitHub Interface

##### Method 1: Editing via your Local Fork _(Recommended)_

This is the recommended method. Read about [How to Setup and Maintain a Local Instance of freeCodeCamp](#maintaining-your-fork).

1. Perform the maintenance step of rebasing `staging`.
2. Ensure you are on the `staging` branch using `git status`:

```shell
git status
On branch staging
Your branch is up-to-date with 'origin/staging'.

nothing to commit, working directory clean
```

1. If you are not on staging or your working directory is not clean, resolve any outstanding files/commits and checkout staging `git checkout staging`

2. Create a branch off of `staging` with git: `git checkout -B branch/name-here` **Note:** Branch naming is important. Use a name like `fix/short-fix-description` or `feature/short-feature-description`. Review the [Contribution Guidelines](#contribution-guidelines) for more detail.

3. Edit your file(s) locally with the editor of your choice

4. Check your `git status` to see unstaged files.

5. Add your edited files: `git add path/to/filename.ext` You can also do: `git add .` to add all unstaged files. Take care, though, because you can accidentally add files you don't want added. Review your `git status` first.

6. Commit your edits: We have a [tool](https://commitizen.github.io/cz-cli/) that helps you to make standard commit messages. Execute `npm run commit` and follow the steps.

7. [Squash your commits](http://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231) if there are more than one.

8. If you would want to add/remove changes to previous commit, add the files as in Step 5 earlier, and use `git commit --amend` or `git commit --amend --no-edit` (for keeping the same commit message).

9. Push your commits to your GitHub Fork: `git push origin branch/name-here`

10. Go to [Common Steps](#common-steps)

##### Method 2: Editing via the GitHub Interface

Note: Editing via the GitHub Interface is not recommended, since it is not possible to update your fork via GitHub's interface without deleting and recreating your fork.

Read the [Wiki article](http://forum.freecodecamp.org/t/how-to-make-a-pull-request-on-free-code-camp/19114) for further information

### Common Steps

1. Once the edits have been committed, you will be prompted to create a pull request on your fork's GitHub Page.

2. By default, all pull requests should be against the freeCodeCamp main repository, `staging` branch.

3. Submit a [pull request](http://forum.freecodecamp.org/t/how-to-contribute-via-a-pull-request/19368) from your branch to freeCodeCamp's `staging` branch.

4. The title (also called the subject) of your pull request should be descriptive of your changes and succinctly indicates what is being fixed.

    * **Do not add the issue number in the pull request title or commit message.**

    * Examples: `Add Test Cases to Bonfire Drop It` `Correct typo in Waypoint Size Your Images`

5. In the body of your pull request include a more detailed summary of the changes you made and why.

    * If the pull request is meant to fix an existing bug/issue then, at the end of your pull request's description, append the keyword `closes` and #xxxx (where xxxx is the issue number). Example: `closes #1337`. This tells GitHub to close the existing issue, if the pull request is merged.

6. Indicate if you have tested on a local copy of the site or not.

### How We Review and Merge Pull Requests

freeCodeCamp has a team of volunteer Issue Moderators. These Issue Moderators routinely go through open pull requests in a process called [Quality Assurance](https://en.wikipedia.org/wiki/Quality_assurance) (QA).

1. If an Issue Moderator QA's a pull request and confirms that the new code does what it is supposed without seeming to introduce any new bugs, they will comment "LGTM" which means "Looks good to me."

2. Another Issue Moderator will QA the same pull request. Once they have also confirmed that the new code does what it is supposed to without seeming to introduce any new bugs, they will merge the pull request.

If you would like to apply to join our Issue Moderator team - which is a Core Team position - message [@BerkeleyTrue](https://gitter.im/berkeleytrue) with links to 5 of your pull requests that have been accepted and 5 issues where you have helped someone else through commenting or QA'ing.

### How We Close Stale Issues

We will close any issues or pull requests that have been inactive for more than 15 days, except those that match the following criteria:

* bugs that are confirmed
* pull requests that are waiting on other pull requests to be merged
* features that are a part of a GitHub project

### Next Steps

#### If your pull request is accepted

Once your pull request is accepted, you may delete the branch you created to submit it. This keeps your working fork clean.

You can do this with a press of a button on the GitHub pull request interface. You can delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your pull request is rejected

Don't despair! You should receive solid feedback from the Issue Moderators as to why it was rejected and what changes are needed.

Many Pull Requests, especially first Pull Requests, require correction or updating. If you have used the GitHub interface to create your pull request, you will need to close your pull request, create a new branch, and re-submit.

If you have a local copy of the repository, you can make the requested changes and amend your commit with: `git commit --amend` This will update your existing commit. When you push it to your fork you will need to do a force push to overwrite your old commit: `git push --force`

Be sure to post in the pull request conversation that you have made the requested changes.

### Other Resources

* [Style Guide for freeCodeCamp Challenges](/docs/challenge-style-guide.md)

* [Searching for Your Issue on GitHub](http://forum.freecodecamp.org/t/searching-for-existing-issues/19139)

* [Creating a New GitHub Issue](http://forum.freecodecamp.org/t/creating-a-new-github-issue/18392)

* [Select Issues for Contributing Using Labels](http://forum.freecodecamp.org/t/free-code-camp-issue-labels/19556)

* [How to clone the freeCodeCamp website on a Windows pc](http://forum.freecodecamp.org/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366)

* [How to log in to your local freeCodeCamp site - using GitHub](http://forum.freecodecamp.org/t/how-to-log-in-to-your-local-instance-of-free-code-camp/19552)

* [Writing great git commit messages](http://forum.freecodecamp.org/t/writing-good-git-commit-messages/13210)

* [Contributor Chat Support - For the freeCodeCamp repositories, and running a local instance](https://gitter.im/FreeCodeCamp/Contributors)

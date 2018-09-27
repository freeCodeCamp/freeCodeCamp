# Contributor's Guide

We welcome pull requests from freeCodeCamp campers (our students) and seasoned JavaScript developers alike! Follow these steps to contribute:

1. Find an issue that needs assistance by searching for the [Help Wanted](https://github.com/freeCodeCamp/curriculum/labels/help%20wanted) tag.

2. Let us know you are working on it by posting a comment on the issue.

3. Follow the instructions in this guide to start working on the issue.

Working on your first Pull Request? You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

### Need Help?

freeCodeCamp Issue Mods and staff are on hand to assist with any contributing related issues in our [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors).

### Found a bug?
If you think you've found a bug, first read the [Help I've Found a Bug](https://forum.freecodecamp.org/t/how-to-report-a-bug/19543) article and follow its instructions. If you're confident it's a new bug, go ahead and create a new GitHub issue. Be sure to include as much information as possible so we can reproduce the bug.

## Quick Reference

|command|description|
|---|---|
| `npm run test` |  run all JS tests in the system, including client, server, lint, and challenge tests |
| `npm run test-challenges` | run all challenge tests (for each challenge JSON file, run all `tests` against all `solutions`) |
| `npm run commit` | interactive tool to help you build a good commit message |
| `npm run unpack` | extract challenges from `seed/challenges` into `unpacked` subdirectory, one HTML page per challenge - see [Unpack and Repack](#unpack-and-repack) |
| `npm run repack` | repack challenges from `unpacked` subdirectory into `seed/challenges` |

## Table of Contents

**[Setup](#setup-guide)**
- [Prerequisites](#prerequisites)
- [Fork the Project](#fork-the-project)
- [Set Up Linting](#set-up-linting)
- [Set Up Curriculum](#set-up-curriculum)

**[Make Changes](#make-changes)**
- [About the Challenges](#about-the-challenges)
- [Find Code to Change](#find-code-to-change)
- [Maintain Your Fork](#maintain-your-fork)
- [Create a Branch](#create-a-branch)
- [Modify the Code](#modify-the-code)
- [Run The Test Suite](#run-the-test-suite)
- [Stage Your Changes](#stage-your-changes)
- [Commit Your Changes](#commit-your-changes)

**[Submit](#submit)**
- [Create a Pull Request](#create-a-pull-request)
- [Common Steps](#common-steps)
- [How We Review and Merge Pull Requests](#how-we-review-and-merge-pull-requests)
- [How We Close Stale Issues](#how-we-close-stale-issues)
- [Next Steps](#next-steps)

**[Other Resources](#other-resources)**
- [Unpack and Repack](#unpack-and-repack)
- [Challenge Template](#challenge-template)
- [Useful Links](#useful-links)

--------------------------------------------------------------------------------

## Setup

### Prerequisites

| Prerequisite                                | Version |
| ------------------------------------------- | ------- |
| [Node.js](http://nodejs.org)                | `~ ^8.9.3`  |
| npm (comes with Node)                       | `~ ^5`  |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `~ ^3`  |

**Note**: MongoDB is optional. It’s only necessary if you need to generate a unique ObjectId, such as when you’re creating a new challenge or project to add to the curriculum.

If Node.js is already installed on your machine, run the following commands to validate the versions of Node and npm:

```shell
node -v
npm -v
```

To check your version of MongoDB, run:

```shell
mongo --version
```

To check your MongoDB version on Windows, you'll have to locate the installation directory. It is probably located at `C:\Program Files\MongoDB\Server\3.4\`, where 3.4 is your version number.

If your versions are lower than the prerequisite versions, you should update.

> _Updating to the latest releases is recommended_.

### Fork the Project

#### Setting Up Your System

1. Install [Git](https://git-scm.com/) or your favorite Git client.
2. (Optional) [Setup an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

#### Forking freeCodeCamp Curriculum

1. Go to the top level freeCodeCamp Curriculum repository: <https://github.com/freeCodeCamp/curriculum>
2. Click the "Fork" Button in the upper right hand corner of the interface ([more details here](https://help.github.com/articles/fork-a-repo/)).
3. After the repository (repo) has been forked, you will be taken to your copy of the freeCodeCamp repo at <https://github.com/yourUsername/curriculum>.

#### Cloning Your Fork

1. Open a terminal / command line / bash shell in your projects directory:

```shell
/yourprojectdirectory/
```

2. Clone your fork of freeCodeCamp:

```shell
$ git clone https://github.com/yourUsername/curriculum.git
```

> Make sure to replace `yourUsername` with your GitHub username.

This will download the entire freeCodeCamp Curriculum repo from your fork to your projects directory.

#### Set Up Your Upstream

1. Change directory to the newly created `curriculum` directory:

```shell
$ cd curriculum
```

2. Add a remote to the official freeCodeCamp Curriculum repo:

```shell
$ git remote add upstream https://github.com/freeCodeCamp/curriculum.git
```

Congratulations, you now have a local copy of the freeCodeCamp Curriculum repo!

### Set Up Linting

You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything doesn't conform to [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121) (you can find a summary of those rules [here](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/.eslintrc)).

> Please do not ignore any linting errors, as they are meant to **help** you and to ensure a clean and simple code base.

### Set Up Curriculum

Once you have freeCodeCamp Curriculum cloned, you first need to install all of the dependencies:

```bash
# Install NPM dependencies
$ npm install
```

If that doesn’t work, let us know by asking in the [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors) on Gitter. There might be an error in the console of your browser or in the terminal / command line / bash shell that will help identify the problem.

## Make Changes

### About the Challenges

The challenges are stored inside the `challenges` directory (and its various subdirectories).

The `challenge` directory contains all the challenges that appear on the freeCodeCamp Learn platform.

For each challenge section, there is a JSON file (fields documented below) containing its name, seed HTML, tests, and so on.

For more about creating challenges, see the [Challenge Style Guide](./challenge-style-guide.md).

### Find Code to Change

The best way to find out any code you wish to change, add, or remove is using the GitHub search bar at the top of the [freeCodeCamp Curriculum](https://github.com/freeCodeCamp/curriculum) repository page. For example, you could search for a challenge name and the results will display the JSON file with that challenge, along with line numbers. Then you can proceed to the file locally, find the challenge, and your make changes.

Always feel free to reach out to the chat room when you are not certain of anything specific in the code.

### Maintain Your Fork

Now that you have a copy of your fork, there is work you will need to do to keep it current. Before creating a new branch for a [pull request](#what-is-a-pull-request):

1. Make sure you are on the `dev` branch:

```shell
$ git status
On branch dev
Your branch is up-to-date with 'origin/dev'.
```

If your aren't on `dev`, resolve outstanding files / commits and checkout the `dev` branch

```shell
$ git checkout dev
```

2. Do a pull with rebase against `upstream`:

```shell
$ git pull --rebase upstream dev
```

This will pull down all of the changes made to the official freeCodeCamp Curriculum `dev` branch, without making an additional commit in your local repo.

3. (_Optional_) Force push your updated staging branch to your GitHub fork:

```shell
$ git push origin dev --force
```

This will overwrite the dev branch of your fork.

### Create a Branch

Once your local copy of the curriculum is up to date, you will need to create a separate branch specific to the issue / feature you're working on. You will push your work to this branch.

> IMPORTANT: ALWAYS EDIT ON A BRANCH
>
> Take away only one thing from this document: Never, **EVER**
make edits to the `dev` branch. ALWAYS make a new branch BEFORE you edit files. This is critical, because if your PR is not accepted, your copy of `dev` will be forever sullied and the only easy way to fix it is to delete your fork and re-fork.

#### Naming Your Branch

Name the branch something like `fix/xxx` or `feature/xxx`, where `xxx` is a short description of the changes or feature you are attempting to add. For example, `fix/typo-es6-challenge` would be a branch where you correct a spelling error in one of the ES6 challenges.

#### Adding Your Branch

To create a branch on your local machine (and switch to this branch):

```shell
$ git checkout -b [name_of_your_new_branch]
```

And to push it to GitHub:

```shell
$ git push origin [name_of_your_new_branch]
```

> If you need more help with branching, take a look at this [cheat sheet](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches).

### Modify the Code

Edit your file(s) locally with the editor of your choice. See the [challenge template](#challenge-template) for more information about the properties of each challenge object.

For an alternate method of editing files locally, you may want to use `unpack` and `repack` -- see [Unpack and Repack](#unpack-and-repack) for instructions.

### Run The Test Suite

When you're finished making changes, run the test suite:

```shell
$ npm run test
```

If some tests don't pass, check your terminal / command line / bash shell for errors and make the required changes.

### Stage Your Changes

Check your `git status` to see unstaged files:

```bash
$ git status
On branch fix/typo-es6-challenge
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   challenges/02-javascript-algorithms-and-data-structures/es6.json

no changes added to commit (use "git add" and/or "git commit -a")
```

To add your edited files, run:

```shell
$ git add path/to/filename.ext
```

You can also run `git add .` to add all unstaged files. Take care, though, because you can accidentally add files you don't want added. Review your `git status` first.

### Commit Your Changes

We have a [tool](https://commitizen.github.io/cz-cli/) that helps you make standard commit messages. Execute `npm run commit` and follow the steps. This will generate a conventional commit message.  

**Note**: Your pull request will fail the Travis CI build if your commits do not have conventional messages. [Click here](https://conventionalcommits.org/#why-use-conventional-commits) to read more about conventional commit messages.

If you want to add/remove changes to previous commit, [add the files](#making-your-changes), and use `git commit --amend` or `git commit --amend --no-edit` (to keep the same commit message).

[Squash your commits](http://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231) if there are more than one.

#### Push Your Changes

To push your commit to your GitHub fork: 

```bash
$ git push origin branch/name-here
```

## Submit
### Create a Pull Request

#### What is a Pull Request?

A pull request (PR) is a method of submitting proposed changes to the freeCodeCamp Curriculum repo (or any repo, for that matter). You will make changes to copies of the files which make up Curriculum in a personal fork, then apply to have them accepted by the freeCodeCamp/Curriculum proper.

### Common Steps

1.  Once the edits have been committed, you will be prompted to create a pull request on your fork's GitHub Page.

2.  By default, all pull requests should be against the freeCodeCamp Curriculum repo’s `dev` branch.
    **Make sure that your Base Fork is set to freeCodeCamp/curriculum when raising a pull request.**

    ![pr-fork-instructions](images/pr-fork-instructions.png)

3.  Submit a [pull request](http://forum.freecodecamp.org/t/how-to-contribute-via-a-pull-request/19368) from your branch to the freeCodeCamp Curriculum `dev` branch.


4.  In the body of your PR include a more detailed summary of the changes you made and why.

    -   If the PR is meant to fix an existing bug/issue then, at the end of your PR's description, append the keyword `Closes` and #xxxx (where xxxx is the issue number). Example: `Closes #1337`. This tells GitHub to close the existing issue, if the PR is merged.

5.  Indicate if you have tested on a local copy of the site or not.

### How We Review and Merge Pull Requests

freeCodeCamp has a team of volunteer Issue Moderators. These Issue Moderators routinely go through open pull requests in a process called [Quality Assurance](https://en.wikipedia.org/wiki/Quality_assurance) (QA).

1. If an Issue Moderator QA's a pull request and confirms that the new code does what it is supposed without seeming to introduce any new bugs, they will comment "LGTM" which means "Looks good to me."

2. Another Issue Moderator will QA the same pull request. Once they have also confirmed that the new code does what it is supposed to without seeming to introduce any new bugs, they will merge the pull request.

If you would like to apply to join our Issue Moderator team, message [@quincylarson](https://gitter.im/quincylarson) with links to 5 of your pull requests that have been accepted and 5 issues where you have helped someone else through commenting or QA'ing.

### How We Close Stale Issues

We will close any issues or pull requests that have been inactive for more than 15 days, except those that match the following criteria:
- bugs that are confirmed
- pull requests that are waiting on other pull requests to be merged
- features that are a part of a GitHub project

### Next Steps

#### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it. This keeps your working fork clean.

You can do this with a press of a button on the GitHub PR interface. You can delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your PR is rejected

Don't despair! You should receive solid feedback from the Issue Moderators as to why it was rejected and what changes are needed.

Many Pull Requests, especially first Pull Requests, require correction or updating. You can make the requested changes to your local copy and amend your commit with: `git commit --amend`. This will let you update your existing commit. When you push it to your fork you will need to do a force push to overwrite your old commit: `git push --force`

Be sure to post in the PR conversation that you have made the requested changes.

## Other Resources

### Unpack and Repack

`npm run unpack` extracts challenges into separate HTML files under `challenges/unpacked` for easier viewing and editing. The files are `.gitignore`d and will *not* be checked in, and is essentially a tool for editing the `challenge.json` files in the browser.

These unpacked files are self-contained and run their own tests -- open a browser JS console to see the test results.

> **Note**: These in-browser tests should work for simple JavaScript challenges. But other types of challenges may not fare so well. For HTML challenges, challenge tests assume that the solution HTML is the only HTML on the whole page, so jQuery selectors may select seed *and* solution elements. For React / Modern JS challenges, we would need to transpile JSX or ES6 before running the tests.

`npm run repack` gathers up the unpacked/edited HTML files into challenge-block JSON files. After running repack, use `git diff` to see the changes in your console.

When editing the unpacked files, you must only insert or edit lines between comment fences like `<!--description-->` and `<!--end-->`. In descriptions, you can insert a paragraph break with `<!--break-->`.

Unpacked lines that begin with `//--JSON:` are parsed and inserted verbatim.

If you want to **add a challenge**, **change the order** of challenges in a block, or **edit the title** or any other fields of a challenge, you must do that work *inside the main seed JSON file* and then re-run `unpack`.

### Challenge Template

```
{
  "id": "Unique identifier (alphanumerical, MongoDB _id)",
  "title": "Challenge Title",
  "description": [
    "A Description of the challenge and what is required to pass",
    "A new string in the array will create a new paragraph."
  ],
  "tests": [
    {
      "text": "Should return \"foo\".",
      "testString": "A stringified function using Chai asserts"
    }
  ],
  "challengeType": 1,
  "translations": {
    "language-code": {
      "title": "The Title in a Different Language",
      "description": [
        "The description in a different language."
      ]
    }
  },
  "files": {
    "indexjs": {
      "key": "indexjs",
      "ext": "js",
      "name": "index",
      "contents": [
        "// code displayed in the editor by default",
        "// a new string in the array is a new line"
      ],
      "head": [
        "A place for test setup",
        "Can be thought of as mocha's beforeEach()"
      ],
      "tail": [
        "A place for test tear down",
        "Can be thought of as mocha's afterEach()"
        ]
    }
  }
},
```

### Useful Links

* Creating and Editing Challenges:

    -   [Challenge Style Guide](challenge-style-guide.md) - how to create and format challenges

    -   [Challenge types](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - what the numeric challenge type values mean (enum).

    -   [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests ](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the curriculum

* Bugs and Issues:

    -   [Searching for Your Issue on GitHub](http://forum.freecodecamp.org/t/searching-for-existing-issues/19139)

    -   [Creating a New GitHub Issue](http://forum.freecodecamp.org/t/creating-a-new-github-issue/18392)

    -   [Select Issues for Contributing Using Labels](http://forum.freecodecamp.org/t/free-code-camp-issue-labels/19556)

* Miscellaneous:

    -   [How to clone the freeCodeCamp website on a Windows PC](http://forum.freecodecamp.org/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366)

    -   [How to log in to your local freeCodeCamp site using GitHub](http://forum.freecodecamp.org/t/how-to-log-in-to-your-local-instance-of-free-code-camp/19552)

    -   [Writing great git commit messages](http://forum.freecodecamp.org/t/writing-good-git-commit-messages/13210)

    -   [Contributor Chat Support](https://gitter.im/FreeCodeCamp/Contributors)  - for the freeCodeCamp repositories, and running a local instance

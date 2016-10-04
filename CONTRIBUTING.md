# Contributor's Guide

## Table of Contents

-   [I want to help!](#i-want-to-help)
-   [Contribution Guidelines](#contribution-guidelines)
-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
-   [Linting Setup](#linting-setup)
-   [Found a bug?](#found-a-bug)
-   [Creating Pull Requests](#creating-pull-requests)
-   [Common Steps](#common-steps)
-   [Next Steps](#next-steps)

### I want to help!

We welcome pull requests from Free Code Camp campers (our students) and seasoned
JavaScript developers alike! Follow these steps to contribute:

1.  Find an issue that needs assistance by searching for the [Help Wanted](https://github.com/FreeCodeCamp/FreeCodeCamp/labels/help%20wanted) tag.

2.  Let us know you are working on it by posting a comment on the issue.

3.  Feel free to ask for help in our
    [Contributors](https://gitter.im/FreeCodeCamp/Contributors) Gitter room.

If you've found a bug that is not on the board, [follow these steps](#found-a-bug).

### Contribution Guidelines

1.  Fork the project: [How To Fork And Maintain a Local Instance of Free Code
    Camp](http://forum.freecodecamp.com/t/how-to-fork-and-maintain-a-local-instance-of-free-code-camp/19116)

2.  Create a branch specific to the issue or feature you are working on. Push
    your work to that branch. ([Need help with
    branching?](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches))

3.  Name the branch something like `fix/xxx` or `feature/xxx` where `xxx` is a
    short description of the changes or feature you are attempting to add. For
    example `fix/email-login` would be a branch where I fix something specific
    to email login.

4.  [Set up Linting](#linting-setup) to run as you make changes.

5.  When you are ready to share your code, run the test suite `npm test` and
    ensure all tests pass.  For Windows contributors, skip the jsonlint pretest
    run by using `npm run test-challenges`, as jsonlint will always fail on
    Windows, given the wildcard parameters.

6.  Squash your Commits. Ref: [rebasing](http://forum.freecodecamp.com/t/how-to-use-git-rebase/13226)

7.  Submit a [pull
    request](http://forum.freecodecamp.com/t/how-to-make-a-pull-request-on-free-code-camp/19114)
    from your branch to Free Code Camp's `staging` branch.  [Travis
    CI](https://travis-ci.org/FreeCodeCamp/FreeCodeCamp) will then take your
    code and run `npm test`.  Make sure this passes, then we'll do a quick code
    review and give you feedback, then iterate from there.

### Prerequisites

| Prerequisite                                | Version |
| ------------------------------------------- | ------- |
| [MongoDB](http://www.mongodb.org/downloads) | `~ ^3`  |
| [Node.js](http://nodejs.org)                | `~ ^6`  |
| npm (comes with Node)                       | `~ ^3`  |

> _Updating to the latest releases is recommended_.

### Getting Started

Note: If this is your first time working with a node-gyp dependent module,
please follow the [node-gyp installation
guide](https://github.com/nodejs/node-gyp#installation) to ensure a working npm
build.

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/freecodecamp/freecodecamp.git freecodecamp

# Change directory
cd freecodecamp

# Install NPM dependencies
npm install

# Install Gulp globally
npm install -g gulp

# Install Bower globally
npm install -g bower

# Install Bower dependencies
bower install
```

_Private Environment Variables (API Keys)_

```bash
# Create a copy of the "sample.env" and name it as ".env".
# Populate it with the necessary API keys and secrets:
cp sample.env .env
```

Edit your `.env` file and modify the API keys only for services that you will
use.

Note : Not all keys are required, to run the app locally, however `MONGOHQ_URL`
is the most important one. Unless you have MongoDB running in a setup different
than the defaults, the URL in the `sample.env` should work fine.

You can leave the other keys as they are. Keep in mind if you want to use more
services you'll have to get your own API keys for those services and edit those
entries accordingly in the `.env` file.

```bash
# Start the mongo server in a separate terminal
mongod

# Initialize Free Code Camp
# This will seed the database for the first time.
# This command should only be run once.
npm run only-once

# start the application
gulp
```

Now navigate to your browser and open
<http://localhost:3000>. If the app loads,
congratulations – you're all set. Otherwise, let us know by opening a GitHub
issue and with your error.

### Linting Setup

You should have [ESLint running in your
editor](http://eslint.org/docs/user-guide/integrations.html), and it will
highlight anything doesn't conform to [Free Code Camp's JavaScript Style
Guide](http://forum.freecodecamp.com/t/free-code-camp-javascript-style-guide/19121)
(you can find a summary of those rules
[here](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/.eslintrc).
Please do not ignore any linting errors, as they are meant to **help** you and
to ensure a clean and simple code base. Make sure none of your JavaScript is
longer than 80 characters per line.  The reason we enforce this is because one
of our dependent NPM modules, [jsonlint](https://github.com/zaach/jsonlint),
does not fully support wildcard paths in Windows.

### Found a bug?

Do not file an issue until you have followed these steps:

1.  Read [Help I've Found a
    Bug](http://forum.freecodecamp.com/t/how-to-report-a-bug/19543)
    wiki page and follow the instructions there.

2.  Asked for confirmation in the appropriate [Help Room](http://forum.freecodecamp.com/t/free-code-camp-official-chat-rooms/19390/2)

3.  Please _do not_ open an issue without a 3rd party confirmation of your
    problem.

### Creating Pull Requests

#### What is a Pull Request?

A pull request (PR) is a method of submitting proposed changes to the Free Code
Camp Repo (or any Repo, for that matter). You will make changes to copies of the
files which make up Free Code Camp in a personal fork, then apply to have them
accepted by Free Code Camp proper.

#### Need Help?

Free Code Camp Issue Mods and staff are on hand to assist with Pull Request
related issues on our Contributors Chat Room.

#### How to find the code in the Free Code Camp codebase to fix/edit?

The best way to find out any code you wish to change/add or remove is using
the GitHub search bar at the top of the repository page. For example, you could
search for a challenge name and the results will display all the files along
with line numbers. Then you can proceed to the files and verify this is the area
that you were looking forward to edit. Always feel free to reach out to the chat
room when you are not certain of any thing specific in the code.

#### Important: ALWAYS EDIT ON A BRANCH

Take away only one thing from this document, it should be this: Never, **EVER**
make edits to the `staging` branch. ALWAYS make a new branch BEFORE you edit
files. This is critical, because if your PR is not accepted, your copy of
staging will be forever sullied and the only way to fix it is to delete your
fork and re-fork.

#### Methods

There are two methods of creating a pull request for Free Code Camp:

-   Editing files via the GitHub Interface
-   Editing files on a local clone

##### Method 1: Editing via your Local Fork _(Recommended)_

This is the recommended method. Read about How to Setup and Maintain a Local
Instance of Free Code Camp.

1.  Perform the maintenance step of rebasing `staging`.
2.  Ensure you are on the `staging` branch using `git status`:

```bash
$ git status
On branch staging
Your branch is up-to-date with 'origin/staging'.

nothing to commit, working directory clean
```

1.  If you are not on staging or your working directory is not clean, resolve
    any outstanding files/commits and checkout staging `git checkout staging`

2.  Create a branch off of `staging` with git: `git checkout -B
    branch/name-here` **Note:** Branch naming is important. Use a name like
    `fix/short-fix-description` or `feature/short-feature-description`. Review
     the [Contribution Guidelines](#contribution-guidelines) for more detail.

3.  Edit your file(s) locally with the editor of your choice

4.  Check your `git status` to see unstaged files.

5.  Add your edited files: `git add path/to/filename.ext` You can also do: `git
    add .` to add all unstaged files. Take care, though, because you can
    accidentally add files you don't want added. Review your `git status` first.

6.  Commit your edits: `git commit -m "Brief Description of Commit"`

7.  Squash your commits, if there are more than one.

8.  Push your commits to your GitHub Fork: `git push -u origin branch/name-here`

9.  Go to [Common Steps](#common-steps)

##### Method 2: Editing via the GitHub Interface

Note: Editing via the GitHub Interface is not recommended, since it is not
possible to update your fork via GitHub's interface without deleting and
recreating your fork.

Read the [Wiki
article](http://forum.freecodecamp.com/t/how-to-make-a-pull-request-on-free-code-camp/19114)
for further information

### Common Steps

1.  Once the edits have been committed, you will be prompted to create a pull
    request on your fork's GitHub Page.

2.  By default, all pull requests should be against the FCC main repo, `staging`
    branch.

3.  Submit a [pull
    request](http://forum.freecodecamp.com/t/how-to-contribute-via-a-pull-request/19368)
    from your branch to Free Code Camp's `staging` branch.

4.  The title (also called the subject) of your PR should be descriptive of your
    changes and succinctly indicates what is being fixed.

    -   **Do not add the issue number in the PR title**.

    -   Examples: `Add Test Cases to Bonfire Drop It` `Correct typo in Waypoint
        Size Your Images`

5.  In the body of your PR include a more detailed summary of the changes you
    made and why.

    -   If the PR is meant to fix an existing bug/issue, then, at the end of
        your PR's description, append the keyword `closes` and #xxxx (where xxxx
        is the issue number). Example: `closes #1337`. This tells GitHub to
        close the existing issue, if the PR is merged.

6.  Indicate if you have tested on a local copy of the site or not.

### Next Steps

#### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it.
This keeps your working fork clean.

You can do this with a press of a button on the GitHub PR interface. You can
delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your PR is rejected

Don't despair! You should receive solid feedback from the Issue Moderators as to
why it was rejected and what changes are needed.

Many Pull Requests, especially first Pull Requests, require correction or
updating. If you have used the GitHub interface to create your PR, you will need
to close your PR, create a new branch, and re-submit.

If you have a local copy of the repo, you can make the requested changes and
amend your commit with: `git commit --amend` This will update your existing
commit. When you push it to your fork you will need to do a force push to
overwrite your old commit: `git push --force`

Be sure to post in the PR conversation that you have made the requested changes.

### Other resources

-   [Searching for Your Issue on
    GitHub](http://forum.freecodecamp.com/t/searching-for-existing-issues/19139)

-   [Creating a New GitHub
    Issue](http://forum.freecodecamp.com/t/creating-a-new-github-issue/18392)

-   [Select Issues for Contributing Using
    Labels](http://forum.freecodecamp.com/t/free-code-camp-issue-labels/19556)

-   [How to clone the FreeCodeCamp website on a Windows
    pc](http://forum.freecodecamp.com/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366)

-   [How to log in to your local FCC site - using
    GitHub](http://forum.freecodecamp.com/t/how-to-log-in-to-your-local-instance-of-free-code-camp/19552)

-   [Writing great git commit
    message](http://forum.freecodecamp.com/t/writing-good-git-commit-messages/13210)

-   [Contributor Chat Support - For the FCC Repositories, and running a local
    instance](https://gitter.im/FreeCodeCamp/Contributors)

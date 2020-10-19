Follow these guidelines for setting up freeCodeCamp locally on your system. This is highly recommended if you want to contribute regularly.

Some of these contribution workflows – like fixing bugs in the codebase or curriculum – need you to run freeCodeCamp locally on your computer.

> [!TIP]
> If you are not interested in setting up freeCodeCamp locally, consider using Gitpod, a free online dev environment.
>
> [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
>
> (Starts a ready-to-code dev environment for freeCodeCamp in your browser.)

### How to prepare your local machine

Start by installing the prerequisite software for your operating system.

We primarily support development on Linux and Unix-based systems. Our staff and community contributors regularly work with the codebase using tools installed on Ubuntu and macOS.

We also support Windows 10 via WSL2, which you can prepare by [reading this guide](/how-to-setup-wsl).

Some community members also develop on Windows 10 natively with Git for Windows (Git Bash), and other tools installed on Windows. We do not have official support for such a setup at this time, we recommend using WSL2 instead.

**Prerequisites:**

| Prerequisite                  | Version | Notes                                                                |
| ----------------------------- | ------- | -------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)  | `12.x`  | [LTS Schedule](https://github.com/nodejs/Release#release-schedule)   |
| npm (comes bundled with Node) | `6.x`   | Does not have LTS releases, we use the version bundled with Node LTS |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Release Notes](https://docs.mongodb.com/manual/release-notes/), Note: We are currently on `3.6`, an [upgrade is planned](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER]
> If you have a different version, please install the recommended version. We can only support installation issues for recommended versions. See [troubleshooting](#troubleshooting) for details.

If Node.js is already installed on your machine, run the following commands to validate the versions:

```console
node -v
npm -v
```

> [!TIP]
> We highly recommend updating to the latest stable releases of the software listed above, also known as Long Term Support (LTS) releases.

Once you have the prerequisites installed, you need to prepare your development environment. This is common for many development workflows, and you will only need to do this once.

**Follow these steps to get your development environment ready:**

1. Install [Git](https://git-scm.com/) or your favorite Git client, if you haven't already. Update to the latest version; the version that came bundled with your OS may be outdated.

2. (Optional but recommended) [Set up an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

3. Install a code editor of your choice.

   We highly recommend using [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/). These are great, free and open source code editors.

4. Set up linting for your code editor.

   You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything that doesn't conform to [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP]
   > Please do not ignore any linting errors. They are meant to **help** you and to ensure a clean and simple codebase.

## Fork the repository on GitHub

[Forking](https://help.github.com/articles/about-forks/) is a step where you get your own copy of freeCodeCamp's main repository (a.k.a _repo_) on GitHub.

This is essential, as it allows you to work on your own copy of freeCodeCamp on GitHub, or to download (clone) your repository to work on locally. Later, you will be able to request changes to be pulled into the main repository from your fork via a pull request (PR).

> [!TIP]
> The main repository at `https://github.com/freeCodeCamp/freeCodeCamp` is often referred to as the `upstream` repository.
>
> Your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp` is often referred to as the `origin` repository.

**Follow these steps to fork the `https://github.com/freeCodeCamp/freeCodeCamp` repository:**

1. Go to the freeCodeCamp repository on GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Click the "Fork" Button in the upper right-hand corner of the interface ([More Details Here](https://help.github.com/articles/fork-a-repo/))

3. After the repository has been forked, you will be taken to your copy of the freeCodeCamp repository at `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      How to fork freeCodeCamp on GitHub (screenshot)
   </summary>
   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="How to fork freeCodeCamp on GitHub">
</details>

## Clone your fork from GitHub

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that is either owned by you or by someone else. In your case, this remote location is your `fork` of freeCodeCamp's repository that should be available at `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Run these commands on your local machine:

1. Open a Terminal / Command Prompt / Shell in your projects directory

   _i.e.: `/yourprojectsdirectory/`_

2. Clone your fork of freeCodeCamp, replacing `YOUR_USER_NAME` with your GitHub Username

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

This will download the entire freeCodeCamp repository to your projects directory.

Note: `--depth=1` creates a shallow clone of your fork, with only the most recent history/commit.

## Set up syncing from parent

Now that you have downloaded a copy of your fork, you will need to set up an `upstream` remote to the parent repository.

[As mentioned earlier](#fork-the-repository-on-github), the main repository is referred `upstream` repository. Your fork referred to as the `origin` repository.

You need a reference from your local clone to the `upstream` repository in addition to the `origin` repository. This is so that you can sync changes from the main repository without the requirement of forking and cloning repeatedly.

1. Change directory to the new freeCodeCamp directory:

   ```console
   cd freeCodeCamp
   ```

2. Add a remote reference to the main freeCodeCamp repository:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Ensure the configuration looks correct:

   ```console
   git remote -v
   ```

   The output should look something like below:

   ```console
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Running freeCodeCamp locally

Now that you have a local copy of freeCodeCamp, you can follow these instructions to run it locally. This will allow you to:

- Preview edits to pages as they would appear on the learning platform.
- Work on UI related issues and enhancements.
- Debug and fix issues with the application servers and client apps.

If you do run into issues, first perform a web search for your issue and see if it has already been answered. If you cannot find a solution, please search our [GitHub issues](https://github.com/freeCodeCamp/freeCodeCamp/issues) page for a solution and report the issue if it has not yet been reported.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [our Discord server](https://discord.gg/pFspAhS).

> [!TIP]
> You may skip running freeCodeCamp locally if you are simply editing files. For instance, performing a `rebase`, or resolving `merge` conflicts.
>
> You can always return to this part of the instructions later. You should **only** skip this step if you do not need to run the apps on your machine.
>
> [Skip to making changes](#making-changes-locally).

### Configuring dependencies

#### Step 1: Set up the environment variable file

The default API keys and environment variables are stored in the file `sample.env`. This file needs to be copied to a new file named `.env` that is accessed dynamically during the installation step.

```console
# Create a copy of the "sample.env" and name it ".env".
# Populate it with the necessary API keys and secrets:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

The keys in the `.env` file are _not_ required to be changed to run the app locally. You can leave the default values copied over from `sample.env` as-is.

> [!TIP]
> Keep in mind if you want to use services like Auth0 or Algolia, you'll have to acquire your own API keys for those services and edit the entries accordingly in the `.env` file.

#### Step 2: Install dependencies

This step will install the dependencies required for the application to run:

```console
npm ci
```

#### Step 3: Start MongoDB and seed the database

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE]
> Unless you have MongoDB running in a setup different than the default, the URL stored as the `MONGOHQ_URL` value in the `.env` file should work fine. If you are using a custom configuration, modify this value as needed.

Start the MongoDB server in a separate terminal:

- On macOS & Ubuntu:

  ```console
  mongod
  ```

- On Windows, you must specify the full path to the `mongod` binary

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Make sure to replace `3.6` with the version you have installed

> [!TIP]
> You can avoid having to start MongoDB every time by installing it as a background service. You can [learn more about it in their documentation for your OS](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
npm run seed
```

#### Step 4: Start the freeCodeCamp client application and API server

You can now start up the API server and the client applications.

```console
npm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

> [!NOTE]
> Once ready, open a web browser and **visit <http://localhost:8000>**. If the app loads, congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

> [!TIP]
> The API Server serves APIs at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`

> If you visit <http://localhost:3000/explorer> you should see the available APIs.

## Sign in with a local user

Your local setup automatically populates a local user in the database. Clicking the `Sign In` button will automatically authenticate you into the local application.

However, accessing the user portfolio page is a little tricky. In development, Gatsby takes over serving the client-side pages and hence you will get a `404` page for the user portfolio when working locally.

Simply clicking the **"Preview Custom 404 Page"** button will forward you to the correct page.

<details>
   <summary>
      How to sign in when working locally (screenshot)
   </summary>
   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="How to sign in when working locally">
</details>

## Making changes locally

You can now make changes to files and commit your changes to your local clone of your fork.

Follow these steps:

1. Validate that you are on the `master` branch:

   ```console
   git status
   ```

   You should get an output like this:

   ```console
   On branch master
   Your branch is up-to-date with 'origin/master'.

   nothing to commit, working directory clean
   ```

   If you are not on master or your working directory is not clean, resolve any outstanding files/commits and checkout `master`:

   ```console
   git checkout master
   ```

2. Sync the latest changes from the freeCodeCamp upstream `master` branch to your local master branch:

   > [!WARNING]
   > If you have any outstanding pull request that you made from the `master` branch of your fork, you will lose them at the end of this step.
   >
   > You should ensure your pull request is merged by a moderator before performing this step. To avoid this scenario, you should **always** work on a branch other than the `master`.

   This step **will sync the latest changes** from the main repository of freeCodeCamp. It is important that you rebase your branch on top of the latest `upstream/master` as often as possible to avoid conflicts later.

   Update your local copy of the freeCodeCamp upstream repository:

   ```console
   git fetch upstream
   ```

   Hard reset your master branch with the freeCodeCamp master:

   ```console
   git reset --hard upstream/master
   ```

   Push your master branch to your origin to have a clean history on your fork on GitHub:

   ```console
   git push origin master --force
   ```

   You can validate your current master matches the upstream/master by performing a diff:

   ```console
   git diff upstream/master
   ```

   The resulting output should be empty.

3. Create a fresh new branch:

   Working on a separate branch for each issue helps you keep your local work copy clean. You should never work on the `master`. This will soil your copy of freeCodeCamp and you may have to start over with a fresh clone or fork.

   Check that you are on `master` as explained previously, and branch off from there:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Your branch name should start with a `fix/`, `feat/`, `docs/`, etc. Avoid using issue numbers in branches. Keep them short, meaningful and unique.

   Some examples of good branch names are:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Edit pages and work on code in your favorite text editor.

5. Once you are happy with the changes you should optionally run freeCodeCamp locally to preview the changes.

6. Make sure you fix any errors and check the formatting of your changes.

7. Check and confirm the files you are updating:

   ```console
   git status
   ```

   This should show a list of `unstaged` files that you have edited.

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Stage the changes and make a commit:

   In this step, you should only mark files that you have edited or added yourself. You can perform a reset and resolve files that you did not intend to change if needed.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Or you can add all the `unstaged` files to the staging area:

   ```console
   git add .
   ```

   Only the files that were moved to the staging area will be added when you make a commit.

   ```console
   git status
   ```

   Output:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   Now, you can commit your changes with a short message like so:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Some examples:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   Optional:

   We highly recommend making a conventional commit message. This is a good practice that you will see on some of the popular Open Source repositories. As a developer, this encourages you to follow standard practices.

   Some examples of conventional commit messages are:

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   Keep these short, not more than 50 characters. You can always add additional information in the description of the commit message.

   This does not take any additional time than an unconventional message like 'update file' or 'add index.md'

   You can learn more about why you should use conventional commits [here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. If you realise that you need to edit a file or update the commit message after making a commit you can do so after editing the files with:

   ```console
   git commit --amend
   ```

   This will open up a default text editor like `nano` or `vi` where you can edit the commit message title and add/edit the description.

10. Next, you can push your changes to your fork:

    ```console
    git push origin branch/name-here
    ```

## Proposing a Pull Request (PR)

After you've committed your changes, check here for [how to open a Pull Request](how-to-open-a-pull-request.md).

## Quick commands reference

A quick reference to the commands that you will need when working locally.

| command                                                        | description                                                                         |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `npm ci`                                                       | Installs / re-install all dependencies and bootstraps the different services.       |
| `npm run seed`                                                 | Parses all the challenge markdown files and inserts them into MongoDB.              |
| `npm run develop`                                              | Starts the freeCodeCamp API Server and Client Applications.                         |
| `npm test`                                                     | Run all JS tests in the system, including client, server, lint and challenge tests. |
| `npm run test:client`                                          | Run the client test suite.                                                          |
| `npm run test:curriculum`                                      | Run the curriculum test suite.                                                      |
| `npm run test:curriculum --block='Basic HTML and HTML5'`       | Test a specific Block.                                                              |
| `npm run test:curriculum --superblock='responsive-web-design'` | Test a specific SuperBlock.                                                         |
| `npm run test-curriculum-full-output`                          | Run the curriculum test suite, without bailing after the first error                |
| `npm run test:server`                                          | Run the server test suite.                                                          |
| `npm run e2e`                                                  | Run the Cypress end to end tests.                                                   |
| `npm run clean`                                                | Uninstalls all dependencies and cleans up caches.                                   |

## Troubleshooting

### Issues with installing the recommended prerequisites

We regularly develop on the latest or most popular operating systems like macOS 10.15 or later, Ubuntu 18.04 or later and Windows 10 (with WSL2).

It is recommended to research your specific issue on resources such as Google, Stack Overflow and Stack Exchange. There is a good chance that someone has faced the same issue and there is already an answer to your specific query.

If you are on a different OS and/or are still running into issues, see [getting help](#getting-help).

> [!WARNING]
>
> Please avoid creating GitHub issues for prerequisite issues. They are out of the scope of this project.

### Issues with the UI, Fonts, build errors etc.

If you face issues with the UI, Fonts or see builds errors a cleanup can be useful:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

OR

Use the shortcut

```
npm run clean-and-develop
```

If you continue to face issues with the build, cleaning up the workspace is recommend.

Use `git clean` in interative mode:

```
git clean -ifdX
```

<details>
   <summary>
      How to clean git untracked files (screenshot)
   </summary>
   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="How to clean git untracked files">
</details>

### Issues with API, Login, Challenge Submissions, etc.

If you can't sign in, and instead you see a banner with an error message that it will be reported to freeCodeCamp, please double-check that your local port `3000` is not in use by a different program.

**On Linux / macOS / WSL on Windows - From Terminal:**

```console
netstat -ab | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```

**On Windows - From Elevated PowerShell:**

```powershell
netstat -ab | Select-String "3000"

TCP    0.0.0.0:3000           DESKTOP      LISTENING
```

### Issues installing dependencies

If you get errors while installing the dependencies, please make sure that you are not in a restricted network or your firewall settings do not prevent you from accessing resources.

The first time setup can take a while depending on your network bandwidth. Be patient, and if you are still stuck we recommed using GitPod instead of an offline setup.

## Getting Help

If you are stuck and need help, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [our Discord server](https://discord.gg/pFspAhS).

There might be an error in the console of your browser or in Bash / Terminal / Command Line that will help identify the problem. Provide this error message in your problem description so others can more easily identify the issue and help you find a resolution.

Follow these guidelines for setting up freeCodeCamp locally on your system. This is highly recommended if you want to contribute regularly.

Some of these contribution workflows – like fixing bugs in the codebase or curriculum – need you to run freeCodeCamp locally on your computer.

> [!TIP] If you are not interested in setting up freeCodeCamp locally, consider using Gitpod. We have automated the process of installing all the dependencies & tools you will need.
> 
> Continue reading this guide to learn more about using GitPod.

## Fork the repository on GitHub

[Forking](https://help.github.com/articles/about-forks/) is a step where you get your own copy of freeCodeCamp's main repository (a.k.a _repo_) on GitHub.

This is essential, as it allows you to work on your own copy of freeCodeCamp on GitHub, or to download (clone) your repository to work on locally. Later, you will be able to request changes to be pulled into the main repository from your fork via a pull request (PR).

> [!TIP] The main repository at `https://github.com/freeCodeCamp/freeCodeCamp` is often referred to as the `upstream` repository.
> 
> Your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp` is often referred to as the `origin` repository. `YOUR_USER_NAME` would be replaced with your GitHub username.

**Follow these steps to fork the `https://github.com/freeCodeCamp/freeCodeCamp` repository:**

1. Go to the freeCodeCamp repository on GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Click the "Fork" Button in the upper right-hand corner of the interface ([More Details Here](https://help.github.com/articles/fork-a-repo/))

3. After the repository has been forked, you will be taken to your copy of the freeCodeCamp repository at `https://github.com/YOUR_USER_NAME/freeCodeCamp` (`YOUR_USER_NAME` would be replaced with your GitHub user name.)

<details>
   <summary>
      How to fork freeCodeCamp on GitHub (screenshot)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="How to fork freeCodeCamp on GitHub" />
</details>

## Use a Local Machine or GitPod

Once you have forked the repository, you can either use your own local machine or a GitPod-based workspace to work on the codebase.

For contributing long-term, we recommend you setup freeCodeCamp on your local machine.

### How to prepare a GitPod workspace

We have automated the process of installing all the dependencies & tools you will need. With GitPod you get a free ready-to-code environment in a few minutes, and is useful if you do not have access to computer or want to make one-time changes.

There are various ways to launch an GitPod workspace:

1. **(Fastest)** Prepend `gitpod.io/#` in front of any URL from GitHub.

   For example, if you visit your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp.git`, add `gitpod.io/#` in the front of the URL in the address bar and hit enter.

   That is you can navigate to `gitpod.io/#https://github.com/YOUR_USER_NAME/freeCodeCamp.git` and you should see a workspace created for you. This works for any repository or pull-request on GitHub.

2. Alternatively install one of the below extensions for your browser.

   - [Chrome Webstore](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) - works with Chromium-based browsers like Google Chrome, Brave, Edge, etc.
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/gitpod) - Firefox

   Once installed you will see a 'GitPod' button on every repository, pull-request, etc. as a handy shortcut to launch a workspace from there. See the extension page for details, screenshots, etc.

That's it, you can now skip to the 'syncing up from parent' section after you have launched a GitPod workspace. Most parts of this guide applies to GitPod workspaces, but be mindful of [how the URLs & Ports work within a GitPod](https://www.gitpod.io/docs/configure/workspaces/ports) workspace.

### How to prepare your local machine

Start by installing the prerequisite software for your operating system.

We primarily support development on Linux and Unix-based systems. Our staff and community contributors regularly work with the codebase using tools installed on Ubuntu and macOS.

We also support Windows 10 and 11 via WSL2, which you can prepare by [reading this guide](how-to-setup-wsl.md).

Some community members also develop on Windows natively with Git for Windows (Git Bash), and other tools installed on Windows. We do not have official support for such a setup at this time, we recommend using WSL2 instead.

#### Prerequisites:

| Prerequisite                                                                                  | Version | Notes                                                                                       |
| --------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `18.x`  | We use the "Active LTS" version, See [LTS Schedule](https://nodejs.org/en/about/releases/). |
| [pnpm](https://pnpm.io/installation)                                                          | `7.x`   | -                                                                                           |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x` | -                                                                                           |

> [!ATTENTION] If you have a different version, please install the recommended version. We can only support installation issues for recommended versions. See [troubleshooting](#troubleshooting) for details.

If Node.js is already installed on your machine, run the following commands to validate the versions:

```console
node -v
pnpm -v
```

> [!TIP] We highly recommend updating to the latest stable releases of the software listed above, also known as Long Term Support (LTS) releases.

Once you have the prerequisites installed, you need to prepare your development environment. This is common for many development workflows, and you will only need to do this once.

##### Follow these steps to get your development environment ready:

1. Install [Git](https://git-scm.com/) or your favorite Git client, if you haven't already. Update to the latest version; the version that came bundled with your OS may be outdated.

2. (Optional but recommended) [Set up an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

3. Install a code editor of your choice.

   We highly recommend using [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/). These are great, free and open source code editors.

4. Set up linting for your code editor.

   You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything that doesn't conform to [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Please do not ignore any linting errors. They are meant to **help** you and to ensure a clean and simple codebase.

## Clone your fork from GitHub

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that is either owned by you or by someone else. In your case, this remote location is your `fork` of freeCodeCamp's repository that should be available at `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` would be replaced with your GitHub user name.)

> [!WARNING] If you are working on a WSL2 Linux Distro, you might get performance and stability issues by running this project in a folder which is shared between Windows and WSL2 (e.g. `/mnt/c/Users/`). Therefore we recommend to clone this repo into a folder which is mainly used by your WSL2 Linux Distro and not directly shared with Windows (e.g. `~/PROJECTS/`).
> 
> See [this GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) for further information about this problem.

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

   The output should look something like below (replacing `YOUR_USER_NAME` with your GitHub username):

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

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [our chat server](https://discord.gg/PRyKn3Vbay).

### Configuring dependencies

#### Step 1: Set up the environment variable file

The default API keys and environment variables are stored in the file `sample.env`. This file needs to be copied to a new file named `.env` that is accessed dynamically during the installation step.

```console
# Create a copy of the "sample.env" and name it ".env".
# Populate it with the necessary API keys and secrets:
```

<!-- tabs:start -->

#### **macOS/Linux**

```console
cp sample.env .env
```

#### **Windows**

```console
copy sample.env .env
```

<!-- tabs:end -->

The keys in the `.env` file are _not_ required to be changed to run the app locally. You can leave the default values copied over from `sample.env` as-is.

> [!TIP] Keep in mind if you want to use services like Auth0 or Algolia, you'll have to acquire your own API keys for those services and edit the entries accordingly in the `.env` file.

#### Step 2: Install dependencies

This step will install the dependencies required for the application to run:

```console
pnpm install
```

#### Step 3: Start MongoDB and seed the database

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE] Unless you have MongoDB running in a setup different than the default, the URL stored as the `MONGOHQ_URL` value in the `.env` file should work fine. If you are using a custom configuration, modify this value as needed.
> 
> If you followed along with the [Windows 10 via WSL2 Setup Guide](how-to-setup-wsl.md), then you should be able to skip this step if the MongoDB server from that guide is already running. You can confirm this by checking that you can reach `http://localhost:27017` on your local machine.

Start the MongoDB server in a separate terminal:

  <!-- tabs:start -->

#### **macOS/Linux**

```console
mongod
```

#### **Windows**

- On Windows, you must specify the full path to the `mongod` binary

```console
"C:\Program Files\MongoDB\Server\3.6\bin\mongod"
```

Make sure to replace `3.6` with the version you have installed

  <!-- tabs:end -->

> [!TIP] You can avoid having to start MongoDB every time by installing it as a background service. You can [learn more about it in their documentation for your OS](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
pnpm run seed
```

#### Step 4: Start the freeCodeCamp client application and API server

You can now start up the API server and the client applications.

```console
pnpm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Once ready, open a web browser and **visit <http://localhost:8000>**. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

The API serves endpoints at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`

While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Clearing your cookies or running `pnpm run seed:certified-user` will log you out, and you will have to sign in again.

If you have issues while installing it, check out the [troubleshooting section](troubleshooting-development-issues.md)

## Quick commands reference

A quick reference to the commands that you will need when working locally.

| command            | description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| `pnpm install`     | Installs / re-install all dependencies and bootstraps the different services. |
| `pnpm run seed`    | Creates authorized test users and inserts them into mongodb.                  |
| `pnpm run develop` | Starts the freeCodeCamp API Server and Client Applications.                   |
| `pnpm run clean`   | Uninstalls all dependencies and cleans up caches.                             |

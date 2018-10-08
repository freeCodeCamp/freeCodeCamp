# Set up freeCodeCamp locally

Follow these guidelines for getting freeCodeCamp running locally on your system. This is highly recommended if you want to be contributing regularly.

Some of the contribution workflows like previewing pages for the guide or the curriculum challenges, debugging and fixing bugs in codebase requires you to have freeCodeCamp running locally.

## Fork the repository on GitHub

['Forking'](https://help.github.com/articles/about-forks/) is a step where you get your own copy of freeCodeCamp's main repository (a.k.a _repo_) on GitHub. This is essential, because this way you are able to work on your copy of freeCodeCamp on GitHub, or download it for working locally. Later, you will be able to request changes to be pulled into the main repository via a pull request.

> **ProTip:**
> The main repository at `https://github.com/freeCodeCamp/freeCodeCamp` is often referred to as `upstream` repository.
> Your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp` is often referred to as `origin` repository.

**Follow these steps to fork the `https://github.com/freeCodeCamp/freeCodeCamp` repository:**

1. Go to the freeCodeCamp repository on GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>
2. Click the "Fork" Button in the upper right hand corner of the interface ([More Details Here](https://help.github.com/articles/fork-a-repo/))
3. After the repository has been forked, you will be taken to your copy of the freeCodeCamp at `https://github.com/YOUR_USER_NAME/freeCodeCamp`

![GIF - How to fork freeCodeCamp on Github](/docs/images/github/how-to-fork-freeCodeCamp.gif)

### Installing prerequisites

Start by installing these prerequisite software.

| Prerequisite                                | Version | Notes |
| ------------------------------------------- | ------- | ----- |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Release Notes](https://docs.mongodb.com/manual/release-notes/), Note: We currently on `3.6`, an [upgrade is planned](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275).
| [Node.js](http://nodejs.org)                | `8.x`   | [LTS Schedule](https://github.com/nodejs/Release#release-schedule) |
| npm (comes bundled with Node)               | `6.x`   | Does not have LTS releases, we use the version bundled with Node LTS |

**Important:**

We highly recommend updating to the latest stable releases a.k.a Long Term Support (LTS) versions of the above.
If Node.js or MongoDB is already installed on your machine, run the following commands to validate the versions:

```shell
node -v
mongo --version
npm -v
```

> If you have a different version, please install the recommended version. We can support installation issues for recommended versions only.

**I am having issues with installing the recommended Prerequisites. What should I do?**

We regularly develop on popular and latest operating systems like macOS 10.12 or later, Ubuntu 16.04 or later and Windows 10. Its recommended to lookup your specific issue on resources like: Google, Stack Overflow or Stack Exchange. Chances are that someone has faced the same issue and there is already an answer to your specific query.

If you are on a different OS, and/or are still running into issues, reach out to [contributors community on our public forum](https://www.freeCodeCamp.org/c/contributors) or the [Contributor's Chat room](https://gitter.im/freeCodeCamp/Contributors). We may be able to troubleshoot some common issues.

We can't support you on GitHub, because software installation issues are beyond the scope of this project.

## Preparing the development environment

Once you have the prerequisites installed, you need to prepare you development environment. This is common for many development workflows, and you will need to do this only once.

**Follow these steps to get your development environment ready:**

1. Install [Git](https://git-scm.com/) or your favorite Git client, if you haven't already. Update to the latest version, the one that came bundled with your OS may be outdated.
2. (Optional but recommended) [Setup an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.
3. Install a code editor of your choice.
   We highly recommend using [VS Code](https://code.visualstudio.com/) or [Atom](https://atom.io/). These are some great free and open source code editors.
4. Setup linting for your code editor.
   You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything doesn't conform to [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).
   > Please do not ignore any linting errors. They are meant to **help** you and to ensure a clean and simple code base.

## Clone the your copy of freeCodeCamp

Now that you have [forked the repository](#fork-the-repository-on-github), [installed the prerequisites](#installing-prerequisites) and [prepared your development environment](#preparing-the-development-environment), next you will need to clone the repository.

['Cloning'](https://help.github.com/articles/cloning-a-repository/) is a step where you **download** a copy of a repository that is either owned by you or someone else from a `remote` location. In your case, this remote location is your `fork` of freeCodeCamp's repository, that should be available at `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Run these commands on your local machine:

1. Open a Terminal / Command Prompt / Bash Shell in your projects directory

   _i.e.: `/yourprojectdirectory/`_

2. Clone your fork of freeCodeCamp, replacing `YOUR_USER_NAME` with your GitHub Username

   ```shell
   git clone https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

This will download the entire freeCodeCamp repository to your projects directory.

## Setup a `upstream` to the main repository

Now that you have downloaded a copy of your fork, you will need to setup an `upstream`.

As mentioned earlier, the main repository at `https://github.com/freeCodeCamp/freeCodeCamp` is often referred to as `upstream` repository. Your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp` is often referred to as `origin` repository.

You need to point your local clone to the `upstream` in addition to the `origin`. This is so that you can sync changes from the main repository. This way you do not have to go through forking and cloning again and again.

1. Change directory to the new freeCodeCamp directory:

   ```shell
   cd freeCodeCamp
   ```

2. Add a remote to the main freeCodeCamp repository:

   ```shell
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Check the configuration looks good to you:

   ```shell
    git remote -v
   ```

    The output should be something like below:

   ```shell
    origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
    origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Running freeCodeCamp locally on your machine

Congratulations, you now have a local copy of the freeCodeCamp repository 🎉! Let's jump right into running freeCodeCamp running locally.

### Installing dependencies

Start by installing the dependencies required for the application to startup.

```shell
# Install NPM dependencies
npm install
```

Next lets, bootstrap the various services, i.e. the api-server, the client UI application, etc. You can [learn more about these services in this guide](#).

By bootstrapping you are tying the links between the services. They are semi-independent. Meaning, in production these services are deployed to their own locations, but while running locally you want them all to be available to you.

```shell
# Bootstrap all projects inside this repository
npm run bootstrap
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

The keys are not required to be changed, to run the app locally. You can leave the default values from the `sample.env` as it is.

`MONGOHQ_URL` is the most important one. Unless you have MongoDB running in a setup different than the defaults, the URL in the `sample.env` should work fine.

You can leave the other keys as they are. Keep in mind if you want to use more services you'll have to get your own API keys for those services and edit those entries accordingly in the `.env` file.

### Start MongoDB

You will need to start MongoDB, before you can start the application:

Start the MongoDB server in a separate terminal

- On macOS & Ubuntu:

   ```shell
   mongod
   ```

- On Windows, you have to instead specify the full path to the `mongod` binary

   Make sure to replace `3.6` with the version you have installed

   ```shell
   "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
   ```

> ProTip:
> You can avoid having to start MongoDB every time, by installing it as a background service.
> You can [learn more about it in their documentation for your OS](https://docs.mongodb.com/manual/administration/install-community/)

### Seeding the database

Next, lets seed the database. In this step, we run the below command that will fill the MongoDB server with some initial data-sets that is required by the other services. This include a few schemas, among other things.

```shell
npm run seed
```

### Start the freeCodeCamp client application and API server

You can now start up the API server and the client applications.

```shell
npm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Now open a web browser and visit <http://localhost:8000>. If the app loads, congratulations – you're all set.

> ProTip:
>
> The API Server serves APIs at `http://localhost:3000`
> The Gatsby app serves the client application at `http://localhost:8000`

Meaning, if you visit <http://localhost:3000/explorer> you should see the APIs that we have.

## Getting Help

If you are stuck, and need help, let us know by asking in the ['Contributors' category on our forum](https://www.freecodecamp.org/forum/c/contributors) or the [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors) on Gitter.

There might be an error in the console of your browser or in Bash / Terminal / Command Line that will help identify the problem.

### Troubleshooting

If the app launches but you are encountering errors with the UI itself, for example if fonts are not being loaded or if the code editor is not displaying properly, you may try the following troubleshooting steps at least once:

```shell
# Remove all installed node modules
rm -rf node_modules ./**/node_modules

# Reinstall npm packages
npm install

# Bootstrap the project
npm run bootstrap

# Seed the database
npm run seed

# Re-start the application
npm run develop
```

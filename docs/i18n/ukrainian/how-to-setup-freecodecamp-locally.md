Дотримуйтесь цих рекомендацій, щоб налаштувати середовище розробки freeCodeCamp. Особливо рекомендовано, якщо ви хочете робити внески регулярно.

## Оберіть між Gitpod чи власною машиною (локальне налаштування)

Якщо ви бажаєте зробити одноразовий внесок, використовуйте Gitpod. Налаштування Gitpod надає готове середовище у вашому браузері за декілька хвилин. Для тривалих внесків ми рекомендуємо налаштувати freeCodeCamp на локальній машині.

Ось деякі плюси та мінуси, які допоможуть із вибором:

| Gitpod                                                                    | Власна машина (локальне налаштування)                           |
| ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Відсутність мінімальних вимог обладнання                                  | Специфічні та мінімальні вимоги                                 |
| Не потрібно встановлювати програмне забезпечення                          | Потрібне додаткове програмне забезпечення                       |
| Копія сховища завжди актуальна                                            | Потрібно підтримувати локальну копію репозиторію                |
| Повільніший та може займати декілька хвилин для запуску                   | Швидший та займає декілька секунд для запуску                   |
| Потрібне інтернет-з’єднання                                               | Мінімальне інтернет-з’єднання (після налаштування)              |
| Деякі завдання (наприклад, компіляція та тестування) можуть тривати довше | Швидше виконання завдань (залежно від можливостей вашої машини) |

> [!ATTENTION] **Примітка:** якщо ви використовуєте Windows 10 або 11, вам знадобиться WSL2. Використовуйте [цей посібник](how-to-setup-wsl.md), щоб налаштувати WSL2. Ви не можете використовувати командний рядок, Git Bash або PowerShell для запуску freeCodeCamp на Windows.

### Як підготувати робоче середовище Gitpod

Ми автоматизували процес встановлення усіх необхідних залежностей та інструментів. Завдяки GitPod ви отримаєте готове середовище за декілька хвилин, яке буде корисним, якщо ви не маєте доступу до комп’ютера чи хочете зробити одноразові зміни.

Існує декілька способів запустити робоче середовище GitPod:

1. **(Найшвидший спосіб)** Додайте `gitpod.io/#` на початку будь-якого URL з GitHub.

   Наприклад, якщо ви відвідуєте форк на `https://github.com/YOUR_USER_NAME/freeCodeCamp.git`, додайте `gitpod.io/#` на початку URL-адреси та натисніть клавішу enter.

   Ви перейдете на `gitpod.io/#https://github.com/YOUR_USER_NAME/freeCodeCamp.git` та побачите робоче середовище, створене для вас. Це працює для будь-якого репозиторію чи PR на GitHub.

2. В іншому випадку встановіть одне з нижчеподаних розширень браузера.

   - [Chrome Webstore](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) — працює з браузерами на основі Chromium (Google Chrome, Brave, Edge тощо)
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/gitpod) — Firefox

   Як тільки розширення встановлено, ви побачите кнопку «GitPod» на кожному репозиторії, PR тощо, що дозволить запустити робоче середовище. Перегляньте сторінку розширень для детальнішої інформації, знімків екрану тощо.

That's it, you can now skip to the 'syncing up from parent' section after you have launched a GitPod workspace. Most parts of this guide applies to GitPod workspaces, but be mindful of [how the URLs & Ports work within a GitPod](https://www.gitpod.io/docs/configure/workspaces/ports) workspace.

### How to Prepare your Local Machine

Here is a minimum system requirement for running freeCodeCamp locally:

- 8 GB RAM
- Relatively fast CPU (4+ cores)
- Windows 10 or 11 (with WSL), macOS, or Linux

Start by installing the prerequisite software for your operating system.

We primarily support development on Linux and Unix-based systems like Ubuntu and macOS. You can develop on Windows 10 or 11 with WSL2 only. You can follow [this guide](how-to-setup-wsl.md) to set up WSL2. You can't use Command Prompt, Git Bash or PowerShell to run freeCodeCamp natively within windows.


#### Prerequisites:

| Prerequisite                                                                                  | Version | Notes                                                                                       |
| --------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `18.x`  | We use the "Active LTS" version, See [LTS Schedule](https://nodejs.org/en/about/releases/). |
| [pnpm](https://pnpm.io/installation)                                                          | `8.x`   | -                                                                                           |
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


3. Install a code editor of your choice. If you aren't sure which one to use, we recommend [Visual Studio Code](https://code.visualstudio.com/) — it's free and open source.

4. Set up linting for your code editor.

   You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything that doesn't conform to [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Please do not ignore any linting errors. They are meant to **help** you and to ensure a clean and simple codebase.

## Fork the Repository on GitHub

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

## Clone your Fork from GitHub

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

## Set up Syncing from Parent

Now that you have downloaded a copy of your fork, you will need to set up an `upstream` remote to the parent repository.

[As mentioned earlier](#fork-the-repository-on-github), the main repository is referred to as the `upstream` repository. Your fork is referred to as the `origin` repository.

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

## Running freeCodeCamp Locally

Now that you have a local copy of freeCodeCamp, you can follow these instructions to run it locally. This will allow you to:

- Preview edits to pages as they would appear on the learning platform.
- Work on UI related issues and enhancements.
- Debug and fix issues with the application servers and client apps.

If you do run into issues, first perform a web search for your issue and see if it has already been answered. If you cannot find a solution, please search our [GitHub issues](https://github.com/freeCodeCamp/freeCodeCamp/issues) page for a solution and report the issue if it has not yet been reported.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [our chat server](https://discord.gg/PRyKn3Vbay).

### Configuring Dependencies

#### Step 1: Set up the Environment Variable File

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

#### Step 2: Install Dependencies

This step will install the dependencies required for the application to run:

```console
pnpm install && pnpm run create:config
```

#### Step 3: Start MongoDB and Seed the Database

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

#### Step 4: Start the freeCodeCamp Client Application and API Server

You can now start up the API server and the client applications.

```console
pnpm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Once ready, open a web browser and visit <http://localhost:8000>. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

The API server serves endpoints at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`.

While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Clearing your cookies or running `pnpm run seed:certified-user` will log you out, and you will have to sign in again.

If you have issues while installing it, check out the [troubleshooting section](troubleshooting-development-issues.md).

## Quick Commands Reference

A quick reference to the commands that you will need when working locally.

| command            | description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `pnpm install`     | Installs / re-installs all dependencies and bootstraps the different services. |
| `pnpm run seed`    | Creates authorized test users and inserts them into MongoDB.                   |
| `pnpm run develop` | Starts the freeCodeCamp API Server and Client Applications.                    |
| `pnpm run clean`   | Uninstalls all dependencies and cleans up caches.                              |

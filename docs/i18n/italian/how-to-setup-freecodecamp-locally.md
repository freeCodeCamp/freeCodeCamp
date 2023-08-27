Follow these guidelines for setting up a development environment for freeCodeCamp. Te lo raccomandiamo caldamente se desideri contribuire regolarmente.

## Choose between Gitpod or your Own Machine (local setup)

> [!ATTENTION] **Note:** freeCodeCamp does NOT run natively on Windows 10 or 11, you will need to use WSL2. You can follow [this guide](how-to-setup-wsl.md) to set up WSL2. You can't use Command Prompt, Git Bash or PowerShell to run freeCodeCamp natively within windows.

If you are looking to make a one-off contribution, you should use Gitpod to make changes. The Gitpod setup launches a ready-to-code environment in a few minutes in your web browser. For contributing long-term, we recommend you setup freeCodeCamp on your local machine.

Here are some pros and cons which should help you decide which option is best for you:

| Gitpod                                                            | Your own machine (local setup)                                        |
| ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| No minimum hardware requirements                                  | Specific and minimum requirements                                     |
| No need to install any software                                   | Additional software required                                          |
| Always up to date copy of repository                              | Need to maintain a local copy of the repository                       |
| Slower and can take a few minutes to launch                       | Faster and can be launched in seconds                                 |
| Need an internet connection to work                               | Minimal internet connection required (once setup)                     |
| Some tasks like compilation and tests can take longer to complete | Faster completion of tasks (depending on your machine's capabilities) |

### How to Prepare a Gitpod Workspace

We have automated the process of installing all the dependencies & tools you will need. With Gitpod you get a free ready-to-code environment in a few minutes, and is useful if you do not have access to computer or want to make one-time changes.

There are various ways to launch an Gitpod workspace:

1. **(Fastest)** Prepend `gitpod.io/#` in front of any URL from GitHub.

   For example, if you visit your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp.git`, add `gitpod.io/#` in the front of the URL in the address bar and hit enter.

   That is you can navigate to `gitpod.io/#https://github.com/YOUR_USER_NAME/freeCodeCamp.git` and you should see a workspace created for you. This works for any repository or pull-request on GitHub.

2. Alternatively install one of the below extensions for your browser.

   - [Chrome Webstore](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) - funziona con browser basati su Chromium come Google Chrome, Brave, Edge, ecc.
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/gitpod) - Firefox

   Once installed you will see a 'Gitpod' button on every repository, pull-request, etc. as a handy shortcut to launch a workspace from there. Vedi la pagina delle estensioni per i dettagli, screenshot, ecc.

That's it, you can now skip to the 'syncing up from parent' section after you have launched a Gitpod workspace. Most parts of this guide applies to Gitpod workspaces, but be mindful of [how the URLs & Ports work within a Gitpod](https://www.gitpod.io/docs/configure/workspaces/ports) workspace.

**Note: Troubleshooting port issues on Gitpod**

Sometimes the service on port `8000` doesn't go live. This is common when you are restarting an inactive workspace.

If the service is not coming up on port `8000`, you can troubleshoot using these steps:

- **Start the server**: Run `pnpm run develop:server` in one terminal window from the root project directory (`/workspace/freeCodeCamp`) to start the server.

- **Start the client**: In another terminal window, run `pnpm run develop -- -H '0.0.0.0'` from the client directory (`/workspace/freeCodeCamp/client`) to start the client.

This should make port `8000` available.

### How to Prepare your Local Machine

Here is a minimum system requirement for running freeCodeCamp locally:

- 8 GB RAM
- Relatively fast CPU (4+ cores)
- Windows 10 or 11 (with WSL), macOS, or Linux

Start by installing the prerequisite software for your operating system.

We primarily support development on Linux and Unix-based systems like Ubuntu and macOS. You can develop on Windows 10 or 11 with WSL2 only. You can follow [this guide](how-to-setup-wsl.md) to set up WSL2. You can't use Command Prompt, Git Bash or PowerShell to run freeCodeCamp natively within windows.


#### Prerequisiti:

| Prerequisite                                                                                  | Version | Notes                                                                                       |
| --------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `18.x`  | We use the "Active LTS" version, See [LTS Schedule](https://nodejs.org/en/about/releases/). |
| [pnpm](https://pnpm.io/installation)                                                          | `8.x`   | -                                                                                           |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `5.0.x` | -                                                                                           |

> [!ATTENTION] If you have a different version, please install the recommended version. We can only support installation issues for recommended versions. See [troubleshooting section](troubleshooting-development-issues.md) for details.

If Node.js is already installed on your machine, run the following commands to validate the versions:

```console
node -v
pnpm -v
```

> [!TIP] We highly recommend updating to the latest stable releases of the software listed above, also known as Long Term Support (LTS) releases.

Once you have the prerequisites installed, you need to prepare your development environment. This is common for many development workflows, and you will only need to do this once.

##### Segui questi passaggi per preparare il tuo ambiente di sviluppo:

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

> [!WARNING] Se stai lavorando su una Distro di Linux su WSL2, potresti avere problemi di performance e stabilità eseguendo il progetto in una cartella che è condivisa tra Windows e WSL2 (per esempio `/mnt/c/Users/`). Quindi ti raccomandiamo di clonare il repo in una cartella che è usata principalmente dalla Distro di Linux su WSL2 e non condivisa direttamente con Windows (per esempio `~/PROJECTS/`).
> 
> Vedi [questa issue su GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) per ulteriori informazioni su questo problema.

Run these commands on your local machine:

1. Apri un terminale / prompt dei comandi / Shell nella directory dei progetti

   _cioè: `/yourprojectsdirectory/`_

2. Clona il tuo fork di freeCodeCamp, sostituendo `YOUR_USER_NAME` con il tuo nome utente GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

This will download the entire freeCodeCamp repository to your projects directory.

Note: `--depth=1` creates a shallow clone of your fork, with only the most recent history/commit.

## Set up Syncing from Parent

Now that you have downloaded a copy of your fork, you will need to set up an `upstream` remote to the parent repository.

[As mentioned earlier](#fork-the-repository-on-github), the main repository is referred to as the `upstream` repository. Your fork is referred to as the `origin` repository.

You need a reference from your local clone to the `upstream` repository in addition to the `origin` repository. This is so that you can sync changes from the main repository without the requirement of forking and cloning repeatedly.

1. Cambia la directory nella nuova directory freeCodeCamp:

   ```console
   cd freeCodeCamp
   ```

2. Aggiungi un riferimento remoto al repository freeCodeCamp principale:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Assicurati che la configurazione sia corretta:

   ```console
   git remote -v
   ```

   L'output dovrebbe apparire simile al seguente (sostituendo `YOUR_USER_NAME` con il tuo username di GitHub):

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
# Creare una copia del "sample.env" e denominarlo ".env".
# Popolalo con le chiavi API e i segreti necessari:
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

> [!TIP] Tieni a mente che se vuoi usare servizi come Auth0 o Algolia, dovrai ottenere delle chiavi API per questi servizi per conto tuo e modificare gli elementi nel file `.env` di conseguenza.

#### Step 2: Install Dependencies

This step will install the dependencies required for the application to run:

```console
pnpm install && pnpm run create:config
```

#### Step 3: Start MongoDB and Seed the Database

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE] A meno che tu non abbia MongoDB in esecuzione in un setup differente da quello predefinito, l'URL salvato come `MONGOHQ_URL` nel file `.env` dovrebbe andare bene. Se usi una configurazione personalizzata, modifica il valore come necessario.
> 
> Se hai seguito la [Guida di configurazione Windows 10 via WSL2](how-to-setup-wsl.md), allora dovresti essere in grado di saltare questo passaggio se il server MongoDB di quella guida è già in esecuzione. Puoi averne conferma controllando di poter raggiungere `http://localhost:27017` sulla tua macchina locale.

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

> [!TIP] Puoi evitare di dover avviare MongoDB ogni volta se lo installi come servizio in background. Puoi [saperne di più nella loro documentazione per il tuo sistema operativo](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
pnpm run seed
```

By default, you will be signed in as a new user without any completed certifications. Run the following command if you need to develop with completed certifications:

```console
pnpm run seed:certified-user
```

> [!WARNING] Running `pnpm run seed:certified-user` will log you out. You will have to clear your browser cookies and sign in again.

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

| command                        | description                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| `pnpm install`                 | Installs / re-installs all dependencies and bootstraps the different services.                    |
| `pnpm run seed`                | Creates authorized test users and inserts them into MongoDB.                                      |
| `pnpm run seed:certified-user` | Creates authorized test users with certifications fully completed, and inserts them into MongoDB. |
| `pnpm run develop`             | Starts the freeCodeCamp API Server and Client Applications.                                       |
| `pnpm run clean`               | Uninstalls all dependencies and cleans up caches.                                                 |

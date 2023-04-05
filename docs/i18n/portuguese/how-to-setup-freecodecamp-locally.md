Follow these guidelines for setting up a development environment for freeCodeCamp. Isso é altamente recomendado se você quer contribuir regularmente.

## Choose between Gitpod or your own machine (local setup)

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

> [!ATTENTION] **Note:** If you are using Windows 10 or 11, you will need to use WSL2. You can follow [this guide](how-to-setup-wsl.md) to set up WSL2. You can't use Command Prompt, Git Bash or PowerShell to run freeCodeCamp natively within windows.

### How to prepare a Gitpod workspace

We have automated the process of installing all the dependencies & tools you will need. With GitPod you get a free ready-to-code environment in a few minutes, and is useful if you do not have access to computer or want to make one-time changes.

There are various ways to launch an GitPod workspace:

1. **(Fastest)** Prepend `gitpod.io/#` in front of any URL from GitHub.

   For example, if you visit your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp.git`, add `gitpod.io/#` in the front of the URL in the address bar and hit enter.

   That is you can navigate to `gitpod.io/#https://github.com/YOUR_USER_NAME/freeCodeCamp.git` and you should see a workspace created for you. This works for any repository or pull-request on GitHub.

2. Alternatively install one of the below extensions for your browser.

   - [Chrome Webstore](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) - trabalha com navegadores baseados no Chromium, como o Google Chrome, o Brave, o Edge etc.
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/gitpod) - Firefox

   Uma vez instalado, você verá um botão 'GitPod' em cada repositório, pull request etc. Ele será um atalho útil para abrir um espaço de trabalho a partir de lá. Veja a página da extensão para detalhes, capturas de tela etc.

That's it, you can now skip to the 'syncing up from parent' section after you have launched a GitPod workspace. Most parts of this guide applies to GitPod workspaces, but be mindful of [how the URLs & Ports work within a GitPod](https://www.gitpod.io/docs/configure/workspaces/ports) workspace.

### Como preparar sua máquina local

Here is a minimum system requirement for running freeCodeCamp locally:

- 8 GB RAM
- Relatively fast CPU (4+ cores)
- Windows 10 or 11 (with WSL), macOS, or Linux

Start by installing the prerequisite software for your operating system.

We primarily support development on Linux and Unix-based systems like Ubuntu and macOS. You can develop on Windows 10 or 11 with WSL2 only. You can follow [this guide](how-to-setup-wsl.md) to set up WSL2. You can't use Command Prompt, Git Bash or PowerShell to run freeCodeCamp natively within windows.


#### Pré-requisitos:

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

##### Siga estas etapas para deixar seu ambiente de desenvolvimento pronto:

1. Install [Git](https://git-scm.com/) or your favorite Git client, if you haven't already. Update to the latest version; the version that came bundled with your OS may be outdated.

2. (Optional but recommended) [Set up an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

3. Install a code editor of your choice.

   We highly recommend using [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/). These are great, free and open source code editors.

4. Set up linting for your code editor.

   You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything that doesn't conform to [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Please do not ignore any linting errors. They are meant to **help** you and to ensure a clean and simple codebase.

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

## Clonar o seu fork no GitHub

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that is either owned by you or by someone else. In your case, this remote location is your `fork` of freeCodeCamp's repository that should be available at `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` would be replaced with your GitHub user name.)

> [!WARNING] Se você está usando uma distribuição WSL2 Linux, você talvez tenha problemas relacionados a performance e estabilidade ao executar esse projeto em uma pasta compartilhada entre Windows e WSL2 (ex. `/mnt/c/Users/`). Recomendarmos clonar esse repositório em uma pasta que é principalmente usada pela sua distribuição WSL2 Linux e não diretamente compartilhada com Windows (ex. `~/PROJECTS/`).
> 
> Veja [essa issue no GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) para mais informações sobre esse problema.

Run these commands on your local machine:

1. Abra um Terminal/Prompt de Comando/Shell no diretório de seus projetos

   _ex.: `/yourprojectsdirectory/`_

2. Clone seu fork do freeCodeCamp, substituindo `YOUR_USER_NAME` pelo seu nome de usuário do GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

This will download the entire freeCodeCamp repository to your projects directory.

Note: `--depth=1` creates a shallow clone of your fork, with only the most recent history/commit.

## Configurar sincronização a partir do pai

Now that you have downloaded a copy of your fork, you will need to set up an `upstream` remote to the parent repository.

[As mentioned earlier](#fork-the-repository-on-github), the main repository is referred `upstream` repository. Your fork referred to as the `origin` repository.

You need a reference from your local clone to the `upstream` repository in addition to the `origin` repository. This is so that you can sync changes from the main repository without the requirement of forking and cloning repeatedly.

1. Mude o diretório para o novo diretório freeCodeCamp:

   ```console
   cd freeCodeCamp
   ```

2. Adicione uma referência remota ao repositório principal freeCodeCampo:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Certifique-se de que a configuração esteja correta:

   ```console
   git remote -v
   ```

   O resultado deve ser algo parecido com o mostrado abaixo (substituindo `YOUR_USER_NAME` com seu nome de usuário do GitHub):

   ```console
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Executando freeCodeCamp localmente

Now that you have a local copy of freeCodeCamp, you can follow these instructions to run it locally. This will allow you to:

- Preview edits to pages as they would appear on the learning platform.
- Work on UI related issues and enhancements.
- Debug and fix issues with the application servers and client apps.

If you do run into issues, first perform a web search for your issue and see if it has already been answered. If you cannot find a solution, please search our [GitHub issues](https://github.com/freeCodeCamp/freeCodeCamp/issues) page for a solution and report the issue if it has not yet been reported.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [our chat server](https://discord.gg/PRyKn3Vbay).

### Configurar dependências

#### Etapa 1: Configure o arquivo de variável de ambiente

The default API keys and environment variables are stored in the file `sample.env`. This file needs to be copied to a new file named `.env` that is accessed dynamically during the installation step.

```console
# Crie uma cópia da "sample.env" e a nomeie como ".env".
# Preencher com as chaves e segredos de API necessários:
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

> [!TIP] Lembre-se: se quiser usar serviços como Auth0 ou Algolia, você terá que adquirir suas próprias chaves da API para estes serviços e editar as entradas no arquivo `.env`.

#### Etapa 2: Instalar as dependências

This step will install the dependencies required for the application to run:

```console
pnpm install
```

#### Etapa 3: Iniciar o MongoDB e criar o banco de dados

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE] A menos que você tenha o MongoDB executando em uma configuração diferente da padrão, a URL armazenada como valor para `MONGOHQ_URL` no arquivo `.env` funcionará. Se você está usando uma configuração diferente, modifique este valor caso necessário.
> 
> Se você seguiu as instruções de [Windows 10 via WSL2 Setup Guide](how-to-setup-wsl.md), será capaz de pular este passo se o servidor do MongoDB daquele guia já estiver em execução. Você pode confirmar isso verificando se pode acessar `http://localhost:27017` em seu computador local.

Start the MongoDB server in a separate terminal:

  <!-- tabs:start -->

#### **macOS/Linux**

```console
mongod
```

#### **Windows**

- On Windows, you must specify the full path to the `mongod` binary

```console
"C:\Arquivos de programa\MongoDB\Server\3.6\bin\mongod"
```

Make sure to replace `3.6` with the version you have installed

  <!-- tabs:end -->

> [!TIP] Você pode evitar ter que executar o MongoDB toda vez instalando-o como um serviço em segundo plano. Você pode [aprender mais sobre isso na documentação para seu OS](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
pnpm run seed
```

#### Etapa 4: Iniciar o aplicativo client do freeCodeCamp e o servidor de API

You can now start up the API server and the client applications.

```console
pnpm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Once ready, open a web browser and **visit <http://localhost:8000>**. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

The API serves endpoints at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`

While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Limpar seus cookies ou executar `pnpm run seed:certified-user` desconectará você e será preciso fazer o login novamente.

If you have issues while installing it, check out the [troubleshooting section](troubleshooting-development-issues.md)

## Referência de comandos rápidos

A quick reference to the commands that you will need when working locally.

| command            | description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| `pnpm install`     | Installs / re-install all dependencies and bootstraps the different services. |
| `pnpm run seed`    | Creates authorized test users and inserts them into mongodb.                  |
| `pnpm run develop` | Starts the freeCodeCamp API Server and Client Applications.                   |
| `pnpm run clean`   | Uninstalls all dependencies and cleans up caches.                             |

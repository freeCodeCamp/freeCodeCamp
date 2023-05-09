# Налаштування freeCodeCamp на Windows Subsystem for Linux (WSL)

> [!NOTE] Перш ніж виконувати ці інструкції, переконайтеся, що ваша система відповідає вимогам
> 
> **WSL 2**: Windows 10 64-bit (Version 2004, Build 19041 чи вище) — доступно для всіх дистрибутивів, включно з Windows 10 Home.
> 
> **Docker Desktop для Windows**: див. відповідні вимоги для [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) та [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Цей посібник охоплює деякі загальні кроки з налаштуванням WSL2. Як тільки загальні питання з WSL2 вирішено, ви зможете використовувати [цей посібник з локального налаштування](how-to-setup-freecodecamp-locally.md), щоб працювати з freeCodeCamp на Windows, запускаючи дистрибутив WSL як Ubuntu.

## Активуйте WSL

Дотримуйтесь інструкцій з [офіційної документації](https://docs.microsoft.com/en-us/windows/wsl/install-win10), щоб встановити WSL1 та оновити його до WSL2.

## Встановіть Ubuntu

1. Рекомендуємо використовувати Ubuntu-18.04 або вище з WSL2.

   > [!NOTE]
   > 
   > Ви можете використовувати інші дистрибутиви, основою яких не є Debian, але у них наявні певні недоліки та вони виходять за рамки цього посібника.

2. Оновіть залежності ОС

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Налаштуйте Git

Git попередньо встановлений в Ubuntu 18.04. Перевірте версію Git за допомогою команди `git --version`.

```output
~
❯ git --version
git version 2.25.1
```

(Необов’язково, але рекомендовано) Тепер ви можете перейти до [налаштування ключів ssh](https://help.github.com/articles/generating-an-ssh-key) на GitHub.

## Встановіть редактор коду

Ми наполегливо рекомендуємо встановити [Visual Studio Code](https://code.visualstudio.com) на Windows 10. Цей редактор підтримує WSL та автоматично встановлює всі необхідні розширення на вашому дистрибутиві WSL.

По суті, ви змінюватимете та зберігатимете свій код на Ubuntu-18.04 із VS Code, встановленим на Windows.

Якщо ви використовуєте [IntelliJ Idea](https://www.jetbrains.com/idea/), можливо, вам знадобиться оновити інтерпретатор Node та керування пакунками Npm до версії, налаштованої у вашому дистрибутиві WSL.

Ви можете перевірити ці налаштування в розділі Settings > Languages & Frameworks > Node.js and NPM.

## Installing Docker Desktop

**Docker Desktop for Windows** allows you to install and run databases like MongoDB and other services like NGINX and more. This is useful to avoid common pitfalls with installing MongoDB or other services directly on Windows or WSL2.

Follow the instructions on the [official documentation](https://docs.docker.com/docker-for-windows/install) and install Docker Desktop for your Windows distribution.

There are some minimum hardware requirements for the best experience.

## Configure Docker Desktop for WSL

Once Docker Desktop is installed, [follow these instructions](https://docs.docker.com/docker-for-windows/wsl) and configure it to use the Ubuntu-18.04 installation as a backend.

This makes it so that the containers run on the WSL side instead of running on Windows. You will be able to access the services over `http://localhost` on both Windows and Ubuntu.

## Install MongoDB from Docker Hub

Once you have configured Docker Desktop to work with WSL2, follow these steps to start a MongoDB service:

1. Launch a new Ubuntu-18.04 terminal

2. Pull `MongoDB 4.0.x` from dockerhub

   ```console
   docker pull mongo:4.0
   ```

3. Start the MongoDB service at port `27017`, and configure it to run automatically on system restarts

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:4.0
   ```

4. You can now access the service from both Windows or Ubuntu at `mongodb://localhost:27017`.

## Installing Node.js and pnpm

We recommend you install the LTS release for Node.js with a node version manager - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Once installed use these commands to install and use the Node.js version as needed

```console
nvm install --lts

# АБО
# nvm install <version>

nvm install 14

# Використання
# nvm use <version>

nvm use 12
```

Node.js comes bundled with `npm`, which you can use to install `pnpm`:

```console
npm install -g pnpm
```

## Set up freeCodeCamp Locally

Now that you have installed the pre-requisites, follow [our local setup guide](how-to-setup-freecodecamp-locally.md) to clone, install and set up freeCodeCamp locally on your machine.

> [!WARNING]
> 
> Please note, at this time the setup for Cypress tests (and related GUI needs) are a work in progress. You should still be able to work on most of the codebase.

## Корисні посилання

- [A WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code, and Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - an article by Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Поширені питання щодо:
  - [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/faqs)

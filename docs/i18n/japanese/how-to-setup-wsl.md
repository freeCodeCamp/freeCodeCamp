# Windows Subsystem for Linux (WSL) で freeCodeCamp 開発環境を構築する

> [!NOTE] Before you follow these instructions make sure your system meets the requirements.
> 
> **WSL2**: Windows 10 64-bit (Version 2004, Build 19041以上) - Windows 10 Home を含むすべてのディストリビューションで利用可能です。
> 
> **Docker Desktop for Windows**: [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) および [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements) の各要件を参照してください。

このガイドでは、WSL2 のセットアップに関する一般的な手順について説明します。 WSL2 に関する一般的な問題に対処したら、[ローカルセットアップガイド](how-to-setup-freecodecamp-locally.md) に従い、Ubuntu のように WSL ディストリビューションを実行している Windows 上で freeCodeCamp を起動できるようになります。

## WSLを有効化する

Follow the instructions on the [official documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to install WSL2.

## Ubuntu をインストールする

1. WSL2 で Ubuntu-18.04 またはそれ以降を使用することをお勧めします。

   > [!NOTE]
   > 
   > While you may use other non-Debian-based distributions, they all come with their own 'gotchas' that are beyond the scope of this guide.

   As of November 2023, Ubuntu and Debian are the only Linux distributions [officially supported by Playwright](https://playwright.dev/docs/intro#system-requirements), the end-to-end testing library used by freeCodeCamp.

2. OS の依存関係を更新します。

   ```bash
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Git を設定する

Git は Ubuntu 18.04 でプリインストールされています。Git バージョンを `git --version` で確認してください。

```output
~
❯ git --version
git version 2.25.1
```

(任意ですが推奨) GitHub で [ssh キー設定](https://help.github.com/articles/generating-an-ssh-key) を実行します。

## コードエディターをインストールする

Windows 10 に [Visual Studio Code](https://code.visualstudio.com) をインストールすることを強くお勧めします。 It has great support for WSL and automatically installs all the necessary extensions on your WSL distribution.

基本的には、Windows にインストールされている VS Code を使用して、Ubuntu-18.04 上でコードを編集して保存します。

If you use [IntelliJ Idea](https://www.jetbrains.com/idea/), you may need to update your Node interpreter and npm package manager to what is installed on your WSL distro.

You can check these settings by going to Settings > Languages & Frameworks > Node.js and npm.

## Docker Desktop をインストールする

**Docker Desktop for Windows** を使用すると、MongoDB のようなデータベースや NGINX などのサービスをインストールして実行できます。 MongoDB やその他のサービスを Windows または WSL2 に直接インストールする際の一般的な落とし穴を避けることができます。

Follow the instructions on the [official documentation](https://docs.docker.com/docker-for-windows/install) and install Docker Desktop for your Windows distribution.

最高の体験を得るための最低限のハードウェア要件があります。

## Docker Desktop for WSL を構成する

Docker Desktop がインストールされたら、[この手順に従って](https://docs.docker.com/docker-for-windows/wsl) Ubuntu-18.04 をバックエンドとして使用するように設定します。

これにより、コンテナは Windows 上ではなく WSL 側で実行されます。 Windows と Ubuntu の両方で `http://localhost` からサービスにアクセスできます。

## Docker Hub から MongoDB をインストールする

WSL2 で動作するように Docker Desktop を設定したら、次の手順に従って MongoDB サービスを起動します。

1. Launch a new Ubuntu terminal

2. Pull MongoDB from Docker Hub. Please refer to the [Prerequisites](how-to-setup-freecodecamp-locally.md#Prerequisites) table for the current version of MongoDB used by freeCodeCamp. For example, if the version number is `5.0.x`, replace `<x.y>` with `5.0` in the following two code snippets.

   ```bash
   docker pull mongo:<x.y>
   ```

3. MongoDB サービスをポート `27017` で起動し、システム再起動時に自動的に実行するように設定します。

   ```bash
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:<x.y>
   ```

4. Windows または Ubuntu から `mongodb://localhost:27017` でサービスにアクセスできるようになりました。

## Installing Node.js and pnpm

Node バージョンマネジャー - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) を使用して、Node.js 用の LTS リリースをインストールすることを推奨します。

Once installed use this command to install and use the latest Node.js LTS version:

```bash
nvm install --lts
```

For instructions on installing and using a different version of Node.js, please refer to the [nvm docs](https://github.com/nvm-sh/nvm#usage).

Node.js comes bundled with `npm`, which you can use to install `pnpm`:

```bash
npm install -g pnpm
```

## Set up freeCodeCamp Locally

Now that you have installed the pre-requisites, follow [our local setup guide](how-to-setup-freecodecamp-locally.md) to clone, install and set up freeCodeCamp locally on your machine.

> [!WARNING]
> 
> Please note, at this time the setup for Cypress tests (and related GUI needs) is a work in progress. それでも、ほとんどのコードベースで作業できるはずです。

## Optimize Windows and WSL

   > [!NOTE]
   > 
   > The following tips were collected from across the web and have not gone through vigorous testing. Your mileage may vary.

### Adjust processer scheduling for background services

This may reduce incidents of Docker containers crashing due to lack of resources.

Open the System Properties control panel by pressing <kbd>Win + R</kbd> and entering `sysdm.cpl`

<details>
    <summary>
      Enter <code>sysdm.cpl</code> in the Run dialog (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/run-sysdm.png" alt="Enter `sysdm.cpl` in the Run dialog" />
</details>
<br>

Go to Advanced -> Performance -> Settings…

<details>
    <summary>
      Performance Settings button under Advanced tab in System Properties (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/advanced-performance-settings.png" alt="Performance Settings button under Advanced tab in System Properties" />
</details>
<br>

Under Advanced -> Processor scheduling, choose "Background services". Do not close the window. Continue to the next tip.

<details>
    <summary>
      Background services radio button under Advanced tab in Performance Options (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/background-services.png" alt="Background services radio button under Advanced tab in Performance Options" />
</details>

### Increase the size of Windows paging file for the system drive

Under Advanced -> Virtual memory, click "Change…"

<details>
    <summary>
      Change virtual memory button under Advanced tab in Performance Options (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/advanced-virtual-memory.png" alt="Change virtual memory button under Advanced tab in Performance Options" />
</details>
<br>

Choose "Custom size". Set the initial size to 1.5x and the maximum size to 3x of your physical memory. Then click "Set".

<details>
    <summary>
      Set custom size button in Virtual Memory window (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/set-custom-size.png" alt="Set custom size button in Virtual Memory window" />
</details>

### Increase the size of memory allocated to WSL

Create a [`.wslconfig` file](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) in your [`%UserProfile%` directory](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig) (typically `C:\Users\<UserName>\.wslconfig`). Please read the [WSL documentation](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) carefully and replace `x` with values that suit your own needs:

```ini
# Settings apply across all Linux distros running on WSL 2
[wsl2]

# How much memory to assign to the WSL 2 VM. The default value might not be enough
memory=xGB

# How much swap space to add to the WSL 2 VM, default is 25% of available RAM
swap=xGB
```

### Increase Node.js max old space size

This fixes the ["JavaScript heap out of memory" error](https://stackoverflow.com/a/54456814) with ESLint. Add the following to your `~/.bashrc` or `~/.zshrc`:

```sh
export NODE_OPTIONS="--max-old-space-size=4096"
```

### Avoid `pnpm run test`

Instead, use the script [appropriate to your PR](https://forum.freecodecamp.org/t/wsl-performance-issues-while-working-on-the-codebase/644215/2#:~:text=usually%2C%20you%20just%20want%20to%20test%20something%20specific%20to%20either%20the%20curriculum%20or%20the%20client%20or%20the%20api%20-%20almost%20never%20all%203.); either `pnpm run test:api`, `pnpm run test:curriculum`, or `pnpm run test-client`.

## Useful Links

- [A WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code, and Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - an article by Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- よくある質問:
  - [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/faqs)

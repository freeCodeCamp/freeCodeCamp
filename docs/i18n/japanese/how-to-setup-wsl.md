# Windows Subsystem for Linux (WSL) で freeCodeCamp 開発環境を構築する

> [!NOTE] これらの指示に従う前に、システムが要件を満たしていることを確認してください。
> 
> **WSL2**: Windows 10 64-bit (Version 2004, Build 19041以上) - Windows 10 Home を含むすべてのディストリビューションで利用可能です。
> 
> **Docker Desktop for Windows**: [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) および [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements) の各要件を参照してください。

このガイドでは、WSL2 のセットアップに関する一般的な手順について説明します。 WSL2 に関する一般的な問題に対処したら、[ローカルセットアップガイド](how-to-setup-freecodecamp-locally.md) に従い、Ubuntu のように WSL ディストリビューションを実行している Windows 上で freeCodeCamp を起動できるようになります。

## WSLを有効化する

[公式ドキュメント](https://docs.microsoft.com/en-us/windows/wsl/install-win10) の指示に従って、WSL1 をインストールしてから、WSL2 にアップグレードしてください。

## Ubuntu をインストールする

1. WSL2 で Ubuntu-18.04 またはそれ以降を使用することをお勧めします。

   > [!NOTE]
   > 
   > 他の非debianベースのdistrosを使用することができますが、それぞれの問題点があり、このガイドの範囲を超えています。

2. OS の依存関係を更新します。

   ```console
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

Windows 10 に [Visual Studio Code](https://code.visualstudio.com) をインストールすることを強くお勧めします。 WSLの素晴らしいサポートがあり、自動的にWSL distro に必要な拡張機能をすべてインストールします。

基本的には、Windows にインストールされている VS Code を使用して、Ubuntu-18.04 上でコードを編集して保存します。

[IntelliJ Idea](https://www.jetbrains.com/idea/) を使用する場合、Node インタプリターと Npm パッケージマネジャーを WSL distro にインストールされているものに更新する必要があるかもしれません。

その設定は、設定 > 言語 & フレームワーク > Node.js および NPM で確認できます。

## Docker Desktop をインストールする

**Docker Desktop for Windows** を使用すると、MongoDB のようなデータベースや NGINX などのサービスをインストールして実行できます。 MongoDB やその他のサービスを Windows または WSL2 に直接インストールする際の一般的な落とし穴を避けることができます。

Follow the instructions on the [official documentation](https://docs.docker.com/docker-for-windows/install) and install Docker Desktop for your Windows distribution.

最高の体験を得るための最低限のハードウェア要件があります。

## Docker Desktop for WSL を構成する

Docker Desktop がインストールされたら、[この手順に従って](https://docs.docker.com/docker-for-windows/wsl) Ubuntu-18.04 をバックエンドとして使用するように設定します。

これにより、コンテナは Windows 上ではなく WSL 側で実行されます。 Windows と Ubuntu の両方で `http://localhost` からサービスにアクセスできます。

## Docker Hub から MongoDB をインストールする

WSL2 で動作するように Docker Desktop を設定したら、次の手順に従って MongoDB サービスを起動します。

1. 新しい Ubuntu-18.04 端末を起動します。

2. dockerhub から `MongoDB 4.0.x` を取得します。

   ```console
   docker pull mongo:4.0
   ```

3. MongoDB サービスをポート `27017` で起動し、システム再起動時に自動的に実行するように設定します。

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:4.0
   ```

4. Windows または Ubuntu から `mongodb://localhost:27017` でサービスにアクセスできるようになりました。

## Installing Node.js and pnpm

Node バージョンマネジャー - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) を使用して、Node.js 用の LTS リリースをインストールすることを推奨します。

インストールしたら、以下のようなコマンドを使って、Node.js バージョンをインストールして使用します。

```console
nvm install --lts

# OR
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js comes bundled with `npm`, which you can use to install `pnpm`:

```console
npm install -g pnpm
```

## freeCodeCamp をローカルで設定する

前提条件のインストールが完了したら、[ ローカルセットアップガイド](how-to-setup-freecodecamp-locally.md) に従って、マシンに freeCodeCamp をローカルにクローンし、インストールし、セットアップしてください。

> [!WARNING]
> 
> 現在、Cypress テストのセットアップ (および関連するGUIのニーズ) 作業が進行中です。 それでも、ほとんどのコードベースで作業できるはずです。

## 有用なリンク

- [A WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code and Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - an article by Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- よくある質問:
  - [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/faqs)

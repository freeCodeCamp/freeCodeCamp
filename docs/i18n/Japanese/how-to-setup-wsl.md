# Linux用のWindowsサブシステム(WSL)でfreeCodeCampを設定

> [!注記] これらの指示に従う前に、システムが要件を満たしていることを確認してください
> 
> **WSL2**: Windows 10 64-bit (Version 2004, Build 19041以上) - Windows 10 Homeを含むすべてのディストリビューションで利用可能。
> 
> **Docker Desktop for Windows**: [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) および [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements) のそれぞれの要件を参照してください。

このガイドでは、WSL2のセットアップに関するいくつかの一般的な手順について説明します。 WSL2の一般的な問題のいくつかが解決されると、 WindowsのfreeCodeCampでUbuntuのようなWSLの気晴らしを実行するために、ローカルのセットアップガイドに従うことができます。

## WSLを有効化

[公式ドキュメント](https://docs.microsoft.com/en-us/windows/wsl/install-win10) の指示に従って、WSL1 をインストールしてから、WSL2 にアップグレードしてください。

## Install Ubuntu

1. WSL2でUbuntu-18.04以上を使用することをお勧めします。

   > [!注記]
   > 
   > あなたは他の非debianベースのdistrosを使用することができますが、彼らはすべて自分のgotchasと一緒に来て、このガイドの範囲を超えています。

2. OS の依存関係を更新する

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Git の設定

Git は Ubuntu 18.04 でプリインストールされています。 Git バージョンが `git --version` であることを確認してください。

```output
~
<unk> git --version
git version 2.25.1
```

(Optional but recommended) You can now proceed to [setting up your ssh keys](https://help.github.com/articles/generating-an-ssh-key) with GitHub.

## コードエディタのインストール

Windows 10 に [Visual Studio Code](https://code.visualstudio.com) をインストールすることを強くお勧めします。 それはWSLの素晴らしいサポートを持っており、自動的にWSLディストロに必要な拡張機能をすべてインストールします。

基本的には、WindowsにインストールされているVS Codeを使用して、Ubuntu-18.04にコードを編集して保存します。

## Docker Desktop のインストール

**Docker Desktop for Windows** を使用すると、MongoDB、NGINXなどのデータベースやサービスをインストールして実行できます。 これは、MongoDBやその他のサービスをWindowsまたはWSL2に直接インストールする際の一般的な落とし穴を避けるために便利です。

[公式ドキュメント](https://docs.docker.com/docker-for-windows/install) の指示に従って、Windows 配布用の Docker Desktop をインストールしてください。

最高の体験を得るための最低限のハードウェア要件があります。

## Docker Desktop for WSLの構成

Once Docker Desktop is installed, [follow these instructions](https://docs.docker.com/docker-for-windows/wsl) and configure it to use the Ubuntu-18.04 installation as a backend.

これにより、コンテナが Windows 上で実行される代わりに、WSL側で実行されるようになります。 WindowsとUbuntuの両方で `http://localhost` からサービスにアクセスできます。

## Docker Hub から MongoDB をインストール

WSL2で動作するようにDockerデスクトップを設定したら、次の手順に従ってMongoDBサービスを開始します。

1. 新しいUbuntu-18.04端末を起動

2. dockerhubから `MongoDB 3.6` を取得する

   ```console
   docker pull mongo:3
   ```

3. MongoDBサービスをポート `27017`で起動し、システム再起動時に自動的に実行するように設定します

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stop \
     -d mongo:3
   ```

4. Windows または Ubuntu の両方から `mongodb://localhost:27017` でサービスにアクセスできるようになりました。

## Node.js と npm のインストール

ノードバージョンマネージャー - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) を使用して Node.js 用の LTS リリースをインストールすることをお勧めします。

インストールが完了したら、これらのコマンドを使用して、Node.js バージョンを必要に応じて

```console
nvm install --lts

# OR
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js には `npm`がバンドルされています。 `npm` の最新バージョンに更新することができます。

```console
npm install -g npm@latest
```

## freeCodeCampをローカルで設定

前提条件のインストールが完了しましたら、 [ローカルセットアップガイド](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) に従って、あなたのマシンに freeCodeCamp をローカルにインストールしてセットアップしてください。

> [!警告]
> 
> 現時点では、サイプレステストのセットアップ(および関連するGUIのニーズ)が進行中です。 ほとんどのコードベースで作業できるはずです。

## 有用なリンク

- [Ubuntu 20.04, Node.js, MongoDB, VS Code and Docker を使用した WSL2 Dev セットアップ](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - Mrugesh Mohapatra (freeCodeCamp.orgのスタッフ開発者)
- よくある質問:
  - [Linux 版 Windows Subsystem](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/faqs)

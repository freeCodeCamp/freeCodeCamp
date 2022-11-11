これらのガイドラインに従い、ローカルシステム上に freeCodeCamp を設定してください。 定期的に貢献したい場合に、強くお勧めします。

コードベースやカリキュラムのバグを修正するなど、コントリビューションワークフローの中には、ローカルコンピュータ上で freeCodeCamp を実行する必要があるものがあります。

### ローカルマシンを準備する方法

お使いのオペレーティングシステムの必須ソフトウェアをインストールすることから始めます。

私たちは、Linux または Unix ベースのシステムでの開発を主にサポートしています。 スタッフとコミュニティのコントリビューターは、Ubuntu と macOS にインストールされているツールを使用して、定期的にコードベースの作業をしています。

また、WSL2 を介した Windows 10 をサポートしており、[ガイド](how-to-setup-wsl.md) を読んで準備することができます。

コミュニティメンバーの中には、Git for Windows (Git Bash) や Windows にインストールされている他のツールを使用して、Windows 10でネイティブに開発する人もいます。 現時点では、このようなセットアップに対する公式サポートは行っておらず、WSL2 の使用をお勧めしています。

#### 必要条件:

| 必要条件                                                                                    | バージョン   | 注                                                                                        |
| --------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                            | `16.x`  | 「Active LTS」バージョンを使用しています。[LTS スケジュール](https://nodejs.org/en/about/releases/) を参照してください。 |
| npm (Nodeにバンドル)                                                                         | `8.x`   | Node.js Active LTS にバンドルされたバージョンを使用します。                                                  |
| [MongoDB コミュニティサーバー](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x` | -                                                                                        |

> [!ATTENTION] If you have a different version, please install the recommended version. We can only support installation issues for recommended versions. See [troubleshooting](#troubleshooting) for details.

Node.js が既にマシンにインストールされている場合、以下のコマンドを実行してバージョンを検証します。

```console
node -v
npm -v
```

> [!TIP] We highly recommend updating to the latest stable releases of the software listed above, also known as Long Term Support (LTS) releases.

必要条件をインストールしたら、開発環境を準備します。 これは多くの開発ワークフローに共通しており、一度だけこれを行う必要があります。

##### 以下の手順に従って、開発環境を準備してください。

1. インストール済みでない場合は、[Git](https://git-scm.com/) またはお気に入りの Git クライアントをインストールしてください。 最新バージョンにアップデートしてください。お使いの OS にバンドルされているバージョンが古い可能性があります。

2. (任意ですが推奨) GitHub 用の [SSH キーを設定](https://help.github.com/articles/generating-an-ssh-key/) します。

3. 選択したコードエディターをインストールします。

   [Visual Studio Code](https://code.visualstudio.com/) または [Atom](https://atom.io/) の使用を強くお勧めします。 これらは優れた、無料のオープンソースコードエディターです。

4. コードエディターのリンティングを設定します。

   [エディターでの ESLint 実行](http://eslint.org/docs/user-guide/integrations.html) を入手してください。[freeCodeCamp の JavaScript スタイルガイド](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121) に準拠していないものを強調表示できます。

   > [!TIP] リンティングエラーを無視しないでください。 これらは **サポート** し、クリーンでシンプルなコードベースを確保するためのものです。

## GitHub でリポジトリをフォークする

[フォーク](https://help.github.com/articles/about-forks/) とは Github 上に freeCodeCamp メインリポジトリ (別名 _repo_) のコピーを自分用に用意するステップです。

これは、GitHub 上の freeCodeCamp のコピーで作業できるようにするために、またリポジトリをダウンロード (クローン) しローカルで作業するために不可欠です。 後で、プルリクエスト (PR) を介して、フォークからメインリポジトリにプルされるように変更をリクエストできます。

> [!TIP] The main repository at `https://github.com/freeCodeCamp/freeCodeCamp` is often referred to as the `upstream` repository.
> 
> Your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp` is often referred to as the `origin` repository. `YOUR_USER_NAME` would be replaced with your GitHub username.

**以下の手順に従って `https://github.com/freeCodeCamp/freeCodeCamp` リポジトリをフォークします。**

1. GitHub 上の freeCodeCamp リポジトリに移動します。<https://github.com/freeCodeCamp/freeCodeCamp>

2. インターフェースの右上隅にある「フォーク」ボタンをクリックします ([詳細はこちら](https://help.github.com/articles/fork-a-repo/))。

3. リポジトリをフォークすると、freeCodeCamp リポジトリのコピーである `https://github.com/YOUR_USER_NAME/freeCodeCamp` に移動することになります (`YOUR_USER_NAME` は GitHub のユーザーネームに置き換えられます)。

<details>
   <summary>
      GitHub で freeCodeCamp をフォークする方法 (スクリーンショット)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="GitHub で freeCodeCamp をフォークする方法" />
</details>

## GitHub からフォークのクローンを作る

[クローン作成](https://help.github.com/articles/cloning-a-repository/) とは、自分または他の誰かが所有しているリポジトリのコピーを、`remote` の場所から **ダウンロード** することです。 自分で所有している場合、この remote の場所は freeCodeCamp リポジトリの `fork`にあり、`https://github.com/YOUR_USER_NAME/freeCodeCamp` で入手可能です。 `YOUR_USER_NAME` は、GitHub のユーザーネームに置き換えられます。

> [!WARNING] If you are working on a WSL2 Linux Distro, you might get performance and stability issues by running this project in a folder which is shared between Windows and WSL2 (e.g. `/mnt/c/Users/`). Therefore we recommend to clone this repo into a folder which is mainly used by your WSL2 Linux Distro and not directly shared with Windows (e.g. `~/PROJECTS/`).
> 
> See [this GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) for further Information about this problem.

以下のコマンドをローカルマシンで実行します。

1. Terminal / Command Prompt / Shell をプロジェクトディレクトリで開きます。

   _例: `/yourprojectsdirectory/`_

2. `YOUR_USER_NAME` を GitHub のユーザーネームに置き換えて、freeCodeCamp のフォークのクローンを作成します。

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

これで、freeCodeCamp リポジトリ全体がプロジェクトディレクトリにダウンロードされます。

注: `--depth=1` は、最新の履歴 / コミットのみでフォークのシャロークローンを作成します。

## 親からの同期を設定する

フォークのコピーをダウンロードしたので、親リポジトリに `upstream` リモートを設定する必要があります。

[前述](#github-でリポジトリをフォークする) のように、メインリポジトリは `upstream` リポジトリと呼ばれています。 自身のフォークは `origin` リポジトリと呼ばれています。

`origin` リポジトリに加えて、ローカルクローンから `upstream` リポジトリへの参照が必要です。 これは、フォークやクローンを繰り返し行うことなく、メインリポジトリからの変更を同期できるようにするためです。

1. ディレクトリを新しい freeCodeCamp ディレクトリに変更します。

   ```console
   cd freeCodeCamp
   ```

2. メインの freeCodeCamp リポジトリへのリモート参照を追加します。

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. 設定が正しいことを確認します。

   ```console
   git remote -v
   ```

   出力は以下のようになります (`YOUR_USER_NAME` を GitHub ユーザ名に置き換えます)。

   ```console
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## freeCodeCamp をローカルで実行する

freeCodeCamp のローカルコピーができたので、これらの指示に従ってローカルで実行することが可能です。 これによって次のことができるようになります。

- 学習プラットフォーム上に表示されるページへの編集をプレビューする。
- UI関連の Issue と機能強化に取り組む。
- アプリケーションサーバーとクライアントアプリの Issue をデバッグして修正する。

問題が発生した場合は、まず Web 検索を実行し、既に解決済みであるかどうかを確認します。 解決策が見つからない場合、[GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues) ページを検索し、まだ報告されていない Issue を報告してください。

そして、[フォーラムの「Contributors」カテゴリ](https://forum.freecodecamp.org/c/contributors) または [チャットサーバー](https://discord.gg/PRyKn3Vbay) へいつでもお気軽にお問い合わせください。

### 依存関係を設定する

We have automated the process of setting up the development environment in Gitpod for you.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

(You will still need to create your own fork and branch.)

#### ステップ 1: 環境変数ファイルを設定する

The default API keys and environment variables are stored in the file `sample.env`. This file needs to be copied to a new file named `.env` that is accessed dynamically during the installation step.

```console
# "sample.env" のコピーを作成し、".env" という名前を付けます。
# 必要な API キーとシークレットを追加します。
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

#### ステップ 2: 依存関係をインストールする

This step will install the dependencies required for the application to run:

```console
npm ci
```

#### ステップ 3: MongoDBを起動し、データベースをシードする

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

- Windows では、`mongod` バイナリへの完全なパスを指定する必要があります。

```console
"C:\Program Files\MongoDB\Server\3.6\bin\mongod"
```

Make sure to replace `3.6` with the version you have installed

  <!-- tabs:end -->

> [!TIP] You can avoid having to start MongoDB every time by installing it as a background service. You can [learn more about it in their documentation for your OS](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
npm run seed
```

#### ステップ 4: freeCodeCamp クライアントアプリケーションと API サーバーを起動する

You can now start up the API server and the client applications.

```console
npm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Once ready, open a web browser and **visit <http://localhost:8000>**. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

The API serves endpoints at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`

While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Clearing your cookies or running `npm run seed:certified-user` will log you out, and you will have to sign in again.

If you have issues while installing it, check out the [troubleshooting section](troubleshooting-development-issues.md)

## Quick commands reference

A quick reference to the commands that you will need when working locally.

| コマンド              | 説明                                                |
| ----------------- | ------------------------------------------------- |
| `npm ci`          | すべての依存関係をインストール / 再インストールし、異なるサービスをブートストラップします。   |
| `npm run seed`    | すべてのチャレンジのマークダウンファイルを解析し、MongoDB に挿入します。          |
| `npm run develop` | freeCodeCamp の API サーバーとクライアントアプリケーションを起動します。     |
| `npm run clean`   | Uninstalls all dependencies and cleans up caches. |

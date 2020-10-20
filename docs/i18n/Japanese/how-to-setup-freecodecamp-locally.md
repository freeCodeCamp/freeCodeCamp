こちらのガイドラインに従って、システム上で freeCodeCamp をローカルに設定してください。 定期的に貢献したい場合は、是非お勧めします。

いくつかのコントリビューションワークフローでは、freeCodeCampをローカルで実行する必要があります。 例えば、コーディングの課題をプレビューしたり、コードベースのバグをデバッグして修正したりします。

> [!ヒント] freeCodeCampの設定に興味がない場合は、無料のオンライン開発環境であるGitpodの使用を検討してください。
> 
> [![Gitpod で開く](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (ブラウザで freeCodeCamp 用のコード対応開発環境を開始します。

## ローカルマシンを準備する

お使いのオペレーティングシステムの前提ソフトウェアをインストールすることから開始します。

主に **\*nix** システムでの開発をサポートしています。 私たちのスタッフとコミュニティ貢献者は、UbuntuとmacOSにインストールされているツールを使用して、定期的にコードベースを使用しています。

We also support Windows 10 via WSL2, which you can prepare by [reading this guide](/how-to-setup-wsl).

コミュニティメンバーの中には、Git for Windows(Git Bash)やWindowsにインストールされている他のツールを使用して、Windows 10でネイティブに開発する人もいます。 現時点では、このようなセットアップの公式サポートはありません。 代わりに WSL2 を使用することをお勧めします。

**前提条件:**

| 前提条件                                                                                   | バージョン  | メモ                                                                                                                                                             |
| -------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                           | `12.x` | [LTSスケジュール](https://github.com/nodejs/Release#release-schedule)                                                                                                |
| npm (Nodeにバンドルされています)                                                                  | `6.x`  | LTS リリースはありません。 Node LTS にバンドルされているバージョンを使用しています。                                                                                                              |
| [MongoDBコミュニティサーバー](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`  | [リリースノート](https://docs.mongodb.com/manual/release-notes/), 注意: 現在 `3.6`にあります。 , [アップグレードが予定されています](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] 異なるバージョンの場合は、推奨バージョンをインストールしてください。 推奨バージョンのインストールに関する問題のみサポートできます。 詳細は [troubleshooting](#troubleshooting) を参照してください。

Node.js がすでにマシンにインストールされている場合、以下のコマンドを実行してバージョンを検証します。

```console
node -v
npm -v
```

> [!TIP] 長期サポート(LTS)リリースとも呼ばれる、上記の安定版の最新リリースにアップデートすることを強くお勧めします。

必要条件がインストールされたら、開発環境を準備する必要があります。 これは多くの開発ワークフローに共通しており、一度だけこれを行う必要があります。

**以下の手順に従って、開発環境を準備してください。**

1. まだインストールしていない場合は、 [Git](https://git-scm.com/) またはお気に入りのGitクライアントをインストールしてください。 最新バージョンにアップデートすると、お使いのOSにバンドルされているバージョンが古くなる可能性があります。

2. (オプションですが推奨) [GitHub用のSSHキー](https://help.github.com/articles/generating-an-ssh-key/) を設定します。

3. お好みのコードエディタをインストールします。

   [Visual Studio Code](https://code.visualstudio.com/) または [Atom](https://atom.io/) を使用することを強くお勧めします。 これらは素晴らしい、自由でオープンなソースコードエディタです。

4. コードエディタのリンティングを設定します。

   You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything that doesn't conform to [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!ヒント] リンティングエラーを無視しないでください。 これらは **あなたを** 助け、クリーンでシンプルなコードベースを保証するためのものです。

## GitHub でリポジトリをフォーク

[Forking](https://help.github.com/articles/about-forks/) は、GitHub上でfreeCodeCampのメインリポジトリ(別名、 _repo_)のコピーを入手するステップです。

GitHub上のfreeCodeCampのコピーを自分で作ることができるので、これは不可欠です。 または、ローカルで作業するためにリポジトリをダウンロード(クローン)します。 後で、プルリクエスト(PR)を介してフォークからメインリポジトリにプルする変更をリクエストすることができます。

> [!TIP] `https://github.com/freeCodeCamp/freeCodeCamp` のメインリポジトリは `アップストリーム` リポジトリと呼ばれることがあります。
> 
> `https://github.com/YOUR_USER_NAME/freeCodeCamp` のフォークは、しばしば `オリジン` リポジトリと呼ばれます。

**以下の手順に従って、 `https://github.com/freeCodeCamp/freeCodeCamp` リポジトリをフォークしてください。**

1. GitHubのfreeCodeCampリポジトリに移動: <https://github.com/freeCodeCamp/freeCodeCamp>

2. インターフェースの右上隅にある「フォーク」ボタンをクリックします ([詳細はこちら](https://help.github.com/articles/fork-a-repo/))

3. リポジトリがフォークされると、 `https://github.com/YOUR_USER_NAME/freeCodeCamp` にある freeCodeCamp リポジトリのコピーに移動します。

<details>
   <summary>
      GitHubでfreeCodeCampをフォークする方法 (スクリーンショット)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="GitHubでfreeCodeCampをフォークする方法" />
</details>

## GitHub からフォークを複製

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that is either owned by you or by someone else. あなたの場合、このリモートの場所は freeCodeCamp の `fork` で、 `https://github.com/YOUR_USER_NAME/freeCodeCamp` で利用できるはずです。

以下のコマンドをローカルマシンで実行します。

1. Terminal / Command Prompt / Shellをプロジェクトディレクトリで開く

   _例えば: `/yourprojectsdirectory/`_

2. freeCodeCampのフォークをクローンし、 `YOUR_USER_NAME` をGitHub Username に置き換えます。

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

これにより、freeCodeCampリポジトリ全体がプロジェクトディレクトリにダウンロードされます。

注意: `--depth=1` は最新の履歴/コミットのみでフォークの浅いクローンを作成します。

## 親からの同期を設定

フォークのコピーをダウンロードしたので、親リポジトリに `上流の` リモートを設定する必要があります。

[前述の](#fork-the-repository-on-github)のように、メインリポジトリは `上流` リポジトリと呼ばれています。 フォークは `origin` リポジトリと呼ばれています。

`origin` リポジトリに加えて、ローカルクローンから `upstream` リポジトリへの参照が必要です。 これは、フォークやクローンを繰り返し行うことなく、メインリポジトリからの変更を同期できるようにするためです。

1. ディレクトリを新しいfreeCodeCampディレクトリに変更:

   ```console
   cd freeCodeCamp
   ```

2. freeCodeCampリポジトリへのリモート参照を追加します。

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. 設定が正しいことを確認してください:

   ```console
   git remote -v
   ```

   出力は以下のようになります:

   ```console
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## freeCodeCampをローカルで実行中

freeCodeCampのローカルコピーがあるので、これらの指示に従ってローカルで実行することができます。 これにより次のことが可能になります:

- 学習プラットフォーム上に表示されるページへの編集をプレビューします。
- UI関連の問題と機能強化に取り組む。
- アプリケーション・サーバーとクライアント・アプリの問題をデバッグして修正します。

問題が発生した場合は、最初に問題の Web 検索を実行し、すでに解決済みであるかどうかを確認します。 解決策が見つからない場合 解決策については、 [GitHubの課題](https://github.com/freeCodeCamp/freeCodeCamp/issues) ページを検索し、まだ報告されていない場合は問題を報告してください。

そしていつものように お気軽に [Gitter](https://gitter.im/FreeCodeCamp/Contributors) または [Discord サーバー](https://discord.gg/pFspAhS)の貢献者チャットルームをご覧ください。 迅速な問い合わせを行います

> [!TIP] ファイルを編集するだけの場合は、freeCodeCampの実行をローカルでスキップすることができます。 例えば、 `rebase`を実行したり、 `merge` の競合を解決したりします。
> 
> 後でいつでもこの手順に戻ることができます。 マシンでアプリを実行する必要がない場合は、 **** だけこの手順をスキップしてください。
> 
> [変更を加えるにはスキップ](#making-changes-locally).

### 依存関係の設定

#### ステップ 1: 環境変数ファイルを設定

デフォルトの API キーと環境変数は、ファイル `sample.env` に格納されます。 このファイルは、インストール時に動的にアクセスされる `.env` という名前の新しいファイルにコピーする必要があります。

```console
# "sample.env" のコピーを作成し、".env" という名前を付けます。
# "sample.env" のコピーを作成し、".env" という名前を付けます。
# Populate it with the necessary API keys and secrets:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

`.env` ファイルのキーは _ローカルでアプリを実行するために変更する必要はありません_。 `sample.env` をそのままにしておくことができます。

> [!TIP] Keep in mind if you want to use services like Auth0 or Algolia, you'll have to acquire your own API keys for those services and edit the entries accordingly in the `.env` file.

#### ステップ 2: 依存関係のインストール

このステップでは、アプリケーションを実行するために必要な依存関係をインストールします。

```console
npm ci
```

#### ステップ 3: MongoDBを起動し、データベースをシードする

アプリケーションをローカルで実行する前に、MongoDBサービスを開始する必要があります。

> [!NOTE] Unless you have MongoDB running in a setup different than the default, the URL stored as the `MONGOHQ_URL` value in the `.env` file should work fine. カスタム設定を使用している場合は、必要に応じてこの値を変更してください。

MongoDBサーバーを別の端末で起動します。

- macOS & Ubuntuの場合:

  ```console
  mongod
  ```

- Windows では、 `mongod` バイナリへのフルパスを指定する必要があります。

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  `3.6` をインストールしたバージョンに置き換えてください

> [!TIP] MongoDBをバックグラウンドサービスとしてインストールすることで、毎回起動する必要はありません。 [OS のドキュメント](https://docs.mongodb.com/manual/administration/install-community/) で詳しく学ぶことができます。

次に、データベースをシードしましょう。 このステップでは、MongoDBサーバーにサービスによって必要とされる初期データセットを埋める以下のコマンドを実行します。 これらには、他のものの中でも、いくつかのスキーマが含まれます。

```console
npm run seed
```

#### ステップ 4: freeCodeCampクライアントアプリケーションとAPIサーバーを開始

APIサーバーとクライアントアプリケーションを起動できるようになりました。

```console
npm run develop
```

この単一コマンドは、APIサーバーや利用可能なクライアントアプリケーションを含むすべてのサービスを起動します。

> [!NOTE] 準備ができたら、ウェブブラウザを開き、 ** <http://localhost:8000>** をご覧ください。 アプリがロードされたら、おめでとうございます - あなたはすべての準備ができています! これで、あなたのローカルマシン上で動作するfreeCodeCampの学習プラットフォーム全体のコピーがあります。

> [!TIP] APIサーバーは `http://localhost:3000` でAPIを提供します。 Gatsby アプリはクライアントアプリケーションを `http://localhost:8000` で提供します。

> <http://localhost:3000/explorer> にアクセスすると、利用可能なAPIが表示されます。

## ローカル ユーザーでサインイン

ローカル セットアップでは、データベース内のローカル ユーザーが自動的に入力されます。 `Sign In` ボタンをクリックすると、ローカルアプリケーションへの認証が自動的に行われます。

ただし、ユーザーポートフォリオページにアクセスするのは少し難しいです。 開発中 Gatsbyは、クライアント側のページにサービスを引き継ぎ、ローカルで作業する際に、ユーザーポートフォリオの `404` ページを取得します。

**"Preview Custom 404 Page"** ボタンをクリックするだけで、正しいページに移動できます。

<details>
   <summary>
      ローカルで作業するときのサインイン方法（スクリーンショット）
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="ローカルで作業しているときにサインインする方法" />
</details>

## ローカルで変更を行う

ファイルに変更を加え、フォークのローカルクローンに変更を反映できるようになりました。

以下の手順に従ってください:

1. `master` ブランチにいることを確認してください。

   ```console
   git status
   ```

   次のような出力を得る必要があります。

   ```console
   ブランチマスター
   のブランチは 'origin/master' で最新です。

   コミットする必要はありません。

   作業ディレクトリをクリーンアップします。
   ```

   マスターにいない場合、または作業ディレクトリがきれいでない場合は、未処理のファイル/コミットとチェック アウトを解決します `マスター`:

   ```console
   git checkout master
   ```

2. freeCodeCamp上流の `マスター` ブランチからの最新の変更をローカルのマスターブランチに同期します:

   > [!WARNING] フォークの `master` ブランチから行った未処理のプルリクエストがある場合。 このステップの最後にそれらを失うことになります
   > 
   > この手順を実行する前に、プルリクエストがモデレータによってマージされていることを確認してください。 このシナリオを回避するには、 **マスター** 以外のブランチで `常に`作業する必要があります。

   この手順 **は、freeCodeCampのメインリポジトリから最新の変更** を同期します。 最新の `上流/マスター` の上に、コンフリクトを回避するためにできるだけ頻繁にブランチをリベースにすることが重要です。

   freeCodeCamp上流リポジトリのローカルコピーを更新してください:

   ```console
   git fetch upstream
   ```

   フリーCodeCampマスターでマスターブランチをハードリセット:

   ```console
   git reset --hard upstream/master
   ```

   GitHubのフォークにきれいな履歴を表示するには、あなたのマスターブランチをあなたのオリジンにプッシュしてください。

   ```console
   git push origin master --force
   ```

   差分を実行することで、現在のマスターが上流/マスターと一致するか確認できます:

   ```console
   git diff upstream/master
   ```

   結果の出力は空でなければなりません。

3. 新しいブランチを作成:

   各問題に対して別のブランチで作業することは、ローカルの作業コピーをきれいに保つのに役立ちます。 `マスター` で作業するべきではありません。 これはfreeCodeCampのあなたのコピーを土壌にし、あなたは新鮮なクローンやフォークからやり直す必要があるかもしれません。

   `マスター` を、前述のように使用していることを確認し、そこから分岐します。

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   ブランチ名は `fix/`、 `feat/`、 `docs/`などで始まる必要があります。 ブランチ内で課題番号を使用しないでください。 それらを短く、意味があり、ユニークにしてください。

   良いブランチ名の例は次のとおりです。

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issue
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. ページを編集し、お気に入りのテキストエディタでコードを作成します。

5. 変更に満足したら、必要に応じてfreeCodeCampをローカルで実行して変更をプレビューする必要があります。

6. エラーを修正し、変更の書式を確認してください。

7. アップデートしているファイルを確認してください:

   ```console
   git status
   ```

   編集した `ステージされていない` ファイルのリストが表示されます。

   ```console
   ブランチのfeat/documentation
   あなたのブランチは 'upstream/feat/documentation' で最新です。

   コミットする変更:
   ("git reset HEAD <file>..."

   を使用して unstage)

       modified: CONTRIBUTING.md
       modified: docs/README.md
       modified: docs/how-to-setup-freecodecamp-locally.md
       modified: docs/how-to-work-on-guide-articles.md
   ```

8. 変更をステージングし、コミットを行います:

   このステップでは、自分で編集または追加したファイルのみをマークする必要があります。 必要に応じて変更しようとしなかったファイルをリセットして解決できます。

   ```console
   git add path/to/my/changed/file.ext
   ```

   または、 `ステージされていない` ファイルをすべてステージング領域に追加できます。

   ```console
   git add .
   ```

   ステージング領域に移動されたファイルのみが、コミットを行うときに追加されます。

   ```console
   git status
   ```

   出力:

   ```console
   ブランチのfeat/documentation
   あなたのブランチは 'upstream/feat/documentation' で最新です。

   to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

   これで、次のような短いメッセージで変更をコミットできます。

   ```console
   git commit -m "fix: my short commit message"
   ```

   いくつかの例:

   ```md
   fix: updating guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   オプション:

   従来のコミットメッセージを作成することを強くお勧めします。 これは、人気のあるオープンソースリポジトリで見ることができる良い方法です。 開発者として、これは標準的な慣行に従うことをお勧めします。

   従来のコミットメッセージの例は次のとおりです。

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript histing
   docs: update continue guidelines
   ```

   50文字以上ではなく、これらの短い文字を保持してください。 コミットメッセージの説明に追加情報をいつでも追加できます。

   これは、'updateファイル' や 'add index.md' のような型破りなメッセージよりも時間がかかりません。

   従来のコミットを使用すべき理由については、こちら [](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)をご覧ください。

9. コミットを作成した後にファイルを編集したり、コミットメッセージを更新したりする必要があることがわかった場合は、以下のようにファイルを編集できます:

   ```console
   git commit --amend
   ```

   これにより、 `nano` や `vi` のようなデフォルトのテキストエディタが開き、コミットメッセージのタイトルを編集し、説明を追加/編集することができます。

10. 次に、フォークに変更をプッシュできます:

    ```console
    git push origin branch/name-here
    ```

## プルリクエストを提案する (PR)

変更をコミットしたら、 [Pull Request](how-to-open-a-pull-request.md) を開く方法をここで確認してください。

## クイックコマンドの参照

ローカルで作業するときに必要なコマンドを簡単に参照します。

| (Command)                                                 | 説明                                                 |
| --------------------------------------------------------- | -------------------------------------------------- |
| `npm ci`                                                  | すべての依存関係をインストール/再インストールし、異なるサービスをブートストラップします。      |
| `npm run seed`                                            | すべてのチャレンジマークダウンファイルを解析し、MongoDBに挿入します。             |
| `npm run develop`                                         | freeCodeCamp APIサーバーとクライアントアプリケーションを起動します。         |
| `npm test`                                                | クライアント、サーバー、lint、チャレンジテストなど、システム内のすべてのJSテストを実行します。 |
| `npm run test:client`                                     | クライアントテストスイートを実行します。                               |
| `npm run test:カリキュラムの`                                    | カリキュラムテストスイートを実行します。                               |
| `npm run test:カリキュラム--block='Basic HTML and HTML5'`       | 特定のブロックをテストする                                      |
| `npm run test:カリキュラム--superblock='responsive-web-design'` | 特定の SuperBlock をテストします。                            |
| `npm run test-curriculum-full-output`                     | 最初のエラーが発生した後、保留せずにカリキュラムテストスイートを実行します              |
| `npm run test:server`                                     | サーバーテストスイートを実行します。                                 |
| `npm run e2e`                                             | サイプレスエンドを実行してテストを終了します。                            |
| `npm run clean`                                           | すべての依存関係をアンインストールし、キャッシュをクリーンアップします。               |

## トラブルシューティング

### 推奨される前提条件をインストールする際の問題

macOS 10.15以降、Ubuntu 18.04以降、Windows 10(WSL2)などの最新または最も人気のあるオペレーティングシステムを定期的に開発しています。

Google、Stack Overflow、Stack Exchangeなどのリソースに関する特定の問題を調査することをお勧めします。 誰かが同じ問題に直面し、あなたの特定のクエリに対する答えがすでにある可能性があります。

別の OS をお使いの場合や問題が解決しない場合は、 [ヘルプ](#getting-help) を参照してください。

> [!警告]
> 
> 前提条件の問題のためにGitHubの問題を作成しないでください。 彼らはこのプロジェクトの範囲外です。

### UI、フォント、ビルドエラーなどに関する問題。

UIで問題が発生した場合、フォントやビルドエラーが表示された場合、クリーンアップが便利です。

```console
npm run clean
npm ci
npm run seed
npm run develop
```

OR

ショートカットを使用

```
npm run clean-and-develop
```

ビルドで問題に直面し続ける場合は、ワークスペースのクリーンアップをお勧めします。

連動モードで `git clean` を使用します:

```
git clean -ifdX
```

<details>
   <summary>
      追跡されていないファイルを消去する方法（スクリーンショット）
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="追跡されていないファイルを削除する方法" />
</details>

### APIに関する問題 ログイン、チャレンジ提出など

ログインできない場合は、代わりにfreeCodeCampに報告されるというエラーメッセージが表示されます。 ローカルポート `3000` が別のプログラムで使用されていないことを再確認してください。

**Windows 上の Linux / macOS / WSL - 端末から:**

```console
netstat -ab | grep "3000"

tcp4 0 0 0.0.0.0:3000 DESKTOP LISTEN
```

**Windows上 - 高度なPowerShellから:**

```powershell
netstat -ab | Select-String "3000"

TCP 0.0.0.0:3000 DESKTOP LISTENING
```

### 依存関係のインストール中の問題

依存関係のインストール中にエラーが発生した場合。 ネットワークが制限されていないかファイアウォールの設定でリソースへのアクセスが妨げられないことを確認してください。

最初のセットアップには、ネットワーク帯域幅に応じて時間がかかることがあります。 それでも立ち往生している場合は、オフラインの設定ではなくGitPodを使用することをお勧めします。

## ヘルプを見る

あなたが立ち往生していると助けが必要な場合 フォーラム [の](https://forum.freecodecamp.org/c/contributors) 「コントリビューター」カテゴリまたはGitterの [コントリビューターチャットルーム](https://gitter.im/FreeCodeCamp/Contributors) でお知らせください。

ブラウザのコンソールにエラーが発生したり、問題を特定するのに役立つBash / Terminal / Command Lineでエラーが発生する可能性があります。 問題の説明にこのエラーメッセージを入力すると、他の人が問題をより簡単に特定し、解決策を見つけることができます。

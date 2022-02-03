これらのガイドラインに従い、ローカルシステム上に freeCodeCamp を設定してください。 定期的に貢献したい場合に、強くお勧めします。

コードベースやカリキュラムのバグを修正するなど、コントリビューションワークフローの中には、ローカルコンピュータ上で freeCodeCamp を実行する必要があるものがあります。

> [!TIP] freeCodeCamp のローカル設定に興味がない場合は、無料のオンライン開発環境である Gitpod の使用を検討してください。
> 
> [![Gitpod で開く](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (ブラウザで freeCodeCamp のコーディング開発準備ができている環境を起動します。)

### ローカルマシンを準備する方法

お使いのオペレーティングシステムの必須ソフトウェアをインストールすることから始めます。

私たちは、Linux または Unix ベースのシステムでの開発を主にサポートしています。 スタッフとコミュニティのコントリビューターは、Ubuntu と macOS にインストールされているツールを使用して、定期的にコードベースの作業をしています。

また、WSL2 を介した Windows 10 をサポートしており、[ガイド](how-to-setup-wsl.md) を読んで準備することができます。

コミュニティメンバーの中には、Git for Windows (Git Bash) や Windows にインストールされている他のツールを使用して、Windows 10でネイティブに開発する人もいます。 We do not have official support for such a setup at this time, we recommend using WSL2 instead.

#### 必要条件:

| 必要条件                                                                                    | バージョン   | 注記                                                                                       |
| --------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                            | `16.x`  | 「Active LTS」バージョンを使用しています。[LTS スケジュール](https://nodejs.org/en/about/releases/) を参照してください。 |
| npm (Nodeにバンドル)                                                                         | `8.x`   | Node.js Active LTS にバンドルされたバージョンを使用します。                                                  |
| [MongoDB コミュニティサーバー](https://docs.mongodb.com/manual/administration/install-community/) | `4.0.x` | -                                                                                        |

> [!ATTENTION] 異なるバージョンの場合は、推奨バージョンをインストールしてください。 推奨バージョンのインストールに関する問題のみサポートできます。 詳細は [troubleshooting](#troubleshooting) を参照してください。

Node.js がすでにマシンにインストールされている場合、以下のコマンドを実行してバージョンを検証します。

```console
node -v
npm -v
```

> [!TIP] 長期サポート (LTS) リリースとも呼ばれる、上記の安定版の最新リリースにアップデートすることを強くお勧めします。

必要条件をインストールしたら、開発環境を準備します。 これは多くの開発ワークフローに共通しており、一度だけこれを行う必要があります。

##### 以下の手順に従って、開発環境を準備してください。

1. インストール済みでない場合は、[Git](https://git-scm.com/) またはお気に入りの Git クライアントをインストールしてください。 最新バージョンにアップデートしてください。お使いの OS にバンドルされているバージョンが古い可能性があります。

2. (任意ですが推奨) GitHub 用の [SSH キーを設定](https://help.github.com/articles/generating-an-ssh-key/) します。

3. 選択したコードエディタをインストールします。

   [Visual Studio Code](https://code.visualstudio.com/) または [Atom](https://atom.io/) の使用を強くお勧めします。 これらは優れた、無料のオープンソースコードエディタです。

4. コードエディターのリンティングを設定します。

   [エディターでの ESLint 実行](http://eslint.org/docs/user-guide/integrations.html) を入手してください。[freeCodeCamp の JavaScript スタイルガイド](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121) に準拠していないものを強調表示できます。

   > [!TIP] リンティングエラーを無視しないでください。 これらは **サポート** し、クリーンでシンプルなコードベースを確保するためのものです。

## GitHub でリポジトリをフォークする

[フォーク](https://help.github.com/articles/about-forks/) とは Github 上に freeCodeCamp メインリポジトリ (別名 _repo_) のコピーを自分用に用意するステップです。

これは、GitHub 上の freeCodeCamp のコピーで作業できるようにするために、またリポジトリをダウンロード (クローン) しローカルで作業するために不可欠です。 後で、プルリクエスト (PR) を介して、フォークからメインリポジトリにプルされるように変更をリクエストできます。

> [!TIP] `https://github.com/freeCodeCamp/freeCodeCamp` のメインリポジトリは、よく `upstream` リポジトリと呼ばれます。
> 
> `https://github.com/YOUR_USER_NAME/freeCodeCamp` のフォークは、しばしば `origin` リポジトリと呼ばれます。 `YOUR_USER_NAME` は、GitHub のユーザーネームに置き換えられます。

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

[クローン作成](https://help.github.com/articles/cloning-a-repository/) とは、自分または他の誰かが所有しているリポジトリのコピーを、`remote` の場所から **ダウンロード** することです。 自分の場合は、この remote の場所は freeCodeCamp のリポジトリの `fork`で、`https://github.com/YOUR_USER_NAME/freeCodeCamp` で入手可能です。 `YOUR_USER_NAME` は、GitHub のユーザーネームに置き換えられます。

> [!WARNING] WSL2 Linux Distro上で作業している場合、Windows と WSL2 の間で共有されているフォルダ内でこのプロジェクトを動作させることで、性能と安定性の Issue が発生するかもしれません (例えば `/mnt/c/Users/`)。 したがって、このリポジトリを、Windows と直接共有するフォルダではなく、主に自分の WSL2 Linux Distro で使用するフォルダに、クローンを作成することをお勧めします (例: `~/PROJECTS/`)。
> 
> この問題の詳細については、 [GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) を参照してください。

以下のコマンドをローカルマシンで実行します。

1. Terminal / Command Prompt / Shell をプロジェクトディレクトリで開きます。

   _例: `/yourprojectsdirectory/`_

2. `YOUR_USER_NAME` を GitHub のユーザーネームに置き換えて、freeCodeCamp のフォークのクローンを作成します。

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

これで、freeCodeCamp リポジトリ全体がプロジェクトディレクトリにダウンロードされます。

注: `--depth=1` は、最新の履歴 / コミットのみでフォークのシャロ―クローンを作成します。

## 親からの同期を設定する

フォークのコピーをダウンロードしたので、親リポジトリに `upstream` リモートを設定する必要があります。

[前述](#fork-the-repository-on-github) のように、メインリポジトリは `upstream` リポジトリと呼ばれています。 自身のフォークは `origin` リポジトリと呼ばれています。

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

問題が発生した場合は、まず Web 検索を実行し、すでに解決済みであるかどうかを確認します。 解決策が見つからない場合、[GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues) ページを検索し、まだ報告されていない Issue を報告してください。

そして、[フォーラムの「Contributors」カテゴリ](https://forum.freecodecamp.org/c/contributors) または [チャットサーバー](https://chat.freecodecamp.org/home) へいつでもお気軽にお問い合わせください。

> [!TIP] ファイルを編集するだけの場合は、freeCodeCamp のローカルでの実行をスキップしてもかまいません。 例えば、`rebase` の実行や、`merge` の競合の解決です。
> 
> 後からいつでもこちらの手順に戻ることができます。 自分のマシンでアプリを実行する必要がない場合は、このステップ **のみ** スキップしてください。
> 
> [変更を加えるへスキップ](#making-changes-locally) します。

### 依存関係を設定する

#### ステップ 1: 環境変数ファイルを設定する

デフォルトの API キーと環境変数は、`sample.env` ファイルの中に格納されています。 このファイルは、インストールの段階で動的にアクセスされる `.env` という名前の新しいファイルにコピーする必要があります。

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

`.env` ファイル内のキーは、ローカルでアプリを動作させるのであれば、変更する必要は _ありません_。 `sample.env` からコピーされたデフォルト値をそのままにしておくことができます。

> [!TIP] Auth0 または Algolia のようなサービスを使用する場合は、これらのサービスのために自分の API キーを取得し、`.env` ファイル内で項目を編集する必要があります。

#### ステップ 2: 依存関係をインストールする

このステップで、アプリケーションを動作させるために必要な依存関係をインストールします。

```console
npm ci
```

#### ステップ 3: MongoDBを起動し、データベースをシードする

ローカルでアプリケーションを実行できるようにする前に、MongoDB サービスを開始する必要があります。

> [!NOTE] デフォルトと異なった設定で MongoDB を動作させない限りは、`.env` ファイル内に `MONGOHQ_URL` の値として格納された URL はうまく機能するはずです。 カスタム設定を使用している場合は、必要に応じてこの値を変更します。

別のターミナルで MongoDB サーバーを起動します。

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

  <!-- tabs:end -->

必ず `3.6` をインストールしたバージョンに置き換えてください。

> [!TIP] MongoDBをバックグラウンドサービスとしてインストールすることで、毎回起動する必要がなくなります。 [お使いのOSに関するドキュメント](https://docs.mongodb.com/manual/administration/install-community/) で詳細を確認できます。

次に、データベースをシードします。 このステップでは、サービスに必要な初期データセットを MongoDB サーバーに入れる以下のコマンドを実行します。 これらはいくつかのスキーマを含みます。

```console
npm run seed
```

#### ステップ 4: freeCodeCamp クライアントアプリケーションと API サーバーを起動する

API サーバーとクライアントアプリケーションを起動できるようになりました。

```console
npm run develop
```

この単一コマンドは、APIサーバーや利用可能なクライアントアプリケーションを含むすべてのサービスを起動します。

> [!TIP] 準備が整ったら、Web ブラウザを開いて **<http://localhost:8000>** をご覧ください。 アプリがロードされたとしたら、すべての準備ができているということです。おめでとうございます！ これで、freeCodeCamp の学習プラットフォーム全体のコピーがローカルマシン上で実行されます。

> [!TIP] API サーバーは、API を `http://localhost:3000` で提供します。 Gatsby アプリは、クライアントアプリケーションを `http://localhost:8000` で提供します

> <http://localhost:3000/explorer> にアクセスすると、利用可能な API が表示されます。

## ローカルユーザーでサインインする

ローカル設定では自動的にデータベース内にローカルユーザーを追加します。 `Sign In` ボタンをクリックすると、ローカルアプリケーションへの認証が自動的に行われます。

ただし、ユーザーポートフォリオページにアクセスするのは少し難しいです。 開発中 Gatsby は、クライアント側のページにサービスを引き継ぎ、ローカルで作業する際に、ユーザーポートフォリオの `404` ページを取得します。

**「Preview Custom 404 Page」** ボタンをクリックするだけで、正しいページに移動します。

<details>
   <summary>
      ローカル作業時のサインイン方法 (スクリーンショット)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="ローカルで作業している時にサインインする方法" />
</details>

## ローカルで変更を行う

ファイルに変更を加え、フォークのローカルクローンに変更を反映できるようになりました。

以下の手順に従ってください。

1. `main` ブランチにいることを確認します。

   ```console
   git status
   ```

   次のような出力になるはずです。

   ```console
   On branch main
   Your branch is up-to-date with 'origin/main'.

   nothing to commit, working directory clean
   ```

   main にいない場合や作業ディレクトリがクリーンでない場合は、未処理のファイル / コミットを処理し、`main`をチェックアウトします。

   ```console
   git checkout main
   ```

2. freeCodeCamp の upstream `main` ブランチからローカルの main ブランチへと最新の変更を同期させます。

   > [!WARNING] フォークの `main` ブランチから行った未処理のプルリクエストがある場合は、このステップの最後にそれらを失うことになります。
   > 
   > このステップを実行する前に、プルリクエストがモデレータによってマージされていることを確認します。 このシナリオを回避するには、**常に** `main` 以外のブランチで作業する必要があります。

   このステップで、freeCodeCamp の main リポジトリからの **最新の変更を同期** させます。 競合を回避するために、できるだけ頻繁に最新の `upstream/main` の上に、自分のブランチをリベースすることが重要です。

   freeCodeCamp upstream リポジトリのローカルコピーを更新します。

   ```console
   git fetch upstream
   ```

   freeCodeCamp main で main ブランチをハードリセットします。

   ```console
   git reset --hard upstream/main
   ```

   GitHub 上のフォークにクリーンな履歴を表示するには、main ブランチを origin にプッシュします。

   ```console
   git push origin main --force
   ```

   diff を実行することにより、現在の main が upstream/main と一致することを確認できます。

   ```console
   git diff upstream/main
   ```

   出力結果は空になるはずです。

3. 新しいブランチを作成します。

   それぞれの Issue に対して別のブランチで作業することは、ローカル作業のコピーをクリーンに保つのに役立ちます。 `main` では作業しないでください。 これは freeCodeCamp の自分のコピーを汚してしまい、新たなクローンやフォークからやり直さなくてはならない可能性があります。

   前述したように `main` にいることを確認して、そこからブランチに進んでください。

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   ブランチ名は `fix/`、 `feat/`、 `docs/`などで始まる必要があります。 ブランチ内で Issue 番号の使用は避けてください。 短く、意味のあり、固有な名前にします。

   適切なブランチ名の例は、次のとおりです。

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. ページを編集し、お気に入りのテキストエディタでコードを作成します。

5. 満足のいく変更が完成したら、必要に応じて freeCodeCamp をローカルで実行して変更をプレビューします。

6. エラーを修正し、変更のフォーマットを確認してください。

7. アップデートするファイルを確認します。

   ```console
   git status
   ```

   編集した `unstaged` のファイルリストが表示されます。

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes were not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in the working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. 変更をステージし、コミットします。

   このステップでは、自分で編集または追加したファイルのみをマークする必要があります。 必要に応じて、変更するつもりではなかったファイルを、リセットして解決できます。

   ```console
   git add path/to/my/changed/file.ext
   ```

   `unstaged` のファイルをすべて、ステージングエリアに追加することもできます。

   ```console
   git add .
   ```

   ステージングエリアに移されたファイルのみが、コミットを行うときに追加されます。

   ```console
   git status
   ```

   出力:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   これで、次のような短いメッセージで変更をコミットできます。

   ```console
   git commit -m "fix: my short commit message"
   ```

   例:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   オプション:

   慣習的なコミットメッセージを作ることを強くお勧めします。 これは、人気のあるオープンソースリポジトリで見ることができる良い方法です。 開発者として、この標準的な慣行に従うことをお勧めします。

   従来のコミットメッセージの例は次のとおりです。

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   50文字未満の短い文にします。 コミットメッセージの説明にいつでも追加の情報を加えることができます。

   こうすることで、「updateファイル」や「add index.md」のような型破りなメッセージよりも時間がかかりません。

   慣習的なコミットを使用すべき理由については、[こちら](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits) をご覧ください。

9. コミットを行った後にファイルを編集したりコミットメッセージを更新する必要があることに気づいた場合は、以下のようにファイルを編集できます。

   ```console
   git commit --amend
   ```

   これにより、`nano` や `vi` のようなデフォルトのテキストエディタが開き、コミットメッセージのタイトルを編集したり、説明を追加／編集したりすることができます。

10. 次に、フォークに変更をプッシュできます。

    ```console
    git push origin branch/name-here
    ```

## プルリクエストを提案する (PR)

変更をコミットし終えた後に、[プルリクエストを開く方法](how-to-open-a-pull-request.md) をここで確認してください。

## クイックコマンドリファレンス

ローカルで作業する時に必要なコマンドのクイックリファレンスです。

| コマンド                                                           | 説明                                                    |
| -------------------------------------------------------------- | ----------------------------------------------------- |
| `npm ci`                                                       | すべての依存関係をインストール/再インストールし、異なるサービスをブートストラップします。         |
| `npm run seed`                                                 | すべてのチャレンジのマークダウンファイルを解析し、MongoDB に挿入します。              |
| `npm run develop`                                              | freeCodeCamp の API サーバーとクライアントアプリケーションを起動します。         |
| `npm run storybook`                                            | コンポーネントライブラリ開発のためのストーリーブックを起動します。                     |
| `npm test`                                                     | クライアント、サーバー、lint、チャレンジテストを含むシステム内で、すべての JS テストを実行します。 |
| `npm run test-client`                                          | クライアントテストスイートを実行します。                                  |
| `npm run test:curriculum`                                      | カリキュラムテストスイートを実行します。                                  |
| `npm run test:curriculum --block='Basic HTML and HTML5'`       | 特定のブロックをテストします。                                       |
| `npm run test:curriculum --superblock='responsive-web-design'` | 特定のスーパーブロックをテストします。                                   |
| `npm run test-curriculum-full-output`                          | 最初のエラーが発生した後、終了せずにカリキュラムテストスイートを実行します。                |
| `npm run test-server`                                          | サーバーテストスイートを実行します。                                    |
| `npm run e2e`                                                  | Cypress エンドツーエンドテストを実行します。                            |
| `npm run clean`                                                | すべての依存関係をアンインストールして、キャッシュをクリーンアップします。                 |

## トラブルシューティング

### 推奨される必要条件をインストールする際の問題

通常 macOS 10.15 以降、Ubuntu 18.04 以降、Windows 10 (WSL2) のような、最新または最も一般的なオペレーティングシステムで開発しています。

Google、Stack Overflow、Stack Exchange などのリソースに関する特定の問題を調べることをお勧めします。 誰かが同じ問題に直面していて、すでに具体的な質問に対する回答が存在する可能性があります。

別の OS をお使いの場合や問題が解決しない場合は、[ヘルプ](#getting-help) を参照してください。

> [!WARNING]
> 
> 必要条件の問題のために GitHub issue を作成しないでください。 それらはこのプロジェクトの範囲外です。

### UI、フォント、ビルドエラーなどに関する問題

UI やフォントに関する問題またはビルドエラーには、クリーンアップが役立ちます。

```console
npm run clean
npm ci
npm run seed
npm run develop
```

もしくは

ショートカットを使用することもできます。

```
npm run clean-and-develop
```

それでも、ビルドに関する問題が解決しない場合は、ワークスペースのクリーンアップを推奨します。

対話モードで `git clean` を使用してください。

```
git clean -ifdX
```

<details>
   <summary>
      追跡されていない git ファイルをクリーンアップする方法（スクリーンショット）
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="追跡されていない git ファイルをクリーンアップする方法" />
</details>

### API、ログイン、チャレンジ提出などに関する問題

サインインできず、「freeCodeCamp に報告されます」というエラーメッセージが表示される場合、ローカルポート `3000` が別のプログラムで使用されていないことを再確認してください。

<!-- tabs:start -->

#### **macOS／Linux／Windows 上の WSL - 端末から:**

```console
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```

#### **Windows - 管理者権限で起動したパワーシェルから:**

```powershell
netstat -ab | Select-String "3000"

TCP    0.0.0.0:3000           DESKTOP      LISTENING
```

<!-- tabs:end -->

---

### Issues installing dependencies

依存関係のインストール中にエラーが発生した場合、ネットワークが制限されていないこと、またはファイアウォール設定でリソースへのアクセスが妨げられていないことを確認してください。

最初の設定では、ネットワーク帯域幅に応じて時間がかかることがあります。 それでも設定できない場合は、オフライン設定ではなく GitPod を使用することを推奨します。

> [!NOTE] M1 チップのある Apple Devices を使用してアプリケーションをローカルで実行する場合は、Node v14.7 以上を使用することをお勧めします。 さもなければ、Sharp のような依存関係に関連する問題が発生する可能性があります

## ヘルプ

問題がありサポートが必要な場合は、[フォーラムの「Contributors」カテゴリ](https://forum.freecodecamp.org/c/contributors) または [contributors チャットルーム](https://chat.freecodecamp.org/channel/contributors)でお気軽にお尋ねください。

ブラウザのコンソールやBash／ターミナル／コマンドラインで、問題を特定するのに役立つエラーが表示されている可能性があります。 問題の説明にこのエラーメッセージを提供することで、他の人がより簡単に問題を特定し、解決策を見つけることができます。

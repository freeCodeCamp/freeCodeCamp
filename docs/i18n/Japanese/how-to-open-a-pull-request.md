# プルリクエストを開く方法 (PR)

プルリクエストを使用すると、GitHubのフォークからfreeCodeCamp.orgのメインリポジトリに変更を送信することができます。 コードを変更したり、コードを変更したり、課題をコーディングしたりしたら、これらのガイドラインに従ってPRを送信する必要があります。

## 良いPRタイトルを用意する

コミットやプルリクエストには、従来のタイトルとメッセージ [](https://www.conventionalcommits.org/) を使用することをお勧めします。 規約には以下の形式があります。

> `<type>([optional scope(s)]: <description>`
> 
> 例:
> 
> `fix(learn): do...while ループチャレンジのテスト`

プルリクエスト(PR)を開くときは、以下を使用してタイプ、スコープ(オプション)、説明を決定できます。

**タイプ:**

| タイプ    | 選択した時                            |
|:------ |:-------------------------------- |
| 修正     | 機能の変更または更新/改善、テスト、レッスンの検証など。     |
| feat   | 新しい機能、テストなどを追加している場合にのみ。         |
| <unk>  | レッスンのコード、テスト、または検証に関連しない変更。      |
| ドキュメント | `/docs` ディレクトリまたは貢献ガイドラインなどへの変更。 |

**スコープ:**

You can select a scope from [this list of labels](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**説明:**

短く(30文字未満)しておき、簡単にPR記述ボックスとコメントに詳細情報を追加できます。

良いPRのタイトルの例としては、次のようなものがあります。

- `fix(a11y): 検索バーのコントラストを改善`
- `feat: html と css のチャレンジにテストを追加する`
- `fix(api,client): フォーム送信時の CORS エラーの防止`
- `docs(i18n):ローカル設定の中国語翻訳`

## プルリクエストを提案する

1. 編集がコミットされると、フォークの GitHub ページにプルリクエストを作成するように求められます。

   ![画像 - GitHub でプルリクエストのプロンプトを比較](./images/github/compare-pull-request-prompt.png)

2. デフォルトでは、すべてのプルリクエストはfreeCodeCampメインリポジトリ、 `master` ブランチに反する必要があります。

   Pull Requestを上げるときは、Base ForkがfreeCodeCamp/freeCodeCampに設定されていることを確認してください。

   ![画像 - プルリクエストを作成する際のフォークの比較](./images/github/comparing-forks-for-pull-request.png)

3. あなたのブランチからfreeCodeCampの `マスター` ブランチにプルリクエストを送信してください。

4. PRの本文には、あなたが行った変更とその理由の詳細な概要が含まれています。

   - プルリクエストテンプレートが表示されます。 これはプルリクエストを開く前にフォローすべきチェックリストです。

   - 必要に応じて詳細を記入してください。 この情報は審査され、査読者はあなたのプルリクエストが受け入れられるかどうかを決定します。

   - PRが既存のGitHubのIssueに対処することを意図している場合は、 PRの説明本文の末尾にあります。 キーワード を使用する _発行番号で_ を閉じて、PR が受け入れられてマージされた場合、 [自動的に発行を終了する](https://help.github.com/en/articles/closing-issues-using-keywords)。

     > 例: `Closes #123` will close issue 123

5. サイトのローカルコピーでテストしたかどうかを示します。

   これは、ドキュメントやチャレンジの説明のようなテキストコンテンツを編集するだけでなく、変更を加えるときに非常に重要です。 ローカルテストを必要とする変更の例としては、ページの機能やレイアウトを変更できる JavaScript、CSS、HTML などがあります。

## プルリクエストへのフィードバック

> おめでとうございます おめでとうございます :tada: さんがPRをしてくれて、時間をかけて貢献してくれてありがとうございます。

モデレータは今見て、あなたにフィードバックを残します。 仲間のモデレータに我慢して、時間を尊重してください。 すべてのプルリクエストはコースでレビューされます。

サポートが必要な場合は、 [チャットルーム](https://gitter.im/FreeCodeCamp/Contributors)でご相談ください。

> [!TIP] If you are to be contributing more pull requests, we recommend you read the [making changes and syncing](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) guidelines to avoid having to delete your fork.

## プルリクエストで競合しています

コンフリクトは、リポジトリ上で多くのコントリビューターが動作し、変更がレビューとマージを保留中のPRを破る可能性があるために発生する可能性があります。

多くの場合、あなたがリベースを必要としないことがあります。 なぜなら、私たちはすべてのコミットをスカッシュするからです。 だがここでリベースを要求されたら お前がやるべきことだ

### 通常のバグ修正と機能について

私たちの開発ブランチ `master`の定期的なバグや機能に取り組んでいる場合は、簡単なリベースを行うことができます。

1. ローカルコピーをリベース:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream master
   ```

2. 競合を解決し、コミットの追加/編集

   ```console
   #
   git add のいずれか。
   #
   git add のいずれか。
   git commit -m "care: resolve conflicts"

   # または
   git add .
   git commit --amend -no-edit
   ```

3. 変更を PR に押し戻します

   ```console
   git push --force origin <pr-branch>
   ```

### 今後のカリキュラムと機能について

今後のカリキュラム `next-*` ブランチの機能に取り組んでいる場合は、チェリーピックを行ってください:

1. あなたのアップストリームがあなたのローカルと同期していることを確認してください:

   ```console
   git checkout master
   git fetch -all --prune
   git checkout next-python-project
   git reset --hard upstream/next-python-project
   ```

2. バックアップを取る

   a a バックアップを取った後にローカルブランチを削除します(ローカルにまだある場合):

      ```console
      git checkout <pr-branch-name>

      # example:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # example:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   B B または、pr ブランチのバックアップだけです(ローカルに持っていない場合):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # 例:
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. クリーンスレートで始めましょう：

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. 競合を解決し、クリーンアップ、実行テストのインストール

   ```console
   npm run clean

   npm ci
   npm run test:カリキュラム--superblock=<superblock-name>

   # example:

   # npm run test:カリキュラム-superblock=python-for-everyone

   ```

6. すべてがPRに戻って良いプッシュに見える場合

   ```console
   git push --force origin <pr-branch-name>
   ```

# プルリクエストを開く方法 (PR)

プルリクエスト (PR) を使用すると、GitHubのフォークから freeCodeCamp.org のメインリポジトリに変更を送信できます。 コードを変更したら、以下のガイドラインに従ってPRを開くことができます。

> [!NOTE] PR は英語で書きます。 翻訳に貢献する方法については、[こちら](index.md#translations) をご覧ください。

## 良いPRタイトルを用意する

コミットやプルリクエストには、 [規約に沿ったタイトルやメッセージ](https://www.conventionalcommits.org/) を使用することをお勧めします。 規約には以下の形式があります。

> `<type>([optional scope(s)]): <description>`
> 
> 例えば、次のようになります。
> 
> `fix(learn): tests for the do...while loop challenge`

プルリクエスト (PR) をオープンする際、以下を使用して、その種類、スコープ (任意)、説明を決定することができます。

**種類:**

| 種類    | 選択するタイミング                        |
|:----- |:-------------------------------- |
| fix   | 機能、テスト、レッスン等の変更または更新／改善時         |
| feat  | 新しい機能、テストなどの追加時のみ                |
| chore | レッスンのコード、テスト、または検証に関連しない変更時      |
| docs  | `/docs` ディレクトリまたは貢献ガイドラインなどへの変更時 |

**スコープ:**

[ラベルリスト](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope) からスコープを選択できます。

**説明:**

簡潔に (30文字未満) 記述します。PR の説明欄やコメントに詳細情報を追加できます。

良い PR のタイトルの例としては、次のようなものがあります。

- `fix(a11y): improved search bar contrast`
- `feat: add more tests to HTML and CSS challenges`
- `fix(api,client): prevent CORS errors on form submission`
- `docs(i18n): Chinese translation of local setup`

## プルリクエストを提案する

1. 編集がコミットされると、フォークの GitHub ページにプルリクエストを作成するように求められます。

   ![Image - Compare & pull request prompt on GitHub](https://contribute.freecodecamp.org/images/github/compare-pull-request-prompt.png)

2. デフォルトで、プルリクエストはすべて freeCodeCamp メインリポジトリ、`main` ブランチに対して行います。

   プルリクエストを上げるときは、Base Fork が freeCodeCamp/freeCodeCamp に設定されていることを確認してください。

   ![画像 - プルリクエストを作成する際にフォークを比較する](https://contribute.freecodecamp.org/images/github/comparing-forks-for-pull-request.png)

3. ブランチから freeCodeCamp の `main` ブランチへ、プルリクエストを送信します。

4. PR の本文には、行った変更とその理由の詳細情報を記述してください。

   - プルリクエストテンプレートが表示されます。 これはプルリクエストを開く前に行うべきチェックリストです。

   - 必要に応じて詳細を記入します。 この情報はレビューされ、レビュアーがプルリクエストを受け入れるかどうかを決定します。

   - PR が既存の GitHub Issue に対処するものである場合、PR 説明本文の最後に、キーワード _Closes_ と Issue 番号を使用して、[ PR が承認されマージされたら、その Issue が自動的にクローズされるようにします](https://help.github.com/en/articles/closing-issues-using-keywords)。

     > 例: `Closes #123` と記入すると、Issue 123 がクローズされます。

5. サイトのローカルコピーでテスト済みかどうかを表示します。

   - これは、ドキュメントやチャレンジの説明のようなテキストコンテンツを編集するだけでなく、変更を加える場合に、非常に重要です。 ローカルテストを必要とする変更の例としては、ページの機能やレイアウトを変更する可能性のある JavaScript、CSS、または HTML などが挙げられます。

   - PR がページの動作に影響を与える場合は、対応する [Cypress 統合テスト](how-to-add-cypress-tests.md) も追加する必要があります。

## プルリクエストへのフィードバック

> おつかれさまでした！ :tada: PR を作成し、時間をかけて貢献してくださったことに心から感謝します。

モデレータが内容を見て、フィードバックします。 仲間のモデレータの時間を尊重し、しばらくお待ちください。 すべてのプルリクエストは、いずれレビューされます。

[フォーラムの「Contributors」 カテゴリー](https://forum.freecodecamp.org/c/contributors) もしくは [Contributors チャットルーム](https://chat.freecodecamp.org/channel/contributors) へいつでもお気軽にお問合せください。

> [!TIP] 他のプルリクエストも提供する場合は、フォークの削除を避けるため、[変更と同期](how-to-setup-freecodecamp-locally.md#making-changes-locally) ガイドラインをご覧になることを推奨します。

## プルリクエストでの競合

リポジトリ上で多くのコントリビューターが作業し、レビューとマージの保留中であるPRを壊す可能性がある変更が発生することで、競合が起こります。

大半の場合、リベースを必要としないかもしれません。すべてのコミットをスカッシュしているからです。しかしながら、リベースが要求された場合、以下を実行する必要があります。

### 通常のバグ修正と機能について

開発ブランチ `main` の通常のバグや機能に取り組んでいる場合は、簡単なリベースを行うことができます。

1. ローカルコピーをリベースする

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream main
   ```

2. 競合を解決し、コミットを追加/編集する

   ```console
   # Either
   git add .
   git commit -m "chore: resolve conflicts"

   # Or
   git add .
   git commit --amend --no-edit
   ```

3. 変更を PR に押し戻す

   ```console
   git push --force origin <pr-branch>
   ```

### 今後のカリキュラムと機能について

今後のカリキュラム `next-*` ブランチの機能に取り組んでいる場合は、Cherry Pick を行う必要があります。

1. アップストリームがローカルと同期していることを確認する

   ```console
   git checkout main
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. バックアップを取る

   a. バックアップ後に、ローカルブランチを削除する (ローカルにまだある場合):

   ```console
   git checkout <pr-branch-name>

   # example:
   # git checkout feat/add-numpy-video-question

   git checkout -b <backup-branch-name>

   # example:
   #  git checkout -b backup-feat/add-numpy-video-question

   git branch -D <pr-branch-name>
   ```

   b. または、PR ブランチのバックアップのみを行う (ローカルにない場合):

   ```console
   git checkout -b <backup-branch-name> origin/<pr-branch-name>

   # example:
   #  git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
   ```

3. クリーンスレートで始める

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

4. 競合を解決し、クリーンアップし、実行テストをインストールする

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # example:

   # npm run test:curriculum --superblock=python-for-everybody

   ```

5. すべてがうまくいっているようであれば、PRに押し戻す

   ```console
   git push --force origin <pr-branch-name>
   ```

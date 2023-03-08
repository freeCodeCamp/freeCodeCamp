# プルリクエストを開く方法 (PR)

プルリクエスト (PR) を使用すると、GitHubのフォークから freeCodeCamp.org のメインリポジトリに変更を送信できます。 コードを変更したら、以下のガイドラインに従ってPRを開くことができます。

We expect our contributors to be aware of the process specific to this project. Following the guidelines religiously earns you the respect of fellow maintainers and saves everyone time.

Some examples of this are:

1. Do not edit files directly through GitHub – while you can, it's not a good idea.
2. Make sure you follow the PR checklist and not just tick things off; otherwise, we won't take you seriously.
3. Use the correct way to link issues in the description of the PR by updating the `XXXXXX`. Do not just add issue numbers everywhere and anywhere you feel like.
4. Do not "@mention" or request someone for reviews too many times.

   We understand you are excited about contributing. As much as a maintainer will love to get back to you, they are busy people looking after hundreds of requests just like yours. Be patient, someone will get to you sooner or later.

5. Do not work directly off your `main` branch - create a new branch for the changes you are working on.

> [!NOTE] Your PR should be targeting changes to the English curriculum only. Read [this guide](index.md#translations) instead for contributing to translations.

## 良いPRタイトルを用意する

We recommend using [conventional title and messages](https://www.conventionalcommits.org/) for commits and pull request. The convention has the following format:

> `<type>([optional scope(s)]): <description>`
> 
> 例えば、次のようになります。
> 
> `fix(learn): tests for the do...while loop challenge`

Whenever you open a Pull Request(PR), you can use the below to determine the type, scope (optional), and description.

**Type:**

| 種類    | 選択するタイミング                        |
|:----- |:-------------------------------- |
| fix   | 機能、テスト、レッスン等の変更または更新 / 改善時       |
| feat  | 新しい機能、テストなどの追加時のみ                |
| chore | レッスンのコード、テスト、または検証に関連しない変更時      |
| docs  | `/docs` ディレクトリまたは貢献ガイドラインなどへの変更時 |

**Scope:**

You can select a scope from [this list of labels](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Description:**

Keep it short (less than 30 characters) and simple; you can add more information in the PR description box and comments.

Some examples of good PR titles would be:

- `fix(a11y): improved search bar contrast`
- `feat: add more tests to HTML and CSS challenges`
- `fix(api,client): prevent CORS errors on form submission`
- `docs(i18n): fix links to be relative instead of absolute`

## プルリクエストを提案する

1. Once the edits have been committed, you will be prompted to create a pull request on your fork's GitHub Page.

   <details>
   <summary>See screenshot</summary>

   ![Image - Compare & pull request prompt on GitHub](https://contribute.freecodecamp.org/images/github/compare-pull-request-prompt.png)

   </details>

2. By default, all pull requests should be against the freeCodeCamp main repo, `main` branch.

   Make sure that your Base Fork is set to freeCodeCamp/freeCodeCamp when raising a Pull Request.

   <details>
   <summary>See screenshot</summary>

   ![Image - Comparing forks when making a pull request](https://contribute.freecodecamp.org/images/github/comparing-forks-for-pull-request.png)

   </details>

3. Submit the pull request from your branch to freeCodeCamp's `main` branch.

4. Include a more detailed summary of the changes you made and how your changes are helpful in the body of your PR.

   - プルリクエストテンプレートが表示されます。 これはプルリクエストを開く前に行うべきチェックリストです。

   - 必要に応じて詳細を記入します。 この情報はレビューされ、レビュアーがプルリクエストを受け入れるかどうかを決定します。

   - PR が既存の GitHub Issue に対処するものである場合、PR 説明本文の最後に、キーワード _Closes_ と Issue 番号を使用して、[ PR が承認されマージされたら、その Issue が自動的にクローズされるようにします](https://help.github.com/en/articles/closing-issues-using-keywords)。

     > 例: `Closes #123` と記入すると、Issue 123 がクローズされます。

5. Indicate if you have tested on a local copy of the site or not.

   - これは、ドキュメントやチャレンジの説明のようなテキストコンテンツを編集するだけでなく、変更を加える場合に、非常に重要です。 ローカルテストを必要とする変更の例としては、ページの機能やレイアウトを変更する可能性のある JavaScript、CSS、または HTML などが挙げられます。

   - PR がページの動作に影響を与える場合は、対応する [Cypress 統合テスト](how-to-add-cypress-tests.md) も追加する必要があります。

## プルリクエストへのフィードバック

> :tada: PR の作成おめでとうございます。時間をかけて貢献してくださったことに心から感謝します。

Our moderators will now take a look and leave you feedback. Please be patient with the fellow moderators and respect their time. All pull requests are reviewed in due course.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).

> [!TIP] 他のプルリクエストも提供する場合は、フォークの削除を避けるため、[変更と同期](how-to-setup-freecodecamp-locally.md#ローカルで変更を行う) のガイドラインをご覧になることを推奨します。

## プルリクエストでの競合

Conflicts can arise because many contributors work on the repository, and changes can break your PR which is pending a review and merge.

More often than not you may not require a rebase, because we squash all commits, however, if a rebase is requested, here is what you should do.

### 通常のバグ修正と機能について

When you are working on regular bugs and features on our development branch `main`, you are able to do a simple rebase:

1. Rebase your local copy:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream main
   ```

2. Resolve any conflicts and add / edit commits

   ```console
   # Either
   git add .
   git commit -m "chore: resolve conflicts"

   # Or
   git add .
   git commit --amend --no-edit
   ```

3. Push back your changes to the PR

   ```console
   git push --force origin <pr-branch>
   ```

### 今後のカリキュラムと機能について

When you are working on features for our upcoming curriculum `next-*` branches, you have to do a cherry pick:

1. Make sure your upstream comes in sync with your local:

   ```console
   git checkout main
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Take backup

   a. Either delete your local branch after taking a backup (if you still have it locally):

   ```console
   git checkout <pr-branch-name>

   # example:
   # git checkout feat/add-numpy-video-question

   git checkout -b <backup-branch-name>

   # example:
   #  git checkout -b backup-feat/add-numpy-video-question

   git branch -D <pr-branch-name>
   ```

   b. Or just a backup of your pr branch (if you do not have it locally):

   ```console
   git checkout -b <backup-branch-name> origin/<pr-branch-name>

   # example:
   #  git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
   ```

3. Start off with a clean slate:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

4. Resolve any conflicts, cleanup, install dependencies and run tests

   ```console
   pnpm run clean

   pnpm install
   FCC_SUPERBLOCK='<superblock-name>' pnpm run test:curriculum 

   # example:

   # FCC_SUPERBLOCK='python-for-everybody' pnpm run test:curriculum

   ```

5. If everything looks good push back to the PR

   ```console
   git push --force origin <pr-branch-name>
   ```

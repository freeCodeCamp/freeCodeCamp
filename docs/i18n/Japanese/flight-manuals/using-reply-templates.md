# 返信テンプレートを使用する

これらは、プルリクエストやトリアージの問題を確認する際に使用する標準的な返信テンプレートの一部です。

> GitHub のビルトインの [**Saved replies**](https://github.com/settings/replies/) 機能を使用するか、以下の機能を使用します。

### ありがとうございます

```markdown
このページへの貢献ありがとうございます！ 👍
私たちは喜んでこれらの変更を受け入れ、将来の貢献を楽しみにしています。 🎉
```

### ありがとうございました

> 初めてのコントリビューターに感謝し、励まします。

```markdown
こんにちは、@usernameさん。 初めてのプルリクエスト(PR)おめでとうございます！ 🎉

ページへの貢献ありがとうございます！ 👍
私たちは喜んでこれらの変更を受け入れ、将来の貢献を楽しみにしています。 📝
```

### ビルドエラー

```markdown
@username さん

変更をマージしたいのですが、Travis CIビルドでエラーが発生したようです。 ⚠️

これらの問題を解決すると、PRを確認してマージすることができます。 😊

--

> format@@3(https://github) このリポジトリの om/freeCodeCamp/freeCodeCamp#article-title) で記事を正しくフォーマットすることで、Travis CIのビルドパスを作成できます。 ✅
>
> また、PRを作成する際に変更の簡単な説明をGitHubで書くことをお勧めします。 📝
```

### フォークを同期中

> PRが `master` ブランチで最新でない場合。

``````markdown
@username さん

変更をマージしたいのですが、Travis CIビルドでエラーが発生したようです。 ⚠️

```bash
Error: ENOTDIR: not a directory, open 'src/pages/java/data-abstraction/index.md'
``````

この特定のエラーはファイルによって引き起こされませんでしたが、不良コードを `マスター` ブランチにマージすることによって引き起こされた古いエラーでした。 それはそれ以来解決されました。

ビルドをパスするには、 `freeCodeCamp/freeCodeCamp` リポジトリの `マスター` ブランチから最新の変更を同期する必要があります。

コマンドラインを使用すると、3つの簡単なステップでこれを行うことができます:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

GUIを使用している場合は、 `新しいリモートを追加...` 上から `git://github.com/freeCodeCamp/freeCodeCamp.git` のリンクを使用してください。

フォークを同期してビルドをパスすると、私たちはあなたのPRを確認してマージすることができます。 😊

---

> 上流リポジトリとの最新のフォークを維持する方法については、GitHub上の [フォークの同期](https://help.github.com/articles/syncing-a-fork/) 記事を参照してください。 🔄
> 
> また、PR を作成するときに変更の簡単な説明を GitHub で書くことをお勧めします。 📝
``````

### Merge Conflicts

> PR で解決する必要がある競合がある場合。

```markdown
Hey @username

変更をマージしたいと思っていますが、マージが競合しているようです。 ⚠️

これらの競合を解決すると、PRを確認してマージすることができます。 ["マージ競合の解決"](https://help)でGitHubのガイドをご覧ください。 ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> また、PRを作成する際に変更の簡単な説明をGitHubで書くことをお勧めします。 📝
``````
1 初回コントリビューターがコンフリクトを持つ場合、管理者はコンフリクトを解決します。

### Duplicate

> PRが反復または複製の場合。

```markdown
Hey @username

あなたが編集しているこの記事では、すでに同様の変更が承認されているようです。 申し訳ありません。

😓

追加する必要があると感じた場合は、新しいPRを開いてください。

ありがとうございます！ 😊

---

> ご質問がある場合は、お気軽に [Gitter](https://gitter.im/FreeCodeCamp/Contributors) または以下のコメントでご連絡ください。 💬
```

### 無効なプルリクエストを閉じる

> PRが無効な場合。

```markdown
Hey @username

あなたはコンテンツを追加していません。 このPRを閉じて`invalid`にします。 😓

気軽にPRを開いてください！ 👍 👍
```
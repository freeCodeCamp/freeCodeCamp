# ドキュメントに貢献する方法

## ドキュメントの内容に貢献する

コントリビューションガイドラインを編集するには、`docs` [ディレクトリ](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs) のファイルを編集または追加します。 変更がマージされると、ドキュメントサイトで自動的に公開されます。

### 内部リンクを作成する

コントリビューションガイドラインの他セクションをリンク先に設定する場合、次の形式に従ってください。

```md
[Link text](target-file-name.md#target-section-heading-id)

// リンク先セクションが同じページ内にある場合、ファイル名を省略できます
[Link text](#target-section-heading-id)
```

拡張子 (`.md`) を必ず含めてください。 URL 全体を指定したり、ファイル名の前に `/` を付けたりしないでください。

上記は翻訳版のドキュメントでリンクが動作するために必要です。 この形式に従わないリンクは、言語に関係なく英語版のページにリダイレクトされます。

#### 内部リンクのあるドキュメントを翻訳する

Crowdin でドキュメントの翻訳を行う際には、`#target-section-heading-id` を翻訳版のドキュメント上の id と置き換えてください。 [ドキュメントの翻訳について詳しくはこちらを参照してください](how-to-translate-files.md#ドキュメントを翻訳する)。

## ドキュメントのテーマに貢献する

> [!NOTE] ドキュメントサイトのコンテンツを変更する作業に必要な設定は何もありません。
> 
> コントリビューションガイドラインを編集するには、[ドキュメントの内容に貢献する](#ドキュメントの内容に貢献する) セクションを参照してください。

### ドキュメント Web サイトの構造

サイトは [`docsify`](https://docsify.js.org) を使用して生成され、GitHub ページを使用して提供されています。

通常、サイトの設定を変更したり、サイトをローカルにビルドしたりする必要はありません。 参考までに、以下のように動作します。

- このサイト向けのホームページのソースは、[`docs/index.html`](index.html) にあります。
- `docsify` と GitHub Pages を使用して、このファイルを SPA として提供します。
- `docsify` スクリプトは、`docs` ディレクトリ内の `markdown` ファイルの内容を必要に応じて生成します。
- ホームページは [`_coverpage.md`](_coverpage.md) から生成されます。
- サイドバーナビゲーションは [`_sidebar.md`](_sidebar.md) から生成されます。

### ローカルでドキュメントサイトを提供する

freeCodeCamp をクローンする

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

`docsify` をインストールする

```console
npm install -g docsify
```

`/docs` ディレクトリを提供する

```console
docsify serve docs
```

または、freeCodeCamp がすでにローカルにインストールされている場合 (ローカルセットアップガイド参照)、CLI に開発ツールがバンドルされています。必要に応じて、リポジトリのルートから以下のコマンドを実行することができます。

#### ドキュメントサイトのみを提供して起動する

```console
npm run docs:serve
```

#### freeCodeCamp と一緒にドキュメントサイトをローカルで提供する

```console
npm run develop
```

> ドキュメントサイトは <http://localhost:3200> で利用できます。

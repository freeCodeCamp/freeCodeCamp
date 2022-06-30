# ドキュメントに貢献する方法

## Work on the content of the docs

コントリビューションガイドラインを編集するには、`docs` [ディレクトリ](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs) のファイルを編集または追加します。 When your changes are merged, they will be made available automatically at the documentation site.

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

> [!NOTE] A quick reminder that you do not need to set up anything for working on the content for the documentation site.
> 
> コントリビューションガイドラインを編集するには、[ドキュメントの内容に貢献する](#ドキュメントの内容に貢献する) セクションを参照してください。

### ドキュメント Web サイトの構造

The site is generated using [`docsify`](https://docsify.js.org) and served using GitHub pages.

通常、サイトの設定を変更したり、サイトをローカルにビルドしたりする必要はありません。 参考までに、以下のように動作します。

- このサイト向けのホームページのソースは、[`docs/index.html`](index.html) にあります。
- `docsify` と GitHub Pages を使用して、このファイルを SPA として提供します。
- The `docsify` script generates the content of `markdown` files in the `docs` directory on demand.
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

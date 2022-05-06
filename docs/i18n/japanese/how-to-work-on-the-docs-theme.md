# ドキュメントテーマの作業方法

> [!NOTE] ドキュメントサイトのコンテンツを変更する作業に必要な設定は何もありません。
> 
> 貢献ガイドラインを編集するには、`docs` [ディレクトリ](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs) のファイルを編集または追加します。 変更がマージされると、ドキュメントサイトで自動的に利用可能になります。

## ドキュメント Web サイトの構造

サイトは [`docsify`](https://docsify.js.org) を使用して生成され、GitHub ページを使用して提供されます。

通常、サイトの設定を変更したり、サイトをローカルにビルドしたりする必要はありません。 以下のように動作します。

- このサイト向けのホームページのソースは、[`docs/index.html`](index.html) にあります。
- `docsify` と GitHub Pages を使用して、このファイルを SPA として提供します。
- `docsify` スクリプトは、`docs` ディレクトリ内の `markdown` ファイルの内容を必要に応じて生成します。
- ホームページは [`_coverpage.md`](_coverpage.md) から生成されます。
- サイドバーナビゲーションは [`_sidebar.md`](_sidebar.md) から生成されます。

## ローカルでドキュメントサイトを提供する

freeCodeCamp をクローンする

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

`docsify` をインストールする

```console
npm install -g docsify
```

`/docs` ディレクトリを開く

```console
docsify serve docs
```

Alternatively, if you have installed freeCodeCamp locally (see the local setup guide), we bundled the CLI with the development tools so you can run any of the below commands as needed from the root of the repo:

### ドキュメントサイトのみを提供して起動する

```console
npm run docs:serve
```

### freeCodeCamp と一緒にドキュメントサイトをローカルで提供する

```console
npm run develop
```

> ドキュメンテーションサイトは <http://localhost:3200> で利用できます。

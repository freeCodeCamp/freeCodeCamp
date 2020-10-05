# ドキュメントテーマの使い方

> [!NOTE] ドキュメントサイトのコンテンツを操作するために何も設定する必要はありません。
> 
> 貢献するガイドラインに取り組むには、ここ `ドキュメント` ディレクトリ [にあるファイルを編集または追加することができます](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs)。 変更がマージされると、ドキュメントサイトで自動的に利用可能になります。

## ドキュメントウェブサイトの構造

サイトは [`docsify`](https://docsify.js.org)を使用して生成され、GitHub ページを使用して提供されます。

通常、サイトの設定を変更したり、サイトをローカルにビルドしたりする必要はありません。 興味がある場合は、以下のように動作します。

- The homepage source for this site is available in [`docs/index.html`](index.html).
- `docsify` と GitHub Pages を使用して、このファイルをSPAとして提供します。
- `docsify` スクリプトは、 `docs` ディレクトリ内の `markdown` ファイルの内容を必要に応じて生成します。
- ホームページは [`_coverpage.md`](_coverpage.md) から生成される。
- サイドバーナビゲーションは [`_sidebar.md`](_sidebar.md) から生成されます。

## ローカルでドキュメントサイトを提供しています

freeCodeCampをクローン:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
serve docs
```

`docsify` をインストールする

```sh
npm install -g docsify
```

`/docs` ディレクトリを開く

```sh
docsify serve docs
```

あるいは、freeCodeCampをローカルにインストールした場合(ローカルのセットアップガイドを参照してください)。 CLI を開発ツールとバンドルして、リポジトリのルートから `npm run docs:serve` を実行できます。

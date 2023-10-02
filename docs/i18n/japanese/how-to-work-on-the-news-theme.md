# freeCodeCamp.org の開発者ニュースのテーマに貢献する方法

開発者ニュースは [`/news`](https://www.freecodecamp.org/news) サイトとも呼ばれ、[Ghost](https://ghost.org/) によって提供されます。 サイトのルックアンドフィールにカスタムテーマを使用しています。 テーマのソースコードは <https://github.com/freeCodeCamp/news-theme> です。

## テーマ

Ghostは、テーマに [Handlebars](http://handlebarsjs.com/) と呼ばれる単純なテンプレート言語を使用します。 `/news` で使用されるテーマは、デフォルトの [casper テーマ](https://github.com/TryGhost/Casper) に基づいています。

デフォルトのテーマには多くのコメントがあるので、コードやコメントを読むだけで何が起こっているのかを簡単に把握できます。 どのように動作するかを理解したら、 [テーマ API ドキュメント](https://themes.ghost.org) で、Handlebars ヘルパーとテンプレートの詳細をお読みください。

**主なファイルは次のとおりです。**

- `default.hbs` - メインテンプレートファイル
- `index.hbs` - ホームページに使用
- `post.hbs` - 個々の投稿に使用
- `page.hbs` - 個々のページに使用
- `tag.hbs` - タグアーカイブに使用
- `author.hbs` - 著者アーカイブに使用

1つの巧妙なトリックは、テンプレートファイルにページのスラグを追加するだけで、カスタムのワンオフテンプレートを作成することもできることです。 例:

- `page-about.hbs` - `/about/` ページのカスタムテンプレート
- `tag-news.hbs` - `/tag/news/` アーカイブのカスタムテンプレート
- `author-ali.hbs` - `/author/ali/` アーカイブのカスタムテンプレート

## 開発

1. ゴーストをローカルにインストールします。

   ```sh
   npm install -g ghost-cli@latest
   mkdir ghost-local-site
   cd ghost-local-site
   ```

   ```sh
   ghost install local
   ghost start
   ```

   > 注: freeCodeCampは現在、バージョン `2.9.0` を使用しているため、それ以降のバージョンであることを確認してください。

   `ghost-local-site` ディレクトリから `ghost` コマンドを実行します。 インターフェースに慣れていない場合は、[Ghost 公式ドキュメント](https://docs.ghost.org) の追加指示に従ってください。

2. テーマディレクトリにあるリポジトリをフォークしてクローンします ( `YOUR_USERNAME` を GitHub ユーザー名に置き換えてください)。

   ```sh
   cd content/themes/
   git clone https://github.com/YOUR_USERNAME/news-theme.git
   ```

3. 前提条件がすべて揃っていることを確認します。

   テーマのスタイルは Gulp/PostCSS を使用してコンパイルされ、将来の CSS 仕様をポリフィルします。 [Node.js](https://nodejs.org/) が必要です。 Node.js のバージョンが `ghost` と互換性があることを確認してください。

4. 依存関係をインストールしてテーマを開発します。

   ```sh
   npm ci
   npm run develop
   ```

5. これで `/assets/css/` ファイルを編集できるようになりました。これは `/assets/built/` に自動的にコンパイルされます。

6. 開発サイトにアクセスします。

   a. アドレスバーに `http://localhost:2368/ghost/` を入力します。 ページに表示されたセットアップを続行します (ghost の初回実行時)。

   b. _(セットアップ時に一度だけ)_ テーマが利用可能であることを確認するために、別の端末で Ghost を再起動します。

   ```sh
   cd ghost-local-site
   ghost restart
   ```

   c. _(セットアップ時に一度だけ)_ これが完了したら、 `http://localhost:2368/ghost/#/settings/design` に行き、一番下までスクロールします。 `freecodecamp-news-theme` をクリックしてアクティブ化します。

7. 最終コードを Zip してプルリクエストを作成します。

   `zip` Gulp タスクは、テーマファイルを `dist/<theme-name>.zip` にパッケージ化し、本番サイトにアップロードできるようにします。

   PR を行う場合は、コードをコミットして PR を送信する前に、以下のスクリプトを実行していることを確認してください。

   ```sh
   npm run zip
   ```

## その他の参照とリソース

### PostCSS 機能の使用

- Autoprefixer - あらゆる種類のブラウザのプレフィックスも書く必要がありません。すべてのブラウザにおいて、最新の2つのメジャーバージョンをサポートして自動的に行われます。
- 変数 - シンプルな純粋な CSS 変数
- [カラー関数](https://github.com/postcss/postcss-color-function)

### SVG アイコン

このテーマは、Handlebars パーシャルを介して組み込まれたインライン SVG アイコンを使用しています。 すべてのアイコンは `/partials/icons` 内にあります。 アイコンを使用するには、関連ファイルの名前を含めます。例えば、 SVGアイコンを `/partials/icons/rss.hbs` に含めるには、`{{> "icons/rss"}}`を使用します。

独自の SVG アイコンを同じ方法で追加できます。

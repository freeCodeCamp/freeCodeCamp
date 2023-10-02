---
id: 5895f700f9fc0f352b528e63
title: テンプレートエンジンを設定する
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

チャレンジに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

- <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でプロジェクトを完了させる。
- <a href="https://replit.com/github/freeCodeCamp/boilerplate-advancednode" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、チャレンジを完了させる。
- 使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

Replit を使用する場合は、下記の手順でプロジェクトをセットアップしてください。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして「回答のリンク」欄に、デモの URL を提出してください。

テンプレートエンジンを使用すると、(*Pug* で記述するような) 静的なテンプレートファイルをアプリで使用できます。 実行時にテンプレートエンジンによって、テンプレートファイル内の変数がサーバーから提供される実際の値に置き換えられます。 そして、テンプレートが静的な HTML ファイルに変換され、クライアントへ送信されます。 このアプローチにより、HTML ページの設計が容易になり、クライアントから API 呼び出しを行うことなく、ページに変数を表示することができます。

すでに `pug@~3.0.0` がインストールされており、プロジェクトの `package.json` ファイルに依存関係としてリストされています。

どのテンプレートエンジンを使用しているかを Express に知らせる必要があります。 Use the `set` method to assign `pug` as the `view engine` property's value:

```javascript
app.set('view engine', 'pug');
```

After that, add another `set` method that sets the `views` property of your `app` to point to the `./views/pug` directory. This tells Express to render all views relative to that directory.

Finally, use `res.render()` in the route for your home page, passing `index` as the first argument. This will render the `pug` template.

If all went as planned, your app home page will no longer be blank. Instead, it will display a message indicating you've successfully rendered the Pug template!

完成したと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-a-template-engine-1" target="_blank" rel="noopener noreferrer nofollow">この時点までの完成形のコードをこちらで確認できます</a>。

# --hints--

Pug を依存関係にする必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'pug',
    'Your project should list "pug" as a dependency'
  );
}
```

ビューエンジンを Pug にする必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.['view engine'], "pug");
}
```

You should set the `views` property of the application to `./views/pug`.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.views, "./views/pug");
}
```

正しい ExpressJS メソッドを使用して、レスポンスからインデックスページをレンダーします。

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    }
```

Pug が正しく動作している必要があります。

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    }
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

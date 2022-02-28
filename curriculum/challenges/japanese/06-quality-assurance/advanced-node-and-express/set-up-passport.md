---
id: 5895f70cf9fc0f352b528e65
title: Passport を設定する
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

ここで *Passport* を設定して、最終的にユーザーのアカウント登録やログインができるようにしましょう！ Passport の他に、express-session を使用してセッションを処理します。 このミドルウェアを使用してセッション id をクライアントの Cookie として保存しておき、サーバーでその id を使用してセッションデータにアクセスすることができます。 クライアントではサーバーへのユーザー認証に Cookie を使用しますが、この方法によって個人のアカウント情報が Cookie に入り込むのを防ぎ、*キー*を通じてのみサーバーに保存されているデータにアクセスするようになります。

Passport をプロジェクトで使用できるように設定するには、まず package.json に依存関係として追加する必要があります。 `passport@~0.4.1`

また、express-session を依存関係として追加してください。 express-session はたくさんの高度な機能を備えていますが、ここでは基本的な機能のみを使用します。 `express-session@~1.17.1`

ここでセッション設定を行い、Passport を初期化する必要があります。 最初に変数 「session」と「passport」を作成し、「express-session」と「passport」をそれぞれ require してください。

セッションを使用するように Express アプリを設定するため、いくつかの基本的なオプションを定義します。 必ず.envファイルに「SESSION_SECRET」を追加し、ランダムな値を指定してください。 この値を使用して、Cookie の暗号化に使用されるハッシュを計算します！

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

また、Express アプリに「passport.initialize()」と「passport.session()」を **use** するよう指示してください (たとえば、`app.use(passport.initialize());` などとします)。

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを[こちら](https://gist.github.com/camperbot/4068a7662a2f9f5d5011074397d6788c)で確認できます。

# --hints--

Passport と express-session を依存関係にする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport',
        'Your project should list "passport" as a dependency'
      );
      assert.property(
        packJson.dependencies,
        'express-session',
        'Your project should list "express-session" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

依存関係を正しく require する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport("|')/gi,
        'You should have required passport'
      );
      assert.match(
        data,
        /require.*("|')express-session("|')/gi,
        'You should have required express-session'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Express アプリで新しい依存関係を使用する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.initialize/gi,
        'Your express app should use "passport.initialize()"'
      );
      assert.match(
        data,
        /passport.session/gi,
        'Your express app should use "passport.session()"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

セッションとセッションシークレットを正しく設定する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /secret *: *process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/g,
        'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

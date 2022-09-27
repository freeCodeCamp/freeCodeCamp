---
id: 589a69f5f9fc0f352b528e70
title: ソーシャル認証の実装
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

アプリでこの種の認証を行うには、以下のパスに従います。

1.  ユーザーは、特定のストラテジー (たとえば、GitHub) を使用して認証を受けるためのルートに自身を送信するボタンまたはリンクをクリックします。
2.  ルートは `passport.authenticate('github')` を呼び出し、ユーザーを GitHub へリダイレクトします。
3.  ユーザーがたどり着いた GitHub のページで、ユーザーがまだログインしていない場合はログインが許可されます。 次に、アプリからのプロファイルへのアクセスを承認するようユーザーに求めます。
4.  ユーザーはアプリの特定のコールバック URL に戻り、ユーザーが承認した場合はプロファイルが返されます。
5.  これでユーザーが認証され、アプリでは、プロファイルが返却されたプロファイルかどうかを確認します。そうでない場合はデータベースに保存します。

OAuth を使用したストラテジーでは、少なくとも*クライアント ID* と*クライアント シークレット*が必要です。サービスはこれらを使用して、認証リクエストが誰からのものか、またそれが有効かどうかを確認します。 これらは、認証を実装しようとしている GitHub などのサイトから取得され、アプリに固有のものです。これらの情報は**共有すべきではありません**。したがって、公開リポジトリにアップロードしたり、コード内に直接書き込んだりしないでください。 通常は、それらを `.env` ファイルに保存し、`process.env.GITHUB_CLIENT_ID` などのように参照します。 このチャレンジでは、GitHub ストラテジーを使用します。

GitHub からの*クライアント ID とシークレット*の取得は、「開発者設定 (Developer settings)」のアカウントプロファイル設定で実行され、その後は「<a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer nofollow">OAuth アプリケーション (OAuth Apps)</a>」で実行されます。 「Register a new application (新しいアプリを登録する)」をクリックし、アプリに名前を付け、URL を Replit のホームページに貼り付けます (**プロジェクトコードの URL ではありません**)。最後に、コールバック URL をホームページと同じ URL に貼り付けますが、`/auth/github/callback` を追加します。 ユーザーはここにリダイレクトされ、GitHub で認証された後、処理が行われます。 返された情報を `'GITHUB_CLIENT_ID'` および `'GITHUB_CLIENT_SECRET'` として `.env` ファイルに保存します。

`routes.js` ファイルで、`showRegistration: true` の後に、`showSocialAuth: true` をホームページルートに追加します。 GET リクエストを受け付けるルートを 2 つ作成します。それらは、`/auth/github` と `/auth/github/callback` です。 1 つ目は、Passport を呼び出して `'github'` を認証するだけです。 2 つ目は、Passport を呼び出して `'github'` を認証した結果失敗し、`/` へリダイレクトした後、リダイレクトが成功した場合は `/profile` へリダイレクトします(前回のプロジェクトと同様です)。

`/auth/github/callback` の内容は、たとえば通常のログイン処理と似たものになります。

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを <a href="https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e" target="_blank" rel="noopener noreferrer nofollow">https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e</a> で確認できます。

# --hints--

ルート `/auth/github` が正確である必要があります。

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
          data.replace(/\s/g, ''),
          /passport.authenticate.*?github/g,
          'Route auth/github should only call passport.authenticate with github'
        );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
}
```

ルート `/auth/github/callback` が正確である必要があります。

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
        data.replace(/\s/g, ''),
        /failureRedirect:("|')\/\1/g,
        'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'
      );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github/callback');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github/callback"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
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

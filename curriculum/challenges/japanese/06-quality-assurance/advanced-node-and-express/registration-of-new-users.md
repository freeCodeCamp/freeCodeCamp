---
id: 58966a17f9fc0f352b528e6d
title: 新規ユーザーの登録
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--

新しいユーザーがサイトでアカウントを登録することを許可する必要があります。 ホームページの `res.render` で、渡されたオブジェクトに新しい変数 `showRegistration: true` を追加してください。 ページを更新すると、すでに `index.pug` ファイルで作成した登録フォームが表示されます！ このフォームは `/register` の **POST** を実行するように設定されています。つまり、ここで **POST** を受け付けてデータベースにユーザーオブジェクトを作成します。

登録ルートのロジックは、「新規ユーザーの登録 > 新規ユーザーの認証 > /profileへのリダイレクト」になります。

ステップ 1 の新規ユーザーの登録のロジックでは、findOne コマンド &#062 を使用してデータベースクエリを実行します。ユーザーが返された場合は、そのユーザーが存在しているためホームにリダイレクトします。 *または*、ユーザーが未定義でエラーが発生しなかった場合は、ユーザー名とパスワードを使用してデータベース に「insertOne」し、エラーが発生しない限り、 *next* を呼び出してステップ 2 の新規ユーザー認証に進みます。認証のロジックについてはすでに POST の */login* ルートに記述してあります。

```js
app.route('/register')
  .post((req, res, next) => {
    myDataBase.findOne({ username: req.body.username }, function(err, user) {
      if (err) {
        next(err);
      } else if (user) {
        res.redirect('/');
      } else {
        myDataBase.insertOne({
          username: req.body.username,
          password: req.body.password
        },
          (err, doc) => {
            if (err) {
              res.redirect('/');
            } else {
              // The inserted document is held within
              // the ops property of the doc
              next(null, doc.ops[0]);
            }
          }
        )
      }
    })
  },
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res, next) => {
      res.redirect('/profile');
    }
  );
```

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを[こちら](https://gist.github.com/camperbot/b230a5b3bbc89b1fa0ce32a2aa7b083e)で確認できます。

**注:** これ以降、*ピクチャー・イン・ピクチャー*対応ブラウザーの使用に関連する問題が生じる可能性があります。 エディター内でアプリのプレビューができるオンライン IDE を使用している場合は、新しいタブでこのプレビューを開くことを推奨します。

# --hints--

ルートを登録し、ホームに表示する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showRegistration:( |)true/gi,
        'You should be passing the variable showRegistration as true to your render function for the homepage'
      );
      assert.match(
        data,
        /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi,
        'You should have a route accepted a post request on register that querys the db with findone and the query being username: req.body.username'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

登録が正しく動作する必要があります。

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const user = `freeCodeCampTester${Date.now()}`;
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      test(this);
    } else {
      throw new Error(`${this.status} ${this.statusText}`);
    }
  };
  xhttp.open('POST', url + '/register', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(`username=${user}&password=${user}`);
  function test(xhttpRes) {
    const data = xhttpRes.responseText;
    assert.match(
      data,
      /Profile/gi,
      'Register should work, and redirect successfully to the profile.'
    );
  }
};
```

ログインが正しく動作する必要があります。

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const user = `freeCodeCampTester${Date.now()}`;
  const xhttpReg = new XMLHttpRequest();
  xhttpReg.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      login();
    } else {
      throw new Error(`${this.status} ${this.statusText}`);
    }
  };
  xhttpReg.open('POST', url + '/register', true);
  xhttpReg.setRequestHeader(
    'Content-type',
    'application/x-www-form-urlencoded'
  );
  xhttpReg.send(`username=${user}&password=${user}`);
  function login() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        test(this);
      } else {
        throw new Error(`${this.status} ${this.statusText}`);
      }
    };
    xhttp.open('POST', url + '/login', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`username=${user}&password=${user}`);
  }
  function test(xhttpRes) {
    const data = xhttpRes.responseText;
    assert.match(
      data,
      /Profile/gi,
      'Login should work if previous test was done successfully and redirect successfully to the profile.'
    );
    assert.match(
      data,
      new RegExp(user, 'g'),
      'The profile should properly display the welcome to the user logged in'
    );
  }
};
```

ログアウト正しくが動作する必要があります。

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/logout',
    type: 'GET',
    xhrFields: { withCredentials: true }
  }).then(
    (data) => {
      assert.match(data, /Home/gi, 'Logout should redirect to home');
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ログアウト後にプロファイルが動作しなくなるようにする必要があります。

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/profile',
    type: 'GET',
    crossDomain: true,
    xhrFields: { withCredentials: true }
  }).then(
    (data) => {
      assert.match(
        data,
        /Home/gi,
        'Profile should redirect to home when we are logged out now again'
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

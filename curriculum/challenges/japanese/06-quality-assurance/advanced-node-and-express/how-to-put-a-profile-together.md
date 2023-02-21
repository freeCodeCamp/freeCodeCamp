---
id: 5895f70ef9fc0f352b528e6b
title: プロファイルをまとめる
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

Now that you can ensure the user accessing the `/profile` is authenticated, you can use the information contained in `req.user` on your page.

Pass an object containing the property `username` and value of `req.user.username` as the second argument for the `render` method of the profile view.

次に、`profile.pug` ビューに移動し、既存の `h1` 要素の下に同レベルのインデントで次の行を追加してください。

```pug
h2.center#welcome Welcome, #{username}!
```

This creates an `h2` element with the class `center` and id `welcome` containing the text `Welcome,` followed by the username.

Also, in `profile.pug`, add a link referring to the `/logout` route, which will host the logic to unauthenticate a user:

```pug
a(href='/logout') Logout
```

正しいと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-put-a-profile-together-9" target="_blank" rel="noopener noreferrer nofollow">この時点までの完成形のコードをこちらで確認できます</a>。

# --hints--

You should correctly add a Pug render variable to `/profile`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /username:( |)req.user.username/,
    'You should be passing the variable username with req.user.username into the render function of the profile page'
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

---
id: 5895f70ef9fc0f352b528e6b
title: 如何將 Profile 放在一起
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

現在，我們能確保訪問 `/profile` 頁面的用戶都是經過驗證的，這樣我們就可以在頁面上使用 `req.user` 裏的信息了。

傳遞一個包含屬性 `username` 且屬性值爲 `req.user.username` 的對象，作爲 profile 頁面的 render 方法的第二個參數。 然後在 `profile.pug`頁面，將下面的代碼添加到現有的 `h1` 元素下方，處在同一級別的縮進。

```pug
h2.center#welcome Welcome, #{username}!
```

這樣就創建了一個 `h2` 元素，具有 '`center`' class，和包含文本 '`Welcome,`' 的 id '`welcome`'，以及 username（用戶名）。

另外，在 `profile.pug` 中，添加一個指向 `/logout` 路由的鏈接，它將託管一個未認證用戶的邏輯。

```pug
a(href='/logout') Logout
```

完成上述要求後，請提交你的頁面鏈接。 如果你遇到了問題，可以參考[這裏](https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a)的答案。

# --hints--

應在 Pug render 中給 /profile 傳一個變量。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /username:( |)req.user.username/gi,
        'You should be passing the variable username with req.user.username into the render function of the profile page'
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

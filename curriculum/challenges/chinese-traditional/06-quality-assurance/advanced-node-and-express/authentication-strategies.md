---
id: 5895f70df9fc0f352b528e68
title: 身份驗證策略
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

策略是認證用戶的一種方式。 如果你讓用戶在註冊時填寫了用戶信息，那你就可以基於這些信息進行驗證。或者也可以引入第三方登錄，如 Google 或者 Github。 對於這個項目的驗證策略，我們會採用自己搭建的方式完成。 可以[點擊這裏](http://passportjs.org/)訪問 Passport 網站，查看數以百計的策略。

引入 `passport-local` 作爲依賴，然後將它添加到服務器，就像這樣：`const LocalStrategy = require('passport-local');`。

然後，需要讓 passport **使用**一個實例化的 LocalStrategy 對象，這個對象的一些設置已完成。 請注意，接下來的所有代碼都應寫在連接數據庫的回調中，因爲它們的執行都依賴數據庫。

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    myDataBase.findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

這就是我們的用戶驗證邏輯： 首先根據用戶輸入的用戶名在數據庫中尋找用戶；然後檢查密碼是否匹配，最後如果沒有發生錯誤（比如密碼錯誤），那麼就會返回 `user` 對象並通過驗證。

很多策略的配置都不同，但是，一般來說，根據策略倉庫中的 README 來進行配置就足夠了。 一個很好的例子是 GitHub 策略。在該策略中，我們不需要寫用戶名或密碼的相關驗證邏輯，因爲用戶將被引導到 GitHub 頁面進行驗證。 只要用戶登錄並同意，GitHub 就會返回用戶的個人信息供我們使用。

在下一個挑戰中，我們會基於表單數據調用上面寫好的驗證策略。

完成上述要求後，請提交你的頁面鏈接。 如果你遇到任何問題，可以參考[這裏](https://gist.github.com/camperbot/53b495c02b92adeee0aa1bd3f3be8a4b)的答案。

# --hints--

需要使用 passport-local 作爲依賴。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-local',
        'Your project should list "passport-local " as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

應該正確地引入和配置 passport-local。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-local("|')/gi,
        'You should have required passport-local'
      );
      assert.match(
        data,
        /new LocalStrategy/gi,
        'You should have told passport to use a new strategy'
      );
      assert.match(
        data,
        /findOne/gi,
        'Your new local strategy should use the findOne query to find a username based on the inputs'
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

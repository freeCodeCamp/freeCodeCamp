---
id: 5895f70cf9fc0f352b528e66
title: 用戶對象的序列化
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

序列化和反序列化在身份認證中是很重要的概念。 序列化一個對象就是將其內容轉換成一個體積很小的 *key*，後續可以通過它反序列化爲原始對象。 這樣，服務器就可以在用戶未登錄時識別用戶，或者說給這個用戶一個唯一標識，用戶也不需要在每次訪問不同頁面時都給服務器發送用戶名和密碼。

我們需要用到序列化和反序列化的方法來進行配置。 passport 爲我們提供了 `passport.serializeUser( OURFUNCTION )` 和 `passport.deserializeUser( OURFUNCTION )` 兩個方法。

`serializeUser` 方法接收兩個參數，分別是表示用戶的對象和一個回調函數。 其中，回調函數的返回值應爲這個用戶的唯一標識符：最簡單的寫法就是讓它返回用戶的 `_id`。 它應當是唯一的，是由 MongoDB 產生的。 類似地，`deserializeUser` 也接收兩個參數，分別是在序列化時生成的標識符以及一個回調函數。在回調函數裏，我們需要根據根據傳入的標識符（比如 \_id）返回表示用戶的對象。 爲了在 MongoDB 中通過 query（查詢語句）獲取 `_id` 字段，首先我們需要創建 `const ObjectID = require('mongodb').ObjectID;`；然後調用它：`new ObjectID(THE_ID)`。 確保添加 `mongodb@~3.6.0` 作爲依賴項。 你可以在下面的例子中看到：

```js
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

因此，在我們在下一步中配置 DB 前，`deserializeUser` 會拋出錯誤。所以，現在請先註釋掉上面的代碼，在 `deserializeUser` 中僅調用 `done(null, null)` 即可。

完成上述要求後，請提交你的頁面鏈接。 如果你遇到了問題，可以參考 [這裏](https://gist.github.com/camperbot/7068a0d09e61ec7424572b366751f048) 的答案。

# --hints--

應該正確地序列化用戶函數。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.serializeUser/gi,
        'You should have created your passport.serializeUser function'
      );
      assert.match(
        data,
        /null,\s*user._id/gi,
        'There should be a callback in your serializeUser with (null, user._id)'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

應該正確地反序列化用戶函數。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.deserializeUser/gi,
        'You should have created your passport.deserializeUser function'
      );
      assert.match(
        data,
        /null,\s*null/gi,
        'There should be a callback in your deserializeUser with (null, null) for now'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

MongoDB 應作爲項目的依賴。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'mongodb',
        'Your project should list "mongodb" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

應該正確請求 Mongodb，包括 ObjectId。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')mongodb\1/gi,
        'You should have required mongodb'
      );
      assert.match(
        data,
        /new ObjectID.*id/gi,
        'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'
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

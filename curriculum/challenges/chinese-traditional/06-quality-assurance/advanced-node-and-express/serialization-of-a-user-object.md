---
id: 5895f70cf9fc0f352b528e66
title: 用戶對象的序列化
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

序列化和反序列化在身份認證中是很重要的概念。 序列化一個對象就是將其內容轉換成一個體積很小的 *key*，後續可以通過它反序列化爲原始對象。 這樣，服務器就可以在用戶未登錄時識別用戶，或者說給這個用戶一個唯一標識，用戶也不需要在每次訪問不同頁面時都給服務器發送用戶名和密碼。

要正確設置此功能，你需要一個序列化的函數和一個反序列化函數。 在 Passport 中間件中，可以使用以下方法創建它們：

```javascript
passport.serializeUser(cb);
passport.deserializeUser(cb);
```

傳遞給 `serializeUser` 的回調函數接收兩個參數：完整的用戶對象和由 passport 使用的回調。

該回調需要兩個參數：一個錯誤，以及應在回調中返回的一個用於識別用戶的唯一鍵。 你將在對象中使用用戶的 `_id`。 這是保證唯一的，因爲它是由 MongoDB 生成的。

同樣，`deserializeUser` 需要用兩個參數調用：唯一的鍵值和回調函數。

該回調需要兩個參數：一個錯誤，以及完整的用戶對象。 要獲取完整的用戶對象，請按如下方式進行 Mongo `_id` 查詢：


```javascript
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

將上面的兩個函數添加到你的服務器。 `ObjectID` 類來自 `mongodb` 包。 `mongodb@~3.6.0` 已經被添加爲依賴項。 使用以下方式聲明此類：

```javascript
const { ObjectID } = require('mongodb');
```

在設置數據庫連接之前，`deserializeUser`將拋出錯誤。 因此，現在請在 `deserializeUser` 回調函數中註釋掉 `myDatabase.findOne` 調用，只調用 `done(null, null)` 即可。

當你覺得已經完成時提交你的頁面。 如果你遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#serialization-of-a-user-object-4" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

你應該正確地序列化用戶對象。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
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
}
```

你應該正確地反序列化用戶對象。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
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
}
```

MongoDB 應作爲項目的依賴。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'mongodb',
    'Your project should list "mongodb" as a dependency'
  );
}
```

應該正確請求 Mongodb，包括 ObjectId。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
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

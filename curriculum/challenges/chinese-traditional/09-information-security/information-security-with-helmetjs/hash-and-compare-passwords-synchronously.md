---
id: 58a25bcff9fc0f352b528e7e
title: 哈希和同步比較密碼
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

同步執行哈希運算是非常簡單的，但這會在哈希計算量大並且次數多的情況下造成延遲。 用這個方法哈希就像調用函數一樣簡單。

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

把同步哈希的方法添加到你的代碼，並在控制檯輸出。 和之前一樣，我們已經爲你定義好了你需要使用的變量，你不需要做任何改動。 你可能會注意到即使你使用與異步函數相同的密碼進行哈希處理，控制檯中的結果也不同，這是由於每次哈希值隨機生成，如第三個哈希字符串中的前 22 個字符所示。 現在，爲了比較一個密碼輸入和新的同步哈希值，你將使用 compareSync 方法。

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

返回的結果爲 true 或 false。

# --instructions--

請添加這個方法，並把結果輸出到控制檯，以此來驗證同步哈希操作是否成功。

請在完成挑戰後提交你的頁面。

# --hints--

應同步地進行哈希並正確地執行對比

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi,
        'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'
      );
      assert.match(
        data,
        /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi,
        'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'
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

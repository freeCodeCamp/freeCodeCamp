---
id: 58a25bcff9fc0f352b528e7d
title: 哈希和異步比較密碼
challengeType: 2
forumTopicId: 301578
dashedName: hash-and-compare-passwords-asynchronously
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

由於哈希運算會佔用很大計算機資源，並且會耗費比較多時間，因此比較推薦的做法是異步調用哈希算法，這樣就不會因此阻止其它連接或請求了。 異步調用哈希方法非常簡單，只需要：

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});
```

# --instructions--

將該哈希函數添加到你的服務器上（我們已經定義了函數中使用的變量），並將其記錄到控制檯以便你查看！ 之後，我們通常需要把哈希的結果保存到數據庫。

當你需要對比用戶輸入的值是否和之前哈希過的值一樣的時候，只需要調用對比函數：

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

在你記錄完成的哈希，並在比較中把 'res' 記錄到控制檯後，將此添加到你現有的哈希函數中（因爲你需要等待哈希完成後再調用比較函數）。 控制檯中會首先輸出一個哈希結果，然後輸出 “true”。 如果將比較函數中的 “myPlaintextPassword” 更改爲 “someOtherPlaintextPassword”，則比較的結果應顯示 false。

```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});

```

請在完成挑戰後提交你的頁面。

# --hints--

應生成異步散列並正確比較。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi,
        'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback'
      );
      assert.match(
        data,
        /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi,
        'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash'
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

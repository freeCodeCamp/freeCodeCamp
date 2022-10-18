---
id: 58a25bcef9fc0f352b528e7c
title: 瞭解 BCrypt 的哈希加密
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

在下面的挑戰中，你將啓動一個新的項目，這個項目與之前的項目不同。 You can find the new starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or clone it from <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

BCrypt 哈希值是非常安全的。 哈希值基本上是原始數據的指紋，總是唯一的。 這是通過將原始數據輸入一個算法並返回一個固定長度的結果來實現的。 爲了使這一過程更加複雜和安全，你還可以向你的哈希值 *加鹽*。 對你的哈希加鹽處理包含了在哈希過程之前向原始數據添加隨機數據，這使得破解哈希更加困難。

BCrypt hashes will always look like `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` which does have a structure. 第一小節 `$2a` 說明了該哈希採用什麼算法。 接下來的部分 `$13` 定義了 *成本*。 成本是指計算哈希值需要多少能量。 它在 2^cost 的對數尺度上，決定了數據要通過哈希算法計算多少次。 For example, at a cost of 10 you are able to hash 10 passwords a second on an average computer, however at a cost of 15 it takes 3 seconds per hash... and to take it further, at a cost of 31 it would take multiple days to complete a hash. 通常 cost 爲 12 的哈希運算就已經足夠安全。 哈希結果的最後一部分 `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` 看起來像是由隨機數字、點和字母組成的字符串，但實際上它有兩部分內容。 前面 22 個字符是加入的鹽，剩下的就是加密過的密碼！

# --instructions--

Add all your code for these lessons in the `server.js` file between the code we have started you off with. Do not change or delete the code we have added for you.

BCrypt has already been added as a dependency, so require it as `bcrypt` in your server.

請在完成挑戰後提交你的頁面。

# --hints--

BCrypt 應該是一個依賴項。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

應正確引入 BCrypt。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /bcrypt.*=.*require.*('|")bcrypt('|")/gi,
        'You should correctly require and instantiate socket.io as io.'
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

---
id: 58a25bcef9fc0f352b528e7c
title: 瞭解 BCrypt 的哈希加密
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

在下面的挑戰中，你將啓動一個新的項目，這個項目與之前的項目不同。 你可以在 [Replit](https://replit.com/github/freeCodeCamp/boilerplate-bcrypt)上找到新的啓動項目，或者從 [GitHub](https://github.com/freeCodeCamp/boilerplate-bcrypt/) 上克隆它。

BCrypt 哈希值是非常安全的。 哈希值基本上是原始數據的指紋，總是唯一的。 這是通過將原始數據輸入一個算法並返回一個固定長度的結果來實現的。 爲了使這一過程更加複雜和安全，你還可以向你的哈希值 *加鹽*。 對你的散列加鹽處理包含了在散列過程之前向原始數據添加隨機數據，這使得破解散列更加困難。

BCrypt 哈希值總是看起來有像`$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` 的結構。 它遵循固定的結構，第一小節 `$2a` 說明了該哈希採用什麼算法。 接下來的部分 `$13` 定義了 *成本*。 成本是指計算哈希值需要多少能量。 它在 2^cost 的對數尺度上，決定了數據要通過散列算法計算多少次。 例如，當 cost 爲 10 時，你能夠在普通計算機上每秒散列 10 個密碼，然而當 cost 爲 15 時，每次散列需要 3 秒...... 進一步說，當 cost 爲 31 時，完成一次散列需要好幾天。 通常 cost 爲 12 的哈希運算就已經足夠安全。 哈希結果的最後一部分 `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` 看起來像是由隨機數字、點和字母組成的字符串，但實際上它有兩部分內容。 前面 22 個字符是加入的鹽，剩下的就是加密過的密碼！

# --instructions--

要開始使用 BCrypt，只需將它添加到你的依賴列表，然後在你的服務器引入 “bcrypt”。

在 `server.js` 文件中加入這些課程的所有代碼，放在我們提供的代碼之間。 不要改變或刪除我們爲你添加的代碼。

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

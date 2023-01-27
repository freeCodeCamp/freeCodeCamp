---
id: 58a25bcef9fc0f352b528e7c
title: 了解 BCrypt 的哈希加密
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

在下面的挑战中，你将启动一个新的项目，这个项目与之前的项目不同。 你可以在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上找到新的启动项目，或者从 <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆它。

BCrypt 哈希值是非常安全的。 哈希值基本上是原始数据的指纹，总是唯一的。 这是通过将原始数据输入一个算法并返回一个固定长度的结果来实现的。 为了使这一过程更加复杂和安全，你还可以向你的哈希值 *加盐*。 对你的哈希加盐处理包含了在哈希过程之前向原始数据添加随机数据，这使得破解哈希更加困难。

BCrypt 哈希值类似 `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm`，有一个结构。 第一小节 `$2a` 说明了该哈希采用什么算法。 接下来的部分 `$13` 定义了 *成本*。 成本是指计算哈希值需要多少能量。 它在 2^cost 的对数尺度上，决定了数据要通过哈希算法计算多少次。 例如，当成本为 10 时，你能够在普通计算机上每秒哈希计算 10 个密码，然而当成本为 15 时，每次哈希计算需要 3 秒......再进一步说，当成本为 31 时，完成一次哈希需要好几天。 通常 cost 为 12 的哈希运算就已经足够安全。 哈希结果的最后一部分 `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` 看起来像是由随机数字、点和字母组成的字符串，但实际上它有两部分内容。 前面 22 个字符是加入的盐，剩下的就是加密过的密码！

# --instructions--

在 `server.js` 文件中加入这些课程的所有代码，放在我们开始的代码之间。 不要改变或删除我们为你添加的代码。

BCrypt 已经被添加为一个依赖项，所以在你的服务器中请求它为 `bcrypt`。

请在完成挑战后提交你的页面。

# --hints--

BCrypt 应该是一个依赖项。

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

应正确引入 BCrypt。

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

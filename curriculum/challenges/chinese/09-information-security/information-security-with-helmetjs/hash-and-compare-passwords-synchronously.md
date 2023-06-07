---
id: 58a25bcff9fc0f352b528e7e
title: 哈希和同步比较密码
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

同步执行哈希运算是非常简单的，但这会在哈希计算量大并且次数多的情况下造成延迟。 用这个方法哈希就像调用函数一样简单。

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

把同步哈希的方法添加到你的代码，并在控制台输出。 和之前一样，我们已经为你定义好了你需要使用的变量，你不需要做任何改动。 你可能会注意到即使你使用与异步函数相同的密码进行哈希处理，控制台中的结果也不同，这是由于每次哈希值随机生成，如第三个哈希字符串中的前 22 个字符所示。 现在，为了比较一个密码输入和新的同步哈希值，你将使用 compareSync 方法。

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

返回的结果为 true 或 false。

# --instructions--

请添加这个方法，并把结果输出到控制台，以此来验证同步哈希操作是否成功。

请在完成挑战后提交你的页面。

# --hints--

应同步地进行哈希并正确地执行对比

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

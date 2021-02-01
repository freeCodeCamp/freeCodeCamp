---
id: 58a25bcff9fc0f352b528e7e
title: 哈希和同步比较密码
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-infosec) 的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

同步执行哈希运算是非常简单的，但这会在哈希计算量大并且次数多的情况下造成延迟。如果想要同步执行哈希运算，只需要这样调用：

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

把同步哈希的方法添加到你的代码并在控制台输出。和之前一样，我们已经为你定义好了你需要使用的变量，你不需要做任何改动。你可能注意到，即使你对同一个密码进行哈希运算，同步哈希和异步哈希的结果也是不一样的。这是因为每次哈希的盐都是随机生成的，这种随机反映在前 22 个字符的不同上。 当你需要对比用户输入的值是否和之前哈希过的值一样的时候，只需要调用对比函数：

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

返回的结果为 `true` 或 `false`

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

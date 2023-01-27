---
id: 58a25bcff9fc0f352b528e7d
title: 哈希和异步比较密码
challengeType: 2
forumTopicId: 301578
dashedName: hash-and-compare-passwords-asynchronously
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

由于哈希运算会占用很大计算机资源，并且会耗费比较多时间，因此比较推荐的做法是异步调用哈希算法，这样就不会因此阻止其它连接或请求了。 异步调用哈希方法非常简单，只需要：

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});
```

# --instructions--

将该哈希函数添加到你的服务器上（我们已经定义了函数中使用的变量），并将其记录到控制台以便你查看！ 之后，我们通常需要把哈希的结果保存到数据库。

当你需要对比用户输入的值是否和之前哈希过的值一样的时候，只需要调用对比函数：

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

在你记录完成的哈希，并在比较中把 'res' 记录到控制台后，将此添加到你现有的哈希函数中（因为你需要等待哈希完成后再调用比较函数）。 控制台中会首先输出一个哈希结果，然后输出 “true”。 如果将比较函数中的 “myPlaintextPassword” 更改为 “someOtherPlaintextPassword”，则比较的结果应显示 false。

```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});

```

请在完成挑战后提交你的页面。

# --hints--

应生成异步散列并正确比较。

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

---
id: 58a25bcff9fc0f352b528e7d
challengeType: 2
forumTopicId: 301578
title: 哈希和异步比较密码
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
由于哈希运算会占用很大计算机资源并且会耗费比较多时间，因此比较推荐的做法是异步调用哈希算法，这样就不会因此阻止其它连接或请求了。异步调用哈希方法非常简单，只需要：

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /* 在数据库中存储 hash */
});
```

</section>

## Instructions
<section id='instructions'>
把这段哈希方法添加到你的服务器（我们已经定义好这个方法的变量给你直接使用了），然后你可以尝试在控制台输出。之后，我们通常需要把哈希的结果保存到数据库。
当你需要对比用户输入的值是否和之前哈希过的值一样的时候，只需要调用对比函数：

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

当控制台输出生成的哈希并在对比的回调中输出结果后，我们就可以将其添加到现有的哈希函数中。控制台中会首先输出一个哈希结果，然后输出 <code>true</code>。如果将比较函数中的 "myPlaintextPassword" 更改为 "someOtherPlaintextPassword"，则比较的结果应显示 <code>false</code>。

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
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应异步地进行哈希并正确地执行对比
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi, 'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback'); assert.match(data, /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi, 'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>

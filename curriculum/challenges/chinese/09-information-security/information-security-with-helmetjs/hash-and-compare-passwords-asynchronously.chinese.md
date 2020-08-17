---
id: 58a25bcff9fc0f352b528e7d
title: Hash and Compare Passwords Asynchronously
challengeType: 2
videoUrl: ''
localeTitle: 哈希和异步比较密码
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/">GitHub</a>克隆的。由于散列设计为计算密集型，因此建议在服务器上异步执行此操作，以避免在散列时阻止传入连接。所有你需要做的就是异步散列密码是调用<code>bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) =&gt; { /*Store hash in your db*/ });</code> <hr>将此散列函数添加到服务器（我们已经定义了函数中使用的变量供您使用）并将其记录到控制台以供您查看！此时，您通常会将哈希值保存到数据库中。现在，当您需要确定新输入是否与散列相同时，您只需使用比较函数<code>bcrypt.compare(myPlaintextPassword, hash, (err, res) =&gt; { /*res == true or false*/ });</code> 。在记录完成的哈希并将“res”记录到比较中的控制台之后，将其添加到现有哈希函数中（因为您需要在调用比较函数之前等待哈希完成）。您应该在控制台中看到一个哈希值，然后打印出“true”！如果您将compare函数中的&#39;myPlaintextPassword&#39;更改为&#39;someOtherPlaintextPassword&#39;，那么它应该为false。 <pre> bcrypt.hash（&#39;passw0rd！&#39;，13，（错误，哈希）=&gt; {
  的console.log（散列）; //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare（&#39;passw0rd！&#39;，hash，（err，res）=&gt; {
      的console.log（RES）; //真正
  }）;
}）; </pre>当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 异步哈希生成并正确比较
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi, 'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback'); assert.match(data, /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi, 'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

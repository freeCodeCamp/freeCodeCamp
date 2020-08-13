---
id: 58a25bcff9fc0f352b528e7e
title: Hash and Compare Passwords Synchronously
challengeType: 2
videoUrl: ''
localeTitle: 哈希并同步比较密码
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/">GitHub</a>克隆的。同步散列也很容易，但如果使用服务器端成本高或经常进行散列会导致延迟。使用此方法进行散列与调用<code>var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);</code> <hr>将此散列方法添加到代码中，然后将结果记录到控制台。同样，使用的变量已在服务器中定义，因此您无需调整它们。您可能会注意到即使您使用与异步函数相同的密码进行哈希处理，控制台中的结果也不同 - 这是由于每次哈希值随机生成，如第三个哈希字符串中的前22个字符所示。现在将密码输入与新的同步散列进行比较，您将使用compareSync方法： <code>var result = bcrypt.compareSync(myPlaintextPassword, hash);</code>结果是布尔值true或false。添加此功能并登录控制台结果以查看其是否正常工作。当您认为自己已经做对时，请提交您的页面。如果您在这些挑战期间遇到错误，可以在<a href="https://gist.github.com/JosephLivengood/9a2698fb63e42d9d8b4b84235c08b4c4">此处</a>查看示例完成的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 同步哈希生成并正确比较
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi, 'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'); assert.match(data, /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi, 'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'); }, xhr => { throw new Error(xhr.statusText); })

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

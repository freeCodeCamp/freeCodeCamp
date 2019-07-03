---
id: 58a25bcff9fc0f352b528e7d
title: Hash and Compare Passwords Asynchronously
challengeType: 2

videoUrl: ''
localeTitle: Hash and Compare Passwords Asynchronously
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
Helmet 通过配置不同的 HTTP 头部信息来使你的 Express 应用更加安全。安装，并引入 Helmet 这个包。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 异步生成哈希并正确地对比
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/file/server.js") .then(data => { assert.match(data, /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi, "You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback"); assert.match(data, /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi, "Nested within the hash function should be the compare function comparing myPlaintextPassword to hash"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
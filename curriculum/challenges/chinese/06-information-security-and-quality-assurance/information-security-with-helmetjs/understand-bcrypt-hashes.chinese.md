---
id: 58a25bcef9fc0f352b528e7c
title: Understand BCrypt Hashes
challengeType: 2

videoUrl: ''
localeTitle: Understand BCrypt Hashes
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
  - text: BCyrpt 已被添加到依赖列表
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "bcrypt", "Your project should list "bcrypt" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: BCrypt 已经被正确引入
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/file/server.js").then(data => {assert.match(data, /bcrypt.*=.*require.*("|")bcrypt("|")/gi, "You should correctly require and instantiate socket.io as io.");}, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
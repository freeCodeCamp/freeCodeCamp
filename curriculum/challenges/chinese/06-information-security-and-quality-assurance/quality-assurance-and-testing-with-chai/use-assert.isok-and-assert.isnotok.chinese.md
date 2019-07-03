---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
challengeType: 2

videoUrl: ''
localeTitle: Use Assert.isOK and Assert.isNotOK
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
使用 assert.isNull() 或 assert.isNotNull() 通过测试。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isOk 或 isNotOk
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {  assert.equal(data.assertions[0].method, "isNotOk", "Null 是假值"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isOk 或 isNotOk
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {  assert.equal(data.assertions[1].method, "isOk","字符串是真值"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isOk 或 isNotOk
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {  assert.equal(data.assertions[2].method, "isOk", "true 是真值"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
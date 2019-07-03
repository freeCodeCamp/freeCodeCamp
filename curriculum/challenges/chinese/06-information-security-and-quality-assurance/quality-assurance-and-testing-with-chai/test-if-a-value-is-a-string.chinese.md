---
id: 587d824d367417b2b2512c52
title: Test if a Value is a String
challengeType: 2

videoUrl: ''
localeTitle: Test if a Value is a String
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isString 或 isNotString
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => {  assert.equal(data.assertions[0].method, "isNotString", "float number 不是字符串"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isString 或 isNotString
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => {  assert.equal(data.assertions[1].method, "isString", "环境变量是 strings（ 或 undefined）"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isString 或 isNotString
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => {  assert.equal(data.assertions[2].method, "isString", "JSON 是字符串"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
---
id: 587d824d367417b2b2512c53
title: Test if a String Contains a Substring
challengeType: 2

videoUrl: ''
localeTitle: Test if a String Contains a Substring
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=13").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--include 或 notInclude
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=13").then(data => {  assert.equal(data.assertions[0].method, "include", "\"Arrow\" 包含 \"row\"..."); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--include 或 notInclude
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=13").then(data => {  assert.equal(data.assertions[1].method, "notInclude", "... \"dart\" 不包含 \"queue\""); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
---
id: 587d824c367417b2b2512c4d
title: Compare the Properties of Two Elements
challengeType: 2

videoUrl: ''
localeTitle: Compare the Properties of Two Elements
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=7").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isAbove 或 isAtMost
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=7").then(data => {  assert.equal(data.assertions[0].method, "isAtMost", "5 <= 5"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isAbove 或 isAtMost
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=7").then(data => {  assert.equal(data.assertions[1].method, "isAbove", "1 大于 0"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isAbove 或 isAtMost
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=7").then(data => {  assert.equal(data.assertions[2].method, "isAbove", "Math.PI = 3.14159265 大于 3"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isAbove 或 isAtMost
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=7").then(data => {  assert.equal(data.assertions[3].method, "isAtMost", "1 - Math.random() is > 0 且 <= 1"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
---
id: 587d824b367417b2b2512c4a
title: Use the Double Equals to Assert Equality
challengeType: 2

videoUrl: ''
localeTitle: Use the Double Equals to Assert Equality
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=4").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--equal 或 notEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=4").then(data => {  assert.equal(data.assertions[0].method, "equal", "数字会被 == 强行转换为字符串"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--equal 或 notEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=4").then(data => {  assert.equal(data.assertions[1].method, "notEqual", " == 比较对象引用"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--equal 或 notEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=4").then(data => {  assert.equal(data.assertions[2].method, "equal", "6 * \"2\" 为 12 ! 它应该等于 \"12\""); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--equal 或 notEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=4").then(data => {  assert.equal(data.assertions[3].method, "notEqual", "6 + \"2\" 为 \"62\"..."); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
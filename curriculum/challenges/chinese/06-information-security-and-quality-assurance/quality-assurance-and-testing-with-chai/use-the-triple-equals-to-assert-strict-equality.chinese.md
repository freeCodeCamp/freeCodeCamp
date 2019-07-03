---
id: 587d824b367417b2b2512c4b
title: Use the Triple Equals to Assert Strict Equality
challengeType: 2

videoUrl: ''
localeTitle: Use the Triple Equals to Assert Strict Equality
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=5").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--strictEqual 或 notStrictEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=5").then(data => {  assert.equal(data.assertions[0].method, "notStrictEqual", "使用 strictEqual，类型必须一样"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--strictEqual 或 notStrictEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=5").then(data => {  assert.equal(data.assertions[1].method, "strictEqual", "3*2 = 6..."); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--strictEqual 或 notStrictEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=5").then(data => {  assert.equal(data.assertions[2].method, "strictEqual", "6 * \"2\" 为 12。类型匹配！"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--strictEqual 或 notStrictEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=5").then(data => {  assert.equal(data.assertions[3].method, "notStrictEqual", "即使拥有相同的元素，数组也不是严格相等"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
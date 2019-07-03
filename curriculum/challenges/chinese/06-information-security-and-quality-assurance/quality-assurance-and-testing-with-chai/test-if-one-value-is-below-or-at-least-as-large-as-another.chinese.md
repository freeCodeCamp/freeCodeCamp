---
id: 587d824c367417b2b2512c4e
title: Test if One Value is Below or At Least as Large as Another
challengeType: 2

videoUrl: ''
localeTitle: Test if One Value is Below or At Least as Large as Another
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=8").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isBelow 或 isAtLeast
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=8").then(data => {  assert.equal(data.assertions[0].method, "isAtLeast", "5 >= 5"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isBelow 或 isAtLeast
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=8").then(data => {  assert.equal(data.assertions[1].method, "isAtLeast", "2 * Math.random() >= 0"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isBelow 或 isAtLeast
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=8").then(data => {  assert.equal(data.assertions[2].method, "isBelow", "1 小于 2"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--isBelow 或 isAtLeast
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=8").then(data => {  assert.equal(data.assertions[3].method, "isBelow", "2/3 (0.6666) 小于 1"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
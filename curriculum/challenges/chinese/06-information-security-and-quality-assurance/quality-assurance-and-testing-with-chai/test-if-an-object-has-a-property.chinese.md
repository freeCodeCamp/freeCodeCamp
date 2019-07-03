---
id: 587d824e367417b2b2512c55
title: Test if an Object has a Property
challengeType: 2

videoUrl: ''
localeTitle: Test if an Object has a Property
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--property 或 notProperty
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.assertions[0].method, "notProperty", "car 没有 wings"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--property 或 notProperty
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.assertions[1].method, "property", "planes 有 engines"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--property 或 notProperty
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.assertions[2].method, "property", "Cars 有 wheels"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
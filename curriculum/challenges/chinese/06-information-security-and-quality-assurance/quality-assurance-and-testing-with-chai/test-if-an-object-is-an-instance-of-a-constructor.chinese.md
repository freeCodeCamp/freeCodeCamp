---
id: 587d824e367417b2b2512c57
title: Test if an Object is an Instance of a Constructor
challengeType: 2

videoUrl: ''
localeTitle: Test if an Object is an Instance of a Constructor
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--instanceOf 或 notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[0].method, "notInstanceOf", "myCar 不是 Plane 的实例"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--instanceOf 或 notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[1].method, "instanceOf", "airlinePlane 是 Plane 的实例"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--instanceOf 或 notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[2].method, "instanceOf", "JavaScript 中万物都是对象..."); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--instanceOf 或 notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[3].method, "notInstanceOf", "myCar.wheels 不是 String 的实例"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
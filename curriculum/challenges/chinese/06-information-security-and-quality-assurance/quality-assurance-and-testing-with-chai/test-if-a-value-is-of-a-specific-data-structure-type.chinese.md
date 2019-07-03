---
id: 587d824e367417b2b2512c56
title: Test if a Value is of a Specific Data Structure Type
challengeType: 2

videoUrl: ''
localeTitle: Test if a Value is of a Specific Data Structure Type
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--typeOf 或 notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[0].method, "typeOf", "myCar 是 Object"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--typeOf 或 notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[1].method, "typeOf", "Car.model 是 String"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--typeOf 或 notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[2].method, "notTypeOf", "Plane.wings 是 Number（不是 String）"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--typeOf 或 notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[3].method, "typeOf", "Plane.engines 是 Array"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--typeOf 或 notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[4].method, "typeOf", "Car.wheels 是 Number"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
---
id: 587d824d367417b2b2512c50
title: Test if a Value is an Array
challengeType: 2
isHidden: false
forumTopicId: 301600
localeTitle: 测试某个值是否为数组
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.isArray()</code> 或者 <code>assert.isNotArray()</code> 通过所有测试。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isArray 或 isNotArray
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(data => {  assert.equal(data.assertions[0].method, 'isArray', 'String.prototype.split() returns an Array'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isArray 或 isNotArray
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(data => {  assert.equal(data.assertions[1].method, 'isNotArray', 'Array.prototype.indexOf() returns a number'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>

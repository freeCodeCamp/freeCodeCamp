---
id: 587d824c367417b2b2512c4d
title: Compare the Properties of Two Elements
challengeType: 2
isHidden: false
forumTopicId: 301588
localeTitle: 比较两个元素的属性
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
</section>

## Instructions
<section id='instructions'>

使用 <code>assert.isAbove()</code> (如 greater) 或者  <code>assert.isAtMost()</code> (如 less than 或者 equal) 通过测试。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isAbove 或 isAtMost
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[0].method, 'isAtMost', '5 is at most (<=) 5'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isAbove 或 isAtMost
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[1].method, 'isAbove', '1 is greater than 0'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isAbove 或 isAtMost
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[2].method, 'isAbove', 'Math.PI = 3.14159265 is greater than 3'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isAbove 或 isAtMost
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[3].method, 'isAtMost', '1 - Math.random() is > 0 and <= 1. It is atMost 1 !'); }, xhr => { throw new Error(xhr.responseText); })

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

---
id: 587d824c367417b2b2512c4e
title: Test if One Value is Below or At Least as Large as Another
challengeType: 2
isHidden: false
forumTopicId: 301606
localeTitle: 测试一个值是否小于或等于另一个值
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.isBelow()</code> (如 less than) 或者 <code>assert.isAtLeast()</code> (如 greater than or equal) 来通过所有测试。

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isBelow 或 isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[0].method, 'isAtLeast', '5 is at least (>=) 5'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isBelow 或 isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[1].method, 'isAtLeast', '2 * Math.random() is at least 0'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isBelow 或 isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[2].method, 'isBelow', '1 is smaller than 2'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isBelow 或 isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[3].method, 'isBelow', '2/3 (0.6666) is smaller than 1'); }, xhr => { throw new Error(xhr.responseText); })

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

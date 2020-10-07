---
id: 587d824c367417b2b2512c4e
challengeType: 2
forumTopicId: 301606
title: 测试一个值是否小于或等于另一个值
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。
</section>

## Instructions
<section id='instructions'>
Use <code>assert.isBelow()</code> (i.e. less than) or <code>assert.isAtLeast()</code> (i.e. greater than or equal) to make the tests pass.
使用 <code>assert.isBelow()</code>（小于）或 <code>assert.isAtLeast()</code>（大于等于）让所有测试通过。

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—isBelow 或 isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[0].method, 'isAtLeast', '5 is at least (>=) 5'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—isBelow 或 isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[1].method, 'isAtLeast', '2 * Math.random() is at least 0'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—isBelow 或 isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[2].method, 'isBelow', '1 is smaller than 2'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—isBelow 或 isAtLeast
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

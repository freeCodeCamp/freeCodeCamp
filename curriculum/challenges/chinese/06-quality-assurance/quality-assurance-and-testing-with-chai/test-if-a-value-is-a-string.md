---
id: 587d824d367417b2b2512c52
challengeType: 2
forumTopicId: 301599
title: 测试某个值是否为字符串
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。
<code>isString</code> 或 <code>isNotString</code> 断言一个值是否为字符串。
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.isString()</code> 或 <code>assert.isNotString()</code> 让所有测试通过。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—isString 或 isNotString
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => {  assert.equal(data.assertions[0].method, 'isNotString', 'A float number is not a string'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—isString 或 isNotString
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => {  assert.equal(data.assertions[1].method, 'isString', 'environment vars are strings (or undefined)'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—isString 或 isNotString
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => {  assert.equal(data.assertions[2].method, 'isString', 'A JSON is a string'); }, xhr => { throw new Error(xhr.responseText); })

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

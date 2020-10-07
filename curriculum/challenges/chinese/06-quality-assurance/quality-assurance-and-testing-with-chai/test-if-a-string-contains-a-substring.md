---
id: 587d824d367417b2b2512c53
challengeType: 2
forumTopicId: 301597
title: 测试字符串是否包含子字符串
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。

<code>include()</code> 和 <code>notInclude()</code> 同样可以用于字符串。
<code>include()</code> 用于断言字符串中包含某个子字符串。
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.include()</code> 或 <code>assert.notInclude()</code> 让测试通过。

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—include 或 notInclude
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => {  assert.equal(data.assertions[0].method, 'include', '\'Arrow\' contains \'row\'...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—include 或 notInclude
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => {  assert.equal(data.assertions[1].method, 'notInclude', '... a \'dart\' doesn\'t contain a \'queue\''); }, xhr => { throw new Error(xhr.responseText); })

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

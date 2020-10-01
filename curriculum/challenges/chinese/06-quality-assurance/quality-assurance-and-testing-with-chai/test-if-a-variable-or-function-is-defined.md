---
id: 587d824b367417b2b2512c47
challengeType: 2
forumTopicId: 301602
title: 测试变量或函数是否已定义
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。

</section>

## Instructions
<section id='instructions'>
使用 <code>assert.isDefined()</code> 或 <code>assert.isUndefined()</code> 让测试通过。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—idDefined 或 idUndefined
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[0].method, 'isDefined', 'Null is not undefined'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—idDefined 或 idUndefined
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[1].method, 'isUndefined', 'Undefined is undefined'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—idDefined 或 idUndefined
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[2].method, 'isDefined', 'A string is not undefined'); }, xhr => { throw new Error(xhr.responseText); })

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

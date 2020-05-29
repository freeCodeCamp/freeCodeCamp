---
id: 587d824d367417b2b2512c54
title: Use Regular Expressions to Test a String
challengeType: 2
isHidden: false
forumTopicId: 301608
localeTitle: 使用正则表达式测试字符串
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
#match 断言一个值匹配一个正则表达式（第二个参数）
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.match()</code> 来通过所有测试。

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=14').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--match 或 notMatch
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=14'').then(data => {  assert.equal(data.assertions[0].method, ''match'', ''\''# name: John Doe, age: 35\'' matches the regex''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 请选择正确的断言--match 或 notMatch
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=14'').then(data => {  assert.equal(data.assertions[1].method, ''notMatch'', ''\''# name: Paul Smith III, age: twenty-four\'' does not match the regex (the age must be numeric)''); }, xhr => { throw new Error(xhr.responseText); })'

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

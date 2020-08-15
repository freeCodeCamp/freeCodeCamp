---
id: 587d824d367417b2b2512c51
title: Test if an Array Contains an Item
challengeType: 2
isHidden: false
forumTopicId: 301603
localeTitle: 测试数组是否包含某个项目
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.include()</code> 或者 <code>assert.notInclude()</code> 来通过所有测试。 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--include 或 notInclude
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(data => {  assert.equal(data.assertions[0].method, 'notInclude', 'It\'s summer in july...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--include 或 notInclude
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(data => {  assert.equal(data.assertions[1].method, 'include', 'JavaScript is a backend language !!'); }, xhr => { throw new Error(xhr.responseText); })

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

---
id: 587d824d367417b2b2512c53
title: Test if a String Contains a Substring
challengeType: 2
isHidden: false
forumTopicId: 301597
localeTitle: 测试字符串是否包含子字符串
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。

#include（相对于 #notInclude）也可用于字符串！
它断言字符串包含某个子串
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.include()</code> 或者 <code>assert.notInclude()</code> 通过测试。


</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--include 或 notInclude
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => {  assert.equal(data.assertions[0].method, 'include', '\'Arrow\' contains \'row\'...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--include 或 notInclude
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

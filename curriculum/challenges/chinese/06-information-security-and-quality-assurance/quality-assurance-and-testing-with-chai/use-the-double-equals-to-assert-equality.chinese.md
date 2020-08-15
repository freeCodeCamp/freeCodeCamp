---
id: 587d824b367417b2b2512c4a
title: Use the Double Equals to Assert Equality
challengeType: 2
isHidden: false
forumTopicId: 301609
localeTitle: 用两个等号断言相等
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
.equal() 使用 '==' 比较对象
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.equal()</code> 或者 <code>assert.notEqual()</code> 来通过所有测试。

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--equal 或 notEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[0].method, 'equal', 'Numbers are coerced into strings with == '); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--equal 或 notEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[1].method, 'notEqual', ' == compares object references'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--equal 或 notEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[2].method, 'equal', '6 * \'2\' is 12 ! It should be equal to \'12\''); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--equal 或 notEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[3].method, 'notEqual', '6 + \'2\' is \'62\'...'); }, xhr => { throw new Error(xhr.responseText); })

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

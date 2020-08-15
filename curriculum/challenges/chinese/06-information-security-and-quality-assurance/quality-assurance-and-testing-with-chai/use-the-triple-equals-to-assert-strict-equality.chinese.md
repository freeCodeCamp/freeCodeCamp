---
id: 587d824b367417b2b2512c4b
title: Use the Triple Equals to Assert Strict Equality
challengeType: 2
isHidden: false
forumTopicId: 301610
localeTitle: 用三个等号断言严格相等
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
.strictEqual() 使用 '===' 比较对象
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.strictEqual()</code> 或者 <code>assert.notStrictEqual()</code> 来通过所有测试。

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--strictEqual 或 notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[0].method, 'notStrictEqual', 'with strictEqual the type must match'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--strictEqual 或 notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[1].method, 'strictEqual', '3*2 = 6...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--strictEqual 或 notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[2].method, 'strictEqual', '6 * \'2\' is 12. Types match !'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--strictEqual 或 notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[3].method, 'notStrictEqual', 'Even if they have the same elements, the Arrays are notStrictEqual'); }, xhr => { throw new Error(xhr.responseText); })

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

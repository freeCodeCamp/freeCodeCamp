---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
isHidden: false
forumTopicId: 301596
localeTitle: 真假测试
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。

.isTrue(true) 和 .isNotTrue(everything else) 可以通过测试。

```js
assert.isTrue(true, 'this will pass with the boolean value true');
assert.isTrue('true', 'this will NOT pass with the string value 'true');
assert.isTrue(1, 'this will NOT pass with the number value 1');
```

.isFalse() 和 .isNotFalse() 断言同样存在。
</section>

## Instructions
<section id='instructions'>
使用 assert.isTrue() 或 assert.isNotTrue() 通过测试。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isTrue 或 isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[0].method, 'isTrue', 'True is true'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isTrue 或 isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[1].method, 'isTrue', 'Double negation of a truthy value is true'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isTrue 或 isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[2].method, 'isNotTrue', 'A truthy object is not true - neither is a false one'); }, xhr => { throw new Error(xhr.responseText); })

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

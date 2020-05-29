---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
challengeType: 2
isHidden: false
forumTopicId: 301607
localeTitle: 使用 Assert.isok() 和 Assert.isNotOK()
---

## Description
<section id='description'>

注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。

使用 assert.isOk() 或 assert.isNotOk() 通过测试。
[Truthy 参考](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
[Falsy 参考](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
</section>

## Instructions
<section id='instructions'>

.isOk(truthy) 或 .isNotOk(falsey) 可以通过测试。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isOk 或 isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[0].method, 'isNotOk', 'Null is falsy'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isOk 或 isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[1].method, 'isOk','A string is truthy'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--isOk 或 isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[2].method, 'isOk', 'true is truthy'); }, xhr => { throw new Error(xhr.responseText); })

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

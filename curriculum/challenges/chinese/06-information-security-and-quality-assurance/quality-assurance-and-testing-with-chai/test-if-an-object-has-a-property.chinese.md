---
id: 587d824e367417b2b2512c55
title: Test if an Object has a Property
challengeType: 2
isHidden: false
forumTopicId: 301604
localeTitle: 测试对象是否具有某个属性
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
#property 断言一个对象含有给定属性。

</section>

## Instructions
<section id='instructions'>
使用 <code>assert.property()</code> 或者 <code>assert.notProperty()</code> 来通过所有测试。 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--property 或 notProperty
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[0].method, 'notProperty', 'A car has not wings'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--property 或 notProperty
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[1].method, 'property', 'planes have engines'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--property 或 notProperty
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[2].method, 'property', 'Cars have wheels'); }, xhr => { throw new Error(xhr.responseText); })

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

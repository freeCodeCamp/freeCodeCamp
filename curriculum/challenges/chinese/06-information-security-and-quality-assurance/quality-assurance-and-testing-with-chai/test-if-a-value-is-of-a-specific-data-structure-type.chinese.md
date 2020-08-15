---
id: 587d824e367417b2b2512c56
title: Test if a Value is of a Specific Data Structure Type
challengeType: 2
isHidden: false
forumTopicId: 301601
localeTitle: 测试某个值是否是特定的数据类型
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
#typeOf 断言一个值的类型是给定字符串，这个字符串由 Object.prototype.toString 决定。
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.typeOf()</code> 或者 <code>assert.notTypeOf()</code> 来通过所有测试。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--typeOf 或 notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[0].method, 'typeOf', 'myCar is typeOf Object'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--typeOf 或 notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[1].method, 'typeOf', 'Car.model is a String'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--typeOf 或 notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[2].method, 'notTypeOf', 'Plane.wings is a Number (not a String)'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--typeOf 或 notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[3].method, 'typeOf', 'Plane.engines is an Array'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--typeOf 或 notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[4].method, 'typeOf', 'Car.wheels is a Number'); }, xhr => { throw new Error(xhr.responseText); })

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

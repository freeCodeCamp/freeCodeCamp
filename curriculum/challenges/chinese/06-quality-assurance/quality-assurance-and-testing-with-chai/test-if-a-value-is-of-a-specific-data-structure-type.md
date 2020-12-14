---
id: 587d824e367417b2b2512c56
challengeType: 2
forumTopicId: 301601
title: 测试值是否为特定数据结构类型
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。
<code>#typeOf</code> 断言一个值的类型符合给定的类型，这个类型与 <code>Object.prototype.toString</code> 一致。

</section>

## Instructions
<section id='instructions'>
使用 <code>assert.typeOf()</code> 或 <code>assert.notTypeOf()</code> 让所有测试通过。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—typeOf 或 notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[0].method, 'typeOf', 'myCar is typeOf Object'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—typeOf 或 notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[1].method, 'typeOf', 'Car.model is a String'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—typeOf 或 notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[2].method, 'notTypeOf', 'Plane.wings is a Number (not a String)'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—typeOf 或 notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[3].method, 'typeOf', 'Plane.engines is an Array'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—typeOf 或 notTypeOf
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

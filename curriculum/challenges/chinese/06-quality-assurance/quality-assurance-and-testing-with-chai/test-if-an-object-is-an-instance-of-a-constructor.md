---
id: 587d824e367417b2b2512c57
challengeType: 2
forumTopicId: 301605
title: 测试对象是否是构造函数的实例
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。
<code>#instanceOf</code> 断言一个对象是一个构造器的实例。

</section>

## Instructions
<section id='instructions'>
使用 <code>assert.instanceOf()</code> 或 <code>assert.notInstanceOf()</code> 让测试通过。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—instanceOf 或 notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[0].method, 'notInstanceOf', 'myCar is not an instance of Plane'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—instanceOf 或 notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[1].method, 'instanceOf', 'airlinePlane is an instance of Plane'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—instanceOf 或 notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[2].method, 'instanceOf', 'everything is an Object in JavaScript...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—instanceOf 或 notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[3].method, 'notInstanceOf', 'myCar.wheels is not an instance of String'); }, xhr => { throw new Error(xhr.responseText); })

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

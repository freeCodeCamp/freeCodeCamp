---
id: 587d824e367417b2b2512c57
title: Test if an Object is an Instance of a Constructor
challengeType: 2
isHidden: false
forumTopicId: 301605
localeTitle: 测试对象是否是构造函数的实例
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
#instanceOf 断言一个对象是一个构造器的实例

</section>

## Instructions
<section id='instructions'>
在适当的地方使用 #instanceOf 或 #notInstanceOf
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--instanceOf 或 notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[0].method, 'notInstanceOf', 'myCar is not an instance of Plane'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--instanceOf 或 notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[1].method, 'instanceOf', 'airlinePlane is an instance of Plane'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--instanceOf 或 notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[2].method, 'instanceOf', 'everything is an Object in JavaScript...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言--instanceOf 或 notInstanceOf
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

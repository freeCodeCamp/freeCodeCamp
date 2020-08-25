---
id: 587d824e367417b2b2512c56
title: Test if a Value is of a Specific Data Structure Type
challengeType: 2
videoUrl: ''
localeTitle: 测试值是否为特定数据结构类型
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。 #typeOf断言值的类型是给定的字符串，由Object.prototype.toString确定。在适当的地方使用#typeOf或#notTypeOf </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  typeOf vs. notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[0].method, 'typeOf', 'myCar is typeOf Object'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  typeOf vs. notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[1].method, 'typeOf', 'Car.model is a String'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  typeOf vs. notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[2].method, 'notTypeOf', 'Plane.wings is a Number (not a String)'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  typeOf vs. notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[3].method, 'typeOf', 'Plane.engines is an Array'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  typeOf vs. notTypeOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[4].method, 'typeOf', 'Car.wheels is a Number'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

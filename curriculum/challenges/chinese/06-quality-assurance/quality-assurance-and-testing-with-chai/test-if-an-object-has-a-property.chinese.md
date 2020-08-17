---
id: 587d824e367417b2b2512c55
title: Test if an Object has a Property
challengeType: 2
videoUrl: ''
localeTitle: 测试对象是否具有属性
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。 #property断言实际对象具有给定属性。在适当的地方使用#property或#notProperty </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  property vs. notProperty
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[0].method, 'notProperty', 'A car has not wings'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  property vs. notProperty
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[1].method, 'property', 'planes have engines'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  property vs. notProperty
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[2].method, 'property', 'Cars have wheels'); }, xhr => { throw new Error(xhr.responseText); })

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

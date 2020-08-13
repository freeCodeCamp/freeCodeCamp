---
id: 587d824d367417b2b2512c50
title: Test if a Value is an Array
challengeType: 2
videoUrl: ''
localeTitle: 测试值是否为数组
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isArray vs. isNotArray
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(data => {  assert.equal(data.assertions[0].method, 'isArray', 'String.prototype.split() returns an Array'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isArray vs. isNotArray
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(data => {  assert.equal(data.assertions[1].method, 'isNotArray', 'Array.prototype.indexOf() returns a number'); }, xhr => { throw new Error(xhr.responseText); })

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

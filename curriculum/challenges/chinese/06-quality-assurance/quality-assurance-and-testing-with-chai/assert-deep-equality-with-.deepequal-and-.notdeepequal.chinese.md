---
id: 587d824c367417b2b2512c4c
title: Assert Deep Equality with .deepEqual and .notDeepEqual
challengeType: 2
videoUrl: ''
localeTitle: 使用.deepEqual和.notDeepEqual断言深度等式
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。 .deepEqual（）,. noDeepEqual（）。deepEqual（）断言两个对象是深度相等的</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  deepEqual vs. notDeepEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(data => {  assert.equal(data.assertions[0].method, 'deepEqual', 'The order of the keys does not matter'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  deepEqual vs. notDeepEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(data => {  assert.equal(data.assertions[1].method, 'notDeepEqual', 'The position of elements within an array does matter'); }, xhr => { throw new Error(xhr.responseText); })

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

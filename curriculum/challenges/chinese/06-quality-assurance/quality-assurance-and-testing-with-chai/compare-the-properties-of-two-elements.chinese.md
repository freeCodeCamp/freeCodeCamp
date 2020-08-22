---
id: 587d824c367417b2b2512c4d
title: Compare the Properties of Two Elements
challengeType: 2
videoUrl: ''
localeTitle: 比较两个元素的属性
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。 .isAbove（）=&gt; a&gt; b，.isAtMost（）=&gt; a &lt;= b </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isAbove vs. isAtMost
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[0].method, 'isAtMost', '5 is at most (<=) 5'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isAbove vs. isAtMost
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[1].method, 'isAbove', '1 is greater than 0'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isAbove vs. isAtMost
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[2].method, 'isAbove', 'Math.PI = 3.14159265 is greater than 3'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isAbove vs. isAtMost
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[3].method, 'isAtMost', '1 - Math.random() is > 0 and <= 1. It is atMost 1 !'); }, xhr => { throw new Error(xhr.responseText); })

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

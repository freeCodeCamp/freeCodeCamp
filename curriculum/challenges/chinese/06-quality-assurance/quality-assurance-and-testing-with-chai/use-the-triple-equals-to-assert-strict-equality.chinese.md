---
id: 587d824b367417b2b2512c4b
title: Use the Triple Equals to Assert Strict Equality
challengeType: 2
videoUrl: ''
localeTitle: 使用Triple Equals断言严格平等
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。 .strictEqual（）,. notStrictEqual（）。sqleEqual（）使用&#39;===&#39;比较对象</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  strictEqual vs. notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[0].method, 'notStrictEqual', 'with strictEqual the type must match'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  strictEqual vs. notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[1].method, 'strictEqual', '3*2 = 6...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  strictEqual vs. notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[2].method, 'strictEqual', '6 * \'2\' is 12. Types match !'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  strictEqual vs. notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[3].method, 'notStrictEqual', 'Even if they have the same elements, the Arrays are notStrictEqual'); }, xhr => { throw new Error(xhr.responseText); })

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

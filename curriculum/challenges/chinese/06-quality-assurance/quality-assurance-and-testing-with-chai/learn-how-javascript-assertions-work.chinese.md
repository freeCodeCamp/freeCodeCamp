---
id: 587d824a367417b2b2512c46
title: Learn How JavaScript Assertions Work
challengeType: 2
videoUrl: ''
localeTitle: 了解JavaScript断言的工作原理
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。使用assert.isNull（）或assert.isNotNull（）来使测试通过。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isNull vs. isNotNull
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(data => {  assert.equal(data.assertions[0].method, 'isNull', 'Null is null'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isNull vs. isNotNull
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(data => {  assert.equal(data.assertions[1].method, 'isNotNull', '1 is not null'); }, xhr => { throw new Error(xhr.responseText); })

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

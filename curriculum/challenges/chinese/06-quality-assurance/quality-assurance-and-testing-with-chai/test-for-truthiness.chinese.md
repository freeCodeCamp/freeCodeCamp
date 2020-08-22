---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
videoUrl: ''
localeTitle: 测试真实性
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。使用assert.isTrue（）或assert.isNotTrue（）来使测试通过。 .isTrue（true）和.isNotTrue（其他所有内容）都将通过。 .isFalse（）和.isNotFalse（）也存在。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isTrue vs. isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[0].method, 'isTrue', 'True is true'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isTrue vs. isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[1].method, 'isTrue', 'Double negation of a truthy value is true'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isTrue vs. isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[2].method, 'isNotTrue', 'A truthy object is not true - neither is a false one'); }, xhr => { throw new Error(xhr.responseText); })

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

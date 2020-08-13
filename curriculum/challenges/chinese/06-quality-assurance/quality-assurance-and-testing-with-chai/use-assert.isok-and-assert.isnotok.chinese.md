---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
challengeType: 2
videoUrl: ''
localeTitle: 使用Assert.isOK和Assert.isNotOK
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。使用assert.isOk（）或assert.isNotOk（）来使测试通过。 .isOk（truthy）和.isNotOk（falsey）将通过。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isOk vs. isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[0].method, 'isNotOk', 'Null is falsy'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isOk vs. isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[1].method, 'isOk','A string is truthy'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isOk vs. isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[2].method, 'isOk', 'true is truthy'); }, xhr => { throw new Error(xhr.responseText); })

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

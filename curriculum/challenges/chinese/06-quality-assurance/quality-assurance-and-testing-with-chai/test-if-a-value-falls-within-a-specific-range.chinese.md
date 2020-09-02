---
id: 587d824c367417b2b2512c4f
title: Test if a Value Falls within a Specific Range
challengeType: 2
videoUrl: ''
localeTitle: 测试值是否在特定范围内
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。 。近似。（实际，预期，范围，[消息]）实际=预期+/-范围选择最小范围（第3个参数）使测试始终通过它应小于1 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 使用大约（实际，预期，范围） - 选择正确的范围
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {  assert.equal(data.assertions[0].method, 'approximately');  assert.equal(data.assertions[0].args[2], 0.5, 'weirdNumbers(0.5) is in the range (0.5, 1.5]. It\'s within 1 +/- 0.5'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 使用大约（实际，预期，范围） - 选择正确的范围
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {  assert.equal(data.assertions[1].method, 'approximately');  assert.equal(data.assertions[1].args[2], 0.8, 'weirdNumbers(0.2) is in the range (0.2, 1.2]. It\'s within 1 +/- 0.8'); }, xhr => { throw new Error(xhr.responseText); })

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

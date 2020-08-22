---
id: 587d824b367417b2b2512c47
title: Test if a Variable or Function is Defined
challengeType: 2
videoUrl: ''
localeTitle: 测试变量或函数是否定义
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。使用assert.isDefined（）或assert.isUndefined（）来使测试通过</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isDefined与isUndefined
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[0].method, 'isDefined', 'Null is not undefined'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isDefined与isUndefined
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[1].method, 'isUndefined', 'Undefined is undefined'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  isDefined与isUndefined
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[2].method, 'isDefined', 'A string is not undefined'); }, xhr => { throw new Error(xhr.responseText); })

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

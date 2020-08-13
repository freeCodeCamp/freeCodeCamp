---
id: 587d824b367417b2b2512c4a
title: Use the Double Equals to Assert Equality
challengeType: 2
videoUrl: ''
localeTitle: 使用Double Equals来断言平等
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。 .equal（）,. notEqual（）.equal（）使用&#39;==&#39;比较对象</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 - 相等与不等
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[0].method, 'equal', 'Numbers are coerced into strings with == '); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 - 相等与不等
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[1].method, 'notEqual', ' == compares object references'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 - 相等与不等
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[2].method, 'equal', '6 * \'2\' is 12 ! It should be equal to \'12\''); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 - 相等与不等
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[3].method, 'notEqual', '6 + \'2\' is \'62\'...'); }, xhr => { throw new Error(xhr.responseText); })

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

---
id: 587d824d367417b2b2512c54
title: Use Regular Expressions to Test a String
challengeType: 2
videoUrl: ''
localeTitle: 使用正则表达式测试字符串
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。 #match断言实际值与第二个参数正则表达式匹配。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=14').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 - 匹配与非匹配
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=14'').then(data => {  assert.equal(data.assertions[0].method, ''match'', ''\''# name: John Doe, age: 35\'' matches the regex''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 选择正确的断言 - 匹配与非匹配
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=14'').then(data => {  assert.equal(data.assertions[1].method, ''notMatch'', ''\''# name: Paul Smith III, age: twenty-four\'' does not match the regex (the age must be numeric)''); }, xhr => { throw new Error(xhr.responseText); })'

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

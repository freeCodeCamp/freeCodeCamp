---
id: 587d824d367417b2b2512c53
title: Test if a String Contains a Substring
challengeType: 2
videoUrl: ''
localeTitle: 测试String是否包含子串
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。 #include（在#notInclude上）也适用于字符串!!它断言实际的字符串包含预期的子字符串</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  include与notInclude
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => {  assert.equal(data.assertions[0].method, 'include', '\'Arrow\' contains \'row\'...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 选择正确的断言 -  include与notInclude
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => {  assert.equal(data.assertions[1].method, 'notInclude', '... a \'dart\' doesn\'t contain a \'queue\''); }, xhr => { throw new Error(xhr.responseText); })

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

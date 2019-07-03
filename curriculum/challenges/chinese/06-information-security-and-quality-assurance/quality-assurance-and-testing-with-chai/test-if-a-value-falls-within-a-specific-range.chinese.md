---
id: 587d824c367417b2b2512c4f
title: Test if a Value Falls within a Specific Range
challengeType: 2

videoUrl: ''
localeTitle: Test if a Value Falls within a Specific Range
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
使用 assert.isNull() 或 assert.isNotNull() 通过测试。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=9").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Use approximately(actual, expected, range) - Chose the correct range
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=9").then(data => {  assert.equal(data.assertions[0].method, "approximately");  assert.equal(data.assertions[0].args[2], 0.5, "weirdNumbers(0.5) 区间为 (0.5, 1.5]，在 1 +/- 0.5 之内"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Use approximately(actual, expected, range) - Chose the correct range
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=9").then(data => {  assert.equal(data.assertions[1].method, "approximately");  assert.equal(data.assertions[1].args[2], 0.8, "weirdNumbers(0.2) 区间为 (0.2, 1.2]，在 1 +/- 0.8 之内"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
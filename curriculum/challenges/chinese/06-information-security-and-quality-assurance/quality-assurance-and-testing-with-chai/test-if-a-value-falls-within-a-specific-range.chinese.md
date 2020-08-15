---
id: 587d824c367417b2b2512c4f
title: Test if a Value Falls within a Specific Range
challengeType: 2
isHidden: false
forumTopicId: 301598
localeTitle: 测试某个值是否在特定范围内
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。

<code>.approximately(actual, expected, delta, [message])</code>
断言在 +/- <code>delta</code> 范围内实际和 <code>expected</code> 相等。

actual = expected +/- range
填写最小的 range（第三个参数）使测试总是通过
该值应小于 1
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.approximately()</code> 来通过测试。
选择最小范围（第三个参数）来通过所有测试。它应该小于 1。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Use approximately(actual, expected, range) - Chose the correct range
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {  assert.equal(data.assertions[0].method, 'approximately');  assert.equal(data.assertions[0].args[2], 0.5, 'weirdNumbers(0.5) is in the range (0.5, 1.5]. It\'s within 1 +/- 0.5'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Use approximately(actual, expected, range) - Chose the correct range
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {  assert.equal(data.assertions[1].method, 'approximately');  assert.equal(data.assertions[1].args[2], 0.8, 'weirdNumbers(0.2) is in the range (0.2, 1.2]. It\'s within 1 +/- 0.8'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>

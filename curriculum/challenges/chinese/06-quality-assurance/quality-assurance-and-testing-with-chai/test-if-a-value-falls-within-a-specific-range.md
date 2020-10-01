---
id: 587d824c367417b2b2512c4f
challengeType: 2
forumTopicId: 301598
title: 测试某个值是否在特定范围内
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。

<code>.approximately(actual, expected, delta, [message])</code>
断言待测试的值处于 <code>expected</code> +/- <code>delta</code> 的范围内。
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.approximately()</code> 让测试通过。
选择最小范围（第三个参数）来通过所有测试。它应该小于 1。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 你应使用 approximately(actual, expected, range) 并选择正确的范围
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {  assert.equal(data.assertions[0].method, 'approximately');  assert.equal(data.assertions[0].args[2], 0.5, 'weirdNumbers(0.5) is in the range (0.5, 1.5]. It\'s within 1 +/- 0.5'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 你应使用 approximately(actual, expected, range) 并选择正确的范围
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

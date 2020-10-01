---
id: 587d824b367417b2b2512c49
challengeType: 2
videoUrl: ''
title: 测试真实性
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。

<code>isTrue()</code> 仅当给出的值为 Boolean 的 <code>true</code> 时可以通过测试；<code>isNotTrue()</code> 则会在给出除 <code>true</code> 以外的值时通过测试。

```js
assert.isTrue(true, '可以通过，因为值的类型是布尔且值为 true');
assert.isTrue('true', '不能通过，因为值的类型是字符串);
assert.isTrue(1, '不过能通过，因为值是数字 1');
```


<code>isFalse()</code> 和 <code>isNotFalse()</code> 同样存在，表现与上面提到的两个方法类似。
</section>

## Instructions
<section id='instructions'>
使用 <code>assert.isTrue()</code> 或 <code>assert.isNotTrue()</code> 让测试通过。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—isTrue 或 isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[0].method, 'isTrue', 'True is true'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—isTrue 或 isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[1].method, 'isTrue', 'Double negation of a truthy value is true'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 请选择正确的断言—isTrue 或 isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[2].method, 'isNotTrue', 'A truthy object is not true - neither is a false one'); }, xhr => { throw new Error(xhr.responseText); })

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

---
id: 5cdafbb0291309899753167f
challengeType: 1
forumTopicId: 301197
title: 创建一个 JavaScript Promise
---

## Description
<section id='description'>
Promise 是异步编程的一种解决方案 - 它在未来的某时会生成一个值。任务完成，分执行成功和执行失败两种情况。<code>Promise</code> 是构造器函数，需要通过 <code>new</code> 关键字来创建。构造器参数是一个函数，该函数有两个参数  - <code>resolve</code> 和 <code>reject</code>。通过它们来判断 promise 的执行结果。用法如下：

```js
const myPromise = new Promise((resolve, reject) => {

});
```

</section>

## Instructions
<section id='instructions'>
创建一个名为 <code>makeServerRequest</code> 的 promise。给构造器函数传入 <code>resolve</code> 和 <code>reject</code> 两个参数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该给名为 <code>makeServerRequest</code> 的变量指定一个 promise。
    testString: assert(makeServerRequest instanceof Promise);
  - text: promise 应该接收一个函数做为参数，该函数应该包含 <code>resolve</code> 和 <code>reject</code> 两个参数。
    testString: assert(code.match(/Promise\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js

```

</div>
</section>

## Solution
<section id='solution'>

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```

</section>

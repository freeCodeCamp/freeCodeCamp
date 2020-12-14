---
id: 5cdafbc32913098997531680
challengeType: 1
forumTopicId: 301196
title: 通过 resolve 和 reject 完成 Promise
---

## Description
<section id='description'>
promise 有三个状态：<code>pending</code>、<code>fulfilled</code> 和 <code>rejected</code>。上一个挑战里创建的 promise 一直阻塞在 <code>pending</code> 状态里，因为没有调用 promise 的完成方法。promise 提供的 <code>resolve</code> 和 <code>reject</code> 参数就是用来结束 promise 的。promise 成功时调用 <code>resolve</code>，promise 执行失败时调用 <code>reject</code>，这两个方法接收一个参数，如下所示。

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

上面的例子使用字符串做为函数的参数，也可以是任意类型，通常会是对象，里面可能是将要放到页面或其它地方的数据。
</section>

## Instructions
<section id='instructions'>
使 promise 可以处理成功和失败情况。如果 <code>responseFromServer</code> 是 <code>true</code>，调用 <code>resolve</code> 方法使 promise 成功。给 <code>resolve</code> 传递值为 <code>We got the data</code> 的字符串。如果 <code>responseFromServer</code> 是 <code>false</code>， 使用 <code>reject</code> 方法并传入值为 <code>Data not received</code> 的字符串。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 当 <code>if</code> 条件是 <code>true</code> 时应该执行 <code>resolve</code>。
    testString: assert(removeJSComments(code).match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g));
  - text: 当 <code>if</code> 条件是 <code>false</code> 时应该执行 <code>reject</code>。
    testString: assert(removeJSComments(code).match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
	
  if(responseFromServer) {
    // change this line
  } else {	
    // change this line
  }
});
```

</div>

### After Test
<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
```

</div>
</section>

## Solution
<section id='solution'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});
```

</section>

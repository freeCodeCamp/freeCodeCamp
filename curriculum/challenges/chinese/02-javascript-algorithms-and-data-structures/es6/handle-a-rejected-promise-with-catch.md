---
id: 5cdafbe72913098997531682
title: Handle a Rejected Promise with catch
challengeType: 1
forumTopicId: 301204
localeTitle: 在 catch 中处理 Promise 失败的情况
---

## Description
<section id='description'>
当 promise 失败时会调用 <code>catch</code> 方法。当 promise 的 <code>reject</code> 方法执行时会直接调用。用法如下：

```js
myPromise.catch(error => {
  // do something with the error.
});
```

<code>error</code> 是传入 <code>reject</code> 方法的参数。

<strong>注意：</strong> <code>then</code> 和 <code>catch</code> 方法可以在 promise 后面链式调用。
</section>

## Instructions
<section id='instructions'>
给 promise 添加 <code>catch</code> 方法。用 <code>error</code> 做为回调函数的参数并把 <code>error</code> 打印到控制台。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该在 promise 上调用 <code>catch</code> 方法。
    testString: assert(codeWithoutSpaces.match(/(makeServerRequest|\))\.catch\(/g));
  - text: <code>catch</code> 方法应该有一个回调函数，函数参数为<code>error</code>。
    testString: assert(errorIsParameter);
  - text: 应该打印<code>error</code>到控制台。
    testString: assert(errorIsParameter && codeWithoutSpaces.match(/\.catch\(.*?error.*?console.log\(error\).*?\)/));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```

</div>

### After Test
<div id='js-teardown'>

```js
const codeWithoutSpaces = code.replace(/\s/g, '');
const errorIsParameter = /\.catch\((function\(error\){|error|\(error\)=>)/.test(codeWithoutSpaces);
```

</div>

</section>

## Solution
<section id='solution'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
```

</section>

---
id: 5cdafbd72913098997531681
title: Handle a Fulfilled Promise with then
challengeType: 1
forumTopicId: 301203
localeTitle: 在 then 中处理 Promise 完成的情况
---

## Description
<section id='description'>
当程序需要花费未知的时间才能完成时 Promise 很有用（比如，一些异步操作），一般是网络请求。网络请求会花费一些时间，当结束时需要根据服务器的响应执行一些操作。这可以用 <code>then</code> 方法来实现，当 promise 完成 <code>resolve</code> 时会触发 <code>then</code> 方法。例子如下：

```js
myPromise.then(result => {
  // do something with the result.
});
```

<code>result</code> 即传入 <code>resolve</code> 方法的参数。
</section>

## Instructions
<section id='instructions'>
给 promise 添加 <code>then</code> 方法。用 <code>result</code> 做为回调函数的参数并将 <code>result</code> 打印在控制台。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该给 promise 方法调用 <code>then</code> 方法。
    testString: assert(codeWithoutSpaces.match(/(makeServerRequest|\))\.then\(/g));
  - text: <code>then</code> 方法应该有一个回调函数，回调函数参数为 <code>result</code>。
    testString: assert(resultIsParameter);
  - text: 应该打印 <code>result</code> 到控制台。
    testString: assert(resultIsParameter && codeWithoutSpaces.match(/\.then\(.*?result.*?console.log\(result\).*?\)/));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});
```

</div>

### After Test
<div id='js-teardown'>

```js
const codeWithoutSpaces = code.replace(/\s/g, '');
const resultIsParameter = /\.then\((function\(result\){|result|\(result\)=>)/.test(codeWithoutSpaces);
```

</div>
</section>

## Solution
<section id='solution'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
	
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

</section>

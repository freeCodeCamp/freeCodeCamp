---
title: Await Promises
localeTitle: Await Promise
---
## Await Promise

`async` / `await` [关键字](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)可以更轻松地实现许多异步Promise。它们能帮助工程师编写更清晰，更简洁，可测试的代码。

要理解这个主题，您需要对[Promise](https://guide.freecodecamp.org/javascript/promises)的工作机制有充分的了解。

* * *

## 基本语法

```javascript
function slowlyResolvedPromiseFunc (string) {
  return new Promise（resolve => {
    setTimeout（() => { resolve（string}, 5000;
  };
}

async function doIt () {
  const myPromise = await slowResolvedPromiseFunc ('foo');
  console.log(myPromise); // 'foo'
 }
 
doIt();
```
有几点需要注意: 
 
 * 包含`await`关键字的函数在定义时必须有`async`关键字修饰. 它会阻塞javascript进程，直到Promise执行了resolve或者reject。
 * `await`关键字必须和声明的变量在同一行。
 * 对`reject`和`resolve`效果相同。 
 
 --- 
 
 ## 嵌套 Promises vs. `Async` / `Await` 
 
 实现一个Promise很简单。 然而，链式的Promise或有依赖的模式会导致“意大利面条”式的代码。
 
 The following examples assume that the <a href='https://github.com/request/request-promise' target='_blank' rel='nofollow'>`request-promise`</a> library is available as `rp`. 
 
 ### Chained/Nested Promises 
```

JavaScript的 //第一承诺 const fooPromise = rp（“http://domain.com/foo”）;

fooPromise.then（resultFoo => { //必须等待“foo”才能解决 的console.log（resultFoo）;
```
const barPromise = rp("http://domain.com/bar"); 
 const bazPromise = rp("http://domain.com/baz"); 
 
 return Promise.all([barPromise, bazPromise]); 
```

}）。then（resultArr => { //在此处理“bar”和“baz”分辨率 的console.log（resultArr \[0\]）; 的console.log（resultArr \[1\]）; }）;
```
### `async` and `await` Promises 
```

JavaScript的 //将所有内容包装在异步函数中 异步函数doItAll（）{ //从“foo”端点获取数据，但等待解决 console.log（等待rp（“http://domain.com/foo”））;
```
// Concurrently kick off the next two async calls, 
 // don't wait for "bar" to kick off "baz" 
 const barPromise = rp("http://domain.com/bar"); 
 const bazPromise = rp("http://domain.com/baz"); 
 
 // After both are concurrently kicked off, wait for both 
 const barResponse = await barPromise; 
 const bazResponse = await bazPromise; 
 
 console.log(barResponse); 
 console.log(bazResponse); 
```

}

//最后，调用异步函数 doItAll（）。then（（）=> console.log（'Done！'））;
```
The advantages of using `async` and `await` should be clear. This code is more readable, modular, and testable. 
 
 It's fair to note that even though there is an added sense of concurrency, the underlying computational process is the same as the previous example. 
 
 --- 
 
 ## Handling Errors / Rejection 
 
 A basic try-catch block handles a rejected Promise. 
```

JavaScript的 异步函数errorExample（）{ 尝试{ const rejectedPromise = await Promise.reject（“哦 - 哦！”）; } catch（error）{ 的console.log（误差）; //“呃 - 哦！” } }

errorExample（）; \`\`\`

* * *

#### 更多信息：

*   `await`运营商[MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   `async`功能操作员[MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)

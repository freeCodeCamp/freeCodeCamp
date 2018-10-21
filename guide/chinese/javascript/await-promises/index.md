---
title: Await Promises
localeTitle: 等待承诺
---
## 等待承诺

`async` / `await` [运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)可以更轻松地实现许多异步Promise。它们还允许工程师编写更清晰，更简洁，可测试的代码。

要理解这个主题，您应该对[Promise](https://guide.freecodecamp.org/javascript/promises)如何工作有充分的了解。

* * *

## 基本语法

\`\`\`\`javascript function slowlyResolvedPromiseFunc（string）{ 返回新的Promise（resolve => { setTimeout（（）=> { 解析（字符串）; }，5000）; }）; }

异步函数doIt（）{ const myPromise = await slowResolvedPromiseFunc（“foo”）; 的console.log（myPromise）; //“foo” }

doIt方法（）;
```
There are a few things to note: 
 
 * The function that encompasses the `await` declaration must include the `async` operator. This will tell the JS interpreter that it must wait until the Promise is resolved or rejected. 
 * The `await` operator must be inline, during the const declaration. 
 * This works for `reject` as well as `resolve`. 
 
 --- 
 
 ## Nested Promises vs. `Async` / `Await` 
 
 Implementing a single Promise is pretty straightforward. In contrast, Chained Promises or the creation of a dependency pattern may produce "spaghetti code". 
 
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
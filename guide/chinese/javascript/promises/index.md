---
title: Promises
localeTitle: 承诺
---
## 承诺

JavaScript是单线程的，这意味着两个脚本不能同时运行;他们必须一个接一个地跑。 Promise是一个对象，表示异步操作的最终完成（或失败）及其结果值。

```javascript
var promise = new Promise(function(resolve, reject) { 
  // do thing, then… 
 
  if (/* everything worked */) { 
    resolve("See, it worked!"); 
  } 
  else { 
    reject(Error("It broke")); 
  } 
 }); 
```

## 承诺存在于其中一种状态中

*   待定：初始状态，既未履行也未拒绝。
*   实现：操作成功完成。
*   拒绝：操作失败。

Promise对象用作创建promise时未必知道的值的代理。它允许您将处理程序与异步操作的最终成功值或失败原因相关联。这允许异步方法返回类似于同步方法的值：异步方法返回一个承诺，在将来的某个时刻提供值，而不是立即返回最终值。

## 使用'然后'（承诺链接）

要进行多次异步调用并依次同步它们，可以使用promise chaining。这允许在后面的后续回调中使用第一个promise中的值。

```javascript
Promise.resolve('some') 
  .then(function(string) { // <-- This will happen after the above Promise resolves (returning the value 'some') 
    return new Promise(function(resolve, reject) { 
      setTimeout(function() { 
        string += 'thing'; 
        resolve(string); 
      }, 1); 
    }); 
  }) 
  .then(function(string) { // <-- This will happen after the above .then's new Promise resolves 
    console.log(string); // <-- Logs 'something' to the console 
  }); 
```

## 承诺API

Promise类中有4个静态方法：

*   Promise.resolve
*   Promise.reject
*   Promise.all
*   Promise.race

## 承诺可以链接在一起

编写Promise来解决特定问题时，可以将它们链接在一起形成逻辑。

```javascript
var add = function(x, y) { 
  return new Promise((resolve,reject) => { 
    var sum = x + y; 
    if (sum) { 
      resolve(sum); 
    } 
    else { 
      reject(Error("Could not add the two values!")); 
    } 
  }); 
 }; 
 
 var subtract = function(x, y) { 
  return new Promise((resolve, reject) => { 
    var sum = x - y; 
    if (sum) { 
      resolve(sum); 
    } 
    else { 
      reject(Error("Could not subtract the two values!")); 
    } 
  }); 
 }; 
 
 // Starting promise chain 
 add(2,2) 
  .then((added) => { 
    // added = 4 
    return subtract(added, 3); 
  }) 
  .then((subtracted) => { 
    // subtracted = 1 
    return add(subtracted, 5); 
  }) 
  .then((added) => { 
    // added = 6 
    return added * 2; 
  }) 
  .then((result) => { 
    // result = 12 
    console.log("My result is ", result); 
  }) 
  .catch((err) => { 
    // If any part of the chain is rejected, print the error message. 
    console.log(err); 
  }); 
```

这对于遵循_功能编程_范例很有用。通过创造 用于操纵数据的函数可以将它们链接在一起以组装最终数据 结果。如果在函数链中的任何一点，一个值被_拒绝_链 将跳到最近的`catch()`处理程序。

有关函数编程的更多信息： [函数编程](https://en.wikipedia.org/wiki/Functional_programming)

## 函数发生器

在最近的版本中，JavaScript引入了更多本机处理Promises的方法。一种这样的方法是函数发生器。函数发生器是“可暂停”的函数。与Promises一起使用时，生成器可以使用起来更容易阅读并显示为“同步”。

```javascript
const myFirstGenerator = function* () { 
  const one = yield 1; 
  const two = yield 2; 
  const three = yield 3; 
 
  return 'Finished!'; 
 } 
 
 const gen = myFirstGenerator(); 
```

这是我们的第一个生成器，您可以通过`function*`语法看到它。我们声明的`gen`变量不会运行`myFirstGenerator` ，而是“此生成器可以使用”。

```javascript
console.log(gen.next()); 
 // Returns { value: 1, done: false } 
```

当我们运行`gen.next()` ，它将取消暂停生成器并继续运行。由于这是我们第一次调用`gen.next()` ，它将运行`yield 1`并暂停，直到我们再次调用`gen.next()` 。当调用`yield 1` ，它将返回给我们产生的`value`以及生成器是否`done` 。

```javascript
console.log(gen.next()); 
 // Returns { value: 2, done: false } 
 
 console.log(gen.next()); 
 // Returns { value: 3, done: false } 
 
 console.log(gen.next()); 
 // Returns { value: 'Finished!', done: true } 
 
 console.log(gen.next()); 
 // Will throw an error 
```

当我们继续调用`gen.next()` ，它将继续进行下一次`yield`并且每次都暂停。一旦没有剩余`yield` ，它将继续运行发电机的其余部分，在这种情况下只返回`'Finished!'` 。如果再次调用`gen.next()` ，它将在生成器完成时抛出错误。

现在，假设这个例子中的每个`yield`都是`Promise` ，代码本身看起来非常同步。

### Promise.all（iterable）对于对不同源的多个请求非常有用

Promise.all（iterable）方法返回单个Promise，当可迭代参数中的所有promise都已解析或者iterable参数不包含promise时，它将解析。它拒绝了第一个承诺拒绝的原因。

```javascript
var promise1 = Promise.resolve(catSource); 
 var promise2 = Promise.resolve(dogSource); 
 var promise3 = Promise.resolve(cowSource); 
 
 Promise.all([promise1, promise2, promise3]).then(function(values) { 
  console.log(values); 
 }); 
 // expected output: Array ["catData", "dogData", "cowData"] 
```

### 更多信息

有关承诺的更多信息： [承诺](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
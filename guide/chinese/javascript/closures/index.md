---
title: Closures
localeTitle: 关闭
---
# 关闭

闭包是函数和声明该函数的词法环境（范围）的组合。闭包是Javascript的基础和强大属性。本文讨论关闭闭包的'方式'和'原因'：

### 例

```js
//we have an outer function named walk and an inner function named fly 
 
 function walk (){ 
 
  var dist = '1780 feet'; 
 
  function fly(){ 
    console.log('At '+dist); 
  } 
 
  return fly; 
 } 
 
 var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc 
 //you would expect that once the walk function above is run 
 //you would think that JavaScript has gotten rid of the 'dist' var 
 
 flyFunc(); //Logs out 'At 1780 feet' 
 //but you still can use the function as above 
 //this is the power of closures 
```

### 另一个例子

```js
function by(propName) { 
    return function(a, b) { 
        return a[propName] - b[propName]; 
    } 
 } 
 
 const person1 = {name: 'joe', height: 72}; 
 const person2 = {name: 'rob', height: 70}; 
 const person3 = {name: 'nicholas', height: 66}; 
 
 const arr_ = [person1, person2, person3]; 
 
 const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ] 
```

闭包'记住'创建它的环境。此环境由创建闭包时在范围内的任何局部变量组成。

```js
function outside(num) { 
  var rememberedVar = num; // In this example, rememberedVar is the lexical environment that the closure 'remembers' 
  return function inside() { // This is the function which the closure 'remembers' 
    console.log(rememberedVar) 
  } 
 } 
 
 var remember1 = outside(7); // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside' 
 var remember2 = outside(9); // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside' 
 
 remember1(); // This now executes the function 'inside' which console.logs(rememberedVar) => 7 
 remember2(); // This now executes the function 'inside' which console.logs(rememberedVar) => 9 
```

闭包很有用，因为它们让您“记住”数据，然后让您通过返回的函数操作该数据。这允许javascript模拟其他编程语言中的私有方法。私有方法对于限制对代码的访问以及管理全局命名空间非常有用。

### 私有变量和方法

闭包还可用于封装私有数据/方法。看看这个例子：

```javascript
const bankAccount = (initialBalance) => { 
  const balance = initialBalance; 
 
  return { 
    getBalance: function() { 
      return balance; 
    }, 
    deposit: function(amount) { 
      balance += amount; 
      return balance; 
    }, 
  }; 
 }; 
 
 const account = bankAccount(100); 
 
 account.getBalance(); // 100 
 account.deposit(10); // 110 
```

在这个例子中，我们将无法从`bankAccount`函数之外的任何地方访问`balance` ，这意味着我们刚刚创建了一个私有变量。封闭在哪里？好吧，想想`bankAccount()`正在返回什么。它实际上返回一个带有一堆函数的Object，然而当我们调用`account.getBalance()` ，该函数能够“记住”它对`balance`初始引用。这就是闭包的强大功能，即函数“记住”它的词法范围（编译时范围），即使函数在该词法范围之外执行也是如此。

**模拟块范围的变量。**

Javascript没有块范围变量的概念。这意味着例如在forloop中定义变量时，此变量也可以从forloop外部看到。那么闭包如何帮助我们解决这个问题呢？让我们来看看。

```javascript
    var funcs = []; 
 
    for(var i = 0; i < 3; i++){ 
        funcs[i] = function(){ 
            console.log('My value is ' + i);  //creating three different functions with different param values. 
        } 
    } 
 
    for(var j = 0; j < 3; j++){ 
        funcs[j]();             // My value is 3 
                                // My value is 3 
                                // My value is 3 
    } 
```

由于变量i没有块范围，因此使用循环计数器更新了所有三个函数中的值，并创建了恶意值。 Closure可以通过创建函数创建时的环境快照来帮助我们解决这个问题，保留其状态。

```javascript
    var funcs = []; 
 
    var createFunction = function(val){ 
        return function() {console.log("My value: " + val);}; 
    } 
 
    for (var i = 0; i < 3; i++) { 
        funcs[i] = createFunction(i); 
    } 
    for (var j = 0; j < 3; j++) { 
        funcs[j]();                 // My value is 0 
                                    // My value is 1 
                                    // My value is 2 
    } 
```

javascript es6 +的后期版本有一个名为let的新关键字，可用于为变量提供一个blockscope。 还有许多函数（forEach）和整个库（lodash.js）专门用于解决上述问题。它们当然可以提高您的工作效率，但是在尝试创建大型项目时了解所有这些问题仍然非常重要。

闭包有许多特殊的应用程序，在创建大型JavaScript程序时很有用。

1.  模拟私有变量或封装
2.  进行异步服务器端调用
3.  创建块范围的变量。

**模拟私有变量。**

与许多其他语言不同，Javascript没有允许您在对象中创建封装实例变量的机制。在构建中型到大型程序时，使用公共实例变量会导致很多问题。但是对于闭包，可以减轻这个问题。

与前面的示例非常相似，您可以使用可以访问对象的局部变量的方法构建返回对象文字的函数，而不会暴露它们。因此，使它们实际上是私密的。

闭包还可以帮助您管理全局命名空间，以避免与全局共享数据冲突。通常，所有全局变量都在项目中的所有脚本之间共享，这在构建中型到大型程序时肯定会给您带来很多麻烦。这就是为什么库和模块作者使用闭包来隐藏整个模块的方法和数据的原因。这称为模块模式，它使用立即调用的函数表达式，该函数表达式仅将某些功能导出到外部世界，从而显着减少了全局引用的数量。

这是模块骨架的简短示例。

```javascript
var myModule = (function() = { 
    let privateVariable = 'I am a private variable'; 
 
    let method1 = function(){ console.log('I am method 1'); }; 
    let method2 = function(){ console.log('I am method 2, ', privateVariable); }; 
 
    return { 
        method1: method1, 
        method2: method2 
    } 
 }()); 
 
 myModule.method1(); // I am method 1 
 myModule.method2(); // I am method 2, I am a private variable 
```

闭包对于捕获“记住的”环境中包含的私有变量的新实例很有用，并且这些变量只能通过返回的函数来访问。

### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)  
[Javascript闭包](https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44)
---
title: Callback Functions
localeTitle: 回调函数
---
本文简要介绍了Javascript编程语言中回调函数的概念和用法。

## 功能是对象

我们需要知道的第一件事是在Javascript中，函数是一流的对象。因此，我们可以像处理其他对象一样使用它们，比如将它们分配给变量并将它们作为参数传递给其他函数。这很重要，因为后一种技术允许我们在应用程序中扩展功能。

## 回调函数

**回调函数**是_作为参数_传递给另一个函数的函数，以便稍后“回调”。接受其他函数作为参数的函数称为**高阶函数** ，这个包含回调函数执行_时_的逻辑。这两者的结合使我们能够扩展我们的功能。

为了说明回调，让我们从一个简单的例子开始：

```javascript
function createQuote(quote, callback){ 
  var myQuote = "Like I always say, " + quote; 
  callback(myQuote); // 2 
 } 
 
 function logQuote(quote){ 
  console.log(quote); 
 } 
 
 createQuote("eat your vegetables!", logQuote); // 1 
 
 // Result in console: 
 // Like I always say, eat your vegetables! 
```

在上面的例子中， `createQuote`是高阶函数，这个接受两个参数，第二个是回调。 `logQuote`函数用于传入我们的回调函数。当我们执行`createQuote`函数_（1）时_ ，请注意当我们将这个作为参数传递时，我们_不会将_括号_附加_到`logQuote` 。这是因为我们不想立即执行我们的回调函数，我们只是想将函数定义传递给高阶函数，以便以后执行。

此外，我们需要确保如果我们传入的回调函数需要参数，那么我们在执行回调时提供这些参数_（2）_ 。在上面的例子中，那将是`callback(myQuote);`声明，因为我们知道`logQuote`需要传入引号。

另外，我们可以传递匿名函数作为回调。以下对`createQuote`调用与上面的示例具有相同的结果：

```javascript
createQuote("eat your vegetables!", function(quote){ 
  console.log(quote); 
 }); 
```

顺便说一句，你_不必_用“callbacks”作为参数的名称，使用Javascript只需要知道它是正确的参数名称。基于上面的例子，下面的函数将以完全相同的方式运行。

```javascript
function createQuote(quote, functionToCall) { 
  var myQuote = "Like I always say, " + quote; 
  functionToCall(myQuote); 
 } 
```

## 为什么要使用Callbacks？

大多数时候，我们正在创建以**同步**方式运行的程序和应用程序。换句话说，我们的一些操作只有在前面的操作完成后才会启动。通常，当我们从其他来源（例如外部  API）请求数据时，我们并不总是知道_何时_会回送我们的数据。在这些情况下，我们希望等待响应，但我们并不总是希望我们的整个应用程序在获取数据时停止运行。这些情况是回调函数派上用场的地方。

我们来看一个模拟对服务器的请求的示例：

```javascript
function serverRequest(query, callback){ 
  setTimeout(function(){ 
    var response = query + "full!"; 
    callback(response); 
  },5000); 
 } 
 
 function getResults(results){ 
  console.log("Response from the server: " + results); 
 } 
 
 serverRequest("The glass is half ", getResults); 
 
 // Result in console after 5 second delay: 
 // Response from the server: The glass is half full! 
```

在上面的示例中，我们向服务器发出模拟请求。经过5秒后，响应被修改，然后我们的回调函数`getResults`被执行。要查看此操作，您可以将上述代码复制/粘贴到浏览器的开发人员工具中并执行它。

此外，如果您已经熟悉`setTimeout` ，那么您一直在使用回调函数。传递给上面例子的`setTimeout`函数调用的匿名函数参数也是一个回调函数！因此，示例的原始回调实际上是由另一个回调执行的。如果你可以帮忙的话，小心不要嵌套太多的回调，因为这会导致一种叫做“callback hell”的东西！顾名思义，处理起来并不是一种乐趣。

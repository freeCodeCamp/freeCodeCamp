---
title: Functional
localeTitle: 实用
---
```javascript
var fun = function(a, b) { 
  var funInstance = {}; 
  funInstance.a = a; 
  funInstance.b = b; 
  funInstance.method1 = function() { 
    // method code here 
  } 
  funInstance.method2 = function() { 
    // method code here 
  } 
  funInstance.method3 = function() { 
    // method code here 
  } 
  return funInstance; 
 } 
 var myFun = fun(1, 2); 
 myFun.method1(); 
```

## 我怎么认出来的？

功能对象实例化创建一个带有函数的类实例，就像其他选项一样。不同之处在于所有相关方法也在构造函数中定义。

## 我为什么要用它？

由于为对象的每个实例创建了一组新方法，并且可能占用大量内存，因此当您知道不打算使用大量实例时，功能实例化是有益的。新的和经验丰富的JavaScript编码器也能轻松理解您的代码，因为实例化完全是自包含的，并且很容易看到方法和对象实例之间的关系。

## 有什么缺点？

功能实例化的缺点是，如果要对代码进行任何更改（例如添加更多方法），则在进行这些更改之前创建的对象的任何实例都不会更新。最终可能会有两个包含不同方法信息的实例。

* * *

## 标题：功能共享

```javascript
var fun = function(a, b) { 
  var funInstance = {}; 
  funInstance.a = a; 
  funInstance.b = b; 
  extend(funInstance, funMethods); 
  return funInstance; 
 } 
 var extend = function(to, from) { 
  for (var key in from) { 
    to[key] = from[key]; 
  } 
 } 
 var funMethods = {}; 
 funMethods.method1 = function() { 
    // method code here 
 } 
 funMethods.method2 = function() { 
    // method code here 
 } 
 funMethods.method3 = function() { 
    // method code here 
 } 
 var myFun = fun(1, 2); 
 myFun.method1(); 
```

## 我怎么认出来的？

Functional和Functional-Shared之间的主要区别在于，在Functional-Shared中我们共享我们的方法。我们有一个单独的对象来保存我们的所有方法，而不是在我们的Instantiation函数中声明方法。为了使用这些方法，我们将它们扩展到正在创建的对象的每个实例中。

## 我为什么要用它？

Functional-Shared允许我们使用对方法的引用，而不是为我们对象的每个实例声明和存储我们的方法，从而节省了空间。

## 有什么缺点？

缺点是，由于方法是通过指向方法对象的指针引用的，如果我们以任何方式更新方法对象，那么在更改之前创建的对象实例将不会更新。最终可能会有两个对象实例引用两个不同版本的方法。

* * *

## 标题：原型

```javascript
var fun = function(a, b) { 
  var funInstance = Object.create(funMethods); 
  funInstance.a = a; 
  funInstance.b = b; 
  return funInstance; 
 } 
 var funMethods = {}; 
 funMethods.method1 = function() { 
    // method code here 
 } 
 funMethods.method2 = function() { 
    // method code here 
 } 
 funMethods.method3 = function() { 
    // method code here 
 } 
 var myFun = fun(1, 2); 
 myFun.method1(); 
```

## 我怎么认出来的？

Prototypal类似于Functional-Shared，因为它们都使用单独的方法对象来保存将在我们创建的对象的实例之间共享的所有方法。不同之处在于我们可以使用原型链。我们可以使用Object.create（prototype）创建对象，以便将方法附加到我们的对象实例。持有我们共享方法的对象被认为是原型。

## 我为什么要用它？

如果在创建对象实例后对原型进行更改，则将更新该实例。你不会得到两个具有不同方法的相同原型的实例。

## 有什么缺点？

使用此方法的缺点是需要额外的步骤和额外的代码。我们不仅要像以前一样创建和返回我们的对象，还要装饰它。

* * *

## 标题：伪古典

```javascript
var Fun = function(a, b) { 
  // this = Object.create(Fun.prototype); 
  this.a = a; 
  this.b = b; 
  // return this; 
 } 
 Fun.prototype.method1 = function() { 
    // method code here 
 } 
 Fun.prototype.method2 = function() { 
    // method code here 
 } 
 Fun.prototype.method3 = function() { 
    // method code here 
 } 
 var myFun = new Fun(1, 2); 
 myFun.method1(); 
```

## 我怎么认出来的？

伪古典实例化到目前为止包含的代码量最少。 new关键字不是创建新对象并返回它，而是为我们做到这一点。在引擎盖下，当您使用new关键字实例化对象时，使用this = Object.create（Object.prototype）创建一个新对象，其中这指的是以new关键字命名的原型。当我们定义方法时，我们使用prototype关键字。

## 我为什么要用它？

Pseudoclassical被认为是最快的实例化模式，如果您要创建数万个实例，这将非常有用。它也是最优化的，因为它利用了Javascript功能。

## 有什么缺点？

Pseudoclassical Instantiation的缺点是它需要更多关于JavaScript正在做什么的知识，特别是使用this关键字。这使得这种类型的对象实例化更难以理解，特别是如果其他人正在阅读您的代码
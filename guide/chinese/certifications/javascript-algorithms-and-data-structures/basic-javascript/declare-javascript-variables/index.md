---
title: Declare JavaScript Variables
localeTitle: 声明JavaScript变量
---
# 声明JavaScript变量

当我们将数据存储在数据结构中时，我们将其称为变量。 JavaScript变量是用驼峰式编写的。驼峰案例的一个例子是： `camelCase` 。

您可以通过这种方式声明变量

```js
    var myName = "Rafael"; 
```

ES6引入了另外两种声明变量的方法。 **让**和**const** 。 _让我们_非常类似于var，并且在很大程度上是可以互换的：

```js
    let myAge = 36; 
```

在哪里_让_不同，在其范围内。当我们声明使用_var时_ ，它的范围是全局的。当我们声明使用_let时_ ，范围仅限于该函数。如果要在函数外部使用_let_变量，则必须使其在范围内全局或在下一个函数中重新声明它。

另一方面， **const**只能声明一次。它的价值永远不会改变。

```js
    const myName = "Christina"; 

```
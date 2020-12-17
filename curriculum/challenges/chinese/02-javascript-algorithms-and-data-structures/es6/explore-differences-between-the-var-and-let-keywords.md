---
id: 587d7b87367417b2b2512b3f
title: 探索 var 和 let 关键字之间的差异
challengeType: 1
forumTopicId: 301202
---

# --description--

使用`var`关键字来声明变量，会出现重复声明导致变量被覆盖却不会报错的问题：

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'
```

在上面的代码中，`camper`的初始值为`'James'`，然后又被覆盖成了`'David'`。 在小型的应用中，你可能不会遇到这样的问题，但是当你的代码规模变得更加庞大的时候，就可能会在不经意间覆盖了之前定义的变量。 这样的行为不会报错，导致了 debug 非常困难。  
在 ES6 中引入了新的关键字`let`来解决`var`关键字带来的潜在问题。 如果你在上面的代码中，使用了`let`关键字来代替`var`关键字，结果会是一个报错。

```js
let camper = 'James';
let camper = 'David'; // throws an error
```

你可以在浏览器的控制台里看见这个错误。 与`var`不同的是，当使用`let`的时候，同一名字的变量只能被声明一次。 请注意`"use strict"`。这代表着开启了严格模式，用于检测常见的代码错误以及"不安全"的行为，例如：

```js
"use strict";
x = 3.14; // throws an error because x is not declared
```

# --instructions--

请更新这段代码，并且在其中只使用`let`关键字

# --hints--

在代码中不应存在`var`。

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`catName`变量的值应该为`'Oliver'`。

```js
assert(catName === 'Oliver');
```

`quote`变量的值应该为`'Oliver says Meow!'`

```js
assert(quote === 'Oliver says Meow!');
```

# --solutions--


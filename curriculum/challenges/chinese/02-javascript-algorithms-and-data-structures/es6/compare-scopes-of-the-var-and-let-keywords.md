---
id: 587d7b87367417b2b2512b40
title: 比较 var 和 let 关键字的作用域
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

当你使用`var`关键字来声明一个变量的时候，这个变量会被声明成全局变量，或是函数内的局部变量。

`let`关键字的作用类似，但会有一些额外的特性。如果你在代码块、语句或表达式中使用关键字`let`声明变量，这个变量的作用域就被限制在当前的代码块，语句或表达式之中。

举个例子：

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// 返回 [0, 1, 2]
console.log(i);
// 返回 3
```

当使用`var`关键字的时候，`i`会被声明成全局变量。当`i++`执行的时候，它会改变全局变量的值。这段代码可以看做下面这样:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// 返回 [0, 1, 2]
console.log(i);
// 返回 3
```

如果你在`for`循环中创建了使用`i`变量的函数，那么在后续调用函数的时候，上面提到的这种行为就会出现问题。这是因为函数存储的值会因为全局变量`i`的变化而不断的改变。

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// 返回 3
```

可以看到，`printNumTwo()`打印了 3 而不是 2。这是因为`i`发生了改变，并且函数`printNumTwo()`返回的是全局变量`i`的值，而不是`for`循环中创建函数时`i`的值。`let`关键字就不会有这种现象：

```js
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// 返回 2
console.log(i);
// 返回 "i 未定义"
```

`i`在全局作用域中没有声明，所以它没有被定义，它的声明只会发生在`for`循环内。在循环执行的时候，`let`关键字创建了三个不同的`i`变量，他们的值分别为 0、1 和 2，所以`printNumTwo()`返回了正确的值。

# --instructions--

修改这段代码，使得在`if`语句中声明的`i`变量与在函数的第一行声明的`i`变量是彼此独立的。请注意不要在你的代码的任何地方使用`var`关键字。

这个练习说明了使用`var`与`let`关键字声明变量时，作用域之间的不同。当编写类似这个练习中的函数的时候，通常来说最好还是使用不同的变量名来避免误会。

# --hints--

`var`不应该在代码中存在。

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

在`if`语句中声明的`i`变量的值是 'block scope'。

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g)
  );
```

`checkScope()`应当返回 'function scope'

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
 
  console.log('Function scope i is: ', i);
  return i;
}
```

---
id: 587d7b87367417b2b2512b40
title: 比较 var 和 let 关键字的作用域
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

使用 `var` 关键字来声明一个变量的时候，这个变量会被声明成全局变量，或是函数内的局部变量。

`let` 关键字的作用与此类似，但会有一些额外的特性。 如果在代码块、语句或表达式中使用关键字 `let` 声明变量，这个变量的作用域就被限制在当前的代码块、语句或表达式之中。

举个例子：

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

这里控制台将显示值 `[0, 1, 2]` 和 `3`。

因为使用了 `var` 关键字，`i` 被声明为全局变量。 所以当 `i++` 执行时，它会更新全局变量。 这个代码和下方的代码类似：

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

这里控制台将显示值 `[0, 1, 2]` 和 `3`。

如果你创建一个函数，将它存储起来，稍后在使用 `i` 变量的 `for` 循环中使用。这么做可能会出现问题。 这是因为存储的函数会总是指向更新后的全局 `i` 变量的值。

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
```

这里控制台将显示值 `3`。

可以看到，`printNumTwo()` 打印了 3，而不是 2。 这是因为赋值给 `i` 的值已经更新，`printNumTwo()` 返回全局的 `i`，而不是在 for 循环中创建函数时 `i` 的值。 `let` 关键字就不会出现这种现象：

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

在这里控制台将显示值 `2` 和一个错误提示 `i is not defined`。

`i` 未定义，因为它没有在全局范围内声明。 它只在 `for` 循环语句中被声明。 `printNumTwo()` 返回了正确的值，因为 `let` 关键字在循环语句中使 `i` 变量产生了三个不同的值（分别为 0、1、2）。

# --instructions--

修改这段代码，使 `if` 语句中声明的 `i` 变量与在函数的第一行声明的 `i` 变量是彼此独立的。 请注意不要在你的代码的任何地方使用 `var` 关键字。

这个练习旨在表明使用 `var` 与 `let` 关键字声明变量时作用域之间的区别。 当编写类似这个练习中的函数的时候，通常来说最好使用不同的变量名，以避免混淆。

# --hints--

代码中不应该出现 `var`。

```js
assert(!code.match(/var/g));
```

`if` 语句中声明的变量 `i` 应该等于字符串 `block scope`。

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

`checkScope()` 应该返回字符串 `function scope`。

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

---
id: 587d7b85367417b2b2512b38
title: 捕获使用赋值运算符而不是相等运算符
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

分支程序，即在满足某些条件时执行不同操作的程序，依赖于 JavaScript 中的`if`，`else if`、`else`语句。 条件有时采取测试一个结果是否等于一个值的形式。

这种逻辑可以表述为“如果 x 等于 y ，则......”，听起来像是可以使用 `=`（即赋值运算符）。 然而，这会导致程序中流程出问题。

如前面的挑战所述，JavaScript 中的赋值运算符 (`=`) 是用来为变量名赋值的。 并且 `==` 和 `===` 运算符检查相等性（三等号 `===` 是用来测试是否严格相等的，严格相等的意思是值和类型都必须相同）。

下面的代码将 `x` 赋值为 2，表达式会在执行后得到 `true`。 JavaScript 会把大部分的值都视为 `true`，除了所谓的 “falsy”值，即：`false`、`0`、`""`（空字符串）、`NaN`、`undefined` 和 `null`。

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

在这个示例中，除非 `y` 值是假值，否则当 `y` 为任何值时，`if` 语句中的代码块都会运行。 我们期望运行的 `else` 代码块实际上将不会运行。

# --instructions--

修复条件语句，以便程序运行正确的分支，并给 `result` 赋正确的值。

# --hints--

应该修复条件语句，使其判断是否相等，而不是赋值。

```js
assert(result == 'Not equal!');
```

条件语句可以使用 `==` 或 `===` 来测试是否相等。

```js
assert(code.match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```

---
id: 587d7b87367417b2b2512b41
title: 使用 const 关键字声明只读变量
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

关键字 `let` 并不是声明变量的唯一新方法。 在 ES6 中，你还可以使用 `const` 关键字声明变量。

`const` 具有 `let` 的所有出色功能，另外还有一个额外的好处，即使用 `const` 声明的变量是只读的。 它们是一个常量值，这意味着一旦一个变量被赋值为 `const`，它就不能被重新赋值：

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

由于重新分配 `FAV_PET` 的值，控制台将显示错误。

你应该始终使用 `const` 关键字命名不想重新分配的变量。 这有助于避免给一个常量进行额外的再次赋值。

**注意：** 通常，开发者会用大写字母作为常量标识符，用小写字母或者驼峰命名作为变量（对象或数组）标识符。 你将在后面的挑战中了解有关对象、数组以及不可变和可变值的更多信息。 同样在后面的挑战中，你将看到大写、小写或驼峰式变量标识符的示例。

# --instructions--

更改代码，以便使用 `let` 或 `const` 声明所有变量。 当你想要改变变量时使用 `let`，当你想要变量保持不变时使用 `const`。 此外，重命名使用 `const` 声明的变量以符合惯例。 请勿更改分配给变量的字符串。

# --hints--

代码中不应有 `var`。

```js
assert.notMatch(code, /var/g);
```

你应该将 `fCC` 更改为全部大写。

```js
assert.match(code, /(FCC)/);
assert.notMatch(code, /(fCC)/);
```

`FCC` 应该是一个用 `const` 声明的常量。

```js
assert.match(code, /const\s+FCC/);
```

分配给 `FCC` 的字符串不应更改。

```js
assert.equal(FCC, 'freeCodeCamp');
```

`fact` 应该用 `let` 声明。

```js
assert.match(code, /(let\s+fact)/g);
```

`console.log` 应该更改为打印 `FCC` 和 `fact` 变量。

```js
assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```

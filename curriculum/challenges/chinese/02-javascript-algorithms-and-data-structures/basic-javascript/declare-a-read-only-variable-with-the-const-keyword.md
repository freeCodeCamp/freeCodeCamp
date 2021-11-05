---
id: 587d7b87367417b2b2512b41
title: 用 const 关键字声明只读变量
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

`let` 并不是唯一的新的声明变量的方式。 在 ES6 里面，你还可以使用 `const` 关键字来声明变量。

`const` 拥有 `let` 的所有优点，不同的是，通过 `const` 声明的变量是只读的。 这意味着通过 `const` 声明的变量只能被赋值一次，而不能被再次赋值。

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

控制台将由于给 `FAV_PET` 重新赋值而显示错误。

可见，尝试给用 `const` 声明的变量重新赋值会报错。 你应该使用 `const` 关键字来声明所有不打算再次赋值的变量。 这有助于避免给一个常量进行额外的再次赋值。 一个最佳实践是对所有常量的命名采用全大写字母，并在单词之间使用下划线进行分隔。

**注意：**通常，开发者会用大写字母作为常量标识符，用小写字母或者驼峰命名作为变量（对象或数组）标识符。 后面的挑战会涉及到在数组中使用小写变量标识符。

# --instructions--

改变以下代码，使得所有的变量都使用 `let` 或 `const` 关键词来声明。 当变量将会改变的时候使用 `let` 关键字，当变量要保持常量的时候使用 `const` 关键字。 同时，对使用 `const` 声明的变量按照最佳实践重命名，变量名中的字母应该都是大写的。

# --hints--

代码中不应有 `var`。

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`SENTENCE` 应该是使用 `const` 声明的常量。

```js
(getUserInput) => assert(getUserInput('index').match(/(const SENTENCE)/g));
```

`i` 应该是使用 `let`声明的。

```js
(getUserInput) => assert(getUserInput('index').match(/(let i)/g));
```

`console.log` 应该修改为用于打印 `SENTENCE` 变量。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));
```

# --seed--

## --seed-contents--

```js
function printManyTimes(str) {

  // Only change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
```

# --solutions--

```js
function printManyTimes(str) {

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");
```

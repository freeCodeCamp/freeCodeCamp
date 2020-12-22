---
id: 587d7b87367417b2b2512b41
title: 用 const 关键字声明只读变量
challengeType: 1
forumTopicId: 301201
---

# --description--

`let`并不是唯一的新的声明变量的方式。在 ES6里面，你还可以使用`const`关键字来声明变量。

`const`拥有`let`的所有优点，所不同的是，通过`const`声明的变量是只读的。这意味着通过`const`声明的变量只能被赋值一次，而不能被再次赋值。

```js
"use strict";
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
```

可以看见，尝试给通过`const`声明的变量再次赋值会报错。你应该使用`const`关键字来对所有不打算再次赋值的变量进行声明。这有助于你避免给一个常量进行额外的再次赋值。一个最佳实践是对所有常量的命名采用全大写字母，并在单词之间使用下划线进行分隔。

**注意：** 一般开发者会以大写做为常量标识符，小写字母或者驼峰命名做为变量（对象或数组）标识符。接下来的挑战里会涉及到小写变量标识符的数组。

# --instructions--

改变以下代码，使得所有的变量都使用`let`或`const`关键词来声明。当变量将会改变的时候使用`let`关键字，当变量要保持常量的时候使用`const`关键字。同时，对使用`const`声明的变量按照最佳实践重命名，变量名中的字母应该都是大写的。

# --hints--

`var`在代码中不存在。

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`SENTENCE`应该是使用`const`声明的常量。

```js
(getUserInput) => assert(getUserInput('index').match(/(const SENTENCE)/g));
```

`i`应该是使用`let`声明的变量。

```js
(getUserInput) => assert(getUserInput('index').match(/(let i)/g));
```

`console.log`应该修改为用于打印`SENTENCE`变量。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));
```

# --solutions--


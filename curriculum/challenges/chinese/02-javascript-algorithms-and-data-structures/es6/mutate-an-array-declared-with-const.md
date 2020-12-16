---
id: 587d7b87367417b2b2512b42
title: 改变一个用 const 声明的数组
challengeType: 1
forumTopicId: 301206
---

# --description--

在现代的 JavaScript 里，`const`声明有很多用法。

一些开发者倾向默认使用`const`来声明所有变量，但如果它们打算在后续的代码中修改某个值，那在声明的时候就会用`let`。

然而，你要注意，对象（包括数组和函数）在使用`const`声明的时候依然是可变的。使用`const`来声明只会保证它的标识不会被重新赋值。

```js
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```

从以上代码看出，你可以改变`[5, 6, 7]`自身，所以`s`变量指向了改变后的数组`[5, 6, 45]`。和所有数组一样，数组`s`中的数组元素是可以被改变的，但是因为使用了`const`关键字，你不能使用赋值操作符将变量标识`s`指向另外一个数组。

# --instructions--

这里有一个使用`const s = [5, 7, 2]`声明的数组。使用对各元素赋值的方法将数组改成`[2, 5, 7]`。

# --hints--

不要替换`const`关键字。

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s`应该为常量 (通过使用`const`)。

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

不要改变原数组的声明。

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

`s`应该等于`[2, 5, 7]`。

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --solutions--


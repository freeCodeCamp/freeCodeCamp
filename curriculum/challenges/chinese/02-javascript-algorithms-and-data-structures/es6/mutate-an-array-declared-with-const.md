---
id: 587d7b87367417b2b2512b42
title: 改变一个用 const 声明的数组
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

在现代的 JavaScript 里，`const` 声明有很多用法。

一些开发者倾向于默认使用 `const` 来声明所有变量，除非他们打算后续重新给变量赋值， 那么他们在声明的时候就会用 `let`。

然而，你要注意，对象（包括数组和函数）在使用 `const` 声明的时候依然是可变的。 使用 `const` 来声明只会保证变量不会被重新赋值。

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` 会导致一个错误。 `console.log` 会显示值 `[5, 6, 45]`。

可以发现，你可以改变对象 `[5, 6, 7]` 本身，而变量 `s` 会指向改变后的数组 `[5, 6, 45]`。 和所有数组一样，数组 `s` 中的元素是可以被改变的，但是因为使用了 `const` 关键字，你不能使用赋值操作符将变量标识 `s` 指向另外一个数组。

# --instructions--

这里有一个使用 `const s = [5, 7, 2]` 声明的数组。 使用对各元素赋值的方法将数组改成 `[2, 5, 7]`。

# --hints--

不要替换 `const` 关键字。

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` 应该为常量（使用 `const`）。

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

`s` 应该等于 `[2, 5, 7]`。

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```

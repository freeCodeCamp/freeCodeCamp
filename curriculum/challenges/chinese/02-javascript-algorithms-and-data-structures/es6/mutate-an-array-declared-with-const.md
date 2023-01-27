---
id: 587d7b87367417b2b2512b42
title: 改变一个用 const 声明的数组
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

如果你不熟悉 `const`，请查看 <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword" target="_blank" rel="noopener noreferrer nofollow">这个 <code>const</code> 关键词的挑战</a>。

`const` 声明在现代 JavaScript 中有很多用例。

默认情况下，一些开发人员更喜欢使用 `const` 分配所有变量，除非他们知道需要重新分配值。 只有在这种情况下，他们才使用 `let`。

但是，重要的是要了解使用 `const` 分配给变量的对象（包括数组和函数）仍然是可变的。 使用 `const` 声明只能防止变量标识符的重新分配。

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` 将导致错误。 注释掉该行后，`console.log` 将显示值 `[5, 6, 45]`。

如你所见，你可以改变对象 `[5, 6, 7]` 本身，变量 `s` 仍将指向更改后的数组 `[5, 6, 45]`。 像所有数组一样，`s` 中的数组元素是可变的，但是因为使用了 `const`，所以不能使用变量标识符 `s` 来指向一个使用赋值运算符的不同数组。

# --instructions--

数组声明为 `const s = [5, 7, 2]`。 使用对各元素赋值的方法将数组改成 `[2, 5, 7]`。

# --hints--

不要替换 `const` 关键字。

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` 应该是一个常量变量（通过使用 `const`）。

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

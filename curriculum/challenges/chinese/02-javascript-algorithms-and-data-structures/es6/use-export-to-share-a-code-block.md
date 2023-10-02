---
id: 587d7b8c367417b2b2512b56
title: 用 export 来重用代码块
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

假设有一个文件 `math_functions.js`，该文件包含了数学运算相关的一些函数。 其中一个存储在变量 `add` 里，该函数接受两个数字作为参数返回它们的和。 你想在几个不同的 JavaScript 文件中使用这个函数。 要实现这个目的，就需要 `export` 它。

```js
export const add = (x, y) => {
  return x + y;
}
```

上面是导出单个函数常用方法，还可以这样导出：

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

导出变量和函数后，就可以在其它文件里导入使用从而避免了代码冗余。 重复第一个例子的代码可以导出多个对象或函数，在第二个例子里面的导出语句中添加更多值也可以导出多项，例子如下：

```js
export { add, subtract };
```

# --instructions--

编辑框中有两个字符串相关的函数。 选用一种方法导出两个函数。

# --hints--

应该导出 `uppercaseString` 变量。

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

应该导出 `lowercaseString` 变量。

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

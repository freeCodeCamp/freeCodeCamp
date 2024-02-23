---
id: 587d7daa367417b2b2512b6c
title: 使用 join 方法将数组组合成字符串
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

`join` 方法用来把数组中的所有元素放入一个字符串。 并通过指定的分隔符参数进行分隔。

举个例子：

```js
const arr = ["Hello", "World"];
const str = arr.join(" ");
```

`str` 的值应该是字符串 `Hello World`。
# --instructions--

在函数 `sentensify` 内用 `join` 方法（及其他方法）用字符串 `str` 中的单词造句，这个函数应返回一个字符串。 该函数应返回一个数组。 举个例子，`I-like-Star-Wars` 会被转换成 `I like Star Wars`。 在此挑战中请勿使用 `replace` 方法。

# --hints--

应使用 `join` 方法。

```js
assert(code.match(/\.join/g));
```

不能使用 `replace` 方法。

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` 应返回一个字符串。

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` 应返回 `May the force be with you`。

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` 应返回 `The force is strong with this one`。

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` 应返回 `There has been an awakening`。

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  return str.split(/\W/).join(' ');
}
```

---
id: 587d7daa367417b2b2512b6c
title: 使用 join 方法將數組組合成字符串
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

`join` 方法用來把數組中的所有元素放入一個字符串。 並通過指定的分隔符參數進行分隔。

舉個例子：

```js
const arr = ["Hello", "World"];
const str = arr.join(" ");
```

`str` 的值應該是字符串 `Hello World`。
# --instructions--

在函數 `sentensify` 內用 `join` 方法（及其他方法）用字符串 `str` 中的單詞造句，這個函數應返回一個字符串。 該函數應返回一個數組。 舉個例子，`I-like-Star-Wars` 會被轉換成 `I like Star Wars`。 在此挑戰中請勿使用 `replace` 方法。

# --hints--

應使用 `join` 方法。

```js
assert(code.match(/\.join/g));
```

不能使用 `replace` 方法。

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` 應返回一個字符串。

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` 應返回 `May the force be with you`。

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` 應返回 `The force is strong with this one`。

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` 應返回 `There has been an awakening`。

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

---
id: 587d7faa367417b2b2512bd6
title: 给 D3 元素添加工具提示
challengeType: 6
forumTopicId: 301470
---

# --description--

当用户在一个对象上悬停时，提示框可以显示关于这个对象更多的信息。在可视化中有多种方法添加提示框，这个挑战将使用 SVG 的 `title` 元素。

请使用 `tile` 和 `text()` 方法一起给每组动态添加数据。

# --instructions--

在每个 `rect` 节点下面添加一个 `title` 元素，然后用回调函数调用 `text()` 方法使它的文本显示数据值。

# --hints--

你应该有 9 个 `title` 元素。

```js
assert($('title').length == 9);
```

第一个 `title` 元素的提示框文本应为 12。

```js
assert($('title').eq(0).text() == '12');
```

第二个 `title` 元素的提示框文本应为 31。

```js
assert($('title').eq(1).text() == '31');
```

第三个 `title` 元素的提示框文本应为 22。

```js
assert($('title').eq(2).text() == '22');
```

第四个 `title` 元素的提示框文本应为 17。

```js
assert($('title').eq(3).text() == '17');
```

第五个 `title` 元素的提示框文本应为 25。

```js
assert($('title').eq(4).text() == '25');
```

第六个 `title` 元素的提示框文本应为 18。

```js
assert($('title').eq(5).text() == '18');
```

第七个 `title` 元素的提示框文本应为 29。

```js
assert($('title').eq(6).text() == '29');
```

第八个 `title` 元素的提示框文本应为 14。

```js
assert($('title').eq(7).text() == '14');
```

第九个 `title` 元素的提示框文本应为 9。

```js
assert($('title').eq(8).text() == '9');
```

# --solutions--


---
id: 587d7fa8367417b2b2512bcd
title: 为集合中的每个数据点创建一个 Bar
challengeType: 6
forumTopicId: 301482
---

# --description--

上个挑战仅仅在 `svg` 中添加了一个矩形来表示一组。接下来你将结合到目前为止所学的关于 `data()`、`enter()`、SVG 图形的知识，为 `dataset` 中的每一个数据点创建并且添加一个矩形。

之前的挑战展示了如何为 `dataset` 中的每个对象创建并添加一个 `div`：

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

`rect` 元素和 `div` 有一些不同，`rect` 必须添加在 `svg` 元素内，而不能直接添加在 `body` 内。同时，你需要告诉 D3 将 `rect` 放在 `svg` 区域的哪个位置。组的放置会在下一个挑战中讲到。

# --instructions--

用 `data()`、`enter()`、`append()` 方法为 `dataset` 中的每一个对象创建并添加一个 `rect` 。每一组都将直接显示在上一组的上面，将上一组覆盖，这将会在下一个挑战中得到修改。

# --hints--

你的文档应该有 9 个 `rect` 元素。

```js
assert($('rect').length == 9);
```

你应该使用 `data()` 方法。

```js
assert(code.match(/\.data/g));
```

你应该使用 `enter()` 方法。

```js
assert(code.match(/\.enter/g));
```

你应该使用 `append()` 方法。

```js
assert(code.match(/\.append/g));
```

# --solutions--


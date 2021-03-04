---
id: 587d781a367417b2b2512ab8
title: 使用 u 标签给文本添加下划线
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN6aQCL'
forumTopicId: 301082
dashedName: use-the-u-tag-to-underline-text
---

# --description--

你可以使用 `u` 标签来给文字添加下划线。 下划线通常用来表示重要内容或需要记忆的内容。 添加了 `u` 标签后，浏览器会自动给元素添加这段样式：`text-decoration: underline;`。

# --instructions--

`u` 标签包裹的文本内容应为 `Ph.D. students`。

**注意：** 如果使用 `u` 标签添加下划线，可能混淆文本和链接，则应避免使用它。 锚标签也有默认的下划线格式。

# --hints--

应添加一个 `u` 标签。

```js
assert($('u').length === 1);
```

`u` 标签的文本内容应为 `Ph.D students`。

```js
assert($('u').text() === 'Ph.D. students');
```

# --seed--

## --seed-contents--

```html
<style> h4 {
```

# --solutions--

```html
<style> h4 {
```

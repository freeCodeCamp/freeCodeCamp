---
id: 587d7fa6367417b2b2512bc2
title: 用 D3 给文档添加元素
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

D3 有多种方法可以用来在文档中增加元素、修改元素。

`select()` 方法用来从文档中选择元素，它以你查询的元素名称作为参数，返回第一个符合条件的 HTML 节点。以下是一个例子：

`const anchor = d3.select("a");`

上面这个例子找到页面上的第一个 a 标签（锚标签），将它作为一个 HTML 节点保存在变量 `anchor` 中。你也可以用其他的方法选择页面上的元素。例子中的 "d3" 是对 D3 对象的引用，可以通过它来访问 D3 的方法。

还可以用 `append()` 和 `text()` 方法。

`append()` 方法以你想添加到文档中的元素作为参数，给选中的元素添加一个 HTML 节点，返回那个节点的句柄。

`text()` 方法既可以给节点设置新的文本，也可以获取节点的当前文本。 如果要设置文字内容，需要在圆括号中传入一个 string（字符串）类型的参数。

下面是一个选择无序列表、添加列表项和文字的例子：

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

在 D3 中可以使用英文句号将多个方法串联在一起执行多个操作。

# --instructions--

使用 `select` 方法选择文本中的 `body` 标签。然后用 `append` 方法为它添加一个 `h1` 标签，同时在 `h1` 中添加文本 "Learning D3"。

# --hints--

你的 `body` 元素应该包含元素 `h1`。

```js
assert($('body').children('h1').length == 1);
```

你的 `h1` 元素应该包含文本 'Learning D3'。

```js
assert($('h1').text() == 'Learning D3');
```

你应该能访问 `d3` 的对象。

```js
assert(code.match(/d3/g));
```

你应该使用 `select` 方法。

```js
assert(code.match(/\.select/g));
```

你应该使用 `append` 方法。

```js
assert(code.match(/\.append/g));
```

你应该使用 `text` 方法。

```js
assert(code.match(/\.text/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    d3.select("body")
      .append("h1")
      .text("Learning D3")
  </script>
</body>
```

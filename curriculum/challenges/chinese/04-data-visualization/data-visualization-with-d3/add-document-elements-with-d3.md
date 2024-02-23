---
id: 587d7fa6367417b2b2512bc2
title: 用 D3 给文档添加元素
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

D3 有多种方法可以用来在文档中增加元素、修改元素。

`select()` 方法从文档中选择一个元素。 它接受你想要选择的元素的名字作为参数，并返回文档中第一个与名字匹配的 HTML 节点。 以下是一个例子：

```js
const anchor = d3.select("a");
```

上面这个例子找到页面上的第一个锚点标签，将它作为一个 HTML 节点保存在变量 `anchor` 中。 你可以使用其他方法进行选择。 示例中的 `d3` 部分是对 D3 对象的引用，通过它访问 D3 方法。

另外两个有用的方法是 `append()` 和 `text()` 。

`append()` 方法接收你希望添加到文档中的元素作为参数。 它将 HTML 节点附加到选定项目，并返回该节点的句柄。

`text()` 方法可以设置所选节点的文本，也可以获取当前文本。 要设置该值，请在方法的括号内传递一个字符串作为参数。

下面的例子是选择一个无序列表，添加列表项和添加文本：

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

在 D3 中可以串联多个方法，连续执行一系列操作。

# --instructions--

使用 `select` 方法选择文档中的 `body` 标签。 然后给它 `append` 一个 `h1` 标签，并给 `h1` 元素添加文本 `Learning D3`。

# --hints--

`body` 元素应该包含一个 `h1` 元素。

```js
assert($('body').children('h1').length == 1);
```

`h1` 元素应包含文本 `Learning D3`。

```js
assert($('h1').text() == 'Learning D3');
```

你应该能访问 `d3` 对象。

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

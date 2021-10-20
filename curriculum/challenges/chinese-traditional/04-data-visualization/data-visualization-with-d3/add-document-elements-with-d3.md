---
id: 587d7fa6367417b2b2512bc2
title: 用 D3 給文檔添加元素
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

D3 有多種方法可以用來在文檔中增加元素、修改元素。

`select()` 方法從文檔中選擇一個元素。 它接受你想要選擇的元素的名字作爲參數，並返回文檔中第一個與名字匹配的 HTML 節點。 以下是一個例子：

```js
const anchor = d3.select("a");
```

上面這個例子找到頁面上的第一個錨點標籤，將它作爲一個 HTML 節點保存在變量 `anchor` 中。 你可以使用其他方法進行選擇。 示例中的 `d3` 部分是對 D3 對象的引用，通過它訪問 D3 方法。

另外兩個有用的方法是 `append()` 和 `text()` 。

`append()` 方法接收你希望添加到文檔中的元素作爲參數。 它將 HTML 節點附加到選定項目，並返回該節點的句柄。

`text()` 方法可以設置所選節點的文本，也可以獲取當前文本。 要設置該值，請在方法的括號內傳遞一個字符串作爲參數。

下面的例子是選擇一個無序列表，添加列表項和添加文本：

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

在 D3 中可以串聯多個方法，連續執行一系列操作。

# --instructions--

使用 `select` 方法選擇文檔中的 `body` 標籤。 然後給它 `append` 一個 `h1` 標籤，並給 `h1` 元素添加文本 `Learning D3`。

# --hints--

`body` 元素應該包含一個 `h1` 元素。

```js
assert($('body').children('h1').length == 1);
```

`h1` 元素應包含文本 `Learning D3`。

```js
assert($('h1').text() == 'Learning D3');
```

你應該能訪問 `d3` 對象。

```js
assert(code.match(/d3/g));
```

你應該使用 `select` 方法。

```js
assert(code.match(/\.select/g));
```

你應該使用 `append` 方法。

```js
assert(code.match(/\.append/g));
```

你應該使用 `text` 方法。

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

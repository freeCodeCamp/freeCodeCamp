---
id: 587d7fa7367417b2b2512bc4
title: 使用 D3 中的數據
challengeType: 6
forumTopicId: 301497
dashedName: work-with-data-in-d3
---

# --description--

D3 是數據驅動的庫。 可以使用 D3 的方法將數組形式的數據顯示在頁面上。 數據有多種格式，但這個挑戰使用了一組簡單的數字。

第一步是讓 D3 知道數據。 `data()` 方法選擇連接着數據的 DOM 元素， 數據集作爲參數傳遞給該方法。

常見的方法是在文檔中爲數據集中的每一個數據創建一個元素。 爲此，你可以使用 D3 的 `enter()` 方法。

當 `enter()` 和 `data()` 方法一起使用時，它把從頁面中選擇的元素和數據集中的元素作比較。 如果頁面中選擇的元素較少則創建缺少的元素。

以下是一個選擇 `ul` 元素並根據添加的數組創建新的列表項的例子。

```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```

選擇不存在的 li 元素似乎有些難以理解。 這段代碼告訴 D3 先選擇頁面上的 `ul` 元素， 再選擇所有的列表項，它將返回空。 然後 `data()` 方法接收數組作爲參數，並運行三次後面的代碼，每次對應數組中的一個對象。 `enter()` 方法發現頁面中沒有 `li` 元素，但是需要 3 個（每個對應 `dataset` 中的一個數據）。 新的 `li` 元素被追加到 `ul`，文本爲 `New item`。

# --instructions--

選擇 `body` 節點，然後選擇所有的 `h2` 元素。 讓 D3 爲 `dataset` 數組中的每一個對象創建並添加 `h2` 標籤。 `h2` 標籤的文本爲 `New Title`。 你應該使用 `data()` 和 `enter()` 方法。

# --hints--

文檔應該有 9 個 `h2` 元素。

```js
assert($('h2').length == 9);
```

`h2` 元素的文本應爲 `New Title`。 大小寫和空格必須一致。

```js
assert(
  $('h2')
    .text()
    .match(/New Title/g).length == 9
);
```

應該使用 `data()` 方法。

```js
assert(code.match(/\.data/g));
```

應該使用 `enter()` 方法。

```js
assert(code.match(/\.enter/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

  </script>
</body>
```

---
id: 587d7fa7367417b2b2512bc6
title: 給元素添加內聯樣式
challengeType: 6
forumTopicId: 301475
dashedName: add-inline-styling-to-elements
---

# --description--

D3允許你使用 `style()` 方法在動態元素上添加內聯 CSS 樣式。

`style()` 方法以用逗號分隔的鍵值對作爲參數。 這裏是一個將選中文本的顏色設爲藍色的例子：

```js
selection.style("color","blue");
```

# --instructions--

將 `style()` 方法添加到編輯器中的代碼中，使所有顯示的文本都具有 `verdana` 的 `font-family` 。

# --hints--

`h2` 元素的 `font-family` 應爲 `verdana`。

```js
assert($('h2').css('font-family') == 'verdana');
```

你應該使用 `style()` 方法。

```js
assert(code.match(/\.style/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
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

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("font-family", "verdana")

  </script>
</body>
```

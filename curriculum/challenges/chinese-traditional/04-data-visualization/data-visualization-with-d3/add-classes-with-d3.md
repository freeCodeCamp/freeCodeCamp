---
id: 587d7fa7367417b2b2512bc8
title: 用 D3 添加 Class
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

即使對小型 app 來說，在 HTML 元素中大量使用內聯樣式也十分難以管理。 給元素添加類，並使用 CSS 規則給類添加樣式會更加方便。 D3 中的 `attr()` 方法可以給元素添加任何 HTML 屬性，包括 class 名稱。

`attr()` 方法和 `style()` 的使用方法一樣。 它使用逗號分隔值，並且可以使用回調函數。 下面是給選中元素添加 `container` class 的例子：

```js
selection.attr("class", "container");
```

請注意，當你需要添加 class 時，`class` 參數保持不變，只有 `container` 參數會發生變化。

# --instructions--

將 `attr()` 方法添加到編輯器中的代碼中，並在 `div` 元素上添加一個 `bar` 類。

# --hints--

`div` 元素應該一個 `bar` class。

```js
assert($('div').attr('class').trim().split(/\s+/g).includes('bar'));
```

應該使用 `attr()` 方法。

```js
assert(code.match(/\.attr/g));
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line
      .attr("class","bar");
      // Add your code above this line
  </script>
</body>
```

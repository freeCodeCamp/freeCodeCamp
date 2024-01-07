---
id: 5a94fe8569fb03452672e464
title: 在網格中創建網格
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

將元素轉換爲網格只會影響其子元素（即直接後代元素，英文爲 direct descendants。意思是一個元素的所有後代元素中，父級元素爲該元素的所有元素）。 因此，如果我們把某個子元素設置爲網格，就會得到一個嵌套的網格。

例如，如果我們設置 class 爲 `item3` 的元素的 `display` 和 `grid-template-columns` 屬性，就會得到一個嵌套的網格。

# --instructions--

請設置 `display` 和 `grid-template-columns`，使類爲 `item3` 元素轉換爲有兩列且寬度爲 `auto` 和 `1fr` 的網格。

# --hints--

class 爲 `item3` 的元素應具有 `grid-template-columns` 屬性且屬性值應爲 `auto` 和 `1fr`。

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

class 爲 `item3` 的元素應具有 `display` 屬性且屬性值應爲 `grid`。

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>.item3 {grid-template-columns: auto 1fr; display: grid;}</style>
```

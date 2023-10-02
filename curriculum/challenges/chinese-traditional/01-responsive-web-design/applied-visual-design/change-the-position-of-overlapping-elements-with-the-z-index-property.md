---
id: 587d78a3367417b2b2512acf
title: 使用 z-index 屬性更改重疊元素的位置
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

當一些元素在位置上重疊時（例如，使用 `position: absolute | relative | fixed | sticky` 時），在 HTML 裏後出現的元素會默認顯示在更早出現的元素的上面。 你可以使用 `z-index` 屬性指定元素的堆疊次序。 `z-index` 的取值是整數，數值大的元素會疊放到數值小的元素上面。

# --instructions--

給 class 爲 `first` 的元素（紅色的方塊）添加 `z-index` 屬性並將屬性值設置爲 2，使它顯示在藍色方塊的上方。

# --hints--

class 爲 `first` 的元素的 `z-index` 屬性值應爲 2。

```js
assert($('.first').css('z-index') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

# --solutions--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```

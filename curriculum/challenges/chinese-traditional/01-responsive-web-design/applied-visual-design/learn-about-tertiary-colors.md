---
id: 587d78a4367417b2b2512ad2
title: 瞭解三次色
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

電腦顯示器和各類屏幕都是基於顏色疊加的模型：將紅（R）、綠（G）、藍（B）三原色的色光以不同的比例相加，就可以產生各種色彩光。 這在現代色彩理論中叫作三原色光模式（RGB Color Model）。 紅色（R）、綠色（G）和藍色（B）叫作三原色。 如果把兩種原色相加，就可以產生二次色：藍綠（G+B）、品紅（R+B）和黃色（R+G）， 我們在上一個挑戰裏已經見過這些顏色了。 這些二次色恰好是在合成它們時未使用的原色的補色，即在色環中位於兩端。 例如，品紅色是紅色和藍色相加產生，它是綠色的補色。

三次色是由原色和二次色相加產生的顏色， 例如，在 RGB 顏色模型中，紅色（原色）和黃色（二次色）相加產生橙色（三次色）。 將這六種顏色中相鄰的顏色相加，便產生了十二色色環。

設計裏面有很多種顏色搭配方法。 涉及到三次色的一種配色方法是分裂補色搭配法。 選定主色之後，在色環上選擇與它的補色相鄰的兩種顏色與之搭配。 此種搭配既有對比，又不失和諧。

下面是使用分裂補色搭配法創建的三個顏色：

<table class='table table-striped'><thead><tr><th>顏色</th><th>HEX 顏色碼</th></tr></thead><thead></thead><tbody><tr><td>橙色</td><td>#FF7F00</td></tr><tr><td>藍綠色</td><td>#00FFFF</td></tr><tr><td>樹莓紅</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

把 class 爲 `orange`、`cyan` 和 `raspberry` 的 `background-color` 改成其對應的顏色。 在這個挑戰中，請使用顏色的十六進制符號（即 hex code）來表示。

# --hints--

class 爲 `orange` 的 `div` 的 `background-color` 屬性值應爲橙色。

```js
assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
```

class 爲 `cyan` 的 `div` 的 `background-color` 屬性值應爲藍綠色。

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

class 爲 `raspberry` 的 `div` 的 `background-color` 屬性值應爲樹莓紅色。

```js
assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
```

所有的 `background-color` 應使用十六進制顏色碼，而不應使用顏色名稱。

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

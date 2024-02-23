---
id: 587d78a9367417b2b2512ae9
title: 使用貝塞爾曲線移動圖形
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bnRCK'
forumTopicId: 301071
dashedName: use-a-bezier-curve-to-move-a-graphic
---

# --description--

前面的關卡涉及了使用 `ease-out` 預定義值描述了動畫以高速開始低速結束。 右邊的動畫展示了 `ease-out` 效果（藍色的元素）和 `linear` 效果（紅色的元素）的區別。 同樣的，`ease-out` 預定義值也可以用貝塞爾曲線函數實現。

通俗的講，將一條直線放在範圍只有 1 的座標軸中，並從中間拿 `p1` 和 `p2` 兩個點來拉扯（X 軸的取值區間是 \[0, 1]，Y 軸任意），最後形成的曲線就是動畫的貝塞爾速度曲線。 下面是一個使用值來模仿 `ease-out` 樣式的 Bezier 曲線示例：

```css
animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
```

記住所有的 `cubic-bezier` 函數都是從座標爲 (0, 0) 的 `p0` 開始，在座標爲 (1, 1) 的 `p3` 結束。 在這個例子裏，曲線在 y 軸（從 0 開始，運動到 `p1` 的 0，然後運動到 `p2` 的 1）上移動得比在 x 軸（從 0 開始，運動到 `p1` 的 0，到 `p2` 的 0.58）上移動得快。 結果是，在這一段動畫內元素運動得快。 到曲線的結尾，x 和 y 之間的關係反過來了，y 值保持爲 1，沒有變化，x 值從 0.58 變爲 1，元素運動得慢。

# --instructions--

要查看此貝塞爾曲線的實際效果，請將 id 爲 `red` 的元素的 `animation-timing-function` 更改爲 `cubic-bezier` 函數，x1、y1、x2、y2 的值分別設置爲 `0, 0, 0.58, 1`。 這會使兩個元素運動過程類似。

# --hints--

id 爲 `red` 的元素的 `animation-timing-function` 屬性應爲 `cubic-bezier` 函數，其中 x1、y1、x2、y2 值分別爲 0、0、0.58、1。

```js
assert(
  $('#red').css('animation-timing-function') == 'cubic-bezier(0, 0, 0.58, 1)'
);
```

id 爲 `red` 的元素不應有值爲 `linear` 的 `animation-timing-function` 屬性。

```js
assert($('#red').css('animation-timing-function') !== 'linear');
```

id 爲 `blue` 的元素的 `animation-timing-function` 屬性值不應該改變。

```js
const blueBallAnimation = __helpers.removeWhiteSpace(
  $('#blue').css('animation-timing-function')
);
assert(
  blueBallAnimation == 'ease-out' ||
    blueBallAnimation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 56%;
    animation-timing-function: ease-out;
  }
  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```

# --solutions--

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  }
  #blue {
    background: blue;
    left: 56%;
    animation-timing-function: ease-out;
  }
  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```

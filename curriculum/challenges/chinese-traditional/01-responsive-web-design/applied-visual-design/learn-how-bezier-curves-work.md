---
id: 587d78a9367417b2b2512ae8
title: 學習貝塞爾曲線的原理
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

上一個挑戰中，我們介紹了 `animation-timing-function` 以及它的一些預設值，這些值定義了不同時間內的動畫速度。 除了預定義值之外，CSS 還提供了貝塞爾曲線（Bezier curves）來更細緻地控制動畫的速度曲線。

在 CSS 動畫裏，我們可以用 `cubic-bezier` 來定義貝塞爾曲線。 曲線的形狀代表了動畫的速度。 曲線在 1 * 1 的座標系統內， 其中 X 軸代表動畫的時間間隔（類似於時間比例尺），Y 軸代表動畫的改變。

`cubic-bezier` 函數包含了 1 * 1 網格里的4個點：`p0`、`p1`、`p2`、`p3`。 其中 `p0` 和 `p3` 是固定值，代表曲線的起始點和結束點，座標值依次爲 (0, 0) 和 (1, 1)。 你只需設置另外兩點的 x 值和 y 值，設置的這兩點確定了曲線的形狀從而確定了動畫的速度曲線。 在 CSS 裏面通過 `(x1, y1, x2, y2)` 來確定 `p1` 和 `p2`。 以下就是 CSS 貝塞爾曲線的例子：

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

在上面的例子裏，兩個點的 x 和 y 值相等（x1 = 0.25 = y1 和 x2 = 0.75 = y2）。如果你還記得幾何課的知識，結果是從原點到點 (1, 1) 的一條直線。 元素在動畫中的速度呈線性，效果和使用 `linear` 關鍵詞的效果一致。 換言之，元素勻速運動。

# --instructions--

對於 id 爲 `ball1` 的元素，把 `animation-timing-function` 屬性的值從 `linear` 改爲等價的 `cubic-bezier` 函數值。 也就是說使用上面例子給的值。

# --hints--

id 爲 `ball1` 的元素的 `animation-timing-function` 屬性值應該爲和 linear 預定值等價的 `cubic-bezier` 函數值。

```js
assert(
  $('#ball1').css('animation-timing-function') ==
    'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
);
```

id 爲 `ball2` 的元素的 `animation-timing-function` 屬性值不應改變。

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
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

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

# --solutions--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
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
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

---
id: 587d78a9367417b2b2512ae8
title: 学习贝塞尔曲线的原理
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

上一个挑战中，我们介绍了 `animation-timing-function` 以及它的一些预设值，这些值定义了不同时间内的动画速度。 除了预定义值之外，CSS 还提供了贝塞尔曲线（Bezier curves）来更细致地控制动画的速度曲线。

在 CSS 动画里，我们可以用 `cubic-bezier` 来定义贝塞尔曲线。 曲线的形状代表了动画的速度。 曲线在 1 * 1 的坐标系统内， 其中 X 轴代表动画的时间间隔（类似于时间比例尺），Y 轴代表动画的改变。

`cubic-bezier` 函数包含了 1 * 1 网格里的4个点：`p0`、`p1`、`p2`、`p3`。 其中 `p0` 和 `p3` 是固定值，代表曲线的起始点和结束点，坐标值依次为 (0, 0) 和 (1, 1)。 你只需设置另外两点的 x 值和 y 值，设置的这两点确定了曲线的形状从而确定了动画的速度曲线。 在 CSS 里面通过 `(x1, y1, x2, y2)` 来确定 `p1` 和 `p2`。 以下就是 CSS 贝塞尔曲线的例子：

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

在上面的例子里，两个点的 x 和 y 值相等（x1 = 0.25 = y1 和 x2 = 0.75 = y2）。如果你还记得几何课的知识，结果是从原点到点 (1, 1) 的一条直线。 元素在动画中的速度呈线性，效果和使用 `linear` 关键词的效果一致。 换言之，元素匀速运动。

# --instructions--

对于 id 为 `ball1` 的元素，把 `animation-timing-function` 属性的值从 `linear` 改为等价的 `cubic-bezier` 函数值。 也就是说使用上面例子给的值。

# --hints--

id 为 `ball1` 的元素的 `animation-timing-function` 属性值应该为和 linear 预定值等价的 `cubic-bezier` 函数值。

```js
assert(
  $('#ball1').css('animation-timing-function') ==
    'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
);
```

id 为 `ball2` 的元素的 `animation-timing-function` 属性值不应改变。

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

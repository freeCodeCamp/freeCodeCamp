---
id: 587d78a7367417b2b2512adf
title: 了解 CSS 的关键帧和动画是如何工作的
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

如果要给元素添加动画，你需要了解 animation 属性以及 `@keyframes` 规则。 animation 属性控制动画的外观，`@keyframes` 规则控制动画中各阶段的变化。 总共有 8 个 animation 属性。 为了便于理解，本挑战中我们只会暂时涉及到两个最常用的属性。

`animation-name` 用来设置动画的名称，也就是我们稍后要在 `@keyframes` 里用到的名称。

`animation-duration` 设置动画所花费的时间。

`@keyframes` 可以通过设置特定时间点的行为来创建动画。 为此，我们只需要给持续时间内的特定帧（从 0% 到 100%）加上 CSS 规则。 如果用一部电影来做类比，那么 CSS 里面的 0% 关键帧就像是电影里面的开场镜头；100% 关键帧就像是电影里的片尾，就是那个之后会出现演职人员列表的片尾。 在动画设定的时间内，CSS 会根据关键帧的规则来给元素添加动画效果。 100% 位置的 CSS 属性就是元素最后的样子，相当于电影里的演职员表或者鸣谢镜头。 然后CSS 应用魔法来在给定的时间内转换元素以使其脱离场景。 下面举例说明 `@keyframes` 和动画属性的用法：

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

id 为 `anim` 的元素，我们在代码中将它的 `animation-name` 设置为 `colorful`，同时设置 `animation-duration` 为 3 秒。 然后我们把 `@keyframes` 规则添加到名为 `colorful` 的动画属性上。 在动画开始时（0%）的背景颜色为蓝色，在动画结束时（100%）的背景颜色为黄色。 注意我们不只可以设置开始和结束，而是从 0% 到 100% 间的任意位置都可以设置。

# --instructions--

给 id 为 `rect` 的元素添加动画，设置其 `animation-name` 为 `rainbow`，设置其 `animation-duration` 为 4 秒。 然后声明 `@keyframes` 规则，设置动画开始时（`0%`）的 `background-color` 为蓝色，动画中间时（`50%`）为绿色，动画结束时（`100%`）为为黄色。

# --hints--

id 为 `rect` 的元素应该有一个值为 `rainbow` 的 `animation-name` 属性。

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

id 为 `rect` 的元素应该有一个值为 4s 的 `animation-duration` 属性。

```js
assert($('#rect').css('animation-duration') == '4s');
```

`@keyframes` 规则的 `animation-name` 应为 `rainbow`。

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

`@keyframes` 规则的 `rainbow` 在 0% 时的 `background-color` 应为 `blue`。

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

`@keyframes` 规则的 `rainbow` 在 50% 时的 `background-color` 应为 `green`。

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

`@keyframes` 规则的 rainbow 在 100% 时的 `background-color` 应为 `yellow`。

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```

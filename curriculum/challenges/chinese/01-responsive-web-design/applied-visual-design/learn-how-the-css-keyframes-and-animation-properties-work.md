---
id: 587d78a7367417b2b2512adf
title: 了解 CSS 的关键帧和动画是如何工作的
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
---

# --description--

如果要给元素添加动画，你需要了解 `animation` 属性以及 `@keyframes` 规则。 `animation` 属性控制动画的外观，`@keyframes` 规则控制动画中各阶段的变化。总共有 8 个 `animation` 属性。为了便于理解，本关暂时只涉及到两个最常用的属性。

`animation-name` 设置动画的名称， 也就是要绑定的选择器的 `@keyframes` 的名称。

`animation-duration` 设置动画所花费的时间。

`@keyframes` 能够创建动画。 创建动画的原理是将一套 CSS 样式逐渐变化为另一套样式。具体是通过设置动画期间对应的“frames”的 CSS 的属性，以百分比来规定改变的时间，或者通过关键词“from”和“to”，等价于 0% 和 100%。打个比方，CSS 里面的 0% 属性就像是电影里面的开场镜头。CSS 里面的 100% 属性就是元素最后的样子，相当于电影里的演职员表或者鸣谢镜头。CSS 在对应的时间内给元素过渡添加效果。下面举例说明 `@keyframes` 和动画属性的用法：

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

id 为 `anim` 的元素，代码设置 `animation-name` 为 `colorful`，设置 `animation-duration` 为 3 秒。然后把 `@keyframes` 引用到名为 `colorful` 的动画属性上。`colorful` 在动画开始时（0%）设置颜色为蓝色，在动画结束时（100%）设置颜色为黄色。注意不是只有开始和结束的过渡可以设置，0% 到 100% 间的任意百分比你都可以设置。

# --instructions--

给 id 为 `rect` 的元素添加动画，设置其 `animation-name` 为 rainbow，设置其 `animation-duration` 为 4 秒。然后声明 `@keyframes` 规则，设置动画开始时（0%）的 `background-color` 为蓝色，动画中间时（50%）为绿色，动画结束时（100%）为为黄色。

# --hints--

id 为 `rect` 的元素应该有一个值为 rainbow 的 `animation-name` 属性。

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

id 为 `rect` 的元素应该有一个值为 4s 的 `animation-duration` 属性。

```js
assert($('#rect').css('animation-duration') == '4s');
```

`@keyframes` 规则的 `animation-name` 应该为 rainbow。

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

`@keyframes` 规则的 rainbow 在 0% 时的 `background-color` 应该为蓝色。

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

`@keyframes` 规则的 rainbow 在 50% 时的 `background-color` 应该为绿色。

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

`@keyframes` 规则的 rainbow 在 100% 时的 `background-color` 应该为黄色。

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
```

# --solutions--


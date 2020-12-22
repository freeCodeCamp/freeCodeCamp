---
id: 587d78a7367417b2b2512ae1
title: 使用 CSS 动画创建运动
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
---

# --description--

当元素的 `position` 被指定，如 `fixed` 或者 `relative` 时，CSS 偏移属性 `right`、`left`、`top` 和 `bottom`可以用在动画规则里创建动作。

就像下面的例子展示的那样，你可以在 `50%`keyframe 处设置 `top` 属性为 50px， 在开始（0%）和最后（100%）keframe 处设置为 0px，以产生项目向下运动，然后返回的动作效果。

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

# --instructions--

让 `div` 水平运动。使用 `left` 偏移属性，添加 `@keyframes` 规则，让 rainbow 在 `0%` 的 0 像素开始，在 `50%` 时移动到 25 像素，在 `100%` 时时移动到 -25 像素。不要替换编辑器里的 `top` 属性，动画应该同时向水平和竖直方向运动。

# --hints--

`0%` 的 `@keyframes` 规则应该为向 `left` 偏移 `0px`。

```js
assert(
  code.match(
    /0%\s*?{\s*?background-color:\s*?blue;\s*?top:\s*?0(px)?;\s*?left:\s*?0(px)?;\s*?}/gi
  )
);
```

`50%` 的 `@keyframes` 规则应该为向 `left` 偏移`25px`。

```js
assert(
  code.match(
    /50%\s*?{\s*?background-color:\s*?green;\s*?top:\s*?50px;\s*?left:\s*?25px;\s*?}/gi
  )
);
```

`100%` 的 `@keyframes` 规则应该为向 `left` 偏移`-25px`。

```js
assert(
  code.match(
    /100%\s*?{\s*?background-color:\s*?yellow;\s*?top:\s*?0(px)?;\s*?left:\s*?-25px;\s*?}/gi
  )
);
```

# --solutions--


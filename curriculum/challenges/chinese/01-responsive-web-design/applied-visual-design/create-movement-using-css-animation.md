---
id: 587d78a7367417b2b2512ae1
title: 使用 CSS 动画创建动画
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

在元素的 `position` 已有指定值（如 `fixed` 或者 `relative`）时，CSS 偏移属性 `right`、`left`、`top`、`bottom` 可以用在动画规则里创建动作。

就像下面的例子展示的那样，你可以在 `50%` keyframe 处设置 `top` 属性为 50px，在开始（`0%`）和结束（`100%`）keyframe 处设置为 0px，以实现元素先向下运动，然后返回的动作效果。

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

请实现让 `div` 水平运动的效果。 使用 `left` 偏移属性，添加 `@keyframes` 规则，让 rainbow 在 `0%` 处偏移 0px，在 `50%` 处偏移 25px，在 `100%` 处偏移 -25px。 不要修改编辑器里的 `top` 属性，元素应该同时在水平和竖直方向运动。

# --hints--

`0%` 的 `@keyframes` 规则应为向 `left` 偏移 0px。

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

`50%` 的 `@keyframes` 规则应为向 `left` 偏移 25px。

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

`100%` 的 `@keyframes` 规则应为向 `left` 偏移 -25px。

```js
assert(code.match(/100%\s*?{[\s\S]*?left:\s*?-25px(;[\s\S]*?|\s*?)}/gi));
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
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

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
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```

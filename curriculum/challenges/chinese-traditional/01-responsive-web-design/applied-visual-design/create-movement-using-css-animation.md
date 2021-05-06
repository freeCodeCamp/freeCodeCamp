---
id: 587d78a7367417b2b2512ae1
title: 使用 CSS 動畫創建動畫
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

在元素的 `position` 已有指定值（如 `fixed` 或者 `relative`）時，CSS 偏移屬性 `right`、`left`、`top`、`bottom` 可以用在動畫規則裏創建動作。

就像下面的例子展示的那樣，你可以在 `50%` keyframe 處設置 `top` 屬性爲 50px，在開始（`0%`）和結束（`100%`）keyframe 處設置爲 0px，以實現元素先向下運動，然後返回的動作效果。

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

請實現讓 `div` 水平運動的效果。 使用 `left` 偏移屬性，添加 `@keyframes` 規則，讓 rainbow 在 `0%` 處偏移 0px，在 `50%` 處偏移 25px，在 `100%` 處偏移 -25px。 不要修改編輯器裏的 `top` 屬性，元素應該同時在水平和豎直方向運動。

# --hints--

`0%` 的 `@keyframes` 規則應爲向 `left` 偏移 0px。

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

`50%` 的 `@keyframes` 規則應爲向 `left` 偏移 25px。

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

`100%` 的 `@keyframes` 規則應爲向 `left` 偏移 -25px。

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

---
id: 587d78a7367417b2b2512ae2
title: 通过从左到右淡化元素来创建视觉方向
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

在本挑战中，我们需要改变动画元素的 `opacity` 属性值，使其在到达屏幕右侧时渐隐。

在示例动画中，具有渐变背景的圆形元素在 `@keyframes` 为 50% 的节点向右移动。

# --instructions--

使用 id 选择器选择 id 为 `ball` 的元素，在 @keyframes 为 `50%` 的节点里添加 `opacity` 属性并设置属性值为 0.1，使其在向右移动时渐隐。

# --hints--

`keyframes` 为 50% 的节点处应设置 `opacity` 属性值为 0.1，以使其渐隐。

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```

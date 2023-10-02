---
id: 587d78a7367417b2b2512ae2
title: 通過從左到右淡化元素來創建視覺方向
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

在本挑戰中，我們需要改變動畫元素的 `opacity` 屬性值，使其在到達屏幕右側時漸隱。

在示例動畫中，具有漸變背景的圓形元素在 `@keyframes` 爲 50% 的節點向右移動。

# --instructions--

使用 id 選擇器選擇 id 爲 `ball` 的元素，在 @keyframes 爲 `50%` 的節點裏添加 `opacity` 屬性並設置屬性值爲 0.1，使其在向右移動時漸隱。

# --hints--

`keyframes` 爲 50% 的節點處應設置 `opacity` 屬性值爲 0.1，以使其漸隱。

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

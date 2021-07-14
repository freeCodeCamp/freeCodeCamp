---
id: 587d78a5367417b2b2512ad8
title: 通过添加细微图案作为背景图像来创建纹理
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

为了增加背景图的质感，我们可以为它添加一个不那么明显的纹理图案，这样可以让页面更讨喜。 但关键在于，我们需要找到一个平衡点，因为我们不希望背景图抢占了内容的风头，造成喧宾夺主的结果。 `background` 属性支持使用 `url()` 函数作为属性值，这让我们可以通过链接的方式引入纹理或样式的图片。 图片链接的地址应写在括号内，一般会用引号包起来。

# --instructions--

选取 `body` 元素，并设置整个页面的 `background` 为 url `https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png` 的图片。

# --hints--

`body` 元素选择器应包含 `background` 属性，且属性值应为给定的 `url`。

```js
assert(
  code.match(
    /background(-image)?:\s*?url\(\s*("|'|)https:\/\/cdn-media-1\.freecodecamp\.org\/imgr\/MJAkxbh\.png\2\s*\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {

  }
</style>
```

# --solutions--

```html
<style>
  body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```

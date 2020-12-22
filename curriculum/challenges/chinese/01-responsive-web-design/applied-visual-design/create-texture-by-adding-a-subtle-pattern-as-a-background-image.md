---
id: 587d78a5367417b2b2512ad8
title: 通过添加细微图案作为背景图像来创建纹理
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
---

# --description--

添加一个精致的背景图，可以增加页面的质感，让页面更美观。关键是要找到一个平衡点，抢了内容的风头，喧宾夺主可就不妙了。`background` 属性支持使用 `url()` 函数通过链接的方式引入一个指定纹理或样式的图片。图片链接地址在括号内，一般会用引号包起来。

# --instructions--

用 `body` 选择器设置整个页面的 `background` 为 url `https://i.imgur.com/MJAkxbh.png` 指定的图片。

# --hints--

`body` 元素选择器应包含 `background` 属性，且值为给定的 `url`。

```js
assert(
  code.match(
    /background:\s*?url\(\s*("|'|)https:\/\/cdn-media-1\.freecodecamp\.org\/imgr\/MJAkxbh\.png\1\s*\)/gi
  )
);
```

# --solutions--


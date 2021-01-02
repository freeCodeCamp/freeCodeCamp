---
id: 587d781c367417b2b2512abf
title: 降低元素的 opactiy
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7aKqu4'
forumTopicId: 301055
---

# --description--

CSS 里的 `opacity` 属性用来设置元素的透明度。

<blockquote>属性值为 1 代表完全不透明。<br>属性值为 0.5 代表半透明。<br>属性值为 0 代表完全透明。</blockquote>

透明度会应用到元素内的所有内容，不论是图片，还是文本，或是背景色。

# --instructions--

将 class 为 `links` 的所有超链接的 `opacity` 属性值设置 0.7。

# --hints--

应使用 `links` class 选择所有的超链接，并设置其 `opacity` 属性值为 0.7。

```js
assert(
  /\.links\s*{([\s\S]*?;)*\s*opacity\s*:\s*0*\.70*\s*(;[\s\S]*?|\s*)}/.test(
    $('style').text()
  )
);
```

# --solutions--


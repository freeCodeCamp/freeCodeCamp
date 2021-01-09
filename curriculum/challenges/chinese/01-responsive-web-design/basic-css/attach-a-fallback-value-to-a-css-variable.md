---
id: 5a9d7286424fe3d0e10cad13
title: 给 CSS 变量附加回退值
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bDNfp'
forumTopicId: 301084
---

# --description--

使用变量来作为 CSS 属性值的时候，可以设置一个备用值来防止由于某些原因导致变量不生效的情况。

或许有些人正在使用着不支持 CSS 变量的旧浏览器，又或者，设备不支持你设置的变量值。为了防止这种情况出现，你可以这样写：

```css
background: var(--penguin-skin, black);
```

这样，当变量有问题的时候，它会设置背景颜色为黑色。 提示：这对调试代码也会很有帮助。

# --instructions--

请为 class 为 `penguin-top` 和 `penguin-bottom` 的元素的 `background` 属性设置一个 `black` 的备用色。

**注意：**因为 CSS 变量名拼写错了，所以备用值会被采用。

# --hints--

class 为 `penguin-top` 的元素的 `background` 属性值应有 `black` 作为备用颜色。

```js
assert(
  code.match(
    /.penguin-top\s*?{[\s\S]*background\s*?:\s*?var\(\s*?--pengiun-skin\s*?,\s*?black\s*?\)\s*?;[\s\S]*}[\s\S]*.penguin-bottom\s{/gi
  )
);
```

class 为 `penguin-bottom` 的元素的 `background` 属性值应有 `black` 作为备用颜色。

```js
assert(
  code.match(
    /.penguin-bottom\s*?{[\s\S]*background\s*?:\s*?var\(\s*?--pengiun-skin\s*?,\s*?black\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--


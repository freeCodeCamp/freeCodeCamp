---
id: 5a9d72ad424fe3d0e10cad16
title: 使用媒体查询更改变量
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmL8UP'
forumTopicId: 301091
---

# --description--

CSS 变量可以简化媒体查询的方式。

例如，当屏幕小于或大于媒体查询所设置的值，通过改变变量的值，那么应用了变量的元素样式都会得到响应修改。

# --instructions--

在`media query（媒体查询）`声明的`:root`选择器里，重定义`--penguin-size`的值为 200px，且重定义`--penguin-skin`的值为`black`，然后通过缩放页面来查看是否生效。

# --hints--

`:root`中的`--penguin-size`值应为`200px`。

```js
assert(
  code.match(
    /media\s*?\(\s*?max-width\s*?:\s*?350px\s*?\)\s*?{[\s\S]*:root\s*?{[\s\S]*--penguin-size\s*?:\s*?200px\s*?;[\s\S]*}[\s\S]*}/gi
  )
);
```

`:root`中的`--penguin-skin`值应为`black`。

```js
assert(
  code.match(
    /media\s*?\(\s*?max-width\s*?:\s*?350px\s*?\)\s*?{[\s\S]*:root\s*?{[\s\S]*--penguin-skin\s*?:\s*?black\s*?;[\s\S]*}[\s\S]*}/gi
  )
);
```

# --solutions--


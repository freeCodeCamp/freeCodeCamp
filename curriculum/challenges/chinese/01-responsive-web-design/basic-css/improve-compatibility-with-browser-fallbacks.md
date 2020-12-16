---
id: 5b7d72c338cd7e35b63f3e14
title: 通过浏览器降级提高兼容性
challengeType: 0
videoUrl: ''
forumTopicId: 301087
---

# --description--

使用 CSS 时可能会遇到浏览器兼容性问题。提供浏览器降级方案来避免潜在的问题就显得很重要。

当浏览器解析页面的 CSS 时，会自动忽视不能识别或者不支持的属性。举个栗子，如果使用 CSS 变量来指定站点的背景色， IE 浏览器由于不支持 CSS 变量会忽视背景色。因此，浏览器会使用其它值。如果没有找到其它值，会使用默认值，也就是没有背景色。

这意味着如果想提供浏览器降级方案，在声明之前提供另一个更宽泛的值即可。这样老旧的浏览器会降级使用这个方案，新的浏览器会在后面的声明里覆盖降级方案。

# --instructions--

看来已经使用了变量做为 `.red-box` class 的背景色。来通过在存在的声明前添加其它的值为 red 的 `background` 声明来提高浏览器的兼容性。

# --hints--

`.red-box` 应该通过在存在的 `background` 声明前添加其它的值为 red 的`background` 来提供降级。

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
);
```

# --solutions--


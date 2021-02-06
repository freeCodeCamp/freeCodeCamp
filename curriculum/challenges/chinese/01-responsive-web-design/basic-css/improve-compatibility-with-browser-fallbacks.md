---
id: 5b7d72c338cd7e35b63f3e14
title: 通过浏览器降级提高兼容性
challengeType: 0
videoUrl: ''
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

使用 CSS 时可能会遇到浏览器兼容性问题。 提供浏览器降级方案来避免潜在的问题会显得很重要。

当浏览器解析页面的 CSS 时，会自动忽视不能识别或者不支持的属性。 举个例子，如果使用 CSS 变量来指定站点的背景色，IE 浏览器由于不支持 CSS 变量而会忽略背景色。 此时，浏览器会尝试使用其它值。 但如果没有找到其它值，则会使用默认值，也就是没有背景色。

这意味着如果想提供浏览器降级方案，在声明之前提供另一个更宽泛的值即可。 这样老旧的浏览器会降级使用这个方案，新的浏览器会在后面的声明里覆盖降级方案。

# --instructions--

我们使用了 CSS 变量来定义 `.red-box` 的背景色。 现在，我们通过在现有的声明之前添加另一个 `background` 声明，并将它的值设置为 `red`，来提升浏览器的兼容性。

# --hints--

`.red-box` 规则应在现有的 `background` 声明之前有一个 `background` 的备用属性，其值为 `red`。

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

# --solutions--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

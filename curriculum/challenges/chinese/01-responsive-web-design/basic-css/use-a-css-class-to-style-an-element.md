---
id: bad87fee1348bd9aecf08806
title: 使用 class 选择器设置单个元素的样式
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
---

# --description--

CSS 的`class`具有可重用性，可应用于各种 HTML 元素。

一个 CSS`class`声明示例，如下所示：

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

可以看到，我们在`<style>`样式声明区域里，创建了一个名为`blue-text`的`class`选择器。 你可以将 CSS`class`选择器应用到一个HTML元素里，如下所示： `<h2 class="blue-text">CatPhotoApp</h2>` 注意：在`style`样式区域声明里，`class`需以`.`开头。而在 HTML 元素里，`class`属性的前面不能添加`.`。

# --instructions--

在`style`样式声明里，把`h2`元素选择器改为`.red-text`class 选择器，同时将颜色`blue`变为`red`。

在`h2`元素里，添加一个`class`属性，且值为`'red-text'`。

# --hints--

`h2`元素应该为红色。

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

`h2`元素应含有`red-text` class 选择器。

```js
assert($('h2').hasClass('red-text'));
```

`style`样式声明区域里应该包含一个`red-text` class 选择器，并且它的颜色应为红色。

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;\s*\}/g));
```

不要在`h2`元素里使用行内样式：`style="color: red"`。

```js
assert($('h2').attr('style') === undefined);
```

# --solutions--


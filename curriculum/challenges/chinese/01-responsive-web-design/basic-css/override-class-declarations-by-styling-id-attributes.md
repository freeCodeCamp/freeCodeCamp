---
id: bad87fee1348bd8aedf06756
title: ID 选择器优先级高于 Class 选择器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

我们刚刚证明了浏览器读取 CSS 是由上到下的。 这就意味着，如果发生冲突，浏览器将会应用最后声明的样式。 注意，如果我们在 `h1` 元素的类中，将 `blue-text` 放置在 `pink-text` 之前，它仍然会检查声明顺序，而不是使用顺序！

但我们还没有完成。 其实还有其他方法可以覆盖 CSS 样式。 你还记得 id 属性吗？

我们来通过给 `h1` 元素添加 id 属性，覆盖 `pink-text` 和 `blue-text` 类，使 `h1` 元素变成橘色。

# --instructions--

给 `h1` 元素添加 `id` 属性，属性值为 `orange-text`。 设置方式如下：

```html
<h1 id="orange-text">
```

`h1` 元素需继续保留 `blue-text` 和 `pink-text` 这两个 class。

在 `style` 元素中创建名为 `orange-text` 的 id 选择器。 例子如下：

```css
#brown-text {
  color: brown;
}
```

**注意：** 无论在 `pink-text` class 之前或者之后声明，`id` 选择器的优先级总是高于 class 选择器。

# --hints--

`h1` 元素的应有一个 class 为 `pink-text`。

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 元素应包含 `blue-text` class。

```js
assert($('h1').hasClass('blue-text'));
```

`h1` 元素的 id 应为 `orange-text`。

```js
assert($('h1').attr('id') === 'orange-text');
```

应只有一个 `h1` 元素。

```js
assert($('h1').length === 1);
```

应存在名为 `orange-text` 的 id 选择器。

```js
assert(code.match(/#orange-text\s*{/gi));
```

不要在 `h1` 元素里面使用 `style` 属性。

```js
assert(!code.match(/<h1.*style.*>/gi));
```

`h1` 元素的字体颜色应为橘色。

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```

---
id: bad87fee1348bd8aedf06756
title: ID 选择器优先级高于 Class 选择器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
---

# --description--

我们刚刚证明了浏览器读取 CSS 是由上到下的。这就意味着，如果发生冲突，浏览器将会应用最后声明的样式。

不过我们还没结束，还有其他方法来覆盖 CSS 样式。你还记得 id 属性吗？

通过给`h1`元素添加 id 属性，来覆盖 class 属性定义的同名样式。

# --instructions--

给`h1`元素添加 id 属性，属性值为`orange-text`。设置方式如下：

`<h1 id="orange-text">`

`h1`元素继续保留`blue-text`和`pink-text`class。

在`style`元素中创建名为`orange-text`的 id 选择器。例子如下：

```css
#brown-text {
  color: brown;
}
```

注意：无论在`pink-text`class 的上面或者下面声明，id 选择器的优先级总是会高于 class 选择器。

# --hints--

`h1`元素应该包含`pink-text` class。

```js
assert($('h1').hasClass('pink-text'));
```

`h1`元素应该包含`blue-text` class。

```js
assert($('h1').hasClass('blue-text'));
```

`h1`的 id 属性值为`orange-text`。

```js
assert($('h1').attr('id') === 'orange-text');
```

应该只有一个`h1`元素。

```js
assert($('h1').length === 1);
```

创建名为`orange-text`的 id 选择器。

```js
assert(code.match(/#orange-text\s*{/gi));
```

不要在`h1`元素里面使用`style（行内样式）`。

```js
assert(!code.match(/<h1.*style.*>/gi));
```

`h1`元素的字体颜色应为橘色。

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
```

# --solutions--


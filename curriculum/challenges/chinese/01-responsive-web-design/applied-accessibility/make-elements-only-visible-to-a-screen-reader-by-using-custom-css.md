---
id: 587d778d367417b2b2512aaa
title: 使用自定义 CSS 让元素仅对屏幕阅读器可见
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJ8QGkhJ'
forumTopicId: 301020
---

# --description--

到目前为止，所有关于可访问性的挑战都没有使用 CSS。这是为了让你在关注外观样式之前，先把页面的逻辑结构写清，以及明确语义化标签的重要性。

然而，如果我们需要在页面中添加一些只对屏幕阅读器可见的内容时，CSS 可以提升页面的可访问性。当信息以可视化形式（如：图表）展示，而屏幕阅读器用户需要一种替代方式（如：表格）来获取信息时，就会出现这种情况。CSS 被用来将这些仅供屏幕阅读器使用的信息定位到浏览器可见区域之外。

举个例子：

```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

**注意：**  
下面的 CSS 代码与上面的结果不同：

<ul>
<li><code>display: none;</code>或<code>visibility: hidden;</code>会把内容彻底隐藏起来，对于屏幕阅读器也不例外。</li>
<li>如果把值设置为 0px，如<code>width: 0px; height: 0px;</code>，意味着让元素脱离文档流，这样做也会让元素被屏幕阅读器忽略。</li>
</ul>

# --instructions--

Camper Cat 为他的训练页面创建了一个十分酷炫的条形图，并将数据放入表格中，供屏幕阅读器用户使用。表格已经有了一个`sr-only`类，但是还没有添加 CSS 规则。请设置`position`的值为 absolute，`left` 的值为 -10000px，`width`与`height`的值为 1px。

# --hints--

`sr-only`类中的`position`属性的值应为 absolute。

```js
assert($('.sr-only').css('position') == 'absolute');
```

`sr-only`类中的`left`属性的值应为 -10000px。

```js
assert($('.sr-only').css('left') == '-10000px');
```

`sr-only`类中的`width`属性的值应为 1px。

```js
assert(code.match(/width:\s*?1px/gi));
```

`sr-only`类中的`height`属性的值应为 1px。

```js
assert(code.match(/height:\s*?1px/gi));
```

# --solutions--


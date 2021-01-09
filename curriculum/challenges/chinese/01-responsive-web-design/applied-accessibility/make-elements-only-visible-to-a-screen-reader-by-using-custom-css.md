---
id: 587d778d367417b2b2512aaa
title: 使用自定义 CSS 让元素仅对屏幕阅读器可见
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJ8QGkhJ'
forumTopicId: 301020
---

# --description--

到目前为止，所有关于可访问性的挑战都没有使用 CSS。这是为了让你在关注外观样式之前，先把页面的逻辑结构写清，以及明确语义化标签的重要性。

但如果我们想在页面中添加一些只对屏幕阅读器可见的内容，此时我们可以用 CSS 来实现。当信息以可视化形式（比如图表）展示，而屏幕阅读器用户需要另一种方式（比如表格）来获取信息时，我们就可以用 CSS 来解决这个问题：只需要把仅供屏幕阅读器使用的信息通过 CSS 定位到浏览器可见区域之外即可。

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

**注意：**以下的 CSS 解决方案与上面的结果不同：

<ul>
<li><code>display: none;</code> 或 <code>visibility: hidden;</code> 会把内容彻底隐藏起来，屏幕阅读器也无法获取这些内容。</li>
<li>如果把值设置为 0px，如 <code>width: 0px; height: 0px;</code>，意味着让元素脱离文档流，这样做同样也会让屏幕阅读器忽略此元素。</li>
</ul>

# --instructions--

Camper Cat 为他的训练页面创建了一个十分酷炫的条形图。考虑到可访问性，他还将数据放入到了一个表格中，供屏幕阅读器用户使用。表格的 `class` 为 `sr-only`，但是还没有添加 CSS 规则。请将 `position` 的值设置为 absolute、`left` 的值设置为 -10000px、`width` 与 `height` 的值均设置为 1px。

# --hints--

`class` 为 `sr-only` 的元素的 `position` 属性值应为 absolute。

```js
assert($('.sr-only').css('position') == 'absolute');
```

`class` 为 `sr-only` 的元素的 `left` 属性值应为 -10000px。

```js
assert($('.sr-only').css('left') == '-10000px');
```

`class` 为 `sr-only` 的元素的 `width` 属性值应为 1px。

```js
assert(code.match(/width:\s*?1px/gi));
```

`class` 为 `sr-only` 的元素的 `height` 属性值应为 1px。

```js
assert(code.match(/height:\s*?1px/gi));
```

# --solutions--


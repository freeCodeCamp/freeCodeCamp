---
id: bad87fee1348bd9aedf08736
title: 给 HTML 的 Body 元素添加样式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
---

# --description--

现在让我们来讨论一下 CSS 继承。

每一个 HTML 页面都含有一个`body`元素。

# --instructions--

我们可以通过设置`background-color`为`black`，来证明`body`元素的存在。

添加以下的代码到`style`标签里面：

```css
body {
  background-color: black;
}
```

# --hints--

`body`元素的`background-color`应该是黑色的。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

确保 CSS 规则格式书写正确，需要开关大括号。

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

确保 CSS 规则要以分号结尾。

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

# --solutions--


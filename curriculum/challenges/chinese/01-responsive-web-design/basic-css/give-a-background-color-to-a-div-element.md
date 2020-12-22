---
id: bad87fed1348bd9aede07836
title: 给 div 元素添加背景色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cdRKMCk'
forumTopicId: 18190
---

# --description--

`background-color`属性可以设置元素的背景颜色。

例如，你想将一个元素的背景颜色改为`green`，可以在`style`里面这样写：

```css
.green-background {
  background-color: green;
}
```

# --instructions--

创建一个`silver-background`class 并设置`background-color`为`silver`。 并用在`div`元素上。

# --hints--

`div`元素应有`silver-background` class。

```js
assert($('div').hasClass('silver-background'));
```

`div`元素背景颜色应设置为`silver`。

```js
assert($('div').css('background-color') === 'rgb(192, 192, 192)');
```

class 名 `silver-background` 应该定义在 `style` 元素内，`silver` 的值应该指定 `background-color` 属性

```js
assert(code.match(/\.silver-background\s*{\s*background-color:\s*silver;\s*}/));
```

# --solutions--


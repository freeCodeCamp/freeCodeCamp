---
id: 5a94fe1369fb03452672e45d
title: 使用 grid-area 属性将项目放置在网格区域中
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
---

# --description--

像上一个挑战那样，在为网格添加区域模板后，你可以通过引用你所定义的区域的名称，将元素放入相应的区域。为此，你需要对网格项使用 `grid-area`：

```css
.item1 {
  grid-area: header;
}
```

这样，class 为 `item1` 的网格项就被放到了 `header` 区域里。在这个示例中，网格项将占用第一行整行，因为这一整行都被命名为 `header` 区域。

# --instructions--

请使用 `grid-area` 属性，把 class 为 `item5` 的元素放到 `footer` 区域。

# --hints--

class 为 `item5` 的元素应具有 `grid-area` 属性且属性值应为 `footer`。

```js
assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi));
```

# --solutions--


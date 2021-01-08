---
id: 5a94fe8569fb03452672e464
title: 在网格中创建网格
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N78Ap'
forumTopicId: 301128
---

# --description--

将元素转换为网格只会影响其子元素（即直接后代元素，英文为 `direct descendants`。意思是一个元素的所有后代元素中，父级元素为该元素的所有元素）。因此，如果我们把某个子元素设置为网格，就会得到一个嵌套的网格。

例如，如果我们设置 class 为 `item3` 的元素的 `display` 和 `grid-template-columns` 属性，就会得到一个嵌套的网格。

# --instructions--

请设置 `display` 和 `grid-template-columns`，使类为 `item3` 元素转换为有两列且宽度为 `auto` 和 `1fr` 的网格。

# --hints--

class 为 `item3` 的元素应具有 `grid-template-columns` 属性且属性值应为 `auto` 和 `1fr`。

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

class 为 `item3` 的元素应具有 `display` 属性且属性值应为 `grid`。

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --solutions--


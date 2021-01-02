---
id: 587d781b367417b2b2512abe
title: 给卡片元素添加 box-shadow
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZdUd'
forumTopicId: 301031
---

# --description--

`box-shadow` 属性用来给元素添加阴影，该属性值是由逗号分隔的一个或多个阴影列表。

`box-shadow` 属性的阴影依次由下面这些值描述：

<ul>
  <li><code>offset-x</code> 阴影的水平偏移量；</li>
  <li><code>offset-y</code> 阴影的垂直偏移量；</li>
  <li><code>blur-radius</code> 模糊半径；</li>
  <li><code>spread-radius</code> 阴影扩展半径；</li>
  <li>颜色。</li>
</ul>

其中 `blur-radius` 和 `spread-radius` 是可选的。

可以通过逗号分隔每个 `box-shadow` 元素的属性来添加多个 box-shadow。

如下为添加了模糊效果的例子，它使用了透明度较高的黑色作为阴影：

```css
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```

# --instructions--

我们把卡片的 `id` 设置成了 `thumbnail`，请把上面的 `box-shadow` 值赋给这个卡片。

# --hints--

应该给 id 为 `thumbnail` 的元素添加 `box-shadow` 属性。

```js
assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g));
```

`box-shadow` 属性值应该是题目说明中指定的 CSS 值。

```js
assert(
  code.match(
    /box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\)\s*?,\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi
  )
);
```

# --solutions--


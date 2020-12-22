---
id: 587d78ae367417b2b2512afe
title: 使用 flex 短方法属性
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
forumTopicId: 301112
---

# --description--

上面几个 flex 属性有一个简写方式。`flex-grow`、`flex-shrink`和`flex-basis`属性可以在`flex`中一同设置。

例如，`flex: 1 0 10px;`会把项目属性设为`flex-grow: 1;`、`flex-shrink: 0;`以及`flex-basis: 10px;`。

属性的默认设置是`flex: 0 1 auto;`。

# --instructions--

在`#box-1`和`#box-2`添加`flex`属性。为`#box-1`设置`flex-grow`属性值为 `2`，`flex-shrink`属性值为 `2`，`flex-basis`属性值为 `150px`。为`#box-2`设置`flex-grow`属性值为 `1`，`flex-shrink`属性值为 `1`，`flex-basis`属性值为 `150px`。

通过上面的设置，在容器大于 300px 时，`#box-1`扩大的空间是`#box-2`扩大空间的两倍；在容器小于 300px 时，`#box-1`缩小的空间`#box-2`缩小空间的两倍。300px 是两个盒子的`flex-basis`的值之和。

# --hints--

`#box-1`元素应有`flex`属性，其值应为 `2 2 150px`。

```js
assert(
  $('#box-1').css('flex-grow') == '2' &&
    $('#box-1').css('flex-shrink') == '2' &&
    $('#box-1').css('flex-basis') == '150px'
);
```

`#box-2`元素应有`flex`属性，其值应为 `1 1 150px`。

```js
assert(
  $('#box-2').css('flex-grow') == '1' &&
    $('#box-2').css('flex-shrink') == '1' &&
    $('#box-2').css('flex-basis') == '150px'
);
```

`#box-1`和`#box-2`应具有`flex`属性。

```js
assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);
```

# --solutions--


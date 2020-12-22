---
id: 587d7fa8367417b2b2512bca
title: 更改条形图的显示方式
challengeType: 6
forumTopicId: 301481
---

# --description--

这里有一些格式的改变可以美化上个挑战中创建的条形图：

1) 通过在 CSS 中为 `bar` 的类添加 margin 属性，为每一组之间添加空格以直观的将它们分开

2) 通过给每个值乘以一个数来缩放高度，增加高度以更好地显示值的差异

# --instructions--

首先，在 `style` 标签中为 `bar` 类添加 2px 的 `margin` 属性。然后，在 `style()` 方法中修改回调函数，使它返回 10 倍原数值的值（在后面加上 "px"）。

**提示**  
通过给每一个数值点乘以*相同的*常量值仅仅改变比例。这就像放大，它不会改变底层数据的含义。

# --hints--

第一个 `div` 的 `height` 应该为 120 个像素，`margin` 应该为 2 个像素。

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

第二个 `div` 的 `height` 应该为 310 个像素，`margin` 应该为 2 个像素。

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

第三个 `div` 的 `height` 应该为 220 个像素，`margin` 应该为 2 个像素。

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

第四个 `div` 的 `height` 应该为 170 个像素，`margin` 应该为 2 个像素。

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

第五个 `div` 的 `height` 应该为 250 个像素，`margin` 应该为 2 个像素。

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

第六个 `div` 的 `height` 应该为 180 个像素，`margin` 应该为 2 个像素。

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

第七个 `div` 的 `height` 应该为 290 个像素，`margin` 应该为 2 个像素。

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

第八个 `div` 的 `height` 应该为 140 个像素，`margin` 应该为 2 个像素。

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

第九个 `div` 的 `height` 应该为 90 个像素，`margin` 应该为 2 个像素。

```js
assert(
  $('div').eq(8).css('height') == '90px' &&
    $('div').eq(8).css('margin-right') == '2px'
);
```

# --solutions--


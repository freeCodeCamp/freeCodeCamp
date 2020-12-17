---
id: 587d7fab367417b2b2512bd8
title: 给 Circle 元素添加属性
challengeType: 6
forumTopicId: 301471
---

# --description--

上个挑战为 `dataset` 中的每个点都创建了 `circle` 元素，并将它们添加到 SVG 画布上。但是 D3 需要更多关于位置和 `circle` 大小的信息来正确的显示它们。

在 SVG 中 `circle` 有三个主要的属性。`cx` 和 `cy` 属性是坐标，它们告诉 D3 将图形的*中心*放在 SVG 画布的何处。半径（ `r` 属性）给出 `circle` 的大小。

就像 `rect` 的 `y` 坐标，`circle` 的 `cy` 属性是从 SVG 画布的顶端开始测量的，而不是从底端。

所有的属性都可以用回调函数来动态设值。记住，所有串联在 `data(dataset)` 后面的方法为 `dataset` 中的每个对象都运行一次。回调函数中的 `d` 参数指在 `dataset` 中的当前对象，对每个点来说都是一个数组。就像 `d[0]`，你可以使用方括号的方式来访问数组中的值。

# --instructions--

为 `circle` 元素添加 `cx`、`cy`、`r` 属性。`cx` 的值应该是 `dataset` 中每个对象的数组的第一个数，`cy` 的值应该根据数据中的第二个数，但是要确保正向显示图表而不是倒转。所有圆圈的 `r` 的值应该为 5。

# --hints--

你应该有 10 个 `circle` 元素。

```js
assert($('circle').length == 10);
```

第一个 `circle` 元素的 `cx` 值应该为 34，`cy` 值应该为 422，`r` 值应该为 5。

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

第二个 `circle` 元素的 `cx` 值应该为 109，`cy` 值应该为 220，`r` 值应该为 5。

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

第三个 `circle` 元素的 `cx` 值应该为 310，`cy` 值应该为 380，`r` 值应该为 5。

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

第四个 `circle` 元素的 `cx` 值应该为 79，`cy` 值应该为 89，`r` 值应该为 5。

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

第五个 `circle` 元素的 `cx` 值应该为 420，`cy` 值应该为 280，`r` 值应该为 5。

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

第六个 `circle` 元素的 `cx` 值应该为 233，`cy` 值应该为 355，`r` 值应该为 5。

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

第七个 `circle` 元素的 `cx` 值应该为 333，`cy` 值应该为 404，`r` 值应该为 5。

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

第八个 `circle` 元素的 `cx` 值应该为 222，`cy` 值应该为 167，`r` 值应该为 5。

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

第九个 `circle` 元素的 `cx` 值应该为 78，`cy` 值应该为 180，`r` 值应该为 5。

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

第十个 `circle` 元素的 `cx` 值应该为 21，`cy` 值应该为 377，`r` 值应该为 5。

```js
assert(
  $('circle').eq(9).attr('cx') == '21' &&
    $('circle').eq(9).attr('cy') == '377' &&
    $('circle').eq(9).attr('r') == '5'
);
```

# --solutions--


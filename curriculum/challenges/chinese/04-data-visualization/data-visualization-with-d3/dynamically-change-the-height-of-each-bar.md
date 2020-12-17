---
id: 587d7fa9367417b2b2512bcf
title: 动态更改每个条的高度
challengeType: 6
forumTopicId: 301486
---

# --description--

和动态设置 `x` 值一样，每组的高也可以被设置成数组中数据点的值。

```js
selection.attr("property", (d, i) => {
  /* 
  * d is the data point value
  * i is the index of the data point in the array
  */
})
```

# --instructions--

改变 `height` 属性的回调函数，让它返回数据值乘以 3 的值。

**提示**  
记住，把所有数据点乘以相同的常数来对数据进行缩放（就像放大）。这有利于看清例子中每组之间的差异。

# --hints--

第一个 `rect` 的 `height` 应该为 36。

```js
assert($('rect').eq(0).attr('height') == '36');
```

第二个 `rect` 的 `height` 应该为 93。

```js
assert($('rect').eq(1).attr('height') == '93');
```

第三个 `rect` 的 `height` 应该为 66。

```js
assert($('rect').eq(2).attr('height') == '66');
```

第四个 `rect` 的 `height` 应该为 51。

```js
assert($('rect').eq(3).attr('height') == '51');
```

第五个 `rect` 的 `height` 应该为 75。

```js
assert($('rect').eq(4).attr('height') == '75');
```

第六个 `rect` 的 `height` 应该为 54。

```js
assert($('rect').eq(5).attr('height') == '54');
```

第七个 `rect` 的 `height` 应该为 87。

```js
assert($('rect').eq(6).attr('height') == '87');
```

第八个 `rect` 的 `height` 应该为 42。

```js
assert($('rect').eq(7).attr('height') == '42');
```

第九个 `rect` 的 `height` 应该为 27。

```js
assert($('rect').eq(8).attr('height') == '27');
```

# --solutions--


---
id: 587d7fa8367417b2b2512bc9
title: 动态更新元素的高度
challengeType: 6
forumTopicId: 301493
---

# --description--

之前的挑战包括如何从数组中显示数据和如何添加 CSS 类。将这些课程的内容结合起来只需两步你就能创建出一个简单的条形图：

1) 为每一个数组中的数据点都创建一个 `div`

2) 为每个 `div` 动态分配高度值，在 `style()` 方法中使用回调函数将高度值设置为数据大小

回想使用回调函数设置样式的格式：

`selection.style("cssProperty", (d) => d)`

# --instructions--

在编辑器中添加 `style()` 方法给每个元素设置 `height` 属性。使用回调函数返回数据点的值加上字符串 "px"。

# --hints--

第一个 `div` 的 `height` 应该为 12 个像素。

```js
assert($('div').eq(0)[0].style.height === '12px');
```

第二个 `div` 的 `height` 应该为 31 个像素。

```js
assert($('div').eq(1)[0].style.height === '31px');
```

第三个 `div` 的 `height` 应该为 22 个像素。

```js
assert($('div').eq(2)[0].style.height === '22px');
```

第四个 `div` 的 `height` 应该为 17 个像素。

```js
assert($('div').eq(3)[0].style.height === '17px');
```

第五个 `div` 的 `height` 应该为 25 个像素。

```js
assert($('div').eq(4)[0].style.height === '25px');
```

第六个 `div` 的 `height` 应该为 18 个像素。

```js
assert($('div').eq(5)[0].style.height === '18px');
```

第七个 `div` 的 `height` 应该为 29 个像素。

```js
assert($('div').eq(6)[0].style.height === '29px');
```

第八个 `div` 的 `height` 应该为 14 个像素。

```js
assert($('div').eq(7)[0].style.height === '14px');
```

第九个 `div` 的 `height` 应该为 9 个像素。

```js
assert($('div').eq(8)[0].style.height === '9px');
```

# --solutions--


---
id: 587d7fac367417b2b2512bdb
title: 按比例设置域和范围
challengeType: 6
forumTopicId: 301491
---

# --description--

默认情况下，比例尺使用同一关系(identity relationship)，即输入值直接映射为输出值。但是比例尺可以更灵活更有趣。

假设有一个数据集范围为 50 到 480，这是缩放的输入信息，也被称为域(domain)。

你想沿着 10 个单位到 500 个单位的 `x` 轴映射这些点到 SVG 画布上。这是输出信息，也被称为范围(range)。

`domain()` 和 `range()` 方法设置缩放的值，它们都以至少有两个元素的数组为参数。下面是一个例子：

```js
// 设置域
// 域覆盖了一组输入值
scale.domain([50, 480]);
// 设置范围
// 范围覆盖了一组输出值
scale.range([10, 500]);
scale(50) // 返回 10
scale(480) // 返回 500
scale(325) // 返回 323.37
scale(750) // 返回 807.67
d3.scaleLinear()
```

注意，比例尺使用了域和范围之间的线性关系来找出给定数字的输出值。域中的最小值(50)映射为范围中的最小值(10)。

# --instructions--

创建一个比例尺，将它的域设置为 `[250, 500]`，范围设置为 `[10, 150]`。

**提示**  
你可以将 `domain()` 和 `range()` 方法串联在 `scale` 变量后。

# --hints--

你应该使用 `domain()` 方法。

```js
assert(code.match(/\.domain/g));
```

比例尺的 `domain()` 应该设置为 `[250, 500]`。

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

你应该使用 `range()` 方法。

```js
assert(code.match(/\.range/g));
```

比例尺的 `range()` 应该设置为 `[10, 150]`。

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

`h2` 的文本应该为 -102。

```js
assert($('h2').text() == '-102');
```

# --solutions--


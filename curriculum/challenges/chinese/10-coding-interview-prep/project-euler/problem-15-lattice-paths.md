---
id: 5900f37b1000cf542c50fe8e
title: 问题15：格子路径
challengeType: 5
videoUrl: ''
---

# --description--

从2×2网格的左上角开始，只能向右和向下移动，右下角有6条路线。 ![6 2乘2网格的图表显示了右下角的所有路线](https://cdn-media-1.freecodecamp.org/imgr/1Atixoj.gif)

通过给定的`gridSize`有多少这样的路由？

# --hints--

`latticePaths(4)`应该返回70。

```js
assert.strictEqual(latticePaths(4), 70);
```

`latticePaths(9)`应该返回48620。

```js
assert.strictEqual(latticePaths(9), 48620);
```

`latticePaths(20)`应该返回137846528820。

```js
assert.strictEqual(latticePaths(20), 137846528820);
```

# --solutions--


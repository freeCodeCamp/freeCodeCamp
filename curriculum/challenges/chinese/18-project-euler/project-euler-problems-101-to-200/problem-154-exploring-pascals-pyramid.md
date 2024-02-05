---
id: 5900f4071000cf542c50ff19
title: '问题 154：探索帕斯卡金字塔'
challengeType: 1
forumTopicId: 301785
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

A triangular pyramid is constructed using spherical balls so that each ball rests on exactly three balls of the next lower level.

<img class="img-responsive center-block" alt="用球形搭建的四级三角形金字塔" src="https://cdn.freecodecamp.org/curriculum/project-euler/exploring-pascals-pyramid.png" style="background-color: white; padding: 10px;" />

然后，我们计算从顶点到每个位置的路径数量：路径从顶点开始并向下前进到当前位置正下方的三个球体中的任何一个。 因此，到达某个位置的路径数是紧接在其上方的数字的总和（取决于位置，在其上方最多有三个数字）。

其结果是帕斯卡金字塔（Pascal's pyramid），每个级别 n 的数字是三项式 ${(x + y + z)}^n$ 展开的系数.

${(x + y + z)}^{200000}$ 的展开式中有多少个系数是 ${10}^{12}$ 的倍数？

# --hints--

`pascalsPyramid()` 应该返回 `479742450`。

```js
assert.strictEqual(pascalsPyramid(), 479742450);
```

# --seed--

## --seed-contents--

```js
function pascalsPyramid() {

  return true;
}

pascalsPyramid();
```

# --solutions--

```js
// solution required
```

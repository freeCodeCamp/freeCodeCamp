---
id: 5900f4071000cf542c50ff19
title: '問題 154：探索帕斯卡金字塔'
challengeType: 1
forumTopicId: 301785
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

A triangular pyramid is constructed using spherical balls so that each ball rests on exactly three balls of the next lower level.

<img class="img-responsive center-block" alt="用球形搭建的四級三角形金字塔" src="https://cdn.freecodecamp.org/curriculum/project-euler/exploring-pascals-pyramid.png" style="background-color: white; padding: 10px;" />

然後，我們計算從頂點到每個位置的路徑數量：路徑從頂點開始並向下前進到當前位置正下方的三個球體中的任何一個。 因此，到達某個位置的路徑數是緊接在其上方的數字的總和（取決於位置，在其上方最多有三個數字）。

其結果是帕斯卡金字塔（Pascal's pyramid），每個級別 n 的數字是三項式 ${(x + y + z)}^n$ 展開的係數.

${(x + y + z)}^{200000}$ 的展開式中有多少個係數是 ${10}^{12}$ 的倍數？

# --hints--

`pascalsPyramid()` 應該返回 `479742450`。

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

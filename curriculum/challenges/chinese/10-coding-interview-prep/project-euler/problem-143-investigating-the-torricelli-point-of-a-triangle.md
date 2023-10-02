---
id: 5900f3fc1000cf542c50ff0e
title: '问题 143：三角形托里拆利点的研究'
challengeType: 1
forumTopicId: 301772
dashedName: problem-143-investigating-the-torricelli-point-of-a-triangle
---

# --description--

设三角形 ABC 的内角均小于120度。 取三角形内任意一点 X，令 $XA = p$，$XC = q$，$XB = r$。

费马曾经向托里拆利提出挑战：找到令 p + q + r 最小的点 X 的位置。

托里拆利证明，若对三角形 ABC 三边分别构造等边三角形 AOB、BNC 和 AMC，则三角形 AOB、BNC 和 AMC 的外接圆相交于三角形 ABC 内的一点 T。 此外，他还证明这个后来被称为托里拆利点或费马点的点 T，就是使得 $p + q + r$ 最小的点。 更值得注意的是，当和最小时，满足 $AN = BM = CO = p + q + r$ 且 AN、BM 和 CO 也相交于点 T。

<img class="img-responsive center-block" alt="等边三角形 AOB、BNC 和 AMC 由三角形 ABC 的三边构成，且三角形 AOB、BNC 和 AMC 的外接圆相交于三角形 ABC 内的一点 T。" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-the-torricelli-point-of-a-triangle.png" style="background-color: white; padding: 10px;" />

如果当和最小时且有 a、b、c、p、q 和 r 均为正整数，我们就称三角形 ABC 为托里拆利三角形。 例如，$a = 399$、$b = 455$、$c = 511$ 就是一个托里拆利三角形，此时 $p + q + r = 784$。 对于所有满足 $p + q + r ≤ 120000$ 的托里拆利三角形，求出所有不同值的总和。

# --hints--

`sumTorricelliTriangles()` 应该返回 `30758397`。

```js
assert.strictEqual(sumTorricelliTriangles(), 30758397);
```

# --seed--

## --seed-contents--

```js
function sumTorricelliTriangles() {

  return true;
}

sumTorricelliTriangles();
```

# --solutions--

```js
// solution required
```

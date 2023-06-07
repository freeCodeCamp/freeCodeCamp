---
id: 5900f4031000cf542c50ff15
title: >-
  Problem 150: Searching a triangular array for a sub-triangle having minimum-sum
challengeType: 1
forumTopicId: 301781
dashedName: problem-150-searching-a-triangular-array-for-a-sub-triangle-having-minimum-sum
---

# --description--

In a triangular array of positive and negative integers, we wish to find a sub-triangle such that the sum of the numbers it contains is the smallest possible.

在下面的示例中，可以很容易地驗證標記的三角形滿足具有 -42 的總和的條件。

<img class="img-responsive center-block" alt="三角形數組，帶有標記的子三角形，總和 -42" src="https://cdn.freecodecamp.org/curriculum/project-euler/searching-a-triangular-array-for-a-sub-triangle-having-minimum-sum.gif" style="background-color: white; padding: 10px;" />

我們希望製作一個包含一千行的三角形數組，因此我們使用一種隨機數生成器（稱爲線性同餘生成器）生成 500500 個僞隨機數 $s_k$ ，範圍爲 $±2^{19}$，如下所示：

$$\begin{align}   t := & \\ 0\\\\
  \text{for}\\ & k = 1\\ \text{up to}\\ k = 500500:\\\\   & t := (615949 × t + 797807)\\ \text{modulo}\\ 2^{20}\\\\
  & s_k := t − 219\\\\ \end{align}$$

例如：$s_1 = 273519$、$s_2 = −153582$、$s_3 = 450905$ 等。

然後使用僞隨機數組形成我們的三角形數組如下：

$$ s_1 \\\\
s_2\\;s_3 \\\\ s_4\\; s_5\\; s_6 \\\\
s_7\\; s_8\\; s_9\\; s_{10} \\\\ \ldots $$

Sub-triangles can start at any element of the array and extend down as far as we like (taking-in the two elements directly below it from the next row, the three elements directly below from the row after that, and so on).

The "sum of a sub-triangle" is defined as the sum of all the elements it contains.

Find the smallest possible sub-triangle sum.

# --hints--

`smallestSubTriangleSum()` 應該返回 `-271248680`。

```js
assert.strictEqual(smallestSubTriangleSum(), -271248680);
```

# --seed--

## --seed-contents--

```js
function smallestSubTriangleSum() {

  return true;
}

smallestSubTriangleSum();
```

# --solutions--

```js
// solution required
```

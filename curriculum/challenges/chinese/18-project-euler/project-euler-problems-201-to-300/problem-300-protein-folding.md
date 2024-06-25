---
id: 5900f49a1000cf542c50ffac
title: '问题 300：蛋白质折叠'
challengeType: 1
forumTopicId: 301954
dashedName: problem-300-protein-folding
---

# --description--

In a very simplified form, we can consider proteins as strings consisting of hydrophobic (H) and polar (P) elements, e.g. HHPPHHHPHHPH.

对于这个问题，蛋白质的方向很重要。 例如HPP被认为与PPH不同。 Thus, there are $2^n$ distinct proteins consisting of $n$ elements.

When one encounters these strings in nature, they are always folded in such a way that the number of H-H contact points is as large as possible, since this is energetically advantageous.

As a result, the H-elements tend to accumulate in the inner part, with the P-elements on the outside.

当然，天然蛋白质是在三维空间中折叠的，但是我们只考虑在二维空间中的蛋白质折叠。

The figure below shows two possible ways that our example protein could be folded (H-H contact points are shown with red dots).

<img class="img-responsive center-block" alt="两种可能的方式折叠蛋白质的例子" src="https://cdn.freecodecamp.org/curriculum/project-euler/protein-folding.gif" style="background-color: white; padding: 10px;" />

The folding on the left has only six H-H contact points, thus it would never occur naturally. On the other hand, the folding on the right has nine H-H contact points, which is optimal for this string.

假设 H 和 P 元素同样可能出现在字符串的任何位置，在长度为8的随机蛋白质字符串的最佳折叠中，H-H 接触点的平均数目是 $frac {850}{2 ^ 8} = 3.3203125 $。

What is the average number of H-H contact points in an optimal folding of a random protein string of length 15? Give your answer using as many decimal places as necessary for an exact result.

# --hints--

protein Folding ()  应返回 8.0540771484375 。

```js
assert.strictEqual(proteinFolding(), 8.0540771484375);
```

# --seed--

## --seed-contents--

```js
function proteinFolding() {

  return true;
}

proteinFolding();
```

# --solutions--

```js
// solution required
```

---
id: 5900f49a1000cf542c50ffac
title: '問題 300：蛋白質摺疊'
challengeType: 1
forumTopicId: 301954
dashedName: problem-300-protein-folding
---

# --description--

In a very simplified form, we can consider proteins as strings consisting of hydrophobic (H) and polar (P) elements, e.g. HHPPHHHPHHPH.

對於這個問題，蛋白質的方向很重要。 例如HPP被認爲與PPH不同。 Thus, there are $2^n$ distinct proteins consisting of $n$ elements.

When one encounters these strings in nature, they are always folded in such a way that the number of H-H contact points is as large as possible, since this is energetically advantageous.

As a result, the H-elements tend to accumulate in the inner part, with the P-elements on the outside.

當然，天然蛋白質是在三維空間中摺疊的，但是我們只考慮在二維空間中的蛋白質摺疊。

The figure below shows two possible ways that our example protein could be folded (H-H contact points are shown with red dots).

<img class="img-responsive center-block" alt="兩種可能的方式摺疊蛋白質的例子" src="https://cdn.freecodecamp.org/curriculum/project-euler/protein-folding.gif" style="background-color: white; padding: 10px;" />

The folding on the left has only six H-H contact points, thus it would never occur naturally. On the other hand, the folding on the right has nine H-H contact points, which is optimal for this string.

假設 H 和 P 元素同樣可能出現在字符串的任何位置，在長度爲8的隨機蛋白質字符串的最佳摺疊中，H-H 接觸點的平均數目是 $frac {850}{2 ^ 8} = 3.3203125 $。

What is the average number of H-H contact points in an optimal folding of a random protein string of length 15? Give your answer using as many decimal places as necessary for an exact result.

# --hints--

protein Folding ()  應返回 8.0540771484375 。

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

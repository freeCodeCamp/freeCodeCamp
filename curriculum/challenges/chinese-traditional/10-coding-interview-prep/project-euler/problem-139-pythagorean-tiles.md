---
id: 5900f3f71000cf542c50ff0a
title: '問題 139：畢達哥拉斯磚塊'
challengeType: 1
forumTopicId: 301767
dashedName: problem-139-pythagorean-tiles
---

# --description--

設（a，b，c）表示具有整數邊長的直角三角形的三條邊。 It is possible to place four such triangles together to form a square with length c.

例如，邊長爲（3，4，5）的三角形可以放在一起形成一個 5 乘 5 的正方形，中間有一個 1 乘 1 的小正方形，並且可以用 25 個 1 乘 1 的小正方形平埔填充 5 乘 5 的正方形。

<img class="img-responsive center-block" alt="兩個 5 x 5 的正方形：第一個通過 4 個 3 x 4 x 5 的三角形組成，中心有個 1 x 1 小正方形；第二個通過 25 個 1 x 1 的小正方形平鋪填充。" src="https://cdn.freecodecamp.org/curriculum/project-euler/pythagorean-tiles.png" style="background-color: white; padding: 10px;" />

但是，如果使用（5，12，13）的三角形組成正方形，中間的小正方形是 7 乘 7 的。 而這些 7 x 7 的正方形將無法平鋪填充 13 x 13 的正方形。

請求出在周長小於 100,000,000 的直角三角形中，有多少個畢達哥斯拉三角形可以滿足這種填充？

# --hints--

`pythagoreanTiles()` 應該返回 `10057761`。

```js
assert.strictEqual(pythagoreanTiles(), 10057761);
```

# --seed--

## --seed-contents--

```js
function pythagoreanTiles() {

  return true;
}

pythagoreanTiles();
```

# --solutions--

```js
// solution required
```

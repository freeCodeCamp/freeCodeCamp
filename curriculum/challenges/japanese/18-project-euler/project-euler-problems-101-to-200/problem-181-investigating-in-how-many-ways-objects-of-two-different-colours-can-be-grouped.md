---
id: 5900f4231000cf542c50ff34
title: >-
  問題 181: 2 色の物体を何通りにグループ分けできるかを調べ上げる
challengeType: 1
forumTopicId: 301817
dashedName: >-
  problem-181-investigating-in-how-many-ways-objects-of-two-different-colours-can-be-grouped
---

# --description--

3 つの黒い物体 $B$ と 1 つの白い物体 $W$ があるとき、これらを次のように 7 通りにグループ分けできます。

$$(BBBW)\\;(B,BBW)\\;(B,B,BW)\\;(B,B,B,W)\\;(B,BB,W)\\;(BBB,W)\\;(BB,BW)$$

60 個の黒い物体 $B$ と 40 個の白い物体 $W$ をグループ分けする方法は何通りありますか。

# --hints--

`colorsGrouping()` は `83735848679360670` を返す必要があります。

```js
assert.strictEqual(colorsGrouping(), 83735848679360670);
```

# --seed--

## --seed-contents--

```js
function colorsGrouping() {

  return true;
}

colorsGrouping();
```

# --solutions--

```js
// solution required
```

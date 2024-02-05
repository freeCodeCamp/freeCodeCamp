---
id: 5900f4971000cf542c50ffaa
title: '問題 299：三個相似的三角形'
challengeType: 1
forumTopicId: 301951
dashedName: problem-299-three-similar-triangles
---

# --description--

Four points with integer coordinates are selected:

$A(a, 0)$, $B(b, 0)$, $C(0, c)$和 $D(0, d)$, 滿足$0 &lt; a &lt; b$ 和 $0 &lt; c &lt; d$.

點 $P$，也有整數座標， 被選擇在行 $AC$ 上，這樣三個三角形 $ABP$， $CDP$ 和 $BDP$ 都是相似的。

<img class="img-responsive center-block" alt="A、B、C、D和P點創建了三個三角形：ABP、CDP和BDP。" src="https://cdn.freecodecamp.org/curriculum/project-euler/three-similar-triangles.gif" style="background-color: white; padding: 10px;" />

在 $a = c$的情況下很容易證明這三個三角形相似。

因此，鑑於 $a = c$，我們正在尋找三個部分($a$, $b$) $d$(帶整數座標) 使得 至少存在一個 $P$ 點 $AC$三個三角形 $ABP$, $CDP$ 和 $BDP$ 都是相似的。

例如，如果$(a, b, d) = (2, 3, 4)$，它可以很容易地驗證此點 $P(1, 1)$1符合上述條件。 請注意，三點式（2,3,4）和（2,4,3）被認爲是不同的，儘管點P（1,1）對於兩者而言是共同的。

如果 $b + d &lt; 100$，則有92 個不同的三點 ($a$, $b$, $d$) 存在這個點 $P$。

如果 $b + d &lt; 100\\000$，則有 320471 個不同的三點 ($a$, $b$, $d$) 存在這個點 $P$。

如果 $b + d &lt; 100\\000\\000$，有多少個不同的三點 ($a$, $b$, $d$) 存在這個點 $P$ ？

# --hints--

`sumTorricelliTriangles()` 應該返回 `549936643`。

```js
assert.strictEqual(threeSimilarTriangles(), 549936643);
```

# --seed--

## --seed-contents--

```js
function threeSimilarTriangles() {

  return true;
}

threeSimilarTriangles();
```

# --solutions--

```js
// solution required
```

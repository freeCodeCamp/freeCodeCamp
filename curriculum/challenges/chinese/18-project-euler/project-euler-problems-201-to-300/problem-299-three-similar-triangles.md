---
id: 5900f4971000cf542c50ffaa
title: '问题 299：三个相似的三角形'
challengeType: 1
forumTopicId: 301951
dashedName: problem-299-three-similar-triangles
---

# --description--

Four points with integer coordinates are selected:

$A(a, 0)$, $B(b, 0)$, $C(0, c)$和 $D(0, d)$, 满足$0 &lt; a &lt; b$ 和 $0 &lt; c &lt; d$.

点 $P$，也有整数坐标， 被选择在行 $AC$ 上，这样三个三角形 $ABP$， $CDP$ 和 $BDP$ 都是相似的。

<img class="img-responsive center-block" alt="A、B、C、D和P点创建了三个三角形：ABP、CDP和BDP。" src="https://cdn.freecodecamp.org/curriculum/project-euler/three-similar-triangles.gif" style="background-color: white; padding: 10px;" />

在 $a = c$的情况下很容易证明这三个三角形相似。

因此，鉴于 $a = c$，我们正在寻找三个部分($a$, $b$) $d$(带整数坐标) 使得 至少存在一个 $P$ 点 $AC$三个三角形 $ABP$, $CDP$ 和 $BDP$ 都是相似的。

例如，如果$(a, b, d) = (2, 3, 4)$，它可以很容易地验证此点 $P(1, 1)$1符合上述条件。 请注意，三点式（2,3,4）和（2,4,3）被认为是不同的，尽管点P（1,1）对于两者而言是共同的。

如果 $b + d &lt; 100$，则有92 个不同的三点 ($a$, $b$, $d$) 存在这个点 $P$。

如果 $b + d &lt; 100\\000$，则有 320471 个不同的三点 ($a$, $b$, $d$) 存在这个点 $P$。

如果 $b + d &lt; 100\\000\\000$，有多少个不同的三点 ($a$, $b$, $d$) 存在这个点 $P$ ？

# --hints--

`sumTorricelliTriangles()` 应该返回 `549936643`。

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

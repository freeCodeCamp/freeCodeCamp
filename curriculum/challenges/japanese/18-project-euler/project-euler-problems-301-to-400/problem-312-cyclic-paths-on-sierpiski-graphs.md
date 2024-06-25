---
id: 5900f4a51000cf542c50ffb7
title: '問題 312: シェルピンスキーグラフ上の循環路'
challengeType: 1
forumTopicId: 301968
dashedName: problem-312-cyclic-paths-on-sierpiski-graphs
---

# --description--

- 位数 1 のシェルピンスキーグラフ ($S_1$) は正三角形です。
- $S_{n + 1}$ は $S_n$ から作られます。3 つの $S_n$ を、それぞれの対が角の 1 つの頂点を共有するように配置したものです。

<img class="img-responsive center-block" alt="位数1 から 位数 5 のシェルピンスキーグラフ" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-1.gif" style="background-color: white; padding: 10px;" />

$S_n$ のすべての頂点をちょうど 1 回ずつ通る循環路の数を、$C(n)$ とします。 例えば、下図のとおり、$S_3$ にそのような循環路を 8 つ描くことができるので、$C(3) = 8$ です。

<img class="img-responsive center-block" alt="S_3 の全頂点を通る 8 つの循環路" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-2.gif" style="background-color: white; padding: 10px;" />

次のことも確認できます。

$$\begin{align}   & C(1) = C(2) = 1 \\\\
  & C(5) = 71\\,328\\,803\\,586\\,048 \\\\   & C(10 000)\bmod {10}^8 = 37\\,652\\,224 \\\\
  & C(10 000)\bmod {13}^8 = 617\\,720\\,485 \\\\ \end{align}$$

$C(C(C(10\\,000)))\bmod {13}^8$ を求めなさい。

# --hints--

`pathsOnSierpinskiGraphs()` は `324681947` を返す必要があります。

```js
assert.strictEqual(pathsOnSierpinskiGraphs(), 324681947);
```

# --seed--

## --seed-contents--

```js
function pathsOnSierpinskiGraphs() {

  return true;
}

pathsOnSierpinskiGraphs();
```

# --solutions--

```js
// solution required
```

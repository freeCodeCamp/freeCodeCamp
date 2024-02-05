---
id: 5900f53d1000cf542c510050
title: '問題 465: 極の多角形'
challengeType: 1
forumTopicId: 302140
dashedName: problem-465-polar-polygons
---

# --description--

多角形の核は、その多角形の全範囲をそこから見渡せるような点の集合として定義されます。 原点が核の中に厳密に含まれている多角形を「極の多角形」と定義します。

この問題では、多角形は同一線上に連続する頂点を持つことができます。 しかし、多角形は自己交差してはならず、面積が 0 であってはいけません。

例えば、次のうち 1 つ目だけが極の多角形です (2 つ目、3 つ目、4 つ目の多角形の核は厳密には原点を含んでおらず、5 つ目には核が全くありません)。

<img class="img-responsive center-block" alt="多角形の 5 例" src="https://cdn.freecodecamp.org/curriculum/project-euler/polar-polygons.png" style="background-color: white; padding: 10px;" />

1 つ目の多角形で、3 つの頂点が同一線上で連続していることに注目してください。

絶対値が $n$ を超えない整数座標 $(x, y)$ に頂点があるような極の多角形の個数を、$P(n)$ とします。

注意点として、たとえ同じ領域を囲んでいても、辺の集合が異なる多角形は区別して数えられます。 例えば、[(0,0), (0,3), (1,1), (3,0)] を頂点とする多角形は、[(0,0), (0,3), (1,1), (3,0), (1,0)] を頂点とする多角形と区別されます。

例えば、$P(1) = 131$, $P(2) = 1\\,648\\,531$, $P(3) = 1\\,099\\,461\\,296\\,175$, $P(343)\bmod 1\\,000\\,000\\,007 = 937\\,293\\,740$ です。

$P(7^{13})\bmod 1\\,000\\,000\\,007$ を求めなさい。

# --hints--

`polarPolygons()` は `585965659` を返す必要があります。

```js
assert.strictEqual(polarPolygons(), 585965659);
```

# --seed--

## --seed-contents--

```js
function polarPolygons() {

  return true;
}

polarPolygons();
```

# --solutions--

```js
// solution required
```

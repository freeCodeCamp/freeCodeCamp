---
id: 5900f3991000cf542c50feac
title: '問題 45: 三角数、五角数、六角数'
challengeType: 1
forumTopicId: 302122
dashedName: problem-45-triangular-pentagonal-and-hexagonal
---

# --description--

三角数、五角数、六角数は次の数式で得られます。

<div style='display: inline-grid; text-align: center; grid-template-columns: 135px 135px 260px; grid-template-rows: auto;'><div>三角数</div><div>T<sub>n</sub>=<var>n</var>(<var>n</var>+1)/2</div><div>1, 3, 6, 10, 15, ...</div></div>
<div style='display: inline-grid; text-align: center; grid-template-columns: 135px 135px 260px; grid-template-rows: auto;'><div>五角数</div><div>P<sub>n</sub>=<var>n</var>(3<var>n</var>−1)/2</div><div>1, 5, 12, 22, 35, ...</div></div>
<div style='display: inline-grid; text-align: center; grid-template-columns: 135px 135px 260px; grid-template-rows: auto;'><div>六角数</div><div>H<sub>n</sub>=<var>n</var>(2<var>n</var>−1)</div><div>1, 6, 15, 28, 45, ...</div></div>

T<sub>285</sub> = P<sub>165</sub> = H<sub>143</sub> = 40755 であることを確認できます。

五角数かつ六角数でもある、この次の三角数を求めなさい。

# --hints--

`triPentaHexa(40756)` は数値を返す必要があります。

```js
assert(typeof triPentaHexa(40756) === 'number');
```

`triPentaHexa(40756)` は 1533776805 を返す必要があります。

```js
assert.strictEqual(triPentaHexa(40756), 1533776805);
```

# --seed--

## --seed-contents--

```js
function triPentaHexa(n) {

  return true;
}

triPentaHexa(40756);
```

# --solutions--

```js
function triPentaHexa(n) {
  function triangular(num) {
  return (num * (num + 1)) / 2;
}

function isPentagonal(num) {
  // Formula found by completing the square and
  // solving for n.
  const n = (Math.sqrt((24 * num) + 1) + 1) / 6;
  return n % 1 === 0;
}

  function isHexagonal(num) {
  // Formula found by completing the square and
  // solving for n.
  const n = Math.sqrt(0.5 * (num + (1 / 8))) + 0.25;
 return n % 1 === 0;
}

let iTri = n;
let tri;
let found = false;
while (!found) {
  iTri++;
  tri = triangular(iTri);
  if (isPentagonal(tri) && isHexagonal(tri)) {
    found = true;
    }
  }
  return tri;
}
```

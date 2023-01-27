---
id: 5900f3861000cf542c50fe99
title: '問題 26: 逆数の循環節'
challengeType: 1
forumTopicId: 301908
dashedName: problem-26-reciprocal-cycles
---

# --description--

単位分数とは分子が 1 の分数です。 分母が 2 から 10 までの単位分数を小数で表すと、次のようになります。

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div><sup>1</sup>/<sub>2</sub> = 0.5</div><div><sup>1</sup>/<sub>3</sub> = 0.(3)</div><div><sup>1</sup>/<sub>4</sub> = 0.25</div><div><sup>1</sup>/<sub>5</sub> = 0.2</div><div><sup>1</sup>/<sub>6</sub> = 0.1(6)</div><div><sup>1</sup>/<sub>7</sub> = 0.(142857)</div><div><sup>1</sup>/<sub>8</sub> = 0.125</div><div><sup>1</sup>/<sub>9</sub> = 0.(1)</div><div><sup>1</sup>/<sub>10</sub> = 0.1</div></div>

この中の 0.1(6) は 0.166666... を意味し、1 桁の循環節を持ちます。 <sup>1</sup>/<sub>7</sub> には 6 桁 の循環節があることが分かります。

<sup>1</sup>/<sub>d</sub> の小数部の循環節が最も長くなるような、`n` 未満の値 `d` を求めなさい。

# --hints--

`reciprocalCycles(700)` は数値を返す必要があります。

```js
assert(typeof reciprocalCycles(700) === 'number');
```

`reciprocalCycles(700)` は 659 を返す必要があります。

```js
assert(reciprocalCycles(700) == 659);
```

`reciprocalCycles(800)` は 743 を返す必要があります。

```js
assert(reciprocalCycles(800) == 743);
```

`reciprocalCycles(900)` は 887 を返す必要があります。

```js
assert(reciprocalCycles(900) == 887);
```

`reciprocalCycles(1000)` は 983 を返す必要があります。

```js
assert(reciprocalCycles(1000) == 983);
```

# --seed--

## --seed-contents--

```js
function reciprocalCycles(n) {

  return n;
}

reciprocalCycles(1000);
```

# --solutions--

```js
// solution required
```

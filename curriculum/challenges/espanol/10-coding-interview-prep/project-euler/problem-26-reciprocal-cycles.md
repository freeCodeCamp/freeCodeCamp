---
id: 5900f3861000cf542c50fe99
title: 'Problema 26: Períodos en fracciones unitarias'
challengeType: 1
forumTopicId: 301908
dashedName: problem-26-reciprocal-cycles
---

# --description--

Fracción unitaria es aquella cuyo numerador es 1. Se muestra la representación decimal de las fracciones unitarias con denominadores de 2 a 10:

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div><sup>1</sup>/<sub>2</sub> = 0.5</div><div><sup>1</sup>/<sub>3</sub> = 0.(3)</div><div><sup>1</sup>/<sub>4</sub> = 0.25</div><div><sup>1</sup>/<sub>5</sub> = 0.2</div><div><sup>1</sup>/<sub>6</sub> = 0.1(6)</div><div><sup>1</sup>/<sub>7</sub> = 0.(142857)</div><div><sup>1</sup>/<sub>8</sub> = 0.125</div><div><sup>1</sup>/<sub>9</sub> = 0.(1)</div><div><sup>1</sup>/<sub>10</sub> = 0.1</div></div>

Donde 0.1(6) representa 0.166666..., teniendo un período de 1 dígito. Así mismo, <sup>1</sup>/<sub>7</sub> tiene un período de 6 dígitos.

Encuentra el valor de `d` &lt; `n` para el cual <sup>1</sup>/<sub>d</sub> posee el período más largo en su parte decimal.

# --hints--

`reciprocalCycles(700)` debe devolver un número.

```js
assert(typeof reciprocalCycles(700) === 'number');
```

`reciprocalCycles(700)` debe devolver 659.

```js
assert(reciprocalCycles(700) == 659);
```

`reciprocalCycles(800)` debe devolver 743.

```js
assert(reciprocalCycles(800) == 743);
```

`reciprocalCycles(900)` debe devolver 887.

```js
assert(reciprocalCycles(900) == 887);
```

`reciprocalCycles(1000)` debe devolver 983.

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

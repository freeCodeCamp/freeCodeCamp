---
id: 5900f3861000cf542c50fe99
title: 'Problema 26: Cicli reciproci'
challengeType: 1
forumTopicId: 301908
dashedName: problem-26-reciprocal-cycles
---

# --description--

Una frazione unitaria contiene 1 nel numeratore. La rappresentazione decimale delle frazioni unitarie con i denominatori da 2 a 10 è indicata con:

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div><sup>1</sup>/<sub>2</sub> = 0.5</div><div><sup>1</sup>/<sub>3</sub> = 0.(3)</div><div><sup>1</sup>/<sub>4</sub> = 0.25</div><div><sup>1</sup>/<sub>5</sub> = 0.2</div><div><sup>1</sup>/<sub>6</sub> = 0.1(6)</div><div><sup>1</sup>/<sub>7</sub> = 0.(142857)</div><div><sup>1</sup>/<sub>8</sub> = 0.125</div><div><sup>1</sup>/<sub>9</sub> = 0.(1)</div><div><sup>1</sup>/<sub>10</sub> = 0.1</div></div>

Dove 0.1(6) significa 0.1666..., e ha un periodo di una cifra. Si può vedere che <sup>1</sup>/<sub>7</sub> ha un periodo di 6 cifre.

Trova il valore di `d` &lt; `n` per il quale <sup>1</sup>/<sub>d</sub> contiene il periodo più lungo nella sua parte di frazione decimale.

# --hints--

`reciprocalCycles(700)` dovrebbe restituire un numero.

```js
assert(typeof reciprocalCycles(700) === 'number');
```

`reciprocalCycles(700)` dovrebbe restituire 659.

```js
assert(reciprocalCycles(700) == 659);
```

`reciprocalCycles(800)` dovrebbe restituire 743.

```js
assert(reciprocalCycles(800) == 743);
```

`reciprocalCycles(900)` dovrebbe restituire 887.

```js
assert(reciprocalCycles(900) == 887);
```

`reciprocalCycles(1000)` dovrebbe restituire 983.

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

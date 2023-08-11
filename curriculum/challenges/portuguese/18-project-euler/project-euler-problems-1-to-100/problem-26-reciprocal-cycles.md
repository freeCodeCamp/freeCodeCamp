---
id: 5900f3861000cf542c50fe99
title: 'Problema 26: Dízimas periódicas'
challengeType: 1
forumTopicId: 301908
dashedName: problem-26-reciprocal-cycles
---

# --description--

Em uma fração unitária, o numerador é 1. A representação decimal das frações unitárias com denominadores de 2 a 10 é a seguinte:

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div><sup>1</sup>/<sub>2</sub> = 0.5</div><div><sup>1</sup>/<sub>3</sub> = 0.(3)</div><div><sup>1</sup>/<sub>4</sub> = 0.25</div><div><sup>1</sup>/<sub>5</sub> = 0.2</div><div><sup>1</sup>/<sub>6</sub> = 0.1(6)</div><div><sup>1</sup>/<sub>7</sub> = 0.(142857)</div><div><sup>1</sup>/<sub>8</sub> = 0.125</div><div><sup>1</sup>/<sub>9</sub> = 0.(1)</div><div><sup>1</sup>/<sub>10</sub> = 0.1</div></div>

A expressão 0.1(6) significa 0.16666666... e tem um ciclo recorrente (que se repete) de 1 algarismo. Podemos notar que <sup>1</sup>/<sub>7</sub> tem um ciclo recorrente de 6 algarismos.

Calcule o valor de `d` &lt; `n` onde <sup>1</sup>/<sub>d</sub> contém o ciclo recorrente mais longo na parte decimal.

# --hints--

`reciprocalCycles(700)` deve retornar um número.

```js
assert(typeof reciprocalCycles(700) === 'number');
```

`reciprocalCycles(700)` deve retornar 659.

```js
assert(reciprocalCycles(700) == 659);
```

`reciprocalCycles(800)` deve retornar 743.

```js
assert(reciprocalCycles(800) == 743);
```

`reciprocalCycles(900)` deve retornar 887.

```js
assert(reciprocalCycles(900) == 887);
```

`reciprocalCycles(1000)` deve retornar 983.

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

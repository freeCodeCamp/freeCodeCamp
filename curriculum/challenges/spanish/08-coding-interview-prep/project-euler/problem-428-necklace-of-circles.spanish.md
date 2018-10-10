---
id: 5900f5191000cf542c51002b
challengeType: 5
title: 'Problem 428: Necklace of Circles'
videoUrl: ''
localeTitle: 'Problema 428: Collar de círculos'
---

## Description
<section id="description"> Sean <var>a,</var> <var><var>byc</var></var> ser números positivos. Sean W, X, Y, Z cuatro puntos colineales donde | WX | = <var>a</var> , | XY | = <var>b</var> , | YZ | = <var>c</var> y | WZ | = <var>a</var> + <var>b</var> + <var>c</var> . Sea C <sub>en</sub> el círculo que tiene el diámetro XY. Sea C <sub>Out</sub> Sé el círculo que tiene el WZ diámetro. <p> El triplete ( <var>a</var> , <var>b</var> , <var>c</var> ) se llama un <em>triplete de collar</em> si puede colocar <var>k</var> ≥ 3 círculos distintos C <sub>1</sub> , C <sub>2</sub> , ..., C <sub><var>k de</var></sub> tal manera que: </p><ul><li> C <sub><var>i</var></sub> no tiene puntos interiores comunes con ningún C <sub><var>j</var></sub> para 1 ≤ <var>i</var> , <var>j</var> ≤ <var>k</var> y <var>i</var> ≠ <var>j</var> , </li><li> C <sub><var>i</var></sub> es tangente a C <sub>in</sub> y C <sub>out</sub> para 1 ≤ <var>i</var> ≤ <var>k</var> , </li><li> C <sub><var>i</var></sub> es tangente a C <sub><var>i</var> +1</sub> para 1 ≤ <var>i</var> &lt; <var>k</var> , y </li><li> C <sub><var>k</var></sub> es tangente a C <sub>1</sub> . </li></ul> Por ejemplo, (5, 5, 5) y (4, 3, 21) son trillizos de collar, mientras que se puede mostrar que (2, 2, 5) no lo es. <img src="https://projecteuler.net/project/images/p428_necklace.png" alt="una representación visual de un collar trío"><p> Sea T ( <var>n</var> ) el número de tripletes de collar ( <var>a</var> , <var>b</var> , <var>c</var> ) de modo que <var>a</var> , <var>b</var> y <var>c</var> sean enteros positivos, y <var>b</var> ≤ <var>n</var> . Por ejemplo, T (1) = 9, T (20) = 732 y T (3000) = 438106. </p><p> Encontrar T (1 000 000 000). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>necklace(1000000000)</code> debe devolver 747215561862.
    testString: 'assert.strictEqual(necklace(1000000000), 747215561862, "<code>necklace(1000000000)</code> should return 747215561862.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function necklace(n) {
  // Good luck!
  return true;
}

necklace(1000000000)

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

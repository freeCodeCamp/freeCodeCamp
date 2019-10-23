---
id: 5900f52e1000cf542c510041
challengeType: 5
title: 'Problem 450: Hypocycloid and Lattice points'
videoUrl: ''
localeTitle: 'Problema 450: hipocicloides y puntos de celosía'
---

## Description
<section id="description"> Un hipocicloide es la curva dibujada por un punto en un círculo pequeño que gira dentro de un círculo más grande. Las ecuaciones paramétricas de un hipocicloide centrado en el origen y que comienzan en el punto más a la derecha vienen dadas por: $ x (t) = (R - r) \ cos (t) + r \ cos (\ frac {R - r} rt) $ $ y (t) = (R - r) \ sin (t) - r \ sin (\ frac {R - r} rt) $ Donde R es el radio del círculo grande y r el radio de la pequeña circulo. <p> Sea $ C (R, r) $ el conjunto de puntos distintos con coordenadas enteras en el hipocicloide con radio R y r, y para el cual hay un valor correspondiente de t tal que $ \ sin (t) $ y $ \ cos ( t) $ son números racionales. </p><p> Sea $ S (R, r) = \ sum _ {(x, y) \ en C (R, r)} | x | + | y ​​| $ es la suma de los valores absolutos de las coordenadas x e y de los puntos en $ C (R, r) $. </p><p> Sea $ T (N) = \ sum <em>{R = 3} ^ N \ sum</em> {r = 1} ^ {\ lfloor \ frac {R - 1} 2 \ rfloor} S (R, r) $ sea la suma de $ S (R, r) $ para R y r enteros positivos, $ R \ leq N $ y $ 2r &lt;R $. </p><p> Se le da: C (3, 1) = {(3, 0), (-1, 2), (-1,0), (-1, -2)} C (2500, 1000) = {(2500 , 0), (772, 2376), (772, -2376), (516, 1792), (516, -1792), (500, 0), (68, 504), (68, -504), ( -1356, 1088), (-1356, -1088), (-1500, 1000), (-1500, -1000)} </p><p> Nota: (-625, 0) no es un elemento de C (2500, 1000) porque $ \ sin (t) $ no es un número racional para los valores correspondientes de t. </p><p> S (3, 1) = (| 3 | + | 0 |) + (| -1 | + | 2 |) + (| -1 | + | 0 |) + (| -1 | + | -2 |) = 10 </p><p> T (3) = 10; T (10) = 524; T (100) = 580442; T (103) = 583108600. </p><p> Encontrar T (106). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler450()</code> debe devolver 583333163984220900.
    testString: 'assert.strictEqual(euler450(), 583333163984220900, "<code>euler450()</code> should return 583333163984220900.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler450() {
  // Good luck!
  return true;
}

euler450();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

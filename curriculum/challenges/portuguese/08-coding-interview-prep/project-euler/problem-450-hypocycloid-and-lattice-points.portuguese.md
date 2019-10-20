---
id: 5900f52e1000cf542c510041
challengeType: 5
title: 'Problem 450: Hypocycloid and Lattice points'
videoUrl: ''
localeTitle: 'Problema 450: Pontos Hipocicloides e Lattice'
---

## Description
<section id="description"> Um hipocicloide é a curva desenhada por um ponto em um pequeno círculo dentro de um círculo maior. As equações paramétricas de um hipociclo centrado na origem e começando no ponto mais à direita são dadas por: $ x (t) = (R - r) \ cos (t) + rs cos (\ frac {R - r} rt) $ $ y (t) = (R - r) \ sin (t) - r \ sin (\ frac {R - r} rt) $ Onde R é o raio do círculo grande e r raio do pequeno círculo. <p> Seja $ C (R, r) $ o conjunto de pontos distintos com coordenadas inteiras no hipocicloide com raio R er para o qual existe um valor correspondente de t tal que $ \ sin (t) $ e $ \ cos ( t) $ são números racionais. </p><p> Seja $ S (R, r) = \ sum _ {(x, y) \ em C (R, r)} | x | + | y ​​| $ é a soma dos valores absolutos das coordenadas x e y dos pontos em $ C (R, r) $. </p><p> Seja $ T (N) = \ soma <em>{R = 3} ^ N \ soma</em> {r = 1} ^ {\ lfloor \ frac {R - 1} 2 \ rfloor} S (R, r) $ seja a soma de $ S (R, r) $ para R e r inteiros positivos, $ R \ leq N $ e $ 2r &lt;R $. </p><p> Você recebe: C (3, 1) = {(3, 0), (-1, 2), (-1,0), (-1, -2)} C (2500, 1000) = {(2500 , 0), (772, 2376), (772, -2376), (516, 1792), (516, -1792), (500, 0), (68, 504), (68, -504), ( -1356, 1088), (-1356, -1088), (-1500, 1000), (-1500, -1000)} </p><p> Nota: (-625, 0) não é um elemento de C (2500, 1000) porque $ \ sin (t) $ não é um número racional para os valores correspondentes de t. </p><p> S (3, 1) = (| 3 | + | 0 |) + (| -1 | + | 2 |) + (| -1 | + | 0 |) + (| -1 | + | -2 |) = 10 </p><p> T (3) = 10; T (10) = 524, T (100) = 580442; T (103) = 583108600. </p><p> Encontre T (106). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler450()</code> deve retornar 583333163984220900.
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

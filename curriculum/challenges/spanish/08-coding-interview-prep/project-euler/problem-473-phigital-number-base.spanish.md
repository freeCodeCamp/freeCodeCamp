---
id: 5900f5461000cf542c510058
challengeType: 5
title: 'Problem 473: Phigital number base'
videoUrl: ''
localeTitle: 'Problema 473: base numérica de Phigital'
---

## Description
<section id="description"> Sea $ \ varphi $ la proporción áurea: $ \ varphi = \ frac {1+ \ sqrt {5}} {2}. $ Notablemente, es posible escribir cada entero positivo como una suma de potencias de $ \ varphi $ par si requerimos que cada poder de $ \ varphi $ se use como máximo una vez en esta suma. Incluso entonces esta representación no es única. Podemos hacerlo único exigiendo que no se utilicen potencias con exponentes consecutivos y que la representación sea finita. Ej .: $ 2 = \ varphi + \ varphi ^ {- 2} $ y $ 3 = \ varphi ^ {2} + \ varphi ^ {- 2} $ <p> Para representar esta suma de potencias de $ \ varphi $ usamos una cadena de 0 y 1 con un punto para indicar dónde comienzan los exponentes negativos. Llamamos a esto la representación en la base numérica digital. Entonces $ 1 = 1 <em>{\ varphi} $, $ 2 = 10.01</em> {\ varphi} $, $ 3 = 100.01 <em>{\ varphi} $ y $ 14 = 100100.001001</em> {\ varphi} $. Las cadenas que representan 1, 2 y 14 en la base numérica digital son palindrómicas, mientras que la cadena que representa 3 no lo es. (El punto figital no es el carácter medio). </p><p> La suma de los enteros positivos que no superan los 1000 y cuya representación figital es palindrómica es 4345. </p><p> Encuentre la suma de los enteros positivos que no excedan $ 10 ^ {10} $ cuya representación ficticia sea palindrómica. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler473()</code> debe devolver 35856681704365.
    testString: 'assert.strictEqual(euler473(), 35856681704365, "<code>euler473()</code> should return 35856681704365.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler473() {
  // Good luck!
  return true;
}

euler473();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

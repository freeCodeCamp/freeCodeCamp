---
id: 5
localeTitle: 5900f3d61000cf542c50fee7
challengeType: 5
title: 'Problem 103: Special subset sums: optimum'
---

## Description
<section id='description'> 
Sea S (A) la suma de elementos en el conjunto A de tamaño n. Lo llamaremos conjunto de suma especial si para dos subconjuntos disjuntos no vacíos, B y C, las siguientes propiedades son verdaderas: 
S (B) ≠ S (C); es decir, las sumas de subconjuntos no pueden ser iguales. 
Si B contiene más elementos que C, entonces S (B)&gt; S (C). 
Si S (A) se minimiza para un n dado, lo llamaremos un conjunto de suma especial óptimo. Los primeros cinco conjuntos de suma especial óptimos se dan a continuación. 
n = 1: {1} n = 2: {1, 2} n = 3: {2, 3, 4} n = 4: {3, 5, 6, 7} n = 5: {6, 9, 11, 12, 13} 
Parece que para un conjunto óptimo dado, A = {a1, a2, ..., an}, el siguiente conjunto óptimo tiene la forma B = {b, a1 + b, a2 + b , ..., an + b}, donde b es el elemento &quot;medio&quot; en la fila anterior. 
Al aplicar esta &quot;regla&quot; esperaríamos que el conjunto óptimo para n = 6 sea A = {11, 17, 20, 22, 23, 24}, con S (A) = 117. Sin embargo, esto no es el óptimo conjunto, ya que simplemente hemos aplicado un algoritmo para proporcionar un conjunto casi óptimo. El conjunto óptimo para n = 6 es A = {11, 18, 19, 20, 22, 25}, con S (A) = 115 y la cadena del conjunto correspondiente: 111819202225. 
Dado que A es una suma especial óptima establecida para n = 7, encuentra su cadena de conjunto. 
NOTA: Este problema está relacionado con el Problema 105 y el Problema 106. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler103()</code> debe devolver 20313839404245.
    testString: 'assert.strictEqual(euler103(), 20313839404245, "<code>euler103()</code> should return 20313839404245.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler103() {
  // Good luck!
  return true;
}

euler103();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

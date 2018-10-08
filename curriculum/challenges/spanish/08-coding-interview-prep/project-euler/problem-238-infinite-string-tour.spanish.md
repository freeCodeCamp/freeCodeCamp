---
id: 5
localeTitle: 5900f45b1000cf542c50ff6d
challengeType: 5
title: 'Problem 238: Infinite string tour'
---

## Description
<section id='description'> 
Crea una secuencia de números utilizando el generador de números pseudoaleatorios &quot;Blum Blum Shub&quot;: 

s0 
= 
14025256 
sn + 1 
= 
sn2 mod 20300713 


Concatena estos números s0s1s2 ... para crear una cadena w de longitud infinita 
Entonces, w = 14025256741014958470038053646… 

Para un entero positivo k, si no existe una subcadena de w con una suma de dígitos igual a k, p (k) se define como cero. Si al menos una subcadena de w existe con una suma de dígitos igual a k, definimos p (k) = z, donde z es la posición inicial de la primera subcadena de este tipo. 

Por ejemplo: 

Las subcadenas 1, 14, 1402,… 
con sumas respectivas de dígitos iguales a 1, 5, 7,… 
comienzan en la posición 1, por lo tanto, p (1) = p (5) = p ( 7) =… = 1. 

Las subcadenas 4, 402, 4025,… 
con sumas respectivas de dígitos iguales a 4, 6, 11,… 
comienzan en la posición 2, por lo tanto, p (4) = p (6) = p (11) = ... = 2. 

Las subcadenas 02, 0252, ... 
con sumas respectivas de dígitos iguales a 2, 9, ... 
comienzan en la posición 3, por lo tanto p (2) = p (9) = ... = 3. 

Tenga en cuenta que la subcadena 025 que comienza en la posición 3, tiene una suma de dígitos igual a 7, pero hubo una subcadena anterior (que comienza en la posición 1) con una suma de dígitos igual a 7, por lo que p (7) = 1 , no 3. 

Podemos verificar que, para 0 &lt;k ≤ 103, ∑ p (k) = 4742. 

Encuentre ∑ p (k), para 0 &lt;k ≤ 2 · 1015. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler238()</code> debe devolver 9922545104535660.
    testString: 'assert.strictEqual(euler238(), 9922545104535660, "<code>euler238()</code> should return 9922545104535660.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler238() {
  // Good luck!
  return true;
}

euler238();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 5
localeTitle: 5900f4e51000cf542c50fff6
challengeType: 5
title: 'Problem 374: Maximum Integer Partition Product'
---

## Description
<section id='description'> 
Una partición entera de un número n es una forma de escribir n como una suma de enteros positivos. 

particiones que difieren solo en el orden de sus sumandos se consideran iguales. 
Una partición de n en partes distintas es una partición de n en la que cada parte ocurre como máximo una vez. 

Las particiones de 5 en partes distintas son: 
5, 4 + 1 y 3 + 2. 

Sea f (n) el producto máximo de las partes de cualquier partición de n en partes distintas y sea m (n) el número de elementos de cualquier partición de n con ese producto. 

Entonces f (5) = 6 y m (5) = 2. 

Para n = 10, la partición con el producto más grande es 10 = 2 + 3 + 5, lo que da f (10) = 30 y m (10) = 3. 
Y su producto, f (10) · m (10) = 30 · 3 = 90 

Se puede verificar que 
∑f (n) · m (n) para 1 ≤ n ≤ 100 = 1683550844462. 

Buscar ∑f (n) · m (n) para 1 ≤ n ≤ 1014. 
Da tu respuesta módulo 982451653, el 50 millones de primos. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler374()</code> debe devolver 334420941.
    testString: 'assert.strictEqual(euler374(), 334420941, "<code>euler374()</code> should return 334420941.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler374() {
  // Good luck!
  return true;
}

euler374();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

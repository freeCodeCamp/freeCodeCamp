---
id: 5
localeTitle: 5900f4761000cf542c50ff88
challengeType: 5
title: 'Problem 265: Binary Circles'
---

## Description
<section id='description'> 
2N dígitos binarios se pueden colocar en un círculo para que todas las subsecuencias en el sentido de las agujas del reloj de N dígitos sean distintas. 

Para N = 3, dos disposiciones circulares de este tipo son posibles, ignorando rotaciones: 


Para la primera disposición, las subsecuencias de 3 dígitos, en el sentido de las agujas del reloj, son: 000, 001, 010, 101, 011, 111, 110 y 100. 

Cada disposición circular puede codificarse como un número al concatenar los dígitos binarios comenzando con la subsecuencia de todos los ceros como los bits más significativos y proceder en el sentido de las agujas del reloj. Las dos disposiciones para N = 3 se representan así como 23 y 29: 
00010111 2 = 23 
00011101 2 = 29 

Llamando a S (N) la suma de las representaciones numéricas únicas, podemos ver que S (3) = 23 + 29 = 52. 

Encuentra S (5). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler265()</code> debe devolver 209110240768.
    testString: 'assert.strictEqual(euler265(), 209110240768, "<code>euler265()</code> should return 209110240768.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler265() {
  // Good luck!
  return true;
}

euler265();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

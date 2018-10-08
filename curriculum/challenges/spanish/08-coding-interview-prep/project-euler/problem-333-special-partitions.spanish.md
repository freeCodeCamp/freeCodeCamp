---
id: 5
localeTitle: 5900f4b91000cf542c50ffcc
challengeType: 5
title: 'Problem 333: Special partitions'
---

## Description
<section id='description'> 
Todos los enteros positivos se pueden dividir de tal manera que cada término de la partición se pueda expresar como 2ix3j, donde i, j ≥ 0. 

Consideremos solo aquellas particiones en las que ninguno de los términos puede dividir ninguno de otros terminos. 
Por ejemplo, la partición de 17 = 2 + 6 + 9 = (21x30 + 21x31 + 20x32) no sería válida ya que 2 puede dividir 6. Tampoco la partición 17 = 16 + 1 = (24x30 + 20x30) ya que 1 puede divida 16. La única partición válida de 17 sería 8 + 9 = (23x30 + 20x32). 

Muchos enteros tienen más de una partición válida, siendo el primero 11 las dos particiones siguientes. 
11 = 2 + 9 = (21x30 + 20x32) 
11 = 8 + 3 = (23x30 + 20x31) 

Definamos P (n) como el número de particiones válidas de n. Por ejemplo, P (11) = 2. 

Consideremos solo los enteros primos q que tendrían una sola partición válida como P (17). 

La suma de los primos q &lt;100, de manera que P (q) = 1 es igual a 233. 

Halla la suma de los primos q &lt;1000000, de manera que P (q) = 1. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler333()</code> debe devolver 3053105.
    testString: 'assert.strictEqual(euler333(), 3053105, "<code>euler333()</code> should return 3053105.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler333() {
  // Good luck!
  return true;
}

euler333();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

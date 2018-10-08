---
id: 5
localeTitle: 5900f3a91000cf542c50febc
challengeType: 5
title: 'Problem 61: Cyclical figurate numbers'
---

## Description
<section id='description'> 
números de triángulo, cuadrado, pentagonal, hexagonal, heptagonal y octagonal son todos números figurados (poligonales) y se generan mediante las siguientes fórmulas: 
Triángulo 

P3, n = n (n + 1) / 2 

1, 3 , 6, 10, 15, ... 
Cuadrado 

P4, n = n2 

1, 4, 9, 16, 25, ... 
Pentagonal 

P5, n = n (3n − 1) / 2 

1, 5, 12, 22, 35, ... 
Hexagonal 

P6, n = n (2n − 1) 

1, 6, 15, 28, 45, ... 
Heptagonal 

P7, n = n (5n-3) / 2 

1, 7, 18, 34, 55, ... 
Octagonal 

P8, n = n (3n-2) 

1, 8, 21, 40, 65 , ... 
El conjunto ordenado de tres números de 4 dígitos: 8128, 2882, 8281, tiene tres propiedades interesantes. 
El conjunto es cíclico, ya que los dos últimos dígitos de cada número son los dos primeros dígitos del siguiente número (incluido el último número con el primero). 
Cada tipo poligonal: triángulo (P3,127 = 8128), cuadrado (P4,91 = 8281) y pentagonal (P5,44 = 2882), está representado por un número diferente en el conjunto. 
Este es el único conjunto de números de 4 dígitos con esta propiedad. 
Encuentre la suma del único conjunto ordenado de seis números cíclicos de 4 dígitos para los cuales cada tipo poligonal: triángulo, cuadrado, pentagonal, hexagonal, heptagonal y octagonal, se representa con un número diferente en el conjunto. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler61()</code> debe devolver 28684.
    testString: 'assert.strictEqual(euler61(), 28684, "<code>euler61()</code> should return 28684.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler61() {
  // Good luck!
  return true;
}

euler61();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

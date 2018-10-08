---
id: 5
localeTitle: 5900f3ac1000cf542c50febf
challengeType: 5
title: 'Problem 64: Odd period square roots'
---

## Description
<section id='description'> 
Todas las raíces cuadradas son periódicas cuando se escriben como fracciones continuas y se pueden escribir en la forma: 

√N = a0 + 
1 

a1 + 
1 


a2 + 
1 



a3 + ... 

Por ejemplo, consideremos √23: 

√23 = 4 + √23 - 4 = 4 + 
1 
= 4 + 
1 

1√23—4 

1 + 
√23 - 37 

Si continuamos obtendríamos la siguiente expansión: 

√23 = 4 + 
1 

1 + 
1 


3 + 
1 



1 + 
1 




8 +. 

El proceso se puede resumir de la siguiente manera: 

a0 = 4, 

1√23—4 
= 
√23 + 47 
= 1 + 
√23—37 
a1 = 1, 

7√23 —3 
= 
7 (√23 + 3) 14 
= 3 + 
√23—32 
a2 = 3, 

2√23—3 
= 
2 (√23 + 3) 14 
= 1 + 
√23—47 
a3 = 1, 

7√23—4 
= 
7 (√23 + 4) 7 
= 8 + 
√23—4 
a4 = 8, 

1√23—4 
= 
√23 + 47 
= 1 + 
√23—37 
a5 = 1, 

7√23—3 
= 
7 (√23 + 3) 14 
= 3 + 
√23—32 
a6 = 3 , 

2√23—3 
= 
2 (√23 + 3) 14 
= 1 + 
√23—47 
a7 = 1, 

7√23—4 
= 
7 (√23 + 4) 7 
= 8 + 
√23—4 

Puede ser Visto que la secuencia se está repitiendo. Para mayor precisión, usamos la notación √23 = [4; (1,3,1,8)], para indicar que el bloque (1,3,1,8) se repite indefinidamente. 

Las primeras diez representaciones de fracciones continuas de raíces cuadradas (irracionales) son: 
√2 = [1; (2)], período = 1 
√3 = [1; (1,2)], período = 2 
√ 5 = [2; (4)], período = 1 
√6 = [2; (2,4)], período = 2 
√7 = [2; (1,1,1,4)], período = 4 
√8 = [2; (1,4)], período = 2 
√10 = [3; (6)], período = 1 
√11 = [3; (3,6)], período = 2 
√12 = [3; (2,6)], período = 2 
√13 = [3; (1,1,1,1,6)], período = 5 
Exactamente cuatro fracciones continuas, para N ≤ 13 , tiene un periodo impar. 
¿Cuántas fracciones continuas para N ≤ 10000 tienen un período impar? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler64()</code> debe devolver 1322.
    testString: 'assert.strictEqual(euler64(), 1322, "<code>euler64()</code> should return 1322.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler64() {
  // Good luck!
  return true;
}

euler64();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

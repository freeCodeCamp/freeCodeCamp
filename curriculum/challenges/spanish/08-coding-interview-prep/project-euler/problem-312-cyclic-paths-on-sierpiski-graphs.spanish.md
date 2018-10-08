---
id: 5
localeTitle: 5900f4a51000cf542c50ffb7
challengeType: 5
title: 'Problem 312: Cyclic paths on Sierpiński graphs'
---

## Description
<section id='description'> 
- Un gráfico de Sierpiński de orden-1 (S1) es un triángulo equilátero. 
: Sn + 1 se obtiene de Sn al colocar tres copias de Sn para que cada par de copias tenga una esquina común. 




Sea C (n) el número de ciclos que pasan exactamente una vez a través de todos los vértices de Sn. 
Por ejemplo, C (3) = 8 porque se pueden dibujar ocho de estos ciclos en S3, como se muestra a continuación: 




También se puede verificar que: 
C (1) = C (2) = 1 
C (5) = 71328803586048 
C (10 000) mod 108 = 37652224 
C (10 000) mod 138 = 617720485 

Encuentre C (C (C (10 000))) mod 138. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler312()</code> debe devolver 324681947.
    testString: 'assert.strictEqual(euler312(), 324681947, "<code>euler312()</code> should return 324681947.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler312() {
  // Good luck!
  return true;
}

euler312();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

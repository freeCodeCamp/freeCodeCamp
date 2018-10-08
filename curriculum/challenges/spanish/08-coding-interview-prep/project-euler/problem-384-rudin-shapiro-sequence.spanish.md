---
id: 5
localeTitle: 5900f4ed1000cf542c50fffe
challengeType: 5
title: 'Problem 384: Rudin-Shapiro sequence'
---

## Description
<section id='description'> 
Defina la secuencia a (n) como el número de pares adyacentes en la expansión binaria de n (posiblemente superpuesta). 
Por ejemplo: a (5) = a (1012) = 0, a (6) = a (1102) = 1, a (7) = a (1112) = 2 

Defina la secuencia b (n) = (- 1) a (n). 
Esta secuencia se llama la secuencia de Rudin-Shapiro. 
Considera también la secuencia sumatoria de b (n):. 

El primer par de valores de estas secuencias son: 
n 0 1 2 3 4 5 6 7 
a (n) 0 0 0 1 0 0 1 2 
b (n) 1 1 1 -1 1 1 -1 1 
s (n) 1 2 3 2 3 4 3 4 

La secuencia s (n) tiene la propiedad notable de que todos los elementos son positivos y que cada entero positivo k se produce exactamente k veces. 

Defina g (t, c), con 1 ≤ c ≤ t, como el índice en s (n) para el que t aparece por c&#39;th vez en s (n). 
Por ejemplo: g (3,3) = 6, g (4,2) = 7 y g (54321,12345) = 1220847710. 

Sea F (n) la secuencia de fibonacci definida por: 
F (0) = F (1) = 1 y 
F (n) = F (n-1) + F (n-2) para n&gt; 1. 

Defina GF (t) = g (F (t), F (t-1)). 

Encuentra ΣGF (t) para 2≤t≤45. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler384()</code> debe devolver 3354706415856333000.
    testString: 'assert.strictEqual(euler384(), 3354706415856333000, "<code>euler384()</code> should return 3354706415856333000.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler384() {
  // Good luck!
  return true;
}

euler384();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

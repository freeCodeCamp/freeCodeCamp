---
id: ae9defd7acaf69703ab432ea
title: Smallest Common Multiple
localeTitle: El múltiplo común más pequeño
isRequired: true
challengeType: 5
---

## Description
<section id='description'> 
Encuentre el múltiplo común más pequeño de los parámetros provistos que pueden dividirse de manera uniforme por ambos, así como por todos los números secuenciales en el rango entre estos parámetros. 
El rango será una matriz de dos números que no necesariamente estarán en orden numérico. 
Por ejemplo, si se proporciona 1 y 3, encuentre el mínimo común múltiplo de 1 y 3 que también es divisible por todos los números <em>entre</em> 1 y 3. La respuesta aquí sería 6. 
Recuerde usar <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lectura-Búsqueda-Preguntar</a> si te quedas atascado Trate de emparejar el programa. Escribe tu propio código. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>smallestCommons([1, 5])</code> debe devolver un número.&#39;
    testString: 'assert.deepEqual(typeof smallestCommons([1, 5]), "number", "<code>smallestCommons([1, 5])</code> should return a number.");'
  - text: &#39; <code>smallestCommons([1, 5])</code> debe devolver 60.&#39;
    testString: 'assert.deepEqual(smallestCommons([1, 5]), 60, "<code>smallestCommons([1, 5])</code> should return 60.");'
  - text: &#39; <code>smallestCommons([5, 1])</code> debe devolver 60.&#39;
    testString: 'assert.deepEqual(smallestCommons([5, 1]), 60, "<code>smallestCommons([5, 1])</code> should return 60.");'
  - text: &#39; <code>smallestCommons([2, 10])</code> debe devolver 2520.&#39;
    testString: 'assert.deepEqual(smallestCommons([2, 10]), 2520, "<code>smallestCommons([2, 10])</code> should return 2520.");'
  - text: &#39; <code>smallestCommons([1, 13])</code> debe devolver 360360.&#39;
    testString: 'assert.deepEqual(smallestCommons([1, 13]), 360360, "<code>smallestCommons([1, 13])</code> should return 360360.");'
  - text: &#39; <code>smallestCommons([23, 18])</code> debe devolver 6056820.&#39;
    testString: 'assert.deepEqual(smallestCommons([23, 18]), 6056820, "<code>smallestCommons([23, 18])</code> should return 6056820.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```

</section>

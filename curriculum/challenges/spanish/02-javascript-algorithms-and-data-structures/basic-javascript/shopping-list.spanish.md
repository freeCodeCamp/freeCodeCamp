---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
localeTitle: Lista de la compra
challengeType: 1
---

## Description
<section id='description'> 
Crea una lista de compras en la variable <code>myList</code> . La lista debe ser una matriz multidimensional que contenga varias subarreglas. 
El primer elemento de cada sub-matriz debe contener una cadena con el nombre del elemento. El segundo elemento debe ser un número que represente la cantidad, es decir, 
<code>[&quot;Chocolate Bar&quot;, 15]</code> 
Debe haber al menos 5 subarreglos en la lista. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code> debería ser una matriz
    testString: 'assert(isArray, "<code>myList</code> should be an array");'
  - text: Los primeros elementos de cada uno de sus subarreglos deben ser cadenas
    testString: 'assert(hasString, "The first elements in each of your sub-arrays must all be strings");'
  - text: Los segundos elementos en cada una de sus sub-matrices deben ser todos números
    testString: 'assert(hasNumber, "The second elements in each of your sub-arrays must all be numbers");'
  - text: Debes tener al menos 5 elementos en tu lista
    testString: 'assert(count > 4, "You must have at least 5 items in your list");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myList = [];


```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```

</section>

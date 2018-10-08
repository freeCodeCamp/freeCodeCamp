---
title: Vector cross product
id: 594810f028c0303b75339ad2
localeTitle: 594810f028c0303b75339ad2
challengeType: 5
---

## Description
<section id='description'> 
Un vector se define como que tiene tres dimensiones como se representa por una colección ordenada de tres números: (X, Y, Z). 
<p> 
Tarea: 

Escribir una función que toma dos vectores (matrices) como entrada y calcula su producto cruzado. 

Su función debe devolver <code>null</code> en 
entradas no válidas (es decir, vectores de diferentes longitudes). 
</p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: puntoEl producto debe ser una función
    testString: 'assert.equal(typeof crossProduct, "function", "dotProduct must be a function");'
  - text: dotProduct () debe devolver null
    testString: 'assert.equal(crossProduct(), null, "dotProduct() must return null");'
  - text: 'crossProduct ([1, 2, 3], [4, 5, 6]) debe devolver [-3, 6, -3].'
    testString: 'assert.deepEqual(res12, exp12, "crossProduct([1, 2, 3], [4, 5, 6]) must return [-3, 6, -3].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function crossProduct() {
    // Good luck!
}
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
function crossProduct(a, b) {
  if (!a || !b) {
    return null;
  }

  // Check lengths
  if (a.length !== 3 || b.length !== 3) {
    return null;
  }

  return [
    (a[1] * b[2]) - (a[2] * b[1]),
    (a[2] * b[0]) - (a[0] * b[2]),
    (a[0] * b[1]) - (a[1] * b[0])
  ];
}

```

</section>

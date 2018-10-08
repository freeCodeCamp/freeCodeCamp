---
id: 5
localeTitle: 5900f53c1000cf542c51004e
challengeType: 5
title: 'Problem 463: A weird recurrence relation'
---

## Description
<section id='description'> 
La función $ f $ se define para todos los enteros positivos de la siguiente manera: 
$ f (1) = 1 $ 
$ f (3) = 3 $ 
$ f (2n) = f (n) $ 
$ f (4n) + 1) = 2f (2n + 1) - f (n) $ 
$ f (4n + 3) = 3f (2n + 1) - 2f (n) $ 

La función $ S (n) $ se define como $ \ sum_ {i = 1} ^ {n} f (i) $. 
$ S (8) = 22 $ y $ S (100) = 3604 $. 
Encuentra $ S (3 ^ {37}) $. Da los últimos 9 dígitos de tu respuesta. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler463()</code> debe devolver 808981553.
    testString: 'assert.strictEqual(euler463(), 808981553, "<code>euler463()</code> should return 808981553.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler463() {
  // Good luck!
  return true;
}

euler463();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

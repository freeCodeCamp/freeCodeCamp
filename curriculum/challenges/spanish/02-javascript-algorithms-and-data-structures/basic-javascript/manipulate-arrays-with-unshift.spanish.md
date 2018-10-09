---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift()
localeTitle: Manipular matrices con unshift ()
challengeType: 1
---

## Description
<section id='description'>
No solo puede <code>shift</code> elementos del principio de una matriz, <code>unshift</code> también puede <code>unshift</code> elementos al principio de una matriz, es decir, agregar elementos delante de la matriz.
<code>.unshift()</code> funciona exactamente como <code>.push()</code> , pero en lugar de agregar el elemento al final de la matriz, <code>unshift()</code> agrega el elemento al principio de la matriz.
</section>

## Instructions
<section id='instructions'>
Añadir <code>[&quot;Paul&quot;,35]</code> para el inicio de la <code>myArray</code> variable usando <code>unshift()</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>myArray</code> debería tener ahora [[&quot;Paul&quot;, 35], [&quot;dog&quot;, 3]].'
    testString: 'assert((function(d){if(typeof d[0] === "object" && d[0][0] == "Paul" && d[0][1] === 35 && d[1][0] != undefined && d[1][0] == "dog" && d[1][1] != undefined && d[1][1] == 3){return true;}else{return false;}})(myArray), "<code>myArray</code> should now have [["Paul", 35], ["dog", 3]].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.


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
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```

</section>

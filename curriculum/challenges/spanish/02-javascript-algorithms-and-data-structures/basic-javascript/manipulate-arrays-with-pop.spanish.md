---
id: 56bbb991ad1ed5201cd392cc
title: Manipulate Arrays With pop()
challengeType: 1
videoUrl: ''
localeTitle: Manipular matrices con pop ()
---

## Description
<section id="description"> Otra forma de cambiar los datos en una matriz es con la función <code>.pop()</code> . <code>.pop()</code> se utiliza para  <code>.pop()</code>  un valor del final de una matriz. Podemos almacenar este valor &quot;extraído&quot; asignándolo a una variable. En otras palabras, <code>.pop()</code> elimina el último elemento de una matriz y devuelve ese elemento. Cualquier tipo de entrada se puede &quot;extraer&quot; de una matriz: números, cadenas, incluso matrices anidadas. <blockquote> <code>var threeArr = [1, 4, 6]; <br> var oneDown = threeArr.pop(); <br> console.log(oneDown); // Returns 6 <br> console.log(threeArr); // Returns [1, 4]</code> </blockquote> </section>

## Instructions
<section id="instructions"> Use la función <code>.pop()</code> para eliminar el último elemento de <code>myArray</code> , asignando el valor  <code>removedFromMyArray</code> a <code>removedFromMyArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code> solo debe contener <code>[[&quot;John&quot;, 23]]</code> .'
    testString: 'assert((function(d){if(d[0][0] == "John" && d[0][1] === 23 && d[1] == undefined){return true;}else{return false;}})(myArray), "<code>myArray</code> should only contain <code>[["John", 23]]</code>.");'
  - text: Usa <code>pop()</code> en <code>myArray</code>
    testString: 'assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code), "Use <code>pop()</code> on <code>myArray</code>");'
  - text: '<code>removedFromMyArray</code> solo debe contener <code>[&quot;cat&quot;, 2]</code> .'
    testString: 'assert((function(d){if(d[0] == "cat" && d[1] === 2 && d[2] == undefined){return true;}else{return false;}})(removedFromMyArray), "<code>removedFromMyArray</code> should only contain <code>["cat", 2]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray;

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
// solution required
```
</section>

---
id: 56bbb991ad1ed5201cd392cd
title: Manipulate Arrays With shift()
localeTitle: Manipular matrices con cambio ()
challengeType: 1
---

## Description
<section id='description'> 
<code>pop()</code> siempre elimina el último elemento de una matriz. ¿Qué pasa si quieres eliminar el primero? 
Ahí es donde <code>.shift()</code> en <code>.shift()</code> . Funciona igual que <code>.pop()</code> , excepto que elimina el primer elemento en lugar del último. 
</section>

## Instructions
<section id='instructions'> 
Use la función <code>.shift()</code> para eliminar el primer elemento de <code>myArray</code> , asignando el valor &quot;desviado&quot; a <code>removedFromMyArray</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>myArray</code> ahora debe ser igual a <code>[[&quot;dog&quot;, 3]]</code> .&#39;
    testString: 'assert((function(d){if(d[0][0] == "dog" && d[0][1] === 3 && d[1] == undefined){return true;}else{return false;}})(myArray), "<code>myArray</code> should now equal <code>[["dog", 3]]</code>.");'
  - text: &#39; <code>removedFromMyArray</code> debe contener <code>[&quot;John&quot;, 23]</code> .&#39;
    testString: 'assert((function(d){if(d[0] == "John" && d[1] === 23 && typeof removedFromMyArray === "object"){return true;}else{return false;}})(removedFromMyArray), "<code>removedFromMyArray</code> should contain <code>["John", 23]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

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
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
```

</section>

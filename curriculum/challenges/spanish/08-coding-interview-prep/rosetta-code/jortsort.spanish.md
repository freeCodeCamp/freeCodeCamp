---
title: JortSort
id: 5a23c84252665b21eecc7ec4
localeTitle: 5a23c84252665b21eecc7ec4
challengeType: 5
---

## Description
<section id='description'> 
jortSort es un conjunto de herramientas de clasificación que hace que el usuario haga el trabajo y garantiza la eficiencia porque no tiene que ordenar nunca más. Originalmente fue presentado por Jenn &quot;Moneydollars&quot; Schiffer en el prestigioso <a href="https://www.youtube.com/watch?v=pj4U_W0OFoE">JSConf</a> . 
jortSort es una función que toma una matriz única de objetos comparables como su argumento. A continuación, ordena la matriz en orden ascendente y compara la matriz ordenada con la matriz originalmente proporcionada. Si las matrices coinciden (es decir, la matriz original ya estaba ordenada), la función devuelve verdadero. Si las matrices no coinciden (es decir, la matriz original no se ordenó), la función devuelve falso. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>jortsort</code> debería ser una función.
    testString: 'assert(typeof jortsort=="function","<code>jortsort</code> should be a function.");'
  - text: <code>jortsort(&quot;+JSON.stringify(tests[0])+&quot;)</code> debe devolver un valor booleano.
    testString: 'assert(typeof jortsort(tests[0].slice())=="boolean","<code>jortsort("+JSON.stringify(tests[0])+")</code> should return a boolean.");'
  - text: <code>jortsort(&quot;+JSON.stringify(tests[0])+&quot;)</code> debe devolver <code>true</code> .
    testString: 'assert.equal(jortsort(tests[0].slice()),true,"<code>jortsort("+JSON.stringify(tests[0])+")</code> should return <code>true</code>.");'
  - text: <code>jortsort(&quot;+JSON.stringify(tests[1])+&quot;)</code> debe devolver <code>false</code> .
    testString: 'assert.equal(jortsort(tests[1].slice()),false,"<code>jortsort("+JSON.stringify(tests[1])+")</code> should return <code>false</code>.");'
  - text: <code>jortsort(&quot;+JSON.stringify(tests[2])+&quot;)</code> debe devolver <code>false</code> .
    testString: 'assert.equal(jortsort(tests[2].slice()),false,"<code>jortsort("+JSON.stringify(tests[2])+")</code> should return <code>false</code>.");'
  - text: <code>jortsort(&quot;+JSON.stringify(tests[3])+&quot;)</code> debe devolver <code>true</code> .
    testString: 'assert.equal(jortsort(tests[3].slice()),true,"<code>jortsort("+JSON.stringify(tests[3])+")</code> should return <code>true</code>.");'
  - text: <code>jortsort(&quot;+JSON.stringify(tests[4])+&quot;)</code> debe devolver <code>false</code> .
    testString: 'assert.equal(jortsort(tests[4].slice()),false,"<code>jortsort("+JSON.stringify(tests[4])+")</code> should return <code>false</code>.");'
  - text: <code>jortsort(&quot;+JSON.stringify(tests[5])+&quot;)</code> debe devolver <code>true</code> .
    testString: 'assert.equal(jortsort(tests[5].slice()),true,"<code>jortsort("+JSON.stringify(tests[5])+")</code> should return <code>true</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function jortsort (array) {
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
function jortsort (array) {
  // sort the array
  var originalArray = array.slice(0);
  array.sort( function(a,b){return a - b} );

  // compare to see if it was originally sorted
  for (var i = 0; i < originalArray.length; ++i) {
    if (originalArray[i] !== array[i]) return false;
  }

  return true;
};

```

</section>

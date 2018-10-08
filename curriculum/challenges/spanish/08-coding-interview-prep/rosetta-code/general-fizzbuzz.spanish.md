---
title: General FizzBuzz
id: 5a23c84252665b21eecc7e78
localeTitle: 5a23c84252665b21eecc7e78
challengeType: 5
---

## Description
<section id='description'> 
Escriba una versión generalizada de <a href="http://rosettacode.org/wiki/FizzBuzz">FizzBuzz</a> que funcione para cualquier lista de factores, junto con sus palabras. 
Esta es básicamente una implementación &quot;fizzbuzz&quot; donde las reglas del juego se suministran al usuario. Crea una función para implementar esto. La función debe tener dos parámetros. 
El primero será una matriz con las reglas de FizzBuzz. Por ejemplo: <code>[ [3,&quot;Fizz&quot;] , [5,&quot;Buzz&quot;] ]</code> . 
Esto indica que se debe imprimir <code>Fizz</code> si el número es un múltiplo de 3 y <code>Buzz</code> si es un múltiplo de 5. Si es un múltiplo de ambos, las cadenas deben concatenarse en el orden especificado en la matriz. En este caso, <code>FizzBuzz</code> si el número es un múltiplo de 3 y 5. 
El segundo parámetro es el número para el cual la función debe devolver una cadena como se indicó anteriormente. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>genFizzBuzz</code> debería ser una función.
    testString: 'assert(typeof genFizzBuzz=="function","<code>genFizzBuzz</code> should be a function.");'
  - text: <code>genFizzBuzz(&quot;+JSON.stringify(tests[0][0])+&quot;,&quot;+tests[0][1]+&quot;)</code> debe devolver un tipo.
    testString: 'assert(typeof genFizzBuzz(tests[0][0],tests[0][1])=="string","<code>genFizzBuzz("+JSON.stringify(tests[0][0])+","+tests[0][1]+")</code> should return a type.");'
  - text: <code>genFizzBuzz(&quot;+JSON.stringify(tests[0][0])+&quot;,&quot;+tests[0][1]+&quot;)</code> debe devolver <code>&quot;&quot;+results[0]+&quot;&quot;</code> .
    testString: 'assert.equal(genFizzBuzz(tests[0][0],tests[0][1]),results[0],"<code>genFizzBuzz("+JSON.stringify(tests[0][0])+","+tests[0][1]+")</code> should return <code>""+results[0]+""</code>.");'
  - text: <code>genFizzBuzz(&quot;+JSON.stringify(tests[1][0])+&quot;,&quot;+tests[1][1]+&quot;)</code> debe devolver <code>&quot;&quot;+results[1]+&quot;&quot;</code> .
    testString: 'assert.equal(genFizzBuzz(tests[1][0],tests[1][1]),results[1],"<code>genFizzBuzz("+JSON.stringify(tests[1][0])+","+tests[1][1]+")</code> should return <code>""+results[1]+""</code>.");'
  - text: <code>genFizzBuzz(&quot;+JSON.stringify(tests[2][0])+&quot;,&quot;+tests[2][1]+&quot;)</code> debe devolver <code>&quot;&quot;+results[2]+&quot;&quot;</code> .
    testString: 'assert.equal(genFizzBuzz(tests[2][0],tests[2][1]),results[2],"<code>genFizzBuzz("+JSON.stringify(tests[2][0])+","+tests[2][1]+")</code> should return <code>""+results[2]+""</code>.");'
  - text: <code>genFizzBuzz(&quot;+JSON.stringify(tests[3][0])+&quot;,&quot;+tests[3][1]+&quot;)</code> debe devolver <code>&quot;&quot;+results[3]+&quot;&quot;</code> .
    testString: 'assert.equal(genFizzBuzz(tests[3][0],tests[3][1]),results[3],"<code>genFizzBuzz("+JSON.stringify(tests[3][0])+","+tests[3][1]+")</code> should return <code>""+results[3]+""</code>.");'
  - text: <code>genFizzBuzz(&quot;+JSON.stringify(tests[4][0])+&quot;,&quot;+tests[4][1]+&quot;)</code> debe devolver <code>&quot;&quot;+results[4]+&quot;&quot;</code> .
    testString: 'assert.equal(genFizzBuzz(tests[4][0],tests[4][1]),results[4],"<code>genFizzBuzz("+JSON.stringify(tests[4][0])+","+tests[4][1]+")</code> should return <code>""+results[4]+""</code>.");'
  - text: <code>genFizzBuzz(&quot;+JSON.stringify(tests[5][0])+&quot;,&quot;+tests[5][1]+&quot;)</code> debe devolver <code>&quot;&quot;+results[5]+&quot;&quot;</code> .
    testString: 'assert.equal(genFizzBuzz(tests[5][0],tests[5][1]),results[5],"<code>genFizzBuzz("+JSON.stringify(tests[5][0])+","+tests[5][1]+")</code> should return <code>""+results[5]+""</code>.");'
  - text: <code>genFizzBuzz(&quot;+JSON.stringify(tests[6][0])+&quot;,&quot;+tests[6][1]+&quot;)</code> debe devolver <code>&quot;&quot;+results[6]+&quot;&quot;</code> .
    testString: 'assert.equal(genFizzBuzz(tests[6][0],tests[6][1]),results[6],"<code>genFizzBuzz("+JSON.stringify(tests[6][0])+","+tests[6][1]+")</code> should return <code>""+results[6]+""</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function genFizzBuzz (rules, num) {
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
function genFizzBuzz(rules, num) {
  let res=";
  rules.forEach(function (e) {
    if(num % e[0] == 0)
      res+=e[1];
  })

  if(res=="){
    res=num.toString();
  }

  return res;
}




```

</section>

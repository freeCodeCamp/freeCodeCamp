---
title: General FizzBuzz
id: 5a23c84252665b21eecc7e78
challengeType: 5
videoUrl: ''
localeTitle: Geral FizzBuzz
---

## Description
<section id="description"> Escreva uma versão generalizada do <a href="http://rosettacode.org/wiki/FizzBuzz">FizzBuzz</a> que funcione para qualquer lista de fatores, junto com suas palavras. Esta é basicamente uma implementação &quot;fizzbuzz&quot; onde as regras do jogo são fornecidas ao usuário. Crie uma função para implementar isso. A função deve ter dois parâmetros. O primeiro será um array com as regras do FizzBuzz. Por exemplo: <code>[ [3,&quot;Fizz&quot;] , [5,&quot;Buzz&quot;] ]</code> . Isso indica que o <code>Fizz</code> deve ser impresso se o número for um múltiplo de 3 e o Google <code>Buzz</code> se for um múltiplo de 5. Se for um múltiplo de ambos, as sequências devem ser concatenadas na ordem especificada na matriz. Neste caso, <code>FizzBuzz</code> se o número é um múltiplo de 3 e 5. O segundo parâmetro é o número para o qual a função deve retornar uma string como indicado acima. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>genFizzBuzz</code> deve ser uma função.
    testString: 'assert(typeof genFizzBuzz=="function","<code>genFizzBuzz</code> should be a function.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[0][0])+&quot;,&quot;+tests[0][1]+&quot;)</code> deve retornar um tipo.'
    testString: 'assert(typeof genFizzBuzz(tests[0][0],tests[0][1])=="string","<code>genFizzBuzz("+JSON.stringify(tests[0][0])+","+tests[0][1]+")</code> should return a type.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[0][0])+&quot;,&quot;+tests[0][1]+&quot;)</code> deve retornar <code>&quot;&quot;+results[0]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[0][0],tests[0][1]),results[0],"<code>genFizzBuzz("+JSON.stringify(tests[0][0])+","+tests[0][1]+")</code> should return <code>""+results[0]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[1][0])+&quot;,&quot;+tests[1][1]+&quot;)</code> deve retornar <code>&quot;&quot;+results[1]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[1][0],tests[1][1]),results[1],"<code>genFizzBuzz("+JSON.stringify(tests[1][0])+","+tests[1][1]+")</code> should return <code>""+results[1]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[2][0])+&quot;,&quot;+tests[2][1]+&quot;)</code> deve retornar <code>&quot;&quot;+results[2]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[2][0],tests[2][1]),results[2],"<code>genFizzBuzz("+JSON.stringify(tests[2][0])+","+tests[2][1]+")</code> should return <code>""+results[2]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[3][0])+&quot;,&quot;+tests[3][1]+&quot;)</code> devem retornar <code>&quot;&quot;+results[3]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[3][0],tests[3][1]),results[3],"<code>genFizzBuzz("+JSON.stringify(tests[3][0])+","+tests[3][1]+")</code> should return <code>""+results[3]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[4][0])+&quot;,&quot;+tests[4][1]+&quot;)</code> deve retornar <code>&quot;&quot;+results[4]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[4][0],tests[4][1]),results[4],"<code>genFizzBuzz("+JSON.stringify(tests[4][0])+","+tests[4][1]+")</code> should return <code>""+results[4]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[5][0])+&quot;,&quot;+tests[5][1]+&quot;)</code> deve retornar <code>&quot;&quot;+results[5]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[5][0],tests[5][1]),results[5],"<code>genFizzBuzz("+JSON.stringify(tests[5][0])+","+tests[5][1]+")</code> should return <code>""+results[5]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[6][0])+&quot;,&quot;+tests[6][1]+&quot;)</code> deve retornar <code>&quot;&quot;+results[6]+&quot;&quot;</code> .'
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
// solution required
```
</section>

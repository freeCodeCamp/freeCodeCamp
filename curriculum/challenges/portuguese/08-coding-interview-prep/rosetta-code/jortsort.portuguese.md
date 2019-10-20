---
title: JortSort
id: 5a23c84252665b21eecc7ec4
challengeType: 5
videoUrl: ''
localeTitle: JortSort
---

## Description
<section id="description"> O jortSort é um conjunto de ferramentas de classificação que faz com que o usuário faça o trabalho e garanta a eficiência, porque você não precisa fazer a classificação novamente. Foi originalmente apresentado por Jenn &quot;Moneydollars&quot; Schiffer no prestigiado <a href="https://www.youtube.com/watch?v=pj4U_W0OFoE">JSConf</a> . jortSort é uma função que usa um único array de objetos comparáveis ​​como argumento. Em seguida, ele classifica a matriz em ordem crescente e compara a matriz classificada à matriz originalmente fornecida. Se as matrizes combinam (ou seja, a matriz original já foi classificada), a função retorna true. Se as matrizes não corresponderem (ou seja, a matriz original não foi classificada), a função retornará false. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>jortsort</code> deveria ser uma função.
    testString: 'assert(typeof jortsort=="function","<code>jortsort</code> should be a function.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[0])+&quot;)</code> deve retornar um booleano.'
    testString: 'assert(typeof jortsort(tests[0].slice())=="boolean","<code>jortsort("+JSON.stringify(tests[0])+")</code> should return a boolean.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[0])+&quot;)</code> deve retornar <code>true</code> .'
    testString: 'assert.equal(jortsort(tests[0].slice()),true,"<code>jortsort("+JSON.stringify(tests[0])+")</code> should return <code>true</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[1])+&quot;)</code> deve retornar <code>false</code> .'
    testString: 'assert.equal(jortsort(tests[1].slice()),false,"<code>jortsort("+JSON.stringify(tests[1])+")</code> should return <code>false</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[2])+&quot;)</code> deve retornar <code>false</code> .'
    testString: 'assert.equal(jortsort(tests[2].slice()),false,"<code>jortsort("+JSON.stringify(tests[2])+")</code> should return <code>false</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[3])+&quot;)</code> deve retornar <code>true</code> .'
    testString: 'assert.equal(jortsort(tests[3].slice()),true,"<code>jortsort("+JSON.stringify(tests[3])+")</code> should return <code>true</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[4])+&quot;)</code> deve retornar <code>false</code> .'
    testString: 'assert.equal(jortsort(tests[4].slice()),false,"<code>jortsort("+JSON.stringify(tests[4])+")</code> should return <code>false</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[5])+&quot;)</code> deve retornar <code>true</code> .'
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
// solution required
```
</section>

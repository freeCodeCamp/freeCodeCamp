---
id: 587d7b88367417b2b2512b47
title: Use the Rest Operator with Function Parameters
challengeType: 1
videoUrl: ''
localeTitle: Use o operador de descanso com parâmetros de função
---

## Description
<section id="description"> Para nos ajudar a criar funções mais flexíveis, o ES6 introduz o <dfn>operador de descanso</dfn> para parâmetros de função. Com o operador de descanso, você pode criar funções que levam um número variável de argumentos. Esses argumentos são armazenados em uma matriz que pode ser acessada posteriormente de dentro da função. Confira este código: <blockquote> function howMany (... args) { <br> return &quot;Você passou&quot; + args.length + &quot;arguments.&quot;; <br> } <br> console.log (howMany (0, 1, 2)); // Você passou 3 argumentos <br> console.log (howMany (&quot;string&quot;, nulo, [1, 2, 3], {})); // Você passou 4 argumentos. </blockquote> O operador de descanso elimina a necessidade de verificar a matriz <code>args</code> e nos permite aplicar <code>map()</code> , <code>filter()</code> e <code>reduce()</code> na matriz de parâmetros. </section>

## Instructions
<section id="instructions"> Modifique a <code>sum</code> da função para que ela use o operador rest e funcione da mesma maneira com qualquer número de parâmetros. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O resultado da <code>sum(0,1,2)</code> deve ser 3'
    testString: 'assert(sum(0,1,2) === 3, "The result of <code>sum(0,1,2)</code> should be 3");'
  - text: 'O resultado da <code>sum(1,2,3,4)</code> deve ser 10'
    testString: 'assert(sum(1,2,3,4) === 10, "The result of <code>sum(1,2,3,4)</code> should be 10");'
  - text: O resultado da <code>sum(5)</code> deve ser 5
    testString: 'assert(sum(5) === 5, "The result of <code>sum(5)</code> should be 5");'
  - text: O resultado de <code>sum()</code> deve ser 0
    testString: 'assert(sum() === 0, "The result of <code>sum()</code> should be 0");'
  - text: A função <code>sum</code> usa o operador <code>...</code> spread no parâmetro <code>args</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/function\s+sum\s*\(\s*...args\s*\)\s*{/g), "The <code>sum</code> function uses the <code>...</code> spread operator on the <code>args</code> parameter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

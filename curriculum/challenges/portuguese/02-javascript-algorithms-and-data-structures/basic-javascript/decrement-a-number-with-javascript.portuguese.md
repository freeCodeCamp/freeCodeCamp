---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Decrementar um número com JavaScript
---

## Description
<section id="description"> Você pode facilmente <dfn>decrementar</dfn> ou diminuir uma variável por um com o operador <code>--</code> . <code>i--;</code> é o equivalente de <code>i = i - 1;</code> <strong>Nota</strong> <br> A linha inteira se torna <code>i--;</code> , eliminando a necessidade do sinal de igual. </section>

## Instructions
<section id="instructions"> Altere o código para usar o operador <code>--</code> em <code>myVar</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code> deve ser igual a <code>10</code>
    testString: 'assert(myVar === 10, "<code>myVar</code> should equal <code>10</code>");'
  - text: <code>myVar = myVar - 1;</code> deve ser mudado
    testString: 'assert(/var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code), "<code>myVar = myVar - 1;</code> should be changed");'
  - text: Use o <code>--</code> operador em <code>myVar</code>
    testString: 'assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code), "Use the <code>--</code> operator on <code>myVar</code>");'
  - text: Não mude o código acima da linha
    testString: 'assert(/var myVar = 11;/.test(code), "Do not change code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;

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

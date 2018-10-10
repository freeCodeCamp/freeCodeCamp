---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
challengeType: 1
videoUrl: ''
localeTitle: Armazenando Valores com o Operador de Atribuição
---

## Description
<section id="description"> Em JavaScript, você pode armazenar um valor em uma variável com o operador de <dfn>atribuição</dfn> . <code>myVariable = 5;</code> Isso atribui o valor <code>Number</code> <code>5</code> a <code>myVariable</code> . A atribuição sempre vai da direita para a esquerda. Tudo à direita do operador <code>=</code> é resolvido antes que o valor seja atribuído à variável à esquerda do operador. <blockquote> myVar = 5; <br> myNum = myVar; </blockquote> Isso atribui <code>5</code> para <code>myVar</code> e, em seguida, resolve <code>myVar</code> para <code>5</code> novamente e atribui a <code>myNum</code> . </section>

## Instructions
<section id="instructions"> Atribua o valor <code>7</code> à variável <code>a</code> . Atribuir o conteúdo de <code>a</code> para variável <code>b</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Não mude o código acima da linha
    testString: 'assert(/var a;/.test(code) && /var b = 2;/.test(code), "Do not change code above the line");'
  - text: <code>a</code> deve ter um valor de 7
    testString: 'assert(typeof a === "number" && a === 7, "<code>a</code> should have a value of 7");'
  - text: <code>b</code> deve ter um valor de 7
    testString: 'assert(typeof b === "number" && b === 7, "<code>b</code> should have a value of 7");'
  - text: <code>a</code> deve ser atribuído a <code>b</code> com <code>=</code>
    testString: 'assert(/b\s*=\s*a\s*;/g.test(code), "<code>a</code> should be assigned to <code>b</code> with <code>=</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var a;
var b = 2;

// Only change code below this line

```

</div>

### Before Test
<div id='js-setup'>

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
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

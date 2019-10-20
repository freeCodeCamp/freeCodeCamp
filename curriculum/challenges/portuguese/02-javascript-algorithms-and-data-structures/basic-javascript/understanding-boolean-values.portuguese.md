---
id: bd7123c9c441eddfaeb5bdef
title: Understanding Boolean Values
challengeType: 1
videoUrl: ''
localeTitle: Compreensão dos valores booleanos
---

## Description
<section id="description"> Outro tipo de dados é o <dfn>booleano</dfn> . <code>Booleans</code> podem ser apenas um de dois valores: <code>true</code> ou <code>false</code> . Eles são basicamente pequenos comutadores on-off, em que <code>true</code> é &quot;on&quot; e <code>false</code> é &quot;off&quot;. Esses dois estados são mutuamente exclusivos. <strong>Nota</strong> <br> Valores <code>Boolean</code> nunca são escritos com aspas. As <code>strings</code> <code>&quot;true&quot;</code> e <code>&quot;false&quot;</code> não são <code>Boolean</code> e não têm significado especial em JavaScript. </section>

## Instructions
<section id="instructions"> Modifique a função <code>welcomeToBooleans</code> para que ela retorne <code>true</code> vez de <code>false</code> quando o botão de execução for clicado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A função <code>welcomeToBooleans()</code> deve retornar um valor booleano (verdadeiro / falso).
    testString: 'assert(typeof welcomeToBooleans() === "boolean", "The <code>welcomeToBooleans()</code> function should return a boolean &#40;true/false&#41; value.");'
  - text: <code>welcomeToBooleans()</code> deve retornar true.
    testString: 'assert(welcomeToBooleans() === true, "<code>welcomeToBooleans()</code> should return true.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function welcomeToBooleans() {

// Only change code below this line.

return false; // Change this line

// Only change code above this line.
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

---
id: bd7123c9c441eddfaeb5bdef
title: Understanding Boolean Values
localeTitle: Entendiendo los valores booleanos
challengeType: 1
---

## Description
<section id='description'>
Otro tipo de datos es el <dfn>booleano</dfn> . <code>Booleans</code> solo pueden ser uno de dos valores: <code>true</code> o <code>false</code> . Básicamente son pequeños interruptores de encendido y apagado, donde <code>true</code> está &quot;encendido&quot; y <code>false</code> está &quot;apagado&quot;. Estos dos estados son mutuamente excluyentes.
<strong>Nota</strong> <br> <code>Boolean</code> valores <code>Boolean</code> nunca se escriben entre comillas. Las <code>strings</code> <code>&quot;true&quot;</code> y <code>&quot;false&quot;</code> no son <code>Boolean</code> y no tienen un significado especial en JavaScript.
</section>

## Instructions
<section id='instructions'>
Modifique la función <code>welcomeToBooleans</code> para que devuelva <code>true</code> lugar de <code>false</code> cuando se haga clic en el botón Ejecutar.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'La función <code>welcomeToBooleans()</code> debería devolver un valor booleano (verdadero / falso).'
    testString: 'assert(typeof welcomeToBooleans() === "boolean", "The <code>welcomeToBooleans()</code> function should return a boolean &#40;true/false&#41; value.");'
  - text: <code>welcomeToBooleans()</code> debe devolver true.
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
function welcomeToBooleans() {
  return true; // Change this line
}
```

</section>

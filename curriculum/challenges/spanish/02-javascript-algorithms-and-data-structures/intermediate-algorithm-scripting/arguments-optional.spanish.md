---
id: a97fd23d9b809dac9921074f
title: Arguments Optional
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Argumentos Opcionales
---

## Description
<section id="description"> Crear una función que suma dos argumentos juntos. Si solo se proporciona un argumento, entonces devuelva una función que espere un argumento y devuelva la suma. Por ejemplo, <code>addTogether(2, 3)</code> debe devolver <code>5</code> y <code>addTogether(2)</code> debe devolver una función. Llamar a esta función devuelta con un solo argumento devolverá la suma: <code>var sumTwoAnd = addTogether(2);</code> <code>sumTwoAnd(3)</code> devuelve <code>5</code> . Si cualquiera de los argumentos no es un número válido, devuelva indefinido. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>addTogether(2, 3)</code> debe devolver 5.'
    testString: 'assert.deepEqual(addTogether(2, 3), 5, "<code>addTogether(2, 3)</code> should return 5.");'
  - text: <code>addTogether(2)(3)</code> debe devolver 5.
    testString: 'assert.deepEqual(addTogether(2)(3), 5, "<code>addTogether(2)(3)</code> should return 5.");'
  - text: '<code>addTogether(&quot;http://bit.ly/IqT6zt&quot;)</code> debe devolver undefined.'
    testString: 'assert.isUndefined(addTogether("http://bit.ly/IqT6zt"), "<code>addTogether("http://bit.ly/IqT6zt")</code> should return undefined.");'
  - text: '<code>addTogether(2, &quot;3&quot;)</code> debe devolver undefined.'
    testString: 'assert.isUndefined(addTogether(2, "3"), "<code>addTogether(2, "3")</code> should return undefined.");'
  - text: '<code>addTogether(2)([3])</code> debe devolver undefined.'
    testString: 'assert.isUndefined(addTogether(2)([3]), "<code>addTogether(2)([3])</code> should return undefined.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function addTogether() {
  return false;
}

addTogether(2,3);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

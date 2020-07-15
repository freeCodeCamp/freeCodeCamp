---
id: a97fd23d9b809dac9921074f
title: Arguments Optional
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Argumentos Opcional
---

## Description
<section id="description"> Crie uma função que some dois argumentos juntos. Se apenas um argumento for fornecido, retorne uma função que espera um argumento e retorne a soma. Por exemplo, <code>addTogether(2, 3)</code> deve retornar <code>5</code> e <code>addTogether(2)</code> deve retornar uma função. Chamar essa função retornada com um único argumento retornará a soma: <code>var sumTwoAnd = addTogether(2);</code> <code>sumTwoAnd(3)</code> retorna <code>5</code> . Se um dos argumentos não for um número válido, retorne indefinido. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>addTogether(2, 3)</code> deve retornar 5.'
    testString: 'assert.deepEqual(addTogether(2, 3), 5, "<code>addTogether(2, 3)</code> should return 5.");'
  - text: <code>addTogether(2)(3)</code> deve retornar 5.
    testString: 'assert.deepEqual(addTogether(2)(3), 5, "<code>addTogether(2)(3)</code> should return 5.");'
  - text: '<code>addTogether(&quot;http://bit.ly/IqT6zt&quot;)</code> deve retornar indefinido.'
    testString: 'assert.isUndefined(addTogether("http://bit.ly/IqT6zt"), "<code>addTogether("http://bit.ly/IqT6zt")</code> should return undefined.");'
  - text: '<code>addTogether(2, &quot;3&quot;)</code> deve retornar indefinido.'
    testString: 'assert.isUndefined(addTogether(2, "3"), "<code>addTogether(2, "3")</code> should return undefined.");'
  - text: '<code>addTogether(2)([3])</code> deve retornar indefinido.'
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

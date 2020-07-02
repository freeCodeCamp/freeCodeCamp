---
id: a10d2431ad0c6a099a4b8b52
title: Everything Be True
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Tudo ser verdadeiro
---

## Description
<section id="description"> Verifique se o predicado (segundo argumento) é <dfn>válido</dfn> em todos os elementos de uma coleção (primeiro argumento). Em outras palavras, você recebe uma coleção de objetos. O predicado <code>pre</code> será uma propriedade do objeto e você precisa retornar <code>true</code> se o seu valor é <code>truthy</code> . Caso contrário, retorne <code>false</code> . Em JavaScript, <code>truthy</code> valores são valores que traduzem a <code>true</code> quando avaliada em um contexto booleano. Lembre-se, você pode acessar as propriedades do objeto através da notação de ponto ou da notação <code>[]</code> . Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Dipsy&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;}], &quot;sex&quot;)</code> devem retornar true.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), true, "<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code> should return true.");'
  - text: '<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Dipsy&quot;}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;}], &quot;sex&quot;)</code> devem retornar false.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), false, "<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code> should return false.");'
  - text: '<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;, &quot;age&quot;: 0}, {&quot;user&quot;: &quot;Dipsy&quot;, &quot;sex&quot;: &quot;male&quot;, &quot;age&quot;: 3}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;, &quot;age&quot;: 5}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;, &quot;age&quot;: 4}], &quot;age&quot;)</code> deve retornar false.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 2}, {"user": "Dipsy", "sex": "male", "age": 0}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"), false, "<code>truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")</code> should return false.");'
  - text: '<code>truthCheck([{&quot;name&quot;: &quot;Pete&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;Repeat&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;FastFoward&quot;, &quot;onBoat&quot;: null}], &quot;onBoat&quot;)</code> deve retornar false'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"), false, "<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")</code> should return false");'
  - text: '<code>truthCheck([{&quot;name&quot;: &quot;Pete&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;Repeat&quot;, &quot;onBoat&quot;: true, &quot;alias&quot;: &quot;Repete&quot;}, {&quot;name&quot;: &quot;FastFoward&quot;, &quot;onBoat&quot;: true}], &quot;onBoat&quot;)</code> deve retornar true'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"), true, "<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")</code> should return true");'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;yes&quot;}], &quot;single&quot;)</code> deve retornar true'
    testString: 'assert.strictEqual(truthCheck([{"single": "yes"}], "single"), true, "<code>truthCheck([{"single": "yes"}], "single")</code> should return true");'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;&quot;}, {&quot;single&quot;: &quot;double&quot;}], &quot;single&quot;)</code> deve retornar false'
    testString: 'assert.strictEqual(truthCheck([{"single": ""}, {"single": "double"}], "single"), false, "<code>truthCheck([{"single": ""}, {"single": "double"}], "single")</code> should return false");'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;double&quot;}, {&quot;single&quot;: undefined}], &quot;single&quot;)</code> deve retornar false'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": undefined}], "single"), false, "<code>truthCheck([{"single": "double"}, {"single": undefined}], "single")</code> should return false");'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;double&quot;}, {&quot;single&quot;: NaN}], &quot;single&quot;)</code> deve retornar false'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": NaN}], "single"), false, "<code>truthCheck([{"single": "double"}, {"single": NaN}], "single")</code> should return false");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function truthCheck(collection, pre) {
  // Is everyone being true?
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

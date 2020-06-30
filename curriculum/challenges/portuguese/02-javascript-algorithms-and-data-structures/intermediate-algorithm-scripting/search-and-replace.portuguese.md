---
id: a0b5010f579e69b815e7c5d6
title: Search and Replace
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Pesquisar e substituir
---

## Description
<section id="description"> Realize uma busca e substitua a frase usando os argumentos fornecidos e retorne a nova sentença. Primeiro argumento é a sentença para realizar a pesquisa e substituir. Segundo argumento é a palavra que você estará substituindo (antes). Terceiro argumento é o que você estará substituindo o segundo argumento com (depois). <strong>Nota</strong> <br> Preserve o caso do primeiro caractere na palavra original quando for substituí-lo. Por exemplo, se você pretende substituir a palavra &quot;Livro&quot; pela palavra &quot;cachorro&quot;, ele deve ser substituído por &quot;Cão&quot;. Lembre-se de usar a opção <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Ler-pesquisar-perguntar</a> se ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myReplace(&quot;Let us go to the store&quot;, &quot;store&quot;, &quot;mall&quot;)</code> deve retornar &quot;Vamos ao shopping&quot;.'
    testString: 'assert.deepEqual(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall", "<code>myReplace("Let us go to the store", "store", "mall")</code> should return "Let us go to the mall".");'
  - text: '<code>myReplace(&quot;He is Sleeping on the couch&quot;, &quot;Sleeping&quot;, &quot;sitting&quot;)</code> deve retornar &quot;Ele está sentado no sofá&quot;.'
    testString: 'assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch", "<code>myReplace("He is Sleeping on the couch", "Sleeping", "sitting")</code> should return "He is Sitting on the couch".");'
  - text: '<code>myReplace(&quot;This has a spellngi error&quot;, &quot;spellngi&quot;, &quot;spelling&quot;)</code> deve retornar &quot;Isso tem um erro de ortografia&quot;.'
    testString: 'assert.deepEqual(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error", "<code>myReplace("This has a spellngi error", "spellngi", "spelling")</code> should return "This has a spelling error".");'
  - text: '<code>myReplace(&quot;His name is Tom&quot;, &quot;Tom&quot;, &quot;john&quot;)</code> deve retornar &quot;O nome dele é John&quot;.'
    testString: 'assert.deepEqual(myReplace("His name is Tom", "Tom", "john"), "His name is John", "<code>myReplace("His name is Tom", "Tom", "john")</code> should return "His name is John".");'
  - text: '<code>myReplace(&quot;Let us get back to more Coding&quot;, &quot;Coding&quot;, &quot;algorithms&quot;)</code> deve retornar &quot;Vamos voltar para mais Algoritmos&quot;.'
    testString: 'assert.deepEqual(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms", "<code>myReplace("Let us get back to more Coding", "Coding", "algorithms")</code> should return "Let us get back to more Algorithms".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

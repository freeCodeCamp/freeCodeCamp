---
id: a7bf700cd123b9a54eef01d5
title: No Repeats Please
challengeType: 5
videoUrl: ''
localeTitle: Não repete por favor
---

## Description
<section id="description"> Retorne o número total de permutações da string fornecida que não possui letras consecutivas repetidas. Suponha que todos os caracteres na string fornecida sejam únicos. Por exemplo, <code>aab</code> deve retornar 2 porque tem 6 permutações totais ( <code>aab</code> , <code>aab</code> , <code>aba</code> , <code>aba</code> , <code>baa</code> , <code>baa</code> ), mas apenas 2 delas ( <code>aba</code> e <code>aba</code> ) não têm a mesma letra (neste caso <code>a</code> ) repetida. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente fazer pair programming. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>permAlone(&quot;aab&quot;)</code> deve retornar um número.
    testString: 'assert.isNumber(permAlone("aab"), "<code>permAlone("aab")</code> should return a number.");'
  - text: <code>permAlone(&quot;aab&quot;)</code> deve retornar 2.
    testString: 'assert.strictEqual(permAlone("aab"), 2, "<code>permAlone("aab")</code> should return 2.");'
  - text: <code>permAlone(&quot;aaa&quot;)</code> deve retornar 0.
    testString: 'assert.strictEqual(permAlone("aaa"), 0, "<code>permAlone("aaa")</code> should return 0.");'
  - text: <code>permAlone(&quot;aabb&quot;)</code> deve retornar 8.
    testString: 'assert.strictEqual(permAlone("aabb"), 8, "<code>permAlone("aabb")</code> should return 8.");'
  - text: <code>permAlone(&quot;abcdefa&quot;)</code> deve retornar 3600.
    testString: 'assert.strictEqual(permAlone("abcdefa"), 3600, "<code>permAlone("abcdefa")</code> should return 3600.");'
  - text: <code>permAlone(&quot;abfdefa&quot;)</code> deve retornar 2640.
    testString: 'assert.strictEqual(permAlone("abfdefa"), 2640, "<code>permAlone("abfdefa")</code> should return 2640.");'
  - text: <code>permAlone(&quot;zzzzzzzz&quot;)</code> deve retornar 0.
    testString: 'assert.strictEqual(permAlone("zzzzzzzz"), 0, "<code>permAlone("zzzzzzzz")</code> should return 0.");'
  - text: <code>permAlone(&quot;a&quot;)</code> deve retornar 1.
    testString: 'assert.strictEqual(permAlone("a"), 1, "<code>permAlone("a")</code> should return 1.");'
  - text: <code>permAlone(&quot;aaab&quot;)</code> deve retornar 0.
    testString: 'assert.strictEqual(permAlone("aaab"), 0, "<code>permAlone("aaab")</code> should return 0.");'
  - text: <code>permAlone(&quot;aaabb&quot;)</code> deve retornar 12.
    testString: 'assert.strictEqual(permAlone("aaabb"), 12, "<code>permAlone("aaabb")</code> should return 12.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function permAlone(str) {
  return str;
}

permAlone('aab');

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

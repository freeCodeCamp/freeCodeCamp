---
id: a7bf700cd123b9a54eef01d5
title: No Repeats Please
challengeType: 5
videoUrl: ''
localeTitle: No se repite por favor
---

## Description
<section id="description"> Devuelve el número de permutaciones totales de la cadena proporcionada que no tienen letras consecutivas repetidas. Supongamos que todos los caracteres de la cadena proporcionada son únicos. Por ejemplo, <code>aab</code> debe devolver 2 porque tiene 6 permutaciones totales ( <code>aab</code> , <code>aab</code> , <code>aba</code> , <code>aba</code> , <code>baa</code> , <code>baa</code> ), pero solo 2 de ellas ( <code>aba</code> y <code>aba</code> ) no tienen la misma letra (en este caso <code>a</code> ) repitiendo Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de hacer programación en pareja. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>permAlone(&quot;aab&quot;)</code> debe devolver un número.
    testString: 'assert.isNumber(permAlone("aab"), "<code>permAlone("aab")</code> should return a number.");'
  - text: <code>permAlone(&quot;aab&quot;)</code> debe devolver 2.
    testString: 'assert.strictEqual(permAlone("aab"), 2, "<code>permAlone("aab")</code> should return 2.");'
  - text: <code>permAlone(&quot;aaa&quot;)</code> debe devolver 0.
    testString: 'assert.strictEqual(permAlone("aaa"), 0, "<code>permAlone("aaa")</code> should return 0.");'
  - text: <code>permAlone(&quot;aabb&quot;)</code> debe devolver 8.
    testString: 'assert.strictEqual(permAlone("aabb"), 8, "<code>permAlone("aabb")</code> should return 8.");'
  - text: <code>permAlone(&quot;abcdefa&quot;)</code> debe devolver 3600.
    testString: 'assert.strictEqual(permAlone("abcdefa"), 3600, "<code>permAlone("abcdefa")</code> should return 3600.");'
  - text: <code>permAlone(&quot;abfdefa&quot;)</code> debe devolver 2640.
    testString: 'assert.strictEqual(permAlone("abfdefa"), 2640, "<code>permAlone("abfdefa")</code> should return 2640.");'
  - text: <code>permAlone(&quot;zzzzzzzz&quot;)</code> debe devolver 0.
    testString: 'assert.strictEqual(permAlone("zzzzzzzz"), 0, "<code>permAlone("zzzzzzzz")</code> should return 0.");'
  - text: <code>permAlone(&quot;a&quot;)</code> debe devolver 1.
    testString: 'assert.strictEqual(permAlone("a"), 1, "<code>permAlone("a")</code> should return 1.");'
  - text: <code>permAlone(&quot;aaab&quot;)</code> debe devolver 0.
    testString: 'assert.strictEqual(permAlone("aaab"), 0, "<code>permAlone("aaab")</code> should return 0.");'
  - text: <code>permAlone(&quot;aaabb&quot;)</code> debe devolver 12.
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

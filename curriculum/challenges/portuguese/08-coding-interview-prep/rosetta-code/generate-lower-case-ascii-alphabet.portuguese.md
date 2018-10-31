---
title: Generate lower case ASCII alphabet
id: 5a23c84252665b21eecc7e7a
challengeType: 5
videoUrl: ''
localeTitle: Gerar alfabeto ASCII de letras minúsculas
---

## Description
<section id="description"> Escreva uma função para gerar uma matriz de caracteres ASCII em minúsculas, para um determinado intervalo. Por exemplo: para o intervalo de 1 a 4, a função deve retornar <code>[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;]</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lascii</code> deve ser uma função.
    testString: 'assert(typeof lascii=="function","<code>lascii</code> should be a function.");'
  - text: '<code>lascii(&quot;a&quot;,&quot;d&quot;)</code> deve retornar um array.'
    testString: 'assert(Array.isArray(lascii("a","d")),"<code>lascii("a","d")</code> should return an array.");'
  - text: '&quot; <code>lascii(&quot;a&quot;,&quot;d&quot;)</code> deve retornar <code>[ &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot; ]</code> .&quot;'
    testString: 'assert.deepEqual(lascii("a","d"),results[0],"<code>lascii("a","d")</code> should return <code>[ "a", "b", "c", "d" ]</code>.");'
  - text: '&quot; <code>lascii(&quot;c&quot;,&quot;i&quot;)</code> deve retornar <code>[ &quot;c&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;, &quot;g&quot;, &quot;h&quot;, &quot;i&quot; ]</code> .&quot;'
    testString: 'assert.deepEqual(lascii("c","i"),results[1],"<code>lascii("c","i")</code> should return <code>[ "c", "d", "e", "f", "g", "h", "i" ]</code>.");'
  - text: '&quot; <code>lascii(&quot;m&quot;,&quot;q&quot;)</code> deve retornar <code>[ &quot;m&quot;, &quot;n&quot;, &quot;o&quot;, &quot;p&quot;, &quot;q&quot; ]</code> .&quot;'
    testString: 'assert.deepEqual(lascii("m","q"),results[2],"<code>lascii("m","q")</code> should return <code>[ "m", "n", "o", "p", "q" ]</code>.");'
  - text: '&quot; <code>lascii(&quot;k&quot;,&quot;n&quot;)</code> deve retornar <code>[ &quot;k&quot;, &quot;l&quot;, &quot;m&quot;, &quot;n&quot; ]</code> .&quot;)'
    testString: 'assert.deepEqual(lascii("k","n"),results[3],"<code>lascii("k","n")</code> should return <code>[ "k", "l", "m", "n" ]</code>.");'
  - text: '&quot; <code>lascii(&quot;t&quot;,&quot;z&quot;)</code> deve retornar <code>[ &quot;t&quot;, &quot;u&quot;, &quot;v&quot;, &quot;w&quot;, &quot;x&quot;, &quot;y&quot;, &quot;z&quot; ]</code> .&quot;'
    testString: 'assert.deepEqual(lascii("t","z"),results[4],"<code>lascii("t","z")</code> should return <code>[ "t", "u", "v", "w", "x", "y", "z" ]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function lascii (cFrom, cTo) {
  // Good luck!
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

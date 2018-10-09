---
title: Generate lower case ASCII alphabet
id: 5a23c84252665b21eecc7e7a
localeTitle: 5a23c84252665b21eecc7e7a
challengeType: 5
---

## Description
<section id='description'>
Escriba una función para generar una matriz de caracteres ASCII en minúsculas, para un rango determinado. Por ejemplo: para el rango 1 a 4, la función debe devolver <code>[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;]</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lascii</code> debería ser una función.
    testString: 'assert(typeof lascii=="function","<code>lascii</code> should be a function.");'
  - text: <code>lascii(&quot;a&quot;,&quot;d&quot;)</code> debe devolver una matriz.
    testString: 'assert(Array.isArray(lascii("a","d")),"<code>lascii("a","d")</code> should return an array.");'
  - text: '&quot; <code>lascii(&quot;a&quot;,&quot;d&quot;)</code> debe devolver <code>[ &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot; ]</code> .&quot;'
    testString: 'assert.deepEqual(lascii("a","d"),results[0],"<code>lascii("a","d")</code> should return <code>[ "a", "b", "c", "d" ]</code>.");'
  - text: '&quot; <code>lascii(&quot;c&quot;,&quot;i&quot;)</code> debe devolver <code>[ &quot;c&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;, &quot;g&quot;, &quot;h&quot;, &quot;i&quot; ]</code> .&quot;'
    testString: 'assert.deepEqual(lascii("c","i"),results[1],"<code>lascii("c","i")</code> should return <code>[ "c", "d", "e", "f", "g", "h", "i" ]</code>.");'
  - text: '&quot; <code>lascii(&quot;m&quot;,&quot;q&quot;)</code> debe devolver <code>[ &quot;m&quot;, &quot;n&quot;, &quot;o&quot;, &quot;p&quot;, &quot;q&quot; ]</code> .&quot;'
    testString: 'assert.deepEqual(lascii("m","q"),results[2],"<code>lascii("m","q")</code> should return <code>[ "m", "n", "o", "p", "q" ]</code>.");'
  - text: '&quot; <code>lascii(&quot;k&quot;,&quot;n&quot;)</code> debe devolver <code>[ &quot;k&quot;, &quot;l&quot;, &quot;m&quot;, &quot;n&quot; ]</code> .&quot;)'
    testString: 'assert.deepEqual(lascii("k","n"),results[3],"<code>lascii("k","n")</code> should return <code>[ "k", "l", "m", "n" ]</code>.");'
  - text: '&quot; <code>lascii(&quot;t&quot;,&quot;z&quot;)</code> debe devolver <code>[ &quot;t&quot;, &quot;u&quot;, &quot;v&quot;, &quot;w&quot;, &quot;x&quot;, &quot;y&quot;, &quot;z&quot; ]</code> .&quot;'
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
function lascii(cFrom, cTo) {

  function cRange(cFrom, cTo) {
    var iStart = cFrom.charCodeAt(0);

    return Array.apply(
      null, Array(cTo.charCodeAt(0) - iStart + 1)
    ).map(function (_, i) {

      return String.fromCharCode(iStart + i);

    });
  }

  return cRange(cFrom, cTo);

}

```

</section>

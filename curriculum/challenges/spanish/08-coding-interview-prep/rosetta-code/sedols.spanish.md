---
title: SEDOLs
id: 59d9c6bc214c613ba73ff012
challengeType: 5
videoUrl: ''
localeTitle: SEDOLs
---

## Description
<section id="description"> Tarea: <p> Para cada lista de números de <a href="https://en.wikipedia.org/wiki/SEDOL" title="wp: SEDOL">SEDOL</a> de 6 dígitos, calcule y agregue el dígito de suma de comprobación. </p><p> Es decir, dada la cadena de entrada a la izquierda, su función debe devolver la cadena correspondiente a la derecha: </p><pre> <code>&lt;pre&gt; 710889 =&gt; 7108899 B0YBKJ =&gt; B0YBKJ7 406566 =&gt; 4065663 B0YBLH =&gt; B0YBLH2 228276 =&gt; 2282765 B0YBKL =&gt; B0YBKL9 557910 =&gt; 5579107 B0YBKR =&gt; B0YBKR5 585284 =&gt; 5852842 B0YBKT =&gt; B0YBKT7 B00030 =&gt; B000300 &lt;/pre&gt;</code> </pre><p> Verifique también que cada entrada esté formada correctamente, especialmente con respecto a los caracteres válidos permitidos en una cadena SEDOL. Su función debe devolver <code>null</code> en la entrada no válida. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sedol</code> es una función.
    testString: 'assert(typeof sedol === "function", "<code>sedol</code> is a function.");'
  - text: '<code>sedol(&#39;a&#39;)</code> debe devolver nulo &quot;.'
    testString: 'assert(sedol("a") === null, "<code>sedol("a")</code> should return null.");'
  - text: '<code>sedol(&#39;710889&#39;)</code> debe devolver &#39;7108899&#39;. &quot;)'
    testString: 'assert(sedol("710889") === "7108899", "<code>sedol("710889")</code> should return "7108899".");'
  - text: '<code>sedol(&#39;BOATER&#39;)</code> debe devolver nulo &quot;.'
    testString: 'assert(sedol("BOATER") === null, "<code>sedol("BOATER")</code> should return null.");'
  - text: '<code>sedol(&#39;228276&#39;)</code> debe devolver &#39;2282765&#39;. &quot;)'
    testString: 'assert(sedol("228276") === "2282765", "<code>sedol("228276")</code> should return "2282765".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sedol (input) {
  // Good luck!
  return true;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

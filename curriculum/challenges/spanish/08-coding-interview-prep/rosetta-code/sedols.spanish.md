---
title: SEDOLs
id: 59d9c6bc214c613ba73ff012
localeTitle: 59d9c6bc214c613ba73ff012
challengeType: 5
---

## Description
<section id='description'> 
Tarea: 

<p> 
Para cada lista de número de 6 dígitos 
<a href="https://en.wikipedia.org/wiki/SEDOL" title="wp: SEDOL">SEDOL</a> s, 
calcular y añadir el dígito de suma de comprobación. 
</p> 

<p> 
Es decir, dada la cadena de entrada a la izquierda, su función debe devolver el 
cadena correspondiente a la derecha: 
</p> 

<pre> 
710.889 =&gt; 7108899 
B0YBKJ =&gt; B0YBKJ7 
406 566 =&gt; 4065663 
B0YBLH =&gt; B0YBLH2 
228 276 =&gt; 2282765 
B0YBKL =&gt; B0YBKL9 
557 910 =&gt; 5579107 
B0YBKR =&gt; B0YBKR5 
585 284 =&gt; 5852842 
B0YBKT =&gt; B0YBKT7 
B00030 =&gt; B000300 
</pre> 

<p> 
Compruebe también que cada entrada esté formada correctamente, especialmente 
con respecto a los caracteres válidos permitidos en una cadena SEDOL. Su función 
debería devolver <code>null</code> en una entrada no válida. 
</p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sedol</code> es una función.
    testString: 'assert(typeof sedol === "function", "<code>sedol</code> is a function.");'
  - text: <code>sedol(&#39;a&#39;)</code> debe devolver nulo &quot;.
    testString: 'assert(sedol("a") === null, "<code>sedol("a")</code> should return null.");'
  - text: <code>sedol(&#39;710889&#39;)</code> debe devolver &#39;7108899&#39;. &quot;)
    testString: 'assert(sedol("710889") === "7108899", "<code>sedol("710889")</code> should return "7108899".");'
  - text: <code>sedol(&#39;BOATER&#39;)</code> debe devolver nulo &quot;.
    testString: 'assert(sedol("BOATER") === null, "<code>sedol("BOATER")</code> should return null.");'
  - text: <code>sedol(&#39;228276&#39;)</code> debe devolver &#39;2282765&#39;. &quot;)
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
function sedol(input) {
  const checkDigit = sedolCheckDigit(input);
  if (checkDigit !== null) {
    return input + checkDigit;
  }
  return null;
}

const weight = [1, 3, 1, 7, 3, 9, 1];
function sedolCheckDigit(char6) {
  if (char6.search(/^[0-9BCDFGHJKLMNPQRSTVWXYZ]{6}$/) === -1) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < char6.length; i++) {
    sum += weight[i] * parseInt(char6.charAt(i), 36);
  }
  const check = (10 - (sum % 10)) % 10;
  return check.toString();
}

```

</section>

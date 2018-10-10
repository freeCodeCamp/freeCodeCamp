---
title: S-Expressions
id: 59667989bf71cf555dd5d2ff
localeTitle: 59667989bf71cf555dd5d2ff
challengeType: 5
---

## Description
<section id='description'>
<p>
<a href="https://en.wikipedia.org/wiki/S-Expression" title="wp: S-Expresión">S-Expressions</a> son una forma conveniente de analizar y almacenar datos.
</p>
Tarea:
<p>
Escriba un lector / analizador simple para S-Expressions que maneje cadenas, enteros y flotantes entre comillas y sin comillas.
</p>
<p>
La función debe leer una expresión-S única pero anidada de una cadena y
devolverla como una matriz (anidada).
</p>
<p>
líneas nuevas y otros espacios en blanco pueden ignorarse a menos que estén dentro de una cadena entre comillas.
</p>
<p> “ <tt>()</tt> ” Dentro de las cadenas entre comillas no se interpretan, sino que se tratan como parte de la cadena.
</p>
<p>
manejo de citas escapadas dentro de una cadena es opcional; por lo tanto, &quot; <tt>(foo&quot; barra)</tt> &quot;puede tratarse como una cadena&quot; <tt>foo &quot;barra</tt> &quot;, o como un error.
</p>
<p>
Para esto, el lector no necesita reconocer &quot; <tt>\</tt> &quot; por escapar, sino que, además, debe reconocer los números si el idioma tiene los tipos de datos apropiados.
</p>
<p>
Tenga en cuenta que con la excepción de &quot; <tt>()&quot;</tt> &quot;(&quot; <tt>\</tt> &quot;si se admite el escape) y espacios en blanco no hay caracteres especiales. Se permite cualquier otra cosa sin comillas.
</p>
<p> El lector debe poder leer la siguiente entrada </p>
<p>
<pre>
((datos &quot;datos citados&quot; 123 4.5)
(datos (! @ # (4.5) &quot;(más&quot; &quot;datos)&quot;)))
</pre>
</p>
<p>
y convertirlo en una estructura de datos nativa. (vea las implementaciones de
<a href="http://rosettacode.org/wiki/#Pike" title="#Lucio">Pike</a> ,
<a href="http://rosettacode.org/wiki/#Python" title="#Pitón">Python</a> y
<a href="http://rosettacode.org/wiki/#Ruby" title="#Rubí">Ruby</a>
para ver ejemplos de estructuras de datos nativas).
</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>parseSexpr</code> es una función.
    testString: 'assert(typeof parseSexpr === "function", "<code>parseSexpr</code> is a function.");'
  - text: ' <code>parseSexpr(&quot;(data1 data2 data3)&quot;)</code> debe devolver [&quot;data1&quot;, &quot;data2&quot;, &quot;data3&quot;] &quot;)'
    testString: 'assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution, "<code>parseSexpr("(data1 data2 data3)")</code> should return ["data1", "data2", "data3"]");'
  - text: <code>parseSexpr(&#39;(data1 data2 data3)&#39;)</code> debe devolver una matriz con 3 elementos &quot;)
    testString: 'assert.deepEqual(parseSexpr(basicSExpr), basicSolution, "<code>parseSexpr("(data1 data2 data3)")</code> should return an array with 3 elements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function parseSexpr(str) {
  // Good luck!
  return true;
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
function parseSexpr(str) {
  const t = str.match(/\s*("[^"]*"|\(|\)|"|[^\s()"]+)/g);
  for (var o, c = 0, i = t.length - 1; i >= 0; i--) {
    var n,
      ti = t[i].trim();
    if (ti == '"') return;
    else if (ti == '(') t[i] = '[', c += 1;
    else if (ti == ')') t[i] = ']', c -= 1;
    else if ((n = +ti) == ti) t[i] = n;
    else t[i] = `'${ti.replace('\", '\\\")}'`;
    if (i > 0 && ti != ']' && t[i - 1].trim() != '(') t.splice(i, 0, ',');
    if (!c) if (!o) o = true; else return;
  }
  return c ? undefined : eval(t.join(''));
}

```

</section>

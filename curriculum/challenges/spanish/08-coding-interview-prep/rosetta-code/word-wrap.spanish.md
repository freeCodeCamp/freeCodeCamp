---
title: Word wrap
id: 594810f028c0303b75339ad4
localeTitle: 594810f028c0303b75339ad4
challengeType: 5
---

## Description
<section id='description'> 
<p> 
Incluso hoy en día, con fuentes proporcionales y diseños complejos, todavía hay 
casos en los que necesita ajustar el texto en una columna 
específica. La tarea básica es envolver un párrafo de texto de una manera simple. 
Ejemplo de texto: 
</p> 
<pre> 
Ajuste el texto con un algoritmo más sofisticado, como el algoritmo Knuth y Plass TeX. 
Si su idioma lo proporciona, obtiene un crédito adicional fácil, 
pero &quot;debe consultar la documentación&quot; que indica que el algoritmo 
es algo mejor que un simple algoritmo de longitud mínima. 
</pre> 
<p> 
Tarea: 

Escriba una función que pueda ajustar este texto a cualquier número de caracteres. 

A modo de ejemplo, el texto ajustado a 80 caracteres debe tener el siguiente aspecto: 
</p> 
<pre> 
Envuelva el texto con un algoritmo más sofisticado, como el algoritmo Knuth y Plass TeX 
. Si su lenguaje proporciona esto, usted consigue el crédito fácil extra, pero que 
debe hacer referencia a la documentación que indica que el algoritmo es algo mejor 
que un simple algoritmo de longitud minimimum. 
</pre> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: envolver debe ser una función
    testString: 'assert.equal(typeof wrap, "function", "wrap must be a function.");'
  - text: wrap debe devolver una cadena.
    testString: 'assert.equal(typeof wrap("abc", 10), "string", "wrap must return a string.");'
  - text: envolver (80) debe devolver 4 líneas.
    testString: 'assert(wrapped80.split("\n").length === 4, "wrap(80) must return 4 lines.");'
  - text: Su función <code class = "notranslate"> wrap </code> debe devolver el texto esperado
    testString: 'assert.equal(wrapped80.split("\n")[0], firstRow80, "Your <code>wrap</code> function should return our expected text");'
  - text: envolver (42) debe devolver 7 líneas.
    testString: 'assert(wrapped42.split("\n").length === 7, "wrap(42) must return 7 lines.");'
  - text: Su función <code class = "notranslate"> wrap </code> debe devolver el texto esperado
    testString: 'assert.equal(wrapped42.split("\n")[0], firstRow42, "Your <code>wrap</code> function should return our expected text");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wrap (text, limit) {
  return text;
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
function wrap (text, limit) {
  const noNewlines = text.replace('\n', ");
  if (noNewlines.length > limit) {
    // find the last space within limit
    const edge = noNewlines.slice(0, limit).lastIndexOf(' ');
    if (edge > 0) {
      const line = noNewlines.slice(0, edge);
      const remainder = noNewlines.slice(edge + 1);
      return line + '\n' + wrap(remainder, limit);
    }
  }
  return text;
}

```

</section>

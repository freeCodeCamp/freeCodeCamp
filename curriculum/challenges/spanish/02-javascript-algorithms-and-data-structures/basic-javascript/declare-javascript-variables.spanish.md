---
id: bd7123c9c443eddfaeb5bdef
title: Declare JavaScript Variables
localeTitle: Declarar las variables de JavaScript
challengeType: 1
---

## Description
<section id='description'> 
En informática, los <dfn>datos</dfn> son cualquier cosa que sea significativa para la computadora. JavaScript proporciona siete <dfn>tipos de datos diferentes</dfn> que son <code>undefined</code> , <code>null</code> , <code>boolean</code> , <code>string</code> , <code>symbol</code> , <code>number</code> y <code>object</code> . 
Por ejemplo, las computadoras distinguen entre los números, como el número <code>12</code> , y las <code>strings</code> , como <code>&quot;12&quot;</code> , <code>&quot;dog&quot;</code> o <code>&quot;123 cats&quot;</code> , que son colecciones de caracteres. Las computadoras pueden realizar operaciones matemáticas en un número, pero no en una cadena. 
<dfn>Las variables</dfn> permiten que las computadoras almacenen y manipulen datos de una manera dinámica. Hacen esto usando una &quot;etiqueta&quot; para señalar los datos en lugar de usar los datos en sí. Cualquiera de los siete tipos de datos puede almacenarse en una variable. 
<code>Variables</code> son similares a las variables x e y que usa en matemáticas, lo que significa que son un nombre simple para representar los datos a los que queremos referirnos. Las <code>variables</code> computadora difieren de las variables matemáticas en que pueden almacenar diferentes valores en diferentes momentos. 
Le pedimos a JavaScript que cree o <dfn>declare</dfn> una variable poniendo la palabra clave <code>var</code> delante de ella, así: 
<blockquote>var ourName;</blockquote> 
crea una <code>variable</code> llamada <code>ourName</code> . En JavaScript terminamos las frases con punto y coma. 
<code>Variable</code> nombres de las <code>Variable</code> pueden estar formados por números, letras y <code>$</code> o <code>_</code> , pero no pueden contener espacios ni comenzar con un número. 
</section>

## Instructions
<section id='instructions'> 
Use la palabra clave <code>var</code> para crear una variable llamada <code>myName</code> . 
<strong>Pista</strong> <br> Mira el ejemplo de <code>ourName</code> si te quedas atascado. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;Debes declarar <code>myName</code> con la palabra clave <code>var</code> , que termina con un punto y coma&#39;
    testString: 'assert(/var\s+myName\s*;/.test(code), "You should declare <code>myName</code> with the <code>var</code> keyword, ending with a semicolon");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName;

// Declare myName below this line

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
var myName;
```

</section>

---
id: a0b5010f579e69b815e7c5d6
title: Search and Replace
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Buscar y reemplazar
---

## Description
<section id="description"> Realice una búsqueda y reemplace la oración utilizando los argumentos proporcionados y devuelva la nueva oración. El primer argumento es la oración para realizar la búsqueda y reemplazar. El segundo argumento es la palabra que reemplazará (antes). El tercer argumento es con lo que reemplazará el segundo argumento con (después). <strong>Nota</strong> <br> Conserve el caso del primer carácter en la palabra original cuando lo reemplace. Por ejemplo, si quiere reemplazar la palabra &quot;Libro&quot; con la palabra &quot;perro&quot;, debe ser reemplazada como &quot;Perro&quot; Recuerde usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Lectura-Búsqueda-Preguntar</a> si se atasca. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myReplace(&quot;Let us go to the store&quot;, &quot;store&quot;, &quot;mall&quot;)</code> debe devolver &quot;Vamos <code>myReplace(&quot;Let us go to the store&quot;, &quot;store&quot;, &quot;mall&quot;)</code> &quot;.'
    testString: 'assert.deepEqual(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall", "<code>myReplace("Let us go to the store", "store", "mall")</code> should return "Let us go to the mall".");'
  - text: '<code>myReplace(&quot;He is Sleeping on the couch&quot;, &quot;Sleeping&quot;, &quot;sitting&quot;)</code> debe regresar &quot;Está sentado en el sofá&quot;.'
    testString: 'assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch", "<code>myReplace("He is Sleeping on the couch", "Sleeping", "sitting")</code> should return "He is Sitting on the couch".");'
  - text: '<code>myReplace(&quot;This has a spellngi error&quot;, &quot;spellngi&quot;, &quot;spelling&quot;)</code> debe devolver &quot;Esto tiene un error ortográfico&quot;.'
    testString: 'assert.deepEqual(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error", "<code>myReplace("This has a spellngi error", "spellngi", "spelling")</code> should return "This has a spelling error".");'
  - text: '<code>myReplace(&quot;His name is Tom&quot;, &quot;Tom&quot;, &quot;john&quot;)</code> debe devolver &quot;Su nombre es John&quot;.'
    testString: 'assert.deepEqual(myReplace("His name is Tom", "Tom", "john"), "His name is John", "<code>myReplace("His name is Tom", "Tom", "john")</code> should return "His name is John".");'
  - text: '<code>myReplace(&quot;Let us get back to more Coding&quot;, &quot;Coding&quot;, &quot;algorithms&quot;)</code> debería devolver &quot;Regresemos a más Algoritmos&quot;.'
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

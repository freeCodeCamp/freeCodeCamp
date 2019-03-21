---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1
videoUrl: ''
localeTitle: Palabras en blanco
---

## Description
<section id="description"> Ahora usaremos nuestro conocimiento de cadenas para construir un juego de palabras de estilo &quot; <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> &quot; que llamamos &quot;Palabras en blanco&quot;. Creará una oración estilo &quot;Rellene los espacios en blanco&quot; (opcionalmente humorística). En un juego de &quot;Mad Libs&quot;, se te proporcionan oraciones con algunas palabras faltantes, como sustantivos, verbos, adjetivos y adverbios. Luego, completa las piezas faltantes con las palabras que elijas de manera que la oración completa tenga sentido. Considere esta oración: &quot;Estaba realmente <strong>____</strong> , y nosotros nos <strong>____</strong>  muy <strong>____</strong> &quot;. Esta oración tiene tres partes faltantes: un adjetivo, un verbo y un adverbio, y podemos agregar palabras de nuestra elección para completarla. Luego podemos asignar la oración completa a una variable de la siguiente manera: <blockquote> var frase = &quot;Estaba realmente&quot; + &quot;soleado&quot; + &quot;, y nosotros nos&quot; + &quot;reímos&quot; + &quot;muy&quot; + &quot;tontamente&quot;. </blockquote></section>

## Instructions
<section id="instructions"> En este desafío, le proporcionamos un sustantivo, un verbo, un adjetivo y un adverbio. Debe formar una oración completa con las palabras de su elección, junto con las palabras que proporcionamos. Deberá utilizar el operador de concatenación de cadenas <code>+</code> para crear una nueva cadena, utilizando las variables proporcionadas: <code>myNoun</code> , <code>myAdjective</code> , <code>myVerb</code> y <code>myAdverb</code> . A continuación, asignará la cadena formada a la variable de <code>result</code> . También deberá tener en cuenta los espacios en su cadena, de modo que la oración final tenga espacios entre todas las palabras. El resultado debe ser una oración completa. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>wordBlanks(&quot;&quot;,&quot;&quot;,&quot;&quot;,&quot;&quot;)</code> debe devolver una cadena.'
    testString: 'assert(typeof wordBlanks("","","","") === "string", "<code>wordBlanks("","","","")</code> should return a string.");'
  - text: '<code>wordBlanks(&quot;dog&quot;, &quot;big&quot;, &quot;ran&quot;, &quot;quickly&quot;)</code> debe contener todas las palabras pasadas separadas por caracteres que no sean de palabras (y cualquier palabra adicional en su libreta).'
    testString: 'assert(/\bdog\b/.test(test1) && /\bbig\b/.test(test1) && /\bran\b/.test(test1) && /\bquickly\b/.test(test1),"<code>wordBlanks("dog", "big", "ran", "quickly")</code> should contain all of the passed in words separated by non-word characters (and any additional words in your madlib).");'
  - text: '<code>wordBlanks(&quot;cat&quot;, &quot;little&quot;, &quot;hit&quot;, &quot;slowly&quot;)</code> debe contener todas las palabras pasadas separadas por caracteres que no sean de palabras (y cualquier palabra adicional en su biblioteca de idioma).'
    testString: 'assert(/\bcat\b/.test(test2) && /\blittle\b/.test(test2) && /\bhit\b/.test(test2) && /\bslowly\b/.test(test2),"<code>wordBlanks("cat", "little", "hit", "slowly")</code> should contain all of the passed in words separated by non-word characters (and any additional words in your madlib).");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

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

---
id: 599a789b454f2bbd91a3ff4d
title: Practice comparing different values
localeTitle: Practicar comparando valores diferentes.
challengeType: 1
---

## Description
<section id='description'>
En los últimos dos desafíos, aprendimos sobre el operador de igualdad ( <code>==</code> ) y el operador de igualdad estricta ( <code>===</code> ). Hagamos una revisión rápida y practiquemos el uso de estos operadores un poco más.
Si los valores que se comparan no son del mismo tipo, el operador de igualdad realizará una conversión de tipo y luego evaluará los valores. Sin embargo, el operador de igualdad estricta comparará tanto el tipo de datos como el valor tal como está, sin convertir un tipo en otro.
<strong>ejemplos</strong>
<blockquote>3 == '3'  // returns true because JavaScript performs type conversion from string to number<br>3 === '3' // returns false because the types are different and type conversion is not performed</blockquote>
<strong>Nota</strong> <br> En JavaScript, puede determinar el tipo de una variable o un valor con el operador <code>typeof</code> , de la siguiente manera:
<blockquote>typeof 3   // returns 'number'<br>typeof '3' // returns 'string'</blockquote>
</section>

## Instructions
<section id='instructions'>
La función <code>compareEquality</code> en el editor compara dos valores utilizando el <code>equality operator</code> . Modifique la función de modo que devuelva &quot;Igual&quot; solo cuando los valores sean estrictamente iguales.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>compareEquality(10, &quot;10&quot;)</code> debe devolver &quot;Not Equal&quot;'
    testString: 'assert(compareEquality(10, "10") === "Not Equal", "<code>compareEquality(10, "10")</code> should return "Not Equal"");'
  - text: ' <code>compareEquality(&quot;20&quot;, 20)</code> debe devolver &quot;Not Equal&quot;'
    testString: 'assert(compareEquality("20", 20) === "Not Equal", "<code>compareEquality("20", 20)</code> should return "Not Equal"");'
  - text: Debes usar el operador <code>===</code>
    testString: 'assert(code.match(/===/g), "You should use the <code>===</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```

</section>

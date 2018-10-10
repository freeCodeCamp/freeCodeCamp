---
id: 56533eb9ac21ba0edf2244ca
title: Using Objects for Lookups
localeTitle: Uso de objetos para búsquedas
challengeType: 1
---

## Description
<section id='description'>
objetos pueden considerarse como un almacenamiento de clave / valor, como un diccionario. Si tiene datos tabulares, puede usar un objeto para &quot;buscar&quot; valores en lugar de una instrucción <code>switch</code> o una cadena <code>if/else</code> . Esto es más útil cuando sabe que sus datos de entrada están limitados a un cierto rango.
Aquí hay un ejemplo de una búsqueda de alfabeto inversa simple:
<blockquote>var alpha = {<br>&nbsp;&nbsp;1:"Z",<br>&nbsp;&nbsp;2:"Y",<br>&nbsp;&nbsp;3:"X",<br>&nbsp;&nbsp;4:"W",<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;24:"C",<br>&nbsp;&nbsp;25:"B",<br>&nbsp;&nbsp;26:"A"<br>};<br>alpha[2]; // "Y"<br>alpha[24]; // "C"<br><br>var value = 2;<br>alpha[value]; // "Y"</blockquote>
</section>

## Instructions
<section id='instructions'>
Convertir la instrucción switch en un objeto llamado <code>lookup</code> . Úselo para buscar <code>val</code> y asignar la cadena asociada a la variable de <code>result</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>phoneticLookup(&quot;alpha&quot;)</code> debería ser igual a <code>&quot;Adams&quot;</code>
    testString: 'assert(phoneticLookup("alpha") === "Adams", "<code>phoneticLookup("alpha")</code> should equal <code>"Adams"</code>");'
  - text: <code>phoneticLookup(&quot;bravo&quot;)</code> debería ser igual a <code>&quot;Boston&quot;</code>
    testString: 'assert(phoneticLookup("bravo") === "Boston", "<code>phoneticLookup("bravo")</code> should equal <code>"Boston"</code>");'
  - text: <code>phoneticLookup(&quot;charlie&quot;)</code> debe ser igual a <code>&quot;Chicago&quot;</code>
    testString: 'assert(phoneticLookup("charlie") === "Chicago", "<code>phoneticLookup("charlie")</code> should equal <code>"Chicago"</code>");'
  - text: <code>phoneticLookup(&quot;delta&quot;)</code> debe ser igual a <code>&quot;Denver&quot;</code>
    testString: 'assert(phoneticLookup("delta") === "Denver", "<code>phoneticLookup("delta")</code> should equal <code>"Denver"</code>");'
  - text: <code>phoneticLookup(&quot;echo&quot;)</code> debe ser igual a <code>&quot;Easy&quot;</code>
    testString: 'assert(phoneticLookup("echo") === "Easy", "<code>phoneticLookup("echo")</code> should equal <code>"Easy"</code>");'
  - text: <code>phoneticLookup(&quot;foxtrot&quot;)</code> debe ser igual a <code>&quot;Frank&quot;</code>
    testString: 'assert(phoneticLookup("foxtrot") === "Frank", "<code>phoneticLookup("foxtrot")</code> should equal <code>"Frank"</code>");'
  - text: <code>phoneticLookup(&quot;&quot;)</code> debe ser igual a <code>undefined</code>
    testString: 'assert(typeof phoneticLookup("") === "undefined", "<code>phoneticLookup("")</code> should equal <code>undefined</code>");'
  - text: No debes modificar la declaración de <code>return</code> .
    testString: 'assert(code.match(/return\sresult;/), "You should not modify the <code>return</code> statement");'
  - text: 'No debe usar <code>case</code> , <code>switch</code> , o <code>if</code> declaraciones'
    testString: 'assert(!/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g,"")), "You should not use <code>case</code>, <code>switch</code>, or <code>if</code> statements"); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```

</section>

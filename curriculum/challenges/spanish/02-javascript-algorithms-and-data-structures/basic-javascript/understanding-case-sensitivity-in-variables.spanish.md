---
id: 56533eb9ac21ba0edf2244ab
title: Understanding Case Sensitivity in Variables
localeTitle: Entender la sensibilidad de los casos en variables
challengeType: 1
---

## Description
<section id='description'> 
En JavaScript, todas las variables y nombres de funciones distinguen entre mayúsculas y minúsculas. Esto significa que la capitalización importa. 
<code>MYVAR</code> no es lo mismo que <code>MyVar</code> ni <code>myvar</code> . Es posible tener múltiples variables distintas con el mismo nombre pero con una carcasa diferente. Se recomienda encarecidamente que, para mayor claridad, <em>no</em> utilice esta función de idioma. 
<h4> Mejores prácticas </h4> 
Escribe nombres de variables en JavaScript en <dfn>camelCase</dfn> . En <dfn>camelCase</dfn> , los nombres de variables de varias palabras tienen la primera palabra en minúsculas y la primera letra de cada palabra subsiguiente se escribe con mayúscula. 
<strong>Ejemplos:</strong> 
<blockquote>var someVariable;<br>var anotherVariableName;<br>var thisVariableNameIsSoLong;</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Modifique las declaraciones y asignaciones existentes para que sus nombres utilicen <dfn>camelCase</dfn> . <br> No cree nuevas variables. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>studlyCapVar</code> está definido y tiene un valor de <code>10</code>
    testString: 'assert(typeof studlyCapVar !== "undefined" && studlyCapVar === 10, "<code>studlyCapVar</code> is defined and has a value of <code>10</code>");'
  - text: <code>properCamelCase</code> está definido y tiene un valor de <code>&quot;A String&quot;</code>
    testString: 'assert(typeof properCamelCase !== "undefined" && properCamelCase === "A String", "<code>properCamelCase</code> is defined and has a value of <code>"A String"</code>");'
  - text: <code>titleCaseOver</code> está definido y tiene un valor de <code>9000</code>
    testString: 'assert(typeof titleCaseOver !== "undefined" && titleCaseOver === 9000, "<code>titleCaseOver</code> is defined and has a value of <code>9000</code>");'
  - text: <code>studlyCapVar</code> debe usar camelCase en las secciones de declaración y asignación.
    testString: 'assert(code.match(/studlyCapVar/g).length === 2, "<code>studlyCapVar</code> should use camelCase in both declaration and assignment sections.");'
  - text: <code>properCamelCase</code> debe usar camelCase en las secciones de declaración y asignación.
    testString: 'assert(code.match(/properCamelCase/g).length === 2, "<code>properCamelCase</code> should use camelCase in both declaration and assignment sections.");'
  - text: <code>titleCaseOver</code> debe usar camelCase en las secciones de declaración y asignación.
    testString: 'assert(code.match(/titleCaseOver/g).length === 2, "<code>titleCaseOver</code> should use camelCase in both declaration and assignment sections.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

</div>



</section>

## Solution
<section id='solution'>


```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```

</section>

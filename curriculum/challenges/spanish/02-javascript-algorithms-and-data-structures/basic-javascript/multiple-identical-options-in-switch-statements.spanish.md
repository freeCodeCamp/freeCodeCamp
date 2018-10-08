---
id: 56533eb9ac21ba0edf2244df
title: Multiple Identical Options in Switch Statements
localeTitle: Múltiples opciones idénticas en declaraciones de cambio
challengeType: 1
---

## Description
<section id='description'> 
Si la sentencia de <code>break</code> se omite en el <code>case</code> de una sentencia de <code>switch</code> , se ejecutan las siguientes sentencias de <code>case</code> hasta que se encuentra una <code>break</code> . Si tiene varias entradas con la misma salida, puede representarlas en una declaración de <code>switch</code> como esta: 
<blockquote>switch(val) {<br>&nbsp;&nbsp;case 1:<br>&nbsp;&nbsp;case 2:<br>&nbsp;&nbsp;case 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;result = "1, 2, or 3";<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;case 4:<br>&nbsp;&nbsp;&nbsp;&nbsp;result = "4 alone";<br>}</blockquote> 
casos para 1, 2 y 3 producirán el mismo resultado. 
</section>

## Instructions
<section id='instructions'> 
Escriba una instrucción de cambio para establecer la <code>answer</code> para los siguientes rangos: <br> <code>1-3</code> - &quot;Bajo&quot; <br> <code>4-6</code> - &quot;Mid&quot; <br> <code>7-9</code> - &quot;Alta&quot; 
<strong>Nota</strong> <br> Deberá tener una declaración de <code>case</code> para cada número en el rango. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sequentialSizes(1)</code> debe devolver &quot;Low&quot;
    testString: 'assert(sequentialSizes(1) === "Low", "<code>sequentialSizes(1)</code> should return "Low"");'
  - text: <code>sequentialSizes(2)</code> debe devolver &quot;Low&quot;
    testString: 'assert(sequentialSizes(2) === "Low", "<code>sequentialSizes(2)</code> should return "Low"");'
  - text: <code>sequentialSizes(3)</code> debe devolver &quot;Low&quot;
    testString: 'assert(sequentialSizes(3) === "Low", "<code>sequentialSizes(3)</code> should return "Low"");'
  - text: <code>sequentialSizes(4)</code> debe devolver &quot;Mid&quot;
    testString: 'assert(sequentialSizes(4) === "Mid", "<code>sequentialSizes(4)</code> should return "Mid"");'
  - text: <code>sequentialSizes(5)</code> debe devolver &quot;Mid&quot;
    testString: 'assert(sequentialSizes(5) === "Mid", "<code>sequentialSizes(5)</code> should return "Mid"");'
  - text: <code>sequentialSizes(6)</code> debe devolver &quot;Mid&quot;
    testString: 'assert(sequentialSizes(6) === "Mid", "<code>sequentialSizes(6)</code> should return "Mid"");'
  - text: <code>sequentialSizes(7)</code> debe devolver &quot;Alto&quot;
    testString: 'assert(sequentialSizes(7) === "High", "<code>sequentialSizes(7)</code> should return "High"");'
  - text: <code>sequentialSizes(8)</code> debe devolver &quot;Alto&quot;
    testString: 'assert(sequentialSizes(8) === "High", "<code>sequentialSizes(8)</code> should return "High"");'
  - text: <code>sequentialSizes(9)</code> debe devolver &quot;Alto&quot;
    testString: 'assert(sequentialSizes(9) === "High", "<code>sequentialSizes(9)</code> should return "High"");'
  - text: No debes usar ninguna declaración <code>if</code> o <code>else</code>
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: Usted debe tener nueve declaraciones de <code>case</code>
    testString: 'assert(code.match(/case/g).length === 9, "You should have nine <code>case</code> statements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function sequentialSizes(val) {
  var answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```

</section>

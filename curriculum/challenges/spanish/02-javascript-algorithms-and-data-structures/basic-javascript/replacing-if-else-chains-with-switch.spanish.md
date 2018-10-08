---
id: 56533eb9ac21ba0edf2244e0
title: Replacing If Else Chains with Switch
localeTitle: Reemplazo de cadenas de otro tipo con interruptor
challengeType: 1
---

## Description
<section id='description'> 
Si tiene muchas opciones para elegir, una instrucción <code>switch</code> puede ser más fácil de escribir que muchas instrucciones encadenadas <code>if</code> / <code>else if</code> . Lo siguiente: 
<blockquote>if (val === 1) {<br>&nbsp;&nbsp;answer = "a";<br>} else if (val === 2) {<br>&nbsp;&nbsp;answer = "b";<br>} else {<br>&nbsp;&nbsp;answer = "c";<br>}</blockquote> 
puede ser reemplazado por: 
<blockquote>switch(val) {<br>&nbsp;&nbsp;case 1:<br>&nbsp;&nbsp;&nbsp;&nbsp;answer = "a";<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;case 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;answer = "b";<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;default:<br>&nbsp;&nbsp;&nbsp;&nbsp;answer = "c";<br>}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Cambie las sentencias <code>if</code> / <code>else if</code> encadenadas en una sentencia <code>switch</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: No debe utilizar ninguna <code>else</code> declaración en ningún lugar del editor.
    testString: 'assert(!/else/g.test(code), "You should not use any <code>else</code> statements anywhere in the editor");'
  - text: No debe utilizar ninguna sentencia <code>if</code> en ningún lugar del editor.
    testString: 'assert(!/if/g.test(code), "You should not use any <code>if</code> statements anywhere in the editor");'
  - text: Debe tener al menos cuatro declaraciones de <code>break</code>
    testString: 'assert(code.match(/break/g).length >= 4, "You should have at least four <code>break</code> statements");'
  - text: <code>chainToSwitch(&quot;bob&quot;)</code> debe ser &quot;Marley&quot;
    testString: 'assert(chainToSwitch("bob") === "Marley", "<code>chainToSwitch("bob")</code> should be "Marley"");'
  - text: <code>chainToSwitch(42)</code> debe ser &quot;La Respuesta&quot;
    testString: 'assert(chainToSwitch(42) === "The Answer", "<code>chainToSwitch(42)</code> should be "The Answer"");'
  - text: &#39; <code>chainToSwitch(1)</code> debe ser &quot;No hay # 1&quot;&#39;
    testString: 'assert(chainToSwitch(1) === "There is no #1", "<code>chainToSwitch(1)</code> should be "There is no #1"");'
  - text: <code>chainToSwitch(99)</code> debería ser &quot;¡Me <code>chainToSwitch(99)</code> por esto!&quot;
    testString: 'assert(chainToSwitch(99) === "Missed me by this much!", "<code>chainToSwitch(99)</code> should be "Missed me by this much!"");'
  - text: <code>chainToSwitch(7)</code> debe ser &quot;Ate Nine&quot;
    testString: 'assert(chainToSwitch(7) === "Ate Nine", "<code>chainToSwitch(7)</code> should be "Ate Nine"");'
  - text: <code>chainToSwitch(&quot;John&quot;)</code> debe ser &quot;&quot; (cadena vacía)
    testString: 'assert(chainToSwitch("John") === "", "<code>chainToSwitch("John")</code> should be "" (empty string)");'
  - text: <code>chainToSwitch(156)</code> debe ser &quot;&quot; (cadena vacía)
    testString: 'assert(chainToSwitch(156) === "", "<code>chainToSwitch(156)</code> should be "" (empty string)");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function chainToSwitch(val) {
  var answer = "";

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
```

</section>

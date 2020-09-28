---
id: 56533eb9ac21ba0edf2244da
title: Introducing Else Statements
challengeType: 1
videoUrl: ''
localeTitle: Introduciendo otras declaraciones
---

## Description
<section id="description"> Cuando una condición para una sentencia <code>if</code> es verdadera, se ejecuta el bloque de código siguiente. ¿Qué pasa cuando esa condición es falsa? Normalmente no pasaría nada. Con una sentencia <code>else</code> , se puede ejecutar un bloque de código alternativo. <blockquote> if (num&gt; 10) { <br> return &quot;Más grande que 10&quot;; <br> } else { <br> return &quot;10 o menos&quot;; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Combine las declaraciones <code>if</code> en una sola instrucción <code>if/else</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Solo debes tener una sentencia <code>if</code> en el editor.
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement in the editor");'
  - text: Debes usar una sentencia <code>else</code>
    testString: 'assert(/else/g.test(code), "You should use an <code>else</code> statement");'
  - text: <code>testElse(4)</code> debe devolver &quot;5 o más pequeño&quot;
    testString: 'assert(testElse(4) === "5 or Smaller", "<code>testElse(4)</code> should return "5 or Smaller"");'
  - text: <code>testElse(5)</code> debe devolver &quot;5 o más pequeño&quot;
    testString: 'assert(testElse(5) === "5 or Smaller", "<code>testElse(5)</code> should return "5 or Smaller"");'
  - text: <code>testElse(6)</code> debe devolver &quot;Más grande que 5&quot;
    testString: 'assert(testElse(6) === "Bigger than 5", "<code>testElse(6)</code> should return "Bigger than 5"");'
  - text: <code>testElse(10)</code> debe devolver &quot;Más grande que 5&quot;
    testString: 'assert(testElse(10) === "Bigger than 5", "<code>testElse(10)</code> should return "Bigger than 5"");'
  - text: No cambie el código por encima o por debajo de las líneas.
    testString: 'assert(/var result = "";/.test(code) && /return result;/.test(code), "Do not change the code above or below the lines.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

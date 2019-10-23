---
id: 56533eb9ac21ba0edf2244dc
title: Chaining If Else Statements
challengeType: 1
videoUrl: ''
localeTitle: Encadenamiento en caso contrario
---

## Description
<section id="description"> <code>if/else</code> declaraciones <code>if/else</code> se pueden encadenar para una lógica compleja. Aquí está el <dfn>pseudocódigo</dfn> de múltiples sentencias <code>if</code> / <code>else if</code> encadenadas: <blockquote> if ( <em>condición1</em> ) { <br> <em>declaración1</em> <br> } else if ( <em>condition2</em> ) { <br> <em>declaración2</em> <br> } else if ( <em>condition3</em> ) { <br> <em>declaración3</em> <br> . . . <br> } else { <br> <em>declaraciónN</em> <br> } </blockquote></section>

## Instructions
<section id="instructions"> Escriba en cadena las sentencias <code>if</code> / <code>else if</code> para cumplir las siguientes condiciones: <code>num &lt; 5</code> - return &quot;Tiny&quot; <br> <code>num &lt; 10</code> - devuelve &quot;Small&quot; <br> <code>num &lt; 15</code> - devuelve &quot;Medium&quot; <br> <code>num &lt; 20</code> - devuelve &quot;Large&quot; <br> <code>num &gt;= 20</code> - devuelve &quot;Huge&quot; </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debes tener al menos cuatro declaraciones <code>else</code>
    testString: 'assert(code.match(/else/g).length > 3, "You should have at least four <code>else</code> statements");'
  - text: Debes tener al menos cuatro <code>if</code> declaraciones
    testString: 'assert(code.match(/if/g).length > 3, "You should have at least four <code>if</code> statements");'
  - text: Debe tener al menos una declaración de <code>return</code>
    testString: 'assert(code.match(/return/g).length >= 1, "You should have at least one <code>return</code> statement");'
  - text: <code>testSize(0)</code> debería devolver &quot;Tiny&quot;
    testString: 'assert(testSize(0) === "Tiny", "<code>testSize(0)</code> should return "Tiny"");'
  - text: <code>testSize(4)</code> debería devolver &quot;Tiny&quot;
    testString: 'assert(testSize(4) === "Tiny", "<code>testSize(4)</code> should return "Tiny"");'
  - text: <code>testSize(5)</code> debe devolver &quot;Small&quot;
    testString: 'assert(testSize(5) === "Small", "<code>testSize(5)</code> should return "Small"");'
  - text: <code>testSize(8)</code> debe devolver &quot;Small&quot;
    testString: 'assert(testSize(8) === "Small", "<code>testSize(8)</code> should return "Small"");'
  - text: <code>testSize(10)</code> debe devolver &quot;Medium&quot;
    testString: 'assert(testSize(10) === "Medium", "<code>testSize(10)</code> should return "Medium"");'
  - text: <code>testSize(14)</code> debe devolver &quot;Medium&quot;
    testString: 'assert(testSize(14) === "Medium", "<code>testSize(14)</code> should return "Medium"");'
  - text: <code>testSize(15)</code> debe devolver &quot;Large&quot;
    testString: 'assert(testSize(15) === "Large", "<code>testSize(15)</code> should return "Large"");'
  - text: <code>testSize(17)</code> debería devolver &quot;Large&quot;
    testString: 'assert(testSize(17) === "Large", "<code>testSize(17)</code> should return "Large"");'
  - text: <code>testSize(20)</code> debería devolver &quot;Huge&quot;
    testString: 'assert(testSize(20) === "Huge", "<code>testSize(20)</code> should return "Huge"");'
  - text: <code>testSize(25)</code> debería devolver &quot;Huge&quot;
    testString: 'assert(testSize(25) === "Huge", "<code>testSize(25)</code> should return "Huge"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

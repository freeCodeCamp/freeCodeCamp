---
id: 56533eb9ac21ba0edf2244d5
title: Comparison with the Greater Than Or Equal To Operator
localeTitle: Comparación con el operador mayor o igual que el operador
challengeType: 1
---

## Description
<section id='description'> 
El operador <code>greater than or equal to</code> ( <code>&gt;=</code> ) compara los valores de dos números. Si el número a la izquierda es mayor o igual que el número a la derecha, devuelve <code>true</code> . De lo contrario, devuelve <code>false</code> . 
Al igual que el operador de igualdad, <code>greater than or equal to</code> operador convertirá los tipos de datos al comparar. 
<strong>ejemplos</strong> 
<blockquote> 6  >=  6  // true<br> 7  >= '3' // true<br> 2  >=  3  // false<br>'7' >=  9  // false</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Agregue el operador <code>greater than or equal to</code> las líneas indicadas para que las declaraciones de devolución tengan sentido. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterOrEqual(0)</code> debe devolver &quot;Menos de 10&quot;
    testString: 'assert(testGreaterOrEqual(0) === "Less than 10", "<code>testGreaterOrEqual(0)</code> should return "Less than 10"");'
  - text: <code>testGreaterOrEqual(9)</code> debe devolver &quot;Menos de 10&quot;
    testString: 'assert(testGreaterOrEqual(9) === "Less than 10", "<code>testGreaterOrEqual(9)</code> should return "Less than 10"");'
  - text: <code>testGreaterOrEqual(10)</code> debe devolver &quot;10 o más&quot;
    testString: 'assert(testGreaterOrEqual(10) === "10 or Over", "<code>testGreaterOrEqual(10)</code> should return "10 or Over"");'
  - text: <code>testGreaterOrEqual(11)</code> debe devolver &quot;10 o más&quot;
    testString: 'assert(testGreaterOrEqual(11) === "10 or Over", "<code>testGreaterOrEqual(11)</code> should return "10 or Over"");'
  - text: <code>testGreaterOrEqual(19)</code> debe devolver &quot;10 o más&quot;
    testString: 'assert(testGreaterOrEqual(19) === "10 or Over", "<code>testGreaterOrEqual(19)</code> should return "10 or Over"");'
  - text: <code>testGreaterOrEqual(100)</code> debe devolver &quot;20 o más&quot;
    testString: 'assert(testGreaterOrEqual(100) === "20 or Over", "<code>testGreaterOrEqual(100)</code> should return "20 or Over"");'
  - text: <code>testGreaterOrEqual(21)</code> debe devolver &quot;20 o más&quot;
    testString: 'assert(testGreaterOrEqual(21) === "20 or Over", "<code>testGreaterOrEqual(21)</code> should return "20 or Over"");'
  - text: Debe usar el operador <code>&gt;=</code> al menos dos veces
    testString: 'assert(code.match(/val\s*>=\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&gt;=</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```

</section>

---
id: 56533eb9ac21ba0edf2244d7
title: Comparison with the Less Than Or Equal To Operator
localeTitle: Comparación con el operador menor o igual que
challengeType: 1
---

## Description
<section id='description'> 
El operador <code>less than or equal to</code> ( <code>&lt;=</code> ) compara los valores de dos números. Si el número a la izquierda es menor o igual que el número a la derecha, devuelve <code>true</code> . Si el número de la izquierda es mayor que el de la derecha, devuelve <code>false</code> . Al igual que el operador de igualdad, <code>less than or equal to</code> convierte los tipos de datos. 
<strong>ejemplos</strong> 
<blockquote>4 &lt;= 5  // true<br>'7' &lt;= 7  // true<br>5 &lt;= 5  // true<br>3 &lt;= 2  // false<br>'8' &lt;= 4  // false</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Agregue el operador <code>less than or equal to</code> las líneas indicadas para que las declaraciones de devolución tengan sentido. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testLessOrEqual(0)</code> debe devolver &quot;Más pequeño o igual a 12&quot;
    testString: 'assert(testLessOrEqual(0) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(0)</code> should return "Smaller Than or Equal to 12"");'
  - text: <code>testLessOrEqual(11)</code> debe devolver &quot;Más pequeño o igual a 12&quot;
    testString: 'assert(testLessOrEqual(11) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(11)</code> should return "Smaller Than or Equal to 12"");'
  - text: <code>testLessOrEqual(12)</code> debe devolver &quot;Más pequeño o igual a 12&quot;
    testString: 'assert(testLessOrEqual(12) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(12)</code> should return "Smaller Than or Equal to 12"");'
  - text: <code>testLessOrEqual(23)</code> debe devolver &quot;Más pequeño o igual a 24&quot;
    testString: 'assert(testLessOrEqual(23) === "Smaller Than or Equal to 24", "<code>testLessOrEqual(23)</code> should return "Smaller Than or Equal to 24"");'
  - text: <code>testLessOrEqual(24)</code> debe devolver &quot;Más pequeño o igual a 24&quot;
    testString: 'assert(testLessOrEqual(24) === "Smaller Than or Equal to 24", "<code>testLessOrEqual(24)</code> should return "Smaller Than or Equal to 24"");'
  - text: <code>testLessOrEqual(25)</code> debe devolver &quot;Más de 24&quot;
    testString: 'assert(testLessOrEqual(25) === "More Than 24", "<code>testLessOrEqual(25)</code> should return "More Than 24"");'
  - text: <code>testLessOrEqual(55)</code> debe devolver &quot;Más de 24&quot;
    testString: 'assert(testLessOrEqual(55) === "More Than 24", "<code>testLessOrEqual(55)</code> should return "More Than 24"");'
  - text: Debe usar el operador <code>&lt;=</code> al menos dos veces
    testString: 'assert(code.match(/val\s*<=\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&lt;=</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```

</section>

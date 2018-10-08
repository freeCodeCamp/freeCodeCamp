---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
localeTitle: Comparación con el operador de igualdad
challengeType: 1
---

## Description
<section id='description'> 
Hay muchos <dfn>operadores de comparación</dfn> en JavaScript. Todos estos operadores devuelven un valor <code>true</code> o <code>false</code> booleano. 
El operador más básico es el operador de igualdad <code>==</code> . El operador de igualdad compara dos valores y devuelve <code>true</code> si son equivalentes o <code>false</code> si no lo son. Tenga en cuenta que la igualdad es diferente de la asignación ( <code>=</code> ), que asigna el valor a la derecha del operador a una variable en la izquierda. 
<blockquote>function equalityTest(myVal) {<br>&nbsp;&nbsp;if (myVal == 10) {<br>&nbsp;&nbsp;&nbsp;&nbsp; return "Equal";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return "Not Equal";<br>}</blockquote> 
Si <code>myVal</code> es igual a <code>10</code> , el operador de igualdad devuelve <code>true</code> , por lo que se ejecutará el código entre llaves y la función devolverá <code>&quot;Equal&quot;</code> . De lo contrario, la función devolverá <code>&quot;Not Equal&quot;</code> . 
Para que JavaScript pueda comparar dos <code>data types</code> (por ejemplo, <code>numbers</code> y <code>strings</code> ), debe convertir un tipo a otro. Esto se conoce como &quot;Tipo de coerción&quot;. Una vez que lo hace, sin embargo, puede comparar los términos de la siguiente manera: 
<blockquote>1   ==  1    // true<br>1   ==  2    // false<br>1   == '1'   // true<br>"3"  ==  3    // true</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Agregue el <code>equality operator</code> a la línea indicada para que la función devuelva &quot;Igual&quot; cuando <code>val</code> sea ​​equivalente a <code>12</code> 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testEqual(10)</code> debe devolver &quot;No es igual&quot;
    testString: 'assert(testEqual(10) === "Not Equal", "<code>testEqual(10)</code> should return "Not Equal"");'
  - text: <code>testEqual(12)</code> debe devolver &quot;Igual&quot;
    testString: 'assert(testEqual(12) === "Equal", "<code>testEqual(12)</code> should return "Equal"");'
  - text: <code>testEqual(&quot;12&quot;)</code> debe devolver &quot;Equal&quot;
    testString: 'assert(testEqual("12") === "Equal", "<code>testEqual("12")</code> should return "Equal"");'
  - text: Debes usar el operador <code>==</code>
    testString: 'assert(code.match(/==/g) && !code.match(/===/g), "You should use the <code>==</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```

</section>

---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
localeTitle: Orden lógico en si otras declaraciones
challengeType: 1
---

## Description
<section id='description'> 
orden es importante en <code>if</code> , <code>else if</code> declaraciones. 
La función se ejecuta de arriba a abajo, por lo que deberá tener cuidado con la afirmación que aparece primero. 
Toma estas dos funciones como ejemplo. 
Aquí está el primero: 
<blockquote>function foo(x) {<br>&nbsp;&nbsp;if (x < 1) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than one";<br>&nbsp;&nbsp;} else if (x < 2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than two";<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Greater than or equal to two";<br>&nbsp;&nbsp;}<br>}</blockquote> 
Y el segundo solo cambia el orden de las declaraciones: 
<blockquote>function bar(x) {<br>&nbsp;&nbsp;if (x < 2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than two";<br>&nbsp;&nbsp;} else if (x < 1) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than one";<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Greater than or equal to two";<br>&nbsp;&nbsp;}<br>}</blockquote> 
Si bien estas dos funciones parecen casi idénticas, si pasamos un número a ambas obtenemos diferentes salidas. 
<blockquote>foo(0) // "Less than one"<br>bar(0) // "Less than two"</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Cambie el orden de la lógica en la función para que devuelva las declaraciones correctas en todos los casos. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>orderMyLogic(4)</code> debe devolver &quot;Menos de 5&quot;
    testString: 'assert(orderMyLogic(4) === "Less than 5", "<code>orderMyLogic(4)</code> should return "Less than 5"");'
  - text: <code>orderMyLogic(6)</code> debe devolver &quot;Menos de 10&quot;
    testString: 'assert(orderMyLogic(6) === "Less than 10", "<code>orderMyLogic(6)</code> should return "Less than 10"");'
  - text: <code>orderMyLogic(11)</code> debe devolver &quot;Mayor o igual a 10&quot;
    testString: 'assert(orderMyLogic(11) === "Greater than or equal to 10", "<code>orderMyLogic(11)</code> should return "Greater than or equal to 10"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```

</section>

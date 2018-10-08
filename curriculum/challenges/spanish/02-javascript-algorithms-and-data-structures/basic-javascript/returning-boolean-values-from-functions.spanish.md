---
id: 5679ceb97cbaa8c51670a16b
title: Returning Boolean Values from Functions
localeTitle: Devolviendo valores booleanos desde funciones
challengeType: 1
---

## Description
<section id='description'> 
Puede recordar de la <a href="waypoint-comparison-with-the-equality-operator" target="_blank">comparación con el operador de igualdad</a> que todos los operadores de comparación devuelven un valor booleano <code>true</code> o <code>false</code> . 
Algunas veces las personas usan una sentencia if / else para hacer una comparación, como esta: 
<blockquote>function isEqual(a,b) {<br>&nbsp;&nbsp;if (a === b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>&nbsp;&nbsp;}<br>}</blockquote> 
Pero hay una mejor manera de hacer esto. Como <code>===</code> devuelve <code>true</code> o <code>false</code> , podemos devolver el resultado de la comparación: 
<blockquote>function isEqual(a,b) {<br>&nbsp;&nbsp;return a === b;<br>}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Arreglar la función <code>isLess</code> permite eliminar las sentencias <code>if/else</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>isLess(10,15)</code> debe devolver <code>true</code> &#39;
    testString: 'assert(isLess(10,15) === true, "<code>isLess(10,15)</code> should return <code>true</code>");'
  - text: &#39; <code>isLess(15,10)</code> debe devolver <code>false</code> &#39;
    testString: 'assert(isLess(15, 10) === false, "<code>isLess(15,10)</code> should return <code>false</code>");'
  - text: No debes usar ninguna declaración <code>if</code> o <code>else</code>
    testString: 'assert(!/if|else/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
isLess(10, 15);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function isLess(a, b) {
  return a < b;
}
```

</section>

---
title: Count occurrences of a substring
id: 596fda99c69f779975a1b67d
localeTitle: 596fda99c69f779975a1b67d
challengeType: 5
---

## Description
<section id='description'> 
Tarea: 
<p> Cree una función, o muestre una función incorporada, para contar el número de apariciones no superpuestas de una subcadena dentro de una cadena. </p><p> La función debe tomar dos argumentos: </p> 
el primer argumento es la cadena a buscar, y 
el segundo una subcadena a buscar. 
<p> Debe devolver un número entero. </p> 
<p> La coincidencia debe producir el mayor número de coincidencias no superpuestas. </p><p> En general, esto significa esencialmente hacer coincidir de izquierda a derecha o de derecha a izquierda. </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countSubstring</code> es una función.
    testString: 'assert(typeof countSubstring === "function", "<code>countSubstring</code> is a function.");'
  - text: &#39; <code>countSubstring(&quot;the three truths&quot;, &quot;th&quot;)</code> debe devolver <code>3</code> &#39;
    testString: 'assert.equal(countSubstring(testCases[0], searchString[0]), results[0], "<code>countSubstring("the three truths", "th")</code> should return <code>3</code>.");'
  - text: &#39; <code>countSubstring(&quot;ababababab&quot;, &quot;abab&quot;)</code> debe devolver <code>2</code> &#39;
    testString: 'assert.equal(countSubstring(testCases[1], searchString[1]), results[1], "<code>countSubstring("ababababab", "abab")</code> should return <code>2</code>.");'
  - text: &#39; <code>countSubstring(&quot;abaabba*bbaba*bbab&quot;, &quot;a*b&quot;)</code> debe devolver <code>2</code> &#39;
    testString: 'assert.equal(countSubstring(testCases[2], searchString[2]), results[2], "<code>countSubstring("abaabba*bbaba*bbab", "a*b")</code> should return <code>2</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countSubstring (str, subStr) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function countSubstring(str, subStr) {
  const escapedSubStr = subStr.replace(/[.+*?^$[\]{}()|/]/g, '\\$&');
  const matches = str.match(new RegExp(escapedSubStr, 'g'));
  return matches ? matches.length : 0;
}

```

</section>

---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
localeTitle: Devolver un valor de una función con retorno
challengeType: 1
---

## Description
<section id='description'> 
Podemos pasar valores a una función con <dfn>argumentos</dfn> . Puede usar una declaración de <code>return</code> para enviar un valor de vuelta de una función. 
<strong>Ejemplo</strong> 
<blockquote>function plusThree(num) {<br>&nbsp;&nbsp;return num + 3;<br>}<br>var answer = plusThree(5); // 8</blockquote> 
<code>plusThree</code> toma un <dfn>argumento</dfn> para <code>num</code> y devuelve un valor igual a <code>num + 3</code> . 
</section>

## Instructions
<section id='instructions'> 
Cree una función <code>timesFive</code> que acepte un argumento, lo multiplique por <code>5</code> y devuelva el nuevo valor. Vea la última línea en el editor para ver un ejemplo de cómo puede probar su función <code>timesFive</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>timesFive</code> debería ser una función
    testString: 'assert(typeof timesFive === "function", "<code>timesFive</code> should be a function");'
  - text: <code>timesFive(5)</code> debe devolver <code>25</code>
    testString: 'assert(timesFive(5) === 25, "<code>timesFive(5)</code> should return <code>25</code>");'
  - text: <code>timesFive(2)</code> debe devolver <code>10</code>
    testString: 'assert(timesFive(2) === 10, "<code>timesFive(2)</code> should return <code>10</code>");'
  - text: <code>timesFive(0)</code> debe devolver <code>0</code>
    testString: 'assert(timesFive(0) === 0, "<code>timesFive(0)</code> should return <code>0</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line



console.log(minusSeven(10));
```

</div>



</section>

## Solution
<section id='solution'>


```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```

</section>

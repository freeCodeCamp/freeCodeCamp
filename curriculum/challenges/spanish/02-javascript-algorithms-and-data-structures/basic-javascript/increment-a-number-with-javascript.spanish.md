---
id: 56533eb9ac21ba0edf2244ac
title: Increment a Number with JavaScript
localeTitle: Incrementar un número con JavaScript
challengeType: 1
---

## Description
<section id='description'> 
Puede <dfn>incrementar</dfn> o agregar fácilmente uno a una variable con el operador <code>++</code> . 
<code>i++;</code> 
es el equivalente de 
<code>i = i + 1;</code> 
<strong>Nota</strong> <br> La línea entera se convierte en <code>i++;</code> , eliminando la necesidad del signo igual. 
</section>

## Instructions
<section id='instructions'> 
Cambie el código para usar el operador <code>++</code> en <code>myVar</code> . 
<strong>Pista</strong> <br> Obtenga más información sobre los <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()" target="_blank">operadores aritméticos - Incremento (++)</a> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code> debe ser igual a <code>88</code>
    testString: 'assert(myVar === 88, "<code>myVar</code> should equal <code>88</code>");'
  - text: <code>myVar = myVar + 1;</code> debería ser cambiado
    testString: 'assert(/var\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code), "<code>myVar = myVar + 1;</code> should be changed");'
  - text: Usa el operador <code>++</code>
    testString: 'assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code), "Use the <code>++</code> operator");'
  - text: No cambie el código por encima de la línea
    testString: 'assert(/var myVar = 87;/.test(code), "Do not change code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 87;

// Only change code below this line
myVar = myVar + 1;

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
var myVar = 87;
myVar++;
```

</section>

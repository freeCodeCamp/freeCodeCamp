---
id: 587d7b84367417b2b2512b35
title: Catch Misspelled Variable and Function Names
localeTitle: Capturar nombres de funciones y variables mal escritas
challengeType: 1
---

## Description
<section id='description'> 
<code>console.log()</code> y los métodos de <code>typeof</code> son las dos formas principales de verificar los valores intermedios y los tipos de salida del programa. Ahora es el momento de entrar en las formas comunes que toman los errores. Un problema de nivel de sintaxis con el que los usuarios rápidos pueden compadecerse es el humilde error de ortografía. 
transpuestos, faltantes o mal colocados en una variable o nombre de función harán que el navegador busque un objeto que no existe, y se quejen en forma de un error de referencia. Las variables de JavaScript y los nombres de funciones distinguen entre mayúsculas y minúsculas. 
</section>

## Instructions
<section id='instructions'> 
Corrija los dos errores de ortografía en el código para que <code>netWorkingCapital</code> cálculo de <code>netWorkingCapital</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Verifique la ortografía de las dos variables utilizadas en el cálculo de netWorkingCapital, la salida de la consola debe mostrar que "El capital de trabajo neto es: 2".
    testString: 'assert(netWorkingCapital === 2, "Check the spelling of the two variables used in the netWorkingCapital calculation, the console output should show that "Net working capital is: 2".");'
  - text: No debe haber instancias de variables mal escritas en el código.
    testString: 'assert(!code.match(/recievables/g), "There should be no instances of mis-spelled variables in the code.");'
  - text: La variable <code clase = "notranslate"> cuentas por cobrar </code> debe declararse y usarse correctamente en el código.
    testString: 'assert(code.match(/receivables/g).length == 2, "The <code>receivables</code> variable should be declared and used properly in the code.");'
  - text: No debe haber instancias de variables mal escritas en el código.
    testString: 'assert(!code.match(/payable;/g), "There should be no instances of mis-spelled variables in the code.");'
  - text: La variable <code class = "notranslate"> payables </code> debe declararse y usarse correctamente en el código.
    testString: 'assert(code.match(/payables/g).length == 2, "The <code>payables</code> variable should be declared and used properly in the code.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

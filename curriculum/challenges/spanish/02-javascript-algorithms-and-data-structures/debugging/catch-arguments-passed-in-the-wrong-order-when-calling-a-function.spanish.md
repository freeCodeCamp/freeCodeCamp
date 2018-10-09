---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
localeTitle: Detectar argumentos pasados ​​en el orden incorrecto al llamar a una función
challengeType: 1
---

## Description
<section id='description'>
Continuando con la discusión sobre las funciones de llamada, el siguiente error a tener en cuenta es cuando los argumentos de una función se suministran en el orden incorrecto. Si los argumentos son de tipos diferentes, como una función que espera una matriz y un entero, es probable que se produzca un error de tiempo de ejecución. Si los argumentos son del mismo tipo (todos los enteros, por ejemplo), entonces la lógica del código no tendrá sentido. Asegúrese de proporcionar todos los argumentos necesarios, en el orden correcto para evitar estos problemas.
</section>

## Instructions
<section id='instructions'>
La función <code>raiseToPower</code> eleva una base a un exponente. Desafortunadamente, no se llama correctamente: repare el código para que el valor de la <code>power</code> sea ​​el esperado 8.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Su código debería fijar la <code>power</code> variable de modo que sea igual a 2 elevado a la tercera potencia, no 3 elevado a la segunda potencia'
    testString: 'assert(power == 8, "Your code should fix the variable <code>power</code> so it equals 2 raised to the 3rd power, not 3 raised to the 2nd power.");'
  - text: Su código debe usar el orden correcto de los argumentos para la <code>raiseToPower</code> función <code>raiseToPower</code> .
    testString: 'assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g), "Your code should use the correct order of the arguments for the <code>raiseToPower</code> function call.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

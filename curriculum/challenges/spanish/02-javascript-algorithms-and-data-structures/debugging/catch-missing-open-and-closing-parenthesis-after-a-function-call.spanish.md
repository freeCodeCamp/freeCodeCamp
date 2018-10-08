---
id: 587d7b85367417b2b2512b39
title: Catch Missing Open and Closing Parenthesis After a Function Call
localeTitle: Atrapa los paréntesis abiertos y de cierre que faltan después de una llamada de función
challengeType: 1
---

## Description
<section id='description'> 
Cuando una función o método no acepta ningún argumento, puede olvidarse de incluir los paréntesis de apertura y cierre (vacíos) al llamarla. Muchas veces, el resultado de una llamada de función se guarda en una variable para otro uso en su código. Este error se puede detectar registrando valores de variables (o sus tipos) en la consola y al ver que uno se establece en una referencia de función, en lugar del valor esperado que devuelve la función. 
Las variables en el siguiente ejemplo son diferentes: 
<blockquote>function myFunction() {<br>&nbsp;&nbsp;return "You rock!";<br>}<br>let varOne = myFunction; // set to equal a function<br>let varTwo = myFunction(); // set to equal the string "You rock!"</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Corrija el código para que el <code>result</code> variable se establezca en el valor devuelto al llamar a la función <code>getNine</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe arreglar el <code>result</code> variable para que se establezca en el número que devuelve la función <code>getNine</code> .
    testString: 'assert(result == 9, "Your code should fix the variable <code>result</code> so it is set to the number that the function <code>getNine</code> returns.");'
  - text: Su código debe llamar a la función <code>getNine</code> .
    testString: 'assert(code.match(/getNine\(\)/g).length == 2, "Your code should call the <code>getNine</code> function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 5
localeTitle: 5900f50b1000cf542c51001d
challengeType: 5
title: 'Problem 414: Kaprekar constant'
---

## Description
<section id='description'> 
6174 es un número notable; si ordenamos sus dígitos en orden creciente y restamos ese número del número que obtienes cuando ordenas los dígitos en orden decreciente, obtenemos 7641-1467 = 6174. 
Aún más notable es que si comenzamos con cualquier número de 4 dígitos y repetimos este proceso de clasificación y resta, eventualmente terminaremos con 6174 o inmediatamente con 0 si todos los dígitos son iguales. 
Esto también funciona con números que tienen menos de 4 dígitos si colocamos el número con ceros iniciales hasta que tengamos 4 dígitos. 
Por ejemplo, comencemos con el número 0837: 
8730-0378 = 8352 
8532-2358 = 6174 


6174 se llama constante de Kaprekar. El proceso de clasificación, resta y repetición hasta que se alcanza 0 o la constante de Kaprekar se denomina rutina de Kaprekar. 


Podemos considerar la rutina de Kaprekar para otras bases y número de dígitos. 
Desafortunadamente, no está garantizado que exista una constante de Kaprekar en todos los casos; o bien la rutina puede terminar en un ciclo para algunos números de entrada o la constante a la que llega la rutina puede ser diferente para diferentes números de entrada. 
Sin embargo, se puede mostrar que para 5 dígitos y una base b = 6t + 3 ≠ 9, existe una constante de Kaprekar. 
Por ejemplo, base 15: (10,4,14,9,5) 15 
base 21: (14,6,20,13,7) 21 

Defina Cb como la constante de Kaprekar en la base b para 5 dígitos. 
Defina que la función sb (i) sea 
0 si i = Cb o si escribo en la base b consta de 5 dígitos idénticos 
el número de iteraciones que toma la rutina de Kaprekar en la base b para llegar a Cb, de lo contrario 

Nota que podemos definir sb (i) para todos los enteros i &lt;b5. Si escribo en la base b toma menos de 5 dígitos, el número se rellena con cero dígitos iniciales hasta que tengamos 5 dígitos antes de aplicar la rutina de Kaprekar. 


Defina S (b) como la suma de sb (i) para 0 &lt;i &lt;b5. 
Ej. S (15) = 5274369 
S (111) = 400668930299 


Halla la suma de S (6k + 3) para 2 ≤ k ≤ 300. 
Da los últimos 18 dígitos como respuesta. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler414()</code> debe devolver 552506775824935500.
    testString: 'assert.strictEqual(euler414(), 552506775824935500, "<code>euler414()</code> should return 552506775824935500.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler414() {
  // Good luck!
  return true;
}

euler414();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

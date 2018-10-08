---
id: 5
localeTitle: 5900f4ba1000cf542c50ffcd
challengeType: 5
title: 'Problem 334: Spilling the beans'
---

## Description
<section id='description'> 
En el cielo de Platón, existe un número infinito de tazones en línea recta. 
Cada tazón contiene algunos o ninguno de un número finito de frijoles. 
Un niño juega un juego, que permite solo un tipo de movimiento: quitar dos frijoles de cualquier tazón y colocar uno en cada uno de los dos tazones adyacentes. El juego termina cuando cada tazón contiene uno o ninguno de los frijoles. 

Por ejemplo, considere dos tazones adyacentes que contienen 2 y 3 frijoles respectivamente, todos los otros tazones están vacíos. Los siguientes ocho movimientos terminarán el juego: 



Tienes las siguientes secuencias: 
t0 = 123456. 


ti = 




















































es par 



ti-12 



926252, 


si ti-1 es impar 





donde ⌊x⌋ es la función de piso 




y es el operador de XOR a nivel de bits. 


bi = (ti mod 211) + 1. 

Los dos primeros términos de la última secuencia son b1 = 289 y b2 = 145. 
Si comenzamos con frijoles b1 y b2 en dos tazones adyacentes, 3419100 movimientos serían Necesario para terminar el juego. 

Considere ahora 1500 tazones adyacentes que contienen b1, b2, ..., frijoles b1500 respectivamente, todos los otros tazones están vacíos. Encuentra cuántos movimientos se necesitan antes de que termine el juego. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler334()</code> debe devolver 150320021261690850.
    testString: 'assert.strictEqual(euler334(), 150320021261690850, "<code>euler334()</code> should return 150320021261690850.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler334() {
  // Good luck!
  return true;
}

euler334();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

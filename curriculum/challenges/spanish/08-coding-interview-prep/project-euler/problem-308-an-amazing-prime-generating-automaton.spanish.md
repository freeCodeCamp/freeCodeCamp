---
id: 5
localeTitle: 5900f4a11000cf542c50ffb3
challengeType: 5
title: 'Problem 308: An amazing Prime-generating Automaton'
---

## Description
<section id='description'> 
Un programa escrito en el lenguaje de programación Fractran consiste en una lista de fracciones. 

El estado interno de la máquina virtual de Fractran es un entero positivo, que inicialmente se establece en un valor semilla. Cada iteración de un programa Fractran multiplica el número entero de estado por la primera fracción en la lista que lo dejará como un número entero. 

Por ejemplo, uno de los programas de Fractran que John Horton Conway escribió para la generación principal consiste en las siguientes 14 fracciones: 1791 
, 
7885 
, 
1951 
, 
2338 
, 
2933 
, 
7729 
, 
9523 
, 
7719 
, 
117 
, 
1113 
, 
1311 
, 
152 
, 
17 
, 
551 
. 
Comenzando con el entero de la semilla 2, las iteraciones sucesivas del programa producen la secuencia: 
15, 825, 725, 1925, 2275, 425, ..., 68, 4, 30, ..., 136, 8, 60, ..., 544, 32, 240, ... 

Las potencias de 2 que aparecen en esta secuencia son 22, 23, 25, ... 
Se puede mostrar que todas las potencias de 2 en esta secuencia tienen primos ¡Los exponentes y que todos los primos aparecen como exponentes de potencias de 2, en el orden correcto! 

Si alguien usa el programa Fractran anterior para resolver el Problema 7 del Proyecto Euler (encuentra el primer número 10001), ¿cuántas iteraciones se necesitarían hasta que el programa produzca el primer número 210001? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler308()</code> debe devolver 1539669807660924.
    testString: 'assert.strictEqual(euler308(), 1539669807660924, "<code>euler308()</code> should return 1539669807660924.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler308() {
  // Good luck!
  return true;
}

euler308();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

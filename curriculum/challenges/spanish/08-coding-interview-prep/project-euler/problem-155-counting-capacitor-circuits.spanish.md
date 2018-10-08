---
id: 5
localeTitle: 5900f4081000cf542c50ff1a
challengeType: 5
title: 'Problem 155: Counting Capacitor Circuits'
---

## Description
<section id='description'> 
Un circuito eléctrico utiliza exclusivamente condensadores idénticos del mismo valor C. 

Los condensadores se pueden conectar en serie o en paralelo para formar subunidades, que luego se pueden conectar en serie o en paralelo con otros condensadores u otras subunidades para formar subunidades más grandes, y así sucesivamente hasta un circuito final. 
Usando este procedimiento simple y hasta n capacitores idénticos, podemos hacer circuitos que tengan un rango de diferentes capacitancias totales. Por ejemplo, usando hasta n = 3 capacitores de 60 F cada uno, podemos obtener los siguientes 7 valores de capacitancia total distintos: 

Si denotamos con D (n) el número de valores de capacitancia total distintos que podemos obtener cuando se usa hasta En los capacitores de igual valor y el procedimiento simple descrito anteriormente, tenemos: D (1) = 1, D (2) = 3, D (3) = 7 ... 
Encuentre D (18). 
Recordatorio: cuando se conectan los condensadores C1, C2, etc. en paralelo, la capacitancia total es CT = C1 + C2 + ..., 

mientras que al conectarlos en serie, la capacitancia total viene dada por: 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler155()</code> debe devolver 3857447.
    testString: 'assert.strictEqual(euler155(), 3857447, "<code>euler155()</code> should return 3857447.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler155() {
  // Good luck!
  return true;
}

euler155();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

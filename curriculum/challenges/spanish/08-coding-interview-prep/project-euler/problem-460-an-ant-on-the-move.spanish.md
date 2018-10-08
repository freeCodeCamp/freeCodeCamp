---
id: 5
localeTitle: 5900f5381000cf542c51004b
challengeType: 5
title: 'Problem 460: An ant on the move'
---

## Description
<section id='description'> 
En el plano euclidiano, una hormiga viaja desde el punto A (0, 1) al punto B (d, 1) para un entero d. 


En cada paso, la hormiga en el punto (x0, y0) elige uno de los puntos de la red (x1, y1) que satisfacen x1 ≥ 0 e y1 ≥ 1 y va directo a (x1, y1) a una velocidad constante v El valor de v depende de y0 y y1 de la siguiente manera: 
Si y0 = y1, el valor de v es igual a y0. 
Si y0 ≠ y1, el valor de v es igual a (y1 - y0) / (ln (y1) - ln (y0)). 

La imagen de la izquierda es una de las rutas posibles para d = 4. Primero, la hormiga va de A (0, 1) a P1 (1, 3) a velocidad (3 - 1) / (ln (3) - ln ( 1) ≈ 1.8205. Entonces el tiempo requerido es sqrt (5) / 1.8205 ≈ 1.2283. 
Desde P1 (1, 3) a P2 (3, 3), la hormiga viaja a la velocidad 3, por lo que el tiempo requerido es 2/3 ≈ 0.6667. De P2 (3, 3) a B (4, 1) la hormiga viaja a la velocidad (1 - 3) / (ln (1) - ln (3)) ≈ 1.8205, por lo que el tiempo requerido es sqrt (5) / 1.8205 1.2283. 
Por lo tanto, el tiempo total requerido es 1.2283 + 0.6667 + 1.2283 = 3.1233. 


La imagen de la derecha es otro camino. El tiempo total requerido se calcula como 0.98026 + 1 + 0.98026 = 2.96052. Se puede mostrar que esta es la ruta más rápida para d = 4. 



Sea F (d) el tiempo total requerido si la hormiga elige la ruta más rápida. Por ejemplo, F (4) ≈ 2.960516287. 
Podemos verificar que F (10) ≈ 4.668187834 y F (100) ≈ 9.217221972. 


Encuentra F (10000). Da tu respuesta redondeada a nueve lugares decimales. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler460()</code> debe devolver 18.420738199.
    testString: 'assert.strictEqual(euler460(), 18.420738199, "<code>euler460()</code> should return 18.420738199.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler460() {
  // Good luck!
  return true;
}

euler460();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

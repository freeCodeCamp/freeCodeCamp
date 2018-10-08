---
id: 5
localeTitle: 5900f3fc1000cf542c50ff0f
challengeType: 5
title: 'Problem 144: Investigating multiple reflections of a laser beam'
---

## Description
<section id='description'> 
En la física del láser, una &quot;célula blanca&quot; es un sistema de espejo que actúa como una línea de retardo para el rayo láser. El rayo entra en la celda, rebota en los espejos y eventualmente vuelve a salir. 
La celda blanca específica que consideraremos es una elipse con la ecuación 4x2 + y2 = 100 
Falta la sección correspondiente a −0.01 ≤ x ≤ +0.01 en la parte superior, lo que permite que la luz entre y salga por el orificio. 

El haz de luz en este problema comienza en el punto (0.0,10.1) justo fuera de la celda blanca, y el haz primero impacta al espejo en (1.4, -9.6). 
Cada vez que el rayo láser golpea la superficie de la elipse, sigue la ley usual de reflexión: &quot;ángulo de incidencia es igual a ángulo de reflexión&quot;. Es decir, tanto el haz incidente como el reflejado forman el mismo ángulo con la línea normal en el punto de incidencia. 
En la figura de la izquierda, la línea roja muestra los dos primeros puntos de contacto entre el rayo láser y la pared de la célula blanca; la línea azul muestra la línea tangente a la elipse en el punto de incidencia del primer rebote. La pendiente m de la línea tangente en cualquier punto (x, y) de la elipse dada es: m = −4x / y La línea normal es Perpendicular a esta línea tangente en el punto de incidencia. 
La animación de la derecha muestra las 10 primeras reflexiones de la viga. 

¿Cuántas veces el haz golpea la superficie interna de la célula blanca antes de salir? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler144()</code> debe devolver 354.
    testString: 'assert.strictEqual(euler144(), 354, "<code>euler144()</code> should return 354.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler144() {
  // Good luck!
  return true;
}

euler144();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

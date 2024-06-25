---
id: 5900f3fc1000cf542c50ff0f
title: 'Problema 144: Investigando múltiples reflexiones de un rayo láser'
challengeType: 1
forumTopicId: 301773
dashedName: problem-144-investigating-multiple-reflections-of-a-laser-beam
---

# --description--

In laser physics, a "white cell" is a mirror system that acts as a delay line for the laser beam. The beam enters the cell, bounces around on the mirrors, and eventually works its way back out.

La celda blanca específica a ser considerada es una elipse con la ecuación $4{x}^2 + y^2 = 100$

La sección correspondiente a $−0.01 ≤ x ≤ +0.01$ en lo alto está ausente, permitiendo a la luz entrar y salir a través del agujero.

<div style="text-align: center">
  <img class="img-responsive center-block" alt="light beam starting at point (0.0, 10.1), and impacting the mirror at point (1.4, -9.6)" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-1.png" style="display: inline-block; background-color: white; padding: 10px;">
  <img class="img-responsive center-block" alt="animación con los primeros 10 reflexiones de el haz" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-2.gif" style="display: inline-block; background-color: white; padding: 10px;">
</div><br>

El haz de luz en este problema inicia en el punto (0.0, 10.1) justo por fuera de la celda blanca, y el haz primero impacta al espejo en (1.4, -9.6).

Cada vez que el rayo láser golpea la superficie de la elipse, ste sigue las ley usual de la reflexión "ángulo de incidencia es igual al ángulo de reflexión." Es decir, ambos el incidente y el haz reflejado hacen el mismo ángulo con la línea normal en el punto de incidencia.

En la figura de la izquierda, la línea muestra los dos primeros puntos de contacto entre el rayo láser y la pared de la celda blanca; la línea azul muestra la línea tangente hacia la elipse en el punto de incidencia de el primer rebote.

La pendiente m de la línea tangente en cualquier punto (x, y) de la elipse dada es: $m = −4 × \frac{x}{y}$

La línea normal es perpendicular a esta línea tangente en el punto de incidencia.

La animación sobre la derecha muestra las primeras 10 reflexiones de el haz.

¿Cuántas veces el haz golpea la superficie interna de la celda blanca antes de salir?

# --hints--

`laserBeamReflections()` debería devolver `354`.

```js
assert.strictEqual(laserBeamReflections(), 354);
```

# --seed--

## --seed-contents--

```js
function laserBeamReflections() {

  return true;
}

laserBeamReflections();
```

# --solutions--

```js
// solution required
```

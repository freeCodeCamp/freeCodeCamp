---
title: Euler method
id: 59880443fb36441083c6c20e
challengeType: 5
videoUrl: ''
localeTitle: Metodo de euler
---

## Description
<section id="description"><p> El método de Euler aproxima numéricamente las soluciones de ecuaciones diferenciales ordinarias de primer orden (EDO) con un valor inicial dado. Es un método explícito para resolver problemas de valor inicial (IVP), como se describe en <a href="https://en.wikipedia.org/wiki/Euler method" title="wp: método de euler">la página de wikipedia</a> . </p><p> La EDO debe ser proporcionada en la siguiente forma: </p><p> :: <big>$ \ frac {dy (t)} {dt} = f (t, y (t)) $</big> </p><p> con un valor inicial </p><p> :: <big>$ y (t_0) = y_0 $</big> </p><p> Para obtener una solución numérica, reemplazamos el derivado en LHS con una aproximación de diferencias finitas: </p><p> :: <big>$ \ frac {dy (t)} {dt} \ approx \ frac {y (t + h) -y (t)} {h} $</big> </p><p> luego resuelva por $ y (t + h) $: </p><p> :: <big>$ y (t + h) \ approx y (t) + h \, \ frac {dy (t)} {dt} $</big> </p><p> que es lo mismo que </p><p> :: <big>$ y (t + h) \ approx y (t) + h \, f (t, y (t)) $</big> </p><p> La regla de solución iterativa es entonces: </p><p> :: <big>$ y_ {n + 1} = y_n + h \, f (t_n, y_n) $</big> </p><p> donde <big>$ h $</big> es el tamaño del paso, el parámetro más relevante para la precisión de la solución. Un tamaño de paso más pequeño aumenta la precisión, pero también el costo de cómputo, por lo que siempre tiene que ser seleccionado de acuerdo con el problema en cuestión. </p><p> Ejemplo: Ley de enfriamiento de Newton </p><p> La ley de enfriamiento de Newton describe cómo un objeto de temperatura inicial <big>$ T (t_0) = T_0 $ se</big> enfría en un entorno de temperatura <big>$ T_R $</big> : </p><p> :: <big>$ \ frac {dT (t)} {dt} = -k \, \ Delta T $</big> </p><p> o </p><p> :: <big>$ \ frac {dT (t)} {dt} = -k \, (T (t) - T_R) $</big> </p><p> Dice que la tasa de enfriamiento <big>$ \ frac {dT (t)} {dt} $</big> del objeto es proporcional a la diferencia de temperatura actual <big>$ \ Delta T = (T (t) - T_R) $</big> al entorno circundante. </p><p> La solución analítica, que compararemos con la aproximación numérica, es </p><p> :: <big>$ T (t) = T_R + (T_0 - T_R) \; e ^ {- kt} $</big> </p> Tarea: <p> Implemente una rutina del método de Euler y luego úselo para resolver el ejemplo dado de la ley de enfriamiento de Newton para tres tamaños de pasos diferentes de: </p><p> :: * 2 s </p><p> :: * 5 sy </p><p> :: * 10 s </p><p> y comparar con la solución analítica. </p> Valores iniciales: <p> :: * temperatura inicial <big>$ T_0 $</big> será de 100 ° C </p><p> :: * temperatura ambiente <big>$ T_R $</big> será 20 ° C </p><p> :: * constante de refrigeración <big>$ k $</big> será 0.07 </p><p> :: * El intervalo de tiempo para calcular será de 0 s ──► 100 s </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eulersMethod</code> es una función.
    testString: 'assert(typeof eulersMethod === "function", "<code>eulersMethod</code> is a function.");'
  - text: '<code>eulersMethod(0, 100, 100, 10)</code> debe devolver un número.'
    testString: 'assert(typeof eulersMethod(0, 100, 100, 10) === "number", "<code>eulersMethod(0, 100, 100, 10)</code> should return a number.");'
  - text: '<code>eulersMethod(0, 100, 100, 10)</code> debe devolver 20.0424631833732.'
    testString: 'assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732, "<code>eulersMethod(0, 100, 100, 10)</code> should return 20.0424631833732.");'
  - text: '<code>eulersMethod(0, 100, 100, 10)</code> debe devolver 20.01449963666907.'
    testString: 'assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907, "<code>eulersMethod(0, 100, 100, 10)</code> should return 20.01449963666907.");'
  - text: '<code>eulersMethod(0, 100, 100, 10)</code> debe devolver 20.000472392.'
    testString: 'assert.equal(eulersMethod(0, 100, 100, 10), 20.000472392, "<code>eulersMethod(0, 100, 100, 10)</code> should return 20.000472392.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eulersMethod (x1, y1, x2, h) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

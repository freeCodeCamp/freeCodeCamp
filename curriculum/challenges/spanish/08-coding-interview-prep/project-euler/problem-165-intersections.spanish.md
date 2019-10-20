---
id: 5900f4111000cf542c50ff24
challengeType: 5
title: 'Problem 165: Intersections'
videoUrl: ''
localeTitle: 'Problema 165: Intersecciones'
---

## Description
<section id="description"> Un segmento está definido de forma única por sus dos puntos finales. Al considerar dos segmentos de línea en la geometría plana, hay tres posibilidades: los segmentos tienen cero puntos, un punto o infinitos puntos en común. Además, cuando dos segmentos tienen exactamente un punto en común, puede darse el caso de que ese punto común sea un punto final de uno de los segmentos o de ambos. Si un punto común de dos segmentos no es un punto final de cualquiera de los segmentos, es un punto interior de ambos segmentos. Llamaremos a un punto común T de dos segmentos L1 y L2 un verdadero punto de intersección de L1 y L2 si T es el único punto común de L1 y L2 y T es un punto interior de ambos segmentos. <p> Considere los tres segmentos L1, L2 y L3: L1: (27, 44) a (12, 32) L2: (46, 53) a (17, 62) L3: (46, 70) a (22, 40) Se puede verificar que los segmentos de línea L2 y L3 tienen un verdadero punto de intersección. Notamos que como uno de los puntos finales de L3: (22,40) se encuentra en L1, esto no se considera un verdadero punto de intersección. L1 y L2 no tienen un punto común. Entonces, entre los tres segmentos de línea, encontramos un verdadero punto de intersección. Ahora hagamos lo mismo para 5000 segmentos de línea. Para este fin, generamos 20000 números utilizando el llamado generador de números pseudoaleatorios llamado &quot;Blum Blum Shub&quot;. s0 = 290797 sn + 1 = sn × sn (modulo 50515093) tn = sn (modulo 500) Para crear cada segmento de línea, usamos cuatro números consecutivos tn. Es decir, el primer segmento de línea viene dado por: (t1, t2) a (t3, t4) Los primeros cuatro números calculados de acuerdo con el generador anterior deberían ser: 27, 144, 12 y 232. El primer segmento sería así ( 27,144) a (12,232). ¿Cuántos puntos de intersección verdaderos distintos se encuentran entre los 5000 segmentos de línea? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler165()</code> debe devolver 2868868.
    testString: 'assert.strictEqual(euler165(), 2868868, "<code>euler165()</code> should return 2868868.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler165() {
  // Good luck!
  return true;
}

euler165();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

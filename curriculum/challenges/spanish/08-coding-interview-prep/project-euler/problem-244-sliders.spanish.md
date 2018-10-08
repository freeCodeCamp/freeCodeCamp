---
id: 5
localeTitle: 5900f4601000cf542c50ff72
challengeType: 5
title: 'Problem 244: Sliders'
---

## Description
<section id='description'> 
Probablemente conozcas el juego Quince Puzzle. Aquí, en lugar de fichas numeradas, tenemos siete fichas rojas y ocho fichas azules. 
Un movimiento se indica con la inicial en mayúscula de la dirección (Izquierda, Derecha, Arriba, Abajo) en la que se desliza el mosaico, por ejemplo, a partir de la configuración (S), por la secuencia LULUR llegamos a la configuración (E): 

(S), (E) 


Para cada ruta, su suma de control se calcula mediante (pseudocódigo): 

suma de control = 0 
suma de control = (suma de control × 243 + m1) mod 100 000 007 
suma de control = (suma de control × 243 + m2) mod 100 000 007 
… 
suma de comprobación = (suma de control × 243 + mn) mod 100 000 007 
donde mk es el valor ASCII de la letra kth en la secuencia de movimientos y los valores ASCII para los movimientos son: 


L76R82U85D68 

Para la secuencia LULUR dada anteriormente, la suma de control sería 19761398. 
Ahora, a partir de la configuración (S), 
encuentra todas las formas más cortas para alcanzar la configuración (T). 

(S), (T) 


¿Cuál es la suma de todas las sumas de comprobación para las rutas que tienen la longitud mínima? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler244()</code> debe devolver 96356848.
    testString: 'assert.strictEqual(euler244(), 96356848, "<code>euler244()</code> should return 96356848.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler244() {
  // Good luck!
  return true;
}

euler244();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

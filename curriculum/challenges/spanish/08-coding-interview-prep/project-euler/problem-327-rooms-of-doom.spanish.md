---
id: 5
localeTitle: 5900f4b31000cf542c50ffc6
challengeType: 5
title: 'Problem 327: Rooms of Doom'
---

## Description
<section id='description'> 
Una serie de tres habitaciones están conectadas entre sí por puertas automáticas. 



Cada puerta es operada por una tarjeta de seguridad. Una vez que ingresa a una habitación, la puerta se cierra automáticamente y esa tarjeta de seguridad no se puede usar nuevamente. Al comienzo, una máquina entregará un número ilimitado de tarjetas, pero cada sala (incluida la sala de inicio) contiene escáneres y si detectan que tiene más de tres tarjetas de seguridad o si detectan una tarjeta de seguridad desatendida en el piso, entonces Todas las puertas quedarán cerradas permanentemente. Sin embargo, cada habitación contiene una caja donde puede guardar de forma segura cualquier número de tarjetas de seguridad para usarlas en una etapa posterior. 

Si simplemente tratara de viajar a través de las habitaciones una a la vez, al ingresar a la habitación 3, ¡habría usado las tres tarjetas y quedaría atrapado en esa habitación para siempre! 

Sin embargo, si hace uso de las cajas de almacenamiento, entonces es posible escapar. Por ejemplo, puede ingresar a la sala 1 usando su primera tarjeta, colocar una en la caja de almacenamiento y usar su tercera tarjeta para salir de la habitación de regreso al inicio. Luego, después de recoger tres tarjetas más de la máquina dispensadora, puede usar una para ingresar a la sala 1 y recoger la tarjeta que colocó en la caja hace un momento. Ahora tienes tres cartas de nuevo y podrás viajar a través de las tres puertas restantes. Este método le permite viajar a través de las tres habitaciones utilizando seis tarjetas de seguridad en total. 

Es posible viajar a través de seis habitaciones con un total de 123 tarjetas de seguridad mientras se lleva un máximo de 3 tarjetas. 

Sea C el número máximo de tarjetas que se pueden llevar en cualquier momento. 
Sea R el número de habitaciones por las que viajar. 
Deje que M (C, R) sea el número mínimo de tarjetas requeridas por la máquina dispensadora para viajar a través de las salas R, con un máximo de tarjetas C en cualquier momento. 

Por ejemplo, M (3,6) = 123 y M (4,6) = 23.Y, ΣM (C, 6) = 146 para 3 ≤ C ≤ 4. 


Se le da que ΣM (C , 10) = 10382 para 3 ≤ C ≤ 10. 

Encuentre ΣM (C, 30) para 3 ≤ C ≤ 40. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler327()</code> debe devolver 34315549139516.
    testString: 'assert.strictEqual(euler327(), 34315549139516, "<code>euler327()</code> should return 34315549139516.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler327() {
  // Good luck!
  return true;
}

euler327();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

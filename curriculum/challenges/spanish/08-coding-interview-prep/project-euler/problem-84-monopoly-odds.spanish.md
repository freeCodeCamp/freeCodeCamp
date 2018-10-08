---
id: 5
localeTitle: 5900f3c11000cf542c50fed3
challengeType: 5
title: 'Problem 84: Monopoly odds'
---

## Description
<section id='description'> 
En el juego, Monopoly, el tablero estándar se configura de la siguiente manera: 

GO 
A1 
CC1 
A2 
T1 
R1 
B1 
CH1 
B2 
B3 
JAIL 
H2 

C1 
T2 

U1 
H1 

C2 
CH3 

C3 
R4 

R2 
G3 

D1 
CC3 

CC2 
G2 

D2 
G1 

D3 
G2J 
F3 
U2 
F2 
F1 
R3 
E3 
E2 
CH2 
E1 
FP 

Un jugador comienza en la casilla GO y agrega las puntuaciones en dos dados de 6 lados para determinar la cantidad de casillas que avanzan en el sentido de las agujas del reloj. Sin más reglas, esperaríamos visitar cada cuadrado con la misma probabilidad: 2.5%. Sin embargo, aterrizar en G2J (Ir a la cárcel), CC (cofre de la comunidad) y CH (probabilidad) cambia esta distribución. 
Además de G2J, y una tarjeta de cada uno de CC y CH, que ordena al jugador ir directamente a la cárcel, si un jugador saca tres dobles consecutivos, no adelanta el resultado de su tercera tirada. En su lugar, proceden directamente a la cárcel. 
Al comienzo del juego, las cartas CC y CH se barajan. Cuando un jugador cae en CC o CH, toma una carta de la parte superior de la pila respectiva y, después de seguir las instrucciones, se devuelve a la parte inferior de la pila. Hay dieciséis cartas en cada pila, pero para el propósito de este problema solo nos interesan las cartas que ordenan un movimiento; cualquier instrucción que no esté relacionada con el movimiento será ignorada y el jugador permanecerá en la casilla CC / CH. 
Cofre de la comunidad (2/16 tarjetas): 
Avanzar a GO 
Ir a CARRETERA 

Chance (10/16 tarjetas): 
Avanzar a GO 
Ir a JAIL 
Ir a C1 
Ir a E3 
Ir a H2 
Ir a R1 
Ir a la siguiente R (compañía ferroviaria) 
Ir a la siguiente R 
Ir a la siguiente U (empresa de servicios) 
Volver 3 casillas. 

El corazón de este problema se refiere a la probabilidad de visitar una plaza en particular. Es decir, la probabilidad de terminar en esa casilla después de una tirada. Por esta razón, debe quedar claro que, con la excepción de G2J para la cual la probabilidad de terminar es cero, los cuadrados CH tendrán las probabilidades más bajas, ya que 5/8 solicita un movimiento a otro cuadrado, y es el final cuadrada en la que el jugador termina en cada tirada en la que estamos interesados. No haremos distinción entre &quot;Sólo visitar&quot; y ser enviado a la CÁRCEL, y también ignoraremos la regla de exigir un doble para &quot;salir de la cárcel&quot;, asumiendo que pagan para salir en su próximo turno. 
Comenzando en GO y numerando los cuadrados secuencialmente de 00 a 39, podemos concatenar estos números de dos dígitos para producir cadenas que correspondan con conjuntos de cuadrados. 
Estadísticamente se puede mostrar que los tres cuadrados más populares, en orden, son JAIL (6.24%) = Cuadrado 10, E3 (3.18%) = Cuadrado 24, y GO (3.09%) = Cuadrado 00. Entonces estos tres más populares los cuadrados se pueden enumerar con la cadena modal de seis dígitos: 102400. 
Si, en lugar de usar dos dados de 6 lados, se usan dos dados de 4 lados, encuentre la cadena modal de seis dígitos. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler84()</code> debe devolver 101524.
    testString: 'assert.strictEqual(euler84(), 101524, "<code>euler84()</code> should return 101524.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler84() {
  // Good luck!
  return true;
}

euler84();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 5
localeTitle: 5900f4a71000cf542c50ffba
challengeType: 5
title: 'Problem 315: Digital root clocks'
---

## Description
<section id='description'> 
Sam y Max se les pide que transformen dos relojes digitales en dos relojes de &quot;raíz digital&quot;. 
Un reloj de raíz digital es un reloj digital que calcula las raíces digitales paso a paso. 

Cuando un reloj recibe un número, lo mostrará y luego iniciará el cálculo, mostrando todos los valores intermedios hasta que llegue al resultado. 
Por ejemplo, si el reloj se alimenta con el número 137, mostrará: &quot;137&quot; → &quot;11&quot; → &quot;2&quot; y luego se apagará, esperando el próximo número. 

Cada número digital consta de algunos segmentos luminosos: tres horizontales (superior, central, inferior) y cuatro verticales (superior izquierda, superior derecha, inferior izquierda, inferior derecha). 
número &quot;1&quot; está hecho de vertical arriba a la derecha y abajo a la derecha, el número &quot;4&quot; está formado por medio horizontal y vertical arriba a la izquierda, arriba a la derecha y abajo a la derecha. El número &quot;8&quot; los enciende a todos. 

Los relojes consumen energía solo cuando los segmentos están activados / desactivados. 
Activar un &quot;2&quot; costará 5 transiciones, mientras que un &quot;7&quot; costará solo 4 transiciones. 

Sam y Max construyeron dos relojes diferentes. 

El reloj de Sam se alimenta, por ejemplo, el número 137: el reloj muestra &quot;137&quot;, luego el panel se apaga, luego el siguiente número (&quot;11&quot;) se enciende, luego el panel se apaga de nuevo y finalmente el último número ( &quot;2&quot;) se enciende y, después de algún tiempo, se apaga. 
Para el ejemplo, con el número 137, el reloj de Sam requiere: &quot;137&quot; 
: 
(2 + 5 + 4) × 2 = 22 transiciones (&quot;137&quot; encendido / apagado). 
&quot;11&quot; 
: 
(2 + 2) × 2 = 8 transiciones (&quot;11&quot; encendido / apagado). 
&quot;2&quot; 
: 
(5) × 2 = 10 transiciones (&quot;2&quot; encendido / apagado). 

Para un total de 40 transiciones. 

El reloj de Max funciona de manera diferente. En lugar de apagar todo el panel, es lo suficientemente inteligente como para apagar solo aquellos segmentos que no serán necesarios para el siguiente número. 
Para el número 137, el reloj de Max requiere: &quot;137&quot; 
: 
2 + 5 + 4 = 11 transiciones (&quot;137&quot; activado) 
7 transiciones (para desactivar los segmentos que no son necesarios para el número &quot;11&quot;). 
&quot;11&quot; 
: 
0 transiciones (el número &quot;11&quot; ya está activado correctamente) 
3 transiciones (para desactivar el primer &quot;1&quot; y la parte inferior del segundo &quot;1&quot;; 
la parte superior es común con Número 2&quot;). 
&quot;2&quot; 
: 
4 transiciones (para activar los segmentos restantes para obtener un &quot;2&quot;) 
5 transiciones (para desactivar el número &quot;2&quot;). 

Para un total de 30 transiciones. 

Por supuesto, el reloj de Max consume menos energía que el de Sam. 
Los dos relojes se alimentan de todos los números primos entre A = 107 y B = 2 × 107. 
Encuentra la diferencia entre el número total de transiciones que necesita el reloj de Sam y la que necesita Max para una. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler315()</code> debe devolver 13625242.
    testString: 'assert.strictEqual(euler315(), 13625242, "<code>euler315()</code> should return 13625242.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler315() {
  // Good luck!
  return true;
}

euler315();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

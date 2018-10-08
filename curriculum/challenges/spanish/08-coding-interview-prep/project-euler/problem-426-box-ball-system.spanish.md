---
id: 5
localeTitle: 5900f5171000cf542c510029
challengeType: 5
title: 'Problem 426: Box-ball system'
---

## Description
<section id='description'> 
Considera una fila infinita de cajas. Algunas de las cajas contienen una bola. Por ejemplo, una configuración inicial de 2 casillas ocupadas consecutivas seguidas de 2 casillas vacías, 2 casillas ocupadas, 1 casilla vacía y 2 casillas ocupadas se pueden denotar mediante la secuencia (2, 2, 2, 1, 2), en la que el número de casillas ocupadas y vacías consecutivas aparecen alternativamente. 


Un turno consiste en mover cada bola exactamente una vez de acuerdo con la siguiente regla: Transfiera la bola de la izquierda que no se haya movido a la casilla vacía más cercana a su derecha. 


Después de un giro, la secuencia (2, 2, 2, 1, 2) se convierte en (2, 2, 1, 2, 3) como se puede ver a continuación; Tenga en cuenta que comenzamos la nueva secuencia a partir de la primera casilla ocupada. 






Un sistema como este se denomina sistema Box-Ball o BBS para abreviar. 


Se puede mostrar que después de un número suficiente de turnos, el sistema evoluciona a un estado en el que los números consecutivos de casillas ocupadas son invariantes. En el siguiente ejemplo, los números consecutivos de cuadros ocupados evolucionan a [1, 2, 3]; Llamaremos a esto el estado final. 






Definimos la secuencia {ti}: s0 = 290797 
sk + 1 = sk2 mod 50515093 
tk = (sk mod 64) + 1 

A partir de la configuración inicial (t0, t1,…, t10), el estado final se convierte en [1, 3, 10, 24, 51, 75]. 
A partir de la configuración inicial (t0, t1,…, t10 000 000), encuentre el estado final. 
Da como respuesta la suma de los cuadrados de los elementos del estado final. Por ejemplo, si el estado final es [1, 2, 3], entonces 14 (= 12 + 22 + 32) es su respuesta. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler426()</code> debe devolver 31591886008.
    testString: 'assert.strictEqual(euler426(), 31591886008, "<code>euler426()</code> should return 31591886008.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler426() {
  // Good luck!
  return true;
}

euler426();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 5
localeTitle: 5900f49a1000cf542c50ffac
challengeType: 5
title: 'Problem 300: Protein folding'
---

## Description
<section id='description'> 
En una forma muy simplificada, podemos considerar las proteínas como cadenas que consisten en elementos hidrófobos (H) y polares (P), por ejemplo, HHPPHHHPHPHPH. 
Para este problema, la orientación de una proteína es importante; Por ejemplo, HPP se considera distinto de PPH. Por lo tanto, hay 2n proteínas distintas que consisten en n elementos. 

Cuando uno encuentra estas cadenas en la naturaleza, siempre se pliegan de tal manera que el número de puntos de contacto de HH sea lo más grande posible, ya que esto es energéticamente ventajoso. 
Como resultado, los elementos H tienden a acumularse en la parte interior, con los elementos P en el exterior. 
Las proteínas naturales están plegadas en tres dimensiones, por supuesto, pero solo consideraremos el plegamiento de proteínas en dos dimensiones. 

La siguiente figura muestra dos formas posibles de plegar nuestro ejemplo de proteína (los puntos de contacto HH se muestran con puntos rojos). 



El plegado de la izquierda tiene solo seis puntos de contacto HH, por lo que nunca ocurriría de forma natural. 
Por otro lado, el plegado a la derecha tiene nueve puntos de contacto HH, que es óptimo para esta cadena. 

Suponiendo que los elementos H y P tienen la misma probabilidad de ocurrir en cualquier posición a lo largo de la cadena, el número promedio de puntos de contacto HH en un plegamiento óptimo de una cadena de proteína aleatoria de longitud 8 resulta ser 850/28 = 3.3203125. 

¿Cuál es el número promedio de puntos de contacto HH en un plegamiento óptimo de una cadena de proteínas aleatoria de longitud 15? 
Da tu respuesta utilizando tantos decimales como sea necesario para obtener un resultado exacto. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler300()</code> debe devolver 8.0540771484375.
    testString: 'assert.strictEqual(euler300(), 8.0540771484375, "<code>euler300()</code> should return 8.0540771484375.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler300() {
  // Good luck!
  return true;
}

euler300();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

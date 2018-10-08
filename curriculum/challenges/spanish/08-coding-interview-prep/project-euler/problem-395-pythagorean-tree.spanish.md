---
id: 5
localeTitle: 5900f4f71000cf542c51000a
challengeType: 5
title: 'Problem 395: Pythagorean tree'
---

## Description
<section id='description'> 
El árbol de Pitágoras es un fractal generado por el siguiente procedimiento: 



Comienza con una unidad cuadrada. Luego, llamando a uno de los lados su base (en la animación, el lado inferior es la base): 
Coloque un triángulo rectángulo en el lado opuesto a la base, coincidiendo la hipotenusa con ese lado y los lados en un 3-4. -5 ratio. Tenga en cuenta que el lado más pequeño del triángulo debe estar en el lado &quot;derecho&quot; con respecto a la base (vea la animación). 
Coloque un cuadrado en cada pata del triángulo rectángulo, con uno de sus lados que coincida con esa pata. 
Repita este procedimiento para ambos cuadrados, considerando como sus bases los lados que tocan el triángulo. 

La figura resultante, después de un número infinito de iteraciones, es el árbol pitagórico. 





Se puede mostrar que existe al menos un rectángulo, cuyos lados son paralelos al cuadrado más grande del árbol de Pitágoras, que encierra el árbol de Pitágoras por completo. 


Encuentre el área más pequeña posible para tal rectángulo delimitador, y dé su respuesta redondeada a 10 decimales. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler395()</code> debe devolver 28.2453753155.
    testString: 'assert.strictEqual(euler395(), 28.2453753155, "<code>euler395()</code> should return 28.2453753155.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler395() {
  // Good luck!
  return true;
}

euler395();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

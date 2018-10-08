---
id: 5
localeTitle: 5900f53d1000cf542c510050
challengeType: 5
title: 'Problem 465: Polar polygons'
---

## Description
<section id='description'> 
El núcleo de un polígono se define por el conjunto de puntos desde los que se puede ver todo el límite del polígono. Definimos un polígono polar como un polígono para el cual el origen está estrictamente contenido dentro de su núcleo. 

Para este problema, un polígono puede tener vértices consecutivos colineales. Sin embargo, un polígono todavía no puede tener auto-intersección y no puede tener área cero. 

Por ejemplo, solo el primero de los siguientes es un polígono polar (los núcleos del segundo, tercero y cuarto no contienen estrictamente el origen y el quinto no tiene ningún núcleo): 



Aviso que el primer polígono tiene tres vértices colineales consecutivos. 

Sea P (n) el número de polígonos polares de manera que los vértices (x, y) tengan coordenadas enteras cuyos valores absolutos no sean mayores que n. 

Tenga en cuenta que los polígonos deben contarse como diferentes si tienen un conjunto diferente de bordes, incluso si encierran la misma área. Por ejemplo, el polígono con vértices [(0,0), (0,3), (1,1), (3,0)] es distinto del polígono con vértices [(0,0), (0,3 ), (1,1), (3,0), (1,0)]. 

Por ejemplo, P (1) = 131, P (2) = 1648531, P (3) = 1099461296175 y P (343) mod 1 000 000 007 = 937293740. 

Encuentre P (713) mod 1 000 000 007 . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler465()</code> debe devolver 585965659.
    testString: 'assert.strictEqual(euler465(), 585965659, "<code>euler465()</code> should return 585965659.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler465() {
  // Good luck!
  return true;
}

euler465();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

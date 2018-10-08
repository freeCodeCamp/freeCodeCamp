---
id: 5
localeTitle: 5900f4cd1000cf542c50ffe0
challengeType: 5
title: 'Problem 353: Risky moon'
---

## Description
<section id='description'> 
Una luna podría ser descrita por la esfera C (r) con centro (0,0,0) y radio r. 



Hay estaciones en la luna en los puntos de la superficie de C (r) con coordenadas enteras. La estación en (0,0, r) se llama estación del Polo Norte, la estación en (0,0, -r) se llama estación del Polo Sur. 



Todas las estaciones están conectadas entre sí a través de la carretera más corta en el gran arco a través de las estaciones. Un viaje entre dos estaciones es arriesgado. Si d es la longitud del camino entre dos estaciones, (d / (π r)) 2 es una medida del riesgo del viaje (llamémoslo riesgo del camino). Si el viaje incluye más de dos estaciones, el riesgo del viaje es la suma de los riesgos de las carreteras usadas. 



Un viaje directo desde la estación del Polo Norte a la estación del Polo Sur tiene la longitud de πr y riesgo 1. El viaje desde la estación del Polo Norte a la estación del Polo Sur a través de (0, r, 0) tiene la misma longitud, pero un riesgo menor: (½πr / (πr)) 2+ (½πr / (πr)) 2 = 0.5. 



El riesgo mínimo de un viaje desde la estación del Polo Norte a la estación del Polo Sur en C (r) es M (r). 



Se le da que M (7) = 0.1784943998 redondeado a 10 dígitos detrás del punto decimal. 



Encuentra ∑M (2n-1) para 1≤n≤15. 



Dé su respuesta redondeada a 10 dígitos detrás del punto decimal en la forma a.bcdefghijk. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler353()</code> debe devolver 1.2759860331.
    testString: 'assert.strictEqual(euler353(), 1.2759860331, "<code>euler353()</code> should return 1.2759860331.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler353() {
  // Good luck!
  return true;
}

euler353();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

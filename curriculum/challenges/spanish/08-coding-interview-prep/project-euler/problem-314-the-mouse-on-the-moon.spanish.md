---
id: 5
localeTitle: 5900f4a71000cf542c50ffb9
challengeType: 5
title: 'Problem 314: The Mouse on the Moon'
---

## Description
<section id='description'> 
Se ha abierto la luna, y la tierra se puede obtener gratis, pero hay una captura. Tienes que construir un muro alrededor de la tierra que cuidas, y construir un muro en la luna es costoso. A cada país se le ha asignado un área de 500 m por 500 m, pero solo poseerá esa área en la que se encierran. Se colocaron 251001 postes en una cuadrícula rectangular con un espacio de 1 metro. El muro debe ser una serie cerrada de líneas rectas, cada línea que se extiende de una publicación a otra. 


Los países más grandes, por supuesto, han construido un muro de 2000 m que abarca toda el área de 250 000 m2. El Ducado de Grand Fenwick tiene un presupuesto más ajustado y le ha pedido a usted (su Programador Real) que calcule qué forma obtendría la mejor relación máxima de área cerrada / pared. 


Has hecho algunos cálculos preliminares en una hoja de papel. 
Para una pared de 2000 metros que encierra el área de 250 000 m2, la relación 
área cerrada / longitud de pared es de 125. 
Aunque no está permitido, pero para tener una idea si es mejor: si coloca un círculo dentro del área cuadrada tocando los cuatro lados, el área será igual a π * 2502 m2 y el perímetro será π * 500 m, por lo que la relación de área encerrada / pared también será 125. 


Sin embargo, si se corta del área Cuadrados cuatro triángulos con lados 75 m, 75 my 75√2 ​​m, el área total se convierte en 238750 m2 y el perímetro se convierte en 1400 + 300√2 m. Por lo tanto, esto da una relación de área cerrada / pared de 130.87, que es significativamente mejor. 



Encuentre la relación máxima de área encerrada / longitud de pared. 
Dé su respuesta redondeada a 8 lugares detrás del punto decimal en el formulario abc.defghijk. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler314()</code> debe devolver 132.52756426.
    testString: 'assert.strictEqual(euler314(), 132.52756426, "<code>euler314()</code> should return 132.52756426.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler314() {
  // Good luck!
  return true;
}

euler314();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

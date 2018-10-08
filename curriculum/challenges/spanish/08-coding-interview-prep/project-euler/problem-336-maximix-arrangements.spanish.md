---
id: 5
localeTitle: 5900f4bd1000cf542c50ffcf
challengeType: 5
title: 'Problem 336: Maximix Arrangements'
---

## Description
<section id='description'> 
Se utiliza un tren para transportar cuatro vagones en el pedido: ABCD. Sin embargo, a veces, cuando el tren llega para recoger los vagones, no están en el orden correcto. 
Para reorganizar los carros, todos ellos están en derivación en un gran plato giratorio giratorio. Una vez que los vagones se desacoplan en un punto específico, el tren se desplaza de la plataforma giratoria y tira de los vagones que todavía están unidos. Los carros restantes se giran 180 grados. Todos los carros se vuelven a unir y este proceso se repite tantas veces como sea necesario para obtener el menor número de usos de la plataforma giratoria. 
Algunas disposiciones, como ADCB, se pueden resolver fácilmente: los carros se separan entre A y D, y después de rotar DCB se ha logrado el orden correcto. 

Sin embargo, Simple Simon, el conductor del tren, no es conocido por su eficiencia, por lo que siempre resuelve el problema colocando inicialmente el carro A en el lugar correcto, luego el carro B, y así sucesivamente. 

Usando cuatro carros, los peores arreglos posibles para Simon, que llamaremos arreglos Maximix, son DACB y DBAC; Cada uno de ellos requirió cinco rotaciones (aunque, utilizando el enfoque más eficiente, podrían resolverse usando solo tres rotaciones). El proceso que utiliza para DACB se muestra a continuación. 




Se puede verificar que hay 24 arreglos de maximix para seis carros, de los cuales el décimo arreglo leixográfico de maximix es DFAECB. 

Encuentre el arreglo de maximix lexicográfico 2011 para once carros. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler336()</code> debe devolver CAGBIHEFJDK.
    testString: 'assert.strictEqual(euler336(), CAGBIHEFJDK, "<code>euler336()</code> should return CAGBIHEFJDK.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler336() {
  // Good luck!
  return true;
}

euler336();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

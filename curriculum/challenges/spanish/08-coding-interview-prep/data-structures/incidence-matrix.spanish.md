---
id: 587d8256367417b2b2512c79
title: Incidence Matrix
challengeType: 1
videoUrl: ''
localeTitle: Matriz de incidencia
---

## Description
<section id="description"> Otra forma de representar una gráfica es colocarla en una <dfn>matriz de incidencia.</dfn> Una <dfn>matriz de incidencia</dfn> es una <dfn>matriz</dfn> bidimensional (2D). En términos generales, una matriz de incidencia relaciona dos clases diferentes de objetos entre sus dos dimensiones. Este tipo de matriz es similar a una matriz de adyacencia. Sin embargo, las filas y columnas significan algo más aquí. En las gráficas, tenemos aristas y nodos. Estas serán nuestras &quot;dos clases diferentes de objetos&quot;. Esta matriz tendrá las filas, los nodos y las columnas, los bordes. Esto significa que podemos tener un número desigual de filas y columnas. Cada columna representará un borde único. Además, cada borde conecta dos nodos. Para mostrar que hay un borde entre dos nodos, colocará un 1 en las dos filas de una columna en particular. A continuación se muestra un gráfico de 3 nodos con un borde entre el nodo 1 y el nodo 3. <blockquote> 1 <br> --- <br> 1 | 1 <br> 2 | 0 <br> 3 | 1 </blockquote> Aquí hay un ejemplo de una <code>incidence matrix</code> con 4 aristas y 4 nodos. Recuerde, las columnas son los bordes y las filas son los nodos mismos. <blockquote> 1 2 3 4 <br> -------- <br> 1 | 0 1 1 1 <br> 2 | 1 1 0 0 <br> 3 | 1 0 0 1 <br> 4 | 0 0 1 0 </blockquote> A continuación se muestra una implementación de JavaScript de la misma cosa. <blockquote> var incMat = [ <br> [0, 1, 1, 1], <br> [1, 1, 0, 0], <br> [1, 0, 0, 1], <br> [0, 0, 1, 0] <br> ]; </blockquote> Para hacer un gráfico dirigido, use <code>-1</code> para un borde que sale de un nodo particular y <code>1</code> para un borde que ingresa a un nodo. <blockquote> var incMatDirected = [ <br> [0, -1, 1, -1], <br> [-1, 1, 0, 0], <br> [1, 0, 0, 1], <br> [0, 0, -1, 0] <br> ]; </blockquote> Los gráficos también pueden tener <dfn>pesos</dfn> en sus bordes. Hasta ahora, tenemos bordes <dfn>no ponderados</dfn> donde solo la presencia y la falta de borde es binaria ( <code>0</code> o <code>1</code> ). Puede tener diferentes pesos dependiendo de su aplicación. Un peso diferente se representa como números mayores que 1. </section>

## Instructions
<section id="instructions"> Cree una matriz de incidencia de un gráfico no dirigido con cinco nodos y cuatro bordes. Esta matriz debe estar en una matriz multidimensional. Estos cinco nodos tienen relaciones siguiendo relaciones El primer borde está entre el primer y el segundo nodo. El segundo borde está entre el segundo y tercer nodo. El tercer borde está entre el tercer y quinto nodo. Y el borde cuatro está entre el cuarto y el segundo nodo. Todos los pesos de borde son uno y el orden de borde es importante. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>incMatUndirected</code> solo debe contener cinco nodos.
    testString: 'assert((incMatUndirected.length === 5) && incMatUndirected.map(function(x) { return x.length === 4 }).reduce(function(a, b) { return a && b }) , "<code>incMatUndirected</code> should only contain five nodes.");'
  - text: Debe haber un primer borde entre el primer y el segundo nodo.
    testString: 'assert((incMatUndirected[0][0] === 1) && (incMatUndirected[1][0] === 1), "There should be a first edge between the first and second node.");'
  - text: Debe haber un segundo borde entre el segundo y tercer nodo.
    testString: 'assert((incMatUndirected[1][1] === 1) && (incMatUndirected[2][1] === 1), "There should be a second edge between the second and third node.");'
  - text: Debe haber un tercer borde entre el tercer y quinto nodo.
    testString: 'assert((incMatUndirected[2][2] === 1) && (incMatUndirected[4][2] === 1), "There should be a third edge between the third and fifth node.");'
  - text: Debe haber un cuarto borde entre el segundo y cuarto nodo.
    testString: 'assert((incMatUndirected[1][3] === 1) && (incMatUndirected[3][3] === 1), "There should be a fourth edge between the second and fourth node.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var incMatUndirected = [

];

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

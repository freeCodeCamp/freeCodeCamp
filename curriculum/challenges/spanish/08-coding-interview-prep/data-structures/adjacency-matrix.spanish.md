---
id: 587d8256367417b2b2512c78
title: Adjacency Matrix
localeTitle: Matriz de adyacencia
challengeType: 1
---

## Description
<section id='description'> 
Otra forma de representar una gráfica es ponerla en una <dfn>matriz de adyacencia</dfn> . 
Una <dfn>matriz de adyacencia</dfn> es una <dfn>matriz</dfn> bidimensional (2D) donde cada matriz anidada tiene el mismo número de elementos que la matriz externa. En otras palabras, es una matriz o cuadrícula de números, donde los números representan los bordes. Los ceros significan que no hay ventaja o relación. 
<blockquote>    1 2 3<br>   ------<br>1 | 0 1 1<br>2 | 1 0 0<br>3 | 1 0 0</blockquote> 
Arriba hay un gráfico muy simple, no dirigido, donde tiene tres nodos, donde el primer nodo está conectado al segundo y tercer nodo. <strong>Nota</strong> : Los números en la parte superior e izquierda de la matriz son solo etiquetas para los nodos. 
A continuación se muestra una implementación de JavaScript de la misma cosa. 
<blockquote>var adjMat = [<br>  [0, 1, 1],<br>  [1, 0, 0],<br>  [1, 0, 0]<br>];</blockquote> 
A diferencia de una lista de adyacencia, cada &quot;fila&quot; de la matriz debe tener el mismo número de elementos que los nodos en el gráfico. Aquí tenemos una matriz de tres por tres, lo que significa que tenemos tres nodos en nuestro gráfico. 
Una gráfica dirigida se vería similar. A continuación se muestra un gráfico donde el primer nodo tiene un borde que apunta hacia el segundo nodo, y luego el segundo nodo tiene un borde que apunta al tercer nodo. 
<blockquote>var adjMatDirected = [<br>  [0, 1, 0],<br>  [0, 0, 1],<br>  [0, 0, 0]<br>];</blockquote> 
gráficos también pueden tener <dfn>pesos</dfn> en sus bordes. Hasta ahora, tenemos bordes <dfn>no ponderados</dfn> donde solo la presencia y la falta de borde es binaria ( <code>0</code> o <code>1</code> ). Puede tener diferentes pesos dependiendo de su aplicación. 
</section>

## Instructions
<section id='instructions'> 
Cree una matriz de adyacencia de un gráfico no dirigido con cinco nodos. Esta matriz debe estar en una matriz multidimensional. Estos cinco nodos tienen relaciones entre el primer y cuarto nodo, el primer y tercer nodo, el tercer y quinto nodo y el cuarto y quinto nodo. Todos los pesos de los bordes son uno. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>undirectedAdjList</code> solo debe contener cinco nodos.
    testString: 'assert((adjMatUndirected.length === 5) && adjMatUndirected.map(function(x) { return x.length === 5 }).reduce(function(a, b) { return a && b }) , "<code>undirectedAdjList</code> should only contain five nodes.");'
  - text: Debe haber un borde entre el primer y cuarto nodo.
    testString: 'assert((adjMatUndirected[0][3] === 1) && (adjMatUndirected[3][0] === 1), "There should be an edge between the first and fourth node.");'
  - text: Debe haber un borde entre el primer y tercer nodo.
    testString: 'assert((adjMatUndirected[0][2] === 1) && (adjMatUndirected[2][0] === 1), "There should be an edge between the first and third node.");'
  - text: Debe haber un borde entre el tercer y quinto nodo.
    testString: 'assert((adjMatUndirected[2][4] === 1) && (adjMatUndirected[4][2] === 1), "There should be an edge between the third and fifth node.");'
  - text: Debe haber un borde entre el cuarto y quinto nodo.
    testString: 'assert((adjMatUndirected[3][4] === 1) && (adjMatUndirected[4][3] === 1), "There should be an edge between the fourth and fifth node.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var adjMatUndirected = [
];
```

</div>



</section>

## Solution
<section id='solution'>


```js
var adjMatUndirected = [[0, 0, 1, 1, 0],[0, 0, 0, 0, 0],[1, 0, 0, 0, 1],[1, 0, 0, 0, 1],[0, 0, 1, 1, 0]];
```

</section>

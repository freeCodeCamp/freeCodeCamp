---
id: 587d8256367417b2b2512c77
title: Adjacency List
localeTitle: Lista de adyacencia
challengeType: 1
---

## Description
<section id='description'> 
gráficas se pueden representar de diferentes maneras. Aquí describimos una forma, que se llama una <dfn>lista de adyacencia</dfn> . 
Una lista de adyacencia es esencialmente una lista con viñetas donde el lado izquierdo es el nodo y el lado derecho enumera todos los otros nodos a los que está conectado. A continuación se muestra una representación de una lista de adyacencia. 
<blockquote>Node1: Node2, Node3<br>Node2: Node1<br>Node3: Node1</blockquote> 
Arriba hay un gráfico no dirigido porque <code>Node1</code> está conectado a <code>Node2</code> y <code>Node3</code> , y esa información es consistente con las conexiones que muestran <code>Node2</code> y <code>Node3</code> . Una lista de adyacencia para un gráfico dirigido significaría que cada fila de la lista muestra la dirección. Si se dirigió lo anterior, entonces <code>Node2: Node1</code> significaría que el borde dirigido apunta desde <code>Node2</code> hacia <code>Node1</code> . 
Podemos representar el gráfico no dirigido arriba como una lista de adyacencia colocándolo dentro de un objeto de JavaScript. 
<blockquote>var undirectedG = {<br>  Node1: ["Node2", "Node3"],<br>  Node2: ["Node1"],<br>  Node3: ["Node1"]<br>};</blockquote> 
Esto también puede representarse más simplemente como una matriz donde los nodos solo tienen números en lugar de etiquetas de cadena. 
<blockquote>var undirectedGArr = [<br>  [1, 2], # Node1<br>  [0],    # Node2<br>  [0]     # Node3<br>];</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Cree una red social como un gráfico no dirigido con 4 nodos / personas llamadas <code>James</code> , <code>Jill</code> , <code>Jenny</code> y <code>Jeff</code> . Hay bordes / relaciones entre James y Jeff, Jill y Jenny, y Jeff y Jenny. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>undirectedAdjList</code> solo debe contener cuatro nodos.
    testString: 'assert(Object.keys(undirectedAdjList).length === 4, "<code>undirectedAdjList</code> should only contain four nodes.");'
  - text: Debería haber una ventaja entre <code>Jeff</code> y <code>James</code> .
    testString: 'assert(undirectedAdjList.James.indexOf("Jeff") !== -1 && undirectedAdjList.Jeff.indexOf("James") !== -1, "There should be an edge between <code>Jeff</code> and <code>James</code>.");'
  - text: Debe haber una ventaja entre <code>Jill</code> y <code>Jenny</code> .
    testString: 'assert(undirectedAdjList.Jill.indexOf("Jenny") !== -1 && undirectedAdjList.Jill.indexOf("Jenny") !== -1, "There should be an edge between <code>Jill</code> and <code>Jenny</code>.");'
  - text: Debería haber una ventaja entre <code>Jeff</code> y <code>Jenny</code> .
    testString: 'assert(undirectedAdjList.Jeff.indexOf("Jenny") !== -1 && undirectedAdjList.Jenny.indexOf("Jeff") !== -1, "There should be an edge between <code>Jeff</code> and <code>Jenny</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var undirectedAdjList = {
};
```

</div>



</section>

## Solution
<section id='solution'>


```js
var undirectedAdjList = {
"James": ["Jeff"],"Jill": ["Jenny"],"Jenny": ["Jill", "Jeff"],
"Jeff": ["James", "Jenny"]
};
```

</section>

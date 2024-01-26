---
id: 5900f51f1000cf542c510031
title: 'Problema 434: Gráficos rígidos'
challengeType: 1
forumTopicId: 302105
dashedName: problem-434-rigid-graphs
---

# --description--

Recall that a graph is a collection of vertices and edges connecting the vertices, and that two vertices connected by an edge are called adjacent.

Gráficos pueden ser embebidos en un espacio Euclideano asociando cada vértice con un punto en el espacio Euclideano.

Un gráfico flexible es un embebido de un gráfico donde es posible mover uno o más vértices continuamente para que la distancia entre al menos dos vértices no adyacentes sea alterada mientras las distancias entre cada par de vértices adyacentes se mantienen constantes.

Un gráfico rígido es un embebido de un gráfico cual no es flexible.

Informalmente, un gráfico es rígido si reemplazando los vértices con bisagras totalmente rotativas y esquinas con varas que son inflexibles e inelásticas, ninguna parte del gráfico puede ser movida independientemente del resto del gráfico.

Los gráficos de cuadrícula embebidos en el plano Euclideano no son rígidos, como lo demuestra la siguiente animación:

<img class="img-responsive center-block" alt="la animación muestra que los gráficos de cuadrícula no son rígidos en el plano Euclideano" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-1.gif" style="background-color: white; padding: 10px;" />

Sin embargo, uno puede hacerlos rígidos agregando esquinas diagonales a las celdas. Por ejemplo, para un gráfico de cuadrícula de 2x3, hay 19 maneras para hacer el gráfico rígido:

<img class="img-responsive center-block" alt="19 maneras para hacer rígido el gráfico de cuadrícula de 2x3" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-2.png" style="background-color: white; padding: 10px;" />

Tenga en cuenta que para propósitos de este problema, no consideramos la orientación de un borde diagonal o agregar ambos bordes diagonales a la celda como diferente manera de hacer rígida una gráfica de cuadrícula.

Sean $R(m, n)$ los números de manera de hacer rígida $m × n$ la gráfica de cuadrícula.

P. ej. $R(2, 3) = 19$ y $R(5, 5) = 23\\,679\\,901$.

Define $S(N)$ como $\sum R(i, j)$ para $1 ≤ i$, $j ≤ N$.

P. ej. $S(5) = 25\\,021\\,721$.

Encuentra $S(100)$, da tu respuesta modulo $1\\,000\\,000\\,033$.

# --hints--

`rigidGraphs()` debería devolver `863253606`.

```js
assert.strictEqual(rigidGraphs(), 863253606);
```

# --seed--

## --seed-contents--

```js
function rigidGraphs() {

  return true;
}

rigidGraphs();
```

# --solutions--

```js
// solution required
```

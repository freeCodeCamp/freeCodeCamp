---
title: Topological sort
id: 594fa2746886f41f7d8bf225
localeTitle: 594fa2746886f41f7d8bf225
challengeType: 5
---

## Description
<section id='description'> 
<p> 
dado un mapeo entre los elementos, y los elementos de los que dependen, a 
<a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: clasificación topológica">ordenación topológica</a> órdenes 
artículos de modo que no hay ningún elemento precede a un elemento que depende. 
</p> 
<p> 
La compilación de una biblioteca en el lenguaje 
<a href="https://en.wikipedia.org/wiki/VHDL" title="wp: VHDL">VHDL</a> 
tiene la restricción de que una biblioteca debe compilarse después de cualquier biblioteca de la que dependa. 
</p> 
Tarea: 
<p> 
Escriba una función que devolverá un orden de compilación válido de las bibliotecas VHDL desde sus dependencias. 
</p> 
Supongamos que los nombres de las bibliotecas son palabras simples. 
Los elementos mencionados como solo dependientes no tienen dependientes propios, pero se debe dar su orden de compilación. 
Cualquier auto dependencia debe ser ignorada. 
Cualquier dependencia no ordenable debe ser ignorada. 
<p> Usa los siguientes datos como ejemplo: </p> 
<pre> 
Biblioteca Biblioteca DEPENDENCIES 
======= ==================== 
des_system_lib std Synopsys std_cell_lib des_system_lib dw02 DW01 ramlib ieee 
DW01 ieee DW01 dware GTECH 
dw02 ieee dw02 dware 
DW03 std Synopsys dware DW03 dw02 DW01 ieee GTECH 
dw04 dw04 ieee DW01 dware GTECH 
dw05 dw05 ieee dware 
dw06 dw06 ieee dware 
dw07 ieee dware 
dware ieee dware 
GTECH ieee GTECH 
ramlib std ieee 
std_cell_lib ieee std_cell_lib 
sinopsis 
</pre> 
<p> 
<small>Nota: los datos anteriores no se podrían ordenar si, por ejemplo, se agrega <code>dw04</code> a la lista de dependencias de <code>dw01</code> .</small> 
</p> 
Cf: 

<a href="http://rosettacode.org/wiki/Topological sort/Extracted top item" title="Ordenamiento topológico / Top item extraído">Topología ordenada / Top item extraído</a> . 

<p> Hay dos algoritmos populares para la clasificación topológica: </p> 
<p> 
Ordenación topológica de Kahn en 1962, y búsqueda en profundidad: 
<a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: clasificación topológica">ordenación topológica</a> 
</p> 
<p> 
Jason Sachs: 
<a href="http://www.embeddedrelated.com/showarticle/799.php" title="enlace: http://www.embeddedrelated.com/showarticle/799.php">
&quot;Diez pequeños algoritmos, parte 4: ordenamiento topológico&quot; <code>0</code></a> . 
</p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>topologicalSort</code> es una función.
    testString: 'assert(typeof topologicalSort === "function", "<code>topologicalSort</code> is a function.");'
  - text: <code>topologicalSort</code> debe devolver el orden correcto de la biblioteca ..
    testString: 'assert.deepEqual(topologicalSort(libsSimple), ["bbb", "aaa"], "<code>topologicalSort</code> must return correct library order..");'
  - text: <code>topologicalSort</code> debe devolver el orden correcto de la biblioteca ..
    testString: 'assert.deepEqual(topologicalSort(libsVHDL), solutionVHDL, "<code>topologicalSort</code> must return correct library order..");'
  - text: <code>topologicalSort</code> debe devolver el orden correcto de la biblioteca ..
    testString: 'assert.deepEqual(topologicalSort(libsCustom), solutionCustom, "<code>topologicalSort</code> must return correct library order..");'
  - text: <code>topologicalSort</code> debe ignorar dependencias desordenadas ..
    testString: 'assert.deepEqual(topologicalSort(libsUnorderable), solutionUnorderable, "<code>topologicalSort</code> must ignore unorderable dependencies..");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function topologicalSort(libs) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function topologicalSort(libs) {
  // A map of the input data, with the keys as the packages, and the values as
  // and array of packages on which it depends.
  const D = libs
    .split('\n')
    .map(e => e.split(' ').filter(ep => ep !== "))
    .reduce((p, c) =>
      p.set(c[0], c.filter((e, i) => (i > 0 && e !== c[0] ? e : null))), new Map());
  [].concat(...D.values()).forEach(e => {
    D.set(e, D.get(e) || []);
  });

  // The above map rotated so that it represents a DAG of the form
  // Map {
  //    A => [ A, B, C],
  //    B => [C],
  //    C => []
  // }
  // where each key represents a node, and the array contains the edges.
  const G = [...D.keys()].reduce((p, c) =>
    p.set(
      c,
      [...D.keys()].filter(e => D.get(e).includes(c))),
    new Map()
  );

  // An array of leaf nodes; nodes with 0 in degrees.
  const Q = [...D.keys()].filter(e => D.get(e).length === 0);

  // The result array.
  const S = [];
  while (Q.length) {
    const u = Q.pop();
    S.push(u);
    G.get(u).forEach(v => {
      D.set(v, D.get(v).filter(e => e !== u));
      if (D.get(v).length === 0) {
        Q.push(v);
      }
    });
  }

  return S;
}

```

</section>

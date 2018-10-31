---
title: Topological sort
id: 594fa2746886f41f7d8bf225
challengeType: 5
videoUrl: ''
localeTitle: Género topologico
---

## Description
<section id="description"><p> Dada una asignación entre elementos y elementos de los que dependen, una <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: clasificación topológica">ordenación topológica</a> ordena elementos para que ningún elemento preceda a un elemento del que depende. </p><p> La compilación de una biblioteca en el lenguaje <a href="https://en.wikipedia.org/wiki/VHDL" title="wp: VHDL">VHDL</a> tiene la restricción de que una biblioteca debe compilarse después de cualquier biblioteca de la que dependa. </p> Tarea: <p> Escriba una función que devolverá un orden de compilación válido de las bibliotecas VHDL desde sus dependencias. </p> Supongamos que los nombres de las bibliotecas son palabras simples. Los elementos mencionados como solo dependientes no tienen dependientes propios, pero se debe dar su orden de compilación. Cualquier auto dependencia debe ser ignorada. Cualquier dependencia no ordenable debe ser ignorada. <p> Usa los siguientes datos como ejemplo: </p><pre> BIBLIOTECA DEPENDENCIAS DE LA BIBLIOTECA
======= ====================
des_system_lib std synopsys std_cell_lib des_system_lib dw02 dw01 ramlib ieee
dw01 ieee dw01 dware gtech
dw02 ieee dw02 dware
dw03 std synopsys dware dw03 dw02 dw01 ieee gtech
dw04 dw04 ieee dw01 dware gtech
dw05 dw05 ieee dware
dw06 dw06 ieee dware
dw07 ieee dware
dware ieee dware
gtech ieee gtech
ramlib std ieee
std_cell_lib ieee std_cell_lib
sinopsis
</pre><p> <small>Nota: los datos anteriores no se podrían ordenar si, por ejemplo, se agrega <code>dw04</code> a la lista de dependencias de <code>dw01</code> .</small> </p> Cf: <pre> <code>&lt;a href=&quot;http://rosettacode.org/wiki/Topological sort/Extracted top item&quot; title=&quot;Topological sort/Extracted top item&quot;&gt;Topological sort/Extracted top item&lt;/a&gt;.</code> </pre><p> Hay dos algoritmos populares para la clasificación topológica: </p><p> El orden topológico de Kahn en 1962 y la búsqueda en profundidad: <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: clasificación topológica">ordenamiento topológico</a> </p><p> Jason Sachs: <a href="http://www.embeddedrelated.com/showarticle/799.php" title="enlace: http://www.embeddedrelated.com/showarticle/799.php">&quot;Diez algoritmos pequeños, parte 4: ordenamiento topológico&quot;</a> . </p></section>

## Instructions
<section id="instructions">
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
// solution required
```
</section>

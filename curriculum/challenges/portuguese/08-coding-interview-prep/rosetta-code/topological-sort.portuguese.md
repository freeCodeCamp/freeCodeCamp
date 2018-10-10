---
title: Topological sort
id: 594fa2746886f41f7d8bf225
challengeType: 5
videoUrl: ''
localeTitle: Tipo topológico
---

## Description
<section id="description"><p> Dado um mapeamento entre itens e itens dos quais eles dependem, uma <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: Classificação topológica">classificação topológica</a> ordena itens para que nenhum item preceda um item do qual depende. </p><p> A compilação de uma biblioteca na linguagem <a href="https://en.wikipedia.org/wiki/VHDL" title="wp: VHDL">VHDL</a> tem a restrição de que uma biblioteca deve ser compilada após qualquer biblioteca da qual ela dependa. </p> Tarefa: <p> Escreva uma função que retornará uma ordem de compilação válida de bibliotecas VHDL de suas dependências. </p> Suponha que nomes de bibliotecas sejam palavras únicas. Itens mencionados como apenas dependentes não têm dependentes próprios, mas sua ordem de compilação deve ser dada. Quaisquer auto dependências devem ser ignoradas. Quaisquer dependências não ordenáveis ​​devem ser ignoradas. <p> Use os seguintes dados como um exemplo: </p><pre> DEPENDÊNCIAS DA BIBLIOTECA DE BIBLIOTECA
===========================
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
sinopse
</pre><p> <small>Nota: os dados acima seriam impossíveis de serem pedidos se, por exemplo, <code>dw04</code> for adicionado à lista de dependências de <code>dw01</code> .</small> </p> Cf: <pre> <code>&lt;a href=&quot;http://rosettacode.org/wiki/Topological sort/Extracted top item&quot; title=&quot;Topological sort/Extracted top item&quot;&gt;Topological sort/Extracted top item&lt;/a&gt;.</code> </pre><p> Existem dois algoritmos populares para classificação topológica: </p><p> O tipo topológico de 1962 de Kahn e a pesquisa em profundidade: <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: Classificação topológica">tipo topológico</a> </p><p> Jason Sachs: <a href="http://www.embeddedrelated.com/showarticle/799.php" title="link: http://www.embeddedrelated.com/showarticle/799.php">&quot;Dez pequenos algoritmos, parte 4: classificação topológica&quot;</a> . </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>topologicalSort</code> é uma função.
    testString: 'assert(typeof topologicalSort === "function", "<code>topologicalSort</code> is a function.");'
  - text: <code>topologicalSort</code> deve retornar a ordem correta da biblioteca.
    testString: 'assert.deepEqual(topologicalSort(libsSimple), ["bbb", "aaa"], "<code>topologicalSort</code> must return correct library order..");'
  - text: <code>topologicalSort</code> deve retornar a ordem correta da biblioteca.
    testString: 'assert.deepEqual(topologicalSort(libsVHDL), solutionVHDL, "<code>topologicalSort</code> must return correct library order..");'
  - text: <code>topologicalSort</code> deve retornar a ordem correta da biblioteca.
    testString: 'assert.deepEqual(topologicalSort(libsCustom), solutionCustom, "<code>topologicalSort</code> must return correct library order..");'
  - text: <code>topologicalSort</code> deve ignorar dependências não ordenadas.
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

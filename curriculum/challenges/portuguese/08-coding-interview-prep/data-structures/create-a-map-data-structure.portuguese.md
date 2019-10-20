---
id: 8d5823c8c441eddfaeb5bdef
title: Create a Map Data Structure
challengeType: 1
videoUrl: ''
localeTitle: Criar uma estrutura de dados do mapa
---

## Description
<section id="description"> Os próximos desafios cobrirão mapas e tabelas de hash. Mapas são estruturas de dados que armazenam pares de valores-chave. Em JavaScript, eles estão disponíveis para nós como objetos. Mapas fornecem pesquisa rápida de itens armazenados com base em valores-chave e são estruturas de dados muito comuns e úteis. Instruções: Vamos praticar um pouco criando nosso próprio mapa. Como os objetos JavaScript fornecem uma estrutura de mapa muito mais eficiente do que qualquer coisa que possamos escrever aqui, isso se destina principalmente a um exercício de aprendizado. No entanto, os objetos JavaScript nos fornecem apenas determinadas operações. E se quiséssemos definir operações personalizadas? Use o objeto <code>Map</code> fornecido aqui como um wrapper em torno de um <code>object</code> JavaScript. Crie os seguintes métodos e operações no objeto Map: <ul><li> <code>add</code> aceita um par de <code>key, value</code> para adicionar ao mapa. </li><li> <code>remove</code> aceita uma chave e remove a <code>key, value</code> associada <code>key, value</code> par de <code>key, value</code> </li><li> <code>get</code> aceita uma <code>key</code> e retorna o <code>value</code> armazenado </li><li> <code>has</code> aceita uma <code>key</code> e retorna <dfn>verdadeiro</dfn> se a chave existir ou <dfn>falso,</dfn> se isso não acontece. </li><li> <code>values</code> retorna uma matriz de todos os valores no mapa </li><li> <code>size</code> retorna o número de itens no mapa </li><li> <code>clear</code> esvazia o mapa </li></ul></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados do mapa existe.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; return (typeof test == "object")})(), "The Map data structure exists.");'
  - text: 'O objeto Map possui os seguintes métodos: add, remove, get, tem, valores, clear e size.'
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; return (typeof test.add == "function" && typeof test.remove == "function" && typeof test.get == "function" && typeof test.has == "function" && typeof test.values == "function" && typeof test.clear == "function" && typeof test.size == "function")})(), "The Map object has the following methods: add, remove, get, has, values, clear, and size.");'
  - text: O método add adiciona itens ao mapa.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add(5,6); test.add(2,3); test.add(2,5); return (test.size() == 2)})(), "The add method adds items to the map.");'
  - text: O método has retorna true para itens adicionados e false para itens ausentes.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("test","value"); return (test.has("test") && !test.has("false"))})(), "The has method returns true for added items and false for absent items.");'
  - text: O método get aceita as chaves como entrada e retorna os valores associados.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("abc","def"); return (test.get("abc") == "def")})(), "The get method accepts keys as input and returns the associated values.");'
  - text: O método values ​​retorna todos os valores armazenados no mapa como strings em uma matriz.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("a","b"); test.add("c","d"); test.add("e","f"); var vals = test.values(); return (vals.indexOf("b") != -1 && vals.indexOf("d") != -1 && vals.indexOf("f") != -1)})(), "The values method returns all the values stored in the map as strings in an array.");'
  - text: O método clear esvazia o mapa e o método size retorna o número de itens presentes no mapa.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("b","b"); test.add("c","d"); test.remove("asdfas"); var init = test.size(); test.clear(); return (init == 2 && test.size() == 0)})(), "The clear method empties the map and the size method returns the number of items present in the map.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Map = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

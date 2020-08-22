---
id: 587d825b367417b2b2512c8e
title: Create a Hash Table
challengeType: 1
videoUrl: ''
localeTitle: Criar uma tabela de hash
---

## Descrição
<section id="description"> Neste desafio, vamos aprender sobre tabelas de hash. Uma tabela de hash é usada para implementar matrizes associativas ou mapeamentos de pares valor-chave, como os objetos e mapas que acabamos de estudar. Um objeto JavaScript poderia ser implementado como uma tabela de hash, por exemplo (a sua implementação real dependerá do ambiente em que está sendo executado). A forma como uma tabela de hash funciona é que ela recebe uma entrada de chave e coloca essa chave em uma forma determinística para algum valor numérico. Este valor numérico é então usado como a chave real pela qual o valor associado é armazenado. Então, se você tentar acessar a mesma chave novamente, a função de hashing processará a chave, retornará o mesmo resultado numérico, que será usado para procurar o valor associado. Isso fornece tempo de pesquisa O (1) muito eficiente, em média. As tabelas de hash podem ser implementadas como matrizes com funções hash produzindo índices de matriz dentro de um intervalo especificado. Nesse método, a escolha do tamanho da matriz é importante, assim como a função hash. Por exemplo, e se a função hashing produzir o mesmo valor para duas chaves diferentes? Isso é chamado de colisão. Uma maneira de lidar com colisões é apenas armazenar os dois pares de valores-chave nesse índice. Em seguida, após a consulta de qualquer um deles, você terá que percorrer o intervalo de itens para encontrar a chave que está procurando. Uma boa função hash minimiza as colisões para manter um tempo de busca eficiente. Aqui, não nos vamos preocupar com os detalhes de hash ou com a implementação de tabelas de hash, vamos apenas tentar ter uma noção geral de como elas funcionam. 
  Instruções: Vamos criar a funcionalidade básica de uma tabela de hash. Criamos uma função ingênua de hash para você usar. Você pode passar um valor de string para o hash da função e ele retornará um valor com hash que você pode usar como chave para armazenamento. Armazene itens com base nesse valor com hash no objeto this.collection. Crie estes três métodos: adicionar, remover e pesquisar. O primeiro deve aceitar um par de valores-chave para adicionar à tabela de hash. O segundo deve remover um par de valores-chave quando passar uma chave. O terceiro deve aceitar uma chave e retornar o valor associado ou nulo se a chave não estiver presente. Certifique-se de escrever seu código para contabilizar colisões! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados HashTable existe.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return (typeof test === "object")})(), "The HashTable data structure exists.");'
  - text: O HashTable tem um método add.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.add) === "function")})(), "The HashTable has an add method.");'
  - text: O HashTable tem um método remove.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.remove) === "function")})(), "The HashTable has an remove method.");'
  - text: O HashTable tem um método de pesquisa.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.lookup) === "function")})(), "The HashTable has an lookup method.");'
  - text: O método add adiciona pares de valores de chave e o método de pesquisa retorna os valores associados a uma determinada chave.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; test.add("key", "value"); return (test.lookup("key") === "value")})(), "The add method adds key value pairs and the lookup method returns the values associated with a given key.");'
  - text: O método remove aceita uma chave como entrada e remove o par de valores de chaves associados.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; test.add("key", "value"); test.remove("key"); return (test.lookup("key") === null)})(), "The remove method accepts a key as input and removes the associated key value pair.");'
  - text: Itens são adicionados usando a função hash.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; called = 0; test.add("key1","value1"); test.add("key2","value2"); test.add("key3","value3"); return (called === 3)})(), "Items are added using the hash function.");'
  - text: A tabela de hash lida com colisões.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; called = 0; test.add("key1","value1"); test.add("1key","value2"); test.add("ke1y","value3"); return (test.lookup("key1") === "value1" && test.lookup("1key") == "value2" && test.lookup("ke1y") == "value3")})(), "The hash table handles collisions.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>

### Before Test
<div id='js-setup'>

```js
  var called = 0;
    var hash = (string) => {
     called++;
      var hash = 0;
      for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); };
      return hash;
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

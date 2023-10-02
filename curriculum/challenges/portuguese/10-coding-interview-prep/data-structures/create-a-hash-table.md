---
id: 587d825b367417b2b2512c8e
title: Criar uma tabela hash
challengeType: 1
forumTopicId: 301627
dashedName: create-a-hash-table
---

# --description--

Neste desafio, aprenderemos sobre tabelas hash. Uma tabela hash é usada para implementar arrays associativos ou mapeamentos de pares chave-valor, como os objetos e mapas que temos estudado. Um objeto JavaScript pode ser implementado como uma tabela hash, por exemplo (a implementação de fato dependerá do ambiente em que estiver rodando). O modo como uma tabela hash funciona é recebendo uma entrada de chave e fazendo o hash dessa chave de modo determinístico para algum valor numérico. Este valor numérico é então usado como a chave real através da qual o valor associado é armazenado. Depois, se você tentar acessar a mesma chave novamente, a função de hashing processará a chave, retorna o mesmo resultado numérico e ele será usado para procurar o valor associado. Isto proporciona um tempo de pesquisa O(1) muito eficiente, em média.

As tabelas hash podem ser implementadas como arrays com funções de hash produzindo índices de array dentro de um intervalo especificado. Nesse método, a escolha do tamanho do array é importante, assim como a função de hashing. Por exemplo, o que aconteceria se a função de hashing produzisse o mesmo valor para duas chaves diferentes? A isso chamamos de colisão. Uma maneira de lidar com colisões é apenas armazenar os dois pares chave-valor naquele índice. Então, ao consultar qualquer um, você teria que iterar através do grupo de itens para encontrar a chave que está procurando. Uma boa função de hashing minimizará colisões para manter o tempo de busca eficiente.

Aqui, não nos preocuparemos com os detalhes da implementação do hashing e das tabelas hash. Tentaremos apenas ter uma noção geral de como funcionam.

# --instructions--

Vamos criar a funcionalidade básica de uma tabela hash. Criamos uma função de hashing simples para sua utilização. Você pode passar um valor de string para a função `hash` e ele retornará um valor de hash que você pode usar como chave para o armazenamento. Armazene itens baseados neste valor de hash no objeto `this.collection`. Crie esses três métodos: `add`, `remove` e `lookup`. O primeiro deve aceitar um par de chave-valor para adicionar à tabela hash. O segundo deve remover um par de chave-valor quando recebe uma chave. O terceiro deve aceitar uma chave e retornar o valor associado ou `null` se a chave não estiver presente.

Não se esqueça de escrever seu código para levar em conta as colisões!

**Observação:** os testes do método `remove` não passarão até que os métodos `add` e `lookup` sejam corretamente implementados.

# --hints--

A estrutura de dados `HashTable` deve existir.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test === 'object';
  })()
);
```

`HashTable` deve ter o método `add`.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.add === 'function';
  })()
);
```

`HashTable` deve ter o método `lookup`.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.lookup === 'function';
  })()
);
```

`HashTable` deve ter o método `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.remove === 'function';
  })()
);
```

O método `add` deve adicionar pares chave-valor e o método `lookup` deve retornar os valores associados a uma determinada chave.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    return test.lookup('key') === 'value';
  })()
);
```

O método `remove` deve aceitar uma chave como entrada e deve remover o par chave-valor associado.

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');

    test.remove('key');
    return !test.collection.hasOwnProperty(hashValue);
  })()
);
```

O método `remove` só deve remover o par chave-valor correto.

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    test.add('yek', 'value');
    test.add('altKey', 'value');

    test.remove('yek');
    if (test.lookup('yek') || !test.lookup('key') || !test.lookup('altKey')) {
      return false;
    }

    test.remove('key');

    return !test.collection.hasOwnProperty(hashValue) && test.lookup('altKey');
  })()
);
```

Os itens devem ser adicionados usando a função de hash.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('key2', 'value2');
    test.add('key3', 'value3');
    return called >= 3 && called % 3 === 0;
  })()
);
```

A tabela hash deve tratar de colisões.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('1key', 'value2');
    test.add('ke1y', 'value3');
    return (
      test.lookup('key1') === 'value1' &&
      test.lookup('1key') == 'value2' &&
      test.lookup('ke1y') == 'value3'
    );
  })()
);
```

# --seed--

## --before-user-code--

```js
var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
```

## --seed-contents--

```js
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

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
  // Only change code below this line

  this.add = function(key, val) {
    var theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
      this.collection[theHash] = {};
    }
    this.collection[theHash][key] = val;
  }

  this.remove = function(key) {
    var theHash = hash(key);
    var hashedObj = this.collection[theHash];
    if (hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key];
    }
    if (!Object.keys(hashedObj).length) {
      delete this.collection[theHash];
    }
  }

  this.lookup = function(key) {
    var theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null
  }
  // Only change code above this line
};
```

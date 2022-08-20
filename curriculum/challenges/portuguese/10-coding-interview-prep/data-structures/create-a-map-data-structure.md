---
id: 8d5823c8c441eddfaeb5bdef
title: Criar uma estrutura de dados de mapa
challengeType: 1
forumTopicId: 301629
dashedName: create-a-map-data-structure
---

# --description--

Os próximos desafios tratarão de mapas e tabelas hash. Mapas são estruturas de dados que armazenam pares chave-valor. Em JavaScript, essas estruturas estão disponíveis para nós como objetos. Mapas fornecem uma busca rápida de itens armazenados com base em valores chave e são estruturas de dados muito comuns e úteis.

# --instructions--

Vamos praticar um pouco criando nosso próprio mapa. Como objetos JavaScript fornecem uma estrutura de mapa muito mais eficiente do que qualquer outra que pudéssemos escrever aqui, o objetivo aqui é, principalmente, um exercício de aprendizagem. No entanto, objetos JavaScript nos fornecem apenas algumas operações. E se quiséssemos definir operações personalizadas? Use o objeto `Map` fornecido aqui para envolver o `object` de JavaScript. Criar os seguintes métodos e operações no objeto Map:

<ul>
<li><code>add</code> aceita um par <code>key, value</code> para adicioná-lo ao mapa.</li>
<li><code>remove</code> aceita uma chave e remove o par <code>key, value</code> associado</li>
<li><code>get</code> aceita uma <code>key</code> e retorna o <code>value</code> armazenado</li>
<li><code>has</code> aceita uma <code>key</code> e retorna <dfn>true</dfn>, se a chave existir no mapa, ou <dfn>false</dfn>, se ela não existir.</li>
<li><code>values</code> retorna um array de todos os valores no mapa</li>
<li><code>size</code> retorna o número de itens no mapa</li>
<li><code>clear</code> esvazia o mapa</li>
</ul>

# --hints--

A estrutura de dados `Map` deve existir.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return typeof test == 'object';
  })()
);
```

O objeto `Map` deve ter os seguintes métodos: `add`, `remove`, `get`, `has`, `values`, `clear` e `size`.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return (
      typeof test.add == 'function' &&
      typeof test.remove == 'function' &&
      typeof test.get == 'function' &&
      typeof test.has == 'function' &&
      typeof test.values == 'function' &&
      typeof test.clear == 'function' &&
      typeof test.size == 'function'
    );
  })()
);
```

O método `add` deve adicionar itens ao mapa.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add(5, 6);
    test.add(2, 3);
    test.add(2, 5);
    return test.size() == 2;
  })()
);
```

O método `has` deve retornar `true` para os itens adicionados e `false` para itens ausentes.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('test', 'value');
    return test.has('test') && !test.has('false');
  })()
);
```

O método `get` deve aceitar chaves como entrada e deve retornar os valores associados.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('abc', 'def');
    return test.get('abc') == 'def';
  })()
);
```

O método `values` deve retornar todos os valores armazenados no mapa como strings em um array.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('a', 'b');
    test.add('c', 'd');
    test.add('e', 'f');
    var vals = test.values();
    return (
      vals.indexOf('b') != -1 &&
      vals.indexOf('d') != -1 &&
      vals.indexOf('f') != -1
    );
  })()
);
```

O método `clear` deve esvaziar o mapa e o método `size` deve retornar o número de itens presentes no mapa.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('b', 'b');
    test.add('c', 'd');
    test.remove('asdfas');
    var init = test.size();
    test.clear();
    return init == 2 && test.size() == 0;
  })()
);
```

# --seed--

## --seed-contents--

```js
var Map = function() {
  this.collection = {};
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
var Map = function() {
    this.collection = {};
    // Only change code below this line

    this.add = function(key,value) {
      this.collection[key] = value;
    }

    this.remove = function(key) {
      delete this.collection[key];
    }

    this.get = function(key) {
      return this.collection[key];
    }

    this.has = function(key) {
      return this.collection.hasOwnProperty(key)
    }

    this.values = function() {
      return Object.values(this.collection);
    }

    this.size = function() {
      return Object.keys(this.collection).length;
    }

    this.clear = function() {
      for(let item of Object.keys(this.collection)) {
        delete this.collection[item];
      }
    }
    // Only change code above this line
};
```

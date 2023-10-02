---
id: 8d1323c8c441eddfaeb5bdef
title: Criar uma classe conjunto
challengeType: 1
forumTopicId: 301632
dashedName: create-a-set-class
---

# --description--

Neste exercício, vamos criar uma classe chamada `Set` para emular uma estrutura de dados abstrata chamada "set" (conjunto). Um conjunto é como um array, mas não pode conter valores duplicados. A utilização típica de um conjunto é simplesmente verificar a presença de um item. Podemos ver como o objeto `Set` do ES6 funciona no exemplo abaixo:

```js
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false
```

Primeiramente, criaremos um método add que adiciona um valor à coleção desde que o valor já não exista no conjunto. Então, criaremos um método remove que remove um valor da coleção definida, se ele já existir lá. Por fim, criaremos um método size, que retorna o número de elementos dentro da coleção definida.

# --instructions--

Crie um método `add`, que adiciona um valor único à coleção do conjunto, retornando `true` se o valor for adicionado com sucesso e `false` se não for.

Crie um método `remove` que aceita um valor e verifica se ele existe no conjunto. Se existir, o método deve remover o valor da coleção do conjunto e retornar `true`. Caso contrário, ele deverá retornar `false`. Crie um método `size` que retorne o tamanho da coleção do conjunto.

# --hints--

A classe `Set` deve ter o método `add`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.add === 'function';
  })()
);
```

O método `add` não deve adicionar valores duplicados.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.add('a');
    var vals = test.values();
    return vals[0] === 'a' && vals[1] === 'b' && vals.length === 2;
  })()
);
```

O método `add` deve retornar `true` quando um valor for adicionado ao conjunto com sucesso.

```js
assert(
  (function () {
    var test = new Set();
    var result = test.add('a');
    return result != undefined && result === true;
  })()
);
```

O método `add` deve retornar `false` quando tentar adicionar um valor duplicado.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    var result = test.add('a');
    return result != undefined && result === false;
  })()
);
```

A classe `Set` deve ter o método `remove`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.remove === 'function';
  })()
);
```

O método `remove` só deve remover itens presentes no conjunto.

```js
assert.deepEqual(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('c');
    return test.values();
  })(),
  ['a', 'b']
);
```

O método `remove` deve remover o item fornecido do conjunto.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    var vals = test.values();
    return vals[0] === 'b' && vals.length === 1;
  })()
);
```

A classe `Set` deve ter o método `size`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.size === 'function';
  })()
);
```

O método `size` deve retornar o número de elementos do conjunto.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    return test.size() === 1;
  })()
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
}
```

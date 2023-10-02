---
id: 587d8253367417b2b2512c6a
title: Arrays tipados
challengeType: 1
forumTopicId: 301716
dashedName: typed-arrays
---

# --description--

Arrays são objetos JavaScript que podem ter muitos elementos diferentes.

```js
var complexArr = [1, 5, "2", "Word", {"name": "James"}];
```

Basicamente, o que acontece em segundo plano é que o seu navegador dará automaticamente o espaço de memória certo para esse array. Ele também será alterado conforme necessário, se você adicionar ou remover dados.

No entanto, no mundo do alto desempenho e de diferentes tipos de elementos, às vezes, você precisa ser mais específico sobre a quantidade de memória que é dada a um array.

<dfn>Arrays tipados</dfn> são a resposta para este problema. Agora, você pode dizer quanta memória você deseja dar a um array. Abaixo, vemos uma visão geral básica dos diferentes tipos de arrays disponíveis e o tamanho em bytes para cada elemento do array.

<table class='table table-striped'><tbody><tr><th>Tipo</th><th>Tamanho de cada elemento em bytes</th></tr><tr><td><code>Int8Array</code></td><td>1</td></tr><tr><td><code>Uint8Array</code></td><td>1</td></tr><tr><td><code>Uint8ClampedArray</code></td><td>1</td></tr><tr><td><code>Int16Array</code></td><td>2</td></tr><tr><td><code>Uint16Array</code></td><td>2</td></tr><tr><td><code>Int32Array</code></td><td>4</td></tr><tr><td><code>Uint32Array</code></td><td>4</td></tr><tr><td><code>Float32Array</code></td><td>4</td></tr><tr><td><code>Float64Array</code></td><td>8</td></tr></tbody></table>

Há duas maneiras de criar este tipo de array. Uma delas é criá-lo diretamente. Abaixo vemos como criar um `Int16Array` de tamanho 3.

```js
var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]
```

Também é possível criar um <dfn>buffer</dfn> para atribuir a quantidade de dados (em bytes) que o array deseja ocupar. **Observação**  
Para criar arrays tipados usando buffers, você precisa atribuir o número de bytes como um múltiplo dos bytes listados acima.

```js
// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]
```

<dfn>Buffers</dfn> são objetos de propósito genérico que simplesmente carregam dados. Você não pode acessá-los normalmente. Para acessá-los, primeiro você precisa criar uma <dfn>visualização</dfn>.

```js
i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
```

**Observação**  
Arrays tipados não possuem alguns dos métodos que os arrays tradicionais têm, como `.pop()` ou `.push()`. Arrays tipados também falham testes com o método `Array.isArray()`, que verifica se algo é um array. Embora sejam mais simples, isso pode ser uma vantagem para que mecanismos de JavaScript menos sofisticados possam implementá-los.

# --instructions--

Primeiro, crie um `buffer` de 64 bytes. Em seguida, crie um array tipado `Int32Array` com uma visualização dele chamada `i32View`.

# --hints--

O `buffer` deve ter 64 bytes de tamanho.

```js
assert(buffer.byteLength === 64);
```

A visualização `i32View` de seu buffer deve ter 64 bytes de tamanho.

```js
assert(i32View.byteLength === 64);
```

A visualização `i32View` de seu buffer deve ter 16 elementos.

```js
assert(i32View.length === 16);
```

# --seed--

## --seed-contents--

```js
var buffer;
var i32View;
```

# --solutions--

```js
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
```

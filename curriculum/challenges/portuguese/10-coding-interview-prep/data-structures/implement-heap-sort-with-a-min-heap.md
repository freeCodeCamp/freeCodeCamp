---
id: 587d825b367417b2b2512c8c
title: Implementar a ordenação de heap com um Min Heap
challengeType: 1
forumTopicId: 301643
dashedName: implement-heap-sort-with-a-min-heap
---

# --description--

Agora que podemos adicionar e remover elementos, vamos ver algumas pilhas (heaps) de aplicações que podem ser usadas. As heaps são comumente usadas para implementar filas de prioridade porque armazenam sempre um item com maior ou menor valor na primeira posição. Além disso, elas são usadas para implementar um algoritmo de ordenação chamado Heap Sort. Vamos ver como fazer isso aqui. O Heap Sort usa um Min Heap, o inverso de um Max Heap. Um Min Heap sempre armazena o elemento de menor valor na posição raiz.

O Heap Sort funciona pegando um array não ordenado, adicionando cada item do array a uma heap mínima, e, em seguida, extraindo cada item da heap mínima para um novo array. A estrutura de heap mínima garante que o novo array conterá os itens originais na ordem do menor para o maior. Este é um dos algoritmos de ordenação mais eficientes com performance de O(nlog(n)) na média e no pior caso.

# --instructions--

Vamos implementar o Heap Sort com um Min Heap. Sinta-se à vontade para adaptar seu código máximo aqui. Crie um objeto `MinHeap` com os métodos `insert`, `remove` e `sort`. O método `sort` deve retornar um array de todos os elementos do Min Heap ordenados do menor para o maior.

# --hints--

A estrutura de dados `MinHeap` deve existir.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    }
    return typeof test == 'object';
  })()
);
```

`MinHeap` deve ter um método chamado `insert`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

`MinHeap` deve ter um método chamado `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

`MinHeap` deve ter um método chamado `sort`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.sort == 'function';
  })()
);
```

O método `sort` deve retornar um array que contenha todos os itens adicionados ao MinHeap ordenados.

```js
assert(
  (() => {
    if (typeof MinHeap === 'undefined') {
      return false;
    }

    const heap = new MinHeap();
    const arr = createRandomArray(25);

    for (let i of arr) {
      heap.insert(i);
    }

    const result = heap.sort();
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== result[i]) {
        return false;
      }
    }
    return true;
  })()
);
```

# --seed--

## --seed-contents--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);

  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```

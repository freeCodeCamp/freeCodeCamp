---
id: 587d825a367417b2b2512c8a
title: Inserir um elemento em um Max Heap
challengeType: 1
forumTopicId: 301703
dashedName: insert-an-element-into-a-max-heap
---

# --description--

Agora, vamos passar para outra estrutura de dados em árvore, o heap binário. Um heap (pilha) binário é uma árvore binária parcialmente ordenada que satisfaz a propriedade heap. A propriedade heap especifica uma relação entre o nó pai e os nós filhos. Você pode ter um Max Heap, no qual todos os nós pai são maiores ou iguais aos seus nós filhos, ou um Min Heap, em que o inverso é verdadeiro. Heaps binários também são árvores binárias completas. Isso significa que todos os níveis da árvore estão totalmente preenchidos e, se o último nível estiver parcialmente preenchido, ele é preenchido da esquerda para a direita.

Enquanto os heaps binários podem ser implementados como estruturas de árvore, com nós que contêm referências à esquerda ou à direita, a ordenação parcial de acordo com a propriedade heap nos permite representar o heap como um array. A relação pai-filho é o que nos interessa e, com aritmética simples, podemos calcular os filhos de qualquer pai ou o pai de qualquer nó filho.

Por exemplo, considere esta representação de array de um Min Heap binário:

```js
[ 6, 22, 30, 37, 63, 48, 42, 76 ]
```

O nó raiz é o primeiro elemento, `6`. Seus filhos são `22` e `30`. Se olharmos para a relação entre os índices do array desses valores, para o índice `i`, os filhos são `2 * i + 1` e `2 * i + 2`. Da mesma forma, o elemento no índice `0` é o pai desses dois filhos nos índices `1` e `2`. De forma mais geral, podemos encontrar o pai de um nó em qualquer índice com o seguinte: `Math.floor((i - 1) / 2)`. Esses padrões se manterão fiéis à medida que a árvore binária cresce até qualquer tamanho. Por fim, podemos fazer um ligeiro ajuste para tornar esta aritmética ainda mais fácil, ignorando o primeiro elemento do array. Fazer isso cria a seguinte relação para qualquer elemento em um determinado índice `i`:

Exemplo de representação de array:

```js
[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]
```

Um elemento é o filho da esquerda: `i * 2`

Um elemento é o filho da direita: `i * 2 + 1`

Um elemento é o pai: `Math.floor(i / 2)`

Assim que você compreender a matemática, usar uma representação de array passa a ser muito útil, porque os locais dos nós podem ser determinados rapidamente com esta aritmética e o uso de memória é diminuído, porque você não precisa manter referências aos nós filhos.

# --instructions--

Instruções: Aqui vamos criar um Max Heap. Comece criando um método `insert` que adiciona elementos ao nosso heap. Durante a inserção, é importante manter sempre a propriedade heap. Para um heap máximo, isso significa que o elemento raiz deve sempre ter o maior valor na árvore e todos os nós pai devem ser maiores que seus filhos. Para uma implementação de um array de heap, isso normalmente é feito em três etapas:

<ol>
  <li>Adicione o novo elemento ao final do array.</li>
  <li>Se o elemento for maior do que o seu pai, troque-o.</li>
  <li>Continue alterando até que o novo elemento seja menor que o seu pai ou até que você alcance a raiz da árvore.</li>
</ol>

Por fim, adicione um método `print`, que retorne um array de todos os itens que foram adicionados ao heap.

# --hints--

A estrutura de dados `MaxHeap` deve existir.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    }
    return typeof test == 'object';
  })()
);
```

`MaxHeap` deve ter um método chamado `insert`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

`MaxHeap` deve ter um método chamado `print`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

O método `insert` deve adicionar elementos de acordo com a propriedade do MaxHeap.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    test.insert(50);
    test.insert(100);
    test.insert(700);
    test.insert(32);
    test.insert(51);
    test.insert(800);
    const result = test.print();
    const solution = JSON.stringify([null,800,51,700,32,50,100]);
    const solutionWithoutNull = JSON.stringify([800,51,700,32,50,100]);

    return (result.length == 6) ? (JSON.stringify(result) == solutionWithoutNull) : (JSON.stringify(result) == solution);
  })()
);
```

# --seed--

## --seed-contents--

```js
var MaxHeap = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
var MaxHeap = function() {
    // Only change code below this line
    this.heap = [];
    this.parent = index => {
      return Math.floor((index - 1) / 2);
    }
    this.insert = element => {
      this.heap.push(element);
      this.heapifyUp(this.heap.length - 1);
    }
    this.heapifyUp = index => {
      let currentIndex = index,
      parentIndex = this.parent(currentIndex);
      while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(parentIndex);
      }
    }
    this.swap = (index1, index2) => {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    this.print = () => {
      return this.heap;
    }
    // Only change code above this line
};
```

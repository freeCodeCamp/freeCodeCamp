---
id: 587d825b367417b2b2512c8b
title: Remover um elemento de um Max Heap
challengeType: 1
forumTopicId: 301710
dashedName: remove-an-element-from-a-max-heap
---

# --description--

Agora que podemos adicionar elementos à nossa heap, vamos ver como podemos remover elementos. Remover e inserir elementos requerem uma lógica similar. Em um max heap, você normalmente vai querer remover o maior valor, então isso envolve simplesmente tirá-lo da raiz da nossa árvore. Isto vai quebrar a propriedade heap de nossa árvore, então temos de restabelecer a propriedade de alguma forma. Normalmente, para um Max Heap, isso é feito da seguinte maneira:

<ol>
  <li>Mova o último elemento no heap para a posição raiz.</li>
  <li>Se qualquer filho da raiz for maior do que ela, troque a raiz pelo filho de maior valor.</li>
  <li>Continue trocando até que o pai seja maior que os dois filhos ou até que você atinja o último nível da árvore.</li>
</ol>

# --instructions--

Instruções: adicione um método a nosso Max Heap chamado `remove`. Este método deve retornar o maior valor que for adicionado ao nosso Max Heap e removê-lo da heap. Ele também deve reordenar o heap para que a propriedade heap seja mantida. Depois de remover um elemento, o próximo elemento de maior valor do restante do heap deve se tornar a raiz.

# --hints--

A estrutura de dados `MaxHeap` deve existir.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    }
    return typeof test == 'object';
  })()
);
```

`MaxHeap` deve ter um método chamado `print`.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

`MaxHeap` deve ter um método chamado `insert`.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

`MaxHeap` deve ter um método chamado `remove`.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

O método `remove` deve remover o maior elemento do Max Heap ao mesmo tempo em que mantém a propriedade do Max Heap.

```js
function isHeap(arr, i, n) {
  if (i >= (n - 1) / 2) {
    return true;
  }
  if (
    arr[i] >= arr[2 * i + 1] &&
    arr[i] >= arr[2 * i + 2] &&
    isHeap(arr, 2 * i + 1, n) &&
    isHeap(arr, 2 * i + 2, n)
  ) {
    return true;
  }
  return false;
}

assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
  let max = Infinity;
  const [result, vals] = [[], [2, 15, 3, 7, 12, 7, 10, 90]];
  vals.forEach((val) => test.insert(val));
  for (let i = 0; i < vals.length; i++) {
    const curHeap = test.print();
    const arr = curHeap[0] === null ? curHeap.slice(1) : curHeap;
    if (!isHeap(arr, 0, arr.length - 1)) {
      return false;
    }
    const removed = test.remove();
    if (!vals.includes(removed)) return false;
    if (removed > max) return false
    max = removed;
    result.push(removed);
  }
  for (let i = 0; i < vals.length; i++) {
     if (!result.includes(vals[i])) {
       return false;
     }
  }
  return true
  })()
);
```

# --seed--

## --seed-contents--

```js
const MaxHeap = function () {
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
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```

---
id: 587d825b367417b2b2512c8b
title: Rimuovere un elemento da una max-heap
challengeType: 1
forumTopicId: 301710
dashedName: remove-an-element-from-a-max-heap
---

# --description--

Ora che possiamo aggiungere elementi al nostro heap vediamo come possiamo rimuovere gli elementi. La rimozione e l'inserimento di elementi richiedono una logica simile. In un max-heap di solito si vuole rimuovere il valore maggiore, quindi questo implica semplicemente estrarlo dalla radice del nostro albero. Questo negherà la proprietà heap del nostro albero, quindi dovremo ristabilirla in qualche modo. Tipicamente, per un max-heap questo viene fatto nel modo seguente:

<ol>
  <li>Sposta l'ultimo elemento nell'heap alla posizione root.</li>
  <li>Se uno dei figli della radice è maggiore di essa, scambiare la radice con il figlio di valore maggiore.</li>
  <li>Continuare a scambiare fino a quando il genitore è maggiore di entrambi i figli o si raggiunge l'ultimo livello nell'albero.</li>
</ol>

# --instructions--

Istruzioni: Aggiungere un metodo al nostro max-heap chiamato `remove`. Questo metodo dovrebbe restituire il massimo valore che è stato aggiunto al nostro max heap e rimuoverlo dal mucchio. Dovrebbe anche riordinare il mucchio in modo che la proprietà heap sia mantenuta. Dopo aver rimosso un elemento, il prossimo elemento più grande che rimane nel heap dovrebbe diventare la radice.

# --hints--

La struttura dati `MaxHeap` dovrebbe esistere

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

`MaxHeap` dovrebbe avere un metodo chiamato `print`.

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

`MaxHeap`dovrebbe avere un metodo chiamato `insert`.

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

`MaxHeap`dovrebbe avere un metodo chiamato `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

Il metodo remove dovrebbe rimuovere l'elemento più grande dal max heap mantenendo la proprietà max heap.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    test.insert(30);
    test.insert(300);
    test.insert(500);
    test.insert(10);
    let result = [];
    result.push(test.remove());
    result.push(test.remove());
    result.push(test.remove());
    result.push(test.remove());
    return result.join('') == '5003003010';
  })()
);
```

# --seed--

## --seed-contents--

```js
var MaxHeap = function () {
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

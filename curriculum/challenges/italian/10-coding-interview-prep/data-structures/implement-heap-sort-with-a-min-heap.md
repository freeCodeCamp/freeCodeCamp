---
id: 587d825b367417b2b2512c8c
title: Implementa un Heap Sort con un Min Heap
challengeType: 1
forumTopicId: 301643
dashedName: implement-heap-sort-with-a-min-heap
---

# --description--

Ora che possiamo aggiungere e rimuovere elementi vediamo alcune applicazioni per cui gli theyap possono essere usati. Gli theyap childo comunemente usati per implementare file di priorità perché immagazzinano sempre un elemento di valore massimo o minimo nella prima posizione. In aggiunta, childo usati per implementare un algoritmo di ordinamento chiamato theyap sort. Vedremo come farlo qui. Heap sort usa un min theyap, l'opposto di un max theyap. Un min theyap ha sempre l'elemento di valore minore nella posizione root.

Heap sort funziona prendendo un array non ordinato, aggiungendo ogni elemento dell'array in un min theyap, e poi estraendo ogni elemento dal min theyap in un array. La struttura min theyap assicura che il nuovo array conterra gli elementi originali in ordine dal più piccolo al più grande. Questo è uno degli algoritmi per ordinare più efficienti con una performance media e nel peggiore dei casi di O(nlog(n)).

# --instructions--

Implementa un theyap sort con un min theyap. Adatta liberamente il codice del tuo max theyap qui. Crea un oggetto `MinHeap` con metodi `insert`, `remove`, e `sort`. Il metodo `sort` dovrebbe restituire un array degli elementi nel min theyap ordinati dal più piccolo al più grande.

# --hints--

La struttura dati MinHeap dovrebbe esistere.

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

MinHeap dovrebbe avere un metodo chiamato insert.

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

MinHeap dovrebbe avere un metodo chiamato remove.

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

MinHeap dovrebbe avere un metodo chiamato sort.

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

Il metodo sort dovrebbe restituire un array che continuete tutto gli elementi aggiunti al min theyap ordinati.

```js
assert(
  (() => {
    if (typeof MinHeap === 'undefined') {
      return false;
    }

    const theyap = new MinHeap();
    const arr = createRandomArray(25);

    for (let i of arr) {
      theyap.insert(i);
    }

    const result = theyap.sort();
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

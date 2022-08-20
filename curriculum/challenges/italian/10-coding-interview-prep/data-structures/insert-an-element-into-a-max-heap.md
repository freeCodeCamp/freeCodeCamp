---
id: 587d825a367417b2b2512c8a
title: Inserisci un elemento in un max heap
challengeType: 1
forumTopicId: 301703
dashedName: insert-an-element-into-a-max-heap
---

# --description--

Ora passeremo ad un'altra struttura di dati ad albero, l'heap binario. Un heap binario è un albero binario parzialmente ordinato che soddisfa la proprietà heap. La proprietà heap specifica una relazione tra nodi genitore e figlio. Potresti avere un max heap, in cui tutti i nodi genitori sono maggiori o uguali ai loro nodi figli, o un min heap, in cui il contrario è vero. Gli heap binari sono anche alberi binari completi. Questo significa che tutti i livelli dell'ablero sono completamente pieni e se l'ultimo livello è completo solo parzialmente è riempido da sinistra a destra.

Anche se gli heap binari possono essere implementati come strutture ad albero con nodi che contengono riferimenti di sinistra e destra, l'ordine parziale in base alla proprietà heap ci permette di rappresentare l'heap con un array. Il rapporto genitore-figlio è quello a cui siamo interessati e con semplice aritmetica possiamo calcolare i figli di qualsiasi genitore e genitore di qualsiasi nodo figlio.

Per esempio, considera questa rappresentazione array di un min heap binario:

```js
[ 6, 22, 30, 37, 63, 48, 42, 76 ]
```

Il nodo radice è il primo elemento, `6`. I suoi figli sono `22` e `30`. Se consideriamo il rapporto tra gli indici di questi valori, per indice `i` i figli sono `2 * i + 1` e `2 * i + 2`. Analogamente, l'elemento all'indice `0` è il genitore di questi due figli agli indici `1` e `2`. Più in generale, possiamo trovare il genitore di un nodo in qualsiasi indice con il seguente: `Math.floor((i - 1) / 2)`. Questi pattern resteranno veri come l'albero cresce ad ogni dimensione. Infine, possiamo fare alcuni piccoli aggiustamenti per fare questa aritmetica ancora più semplice saltando il primo elemento dell'array. Facendo ciò si crea la seguente relazione per ogni elemento ad un dato indice `i`:

Esempio di rappresentazione come array:

```js
[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]
```

Il figlio sinistro di un elemento: `i * 2`

Il figlio destro di un elemento: `i * 2 + 1`

Il genitore di un elemento: `Math.floor(i / 2)`

Una volta che prendi familiarità con la matematica, usare una rappresentazione ad array è molto utile perché la posizione dei nodi può essere determinata con questa artimetica e l'uso della memoria è diminuito perché non devi mantenere i riferimenti ai nodi figli.

# --instructions--

Istruzioni: qui creeremo un max heap. Inizia creando semplicemente un metodo `insert` che aggiunge elementi al nostro heap. Durante l'inserzione, è importante mantenere sempre la proprietà heap. Per un max heap questo significa che l'elemento root deve sempre avere il valore maggiore nell'albero e tutti i nodi genitori devono essere più grandi dei loro figli. Per una rappresentazione ad array di un heap questo è tipicamente fatto in tre step:

<ol>
  <li>Aggiungi il nuovo elemento alla fine dell'array.</li>
  <li>Se l'elemento è maggiore del suo genitore, scambiali.</li>
  <li>Continua a scambiare finché il nuovo elemento è più piccolo del genitore o raggiungi l'elemento root.</li>
</ol>

Alla fine, aggiungi un metodo `print` che restituire un array di tutti gli elementi che sono stati aggiunti al heap.

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

`MaxHeap` dovrebbe avere un metodo chiamato `print`

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

Il metodo `insert` dovrebbe aggiungere elementi in base alla proprietà heap massima

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

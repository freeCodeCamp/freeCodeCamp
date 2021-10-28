---
id: 587d8253367417b2b2512c6a
title: Array Digitati
challengeType: 1
forumTopicId: 301716
dashedName: typed-arrays
---

# --description--

Gli array sono oggetti JavaScript che possono contenere molti elementi diversi.

```js
var complexArr = [1, 5, "2", "Word", {"name": "James"}];
```

Fondamentalmente ciò che accade in background è che il browser darà automaticamente la giusta quantità di spazio di memoria per quell'array. Cambierà anche al bisogno se si aggiungono o rimuovono i dati.

Tuttavia, nel mondo delle alte prestazioni e dei diversi tipi di elementi, a volte è necessario essere più specifici su quanto memoria viene dato a un array.

<dfn>Gli array digitati</dfn> sono la risposta a questo problema. Ora sei in grado di dire quanta memoria vuoi allocare per un dato array. Di seguito una panoramica di base dei diversi tipi di array disponibili e la dimensione in byte per ogni elemento in quell'array.

<table class='table table-striped'><tbody><tr><th>Tipo</th><th>La dimensione di ogni elemento in byte</th></tr><tr><td><code>Int8Array</code></td><td>1</td></tr><tr><td><code>Uint8Array</code></td><td>1</td></tr><tr><td><code>Uint8ClampedArray</code></td><td>1</td></tr><tr><td><code>Int16Array</code></td><td>2</td></tr><tr><td><code>Uint16Array</code></td><td>2</td></tr><tr><td><code>Int32Array</code></td><td>4</td></tr><tr><td><code>Uint32Array</code></td><td>4</td></tr><tr><td><code>Float32Array</code></td><td>4</td></tr><tr><td><code>Float64Array</code></td><td>8</td></tr></tbody></table>

Ci sono due modi per creare questi tipi di array. Un modo è di crearli direttamente. Di seguito è riportato come creare un `Int16Array` di lunghezza 3.

```js
var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]
```

Puoi ache creare un <dfn>buffer</dfn> per assegnare quanti dati (in byte) vuoi che il tuo array occupi. **Nota**  
Per creare array digitat usando buffer, devi assegnare il numero di byte come multiple dei byte elencati precedentemente.

```js
// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]
```

I <dfn>buffer</dfn> sono oggetti a scopo generico che contengono solo dati. Non puoi accedervi normalmente. Per accederci devi prima creare una <dfn>view</dfn>.

```js
i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
```

**Nota**  
Array digitati non hanno alcuni dei metodi degli array tradizioni come `.pop()` o `.push()`. Gli array digitati fanno restituire false ad `Array.isArray()` che controlla se qualcosa è un array. Anche se più semplice, questo può essere un vantaggio per i motori JavaScript meno sofisticati per implementarli.

# --instructions--

Come prima cosa crea un `buffer` che è 64 byte. Quindi crea un array digitato `Int32Array` con una view chiamata `i32View`.

# --hints--

Il tuo `buffer` dovrebbe occupare 64 byte.

```js
assert(buffer.byteLength === 64);
```

La tua view `i32View` del tuo buffer dovrebbe occupare 64 byte.

```js
assert(i32View.byteLength === 64);
```

La tua view `i32View` del tuo buffer dovrebbe avere 16 elementi.

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

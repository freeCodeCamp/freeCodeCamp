---
id: 587d7b7e367417b2b2512b20
title: Usare un array per memorizzare una collezione di dati
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

Di seguito è riportato un esempio della più semplice implementazione di una struttura dati ad array. Questo è conosciuto come <dfn>array uni-dimensionale</dfn>, il che significa che ha un solo livello, o che non ha altri array annidati al suo interno. Nota che contiene <dfn>booleani</dfn>, <dfn>stringhe</dfn> e <dfn>numeri</dfn>, tra gli altri tipi di dati JavaScript validi:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

La chiamata `console.log` stampa `7`.

Tutti gli array hanno una proprietà di lunghezza, che come mostrato sopra, può essere facilmente accessibile con la sintassi `Array.length`. Un'implementazione più complessa di un array può essere vista qui sotto. Questo è conosciuto come <dfn>array multi-dimensionale</dfn>, e si tratta di un array che contiene altri array. Nota che questo array contiene anche <dfn>oggetti</dfn> JavaScript, che esamineremo molto attentamente nella nostra prossima sezione, ma per ora, tutto quello che devi sapere è che gli array sono anche in grado di memorizzare oggetti complessi.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

Abbiamo definito una variabile chiamata `yourArray`. Completa la dichiarazione assegnando alla variabile `yourArray` un array di almeno 5 elementi di lunghezza. Il tuo array dovrebbe contenere almeno una <dfn>stringa</dfn>, un <dfn>numero</dfn>e un <dfn>booleano</dfn>.

# --hints--

`yourArray` dovrebbe essere un array.

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` dovrebbe essere lungo almeno 5 elementi.

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` dovrebbe contenere almeno un valore di tipo `boolean`.

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` dovrebbe contenere almeno un valore `number`.

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` dovrebbe contenere almeno un valore di tipo `string`.

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // Change this line
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```

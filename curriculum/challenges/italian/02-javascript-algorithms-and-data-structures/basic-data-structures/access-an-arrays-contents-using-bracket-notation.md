---
id: 5a661e0f1068aca922b3ef17
title: Accedere ai contenuti dell'array usando la notazione a parentesi
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

La caratteristica fondamentale di qualsiasi struttura di dati è, ovviamente, la capacità non solo di memorizzare i dati, ma di essere in grado di recuperare tali dati a comando. Quindi, adesso che abbiamo imparato a creare un array, cominciamo a pensare come possiamo accedere alle informazioni di quell'array.

Se definiamo un semplice array come il seguente, ci sono 3 elementi:

```js
let ourArray = ["a", "b", "c"];
```

In un array, ogni elemento ha un <dfn>indice</dfn>. Questo indice indica la posizione di quell'elemento nell'array e come lo puoi consultare. Tuttavia è importante notare che gli array JavaScript sono <dfn>indicizzati a zero</dfn>, cioè che il primo elemento di un array è in realtà alla ***zeresima*** posizione, non alla prima. Per recuperare un elemento da un array possiamo racchiudere un indice tra parentesi e aggiungerlo alla fine di un array, o più comunemente, a una variabile che fa riferimento ad un array. Questa notazione si chiama <dfn>notazione a parentesi</dfn>. Ad esempio, se vogliamo recuperare `a` da `ourArray` e assegnarlo a una variabile, possiamo farlo con il seguente codice:

```js
let ourVariable = ourArray[0];
```

Ora `ourVariable` ha il valore di `a`.

Oltre ad accedere al valore associato ad un indice, è anche possibile *impostare* un indice ad un valore utilizzando la stessa notazione:

```js
ourArray[1] = "not b anymore";
```

Usando la notazione tra parentesi, abbiamo resettato l'elemento all'indice 1 dalla stringa `b`, alla stringa `not b anymore`. Ora `ourArray` è `["a", "not b anymore", "c"]`.

# --instructions--

Per completare questa sfida, imposta la seconda posizione (indice `1`) di `myArray` a quello che vuoi, tranne che alla lettera `b`.

# --hints--

`myArray[0]` dovrebbe essere uguale alla lettera `a`

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` non deve essere uguale alla lettera `b`

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]` deve essere uguale alla lettera `c`

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` deve essere uguale alla lettera `d`

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```

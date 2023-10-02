---
id: 587d7dbb367417b2b2512baa
title: Riutilizzare i pattern usando i gruppi di cattura
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

Per esempio vuoi trovare una parola che compare più di una volta come qui sotto.

```js
let repeatStr = "row row row your boat";
```

Potresti usare `/row row row/`, ma se non conosci la specifica parola ripetuta? <dfn>Gruppi di cattura</dfn> possono essere usati per trovare sequenze di caratteri ripetute.

I gruppi di cattura sono costruiti mettendo delle parentesi torne attorno allo schema regex che deve essere catturato. In questo caso, l'obbiettivo è catturare una parora contente caratteri alfanumerici quindi il gruppo di cattura sarà `\w+` circondato da parentesi tonde: `/(\w+)/`.

La sottostringa corrispondente al gruppo è salvata in una "variabile" temporanea, a cui è possibile accedere all'interno della stessa regex utilizzando una barra rovesciata e il numero del gruppo di cattura (per esempio `\1`). I gruppi di cattura sono numerati automaticamente dalla posizione delle parentesi di apertura (da sinistra a destra), a partire da 1.

L'esempio sottostante riconosce qualsiasi parola che compare tre volte separata da spazi:

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

Usando il metodo `.match()` su una stringa, esso restituirà un array con la stringa che corrisponde insieme al suo gruppo di cattura.


# --instructions--

Usa i gruppi di cattura in `reRegex` per riconoscere una stringa che consiste solo dello stesso numero ripetuto esattamente tre volte separato da spazi singoli.

# --hints--

La tua espressione regolare dovrebbe usare la classe scorciatoria di carattere per le cifre.

```js
assert(reRegex.source.match(/\\d/));
```

La tua espressione regolare dovrebbe riutilizzare un gruppo di cattura due volte.

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

La tua espressione regolare dovrebbe riconoscere la stringa `42 42 42`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `100 100 100`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('100 100 100'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `42 42 42 42`.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

La tua espressione regolare non dovrebbe riconoscere la stringa `42 42`.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

La tua espressione regolare non dovrebbe riconoscere la stringa `101 102 103`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `1 2 3`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `10 10 10`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `42\t42\t42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42\t42\t42'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `42  42  42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42  42  42'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
```

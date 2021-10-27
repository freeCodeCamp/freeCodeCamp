---
id: 56533eb9ac21ba0edf2244af
title: Assegnazione composta con addizione aumentata
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
dashedName: compound-assignment-with-augmented-addition
---

# --description--

Nella programmazione è comune utilizzare le assegnazioni per modificare il contenuto di una variabile. Ricorda che tutto quello che sta alla destra del segno di uguale viene valutato prima, quindi possiamo scrivere:

```js
myVar = myVar + 5;
```

per aggiungere `5` a `myVar`. Poiché questo è uno scherma molto comune, ci sono degli operatori che eseguono sia un'operazione matematica che un'assegnazione in un unico passaggio.

Uno di questi operatori è l'operatore `+=`.

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
```

Il valore `6` sarà visualizzato nella console.

# --instructions--

Converti le assegnazioni per `a`, `b` e `c` in modo da utilizzare l'operatore `+=`.

# --hints--

`a` dovrebbe essere uguale a `15`.

```js
assert(a === 15);
```

`b` dovrebbe essere uguale a `26`.

```js
assert(b === 26);
```

`c` dovrebbe essere uguale a `19`.

```js
assert(c === 19);
```

Dovresti usare l'operatore `+=` per ogni variabile.

```js
assert(code.match(/\+=/g).length === 3);
```

Non dovresti modificare il codice sopra il commento specificato.

```js
assert(
  /let a = 3;/.test(code) &&
    /let b = 17;/.test(code) &&
    /let c = 12;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

# --solutions--

```js
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
```

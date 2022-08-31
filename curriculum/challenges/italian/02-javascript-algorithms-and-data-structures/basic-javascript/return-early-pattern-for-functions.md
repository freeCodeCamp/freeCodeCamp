---
id: 56533eb9ac21ba0edf2244c4
title: Pattern di ritorno precoce per le funzioni
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

Quando viene raggiunta un'istruzione `return`, l'esecuzione della funzione corrente si interrompe e il controllo ritorna alla posizione in cui è stata chiamata la funzione.

**Esempio**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

Quanto sopra mostrerà la stringa `Hello` nella console, e restituirà la stringa `World`. La stringa `byebye` non verrà mai visualizzata nella console, perché la funzione esce al raggiungimento dell'istruzione `return`.

# --instructions--

Modifica la funzione `abTest` in modo che se `a` o `b` sono inferiori a `0` la funzione esce immediatamente con un valore di `undefined`.

**Suggerimento**  
Ricorda che <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables" target="_blank" rel="noopener noreferrer nofollow"><code>undefined</code> è una parola chiave</a>, non una stringa.

# --hints--

`abTest(2, 2)` dovrebbe restituire un numero

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2, 2)` dovrebbe restituire `8`

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2, 2)` dovrebbe restituire `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2, -2)` dovrebbe restituire `undefined`

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2, 8)` dovrebbe restituire `18`

```js
assert(abTest(2, 8) === 18);
```

`abTest(3, 3)` dovrebbe restituire `12`

```js
assert(abTest(3, 3) === 12);
```

`abTest(0, 0)` dovrebbe restituire `0`

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```

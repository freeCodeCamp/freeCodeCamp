---
id: 587d8254367417b2b2512c71
title: Rimuovi elementi da un insieme in ES6
challengeType: 1
forumTopicId: 301713
dashedName: remove-items-from-a-set-in-es6
---

# --description--

Esercitiamoci con la rimozione di elementi da un Set ES6 utilizzando il metodo `delete`.

Per prima cosa, crea un Set ES6:

```js
var set = new Set([1,2,3]);
```

Ora rimuovi un elemento dal tuo Set con il metodo `delete`.

```js
set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
```

# --instructions--

Ora, crea un set con gli interi 1, 2, 3, 4 e 5.

Rimuovi i valori 2 e 5, quindi restituisci il set.

# --hints--

Il Set deve contenere i valori 1, 3 e 4

```js
assert(
  (function () {
    var test = checkSet();
    return test.has(1) && test.has(3) && test.has(4) && test.size === 3;
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(){
  // Only change code below this line
  var set = null;

  // Only change code above this line
  return set;   
}
```

# --solutions--

```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```

---
id: 587d7b7b367417b2b2512b14
title: Verificare la presenza di un elemento con indexOf()
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

Dal momento che gli array possono essere cambiati, o *mutati*, in qualsiasi momento, non c'è alcuna garanzia su dove sia un particolare dato in un determinato array, o se quell'elemento esista ancora. Fortunatamente, JavaScript ci fornisce un altro metodo nativo, `indexOf()`, che ci permette di controllare rapidamente e facilmente la presenza di un elemento in un array. `indexOf()` prende un elemento come parametro, e quando chiamato, restituisce la posizione, o indice, di quell'elemento, o `-1` se l'elemento non è presente nell'array.

Ad esempio:

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` restituisce `-1`, `indexOf('oranges')` restituisce `2`e `indexOf('pears')` restituisce `1` (il primo indice in cui è presente il rispettivo elemento).

# --instructions--

`indexOf()` può essere incredibilmente utile per verificare rapidamente la presenza di un elemento in un array. Abbiamo definito una funzione, `quickCheck`, che richiede un array e un elemento come argomenti. Modifica la funzione usando `indexOf()` in modo che restituisca `true` se l'elemento passato è nell'array, e `false` se non lo è.

# --hints--

La funzione `quickCheck` dovrebbe restituire un booleano (`true` o `false`), non una stringa (`"true"` o `"false"`)

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` dovrebbe restituire `false`

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["onions", "squash", "shallots"], "onions")` dovrebbe restituire `true`

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` dovrebbe restituire `true`

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` dovrebbe restituire `false`

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

La funzione `quickCheck` dovrebbe utilizzare il metodo `indexOf()`

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```

---
id: 56bbb991ad1ed5201cd392cc
title: Manipolare gli array con il metodo pop
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

Un altro modo per cambiare i dati in un array è con la funzione `.pop()`.

`.pop()` è usato per estrarre un valore dalla fine di un array. Possiamo memorizzare questo valore assegnandolo ad una variabile. In altre parole, `.pop()` rimuove l'ultimo elemento da un array e restituisce quell'elemento.

Qualsiasi tipo di elemento può essere estratto da un array - numeri, stringhe, anche array annidati.

```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

Il primo `console.log` mostrerà il valore `6`e il secondo mostrerà il valore `[1, 4]`.

# --instructions--

Utilizza la funzione `.pop()` per rimuovere l'ultimo elemento da `myArray` e assegna il valore estratto a `removedFromMyArray`.

# --hints--

`myArray` dovrebbe contenere solo `[["John", 23]]`.

```js
assert(
  (function (d) {
    if (d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

Dovresti usare `pop()` su `myArray`.

```js
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
```

`removedFromMyArray` dovrebbe contenere solo `["cat", 2]`.

```js
assert(
  (function (d) {
    if (d[0] == 'cat' && d[1] === 2 && d[2] == undefined) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
if (typeof removedFromMyArray !== 'undefined') (function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
```

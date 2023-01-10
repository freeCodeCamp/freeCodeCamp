---
id: 56592a60ddddeae28f7aa8e1
title: Accedere agli array multidimensionali con gli indici
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

È possibile pensare a un array <dfn>multi-dimensionale</dfn>, come a un *array di array*. Quando utilizzi le parentesi per accedere al tuo array, il primo set di parentesi si riferisce alle voci nell'array più esterno (il primo livello), e ogni coppia di parentesi supplementare si riferisce al livello successivo delle voci all'interno.

**Esempio**

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
```

In quest'esempio, `subarray` ha il valore `[[10, 11, 12], 13, 14]`, `nestedSubarray` ha il valore `[10, 11, 12]` e `element` ha il valore `11`.

**Nota:** Non ci dovrebbero essere spazi tra il nome dell'array e le parentesi quadre, come `array [0][0]` e anche questo non è permesso: `array [0] [0]`. Anche se JavaScript è in grado di elaborarlo correttamente, questo potrebbe confondere altri programmatori che leggono il tuo codice.

# --instructions--

Utilizzando la notazione a parentesi seleziona un elemento da `myArray` in modo che `myData` sia uguale a `8`.

# --hints--

`myData` dovrebbe essere uguale a `8`.

```js
assert(myData === 8);
```

Dovresti usare la notazione parentesi per leggere il valore corretto da `myArray`.

```js
assert(/myData=myArray\[2\]\[1\]/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

## --seed-contents--

```js
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[0][0];
```

# --solutions--

```js
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
const myData = myArray[2][1];
```

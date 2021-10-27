---
id: 587d7b90367417b2b2512b65
title: Restituire parte di un array utilizzando il metodo slice
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

Il metodo `slice` restituisce una copia di alcuni elementi di un array. Può prendere due argomenti, il primo è l'indice di dove iniziare la "slice" (fetta), il secondo è l'indice di dove finirla (ed è non-inclusivo, cioè non è incluso nella fetta). Se gli argomenti non sono forniti, il comportamento predefinito è quello di iniziare all'inizio dell'array e di andare fino alla fine, che è un modo semplice per fare una copia dell'intero array. Il metodo `slice` non muta l'array originale, ma ne restituisce uno nuovo.

Ecco un esempio:

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` avrà il valore `["Dog", "Tiger"]`.

# --instructions--

Usa il metodo `slice` nella funzione `sliceArray` per restituire parte dell'array `anim`, dati gli indici `beginSlice` e `endSlice`. La funzione dovrebbe restituire un array.

# --hints--

Il tuo codice dovrebbe utilizzare il metodo `slice`.

```js
assert(code.match(/\.slice/g));
```

La variabile `inputAnim` non dovrebbe cambiare.

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` dovrebbe restituire `["Dog", "Tiger"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` dovrebbe restituire `["Cat"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` dovrebbe restituire `["Dog", "Tiger", "Zebra"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)) ===
    JSON.stringify(['Dog', 'Tiger', 'Zebra'])
);
```

# --seed--

## --seed-contents--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
```

---
id: 567af2437cbaa8c51670a16c
title: Verificare la presenza delle proprietà degli oggetti
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

A volte è utile verificare se la proprietà di un dato oggetto esiste o meno. Possiamo usare il metodo `.hasOwnProperty(propname)` degli oggetti per determinare se quell'oggetto ha una proprietà con quel nome. `.hasOwnProperty()` restituisce `true` o `false` se la proprietà viene trovata o meno.

**Esempio**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

Il primo `hasOwnProperty` restituisce `true`, mentre il secondo restituisce `false`.

# --instructions--

Modifica la funzione `checkObj` per verificare se un oggetto passato alla funzione (`obj`) contiene una proprietà specifica (`checkProp`). Se la proprietà viene trovata, restituisci il valore di quella proprietà. In caso contrario, restituisci `"Not Found"`.

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` dovrebbe restituire la stringa `pony`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` dovrebbe restituire la stringa `kitten`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` dovrebbe restituire la stringa `Not Found`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` dovrebbe restituire la stringa `Seattle`.

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` dovrebbe restituire la stringa `Not Found`.

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` dovrebbe restituire la stringa `Not Found`.

```js
assert(checkObj({ pet: 'kitten', bed: 'sleigh' }, 'gift') === 'Not Found');
```

# --seed--

## --seed-contents--

```js
function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}
```

# --solutions--

```js
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
```

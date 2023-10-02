---
id: 567af2437cbaa8c51670a16c
title: Verificare la presenza delle proprietà degli oggetti
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

Per verificare se una proprietà di un dato oggetto esista o meno, puoi utilizzare il metodo `.hasOwnProperty()`. `someObject.hasOwnProperty(someProperty)` restituisce `true` o `false` a seconda che la proprietà sia trovata sull'oggetto oppure no.

**Esempio**

```js
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
```

La prima chiamata della funzione `checkForProperty` restituisce `true`, mentre la seconda restituisce `false`.

# --instructions--

Modifica la funzione `checkObj` per verificare se un oggetto passato al parametro di funzione `obj` contiene la specifica proprietà passata al parametro di funzione `checkProp`. Se la proprietà passata a `checkProp` si trova su `obj`, restituisci il valore di quella proprietà. In caso contrario, restituisci `Not Found`.

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

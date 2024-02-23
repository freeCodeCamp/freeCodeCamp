---
id: 567af2437cbaa8c51670a16c
title: Verifica las propiedades de un objeto
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

Para verificar si una propiedad de un objeto dado existe o no, puedes utilizar el método `.hasOwnProperty()`. `someObject.hasOwnProperty(someProperty)` devuelve `true` o `false`, dependiendo si la propiedad es encontrada en el objeto o no.

**Por ejemplo**

```js
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
```

La primera llamada a la función `checkForProperty` devuelve `true`, mientras que la segunda llamada a la función devuelve `false`.

# --instructions--

Modifica la función `checkObj` para probar si el objeto enviado al parámetro de función `obj` contiene la propiedad específica enviada al parámetro de función `checkProp`. Si la propiedad enviada a `checkProp` es encontrada en `obj`, devuelve el valor de esa propiedad. De lo contrario, devuelve `Not Found`.

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` debe devolver la cadena`pony`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` debe devolver la cadena `kitten`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` debe devolver la cadena `Not Found`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` debe devolver la cadena `Seattle`.

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` debe devolver la cadena `Not Found`.

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` debe devolver la cadena `Not Found`.

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

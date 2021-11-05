---
id: 567af2437cbaa8c51670a16c
title: Verifica las propiedades de un objeto
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el método `.hasOwnProperty(propname)` para determinar si un objeto tiene una propiedad con ese nombre. `.hasOwnProperty()` devuelve `true` o `false` si se encuentra la propiedad o no.

**Por ejemplo**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

El primer `hasOwnProperty` devuelve `true`, mientras que el segundo devuelve `false`.

# --instructions--

Modifica la función `checkObj` para verificar si el objeto `obj` pasado a la función contiene la propiedad `checkProp`. Si la propiedad es encontrada, devuelve el valor de la propiedad. Si no, devuelve `"Not Found"`.

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

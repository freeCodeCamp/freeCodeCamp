---
id: 567af2437cbaa8c51670a16c
title: Testar objetos por propriedades
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

Às vezes, é útil verificar se a propriedade de um determinado objeto existe ou não. Podemos usar o método de objetos `.hasOwnProperty(propname)` para determinar se aquele objeto possui o nome de propriedade fornecido. `.hasOwnProperty()` retorna `true` ou `false` se a propriedade for encontrada ou não.

**Exemplo**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

O primeiro `hasOwnProperty` retorna `true`, enquanto o segundo retorna `false`.

# --instructions--

Modifique a função `checkObj` para verificar se um objeto passado para a função (`obj`) contém uma propriedade específica (`checkProp`). Se a propriedade for encontrada, retorne o valor da propriedade. Se não, retorne `"Not Found"`.

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` deve retornar a string `pony`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` deve retornar a string `kitten`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` deve retornar a string `Not Found`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` deve retornar a string `Seattle`.

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` deve retornar a string `Not Found`.

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` deve retornar a string `Not Found`.

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

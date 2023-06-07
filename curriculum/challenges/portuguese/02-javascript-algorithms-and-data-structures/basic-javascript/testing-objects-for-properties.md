---
id: 567af2437cbaa8c51670a16c
title: Testar objetos por propriedades
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

Para verificar se uma propriedade em um determinado objeto existe ou não, você pode usar o método `.hasOwnProperty()`. `someObject.hasOwnProperty(someProperty)` retorna `true` ou `false`, dependendo de a propriedade ser encontrada no objeto ou não.

**Exemplo**

```js
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
```

A primeira função `checkForProperty` retorna `true`, enquanto a segunda retorna `false`.

# --instructions--

Modifique a função `checkObj` para testar se um objeto passado para o parâmetro da função `obj` contém a propriedade específica passada para o parâmetro da função `checkProp`. Se a propriedade passada para `checkProp` for encontrada em `obj`, retorne o valor dessa propriedade. Se não, retorne `Not Found`.

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

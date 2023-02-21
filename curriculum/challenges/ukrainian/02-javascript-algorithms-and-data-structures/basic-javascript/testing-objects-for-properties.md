---
id: 567af2437cbaa8c51670a16c
title: Перевірка властивостей об’єктів
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

Іноді потрібно перевіряти, чи об'єкт має певну властивість. Ми можемо використати метод об'єктів `.hasOwnProperty(propname)`, щоб визначити, чи має цей об’єкт задану назву властивості. `.hasOwnProperty()` повертає `true` або `false`, якщо властивість знайдена чи не знайдена.

**Приклад**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

Перший `hasOwnProperty` повертає `true`, а другий повертає `false`.

# --instructions--

Змініть функцію `checkObj` так, щоб вона перевіряла, чи переданий до функції об’єкт (`obj`) містить певну властивість (`checkProp`). Якщо властивість знайдена, поверніть значення властивості. Якщо ні, поверніть `"Not Found"`.

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` має повертати рядок `pony`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` має повертати рядок `kitten`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` має повертати рядок `Not Found`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` має повертати рядок `Seattle`.

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` має повертати рядок `Not Found`.

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` має повертати рядок `Not Found`.

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

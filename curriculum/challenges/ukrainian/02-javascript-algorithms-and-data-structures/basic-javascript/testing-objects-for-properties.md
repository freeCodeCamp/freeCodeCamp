---
id: 567af2437cbaa8c51670a16c
title: Перевірка властивостей об’єктів
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

Щоб перевірити, чи існує властивість даного об’єкта, ви можете скористатися методом `.hasOwnProperty()`. `someObject.hasOwnProperty(someProperty)` повертає `true` або `false` залежно від того, знайдено властивість в об’єкті чи ні.

**Приклад**

```js
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
```

Перший виклик функції `checkForProperty` повертає `true`, а другий повертає `false`.

# --instructions--

Змініть функцію `checkObj` так, щоб вона перевіряла, чи переданий до функції параметр `obj` містить певну властивість, передану параметру функції `checkProp`. Якщо властивість, передану до `checkProp`, знайдено в `obj`, поверніть значення цієї властивості. Якщо ні, поверніть `Not Found`.

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

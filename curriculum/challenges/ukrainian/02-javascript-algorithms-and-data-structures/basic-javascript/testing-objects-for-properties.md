---
id: 567af2437cbaa8c51670a16c
title: Тестування властивостей об'єктів
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

Іноді варто перевіряти чи даний об'єкт вже має певні властивості. Ми можемо використовувати метод об'єктів `.hasOwnProperty(propname)`, щоб визначити чи об'єкт має ім'я властивості. `.hasOwnProperty()` показує `true` чи `false`, в залежності чи властивість знайдена, чи ні.

**Наприклад**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

Перший `hasOwnProperty` стає `true`, а другий - `false`.

# --instructions--

Змініть функцію `checkObj`, щоб перевірити чи об'єкт переданий до функції (`obj`) містить особливу властивість (`checkProp`). Якщо властивість знайдена, поверніть значення властивості. Якщо ні, поверніть `"Not Found"`.

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` має повернути рядок `pony`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` має повернути рядок `kitten`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` має повернути рядок `Not Found`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` має повернути рядок `Seattle`.

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` має повернути рядок `Not Found`.

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` має повернути рядок `Not Found`.

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

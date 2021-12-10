---
id: 598f48a36c8c40764b4e52b3
title: Запобігання мутаціям об'єкта
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

З попереднього завдання бачимо, що `const` насправді не захищає ваші дані від змін. Щоб ваші дані не змінилися, JavaScript надає функцію `Object.freeze` для запобігання мутації даних.

Будь -яка спроба змінити об'єкт буде відхилена, з помилкою, якщо тег працює в строгому режимі.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

The `obj.review` and `obj.newProp` призначення призведе до помилок, тому що наш редактор за замовчуванням працює в строгому режимі,і консоль покаже значення `{ name: "FreeCodeCamp", review: "Awesome" }`.

# --instructions--

У цьому завданні вам доведеться використовувати `Object.freeze` для запобігання зміни математичних констант. Вам необхідно заморозити об'єкт `MATH_CONSTANTS` так, щоб ніхто не зміг змінити значення `PI`, додати або видалити властивості.

# --hints--

Вам не слід замінювати ключове слово `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` має бути постійною змінною (використовуйте `const`).

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

Вам не слід змінювати початкове значення `MATH_CONSTANTS`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

`PI` має дорівнювати `3.14`.

```js
assert(PI === 3.14);
```

# --seed--

## --seed-contents--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

# --solutions--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

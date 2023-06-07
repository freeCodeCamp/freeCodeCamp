---
id: 598f48a36c8c40764b4e52b3
title: Запобігання мутаціям об’єкта
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

Як ми побачили у попередньому завданні, саме оголошення `const` не дуже захищає ваші дані від мутацій. Щоб запобігти зміни даних, JavaScript надає функцію `Object.freeze` для запобігання мутації даних.

Будь-яка спроба змінити об’єкт буде відхилена з повідомленням про помилку, якщо скрипт виконується в строгому режимі.

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

Присвоєння `obj.review` й `obj.newProp` призведуть до помилок, оскільки наш редактор за замовчуванням працює в строгому режимі та консоль покаже значення `{ name: "FreeCodeCamp", review: "Awesome" }`.

# --instructions--

У цьому завданні ви використовуватимете `Object.freeze`, щоб запобігти зміни математичних констант. Ви повинні заморозити об’єкт `MATH_CONSTANTS` так, щоб ніхто не зміг змінити значення `PI`, додати чи видалити властивості.

# --hints--

Ви не повинні замінювати ключове слово `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` повинна бути константною змінною (використовуйте `const`).

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

Ви не повинні змінювати початкове оголошення `MATH_CONSTANTS`.

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

---
id: 56533eb9ac21ba0edf2244c9
title: Доступ до властивостей об’єкту за допомогою змінних
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

Дужкову нотацію також можна використати на об’єктах, щоб отримати доступ до властивостей, що зберігаються як значення змінної. Це може бути дуже корисно при ітерації властивостей об’єкта або при отриманні доступу до пошукової таблиці.

Ось приклад використання змінної для отримання доступу до властивостей:

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```

На консолі відображатиметься рядок `Doberman`.

Зверніть увагу, що ми *не* використовуємо лапки із назвами змінних, якщо використовуємо їх для доступу до властивостей, оскільки ми використовуємо *значення* змінної, а не *назву*.

# --instructions--

Встановіть змінну `playerNumber` на `16`. Потім використайте змінну для пошуку імені гравця та призначте її до `player`.

# --hints--

`playerNumber` повинен бути числом

```js
assert(typeof playerNumber === 'number');
```

Змінна `player` повинна бути рядком

```js
assert(typeof player === 'string');
```

Значенням `player` повинен бути рядок `Montana`

```js
assert(player === 'Montana');
```

Щоб отримати доступ до `testObj`, використайте дужкову нотацію

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

Не присвоюйте значення `Montana` до змінної `player` напряму.

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

Ви повинні використати змінну `playerNumber` у своїй дужковій нотації

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

```js
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj;   // Change this line
```

# --solutions--

```js
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];
```

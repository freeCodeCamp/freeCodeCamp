---
id: 56533eb9ac21ba0edf2244c9
title: Доступ до властивостей об'єкту за допомогою змінних
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

Ще одне використання дужкової нотації на об'єктах полягає в доступі до властивостей, які зберігаються у вигляді змінної величини. Це може бути дуже корисним для ітерації властивостей об'єкта або при отриманні доступу до пошукової таблиці.

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

У консолі відображатиметься рядок `Doberman`.

Інший спосіб, у який можна використовувати цей метод, - коли назви властивостей активно накопичуються протягом роботи у програмі, як показано далі:

```js
const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
```

`someProp` матиме значення рядка `propName`, і рядок `John` відображатиметься в консолі.

Зверніть увагу, що ми *не* використовуємо лапки із змінними назвами, коли нам потрібен доступ до властивостей, тому що ми використовуємо *значення* змінної, а не її *назву*.

# --instructions--

Вкажіть, що `playerNumber` може змінюватися до `16`. Потім використовуйте змінну для пошуку імені гравця та закріпіть її за `player`.

# --hints--

`playerNumber` має бути числом

```js
assert(typeof playerNumber === 'number');
```

Змінна `player` повинна бути рядком

```js
assert(typeof player === 'string');
```

Значення `player` повинне бути рядком `Montana`

```js
assert(player === 'Montana');
```

Використовуйте дужкову нотацію, щоб отримати доступ до `testObj`

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

Значення `Montana` не можна закріплювати безпосередньо за змінною `player`.

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

Слід використовувати змінну `playerNumber` у квадратних дужках

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

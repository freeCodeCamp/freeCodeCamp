---
id: 587d7b7c367417b2b2512b18
title: Додавання пар ключ-значення до об’єктів JavaScript
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

По суті, об’єкти — це просто набори пар <dfn>ключ-значення</dfn>. Іншими словами, це фрагменти даних (<dfn>значення</dfn>), зіставлені з унікальними ідентифікаторами, що називаються <dfn>властивостями</dfn> (<dfn>ключами</dfn>). Розглянемо приклад:

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

Наведений вище код визначає об’єкт персонажа відеоігри «Tekken» під назвою `tekkenCharacter`. У нього є три властивості, кожна з яких відповідає певному значенню. Якщо ви хочете додати додаткову властивість, як-от «origin», це можна зробити, призначивши `origin` до об’єкта:

```js
tekkenCharacter.origin = 'South Korea';
```

Тут використовується точкова нотація. Якщо ви спостерігали за об'єктом `tekkenCharacter`, то тепер він містить властивість `origin`. У Хварана також було яскраво-помаранчеве волосся. Ви можете додати цю властивість завдяки дужковій нотації:

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

Дужкова нотація потрібна, якщо у вашій властивості є пробіл або ви хочете використовувати змінну, щоб назвати властивість. У наведеному вище випадку властивість розміщується в лапках, щоб позначити її як рядок і вона буде додана точно так, як показано. Без лапок вона буде оцінюватися як змінна, а ім’ям властивості буде значення змінної. Ось приклад зі змінною:

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

Після додавання всіх прикладів об’єкт буде виглядати так:

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

# --instructions--

Об’єкт `foods` був створений з трьома записами. Використовуючи обраний синтаксис, додайте до нього ще три записи: `bananas` зі значенням `13`, `grapes` зі значенням `35` та `strawberries` зі значенням `27`.

# --hints--

`foods` має бути об’єктом.

```js
assert(typeof foods === 'object');
```

Об’єкт `foods` повинен мати ключ `bananas` зі значенням `13`.

```js
assert(foods.bananas === 13);
```

Об’єкт `foods` повинен мати ключ `grapes` зі значенням `35`.

```js
assert(foods.grapes === 35);
```

Об’єкт `foods` повинен мати ключ `strawberries` зі значенням `27`.

```js
assert(foods.strawberries === 27);
```

Не змінюйте визначення об’єкта `foods`.

```js
assert(
  __helpers.removeJSComments(code).search(/let foods/) === -1 &&
  __helpers.removeJSComments(code).search(/const\s+foods\s*=\s*{\s*apples:\s*25,\s*oranges:\s*32,\s*plums:\s*28\s*};/
) !== -1
);
```

# --seed--

## --seed-contents--

```js
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```

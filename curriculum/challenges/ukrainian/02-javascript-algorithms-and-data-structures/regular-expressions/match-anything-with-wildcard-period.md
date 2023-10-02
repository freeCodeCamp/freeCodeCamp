---
id: 587d7db5367417b2b2512b94
title: Пошук збігів за допомогою байдужої крапки
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

Іноді ви не знатимете (або вам не потрібно знати) символи шаблонів. Обмірковування усіх слів, які відповідають, скажімо, орфографічній помилці, займе багато часу. На щастя, ви можете заощадити час, використавши байдужий символ: `.`

Байдужий символ `.` збігається з будь-яким одним символом. Байдужий символ також називають крапкою (англ. `dot` та `period`). Цей байдужий символ використовують як і будь-який інший символ у регулярному виразі. Наприклад, якщо ви хочете знайти збіги `hug`, `huh`, `hut` та `hum`, то використайте регулярний вираз `/hu./` для усіх чотирьох слів.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

Обидва виклики `test` повернуть `true`.

# --instructions--

Допишіть регулярний вираз `unRegex`, щоб він збігався з рядками `run`, `sun`, `fun`, `pun`, `nun` та `bun`. Ваш регулярний вираз має використати байдужий символ.

# --hints--

Використайте метод `.test()`.

```js
assert(code.match(/\.test\(.*\)/));
```

Використайте байдужий символ у регулярному виразі `unRegex`

```js
assert(/\./.test(unRegex.source));
```

Ваш регулярний вираз `unRegex` повинен збігатися з `run` у рядку `Let us go on a run.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

Ваш регулярний вираз `unRegex` повинен збігатися з `sun` у рядку `The sun is out today.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

Ваш регулярний вираз `unRegex` повинен збігатися з `fun` у рядку `Coding is a lot of fun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

Ваш регулярний вираз `unRegex` повинен збігатися з `pun` у рядку `Seven days without a pun makes one weak.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

Ваш регулярний вираз `unRegex` повинен збігатися з `nun` у рядку `One takes a vow to be a nun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

Ваш регулярний вираз `unRegex` повинен збігатися з `bun` у рядку `She got fired from the hot dog stand for putting her hair in a bun.`

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

Ваш регулярний вираз `unRegex` не повинен збігатися з рядком `There is a bug in my code.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

Ваш регулярний вираз `unRegex` не повинен збігатися з рядком `Catch me if you can.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('Catch me if you can.'));
```

# --seed--

## --seed-contents--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

# --solutions--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```

---
id: 587d7db4367417b2b2512b90
title: Пошук точних збігів рядка з різними варіантами
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

За допомогою таких регулярних виразів, як `/coding/` можна шукати шаблон `coding` в іншому рядку.

Це корисно для пошуку окремих рядків, але він обмежений лише одним шаблоном. Ви можете шукати кілька шаблонів одразу за допомогою оператора `alternation` або `OR`: `|`.

Цей оператор знаходить збіги шаблонів до або після нього. Наприклад, якщо ви хочете знайти збіги рядків `yes` або `no`, ваш регулярний вираз матиме такий вигляд: `/yes|no/`.

Ви також можете шукати більше ніж два шаблони одночасно. Ви можете зробити це, додавши більше шаблонів з більшою кількістю операторів `OR`, що їх розділяють, наприклад: `/yes|no|maybe/`.

# --instructions--

Напишіть регулярний вираз `petRegex`, який відповідав би таким домашнім тваринам: `dog`, `cat`, `bird` або `fish`.

# --hints--

Ви маєте отримати `true` для рядка `John has a pet dog.` за допомогою вашого регулярного виразу `petRegex`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

Ви маєте отримати `false` для рядка `Emma has a pet rock.` за допомогою вашого регулярного виразу `petRegex`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

Ви маєте отримати `true` для рядка `Emma has a pet bird.` за допомогою вашого регулярного виразу `petRegex`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

Ви маєте отримати `true` для рядка `Liz has a pet cat.` за допомогою вашого регулярного виразу `petRegex`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

Ви маєте отримати `false` для рядка `Kara has a pet dolphin.` за допомогою вашого регулярного виразу `petRegex`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

Ви маєте отримати `true` для рядка `Alice has a pet fish.` за допомогою вашого регулярного виразу `petRegex`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

Ви маєте отримати `false` для рядка `Jimmy has a pet computer.` за допомогою вашого регулярного виразу `petRegex`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```

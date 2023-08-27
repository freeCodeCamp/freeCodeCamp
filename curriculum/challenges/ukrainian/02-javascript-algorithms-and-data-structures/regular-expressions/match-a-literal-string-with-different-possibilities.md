---
id: 587d7db4367417b2b2512b90
title: Точні збіги рядка з різними варіантами
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

За допомогою регулярних виразів, як-от `/coding/`, можна знайти шаблон `coding` в іншому рядку.

Це корисно для пошуку окремих рядків, але обмежено лише одним шаблоном. Декілька шаблонів можна знайти за допомогою оператора `alternation` або `OR`: `|`.

Цей оператор знаходить збіги шаблонів до або після нього. Наприклад, якщо ви хочете знайти збіги рядків `yes` або `no`, вам знадобиться регулярний вираз `/yes|no/`.

Ви можете шукати більше двох шаблонів. Для цього додайте більше шаблонів та операторів `OR`, розділивши їх: `/yes|no|maybe/`.

# --instructions--

Допишіть регулярний вираз `petRegex`, щоб він збігався з тваринами `dog`, `cat`, `bird` чи `fish`.

# --hints--

Ваш регулярний вираз `petRegex` має повернути `true` для рядка `John has a pet dog.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

Ваш регулярний вираз `petRegex` має повернути `false` для рядка `Emma has a pet rock.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

Ваш регулярний вираз `petRegex` має повернути `true` для рядка `Emma has a pet bird.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

Ваш регулярний вираз `petRegex` має повернути `true` для рядка `Liz has a pet cat.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

Ваш регулярний вираз `petRegex` має повернути `false` для рядка `Kara has a pet dolphin.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

Ваш регулярний вираз `petRegex` має повернути `true` для рядка `Alice has a pet fish.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

Ваш регулярний вираз `petRegex` має повернути `false` для рядка `Jimmy has a pet computer.`

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

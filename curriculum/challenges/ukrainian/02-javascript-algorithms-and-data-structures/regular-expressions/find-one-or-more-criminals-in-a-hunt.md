---
id: 587d7db7367417b2b2512b9c
title: Знайдіть одного або більше злочинців у переслідуванні
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

Настав час зупинитися та перевірити ваші нові навички написання регулярних виразів. Група злочинців втекла з в'язниці, але ви не знаєте скільки. Однак ви знаєте, що вони тримаються разом, коли довкола них інші люди. Ви відповідаєте за те, щоб знайти всіх злочинців одразу.

Ось приклад, який допоможе вам розібратися, як це зробити:

Регулярний вираз `/z+/` відповідає літері `z`, коли вона з'являється один або кілька разів поспіль. Він знайде збіги в усіх цих рядках:

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

Але він не знайде збігів у цих рядках, оскільки в них немає жодного символу на позначення літери `z`:

```js
""
"ABC"
"abcabc"
```

# --instructions--

Напишіть "жадібний" регулярний вираз, який знайде одного або кількох злочинців в групі інших людей. Злочинець позначений великою літерою `C`.

# --hints--

Ваш регулярний вираз повинен збігатися з одним злочинцем (`C`) у рядку `C`

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

Ваш регулярний вираз повинен збігатися з двома злочинцями (`CC`) у рядку `CC`

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

Ваш регулярний вираз повинен збігатися з трьома злочинцями (`CCC`) у рядку `P1P5P4CCCcP2P6P3`.

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

Ваш регулярний вираз повинен збігатися з п’ятьма злочинцями (`CCCCC`) у рядку `P6P2P7P4P5CCCCCP3P1`

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

Ваш регулярний вираз не повинен збігатися з жодним злочинцем у порожньому рядку `""`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

Ваш регулярний вираз не повинен збігатися з жодним злочинцем у рядку `P1P2P3`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

Ваш регулярний вираз повинен збігатися з п’ятдесятьма злочинцями (`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) у рядку `P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3`.

```js
assert(
  'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
    reCriminals
  ) &&
    'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
      reCriminals
    )[0] == 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
);
```

# --seed--

## --seed-contents--

```js
let reCriminals = /./; // Change this line
```

# --solutions--

```js
let reCriminals = /C+/; // Change this line
```

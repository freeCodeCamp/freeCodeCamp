---
id: 587d7dba367417b2b2512ba9
title: Позитивні та негативні перегляди вперед
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

<dfn>Перегляди вперед</dfn> — це шаблони, які вказують JavaScript заглянути у рядок заздалегідь, щоб перевірити подальші шаблони. Це може бути корисно при пошуку декількох шаблонів в одному рядку.

Існує два види переглядів: <dfn>позитивні</dfn> та <dfn>негативні</dfn>.

Позитивний перегляд виконуватиме пошук, щоб переконатись, що елемент з шаблону пошуку існує, але не збігатиметься з ним. Позитивний перегляд використовують як `(?=...)`, де `...` є необхідною частиною, яка не збігається.

А негативний перегляд виконує пошук, щоб переконатись, що елемент з шаблону пошуку не існує. Негативний перегляд використовують як `(?!...)`, де `...` є шаблоном, який ви не хочете бачити. Решта шаблону повертається, якщо частина негативного перегляду відсутня.

Перегляди вперед трохи заплутані, але декілька прикладів допоможуть вам.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

Обидва виклики `match` повернуть `["q"]`.

Перегляди вперед практичніше використовувати для перевірки двох чи більше шаблонів в одному рядку. Ось проста перевірка пароля, яка шукає від 3 до 6 символів і принаймні одне число:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

Використайте перегляди вперед у `pwRegex`, щоб збігались паролі, більші за 5 символів та які мають дві послідовні цифри.

# --hints--

Ваш регулярний вираз має використати два позитивних `lookaheads`.

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

Ваш регулярний вираз не повинен збігатися з рядком `astronaut`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

Ваш регулярний вираз не повинен збігатися з рядком `banan1`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

Ваш регулярний вираз повинен збігатися з рядком `bana12`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

Ваш регулярний вираз повинен збігатися з рядком `abc123`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

Ваш регулярний вираз не повинен збігатися з рядком `12345`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

Ваш регулярний вираз повинен збігатися з рядком `8pass99`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

Ваш регулярний вираз не повинен збігатися з рядком `1a2bcde`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

Ваш регулярний вираз не повинен збігатися з рядком `astr1on11aut`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```

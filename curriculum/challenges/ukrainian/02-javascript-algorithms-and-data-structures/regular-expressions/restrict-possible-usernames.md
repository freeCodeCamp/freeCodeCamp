---
id: 587d7db8367417b2b2512ba2
title: Обмеження доступних імен користувачів
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

Імена користувачів використовуються скрізь в інтернеті. Вони дають користувачам унікальний обліковий запис на їхніх улюблених сайтах.

Вам потрібно перевірити всі імена користувачів у базі даних. Ось кілька простих правил, яких користувачі повинні дотримуватись при створенні імені користувача.

1) Користувачі можуть використовувати лише алфавітно-цифрові символи.

2) Числа повинні бути лише в кінці імені користувача. У кінці їх може бути нуль або більше. Ім'я користувача не повинно починатися з числа.

3) Літери в імені користувача можуть бути нижнього та верхнього регістру.

4) Імена користувачів повинні містити щонайменше два символи. Ім'я користувача з двох символів може містити лише символи літер алфавіту.

# --instructions--

Змініть регулярний вираз `userCheck`, щоб він відповідав обмеженням, зазначеним вище.

# --hints--

Ваш регулярний вираз повинен збігатися з рядком `JACK`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

Ваш регулярний вираз не повинен збігатися з рядком `J`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

Ваш регулярний вираз повинен збігатися з рядком `Jo`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

Ваш регулярний вираз повинен збігатися з рядком `Oceans11`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

Регулярний вираз повинен збігатися з рядком `RegexGuru`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

Регулярний вираз не повинен збігатися з рядком `007`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

Ваш регулярний вираз не повинен збігатися з рядком `9`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

Ваш регулярний вираз не повинен збігатися з рядком `A1`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

Ваш регулярний вираз не повинен збігатися з рядком `BadUs3rnam3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

Ваш регулярний вираз повинен збігатися з рядком `Z97`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

Регулярний вираз не повинен збігатися з рядком `c57bT3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

Ваш регулярний вираз повинен збігатися з рядком `AB1`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

Ваш регулярний вираз не повинен збігатися з рядком `J%4`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J%4'))
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```

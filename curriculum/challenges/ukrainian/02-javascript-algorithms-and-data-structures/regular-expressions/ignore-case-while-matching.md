---
id: 587d7db4367417b2b2512b91
title: Пошук збігів без урахування регістру
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

Дотепер ви вивчали регулярні вирази, які знаходять точні збіги рядків. Але іноді ви, можливо, захочете також знайти збіги без урахування регістру.

Регістр (інколи регістр літер) - це різниця між великими та малими літерами. Прикладами великих літер є `A`, `B` і `C`. Прикладами малих літер є `a`, `b` і `c`.

Ви можете знаходити збіги обох регістрів за допомогою так званого прапорця. Існують інші прапорці, але тут ви зосередитесь на тому, який не враховує регістр - `i`. Ви можете використати його, додавши до регулярного виразу. Прикладом використання цього прапорця є `/ignorecase/i`. Цей регулярний вираз може відповідати рядкам `ignorecase`, `igNoreCase` та `IgnoreCase`.

# --instructions--

Напишіть регулярний вираз `fccRegex`, щоб знайти `freeCodeCamp` незалежно від регістру. Ваш регулярний вираз не повинен збігатися зі скороченнями або варіаціями з пробілами.

# --hints--

Ваш регулярний вираз повинен збігатися з рядком `freeCodeCamp`

```js
fccRegex.lastIndex = 0; 
assert(fccRegex.test('freeCodeCamp'));
```

Ваш регулярний вираз повинен збігатися з рядком `FreeCodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodeCamp'));
```

Ваш регулярний вираз повинен збігатися з рядком `FreecodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreecodeCamp'));
```

Ваш регулярний вираз повинен збігатися з рядком `FreeCodecamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodecamp'));
```

Ваш регулярний вираз не повинен збігатися з рядком `Free Code Camp`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('Free Code Camp'));
```

Ваш регулярний вираз повинен збігатися з рядком `FreeCOdeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCOdeCamp'));
```

Ваш регулярний вираз не повинен збігатися з рядком `FCC`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('FCC'));
```

Ваш регулярний вираз повинен збігатися з рядком `FrEeCoDeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCoDeCamp'));
```

Ваш регулярний вираз повинен збігатися з рядком `FrEeCodECamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCodECamp'));
```

Ваш регулярний вираз повинен збігатися з рядком `FReeCodeCAmp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FReeCodeCAmp'));
```

# --seed--

## --seed-contents--

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

# --solutions--

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```

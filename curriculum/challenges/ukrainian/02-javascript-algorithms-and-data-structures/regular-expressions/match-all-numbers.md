---
id: 5d712346c441eddfaeb5bdef
title: Збіги усіх цифр
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

Ви дізнались про скорочення поширених шаблонів, наприклад, алфавітно-цифрового. Іншим поширеним шаблоном є пошук цифр або чисел.

Скороченням для пошуку цифрових символів є `\d`, з `d` у нижньому регістрі. Це дорівнює символьному класу `[0-9]`, який шукає окремий символ, що є цифрою від 0 до 9.

# --instructions--

Використайте скорочений символьний клас `\d`, щоб підрахувати кількість цифрових символів у назвах фільмів. Числа прописом («шість» замість 6) не враховуються.

# --hints--

Ваш регулярний вираз має містити символ скорочення, щоб знайти збіги з цифровими символами

```js
assert(/\\d/.test(numRegex.source));
```

Ваш регулярний вираз має використати глобальний прапорець.

```js
assert(numRegex.global);
```

Ваш регулярний вираз повинен знайти 1 цифровий символ у рядку `9`.

```js
assert('9'.match(numRegex).length == 1);
```

Ваш регулярний вираз повинен знайти 2 цифрових символи у рядку `Catch 22`.

```js
assert('Catch 22'.match(numRegex).length == 2);
```

Ваш регулярний вираз повинен знайти 3 цифрових символи у рядку `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

Ваш регулярний вираз не повинен знайти цифрових символів у рядку `One, Two, Three`.

```js
assert('One, Two, Three'.match(numRegex) == null);
```

Ваш регулярний вираз повинен знайти 2 цифрові символи у рядку `21 Jump Street`.

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

Ваш регулярний вираз повинен знайти 4 цифрові символи у рядку `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```

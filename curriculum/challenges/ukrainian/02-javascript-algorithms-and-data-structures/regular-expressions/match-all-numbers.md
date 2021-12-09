---
id: 5d712346c441eddfaeb5bdef
title: Пошук збігів з усіма числовими символами
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

Ви вивчили скорочення для поширених шаблонів, наприклад для алфавітно-цифрового. Ще один поширений шаблон це пошук лише цифр або чисел.

Скорочення для пошуку цифрових символів `\d`, з нижнім регістром `d`. Це дорівнює класу символів `[0-9]`, який шукає окремий символ, що є числом від 0 до 9.

# --instructions--

Застосуйте скорочений клас символів `\d`, щоб підрахувати кількість цифрових символів у назвах фільмів. Числа прописом («шість» замість 6) не рахуються.

# --hints--

Ваш регулярний вираз повинен містити скорочений символ, щоб знайти збіги з цифровими символами

```js
assert(/\\d/.test(numRegex.source));
```

Ваш регулярний вираз повинен використовувати глобальний прапорець.

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

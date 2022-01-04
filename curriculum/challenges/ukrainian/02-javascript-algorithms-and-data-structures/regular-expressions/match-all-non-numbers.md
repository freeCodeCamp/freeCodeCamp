---
id: 587d7db8367417b2b2512ba1
title: Пошук збігів з усіма нечисловими символами
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

У попередньому завданні показано, як шукати цифри, використовуючи скорочення `\d` за допомогою малої літери `d`. Ви також можете шукати нецифрові символи за допомогою скорочення, яке використовує велику літеру `D`.

Скорочення для пошуку нецифрових символів - `\D`. Це дорівнює класу символів `[^0-9]`, який шукає окремий символ, що не є числом від 0 до 9.

# --instructions--

Застосуйте скорочений клас символів для нецифрових символів `\D`, щоб підрахувати кількість нецифрових символів у назвах фільмів.

# --hints--

Ваш регулярний вираз повинен містити скорочений символ, щоб знайти збіги з нецифровими символами

```js
assert(/\\D/.test(noNumRegex.source));
```

Ваш регулярний вираз повинен використовувати глобальний прапорець.

```js
assert(noNumRegex.global);
```

Ваш регулярний вираз не повинен знайти жодних нецифрових символів у рядку `9`.

```js
assert('9'.match(noNumRegex) == null);
```

Ваш регулярний вираз повинен знайти 6 нецифрових символів у рядку `Catch 22`.

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

Ваш регулярний вираз повинен знайти 11 нецифрових символів у рядку `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

Ваш регулярний вираз повинен знайти 15 нецифрових символів у рядку `One, Two, Three`.

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

Ваш регулярний вираз повинен знайти 12 нецифрових символів у рядку `21 Jump Street`.

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

Ваш регулярний вираз повинен знайти 17 нецифрових символів у рядку `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```

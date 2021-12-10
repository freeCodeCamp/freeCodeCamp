---
id: 587d7db7367417b2b2512b9f
title: Пошук збігів з усіма літерами та числами
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

Використовуючи класи символів, ви мали змогу шукати всі літери алфавіту за допомогою `[a-z]`. Цей клас символів настільки поширений, що для нього існує скорочення, хоча воно й містить декілька додаткових символів.

Найближчий клас символів у JavaScript, який дозволяє встановити відповідність з алфавітом, - `\w`. Це скорочення дорівнює `[A-Za-z0-9_]`. Цей клас символів відповідає великим і малим літерам та числам. Зверніть увагу, що цей клас символів також містить символ підкреслення (`_`).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```

У результаті використання усіх чотирьох викликів `test` ви отримаєте `true`.

Ці скорочення класів символів також відомі як <dfn>скорочення класів символів</dfn>.

# --instructions--

Застосуйте скорочення класу символів `\w`, щоб підрахувати кількість буквено-цифрових символів у різних цитатах і рядках.

# --hints--

Ваш регулярний вираз повинен використовувати глобальний прапорець.

```js
assert(alphabetRegexV2.global);
```

Ваш регулярний вираз повинен використовувати скорочений символ `\w`, щоб встановити відповідність з усіма символами, які є буквено-цифровими.

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

Ваш регулярний вираз повинен знайти 31 буквено-цифровий символ в рядку `The five boxing wizards jump quickly.`

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

Ваш регулярний вираз повинен знайти 32 буквено-цифрових символи в рядку `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

Ваш регулярний вираз повинен знайти 30 буквено-цифрових символів у рядку `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

Ваш регулярний вираз повинен знайти 36 буквено-цифрових символів у рядку `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(alphabetRegexV2)
    .length === 36
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

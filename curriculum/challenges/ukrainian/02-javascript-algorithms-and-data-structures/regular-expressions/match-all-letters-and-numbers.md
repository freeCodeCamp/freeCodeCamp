---
id: 587d7db7367417b2b2512b9f
title: Збіги усіх літер та чисел
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

Використовуючи символьні класи, ви знайшли всі літери алфавіту за допомогою `[a-z]`. Такий тип символьних класів настільки популярний, що для нього існує скорочення, хоча воно й містить декілька додаткових символів.

Символьним класом, який дозволяє виконати найближчий збіг з алфавітом, є `\w`. Це скорочення дорівнює `[A-Za-z0-9_]`. Цей символьний клас відповідає великим і малим літерам та числам. Зверніть увагу, що цей символьний клас також містить знак підкреслення (`_`).

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

Усі чотири виклики `test` повернуть `true`.

Скорочені позначення символьних класів також відомі як <dfn>скорочені символьні класи</dfn>.

# --instructions--

Використайте скорочений символьний клас `\w`, щоб підрахувати кількість алфавітно-цифрових символів у різних цитатах і рядках.

# --hints--

Ваш регулярний вираз має використати глобальний прапорець.

```js
assert(alphabetRegexV2.global);
```

Ваш регулярний вираз має використати скорочений символ `\w`, щоб збігатись з усіма алфавітно-цифровими символами.

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

Ваш регулярний вираз повинен знайти 31 алфавітно-цифровий символ у рядку `The five boxing wizards jump quickly.`

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

Ваш регулярний вираз повинен знайти 32 алфавітно-цифрових символів у рядку `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

Ваш регулярний вираз повинен знайти 30 алфавітно-цифрових символів у рядку `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

Ваш регулярний вираз повинен знайти 36 алфавітно-цифрових символів у рядку `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

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

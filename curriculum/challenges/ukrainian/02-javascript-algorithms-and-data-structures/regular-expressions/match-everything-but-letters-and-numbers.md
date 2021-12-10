---
id: 587d7db8367417b2b2512ba0
title: Встановлення відповідності між усім, крім літер та чисел
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

Ви вже дізналися, що можна використовувати скорочення для пошуку відповідності алфавітно-цифрового індикатора `[A-Za-z0-9_]`, використовуючи `\w`. Звісно, вам може бути потрібно знайти протилежне до алфавітно-цифрового індикатора.

Ви можете знайти протилежне значення функції `\w` з `\W`. Майте на увазі, що протилежний шаблон використовується з великою літерою. Це скорочення збігається з `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

Перший виклик `match` повернеться як `["%"]`, а другий — як `["!"]`.

# --instructions--

Застосуйте скорочення класу символів `\W`, щоб підрахувати кількість алфавітно-цифрових символів у різних цитатах і рядках.

# --hints--

Ваш регулярний вираз повинен використовувати глобальний прапорець.

```js
assert(nonAlphabetRegex.global);
```

Ваш регулярний вираз повинен знайти 6 не алфавітно-цифрових символів у рядку `The five boxing wizards jump quickly.`.

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

Ваш регулярний вираз повинен використовувати символи скорочення, щоб знайти відповідності до не алфавітно-цифрових символів.

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

Ваш регулярний вираз повинен знайти 8 не алфавітно-цифрових символів у рядку `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

Ваш регулярний вираз повинен знайти 6 не алфавітно-цифрових символів у рядку `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

Ваш регулярний вираз повинен знайти 12 не алфавітно-цифрових символів у рядку `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex)
    .length == 12
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

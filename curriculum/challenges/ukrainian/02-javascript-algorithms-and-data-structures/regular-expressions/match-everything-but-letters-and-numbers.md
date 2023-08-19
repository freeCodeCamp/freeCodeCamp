---
id: 587d7db8367417b2b2512ba0
title: Збіги усього, крім літер та чисел
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

Ви дізнались про скорочення для збігів алфавітно-цифрових символів `[A-Za-z0-9_]` за допомогою `\w`. Можливо, вам знадобиться знайти протилежний шаблон.

Ви можете знайти протилежність до `\w` за допомогою `\W`. Зверніть увагу, що використовується велика літера. Це скорочення позначає те й саме, що `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

Перший виклик `match` поверне значення `["%"]`, а другий поверне `["!"]`.

# --instructions--

Використайте скорочений символьний клас `\W`, щоб підрахувати кількість неалфавітно-цифрових символів у різних цитатах і рядках.

# --hints--

Ваш регулярний вираз має використати глобальний прапорець.

```js
assert(nonAlphabetRegex.global);
```

Ваш регулярний вираз повинен знайти 6 неалфавітно-цифрових символів у рядку `The five boxing wizards jump quickly.`.

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

Ваш регулярний вираз має використати скорочений символ, щоб збігатись з усіма неалфавітно-цифровими символами.

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

Ваш регулярний вираз повинен знайти 8 неалфавітно-цифрових символів у рядку `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

Ваш регулярний вираз повинен знайти 6 неалфавітно-цифрових символів у рядку `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

Ваш регулярний вираз повинен знайти 12 неалфавітно-цифрових символів у рядку `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

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

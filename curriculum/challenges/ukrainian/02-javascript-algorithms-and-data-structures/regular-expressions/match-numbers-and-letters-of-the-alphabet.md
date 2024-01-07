---
id: 587d7db5367417b2b2512b97
title: Збіги чисел та літер алфавіту
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

Дефіс (`-`) не обмежується лише літерами. Він також працює для пошуку діапазону чисел.

Наприклад, `/[0-5]/` збігається з будь-яким числом від `0` до `5`, включно з `0` та `5`.

В одному наборі символів можливо поєднати діапазон літер та чисел.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

Створіть регулярний вираз, який збігається з діапазоном літер від `h` до `s` та діапазоном чисел від `2` до `6`. Не забудьте використати відповідні прапорці у регулярному виразі.

# --hints--

Ваш регулярний вираз `myRegex` має знайти збіги для 17 елементів.

```js
assert(result.length == 17);
```

Ваш регулярний вираз `myRegex` має використати глобальний прапорець.

```js
assert(myRegex.flags.match(/g/).length == 1);
```

Ваш регулярний вираз `myRegex` має використати прапорець без урахування регістру.

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```

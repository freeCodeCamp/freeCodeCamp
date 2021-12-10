---
id: 587d7db5367417b2b2512b97
title: Встановлення відповідності до чисел та літер алфавіту
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

Використання дефіса (`-`) для пошуку діапазону символів не обмежується літерами. Це також працює і для пошуку діапазону чисел.

Наприклад, `/[0-5]/` відповідає будь-якому числу від `0` до `5`, включаючи `0` і `5`.

Також можливим є поєднання діапазону літер і чисел в одному наборі символів.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

Створіть регулярний вираз, який відповідає діапазону літер від `h` до `s`, а також діапазону чисел від `2` до `6`. Не забудьте включити відповідні прапорці у регулярному виразі.

# --hints--

Ваш регулярний вираз `myRegex` повинен збігатися з 17 елементами.

```js
assert(result.length == 17);
```

Ваш регулярний вираз `myRegex` повинен використовувати глобальний прапорець.

```js
assert(myRegex.flags.match(/g/).length == 1);
```

Ваш регулярний вираз `myRegex` повинен використовувати прапорець без урахування регістру.

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

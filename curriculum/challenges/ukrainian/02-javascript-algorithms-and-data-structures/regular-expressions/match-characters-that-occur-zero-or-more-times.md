---
id: 587d7db6367417b2b2512b9a
title: Збіги символів, які трапляються нуль чи більше разів
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

У попередньому завданні ми використали `+`, щоб знайти символи, які зустрічаються один чи більше разів. Існує й варіант пошуку символів, які зустрічаються нуль чи більше разів.

Для цього використовують зірочку: `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

Три виклики `match` повернуть значення `["goooooooo"]`, `["g"]` та `null` по черзі.

# --instructions--

Для цього завдання `chewieQuote` було ініціалізовано як рядок `Aaaaaaaaaaaaaaaarrrgh!`. Створіть регулярний вираз `chewieRegex`, який використовує символ `*`, щоб збігтися з символом `A` у верхньому регістрі, за яким одразу стоїть нуль чи більше символів `a` у нижньому регістрі в `chewieQuote`. Ваш регулярний вираз не потребує прапорців чи символьних класів, а також не може збігатися з іншими цитатами.

# --hints--

Ваш регулярний вираз `chewieRegex` має використати символ `*`, щоб збігтися з нуль чи більше символами `a`.

```js
assert(/\*/.test(chewieRegex.source));
```

Ваш регулярний вираз повинен збігатися з рядком `A` у `chewieQuote`.

```js
assert(result[0][0] === 'A');
```

Ваш регулярний вираз повинен збігатися з рядком `Aaaaaaaaaaaaaaaa` у `chewieQuote`.

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

Ваш регулярний вираз `chewieRegex` повинен збігатися з 16 символами у `chewieQuote`.

```js
assert(result[0].length === 16);
```

Ваш регулярний вираз не повинен збігатися з рядком `He made a fair move. Screaming about it can't help you.`

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

Ваш регулярний вираз не повинен збігатися з жодним символом рядка `Let him have it. It's not wise to upset a Wookiee.`

```js
assert(
  !"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex)
);
```

# --seed--

## --before-user-code--

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

## --seed-contents--

```js
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

# --solutions--

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```

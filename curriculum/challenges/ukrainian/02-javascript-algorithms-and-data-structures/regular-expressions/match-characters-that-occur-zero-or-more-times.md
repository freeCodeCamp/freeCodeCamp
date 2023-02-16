---
id: 587d7db6367417b2b2512b9a
title: Пошук збігів, що трапляються нуль чи більше разів
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

Останнє завдання потребувало використання знака `+` для пошуку символів, що зустрічаються один чи більше разів. Існує також варіант пошуку символів, що зустрічаються нуль чи більше разів.

Символ, за допомогою якого це можна зробити, називається "астерікс" або "зірочка": `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

По черзі три виклики `match` повернуть значення `["goooooooo"]`, `["g"]` та `null`.

# --instructions--

Для цього завдання, `chewieQuote` було привласнено значення рядка `Aaaaaaaaaaaaaaaarrrgh!` за замовчуванням. Створіть регулярний вираз `chewieRegex`, що використовує символ `*`, для пошуку збігів з великим символом `A`, за яким одразу стоїть нуль чи більша кількість маленьких символів `a` у `chewieQuote`. Ваш регулярний вираз не потребує маркерів чи класів символів та не може збігатися з іншими лапками.

# --hints--

Ваш регулярний вираз`chewieRegex` має використовувати символ `*` задля пошуку збігів нуля чи більше `a`-символів.

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

У вашому регулярному виразі `chewieRegex` має збігатися 16 символів із рядком `chewieQuote`.

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

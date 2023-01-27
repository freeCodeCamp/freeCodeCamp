---
id: 587d7db4367417b2b2512b93
title: Як знайти більше одного збігу
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

До цього ви могли вилучати або шукати шаблон лише один раз.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

Тут `match` видасть `["Repeat"]`.

Щоб шукати або вилучати шаблон більше одного разу, ви можете використовувати прапорець глобального пошуку: `g`.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

І в цьому випадку `match` видасть значення `["Repeat", "Repeat", "Repeat"]`

# --instructions--

Знайдіть і вилучіть обидва слова `Twinkle` з рядка `twinkleStar` за допомогою регулярного виразу `starRegex`.

**Примітка**  
Ви можете мати декілька прапорців у вашому регулярному виразі, як у `/search/gi`

# --hints--

Ваш регулярний вираз `starRegex` повинен використовувати глобальний прапорець `g`

```js
assert(starRegex.flags.match(/g/).length == 1);
```

Ваш регулярний вираз `starRegex` повинен використовувати прапорець без урахування регістру `i`

```js
assert(starRegex.flags.match(/i/).length == 1);
```

Ваш збіг повинен відповідати обидвом випадкам, у яких трапляється слово `Twinkle`

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

Ваш збіг `result` повинен містити в собі два елементи.

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```

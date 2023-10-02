---
id: 587d7dba367417b2b2512ba8
title: Пошук можливого символа
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

Іноді у потрібних вам шаблонах можуть бути частини, які, можливо, не існують. Однак їх всеодно важливо пошукати.

Ви можете вказати можливу наявність елемента знаком запитання `?`. Таким чином ви зможете перевірити наявність попереднього елемента. Вважайте, що цей символ вказує на те, що елемент перед ним необов’язковий.

Наприклад, в американській та британській англійській мові є незначні відмінності правопису, і ви можете скористатися знаком запитання, щоб відповідати обом системам написання.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

Обидва виклики методу `test` повернуть `true`.

# --instructions--

Змініть регулярний вираз `favRegex`, щоб він збігався з американською (`favorite`) та британською (`favourite`) версіями слова.

# --hints--

Ваш регулярний вираз має використати необов’язковий символ `?`.

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

Ваш регулярний вираз повинен збігатися з рядком `favorite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

Ваш регулярний вираз повинен збігатися з рядком `favourite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

Ваш регулярний вираз не повинен збігатися з рядком `fav`

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```

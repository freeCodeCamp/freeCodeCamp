---
id: 587d7dba367417b2b2512ba8
title: Перевірка на все або нічого
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

Іноді шаблони, які ви хочете знайте, можуть мати частини, які можуть або існувати або ні. Однак може бути важливо все-таки перевірити їх.

Ви можете вказати можливу наявність елемента за допомогою знаку питання, `?`. Таким чином ви зможете перевірити відсутність або наявність одного з попередніх елементів. Вважайте, що цей символ вказує на те, що попередній елемент необов'язковий.

Наприклад, в американській та британській англійській мові є незначні відмінності правопису, і ви можете скористатися знаком питання, щоб відповідати обом системам орфографії.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

У результаті використання обох методів `test` ви отримаєте `true`.

# --instructions--

Змініть регулярний вираз `favRegex` так, аби він відповідав американському (`favorite`) та британському (`favourite`) варіанту написання слова.

# --hints--

Ваш регулярний вираз повинен використовувати необов'язковий символ `?`.

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

---
id: 587d7dbb367417b2b2512bab
title: Пошук та заміна за допомогою груп захоплення
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

Пошук корисний. Проте ви можете зробити пошук ще ефективнішим, коли він також змінюватиме (або замінюватиме) текст, для якого ви шукаєте збіг.

Ви можете шукати і замінювати текст у рядку, застосовуючи `.replace()` до рядка. Першим параметром `.replace()` є шаблон регулярного виразу, який ви хочете знайти. Другим параметром є рядок для заміни збігу або функції для виконання чогось.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

Виклик `replace` поверне рядок `The sky is blue.`.

Ви можете також отримати доступ до груп захоплення в рядку для заміни за допомогою знаку долара (`$`).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

Виклик `replace` поверне рядок `Camp Code`.

# --instructions--

Напишіть регулярний вираз `fixRegex`, використовуючи три групи захоплення, які будуть шукати кожне слово в рядку `one two three`. Потім оновіть змінну `replaceText`, щоб замінити `one two three` на рядок `three two one` і призначити результат до змінної `result`. Переконайтеся, що ви використовуєте групи захоплення в рядку заміни за допомогою знака долара (`$`).

# --hints--

Використайте `.replace()` для пошуку та заміни.

```js
assert(code.match(/\.replace\(.*\)/));
```

Ваш регулярний вираз має замінити рядок `one two three` на рядок `three two one`

```js
assert(result === 'three two one');
```

Не змінюйте останній рядок.

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` має використати принаймні три групи захоплення.

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` має використати підрядки в дужках (тобто n-ний підрядок $n відповідає n-ній групі захоплення).

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
```

# --seed--

## --seed-contents--

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```

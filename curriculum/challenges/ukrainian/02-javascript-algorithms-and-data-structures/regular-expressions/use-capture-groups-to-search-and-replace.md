---
id: 587d7dbb367417b2b2512bab
title: Використання груп захоплення для пошуку та заміни
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

Пошук корисний. Проте ви можете зробити пошук ще ефективнішим, коли він також змінюватиме (або замінюватиме) текст, для якого ви шукаєте збіг.

Ви можете шукати і замінювати текст у рядку, застосовуючи `.replace()` до рядка. Першими вхідними даними для `.replace()` є регулярний вираз для шаблону, який ви хочете знайти. Другим параметром є рядок для заміни збігу або функції для виконання чогось.

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

Напишіть регулярний вираз `fixRegex`, використовуючи три групи захоплення, які будуть шукати кожне слово в рядку `one two three`. Потім оновіть змінну `replaceText`, щоб замінити `one two three` на рядок `three two one` і призначити результат до змінної `result`. Переконайтеся, що ви використовуєте групи захоплення в рядку заміни, використовуючи синтаксис знаку долара (`$`).

# --hints--

Використайте `.replace()` для пошуку та заміни.

```js
assert(code.match(/\.replace\(.*\)/));
```

Регулярний вираз повинен змінити рядок `one two three` на рядок `three two one`

```js
assert(result === 'three two one');
```

Не можна змінювати останній рядок.

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` має використовувати принаймні три групи захоплення.

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` має захопити у дужки рядок або рядки із підзбігами (напр. n-ний підзбіг у дужках, $n, відповідає n-ній групі захоплення).

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

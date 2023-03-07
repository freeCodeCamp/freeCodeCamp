---
id: 587d7b84367417b2b2512b37
title: Змішане використання одинарних та подвійних лапок
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

JavaScript дозволяє використання одинарних (`'`) і подвійних (`"`) лапок, щоб оголосити рядок. Вибір між ними залежить від особистих уподобань, проте існують і певні винятки.

Чудово мати два варіанти, якщо у рядку наявні скорочення або інша частина тексту в лапках. Лише будьте уважними, аби не закрити рядок занадто рано, що може призвести до помилки в синтаксисі.

Ось деякі приклади змішаного використанням лапок:

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

Перші два варіанти правильні, а ось третій має помилку.

Звичайно, використання лише одного виду лапок теж є правильним. Уникнути лапок всередині рядка можна за допомогою символу зворотної косої риски (`\`):

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

Виправте рядок так, щоб він використовував різні типи лапок для значення `href` або уникав вже наявні. Залиште подвійні лапки навколо цілого рядка.

# --hints--

Ваш код повинен виправити лапки навколо значення `href` `#Home`, змінюючи або уникаючи їх.

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

Ваш код повинен залишити подвійні лапки навколо цілого рядка.

```js
assert(code.match(/"<p>.*?<\/p>";/g));
```

# --seed--

## --seed-contents--

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

# --solutions--

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```

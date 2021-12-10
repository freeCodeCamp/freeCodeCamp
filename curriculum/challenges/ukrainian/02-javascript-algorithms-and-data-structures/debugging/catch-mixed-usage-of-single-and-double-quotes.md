---
id: 587d7b84367417b2b2512b37
title: Знаходження змішаного використання одинарних та подвійних лапок
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

У JavaScript дозволяє використання як одинарних (`'`), так і подвійних (`"`) лапок, щоб задати рядок. Вибір між ними залежить від особистих уподобань, проте існують і певні винятки.

Обирати між ними - справді чудово, якщо у рядку наявні скорочення або ж інша його частина вже знаходиться в лапках. Лише будьте уважними, аби не закрити рядок занадто рано, що може призвести до помилки в синтаксисі.

Ось деякі приклади змішаного використанням лапок:

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

Перші два варіанти є правильними, але третій містить помилку.

Звичайно, використання лише одного виду лапок теж є правильним. Уникнути повторення лапок можна використовуючи символ зворотної косої риски (`\`):

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

Виправіть рядок шляхом або використання у ньому різних типів лапок для значення `href`, або уникнувши застосування вже наявних. Дотримуйтесь використання подвійних лапок навколо всього рядка.

# --hints--

Ваш код має виправляти використання лапок навколо значення `href` у `#Home` шляхом зміни їхнього типу або уникаючи їх вжитку.

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

Ваш код має дотримуватися використання подвійних лапок навколо всього рядка.

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

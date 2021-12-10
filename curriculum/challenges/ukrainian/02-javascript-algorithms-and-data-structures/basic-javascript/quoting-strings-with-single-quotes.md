---
id: 56533eb9ac21ba0edf2244b4
title: Цитування рядків з одинарними лапками
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

Значення <dfn>String</dfn> у JavaScript може бути записане з одинарними чи подвійними лапками, якщо ті ж самі лапки використовуються на початку та в кінці. На відміну від інших мов програмування, одинарні і подвійні лапки працюють однаково в JavaScript.

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

Причиною використовувати один тип лапок поруч з іншим є використання обидвох типів лапок у рядку. Наприклад, коли ви хочете відтворити розмову у рядку і оформити цю розмову лапками. Або ж, коли ви зберігаєте тег `<a>` з різними атрибутами в лапках і все в межах одного рядка.

```js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

Однак проблема виникає тоді, коли вам потрібно використати зовнішні лапки в межах рядка. Пам'ятайте, що на початку і в кінці рядка використовуються ті ж самі лапки. Але якщо ви використаєте ці лапки всередині рядка, то рядок закінчиться швидше і це призведе до помилки.

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

В цього випадку `badStr` покаже помилку.

У <dfn>goodStr</dfn> вище, можна спокійно використовувати лапки, додавши зворотну скісну риску `\` як екранований символ.

**Примітка:** Зворотну скісну риску `\` не слід плутати з скісною рискою `/`. Вони мають різні функції.

# --instructions--

Змініть поданий рядок на рядок з одинарними лапками на початку і в кінці та не використовуйте екрановані символи.

Зараз тег `<a>` у рядку може використовувати всюди подвійні лапки. Вам потрібно буде змінити зовнішні лапки на одинарні лапки, щоб видалити екрановані символи.

# --hints--

Вам слід видалити усі зворотні скісні риски (`\`).

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

У вас повинні бути дві одинарні лапки `'` і чотири подвійні лапки `"`.

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --after-user-code--

```js
(function() { return "myStr = " + myStr; })();
```

## --seed-contents--

```js
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```

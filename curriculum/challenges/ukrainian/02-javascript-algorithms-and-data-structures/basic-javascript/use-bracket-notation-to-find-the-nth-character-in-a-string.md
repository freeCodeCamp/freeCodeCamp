---
id: bd7123c9c450eddfaeb5bdef
title: Використовуйте Дужкову Нотацію для Пошуку N-го Символу в Рядку
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

Ви можете також використовувати <dfn>дужкову нотацію</dfn>, щоб отримати символ на інших позиціях в рядку.

Пам'ятайте, що комп'ютер починає рахувати з `0`, тому перший символ є в дійсності нульовим.

Наприклад:

```js
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` повинна мати значення рядка `d`.

# --instructions--

Спробуйте встановити `thirdLetterOfLastName` на рівні третьої літери змінної `lastName`, використовуючи дужкову нотацію.

**Підказка:** Спробуйте подивитися на приклад вище, якщо застрягли.

# --hints--

Змінна `thirdLetterOfLastName` повинна мати значення `v`.

```js
assert(thirdLetterOfLastName === 'v');
```

Вам слід використовувати дужкову нотацію.

```js
assert(code.match(/thirdLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
```

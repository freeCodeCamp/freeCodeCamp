---
id: bd7123c9c450eddfaeb5bdef
title: Дужкова нотація для пошуку n-го символа рядка
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

Ви також можете використати <dfn>дужкову нотацію</dfn>, щоб отримати символ на інших позиціях рядка.

Пам’ятайте, що комп’ютер починає рахувати з `0`, тому насправді першим символом є нульовий.

Приклад:

```js
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` матиме значення рядка `d`.

# --instructions--

Спробуйте встановити `thirdLetterOfLastName`, щоб вона дорівнювала третій літері змінної `lastName`, використовуючи дужкову нотацію.

**Підказка:** якщо застрягли, перегляньте вищеподаний приклад.

# --hints--

Змінна `thirdLetterOfLastName` повинна мати значення `v`.

```js
assert(thirdLetterOfLastName === 'v');
```

Ви повинні використати дужкову нотацію.

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

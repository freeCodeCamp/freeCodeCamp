---
id: bd7123c9c451eddfaeb5bdef
title: Дужкова нотація для пошуку останнього символа рядка
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

Щоб отримати останню літеру рядка, можна відняти одиницю від довжини рядка.

Наприклад, якщо `const firstName = "Ada"`, ви можете отримати значення останньої літери, використавши `firstName[firstName.length - 1]`.

Приклад:

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` матиме значення рядка `a`.

# --instructions--

Використайте <dfn>дужкову нотацію</dfn>, щоб знайти останній символ у змінній `lastName`.

**Підказка:** якщо застрягли, перегляньте вищеподаний приклад.

# --hints--

`lastLetterOfLastName` має бути літера `e`.

```js
assert(lastLetterOfLastName === 'e');
```

Ви повинні використати `.length`, щоб отримати останню літеру.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
```

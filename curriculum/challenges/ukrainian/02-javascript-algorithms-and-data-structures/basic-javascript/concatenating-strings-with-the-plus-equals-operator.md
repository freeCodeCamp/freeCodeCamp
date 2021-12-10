---
id: 56533eb9ac21ba0edf2244b8
title: Об'єднання рядків за допомогою оператора "плюс дорівнює"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

Ми можемо також використовувати оператор `+=`, щоб <dfn>з'єднувати</dfn> рядок з кінцем уже існуючого рядка змінної. Або ще для того, щоб розділяти довгий рядок над кількома рядками.

**Примітка:** Зверніть увагу на пробіли. Під час об'єднання між рядками відсутні пробіли, вам потрібно буде додати їх самостійно.

Наприклад:

```js
let ourStr = "I come first. ";
ourStr += "I come second.";
```

`ourStr` зараз має значення рядка `I come first. I come second.`.

# --instructions--

Введіть `myStr` над кількома рядками, об'єднуючи ці два рядки: `This is the first sentence.` і `This is the second sentence.`. Використовуйте оператор `+=`. Використовуйте `+=` оператор, подібний до того, як показно в прикладі, й обов'язково зверніть увагу на наявність пробіл між рядками. Почніть з призначення першого рядка `myStr`, а потім додайте до другого рядка.

# --hints--

`myStr` повинен мати значення рядка `This is the first sentence. This is the second sentence.`

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

Для створення `myStr` потрібно використовувати `+=`.

```js
assert(code.match(/myStr\s*\+=\s*(["']).*\1/g));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
let myStr;
```

# --solutions--

```js
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

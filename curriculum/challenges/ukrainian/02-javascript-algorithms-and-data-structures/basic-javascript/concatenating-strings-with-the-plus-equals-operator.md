---
id: 56533eb9ac21ba0edf2244b8
title: Об’єднання рядків за допомогою оператора +=
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

Ми можемо також використати оператор `+=`, щоб <dfn>об’єднати</dfn> рядок з кінцем наявної змінної рядка. Це корисно ще й для того, щоб розділити довгий рядок на декілька малих.

**Примітка:** зверніть увагу на пробіли. Конкатенація не додає пробіли між об’єднаними рядками, вам потрібно додавати їх самостійно.

Приклад:

```js
let ourStr = "I come first. ";
ourStr += "I come second.";
```

Тепер `ourStr` має значення рядка `I come first. I come second.`.

# --instructions--

Побудуйте `myStr` з декількох рядків, об’єднавши ці два рядки: `This is the first sentence.` та `This is the second sentence.`, використовуючи оператор `+=`. Використайте оператор `+=` подібно до того, як показно в прикладі, та не забудьте використати пробіл між двома рядками. Почніть з присвоєння першого рядка до `myStr`, а потім додайте другий рядок.

# --hints--

`myStr` повинен містити один пробіл між двома рядками.

```js
assert(/sentence\. This/.test(myStr));
```

`myStr` повинен мати значення рядка `This is the first sentence. This is the second sentence.`

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

Ви повинні використати оператор `+=`, щоб побудувати `myStr`.

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

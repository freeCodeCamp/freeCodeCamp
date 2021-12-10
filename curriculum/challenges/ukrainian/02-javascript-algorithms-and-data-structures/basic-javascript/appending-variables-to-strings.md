---
id: 56533eb9ac21ba0edf2244ed
title: Додавання змінних до рядків
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

Так само, як ми можемо створити рядок з декількох рядків за допомогою <dfn>literals</dfn>, ми також можемо додати змінні до рядка, використовуючи знаки "плюс" та "дорівнює" (`+=`).

Наприклад:

```js
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

`ourStr` матиме значення `freeCodeCamp is awesome!`.

# --instructions--

Встановіть `someAdjective` у рядку із щонайменше 3 символів і додайте його до `myStr`, використовуючи знаки `+=`.

# --hints--

`someAdjective` повинен бути встановлений у рядку, який складається із не менше, ніж 3 символів.

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

Вам потрібно додати `someAdjective` до `myStr`, використовуючи знаки `+=`.

```js
assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof someAdjective === 'string') {
    output.push('someAdjective = "' + someAdjective + '"');
  } else {
    output.push('someAdjective is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

## --seed-contents--

```js
// Change code below this line
const someAdjective = "";
let myStr = "Learning to code is ";
```

# --solutions--

```js
const someAdjective = "neat";
let myStr = "Learning to code is ";
myStr += someAdjective;
```

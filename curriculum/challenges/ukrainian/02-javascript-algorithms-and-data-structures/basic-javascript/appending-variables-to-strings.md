---
id: 56533eb9ac21ba0edf2244ed
title: Додавання змінних до рядків
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

Ми можемо створити рядок з декількох рядкових <dfn>літералів</dfn>, і так само ми можемо додати змінні до рядка, використовуючи оператор додавання з присвоєнням (`+=`).

Приклад:

```js
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

`ourStr` матиме значення `freeCodeCamp is awesome!`.

# --instructions--

Встановіть `someAdjective` на рядок з принаймні 3 символів та додайте його до `myStr`, використовуючи оператор `+=`.

# --hints--

`someAdjective` має бути встановлений як рядок з принаймні 3 символів.

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

Ви повинні додати `someAdjective` до `myStr`, використовуючи оператор `+=`.

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

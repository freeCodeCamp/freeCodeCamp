---
id: 56533eb9ac21ba0edf2244b9
title: Створення рядків зі змінними
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

Іноді потрібно побудувати рядок. За допомогою оператора об’єднання (`+`) можна вставити одну або більше змінних у рядок, який ви будуєте.

Приклад:

```js
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` матиме значення рядка `Hello, our name is freeCodeCamp, how are you?`.

# --instructions--

Встановіть `myName` на рядок, рівний вашому імені, і побудуйте `myStr` із `myName` між рядками `My name is` та `and I am well!`

# --hints--

`myName` повинен бути встановлений на рядок з принаймні трьох символів.

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

Ви повинні використати два оператори `+`, щоб побудувати `myStr` із `myName` всередині.

```js
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
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
// Only change code below this line
const myName = "";
const myStr = "";
```

# --solutions--

```js
const myName = "Bob";
const myStr = "My name is " + myName + " and I am well!";
```

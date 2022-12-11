---
id: 56533eb9ac21ba0edf2244b9
title: Створення рядків зі змінними
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

Sometimes you will need to build a string. Використовуючи оператор об'єднання (`+`), можна вставити одну або декілька змінних у рядок, який ви створюєте.

Наприклад:

```js
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` матиме значення рядка `Hello, our name is freeCodeCamp, how are you?`.

# --instructions--

Вставте `myName` у рядок з вашим іменем і створіть `myStr` з `myName` між рядками `My name is` і `and I am well!`

# --hints--

`myName` потрібно вставити у рядок, де є принаймні три символи.

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

Ви маєте використати два оператори `+` для створення `myStr` з `myName` всередині нього.

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

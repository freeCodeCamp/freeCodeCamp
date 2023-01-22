---
id: 587d7b87367417b2b2512b41
title: Оголосіть змінну, доступну лише для читання, з ключовим словом Const
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

Ключове слово `let` є не єдиним новим способом оголосити змінну. В ES6 можливо також оголосити змінні, використовуючи ключове слово `const`.

У `const` є ті ж круті функції, що й в `let` з приємним бонусом — тепер змінні, оголошені за допомогою `const`, доступні лише для читання. Вони мають константне значення. Тобто, як тільки змінна стає призначеною `const`, її вже неможливо призначити знову:

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

Консоль показуватиме помилку через перепризначення значення `FAV_PET`.

Змінні, які не передбачають перепризначення, слід називати, використовуючи ключове слово `const`. Це може знадобитися, якщо ви випадково спробуєте перепризначити змінну, яка повинна бути константною.

**Note:** It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). You will learn more about objects, arrays, and immutable and mutable values in later challenges. Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers.

# --instructions--

Change the code so that all variables are declared using `let` or `const`. Use `let` when you want the variable to change, and `const` when you want the variable to remain constant. Also, rename variables declared with `const` to conform to common practices. Do not change the strings assigned to the variables.

# --hints--

`var` should not exist in your code.

```js
assert.notMatch(code, /var/g);
```

You should change `fCC` to all uppercase.

```js
assert.match(code, /(FCC)/);
assert.notMatch(code, /(fCC)/);
```

`FCC` should be a constant variable declared with `const`.

```js
assert.match(code, /const\s+FCC/);
```

The string assigned to `FCC` should not be changed.

```js
assert.equal(FCC, 'freeCodeCamp');
```

`fact` should be declared with `let`.

```js
assert.match(code, /(let\s+fact)/g);
```

`console.log` should be changed to print the `FCC` and `fact` variables.

```js
assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```

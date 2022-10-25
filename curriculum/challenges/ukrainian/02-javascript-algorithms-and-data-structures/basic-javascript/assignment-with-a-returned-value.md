---
id: 56533eb9ac21ba0edf2244c3
title: Призначення з поверненим значенням
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

If you'll recall from our discussion about <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">Storing Values with the Assignment Operator</a>, everything to the right of the equal sign is resolved before the value is assigned. Це означає, що ми можемо взяти повернене значення функції та присвоїти її змінній.

Припустимо, у нас уже є визначена функція `sum`, яка додає два числа, тоді:

```js
ourSum = sum(5, 12);
```

вона називатиметься функцією `sum`, яка повертає значення `17` і призначає її змінній `ourSum`.

# --instructions--

Назвіть функцію `processArg` з аргументом `7` і присвойте її повернене значення змінній `processed`.

# --hints--

`processed` повинне мати значення `2`

```js
assert(processed === 2);
```

`processArg` потрібно призначити `processed`

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){return "processed = " + processed})();
```

## --seed-contents--

```js
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```

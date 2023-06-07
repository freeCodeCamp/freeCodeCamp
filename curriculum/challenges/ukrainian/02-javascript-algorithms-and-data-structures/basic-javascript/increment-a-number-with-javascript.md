---
id: 56533eb9ac21ba0edf2244ac
title: Інкремент числа з JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
dashedName: increment-a-number-with-javascript
---

# --description--

Ви можете легко <dfn>збільшити</dfn> або додати одиницю до змінної за допомогою оператора `++`.

```js
i++;
```

те й саме, що

```js
i = i + 1;
```

**Примітка:** весь рядок стає `i++;`, усуваючи потребу в знаку рівності.

# --instructions--

Змініть код, щоб використати оператор `++` на `myVar`.

# --hints--

`myVar` має дорівнювати `88`.

```js
assert(myVar === 88);
```

Ви не повинні використовувати оператор присвоєння.

```js
assert(
  /let\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2})/.test(code)
);
```

Ви повинні використати оператор `++`.

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

Не змінюйте код над зазначеним коментарем.

```js
assert(/let myVar = 87;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 87;

// Only change code below this line
myVar = myVar + 1;
```

# --solutions--

```js
let myVar = 87;
myVar++;
```

---
id: 56533eb9ac21ba0edf2244ac
title: Збільшення Числа з JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
dashedName: increment-a-number-with-javascript
---

# --description--

Ви можете легко <dfn>збільшити</dfn> або додати до змінної з оператором `++`.

```js
i++;
```

є еквівалентом

```js
i = i + 1;
```

**Note:** Весь рядок стає `i++;`, усуваючи потребу в знаку рівності.

# --instructions--

Змініть код, щоб використовувати оператор `++` у `myVar`.

# --hints--

`myVar` повинен дорівнювати `88`.

```js
assert(myVar === 88);
```

Ви не повинні використовувати оператор присвоєння.

```js
assert(
  /let\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code)
);
```

Вам слід використовувати оператор `++`.

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

Не слід змінювати код над зазначеним коментарем.

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

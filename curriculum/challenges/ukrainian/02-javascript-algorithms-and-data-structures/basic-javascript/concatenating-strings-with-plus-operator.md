---
id: 56533eb9ac21ba0edf2244b7
title: Об’єднання рядків за допомогою оператора +
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

Оператором <dfn>об’єднання (конкатенації)</dfn> у JavaScript називають оператор `+`, який використовується зі значенням `String`. З рядків можна створити новий рядок, <dfn>об’єднавши</dfn> їх.

**Приклад**

```js
'My name is Alan,' + ' I concatenate.'
```

**Примітка:** зверніть увагу на пробіли. Конкатенація не додає пробіли між об’єднаними рядками, вам потрібно додавати їх самостійно.

Приклад:

```js
const ourStr = "I come first. " + "I come second.";
```

На консолі відображатиметься рядок `I come first. I come second.`.
# --instructions--

Побудуйте `myStr` з рядків `This is the start.` та `This is the end.`, використовуючи оператор `+`. Не забудьте використати пробіл між двома рядками.

# --hints--

`myStr` повинен містити один пробіл між двома рядками.

```js
assert(/start\. This/.test(myStr));
```

`myStr` повинен мати значення рядка `This is the start. This is the end.`

```js
assert(myStr === 'This is the start. This is the end.');
```

Ви повинні використати оператор `+`, щоб побудувати `myStr`.

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

Ви повинні використати ключове слово `const`, щоб створити `myStr`.

```js
assert(/const\s+myStr/.test(code));
```

Ви повинні присвоїти результат до змінної `myStr`.

```js
assert(/myStr\s*=/.test(code));
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
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "This is the start. " + "This is the end.";
```

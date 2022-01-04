---
id: 56533eb9ac21ba0edf2244ba
title: Розуміння нестійкості рядка
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

У JavaScript, `String` значення <dfn>immutable</dfn>, означає, що їх не можна буде змінити після створення.

Наприклад, у такому коді:

```js
let myStr = "Bob";
myStr[0] = "J";
```

неможливо змінити значення `myStr` на `Job`, тому що вміст `myStr` не може бути зміненим. Зауважте, що *not* означає, що `myStr` не можна змінити, так само як окремі елементи в коді <dfn>string literal</dfn>. Єдиний спосіб змінити `myStr` - це додати новий рядок:

```js
let myStr = "Bob";
myStr = "Job";
```

# --instructions--

Виправте призначення `myStr` так, щоб код містив рядок зі значенням `Hello World`, використовуючи підхід, показаний вище.

# --hints--

`myStr` має мати значення рядка `Hello World`.

```js
assert(myStr === 'Hello World');
```

Не слід змінювати код над зазначеним коментарем.

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
let myStr = "Jello World";
myStr = "Hello World";
```

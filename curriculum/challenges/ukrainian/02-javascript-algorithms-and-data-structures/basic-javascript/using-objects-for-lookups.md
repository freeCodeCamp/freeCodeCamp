---
id: 56533eb9ac21ba0edf2244ca
title: Використання об’єктів для пошуків
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

Об’єкти можна вважати сховищем ключів/значень, як словники. Якщо ви маєте табличні дані, для пошуку значень краще використати об’єкт, а не інструкцію `switch` чи ланцюжок `if/else`. В такому випадку найкраще, якщо ви знаєте, що ваші вхідні дані обмежені до певного діапазону.

Ось приклад об’єкта-публікації:

```js
const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
```

`articleAuthor` є рядком `Kaashan Hussain`, `articleLink` є рядком `https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/`, а `valueLookup` є рядком `How to create objects in JavaScript`.

# --instructions--

Перетворіть інструкцію switch на об’єкт під назвою `lookup`. Використайте його, щоб знайти `val` та призначати пов’язаний рядок до змінної `result`.

# --hints--

`phoneticLookup("alpha")` має дорівнювати рядку `Adams`

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` має дорівнювати рядку `Boston`

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` має дорівнювати рядку `Chicago`

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` має дорівнювати рядку `Denver`

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` має дорівнювати рядку `Easy`

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` має дорівнювати рядку `Frank`

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` має дорівнювати `undefined`

```js
assert(typeof phoneticLookup('') === 'undefined');
```

Ви не повинні змінювати інструкцію `return`

```js
assert(code.match(/return\sresult;/));
```

Ви не повинні використовувати інструкції `case`, `switch` або `if`

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```

# --solutions--

```js
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```

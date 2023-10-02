---
id: 56533eb9ac21ba0edf2244ca
title: استخدام الكائنات للبحث (Using Objects for Lookups)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

يمكن اعتبار الكائنات كمخزن بطريقة هُوِيَّة/قيمة، مثل القاموس. إذا كانت لديك بيانات جدولية، فيمكنك استخدام كائن للبحث عن القيم بدلاً من عبارة `switch` أو تسلسل `if/else`. هذا مفيد للغاية عندما تعرف أن بيانات الإدخال الخاصة بك محدودة بمدى معين.

فيما يلي مثال على مقالة بهيئة كائن (object):

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

يكون `articleAuthor` مقطع `Kaashan Hussain`، ويكون `articleLink` مقطع `https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/`، ويكون `valueLookup` مقطع `How to create objects in JavaScript`.

# --instructions--

حوّل تعبير switch إلى كائن يسمى `lookup`. استخدمه للبحث عن `val` وتعيين المقطع المرتبط بمتغير `result`.

# --hints--

يجب أن تساوي `phoneticLookup("alpha")` مقطع `Adams`

```js
assert(phoneticLookup('alpha') === 'Adams');
```

يجب أن تساوي `phoneticLookup("bravo")` مقطع `Boston`

```js
assert(phoneticLookup('bravo') === 'Boston');
```

يجب أن تساوي `phoneticLookup("charlie")` مقطع `Chicago`

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

يجب أن تساوي `phoneticLookup("delta")` مقطع `Denver`

```js
assert(phoneticLookup('delta') === 'Denver');
```

يجب أن تساوي `phoneticLookup("echo")` مقطع `Easy`

```js
assert(phoneticLookup('echo') === 'Easy');
```

يجب أن تساوي `phoneticLookup("foxtrot")` مقطع `Frank`

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

يجب أن تساوي `phoneticLookup("")` كلمة `undefined`

```js
assert(typeof phoneticLookup('') === 'undefined');
```

لا يجب عليك تعديل تعبير `return`

```js
assert(code.match(/return\sresult;/));
```

لا يجب عليك استخدام تعبيرات `case`, أو `switch`, أو `if`

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

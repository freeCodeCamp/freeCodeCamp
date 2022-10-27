---
id: 587d7b8d367417b2b2512b5b
title: Learn About Functional Programming
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

الـ Functional programming هي أسلوب للبرمجة تكون فيه الحلول عبارة عن functions بسيطة ومنعزلة، بدون أي تأثيرات جانبية خارج نطاق الدالة: `INPUT -> PROCESS -> OUTPUT`

Functional programming تتعلق بما يلي:

1) Isolated functions - لا يوجد اعتماد على حالة البرنامج، الذي يشمل المتغيرات الـ global القابلة للتغيير

2) Pure functions - نفس الإدخال يعطي دائمًا نفس الإخراج

(3) الـ functions ذات التأثيرات الجانبية المحدودة - أي تغييرات أو تحولات في حالة البرنامج خارج الـ function تخضع للتحكم الدقيق

# --instructions--

يصادف أن أعضاء freeCodeCamp يحبون الشاي.

في محرر الكود، تم بالفعل تعريف الدوال `prepareTea` و `getTea` من أجلك. قم باستدعاء دالة `getTea` للحصول على 40 كوب من الشاي للفريق، وتخزينها في متغير `tea4TeamFCC`.

# --hints--

يجب أن يحتوي متغير `tea4TeamFCC` على 40 كوب من الشاي للفريق.

```js
assert(tea4TeamFCC.length === 40);
```

يجب أن يحتوي متغير `tea4TeamFCC` على أكواب الشاي الأخضر.

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 
```

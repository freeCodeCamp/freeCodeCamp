---
id: 587d7b8d367417b2b2512b5b
title: تعلم عن البرمجة الوظيفية (Functional)
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

يكون البرمجة الوظيفية (Functional) أسلوب للبرمجة فيه الحلول من الوظائف (functions) بسيطة ومنعزلة، دون أي تأثيرات جانبية خارج نطاق الوظيفة: `INPUT -> PROCESS -> OUTPUT`

تتعلق البرمجة الوظيفية (Functional) بما يلي:

1) وظائف منعزلة (Isolated functions) - لا تعتمد على حالة البرنامَج، الذي يشمل المتغيرات الشاملة (global) القابلة للتغيير

2) الوظائف الخالصة (Pure functions) - نفس الإدخال يعطي دائمًا نفس الإخراج

(3) الوظائف (functions) ذات التأثيرات الجانبية المحدودة - أي تغييرات أو تحولات في حالة البرنامَج خارج الوظيفة (function) تخضع للتحكم الدقيق

# --instructions--

يصادف أن أعضاء freeCodeCamp يحبون الشاي.

في محرر الكود، تم تعريف وظيفتان (functions) تسمى `prepareTea` و `getTea` من أجلك فعلًا. أستدعي وظيفة `getTea` للحصول على 40 كوب من الشاي للفريق، وتخزينها في متغير `tea4TeamFCC`.

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

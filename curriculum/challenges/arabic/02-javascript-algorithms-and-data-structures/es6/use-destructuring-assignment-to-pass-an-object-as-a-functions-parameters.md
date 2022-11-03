---
id: 587d7b8a367417b2b2512b4d
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

في بعض الحالات، يمكنك تفصيص (destructure) الـ object في argument الـ function نفسها.

انظر الي الكود أدناه:

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

يؤدي هذا فعلياً إلى destructing الـ object الذي يتم إرساله إلى الـ function. يمكن القيام بذلك أيضًا في نفس المكان:

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

عندما يتم تمرير `profileData` إلى الـ function أعلاه، يتم تفصيص القيم من معلمة (parameter) الـ function لاستخدامها داخل الـ function.

# --instructions--

استخدم destructuring assignment داخل الـ argument للدالة `half` لإرسال `max` و `min` داخل الـ function.

# --hints--

`stats` يجب أن تكون `object`.

```js
assert(typeof stats === 'object');
```

`half(stats)` يجب أن تكون `28.015`

```js
assert(half(stats) === 28.015);
```

وينبغي استخدام الـ Destructuring.

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

وينبغي استخدام Destructured parameter.

```js
assert(!code.match(/stats\.max|stats\.min/));
```

# --seed--

## --seed-contents--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
```

# --solutions--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```

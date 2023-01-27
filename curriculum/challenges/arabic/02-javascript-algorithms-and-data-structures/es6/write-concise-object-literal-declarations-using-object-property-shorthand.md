---
id: 587d7b8a367417b2b2512b4f
title: أكتب إعلانات واضح للكائن (Object) باستعمال خاصية تختصر الكائن
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

يضيف ES6 بعض الدعم اللطيف لتعريف الكائنات بسهولة.

ضع في اعتبارك الكود التالي:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

يكون `getMousePosition` وظيفة (function) بسيطة ترجع كائن (object) يحتوي على خاصيتين. يوفر ES6 بناء الجملة السهل لإزالة الازدواجية في كتابة `x: x`. يمكنك ببساطة كتابة `x` مرة واحدة، وسيتم تحويله إلى`x: x` (أو ما يعادلها من شيء) خلف الكواليس. إليك نفس الوظيفة (function) من الأعلى, معاد كتابتها لاستخدام هذا التشكيل (syntax) الجديد:

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

استخدم خاصية الكائن المختصرة مع حروف الكائن لإنشاء كائن بخصائص `name`, و `age`, و `gender`.

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` يجب أن يرجع `{name: "Zodiac Hasbro", age: 56, gender: "male"}`.

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

يجب أن لا يستخدم الكود `key:value`.

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```
